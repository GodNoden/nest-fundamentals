import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log(
      'Request ....',
      new Date().toLocaleDateString('en-US', {
        timeZone: 'America/Mexico_City',
      }) +
        ' ' +
        new Date().toLocaleTimeString('en-US', {
          timeZone: 'America/Mexico_City',
        }),
    );
    next();
  }
}
