import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';

import {
  ApiAcceptedResponse,
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiHeader,
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOperation({
    summary: 'Create a new User',
    description:
      'This endpoint creates a new user in the Whitebox QA Engineer Test API',
  })
  @Post()
  @ApiHeader({
    name: 'X-Whitebox-Custom',
    description: 'Whitebox Custom header',
  })
  @ApiCreatedResponse({
    type: User,
    description: 'The record has been successfully created.',
  })
  @ApiUnauthorizedResponse()
  @ApiForbiddenResponse({ description: 'Forbidden.' })
  @ApiInternalServerErrorResponse()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @ApiOperation({
    summary: 'Get all Users',
    description:
      'This endpoint gets an array of all users from the Whitebox QA Engineer Test API',
  })
  @Get()
  @ApiOkResponse({
    type: User,
    isArray: true,
    description: 'An array of all found Users',
  })
  @ApiNotFoundResponse({ description: 'No Users Found' })
  @ApiUnauthorizedResponse()
  @ApiForbiddenResponse({ description: 'Forbidden.' })
  @ApiInternalServerErrorResponse()
  findAll(): User[] {
    return this.usersService.findAll();
  }

  @ApiOperation({
    summary: 'Get a User',
    description:
      'This endpoint gets a single user by id from the Whitebox QA Engineer Test API',
  })
  @Get(':id')
  @ApiOkResponse({
    type: User,
    description: 'Found User',
  })
  @ApiNotFoundResponse({ description: 'User Not Found' })
  @ApiUnauthorizedResponse()
  @ApiForbiddenResponse({ description: 'Forbidden.' })
  @ApiInternalServerErrorResponse()
  findOne(@Param('id') id: string): User {
    return this.usersService.findOne(+id);
  }

  @ApiOperation({
    summary: 'Update a User',
    description:
      'This endpoint updates an existing user in the Whitebox QA Engineer Test API',
  })
  @Patch(':id')
  @ApiOkResponse({
    type: User,
    description: 'User that has been updated',
  })
  @ApiNotFoundResponse({ description: 'User Not Found' })
  @ApiUnauthorizedResponse()
  @ApiForbiddenResponse({ description: 'Forbidden.' })
  @ApiInternalServerErrorResponse()
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto): User {
    return this.usersService.update(+id, updateUserDto);
  }

  @ApiOperation({
    summary: 'Remove a User',
    description:
      'This endpoint removes an existing user in the Whitebox QA Engineer Test API',
  })
  @Delete(':id')
  @ApiOkResponse({
    type: User,
    description: 'User that has been removed',
  })
  @ApiNotFoundResponse({ description: 'User Not Found' })
  @ApiUnauthorizedResponse()
  @ApiForbiddenResponse({ description: 'Forbidden.' })
  @ApiInternalServerErrorResponse()
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
