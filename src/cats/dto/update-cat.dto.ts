import { PartialType } from '@nestjs/mapped-types';
import { IsInt, IsOptional, IsPositive, IsString, MinLength } from 'class-validator';
import { CreateCatDto } from './create-cat.dto';


export class UpdateCatDto extends PartialType(CreateCatDto) {//Todos los datos son opcionales

    @IsString()
    @MinLength(1)//minimo caracteres
    @IsOptional()
    name:string;
    
    
    @IsInt()
    @IsPositive()
    @IsOptional()
    age:number;
    
    
    @IsString()
    @IsOptional()
    breed:string; 

}
