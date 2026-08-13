import { Injectable, NotFoundException } from '@nestjs/common';
import type { Album } from './interfaces/album.interface';
import database from '../database/albums.json';

@Injectable()
export class AlbumsService {
    findByUserId(userId: number): Album[] {
    return database.filter(
    (album) => album.userId === userId,
    );
}

findById(id: number, userId: number): Album {
    const album = database.find(
        (album) => album.id === id && album.userId === userId,
    );

    if (!album) {
        throw new NotFoundException('Album not found');
    }

    return album;
}
}