import { Customer } from 'generated/prisma';
import { IsDate, IsString, IsInt } from 'class-validator';
import { RestrictProperties } from 'src/common/dtos/common.input';
import { Field } from '@nestjs/graphql';

export class CustomerEntity
  implements RestrictProperties<CustomerEntity, Customer>
{
  uid: string;
  createdAt: Date;
  updatedAt: Date;
  @Field({ nullable: true })
  displayName: string;
}
