import { Inject, Injectable } from '@nestjs/common';
import { dtoToEntityUser } from '../converter/user.converter';
import { UserDto } from '../dto/user.dto';
import { UserRepository } from '../repository/user.repository';
import { UserResource } from '../resources/user.resources';

@Injectable()
export class UserService {

  @Inject(UserRepository)
  private readonly repository: UserRepository;

  public getUser(id: number): Promise<UserResource> {
    return this.repository.getUserById(id);
  }

  public createUser(body: UserDto): Promise<UserResource> {
    return this.repository.createUser(dtoToEntityUser(body));
  }
}
