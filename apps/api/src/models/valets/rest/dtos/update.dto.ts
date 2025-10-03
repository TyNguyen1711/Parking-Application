import { PartialType } from '@nestjs/swagger';
import { CreateValet } from './create.dto';
import { Valet } from 'generated/prisma';

export class UpdateValet extends PartialType(CreateValet) {
  uid: Valet['uid'];
}
