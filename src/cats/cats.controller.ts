import { Controller, Param, Get } from '@nestjs/common';
import { CatsService } from './cats.service';
import {ItemDTO} from './dto/item.dto'


@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) { }
  
 
  @Get()
  public async getAll(): Promise<ItemDTO[]> {
    return await this.catsService.getAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} cat`;
  }
}
