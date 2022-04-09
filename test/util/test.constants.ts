import { UserResource } from "../../src/main/resources/user.resources";

export const createUserResource : UserResource =
{
    id : 1,
    name: 'ANY_NAME',
    email: 'ANY_EMAIL',
    isDeleted: true,
    createdAt: new Date(),
    updatedAt: new Date()
}
