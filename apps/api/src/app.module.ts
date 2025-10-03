import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './common/prisma/prisma.module';
import { UsersModule } from './models/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { AdminsModule } from './models/admins/admins.module';
import { CustomersModule } from './models/customers/customers.module';
import { ManagersModule } from './models/managers/managers.module';
import { ValetsModule } from './models/valets/valets.module';
import { CompaniesModule } from './models/companies/companies.module';
import { GaragesModule } from './models/garages/garages.module';
import { AddressesModule } from './models/addresses/addresses.module';
import { SlotsModule } from './models/slots/slots.module';
import { BookingsModule } from './models/bookings/bookings.module';
import { ReviewsModule } from './models/reviews/reviews.module';
import { VerificationsModule } from './models/verifications/verifications.module';

const MAX_AGE: number = 24 * 60 * 60;
@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: MAX_AGE },
    }),
    ConfigModule.forRoot({ isGlobal: true }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      introspection: true,
      fieldResolverEnhancers: ['guards'],
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      buildSchemaOptions: {
        numberScalarMode: 'integer',
      },
    }),
    UsersModule,
    AdminsModule,
    CustomersModule,
    ManagersModule,
    ValetsModule,
    CompaniesModule,
    GaragesModule,
    AddressesModule,
    SlotsModule,
    BookingsModule,
    ReviewsModule,
    VerificationsModule,
    PrismaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
