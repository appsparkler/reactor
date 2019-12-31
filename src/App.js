import moment from 'moment'

export function reduceDateRangesForAGivenDate(dt, r, {from, to}, idx, arr) {
  r = (dt >= from) && (dt <= to) ? r + 1 : r;
  return r;
}

export function filterDateInAnyGivenDateRange(dateRanges, r, dt, idx, arr) {
  const shouldDateBeIncludedInResults = dateRanges.reduce(reduceDateRangesForAGivenDate.bind(null, dt), 0);
  if(shouldDateBeIncludedInResults === 0) r.push(dt)
  return r;
}

export function getAllDatesBetweenARange(range) {
  let results = [];
  try {
    const {from, to} = range;
    for(let i = moment(from).clone(); i < moment(to); i.add(1, 'days')) {
      results.push(i.clone().toDate());
    }
  } catch (e) {

  }
  return results;
}

export function getDatesBetweenARangeAndOutOfProvidedDateRanges(dateRanges, inBetweenRange) {
  let results = [];
  try {
    const allDatesBetweenARange = getAllDatesBetweenARange(inBetweenRange);
        results = allDatesBetweenARange.reduce(filterDateInAnyGivenDateRange.bind(null, dateRanges), []);
  } catch (e) {

  }
  return results;
}
