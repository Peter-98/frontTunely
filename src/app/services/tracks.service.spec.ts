import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TracksService } from './tracks.service';

describe('TracksService', () => {
  let service: TracksService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TracksService]
    });
    service = TestBed.inject(TracksService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve data from the server', () => {
    const mockData = [
      { id: 1, title: 'Track 1' },
      { id: 2, title: 'Track 2' },
    ];

    service.getData().subscribe((data) => {
      expect(data).toEqual(mockData);
    });

    const req = httpMock.expectOne('http://webapps.pedromrtaguilera.tech:3000/tracks');
    expect(req.request.method).toBe('GET');
    req.flush(mockData);
  });

  it('should delete a track by id', () => {
    const id = '123456'; // Reemplaza con el ID de la pista que deseas eliminar
    const deleteObserver = service.deleteById(id);
  
    deleteObserver.subscribe((response) => {
    });
  
    const req = httpMock.expectOne(`${service.url}/${encodeURI(id)}`);
    expect(req.request.method).toBe('DELETE');
    req.flush(null);
  });
  
});
