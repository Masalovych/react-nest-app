import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

type AuthInput = { email: string; password: string };
type SignInData = { id: number; email: string };
type SignUpData = {
  firstName?: string;
  lastName?: string;
  email: string;
  password: string;
};
type AuthResult = { id: number; email: string; accessToken: string };

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async authenticate(input: AuthInput): Promise<AuthResult> {
    const user = await this.validateUser(input);

    if (!user) {
      throw new UnauthorizedException();
    }

    return this.signIn(user);
  }

  async validateUser(input: AuthInput): Promise<SignInData | null> {
    const user = await this.usersService.findOneByEmail(input.email);

    if (user && user.password === input.password) {
      return {
        id: user.id,
        email: user.email,
      };
    }
    return null;
  }

  async signIn(user: SignInData): Promise<AuthResult> {
    const tokenPayload = {
      sub: user.id,
      email: user.email,
    };

    const accessToken = await this.jwtService.signAsync(tokenPayload);

    return {
      id: user.id,
      email: user.email,
      accessToken: accessToken,
    };
  }

  async signUp(input: SignUpData): Promise<AuthResult> {
    const user = await this.usersService.create(input);

    const tokenPayload = {
      sub: user.id,
      email: user.email,
    };

    const accessToken = await this.jwtService.signAsync(tokenPayload);

    return {
      id: user.id,
      email: user.email,
      accessToken: accessToken,
    };
  }
}
