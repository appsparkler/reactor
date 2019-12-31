import {reduceDateRanges} from './App'

describe('reduceDateRanges - inline', ()=> {
  test('a date outside the date ranges is returning a true', () => {
    const dateRanges = [
      { from: new Date(2019,11,2),to: new Date(2019, 11, 10) },
      { from: new Date(2019,11,19), to: new Date(2019, 11, 25) }
    ];
    const dt = new Date(2019,11,12);
    const result = dateRanges.reduce(reduceDateRanges.bind(null, dt), false);
    expect(result).toBe(true)
  })
  test('a date in the date-ranges should is returning false', () => {
    const dateRanges = [
      { from: new Date(2019,11,2),to: new Date(2019, 11, 10) },
      { from: new Date(2019,11,19), to: new Date(2019, 11, 25) }
    ];
    const dt = new Date(2019,11,9);
    const result = dateRanges.reduce(reduceDateRanges.bind(null, dt), false);
    expect(result).toBe(false)
  })
})
