import { Pipe, PipeTransform } from 'angular2/core';

@Pipe({
    name: 'formattedtime'
})
export default class FormattedTimePipe implements PipeTransform {
    transform(totalMinutes: number): string {
        let minutes: number = totalMinutes % 60;
        let hours: number = Math.floor(totalMinutes / 60);
        return `${hours}h:${minutes}m`;
    }
}
