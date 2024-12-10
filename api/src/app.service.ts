import { Injectable } from '@nestjs/common';

export interface ITodo {
  name: string;
}

@Injectable()
export class AppService {
  todos(): ITodo[] {
    return [
      { name: 'Make a call!' },
      { name: 'Go to gym!' },
      { name: 'Buy a car!' },
    ];
  }
}
