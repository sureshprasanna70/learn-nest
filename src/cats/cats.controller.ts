import { Controller, Param, Get } from '@nestjs/common';

@Controller('cats')
export class CatsController {
    @Get(':id')
    findOne(@Param('id') id: string) {
      return `This action returns a #${id} cat`;
    }
}
