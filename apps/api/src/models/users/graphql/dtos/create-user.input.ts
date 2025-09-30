import {
  InputType,
  Field,
  registerEnumType,
  ObjectType,
} from '@nestjs/graphql';
import { AuthProviderType } from 'generated/prisma';
registerEnumType(AuthProviderType, {
  name: 'AuthProviderType',
});
@InputType()
export class RegisterWithProviderInput {
  @Field(() => String)
  uid: string;

  @Field(() => String, { nullable: true })
  name: string;

  @Field(() => String)
  image?: string;

  @Field(() => AuthProviderType)
  type: AuthProviderType;
}

@InputType()
export class RegisterWithCredentialsInput {
  name: string;
  email: string;
  password: string;
  image?: string;
}

@InputType()
export class LoginInput {
  @Field(() => String)
  email: string;

  @Field(() => String)
  password: string;
}

@ObjectType()
export class LoginOutput {
  @Field(() => String)
  token: string;
}
