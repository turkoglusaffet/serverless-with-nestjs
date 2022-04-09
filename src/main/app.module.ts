import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmConfigService } from './config/typeorm/typeorm.service';
import { ApiModule } from './api/api.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './config/auth/auth.module';

@Module({
  imports: [AuthModule,
    ConfigModule.forRoot({  isGlobal: true }),
    TypeOrmModule.forRootAsync({ useClass: TypeOrmConfigService }),
    ApiModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
