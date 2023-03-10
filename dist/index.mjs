// src/index.ts
var getOffSetDate = (currentDate, baseLineDate) => {
  const offset = currentDate.valueOf() - baseLineDate.valueOf();
  const toDaysConverter = 24 * 60 * 60 * 1e3;
  const convertToDaysNumber = Math.abs(Math.floor(offset / toDaysConverter));
  return convertToDaysNumber;
};
var getTodaysItem = (itemLst, startDate) => {
  const todaysDate = /* @__PURE__ */ new Date();
  const baseLineDate = new Date(startDate);
  const indexArray = getOffSetDate(todaysDate, baseLineDate);
  const todaysWord = itemLst[indexArray];
  return todaysWord;
};
var src_default = getTodaysItem;
export {
  src_default as default,
  getOffSetDate
};
