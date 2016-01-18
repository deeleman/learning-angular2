import { Pipe } from 'angular2/core';

@Pipe({
    name: 'time'
})
export default class ConvertToHoursMinutes {
    transform(totalMinutes: number): string {
        let minutes: number = totalMinutes % 60;
        let hours: number = Math.floor(totalMinutes / 60);
        return `${hours}h:${minutes}m`;
    }
}
