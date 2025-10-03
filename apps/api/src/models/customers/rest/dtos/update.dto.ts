import { PartialType } from '@nestjs/swagger';
import { CreateCustomer } from './create.dto';
import { Customer } from 'generated/prisma';

export class UpdateCustomer extends PartialType(CreateCustomer) {
  uid: Customer['uid'];
}
