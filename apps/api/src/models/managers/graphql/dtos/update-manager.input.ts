import { CreateManagerInput } from './create-manager.input';
import { InputType, PartialType } from '@nestjs/graphql';
import { Manager } from 'generated/prisma';

@InputType()
export class UpdateManagerInput extends PartialType(CreateManagerInput) {
  uid: Manager['uid'];
}
