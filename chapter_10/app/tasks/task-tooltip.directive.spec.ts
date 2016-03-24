import { Task } from '../shared/shared';
import TaskTooltipDirective from './task-tooltip.directive';
import {
  describe,
  expect,
  it,
  xit,
  inject,
  beforeEach,
  beforeEachProviders,
  fakeAsync,
  tick,
  TestComponentBuilder } from 'angular2/testing';

  describe('shared:TaskTooltipDirective', () => {
    let taskTooltipDirective: TaskTooltipDirective;

    // We reinstantiate the fixture directive before each test
    beforeEach(() => {
      taskTooltipDirective = new TaskTooltipDirective();
    });

    // Specs with assertions
    it('should update a given tooltip upon mouseover', done => {
      let mockTooltip = { innerText: '' };
      taskTooltipDirective.task = <Task>{ name: 'Foo' };
      taskTooltipDirective.taskTooltip = mockTooltip;

      taskTooltipDirective.onMouseOver();
      expect(mockTooltip.innerText).toBe('Foo');
      done();
    });

    it('should restore a given tooltip upon mouseout', done => {
      let mockTooltip = { innerText: 'Foo' };
      taskTooltipDirective.task = <Task>{ name: 'Bar' };
      taskTooltipDirective.taskTooltip = mockTooltip;

      taskTooltipDirective.onMouseOver();
      expect(mockTooltip.innerText).toBe('Bar');
      taskTooltipDirective.onMouseOut();
      expect(mockTooltip.innerText).toBe('Foo');
      done();
    });
  });
