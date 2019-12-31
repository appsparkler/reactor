import {
  reduceDateRangesForAGivenDate,
  filterDateInAnyGivenDateRange,
  getDatesBetweenARangeAndOutOfProvidedDateRanges,
  getAllDatesBetweenARange
} from './App'

describe('getAllDatesBetweenARange', () => {
  const range = {
    from: new Date(2019, 10, 15),
    to: new Date(2019, 11, 31)
  }
  const results = getAllDatesBetweenARange(range);
  const testDates = [
    new Date(2019, 10, 10),   // 0
    new Date(2019, 10, 15),   // 1
    new Date(2019, 10, 20),   // 2
    new Date(2019, 11, 20),   // 3
    new Date(2019, 11, 30),   // 4
    new Date(2020, 0, 10),    // 5
  ];

  test('result type', ()=> {
    expect(Array.isArray(results)).toBe(true);
  })
  test('test-dates are included in array', ()=> {
    const mappedResults = results.map(dt => dt.toString())
    const mappedTestDates = testDates.map(dt => dt.toString())
    expect(mappedResults).not.toContain(mappedTestDates[0]);
    expect(mappedResults).toContain(mappedTestDates[1]);
    expect(mappedResults).toContain(mappedTestDates[2]);
    expect(mappedResults).toContain(mappedTestDates[3]);
    expect(mappedResults).toContain(mappedTestDates[4]);
    expect(mappedResults).not.toContain(mappedTestDates[5]);
  })
})

describe('getDatesBetweenARangeAndOutOfProvidedDateRanges', ()=> {
  let mockInBetweenRange, mockDateRanges, results;
  beforeEach(()=> {
    mockInBetweenRange = {
      from: new Date(2019, 10, 10), // 2019, November 11
      to: new Date(2020, 1, 15) // 2020, February 16
    };
     mockDateRanges = [
      { from: new Date(2019,11,5), to: new Date(2019, 11, 22) },
      { from: new Date(2019,11,3),to: new Date(2019, 11, 10) },
    ]
    results = getDatesBetweenARangeAndOutOfProvidedDateRanges(mockDateRanges, mockInBetweenRange);
  });
  test('result-type', () => {
    expect(Array.isArray(results)).toBe(true);
  })
  test('should return an array that is between the `inBetweenRange - to and from values` and outside any of the `dateRanges` ', ()=> {
    const mappedResults = results.map(dt => dt.toString());
    expect(mappedResults).toContain(new Date(2019, 10, 10).toString());
    expect(mappedResults).toContain(new Date(2019, 10, 15).toString());
    expect(mappedResults).not.toContain(new Date(2019, 11, 5).toString());
    expect(mappedResults).toContain(new Date(2019, 11, 2).toString());
    expect(mappedResults).not.toContain(new Date(2019, 11, 20).toString());
    expect(mappedResults).toContain(new Date(2019, 11, 25).toString());
  })
})

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
