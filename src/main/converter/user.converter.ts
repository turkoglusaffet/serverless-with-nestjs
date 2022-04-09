import { UserDto } from "../dto/user.dto";
import { UserEntity } from "../repository/entity/user.entity";
import { UserResource } from "../resources/user.resources";

export function entityToDtoUser(entity: UserEntity): UserDto {
  if (entity != null) {
      return {
         email : entity.email,
         name : entity.name
      }
  } else {
      return null;
  }
}

export function dtoToEntityUser(dto: UserDto): UserEntity {
  if (dto != null) {
      const user: UserEntity = new UserEntity();
      user.name = dto.name;
      user.email = dto.email;
      return user;
  } else {
      return null;
  }
}
export function entityToResourceUser(entity: UserEntity): UserResource {
  if (entity != null) {
      return {
        id: entity.id,
        name: entity.name,
        email: entity.email,
        isDeleted: entity.isDeleted,
        createdAt: entity.createdAt,
        updatedAt: entity.updatedAt
      }
  } else {
      return null;
  }
}
