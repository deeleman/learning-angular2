import TaskIconsComponent from './task-icons.component';
import {
  describe,
  expect,
  it,
  inject,
  beforeEach,
  beforeEachProviders } from '@angular/core/testing';
import { TestComponentBuilder } from '@angular/compiler/testing';

describe('tasks:TaskIconsComponent', () => {
  let testComponentBuilder: TestComponentBuilder;

  // First we setup the injector with a provider
  // for a fixture component builder
  beforeEachProviders(() => [
    TestComponentBuilder
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
    testComponentBuilder
    .createAsync(TaskIconsComponent)
    .then(componentFixture => {
      // We fetch instances of the component and the rendered DOM
      let taskIconsComponent = componentFixture.componentInstance;
      let nativeElement = componentFixture.nativeElement;

      // We set a test value to the @Input property and trigger change detection
      taskIconsComponent.task = { pomodorosRequired: 3 };
      componentFixture.detectChanges();

      // these assertions evaluate the component's surface DOM
      expect(nativeElement.querySelectorAll('img').length).toBe(3);

      // We finally destroy the component fixture and resolve the async test
      componentFixture.destroy();
      done();
    })
    .catch(e => done.fail(e));
  });

  it('should render each image with the proper width', done => {
    testComponentBuilder.createAsync(TaskIconsComponent)
    .then(componentFixture => {
      let taskIconsComponent = componentFixture.componentInstance;
      let nativeElement = componentFixture.nativeElement;
      let actualWidth;

      taskIconsComponent.task = { pomodorosRequired: 2 };
      taskIconsComponent.size = 60;
      componentFixture.detectChanges();

      actualWidth = nativeElement
        .querySelector('img')
        .getAttribute('width');

      expect(actualWidth).toBe('60');
      componentFixture.destroy();
      done();
    })
    .catch(e => done.fail(e));
  });

});
