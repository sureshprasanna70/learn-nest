import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configService } from './config/config.service';
import { ContactsModule } from './contacts/contacts.module';

@Module({
  imports: [CatsModule, TypeOrmModule.forRoot(configService.getTypeOrmConfig()), ContactsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
