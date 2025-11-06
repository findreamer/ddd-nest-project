import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { setupSwagger } from './setup-swagger';
import { LoggerInterceptor } from './common/interceptor/logger.interceptor';
import { ResponseFormatInterceptor } from './common/interceptor/response-format.interceptor';
import { ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from './common/filter/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const { port, prefix } = configService.get('app', { infer: true });
  app.setGlobalPrefix(prefix);

  if (process.env.NODE_ENV === 'development') {
    // 开启日志
    app.useGlobalInterceptors(new LoggerInterceptor());
  }

  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalInterceptors(new ResponseFormatInterceptor());

  setupSwagger(app, configService);
  await app.listen(port ?? 3000);
}
bootstrap();
