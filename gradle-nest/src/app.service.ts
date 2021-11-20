import { Injectable } from '@nestjs/common';

declare var Java: any;

@Injectable()
export class AppService {
  getHello(): string {
    const pi = Java.type('java.lang.Math').PI;

    return `Hello World with hot reload ${pi}`;
  }
}
