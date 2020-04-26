import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item } from '../model/item.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Item])],
    controllers: [CatsController],
  providers: [CatsService],
  })
  export class CatsModule {}