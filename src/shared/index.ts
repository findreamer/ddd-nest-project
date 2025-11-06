import { Global, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import configuration from '../config';
import { JwtModule } from '@nestjs/jwt';

@Global()
@Module({
  imports: [
    // 导入 ConfigModule 并配置为全局模块
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      load: [configuration],
    }),

    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        console.log(process.env.NODE_ENV === 'development', ' =====> ');
        return {
          type: 'mysql',
          entities: [__dirname + '/**/*.entity{.ts,.js}'],
          ...configService.get('db.mysql'),
          autoLoadEntities: true,
          synchronize: process.env.NODE_ENV === 'development',
          logging: process.env.NODE_ENV === 'development',
        } as TypeOrmModuleAsyncOptions;
      },
    }),

    JwtModule.register({
      global: true,
      secret: 'fdfdzfd',
      signOptions: {
        // 过期时间7天
        expiresIn: '7d',
      },
    }),
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class SharedModule {}
