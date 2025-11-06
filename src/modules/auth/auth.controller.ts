import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiOperation({
    summary: '用户登录',
    description: '使用用户名和密码进行登录，成功后返回 JWT 访问令牌',
  })
  @ApiBody({
    type: LoginDto,
    examples: {
      login: {
        summary: '登录示例',
        value: {
          username: 'admin',
          password: '123456',
        },
      },
    },
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: '登录成功',
    schema: {
      example: {
        access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
      },
    },
  })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: '用户名或密码错误',
    schema: {
      example: {
        code: 400,
        msg: 'Unauthorized',
      },
    },
  })
  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDto: LoginDto) {
    return this.authService.signIn(signInDto.username, signInDto.password);
  }
}
