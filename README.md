
# Item Day picker

Item day picker is a small package that allows you to select a new item from a list of items daily -- this is done without using a database or CRON. We index the array passed in everyday to retrieve the current item for that given day.

## How do we do this? 

It's important to remember that the index generated is crucial to what item is shown on any given day. In that regard, it would mean that the index generated for the array would have to become date specific. Essentially the index could represent the time in days that have elapsed from the initial start date -- we call the offset date.

Naturally, as time progresses, this offset date would also increase in value day after day. We can then use this offset date to index our array and naturally have a new item every day as time progresses.

## How do to use this package?

> **Note**: This package supports both commonJS and ESM.

The package returns a function that we can use to generate our daily item. The function accepts two arguments:

1. An array of items -- can be in any shape ie/ a string array, a number array, an object array, etc.
2. A datetime in the form of a string

  

> **This package uses the JavaScript date object when handling dates. Therefore, the following formats are excepted: mm-dd-yyyy, dd-mm-yyyy, yyyy-mm-dd, March 2, 2023.**
> 
> **It's also important to note that if a time is not passed when specifying the date, then the time will default to 00:00:00 local time. Moreover, I suggest specifying a timezone when adding a time to the date variable.**


**See example below**:


```js

import ItemDayPicker from "@nonsoo/item-day-picker";

const stringArray = ["abc","defg","hijk","lmn"];

const date = "March 2, 2023 00:00:00 UTC";

const dailyItem = ItemDayPicker(stringArray, date);

```
