import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { AlbumsModule } from './albums/albums.module';
import { PhotosModule } from './photos/photos.module';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    AlbumsModule,
    PhotosModule,
  ],
})
export class AppModule {}
