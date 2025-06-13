import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserRepository } from '../../users/user.repository';

@Injectable()
export class AuthService {
    constructor(
        private readonly userRepository: UserRepository,
        private readonly jwtService: JwtService,
    ) { }

    async login(email: string, password: string) {
        const user = await this.userRepository.getUser(email);

        if (!user) {
            console.log('Usuario no encontrado');
            throw new UnauthorizedException('Credenciales inválidas');
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if(!isPasswordValid) {
            console.log('Contraseña incorrecta');
            throw new UnauthorizedException('Credenciales inválidas');
        }

        const payload = {sub: user.id, email: user.email, roles: user.roles};

        const token = this.jwtService.sign(payload, {
            secret: 'secret',
            expiresIn: '1h',
        });

        return {
            message: 'Login exitoso',
            status: true,
            token,
            user: {
                id: user.id,
                uuid_authsupa: user.uuid_authsupa,
                document: user.document,
                email: user.email,
                name: user.name,
                lastname: user.lastname,
                phone: user.phone,
                password: user.password,
                address: user.address,
                auth_code: user.auth_code,
                mobile: user.mobile,
                roles: user.roles,
                created_at: user.createdAt,
                updated_at: user.updatedAt,
            },
        };
    }
}
