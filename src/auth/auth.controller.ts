import { Body, Controller, Req, Res, HttpStatus, Get, UseGuards, Post, Redirect, Header } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LoginDto } from "./dto/login_admin.dto";
import { Response, Request } from "express";
import { AuthGuard } from "src/guard/auth.guard";


@Controller("auth")
export class AuthController {

    constructor(private readonly auth: AuthService) { }

    @Get("userinfo")
    @UseGuards(AuthGuard)
    async autoLogin(@Req() req: Request,@Res({ passthrough: true }) res: Response) {
        //res.clearCookie("Jwt")
        return { errorCode: 0, userinfo: req["userinfo"] };
    }


    @Post("login")
    async Login(@Body() logininfo: LoginDto, @Res({ passthrough: true }) res: Response) {
        const getResponse = await this.auth.login(logininfo);
        if (getResponse.errorCode === 0) {
            res.cookie('Jwt', getResponse.jwt, {
                httpOnly: true,
                //secure: true,
                expires: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000),
            })
            return { errorCode: 0, userinfo: getResponse.user };
        }
        return getResponse;
    }

}