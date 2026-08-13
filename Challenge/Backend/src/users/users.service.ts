import { Injectable } from "@nestjs/common";
import type { User } from './interfaces/user.interface';
import database from '../database/users.json';

@Injectable()
export class UsersService {
    findAll(): User[] {
        return database;
    }

    findByUsername(username: string): User | undefined {
        return database.find(
            (user) => user.username === username,
        );
    }
}