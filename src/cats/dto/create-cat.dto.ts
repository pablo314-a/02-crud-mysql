import { IsInt, IsOptional, IsPositive, IsString, MinLength, } from 'class-validator';
//VALIDACION DE DATOS QUE ME DA EL CLIENTE
export class CreateCatDto {

    @IsString()
    @MinLength(1)//minimo caracteres
    name:string;

    @IsInt()
    @IsPositive()
    age:number;


    @IsString()
    @IsOptional()
    breed:string;
}
