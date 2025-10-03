import { CreateSlotInput } from './create-slot.input';
import { InputType, PartialType } from '@nestjs/graphql';
import { Slot } from 'generated/prisma';

@InputType()
export class UpdateSlotInput extends PartialType(CreateSlotInput) {
  id: Slot['id'];
}
