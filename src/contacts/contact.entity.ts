import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('contact')
@Entity()
export class Contact {
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({ required: true })
    @IsString()
    @Column()
    firstName: string;

    @ApiProperty({ required: true })
    @Column()
    lastName: string;

    @ApiProperty({ required: true })
    @Column()
    email: string;

    @ApiProperty({ required: true })
    @Column()
    phone: string;

    @ApiProperty({ required: true })
    @Column()
    city: string;

    @ApiProperty({ required: true })
    @Column()
    country: string;
}

