import { CreateBookingTimelineInput } from './create-booking-timeline.input';
import { InputType, PartialType } from '@nestjs/graphql';
import { BookingTimeline } from 'generated/prisma';

@InputType()
export class UpdateBookingTimelineInput extends PartialType(
  CreateBookingTimelineInput,
) {
  id: BookingTimeline['id'];
}
