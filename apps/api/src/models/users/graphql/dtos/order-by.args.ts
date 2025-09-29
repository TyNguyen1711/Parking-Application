// import { Field, InputType, PartialType } from '@nestjs/graphql'
// import { Prisma } from 'generated/prisma'
// import { RestrictProperties } from 'src/common/dtos/common.input'

// @InputType()
// export class UserOrderByWithRelationInputStrict
//   implements RestrictProperties<UserOrderByWithRelationInputStrict, Omit<Prisma.UserOrderByWithRelationInput, 
//   'Credentials' | 'AuthProvider' | 'Admin'>>
// {
//   // Todo: Add below field decorator to the SortOrder properties.
//   // @Field(() => Prisma.SortOrder)
//   uid: Prisma.SortOrder
//   createdAt: Prisma.SortOrder
//   updatedAt: Prisma.SortOrder
//   name: Prisma.SortOrder

// }


// @InputType()
// export class UserOrderByWithRelationInput extends PartialType(
//   UserOrderByWithRelationInputStrict,
// ) {}

// @InputType()
// export class UserOrderByRelationAggregateInput {
//   @Field(() => Prisma.SortOrder)
//   _count?: Prisma.SortOrder
// }
import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from 'generated/prisma'
import { RestrictProperties } from 'src/common/dtos/common.input'

@InputType()
export class UserOrderByWithRelationInputStrict
  implements RestrictProperties<UserOrderByWithRelationInputStrict, Omit<Prisma.UserOrderByWithRelationInput, 
  'Credentials' | 'AuthProvider' | 'Admin'>>
{
  // Todo: Add below field decorator to the SortOrder properties.
  // @Field(() => Prisma.SortOrder)
  uid: Prisma.SortOrder
  createdAt: Prisma.SortOrder
  updatedAt: Prisma.SortOrder
  name: Prisma.SortOrder
}

@InputType()
export class UserOrderByWithRelationInput extends PartialType(
  UserOrderByWithRelationInputStrict,
) {}

@InputType()
export class UserOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder
}