import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe,
  Request,
  UnauthorizedException,
  Param,
  Patch,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/CreateUser.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { User } from 'src/typeorm';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/register')
  @UsePipes(ValidationPipe)
  create(@Body() createuserDto: {data:CreateUserDto}) {
    
    return this.userService.create(createuserDto.data);
  }

  @Post('/checkemail')
  @UsePipes(ValidationPipe)
  Checkemail(@Body() data: {email:string}) {
    return this.userService.checkemail(data.email);
  }

  @Post('/login')
  AdminLogin(
    @Body('email') email: string,
    @Body('password') password: string,
  ) {
    console.log(email, password);

    const user = this.userService.login(email, password);
    return user;
  }

  @UseGuards(AuthGuard)
  @Get('information')
  async information(@Request() req): Promise<{
    Firstname: string;
    Lastname: string;
    Gender: string;
    Month: string;
    Day: string;
    Year: string;
  }> {
    return await this.userService.information(req.user.uuid);
  }
}
