import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  //NotImplementedException,
  Post,
} from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  login(@Body() input: { email: string; password: string }) {
    console.log(input);
    return this.authService.authenticate(input);
  }

  @HttpCode(HttpStatus.CREATED)
  @Post('signup')
  signUp(
    @Body()
    input: {
      firstName?: string;
      lastName?: string;
      email: string;
      password: string;
    },
  ) {
    console.log('Creating user: ', input);
    return this.authService.signUp(input);
  }
}
