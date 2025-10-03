import { Field, ObjectType } from '@nestjs/graphql';
import { Company as CompanyType } from 'generated/prisma';
import { RestrictProperties } from 'src/common/dtos/common.input';

@ObjectType()
export class Company implements RestrictProperties<Company, CompanyType> {
  // Todo Add below to make optional fields optional.
  // @Field({ nullable: true })
  id: number;
  createdAt: Date;
  updatedAt: Date;
  @Field({ nullable: true })
  displayName: string;
  @Field({ nullable: true })
  description: string;
}
