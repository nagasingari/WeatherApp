import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReverseService {

  constructor() { }

  reverse(data): any {
    /*if (typeof data !== 'string' && typeof data !== 'number') {
      throw 'Invalid Input';
    }*/
    if (isNaN(parseInt(data))) {
      if (typeof data !== 'string') {
        throw 'Invalid Input';
      }
      return this.reverseString(data);
    } else {
      return this.reverseNumber(parseInt(data));
    }
  }

  private reverseString(str: string) {
    let revStr = '';
    for (var i = str.length - 1; i >= 0; i--) {
      revStr += str[i];
    }
    return revStr;
  }

  private reverseNumber(num: number) {
    let reversed = 0;
    let isNegetiveNumber = false;
    if (num < 0) {
      isNegetiveNumber = true;
      num = Math.abs(num);
    }

    while (num != 0) {
      reversed *= 10;
      reversed += num % 10;
      num -= num % 10;
      num /= 10;
    }
    if (isNegetiveNumber) {
      return -Math.abs(reversed);
    } else {
      return reversed;
    }
  }
}


