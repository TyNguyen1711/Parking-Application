import { PartialType } from '@nestjs/swagger';
import { CreateManager } from './create.dto';
import { Manager } from 'generated/prisma';

export class UpdateManager extends PartialType(CreateManager) {
  uid: Manager['uid'];
}
