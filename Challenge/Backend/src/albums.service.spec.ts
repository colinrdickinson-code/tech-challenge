import { Test, TestingModule } from '@nestjs/testing';
import { AlbumsService } from './albums/albums.service';

describe('AlbumsService', () => {
  let service: AlbumsService;

  beforeEach(() => {
    service = new AlbumsService();
  });

  it('should return only albums belonging to the requested user', () => {
    const userAlbums = service.findByUserId(1);

    expect(userAlbums.length).toBeGreaterThan(0);

    expect(
      userAlbums.every((album) => album.userId === 1),
    ).toBe(true);
  });

});