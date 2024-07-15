import { CanActivate, ExecutionContext, HttpStatus, Injectable, NestMiddleware, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { InjectModel } from "@nestjs/mongoose";
import { Request, Response } from 'express';
import { Model } from "mongoose";
import { USER_MODEL, userdocument } from "src/entity/user.entity";

@Injectable()
export class projectManagerGuard implements CanActivate {
    constructor(
        private jwtservice: JwtService,
        @InjectModel(USER_MODEL) private readonly users: Model<userdocument>,
    ) { }
    async canActivate(context: ExecutionContext): Promise<boolean> {
        const ctx = context.switchToHttp();
        const response = ctx.getResponse<Response>();
        const request = ctx.getRequest<Request>();
        try {
            const cookie = request.cookies.Jwt;
            const verifyAdmin = await this.jwtservice.verifyAsync(cookie);
            const admin = await this.users.findOne({
                _id: verifyAdmin._id,
                $or: [{ userkind: { $in: ["Admin", "SUPERADMIN"] } }, { $and: [{ userkind: "Employee" }, { role: "PROJECT_MANAGER" }] }]
            });
            request["team_lead"] = verifyAdmin._id;
            if (!admin) {
                throw new Error();
            }
            return true;
        }
        catch (err) {
            response.json({ message: "unauthorized", statusCode: HttpStatus.UNAUTHORIZED });
            return false;
        }
    }

}