import {reduceDateRangesForAGivenDate} from './App'

describe('reduceDateRanges', ()=> {
  let dateRanges;

  beforeEach(()=> {
    dateRanges = [
      { from: new Date(2019,11,2),to: new Date(2019, 11, 10) },
      { from: new Date(2019,11,19), to: new Date(2019, 11, 25) },
      { from: new Date(2019,11,5), to: new Date(2019, 11, 22) }
    ];
  })

  test('a date withtin 1 date-range returns 1 as the `results`', () => {
    const dt = new Date(2019,11,12);
    const result = dateRanges.reduce(reduceDateRangesForAGivenDate.bind(null, dt), 0);
    expect(result).toBe(1)
  })
  test('a date withtin 2 date-ranges return 2 as the `results`', () => {
    const dt = new Date(2019,11,9);
    const result = dateRanges.reduce(reduceDateRangesForAGivenDate.bind(null, dt), 0);
    expect(result).toBe(2)
  })
  test('a date not in any rangre returns 0 as tthe `results`', () => {
    const dt = new Date(2019,11,1);
    const result = dateRanges.reduce(reduceDateRangesForAGivenDate.bind(null, dt), 0);
    expect(result).toBe(0)
  })
  test('a given date, same as `to` of one of the date-ranges returns 1 as `results`', () => {
    const dt = new Date(2019,11,2);
    const result = dateRanges.reduce(reduceDateRangesForAGivenDate.bind(null, dt), 0);
    expect(result).toBe(1)
  })
  test('a given date, same as `from` of one of the date-ranges returns 1 as `results`', () => {
    const dt = new Date(2019,11,25);
    const result = dateRanges.reduce(reduceDateRangesForAGivenDate.bind(null, dt), 0);
    expect(result).toBe(1)
  })
})
