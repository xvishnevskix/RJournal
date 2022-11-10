import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { UserEntity } from '../user/entities/user.entity';



export const User = createParamDecorator(
  (_: unknown, ctx: ExecutionContext): UserEntity => {
    const request = ctx.switchToHttp().getRequest();
    return request.user.id; //вернёт информацию о пользователе
  },
);

//Создаём свой кастомный декоратор. Когда его будут использовать, он отдаст контекст, именно сам реквест request, и если же
//backend вернул информацию об успешной авторизации в юзере будет хранится информация только в том случае, если Jwt проверит, что пользователь есть