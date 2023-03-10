"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  default: () => src_default,
  getOffSetDate: () => getOffSetDate
});
module.exports = __toCommonJS(src_exports);
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getOffSetDate
});
