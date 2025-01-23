import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ApiService } from './api.service';

describe('ApiService', () => {
  let service: ApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService],
    });
    service = TestBed.inject(ApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should make a GET request and retry on failure', () => {
    const dummyData = { name: 'test' };
    service.get<any>('test-endpoint').subscribe((data) => {
      expect(data).toEqual(dummyData);
    });

    const reqs = httpMock.match(`${service['baseUrl']}/test-endpoint`);
    expect(reqs.length).toBe(3); // Verify that the request was retried 3 times
    reqs.forEach(req => req.flush(dummyData));
  });

  // Further tests for POST, PUT, DELETE, and error handling can be added similarly
});
