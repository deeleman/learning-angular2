import TimerWidgetComponent from './timer-widget.component';
import { provide } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';
import { SettingsService, TaskService } from '../shared/shared';
import {
  describe,
  expect,
  it,
  xit,
  inject,
  injectAsync,
  beforeEach,
  beforeEachProviders,
  setBaseTestProviders } from '@angular/core/testing';
import { TestComponentBuilder } from '@angular/compiler/testing';
import { Http, BaseRequestOptions }  from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import 'rxjs/add/operator/map';

describe('timer:TimerWidgetComponent', () => {
  let testComponentBuilder: TestComponentBuilder;
  let componentFixture: any;

  // First we setup the injector with providers for our component
  // dependencies and for a fixture component builder
  // Note: Animation related stuff will be skipped
  beforeEachProviders(() => [
    TestComponentBuilder,
    SettingsService,
    TaskService,

    // RouteParams is instantiated with custom values upon injecting
    provide(RouteParams, { useValue: new RouteParams({ id: null }) }),

    MockBackend,
    BaseRequestOptions,
    // We override the default Http provider implementation
    provide(Http, {
      useFactory: (backend: MockBackend, options: BaseRequestOptions) => {
        return new Http(backend, options);
      },
      deps: [MockBackend, BaseRequestOptions]
    }),
    TimerWidgetComponent
  ]);

  // We reinstantiate the fixture component builder before each test
  beforeEach(inject([TestComponentBuilder],
    (_testComponentBuilder: TestComponentBuilder) => {
      testComponentBuilder = _testComponentBuilder;
    }
  ));

  // Specs with assertions
  it('should initialize with the pomodoro counter at 24:59', done => {
    // We create a test component fixture on runtime out from the component symbol
    testComponentBuilder
    .createAsync(TimerWidgetComponent)
    .then(componentFixture => {
      // We fetch instances of the component and the rendered DOM
      let timerWidgetComponent = componentFixture.componentInstance;
      let nativeElement = componentFixture.nativeElement;

      // We execute the component OnInit hook
      timerWidgetComponent.ngOnInit();
      componentFixture.detectChanges();

      // these assertions evaluate the component  properties
      expect(timerWidgetComponent.isPaused).toBeTruthy();
      expect(timerWidgetComponent.minutes).toEqual(24);
      expect(timerWidgetComponent.seconds).toEqual(59);

      componentFixture.destroy();
      done(); // Resolve async text
    })
      .catch(e => done.fail(e));
  });

  it('should initialize as paused displaying the default labels', done => {
    testComponentBuilder
    .createAsync(TimerWidgetComponent)
    .then(componentFixture => {
      componentFixture.componentInstance.ngOnInit();
      componentFixture.detectChanges();

      expect(componentFixture.componentInstance.buttonLabelKey)
        .toEqual('start');

      expect(componentFixture.nativeElement
        .querySelector('button')
        .innerHTML.trim())
        .toEqual('Start Timer');

      componentFixture.destroy();
      done();
    })
      .catch(e => done.fail(e));
  });

  it('should initialize displaying a specific task', done => {
    // We mock the TaskService provider with some fake data
    let mockTaskService = {
      taskStore: [{
          name: 'Task A'
        }, {
          name: 'Task B'
        }, {
          name: 'Task C'
        }
      ]
    };

    testComponentBuilder
    .overrideProviders(TimerWidgetComponent, [
      provide(RouteParams, { useValue: new RouteParams({ id: '1' }) }),
      provide(TaskService, { useValue: mockTaskService })
    ])
    .createAsync(TimerWidgetComponent)
    .then(componentFixture => {
      componentFixture.componentInstance.ngOnInit();
      componentFixture.detectChanges();

      expect(componentFixture.componentInstance.taskName).toEqual('Task B');
      expect(componentFixture.nativeElement.querySelector('small')).toHaveText('Task B');

      componentFixture.destroy();
      done();
    })
    .catch(e => done.fail(e));
  });

});
