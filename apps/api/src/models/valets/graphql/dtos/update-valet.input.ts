import { CreateValetInput } from './create-valet.input';
import { InputType, PartialType } from '@nestjs/graphql';
import { Valet } from 'generated/prisma';

@InputType()
export class UpdateValetInput extends PartialType(CreateValetInput) {
  uid: Valet['uid'];
}
