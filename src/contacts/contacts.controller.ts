import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { Contact } from './contact.entity';
import { ContactsService } from './contacts.service';

@Controller('contacts')
export class ContactsController {
    constructor(private contactsService: ContactsService){}
    @Get()
    index(): Promise<Contact[]> {
      return this.contactsService.findAll();
    }

    @Post()
    create(@Body() contact: Contact): Promise<any>{
        return this.contactsService.create(contact);
    }
    @Put(':id')
    async update(@Param('id') id: string, @Body() contactData: Contact): Promise<any> {
        contactData.id = Number(id);
        return this.contactsService.update(contactData);
    }
    @Delete(':id')
    async delete(@Param('id') id: string): Promise<any> {
      return this.contactsService.delete(id);
    }

}
