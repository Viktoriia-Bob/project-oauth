import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async login(user) {
    const payload = {
      username: user.firstName + ' ' + user.lastName,
      sub: user.email,
    };

    return this.jwtService.signAsync(payload);
  }
}
