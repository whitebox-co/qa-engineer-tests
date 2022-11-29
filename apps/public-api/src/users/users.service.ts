import { Injectable } from '@nestjs/common';
import { CreateUserDto, UserRole } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

let users: User[] = [
  {
    id: 0,
    name: 'Josh Fisher',
    email: 'jfisher@whitebox.com',
    age: 39,
    role: UserRole.Moderator,
    createdDate: new Date(),
  },
  {
    id: 1,
    name: 'Sean Clark',
    email: 'sclark@whitebox.com',
    role: UserRole.Admin,
    createdDate: new Date(),
  },
];

@Injectable()
export class UsersService {
  create(createUserDto: CreateUserDto): User {
    const id = users.length;
    users.push({
      ...createUserDto,
      id,
      createdDate: new Date(),
    });
    return users[id];
  }

  findAll(): User[] {
    return users;
  }

  findOne(id: number): User {
    return users.find((user) => user.id === id);
  }

  update(id: number, updateUserDto: UpdateUserDto): User {
    const userIndex = users.findIndex((user) => user.id === id);
    const user = users.find((user) => user.id === id);
    users[userIndex] = {
      ...user,
      ...updateUserDto,
    };
    return users[userIndex];
  }

  remove(id: number): User {
    const userIndex = users.findIndex((user) => user.id === id);
    const user = users.find((user) => user.id === id);
    users.splice(userIndex, 1);
    return user;
  }
}
