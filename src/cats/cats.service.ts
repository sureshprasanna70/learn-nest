import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Item } from '../model/item.entity';
import { Repository } from 'typeorm';
import {ItemDTO} from './dto/item.dto'

@Injectable()
export class CatsService {
    constructor(@InjectRepository(Item) private readonly repo: Repository<Item>) {}

    public async getAll(): Promise<ItemDTO[]> {
        return await this.repo.find().then(items => items.map(e => ItemDTO.fromEntity(e)));
      }
}