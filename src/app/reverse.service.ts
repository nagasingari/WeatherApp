import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReverseService {

  constructor() { }

  reverse(data): any {
    let revData;
    let isNegetiveNumber = false;
    let d = parseInt(data);
    if (isNaN(d)) {
      return this.reverseString(data);
    } else {
      return this.reverseNumber(d);
    }
  }

  reverseString(str) {
    let revStr = '';
    for (var i = str.length - 1; i >= 0; i--) {
      revStr += str[i];
    }
    return revStr;
  }

  reverseNumber(num) {
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


