import SettingsService from './settings.service';
import {
  describe,
  expect,
  it,
  inject,
  beforeEach,
  beforeEachProviders } from '@angular/core/testing';

describe('shared:SettingsService', () => {
  let settingsService: SettingsService;

  beforeEachProviders(() => [SettingsService]);

  beforeEach(inject([SettingsService], (_settingsService: SettingsService) => {
    settingsService = _settingsService;
  }));

  it('should provide the duration for each pomodoro', () => {
    expect(settingsService.timerMinutes).toBeDefined();
    expect(settingsService.timerMinutes).toBeGreaterThan(0);
    expect(settingsService.timerMinutes).not.toBeNaN();
  });

  it('should provide plural mappings for tasks', () => {
    const tasksPluralMappings = settingsService.pluralsMap['tasks'];
    const actualProperties = Object.keys(tasksPluralMappings).sort()
    const expectedProperties = ['=0', '=1', 'other'].sort();

    expect(tasksPluralMappings).toBeDefined();
    expect(actualProperties).toEqual(expectedProperties);
  });
});
