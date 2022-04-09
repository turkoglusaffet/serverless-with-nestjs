import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import {  entityToResourceUser } from "../converter/user.converter";
import { UserResource } from "../resources/user.resources";
import { UserEntity } from "./entity/user.entity";

@Injectable()
export class UserRepository {

  @InjectRepository(UserEntity)
  private readonly repository: Repository<UserEntity>;

  public async getUserById(id: number):Promise<UserResource> {
    const entity = await this.repository.findOne({where: {id: id}});
    console.info("dede")
    return entityToResourceUser(entity);
  }

  public async createUser(body: UserEntity): Promise<UserResource> {
    const entity = await this.repository.save(body);
    return entityToResourceUser(entity);
  }
}
