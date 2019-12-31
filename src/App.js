// import React from 'react';
// import moment from 'moment'
//
// // const dateRanges = [
// //   {
// //     from: new Date(2019,11,2),
// //     to: new Date(2019, 11, 10)
// //   },{
// //     from: new Date(2019,11,19),
// //     to: new Date(2019, 11, 25)
// //   }
// // ]
//
// // const betweenDates = {
// //   from: new Date(2019, 10, 15),
// //   to: new Date(2020, 0, 10)
// // }
//
// // const results = getResults(dateRanges, betweenDates)
// console.log(moment(new Date(2019, 11, 31)).format('HH:mm'))

export function reduceDateRangesForAGivenDate(dt, r, {from, to}, idx, arr) {
  r = (dt >= from) && (dt <= to) ? r + 1 : r;
  return r;
}

export function removeDatesInDateRangesFromList(dateRanges, r, dt, idx, arr) {
  const shouldDateBeIncludedInResults = dateRanges.reduce(reduceDateRangesForAGivenDate.bind(null, dt), 0);
  // console.log(shouldDateBeIncludedInResults)
  if(shouldDateBeIncludedInResults === 0) r.push(dt)
  return r;
}
//
// export function getResults(dateRanges, {from, to}) {
//   let results = [];
//   try {
//     const allDatesBetween = [];
//     for(let i = moment(from).clone(); i < moment(to); i.add(1, 'days')) {
//       allDatesBetween.push(i.clone());
//     }
//     // remove any date that is between the range of the above Dates
//     results = allDatesBetween.reduce(reduceAllDatesToResults.bind(null, dateRanges), []);
//   } catch (e) {
//
//   }
//   return results;
// }
