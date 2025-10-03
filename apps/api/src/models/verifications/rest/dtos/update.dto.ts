import { PartialType } from '@nestjs/swagger';
import { CreateVerification } from './create.dto';
import { Verification } from 'generated/prisma';

export class UpdateVerification extends PartialType(CreateVerification) {
  garageId: Verification['garageId'];
}
