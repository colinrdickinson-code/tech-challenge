import { Injectable, NotFoundException } from '@nestjs/common';
import type { Photo } from './interfaces/photo.interface';
import photos from '../database/photos.json';
import albums from '../database/albums.json';

@Injectable()
export class PhotosService {
    findByUserId(userId: number): Photo[] {
        const userAlbums = albums.filter(
            (album) => album.userId === userId,
        );

        const userAlbumIds = userAlbums.map(
            (album) => album.id,
        );

        return photos.filter(
            (photo) => userAlbumIds.includes(photo.albumId),
        );
    }

    findById(id: number, userId: number): Photo {
        const userAlbums = albums.filter(
            (album) => album.userId === userId,
        );

        const userAlbumIds = userAlbums.map(
            (album) => album.id,
        );

        const photo = photos.find(
            (photo) =>
                photo.id === id &&
            userAlbumIds.includes(photo.albumId),
        );

        if (!photo) {
            throw new NotFoundException('Photo not found');
        }

        return photo;
    }
}