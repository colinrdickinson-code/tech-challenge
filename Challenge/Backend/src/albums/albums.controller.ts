import {
    Controller,
    Get,
    UseGuards,
    Req,
    Param
} from '@nestjs/common';
import type { Request } from 'express';
import type { Album } from './interfaces/album.interface'

import { AlbumsService } from './albums.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('albums')
@UseGuards(JwtAuthGuard)
export class AlbumsController {
    constructor(
        private readonly albumsService: AlbumsService,
    ) {}

    @Get()
    getAlbums(@Req() request: Request) {
        const userId = (request as any).user.sub;

        return this.albumsService.findByUserId(userId);
    }

    @Get(':id')
    getAlbum(
        @Param('id') id: string,
        @Req() request: Request,
    ): Album {
        const userId = (request as any).user.sub;

        return this.albumsService.findById(
            Number(id),
            userId,
        );
    }
}