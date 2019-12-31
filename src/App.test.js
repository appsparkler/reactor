import {reduceDateRangesForAGivenDate, filterDateInAnyGivenDateRange} from './App'
describe('removeDatesInDateRangesFromList', ()=> {
  let dateRanges;

  beforeEach(() => {
    dateRanges = [
      { from: new Date(2019,11,5), to: new Date(2019, 11, 22) },
      { from: new Date(2019,11,3),to: new Date(2019, 11, 10) },
    ]
  })

  test('a given list of dates should be filter out any dates with a given list of date-ranges', () =>{
    const allDates = [
      new Date(2019, 10, 27), //0
      new Date(2019, 10, 28), //1
      new Date(2019, 10, 29), //2
      new Date(2019, 10, 30), //3
      new Date(2019, 11, 1), //4
      new Date(2019, 11, 2), //5
      new Date(2019, 11, 3), //6
      new Date(2019, 11, 4), //7
      new Date(2019, 11, 5), //8
      new Date(2019, 11, 6), //9
      new Date(2019, 11, 22), //10
      new Date(2019, 11, 24), //10
    ];
    const results = allDates.reduce(filterDateInAnyGivenDateRange.bind(null, dateRanges), []);
    expect(results).toContain(allDates[4])
    expect(results).toContain(allDates[3]);
    expect(results).not.toContain(allDates[8]);
    expect(results).not.toContain(allDates[9]);
    expect(results).not.toContain(allDates[10]);
    expect(results).toContain(allDates[11]);
  })
})


describe('reduceDateRanges', () => {
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
