import TaskIconsComponent from './task-icons.component';
import {
  describe,
  expect,
  it,
  xit,
  inject,
  beforeEach,
  beforeEachProviders,
  TestComponentBuilder } from 'angular2/testing';

describe('tasks:TaskIconsComponent', () => {
  let testComponentBuilder: TestComponentBuilder;

  // First we setup the injector with providers for our component
  // and for a fixture component builder
  beforeEachProviders(() => [
    TestComponentBuilder,
    TaskIconsComponent
  ]);

  // We reinstantiate the fixture component builder before each test
  beforeEach(
    inject([TestComponentBuilder],
    (_testComponentBuilder: TestComponentBuilder) => {
      testComponentBuilder = _testComponentBuilder;
    }
  ));

  // Specs with assertions
  it('should render 1 image for each pomodoro session required', done => {
    // We create a test component fixture on runtime out from the component symbol
    return testComponentBuilder
    .createAsync(TaskIconsComponent)
    .then(componentFixture => {
      // We fetch instances of the component and the rendered DOM
      let taskIconsComponent = componentFixture.componentInstance;
      let nativeElement = componentFixture.nativeElement;

      // We set a value to the @Input property and trigger change detection
      taskIconsComponent.task = { pomodorosRequired: 3 };
      componentFixture.detectChanges();

      // these assertions evaluate the component's surface DOM
      expect(nativeElement.querySelectorAll('img').length).toBe(3);
      done(); // Resolve async text
    })
    .catch(e => done.fail(e));
  });

  it('should render each image with the proper width', done => {
    testComponentBuilder.createAsync(TaskIconsComponent)
    .then(componentFixture => {
      let taskIconsComponent = componentFixture.componentInstance;
      let nativeElement = componentFixture.nativeElement;

      taskIconsComponent.task = { pomodorosRequired: 2 };
      taskIconsComponent.size = 60;
      componentFixture.detectChanges();

      expect(nativeElement.querySelector('img').getAttribute('width')).toBe('60');
      done();
    })
    .catch(e => done.fail(e));
  });

});
