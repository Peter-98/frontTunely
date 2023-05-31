import { TestBed } from '@angular/core/testing';
import { GeolocationService } from './geolocation.service';

describe('GeolocationService', () => {
  let service: GeolocationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeolocationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get the current position successfully', async () => {
    spyOn(navigator.geolocation, 'getCurrentPosition').and.callFake((successCallback) => {
      const mockPosition = {
        coords: {
          latitude: 123.456,
          longitude: 789.012,
          accuracy: 10,
          altitude: null,
          altitudeAccuracy: null,
          heading: null,
          speed: null
        },
        timestamp: Date.now()
      };
      successCallback(mockPosition);
    });

    const position = await service.getPosition();

    expect(position.coords.latitude).toBe(123.456);
    expect(position.coords.longitude).toBe(789.012);
    expect(position.coords.accuracy).toBe(10);
  });

  it('should handle an error when getting the current position', async () => {
    spyOn(navigator.geolocation, 'getCurrentPosition').and.callFake((successCallback, errorCallback) => {
      const mockError: GeolocationPositionError = {
        code: 1,
        PERMISSION_DENIED: 1,
        POSITION_UNAVAILABLE: 2,
        TIMEOUT: 3,
        message: 'Failed to get position'
      };
      errorCallback!(mockError);
    });

    const position = await service.getPosition();

    expect(position.coords.latitude).toBe(0);
    expect(position.coords.longitude).toBe(0);
    expect(position.coords.accuracy).toBe(0);
  });
});
