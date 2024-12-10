import { Controller, Get } from '@nestjs/common';
import { AppService, ITodo } from './app.service';

@Controller('todos')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  todos(): ITodo[] {
    return this.appService.todos();
  }
}
