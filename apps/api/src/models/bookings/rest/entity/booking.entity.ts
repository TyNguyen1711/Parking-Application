import { $Enums, Booking } from 'generated/prisma';
import { IsDate, IsString, IsInt } from 'class-validator';
import { RestrictProperties } from 'src/common/dtos/common.input';
import { Field, registerEnumType } from '@nestjs/graphql';
registerEnumType($Enums.BookingStatus, {
  name: 'BookingStatus',
});
export class BookingEntity
  implements RestrictProperties<BookingEntity, Booking>
{
  id: number;
  createdAt: Date;
  updatedAt: Date;
  @Field({ nullable: true })
  pricePerHour: number;
  @Field({ nullable: true })
  totalPrice: number;
  startTime: Date;
  endTime: Date;
  vehicleNumber: string;
  @Field({ nullable: true })
  phoneNumber: string;
  @Field({ nullable: true })
  passcode: string;
  @Field(() => $Enums.BookingStatus)
  status: $Enums.BookingStatus;
  slotId: number;
  customerId: string;
}
