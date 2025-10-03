import { CreateAddressInput } from './create-address.input';
import { InputType, PartialType } from '@nestjs/graphql';
import { Address } from 'generated/prisma';

@InputType()
export class UpdateAddressInput extends PartialType(CreateAddressInput) {
  id: Address['id'];
}
