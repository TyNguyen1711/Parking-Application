// NẾU CÓ FILE NÀY, PHẢI SỬA
import { InputType, Field } from '@nestjs/graphql'

@InputType()
export class UpdateUserInput {
  @Field(() => String, { nullable: true })
  uid?: string

}