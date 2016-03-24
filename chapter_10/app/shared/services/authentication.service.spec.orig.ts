import AuthenticationService from './authentication.service';
import {
  describe,
  expect,
  it,
  xit,
  inject,
  beforeEach,
  beforeEachProviders,
  TestComponentBuilder } from 'angular2/testing';

describe('shared:AuthenticationService', () => {
  let authenticationService: AuthenticationService;

  beforeEachProviders(() => [
    AuthenticationService
  ]);

  beforeEach(inject([AuthenticationService], (_authenticationService) => {
    authenticationService = _authenticationService;
  }));

  it('should reject invalid credentials', done => {
    authenticationService.login({ username: 'foo', password: 'bar'}).then(success => {
      expect(success).toBeFalsy();
      done();
    })
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
