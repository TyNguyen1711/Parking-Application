import { CreateCompanyInput } from './create-company.input';
import { InputType, PartialType } from '@nestjs/graphql';
import { Company } from 'generated/prisma';

@InputType()
export class UpdateCompanyInput extends PartialType(CreateCompanyInput) {
  id: Company['id'];
}
