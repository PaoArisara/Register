import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm/user.entity';
import { Repository, Equal } from 'typeorm';
import { CreateUserDto } from './dto/CreateUser.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async checkemail(email: string): Promise<Boolean> {
    const check = await this.userRepository.findOne({
      where: { email: email },
    });
    return check ? false : true;
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    console.log(createUserDto);
    const newUser = this.userRepository.create(createUserDto);
    console.log(newUser);
    return await this.userRepository.save(newUser);
  }

  async login(email, pass): Promise<{ access_token: string }> {
    console.log(email, pass);

    const findUser = await this.userRepository.findOne({
      where: {
        email: email,
      },
    });
    if (findUser?.password !== pass) {
      throw new UnauthorizedException();
    }

    const payload = { uuid: findUser.id };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
  async information(uuid: string): Promise<{
    Firstname: string;
    Lastname: string;
    Gender: string;
    Month: string;
    Day: string;
    Year: string;
  }> {
    const user = await this.userRepository.findOne({ where: { id: uuid } });
    if (user) {
      const data = {
        Firstname: user.Firstname,
        Lastname: user.Lastname,
        Gender: user.Gender,
        Month: user.Month,
        Day: user.Day,
        Year: user.Year,
      };
      return data;
    } else {
      return null; // หรือค่าเริ่มต้นที่คุณต้องการในกรณีที่ไม่พบผู้ดูแลระบบ
    }
  }
}
