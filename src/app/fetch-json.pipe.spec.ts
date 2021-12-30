import { FetchJsonPipe } from './fetch-json.pipe';
import { HttpClient } from '@angular/common/http';

describe('FetchJsonPipe', () => {
  it('create an instance', () => {
    const pipe = FetchJsonPipe;
    expect(pipe).toBeTruthy();
  });
});
