import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AuthService } from './auth.service';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../../environments/environment';

import { CommentsService } from './comments.service';

describe('CommentsService', () => {
  let service: CommentsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        AngularFirestoreModule,
        AngularFireModule.initializeApp(environment.firebase)
      ],
      providers: [
        AuthService,
        {
          provide: 'angularfire2.app.options',
          useValue: {},
        },
        {
          provide: 'angularfire2.auth',
          useValue: {},
        }
      ]
    });

    service = TestBed.inject(CommentsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should send a comment successfully', () => {
    const mockComment = {
      author: 'John',
      comment: 'This is a comment',
      rating: 5,
      userId: '123',
      longitude: '1.23456',
      latitude: '2.34567',
      accuracy: '10m'
    };
    const mockResponse = { message: 'Comment sent successfully' };

    service.sendComment(
      mockComment.author,
      mockComment.comment,
      mockComment.rating,
      'track123',
      mockComment.userId,
      mockComment.longitude,
      mockComment.latitude,
      mockComment.accuracy
    );

    const request = httpMock.expectOne('http://webapps.pedromrtaguilera.tech:3000/tracks/track123');
    expect(request.request.method).toBe('POST');
    expect(request.request.body).toEqual(mockComment);

    request.flush(mockResponse);
  });

  it('should handle a 404 error when deleting a comment by id', () => {
    const mockTrackId = 'track123';
    const mockCommentId = 'comment456';
    const mockErrorResponse = { status: 404, statusText: 'Not Found' };

    service.deleteCommentById(mockTrackId, mockCommentId).subscribe(
      () => fail('Expected the request to fail'),
      (error) => {
        expect(error).toBe('No se encontró el elemento solicitado');
      }
    );

    const request = httpMock.expectOne(`http://webapps.pedromrtaguilera.tech:3000/tracks/${encodeURI(mockTrackId)}/${encodeURI(mockCommentId)}`);
    expect(request.request.method).toBe('DELETE');

    request.flush(null, mockErrorResponse);
  });
});
