import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { AppModule } from './../src/app.module';

describe('Backend API (e2e)', () => {
  let app: INestApplication;
  let token: string;

  beforeEach(async () => {
    const moduleFixture: TestingModule = 
    await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterEach(async () => {
    await app.close();
  });
  
  it('/users (GET) should return all users', async () => {
    const response = await request(app.getHttpServer())
      .get('/users')
      .expect(200);
    
      expect(response.body).toBeInstanceOf(Array);
      expect(response.body.length).toBeGreaterThan(0); 
  });

  it('/albums (GET) should require authentication', async () => {
    await request(app.getHttpServer())
    .get('/albums')
    .expect(401);
  });

  it('/photos (GET) should require authentication', async () => {
    await request(app.getHttpServer())
    .get('/photos')
    .expect(401);
  });

  it('/albums (GET) should return the autheticated user\'s albums'), async () => {
    const loginRespone = await request(app.getHttpServer())
    .post('/auth/login')
    .send({
      username: 'Bret',
      password: 'password',
    })
    .expect(201);

    const token = loginRespone.body.access_token;

    const response = await request(app.getHttpServer())
      .get('/albums')
      .set('Authorization', `Bearer ${token}`)
      .expect(200);

    expect(response.body).toBeInstanceOf(Array);

    expect(
      response.body.every((album) => album.userId === 1),
    ).toBe(true);
  };
});
