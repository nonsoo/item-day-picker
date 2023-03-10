export const getOffSetDate = (currentDate: Date, baseLineDate: Date) => {
  const offset = currentDate.valueOf() - baseLineDate.valueOf();
  const toDaysConverter = 24 * 60 * 60 * 1000;
  const convertToDaysNumber = Math.abs(Math.floor(offset / toDaysConverter));

  return convertToDaysNumber;
};

const getTodaysItem = <T>(itemLst: T[], startDate: string) => {
  const todaysDate = new Date();
  const baseLineDate = new Date(startDate);

  const indexArray = getOffSetDate(todaysDate, baseLineDate);

  const todaysWord = itemLst[indexArray];

  return todaysWord;
};

export default getTodaysItem;
