import { CreateValetAssignmentInput } from './create-valet-assignment.input';
import { InputType, PartialType } from '@nestjs/graphql';
import { ValetAssignment } from 'generated/prisma';

@InputType()
export class UpdateValetAssignmentInput extends PartialType(
  CreateValetAssignmentInput,
) {
  bookingId: ValetAssignment['bookingId'];
}
