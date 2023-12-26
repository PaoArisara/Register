import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class CreateUserDto {
    
    @IsNotEmpty()
    @MinLength(3)
    @IsEmail()
    email:string;
    
    @IsNotEmpty()
    @MinLength(8)
    password:string;
    
    @IsNotEmpty()
    @MinLength(3)
    Firstname:string

    @IsNotEmpty()
    @MinLength(3)
    Lastname:string
    
    @IsNotEmpty()
    @MinLength(3)
    Gender:string
    
    @IsNotEmpty()
    Month:string

    @IsNotEmpty()
    Day:string

    @IsNotEmpty()
    Year:string
}