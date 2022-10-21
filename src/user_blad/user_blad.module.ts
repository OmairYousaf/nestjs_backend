import { Module } from '@nestjs/common';
import { UserBladController } from './user_blad.controller';
import { UserBladService } from './user_blad.service';

@Module({
  controllers: [UserBladController],
  providers:[UserBladService],
})

export class UserBladModule {
}