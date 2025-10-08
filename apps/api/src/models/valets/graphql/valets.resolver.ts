import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ValetsService } from './valets.service';
import { Valet } from './entity/valet.entity';
import { FindManyValetArgs, FindUniqueValetArgs } from './dtos/find.args';
import { CreateValetInput } from './dtos/create-valet.input';
import { UpdateValetInput } from './dtos/update-valet.input';
import { checkRowLevelPermission } from 'src/common/auth/util';
import type { GetUserType } from 'src/common/types';
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { BadGatewayException } from '@nestjs/common';

@Resolver(() => Valet)
export class ValetsResolver {
  constructor(
    private readonly valetsService: ValetsService,
    private readonly prisma: PrismaService,
  ) {}

  @AllowAuthenticated()
  @Mutation(() => Valet)
  async createValet(
    @Args('createValetInput') args: CreateValetInput,
    @GetUser() user: GetUserType,
  ) {
    // checkRowLevelPermission(user, args.uid)
    const company = await this.prisma.company.findFirst({
      where: { Managers: { some: { uid: user.uid } } },
    });

    if (!company) {
      throw new BadGatewayException('You do not have a company.');
    }
    return this.valetsService.create({ ...args, companyId: company.id });
  }

  @Query(() => [Valet], { name: 'valets' })
  findAll(@Args() args: FindManyValetArgs) {
    return this.valetsService.findAll(args);
  }

  @Query(() => Valet, { name: 'valet' })
  findOne(@Args() args: FindUniqueValetArgs) {
    return this.valetsService.findOne(args);
  }

  @AllowAuthenticated()
  @Mutation(() => Valet)
  async updateValet(
    @Args('updateValetInput') args: UpdateValetInput,
    @GetUser() user: GetUserType,
  ) {
    // const valet = await this.prisma.valet.findUnique({
    //   where: { id: args.id },
    // });
    // checkRowLevelPermission(user, valet.uid)
    return this.valetsService.update(args);
  }

  @AllowAuthenticated()
  @Mutation(() => Valet)
  async removeValet(
    @Args() args: FindUniqueValetArgs,
    @GetUser() user: GetUserType,
  ) {
    const valet = await this.prisma.valet.findUnique(args);
    // checkRowLevelPermission(user, valet.uid)
    return this.valetsService.remove(args);
  }
}
