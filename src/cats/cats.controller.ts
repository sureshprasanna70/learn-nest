import { Controller, Param, Get } from '@nestjs/common';
import { CatsService } from './cats.service';



@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) { }
  
 
  @Get()
  public async getAll() {
    return await this.catsService.getAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} cat`;
  }
}
