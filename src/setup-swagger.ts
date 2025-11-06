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
    .build();

  const document = SwaggerModule.createDocument(app, documentBuilder, {
    ignoreGlobalPrefix: false,
    extraModels: [
      // 可以添加其他模型类
      CommonEntity,
      ResOp,
    ],
  });
  SwaggerModule.setup(path, app, document);

  setTimeout(() => {
    const logger = new Logger('SwaggerModule');
    logger.log(
      `Swagger 文档已启动，访问地址：http://localhost:${port}/${path}`,
    );
  }, 800);
}
