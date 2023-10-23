import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api-shipments');

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );
  app.enableCors();
  const options = new DocumentBuilder()
    .setTitle('Servicios titulos de credito')
    .setDescription(
      'Api rest de la AMT para los procesos del sistema de titulos de credito. Este api está documentado en el formato OpenAPI y está descrito según el mismo.',
    )
    .setVersion('0.1')
    .addBearerAuth()
    .setLicense('@AMT-2023', '')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-shipments/documentacionApi', app, document);

  const configService = app.get(ConfigService);

  await app.listen(configService.get<number>('dao.PORT'));

  // await app.listen(3000);
}
bootstrap();
