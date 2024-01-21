import { ForbiddenException, Injectable } from '@nestjs/common';
import { AuthDto } from './dto';
import * as argon from 'argon2';
import { PrismaService } from '../prisma';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { User } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async signup(dto: AuthDto): Promise<Omit<User, 'hash'>> {
    const hash = await argon.hash(dto.password);

    try {
      const user = await this.prisma.user.create({
        data: {
          email: dto.email,
          hash,
        },
      });
      delete user.hash;
      return user;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Credentials taken');
        }
      }
      throw error;
    }
  }

  async signin(dto: AuthDto) {
    // find the user by email
    const user = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    });
    // if user does not exist throw exception
    if (!user) throw new ForbiddenException('Credentials incorrect');

    // compare password
    const pwMatches = await argon.verify(user.hash, dto.password);
    // if password incorrect throw exception
    if (!pwMatches) throw new ForbiddenException('Credentials incorrect');
    return 'User logged in';
    // return this.signToken(user.id, user.email);
  }

  //   async signToken(
  //     userId: number,
  //     email: string
  //   ): Promise<{ access_token: string }> {
  //     const payload = {
  //       sub: userId,
  //       email,
  //     };
  //     const secret = this.config.get('JWT_SECRET');

  //     const token = await this.jwt.signAsync(payload, {
  //       expiresIn: '15m',
  //       secret: secret,
  //     });

  //     return {
  //       access_token: token,
  //     };
  //   }
}
