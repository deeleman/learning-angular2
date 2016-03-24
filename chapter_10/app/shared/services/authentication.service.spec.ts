import AuthenticationService from './authentication.service';
import { provide } from 'angular2/core';
import {
  describe,
  expect,
  it,
  xit,
  inject,
  beforeEach,
  beforeEachProviders } from 'angular2/testing';
import { Http, BaseRequestOptions, Response, ResponseOptions }  from 'angular2/http';
import { MockBackend, MockConnection } from 'angular2/http/testing';
import 'rxjs/add/operator/map';

describe('shared:AuthenticationService', () => {
  let authenticationService: AuthenticationService;
  let mockBackend: MockBackend;

  beforeEachProviders(() => [
    MockBackend,
    BaseRequestOptions,
    provide(Http, {
      useFactory: (backend: MockBackend, options: BaseRequestOptions) => {
        return new Http(backend, options);
      },
      deps: [MockBackend, BaseRequestOptions]
    }),
    AuthenticationService
  ]);

  beforeEach(inject([MockBackend, AuthenticationService], (_mockBackend, _authenticationService) => {
    authenticationService = _authenticationService;
    mockBackend = _mockBackend;
  }));

  it('should retrieve a valid token when querying the Auth API', done => {
    const mockedResponse = new ResponseOptions({ body: '{"token": "eyJhbGciOi"}' });
    mockBackend.connections.subscribe((connection: MockConnection) => {
      if(connection.request.url === '/api/authentication') {
        connection.mockRespond(new Response(mockedResponse));
      }
    });

    authenticationService.httpLogin({ username: 'foo', password: 'bar'}).then(
      success => {
        expect(success).toBeTruthy();
        done();
      },
      error => done.fail(error)
    );
  });

  it('should reject invalid credentials', done => {
    authenticationService.login({ username: 'foo', password: 'bar'}).then(
      success => {
        expect(success).toBeFalsy();
        done();
      },
      error => done.fail(error)
    );
  });

  describe('should emit an event when the user auth status changes', () => {
    it('that should be truthy when the authentication is successful', done => {
        authenticationService.userIsloggedIn.subscribe((authStatus: boolean) => {
          expect(authStatus).toBeTruthy();
          done();
        });
        authenticationService.login({ username: 'john.doe@mail.com', password: 'letmein'});
    });

    it('that should be falsy when the authentication failed', done => {
        authenticationService.userIsloggedIn.subscribe((authStatus: boolean) => {
          expect(authStatus).toBeFalsy();
          done();
        });
        authenticationService.login({ username: 'foo', password: 'bar'});
    });
  });

});
