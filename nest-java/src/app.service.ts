import { Injectable } from '@nestjs/common';

declare var Java: any;

@Injectable()
export class AppService {
  getHello(): string {
    const pi = Java.type('java.lang.Math').PI;
    const StringUtils = Java.type('org.apache.commons.lang3.StringUtils');
    const isBlank = StringUtils.isBlank(" ");

    return `Hello World with hot reload: ${isBlank} ${pi}`;
  }
}
