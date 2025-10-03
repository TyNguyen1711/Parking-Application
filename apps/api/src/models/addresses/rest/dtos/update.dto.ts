import { PartialType } from '@nestjs/swagger';
import { CreateAddress } from './create.dto';
import { Address } from 'generated/prisma';

export class UpdateAddress extends PartialType(CreateAddress) {
  id: Address['id'];
}
