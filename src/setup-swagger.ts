import { INestApplication, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder } from '@nestjs/swagger';
import { SwaggerModule } from '@nestjs/swagger';
import { CommonEntity } from './common/entity/common.entity';
import { ResOp } from './model/response';

export function setupSwagger(
  app: INestApplication,
  configService: ConfigService,
) {
  const { port } = configService.get('app');
  const { enable, title, description, path, version } =
    configService.get('swagger');
  if (!enable) {
    return;
  }

  const documentBuilder = new DocumentBuilder()
    .setTitle(title)
    .setDescription(description)
    .setVersion(version)
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        name: 'JWT',
        description: '输入JWT Token',
        in: 'header',
      },
      'jwt', // 这个名称要与下面的 setupOptions 中的名称一致
    )
    .build();

  const document = SwaggerModule.createDocument(app, documentBuilder, {
    ignoreGlobalPrefix: false,
    extraModels: [
      // 可以添加其他模型类
      CommonEntity,
      ResOp,
    ],
  });

  // 设置 Swagger UI 选项
  SwaggerModule.setup(path, app, document, {
    swaggerOptions: {
      persistAuthorization: true, // 保持授权信息
    },
  });

  setTimeout(() => {
    const logger = new Logger('SwaggerModule');
    logger.log(
      `Swagger 文档已启动，访问地址：http://localhost:${port}/${path}`,
    );
  }, 800);
}
