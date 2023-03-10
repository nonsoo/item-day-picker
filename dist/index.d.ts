declare const getOffSetDate: (currentDate: Date, baseLineDate: Date) => number;
declare const getTodaysItem: <T>(itemLst: T[], startDate: string) => T | undefined;

export { getTodaysItem as default, getOffSetDate };
