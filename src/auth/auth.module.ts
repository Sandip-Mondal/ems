import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";



@Module({
    imports: [
        /*JwtModule.register({
            secret: "secret key",
            signOptions: {
                expiresIn: '1d'
            }
        })*/

        JwtModule.registerAsync({
            // imports:[ConfigModule] beacuse it is global
            useFactory: async (configService: ConfigService) => ({
                secret: configService.get<string>("ADMINTOKEN"),
                signOptions: {
                    expiresIn: '1d'
                }
            }),
            inject: [ConfigService],
            global:true,
        }),

    ],
    controllers: [AuthController],
    providers: [AuthService],
    exports: [JwtModule]
})


export class AuthUser { }