import { Injectable } from 'angular2/core';
import LocalizationService from './localization';

@Injectable()
export default class SettingsService {
    minutes: number;
    labels: Object;

    constructor(localizationService: LocalizationService) {
        this.minutes = 25;
        this.labels = localizationService.getLocalizedLabels('en');
    }
}
