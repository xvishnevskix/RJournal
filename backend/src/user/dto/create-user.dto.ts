import {IsEmail, Length, Min} from 'class-validator';
import {UniqueOnDatabase} from "../../auth/validations/UniqueValidation";
import {UserEntity} from "../entities/user.entity";
export class CreateUserDto {
    @Length(3)
    fullName: string;

    @IsEmail(undefined, { message: 'Неверная почта'})
    @UniqueOnDatabase(UserEntity, {
        message: 'Такая почта уже есть'
    })
    email: string;

    @Length(6, 26, {message: 'Пароль должен быть минимум 6 символов'})
    password?: string;
}
