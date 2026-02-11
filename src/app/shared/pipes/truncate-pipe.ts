import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, limit: number = 30, completeWords: boolean = false, ellipsis: string = '...'): string {
    if (!value) return '';

    if (value.length <= limit) {
      return value;
    }

    let truncated = value.substring(0, limit);

    // Optional: don't cut in the middle of a word
    if (completeWords) {
      truncated = truncated.substring(0, truncated.lastIndexOf(' '));
    }

    return truncated + ellipsis;
  }
}