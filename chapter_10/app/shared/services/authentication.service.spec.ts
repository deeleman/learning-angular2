import AuthenticationService from './authentication.service';
import { provide } from '@angular/core';
import {
  describe,
  expect,
  it,
  inject,
  beforeEach,
  beforeEachProviders } from '@angular/core/testing';
import {
  Http,
  BaseRequestOptions,
  Response,
  ResponseOptions }  from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import 'rxjs/add/operator/map';

describe('shared:AuthenticationService', () => {
  let authenticationService: AuthenticationService;
  let mockBackend: MockBackend;

  beforeEachProviders(() => [
    MockBackend,
    BaseRequestOptions,
    provide(Http, {
      useFactory: (
        backend: MockBackend,
        options: BaseRequestOptions
      ) => {
        return new Http(backend, options);
      },
      deps: [MockBackend, BaseRequestOptions]
    }),
    AuthenticationService
  ]);

  beforeEach(inject(
    [MockBackend, AuthenticationService],
    (_mockBackend, _authenticationService) => {
      authenticationService = _authenticationService;
      mockBackend = _mockBackend;
    }
  ));

  it('should retrieve a valid token when querying the Auth API', done => {
    const mockedResponse = new ResponseOptions({
      body: '{"token": "eyJhbGciOi"}'
    });

    mockBackend.connections.subscribe(
      (connection: MockConnection) => {
        if(connection.request.url === '/api/authentication') {
          connection.mockRespond(new Response(mockedResponse));
        }
      }
    );

    authenticationService.httpLogin({
      username: 'foo',
      password: 'bar'}
    ).then(
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

  describe('emits an event when the user auth status changes', () => {

    it('that should be truthy for successful authentications', done => {
        authenticationService
        .userIsloggedIn
        .subscribe((authStatus: boolean) => {
          expect(authStatus).toBeTruthy();
          done();
        });

        authenticationService.login({
          username: 'john.doe@mail.com',
          password: 'letmein'
        });
    });

    it('that should be falsy for failed authentications', done => {
        authenticationService
        .userIsloggedIn
        .subscribe((authStatus: boolean) => {
          expect(authStatus).toBeFalsy();
          done();
        });

        authenticationService.login({
          username: 'foo',
          password: 'bar'
        });
    });
  });

});
