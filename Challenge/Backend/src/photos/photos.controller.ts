import {
    Controller,
    Get,
    Param,
    Req,
    UseGuards,
} from '@nestjs/common';
import type { Request } from 'express';
import type { Photo } from './interfaces/photo.interface';

import { PhotosService } from './photos.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('photos')
@UseGuards(JwtAuthGuard)
export class PhotosController {
    constructor(
        private readonly photosService: PhotosService,
    ) {}

    @Get()
    getPhotos(@Req() request: Request): Photo[] {
        const userId = (request as any).user.sub;

        return this.photosService.findByUserId(userId);
    }

    @Get(':id')
    getPhoto(
        @Param('id') id: string,
        @Req() request: Request,
    ): Photo {
        const userId = (request as any).user.sub;

        return this.photosService.findById(
            Number(id),
            userId,
        );
    }
}