import { CountryFilterPipe } from './country-pipe-pipe';

describe('CountryPipePipe', () => {
  it('create an instance', () => {
    const pipe = new CountryFilterPipe();
    expect(pipe).toBeTruthy();
  });
});
