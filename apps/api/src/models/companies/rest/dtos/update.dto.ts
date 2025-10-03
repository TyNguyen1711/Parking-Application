import { PartialType } from '@nestjs/swagger';
import { CreateCompany } from './create.dto';
import { Company } from 'generated/prisma';

export class UpdateCompany extends PartialType(CreateCompany) {
  id: Company['id'];
}
