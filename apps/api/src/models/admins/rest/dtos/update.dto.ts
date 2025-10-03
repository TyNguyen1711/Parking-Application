import { PartialType } from '@nestjs/swagger';
import { CreateAdmin } from './create.dto';
import { Admin } from 'generated/prisma';

export class UpdateAdmin extends PartialType(CreateAdmin) {
  uid: Admin['uid'];
}
