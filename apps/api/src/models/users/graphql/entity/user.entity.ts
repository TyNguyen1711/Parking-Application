import { Field, ObjectType } from '@nestjs/graphql'
import { User as UserType } from 'generated/prisma'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class User implements RestrictProperties<User, UserType> {
  @Field(() => String)
  uid: string

  @Field(() => Date)
  createdAt: Date

  @Field(() => Date)
  updatedAt: Date

  @Field(() => String, { nullable: true })
  name: string
}
