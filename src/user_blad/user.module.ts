import { Module } from '@nestjs/common';
import { UserBladController } from './user_blad.controller';

@Module({
  controllers: [UserBladController]
})

export class UserBladModule {

}