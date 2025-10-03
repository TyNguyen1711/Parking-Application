import { Field, InputType, PartialType } from '@nestjs/graphql';
import { Prisma } from 'generated/prisma';
import {
  DateTimeFilter,
  FloatFilter,
  IntFilter,
  RestrictProperties,
  StringFilter,
} from 'src/common/dtos/common.input';
import { GarageOrderByWithRelationInput } from 'src/models/garages/graphql/dtos/order-by.args';

@InputType()
export class AddressWhereUniqueInput {
  id: number;
}

@InputType()
export class AddressWhereInputStrict
  implements
    RestrictProperties<AddressWhereInputStrict, Prisma.AddressWhereInput>
{
  // Todo: Add the below field decorator only to the $Enums types.
  // @Field(() => $Enums.x)
  id: IntFilter;
  createdAt: DateTimeFilter;
  updatedAt: DateTimeFilter;
  address: StringFilter;
  lat: FloatFilter;
  lng: FloatFilter;
  garageId: IntFilter;
  Garage: GarageOrderByWithRelationInput;
  AND: AddressWhereInput[];
  OR: AddressWhereInput[];
  NOT: AddressWhereInput[];
}

@InputType()
export class AddressWhereInput extends PartialType(AddressWhereInputStrict) {}

@InputType()
export class AddressListRelationFilter {
  every?: AddressWhereInput;
  some?: AddressWhereInput;
  none?: AddressWhereInput;
}

@InputType()
export class AddressRelationFilter {
  is?: AddressWhereInput;
  isNot?: AddressWhereInput;
}
