import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as Sentry from '@sentry/node';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  Sentry.init({
    dsn: 'https://b9a42e60955f4f9fa85c11862fb0531c@o474736.ingest.sentry.io/5512278',
    integrations: [
      // enable HTTP calls tracing
      new Sentry.Integrations.Http({ tracing: true }),
    ],
    // We recommend adjusting this value in production, or using tracesSampler
    // for finer control
    tracesSampleRate: 1.0,
  });

  await app.listen(3000, () => {
    console.log(`Server listening port 3000`);
  });
}
bootstrap();
