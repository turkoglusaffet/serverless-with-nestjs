import { Body, Controller, Get, Inject, Param, ParseIntPipe, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserDto } from '../dto/user.dto';
import { UserResource } from '../resources/user.resources';
import { UserService } from '../service/user.service';

@Controller('user')
export class UserController {
  @Inject(UserService)
  private readonly service: UserService;

  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  public getUser(@Param('id', ParseIntPipe) id: number): Promise<UserResource> {
    console.info(`GetUser Request received with id : ${id}`)
    return this.service.getUser(id);
  }

  @Post()
  @UseGuards(AuthGuard('jwt'))
  public createUser(@Body() body: UserDto): Promise<UserResource> {
    console.info(`CreateUser Request received for email : ${body.email}`)
    return this.service.createUser(body);
  }
}
