import { CreateGarageInput } from './create-garage.input';
import { InputType, PartialType } from '@nestjs/graphql';
import { Garage } from 'generated/prisma';

@InputType()
export class UpdateGarageInput extends PartialType(CreateGarageInput) {
  id: Garage['id'];
}
