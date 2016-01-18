import { Injectable } from 'angular2/core';
import Localization from './Localization';

@Injectable()
export default class PomodoroConfig {
    minutes: number;
    labels: Object;

    constructor(localization: Localization) {
        this.minutes = 25;
        this.labels = localization.getLocalizedLabels('en');
    }
}
