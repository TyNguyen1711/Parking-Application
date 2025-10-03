import { Manager } from 'generated/prisma';
import { IsDate, IsString, IsInt } from 'class-validator';
import { RestrictProperties } from 'src/common/dtos/common.input';
import { Field } from '@nestjs/graphql';

export class ManagerEntity
  implements RestrictProperties<ManagerEntity, Manager>
{
  uid: string;
  createdAt: Date;
  updatedAt: Date;
  @Field({ nullable: true })
  displayName: string;
  companyId: number;
}
