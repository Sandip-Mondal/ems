import { CanActivate, ExecutionContext, HttpStatus, Injectable, NestMiddleware, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { InjectModel } from "@nestjs/mongoose";
import { Request, Response } from 'express';
import { Model } from "mongoose";
import { ADMIN_MODEL, admindocument } from "src/entity/admin.entity";

@Injectable()
export class AdminGuard implements CanActivate {
    constructor(
        private jwtservice: JwtService,
        @InjectModel(ADMIN_MODEL) private readonly users: Model<admindocument>
    ) { }
    async canActivate(context: ExecutionContext): Promise<boolean> {
        const ctx = context.switchToHttp();
        const response = ctx.getResponse<Response>();
        const request = ctx.getRequest<Request>();
        try {
            const cookie = request.cookies.Jwt;
            const verifyAdmin = await this.jwtservice.verifyAsync(cookie);
            const admin = await this.users.findOne({ _id: verifyAdmin._id, userkind: "Admin" });

            request["adminId"] = verifyAdmin._id;

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