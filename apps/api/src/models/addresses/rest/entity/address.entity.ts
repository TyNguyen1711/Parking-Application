import { Address } from 'generated/prisma';
import { IsDate, IsString, IsInt } from 'class-validator';
import { RestrictProperties } from 'src/common/dtos/common.input';
import { Field } from '@nestjs/graphql';

export class AddressEntity
  implements RestrictProperties<AddressEntity, Address>
{
  id: number;
  createdAt: Date;
  updatedAt: Date;
  address: string;
  lat: number;
  lng: number;
  @Field({ nullable: true })
  garageId: number;
}
