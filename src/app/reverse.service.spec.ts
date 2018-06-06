import { TestBed, inject } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { ReverseService } from './reverse.service';

describe('ReverseService', () => {
  let reverseService: ReverseService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReverseService],
      declarations: [AppComponent],
      imports: [FormsModule]
    });
    reverseService = TestBed.get(ReverseService);
  });

  it('should be created', () => {
    expect(reverseService).toBeTruthy();
  });
  it('should reverse a string', () => {
    expect(reverseService.reverse(reverseService.reverse('Hello World!'))).toContain('!dlroW olleH');
    expect(reverseService.reverse(reverseService.reverse('Hello'))).toContain('olleH');
  });
  it('should reverse a number', () => {
    expect(reverseService.reverse(reverseService.reverse(-90))).toContain(-9);
    expect(reverseService.reverse(reverseService.reverse(57))).toContain(75);
  });
  it('should handle non string and non numbers', () => {
    expect(reverseService.reverse(reverseService.reverse({}))).toThrowError('Invalid Input');
    expect(reverseService.reverse(reverseService.reverse([]))).toThrowError('Invalid Input');
  });
});