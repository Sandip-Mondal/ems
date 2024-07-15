import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { MongooseModelModule } from './entity/mongoose-model.module';
//import { SuperAdmin } from './superadmin/superadmin.module';
import { AuthUser } from './auth/auth.module';
import { AdminModule } from './admin/admin.module';
import { ApiModule } from './api/api.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env'],
      cache: true,
      isGlobal: true,
      load: [],
      expandVariables: true
    }),

    DatabaseModule,
    MongooseModelModule,
    AdminModule,
    AuthUser,
    ApiModule


  ],
  controllers: [],
  providers: [],
  exports: []
})
export class AppModule { }
