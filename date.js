"use strict";
exports.__esModule = true;
exports.dateToHuman = void 0;
var date_fns_1 = require("date-fns");
var locale_1 = require("date-fns/locale");
var defaultDatetimeFormat = "PPP HH:mm:ss";
var defaultDateFormat = "PPP";
var dateToHuman = function (date, locale, dateFormat) {
    if (locale === void 0) { locale = "enUS"; }
    var _locale = convertString2Locale(locale);
    var flagDateNoTimeFormat = false;
    if (typeof date === "string") {
        flagDateNoTimeFormat = checkDateNoTimeFormat(date);
        date = Date.parse(date);
    }
    if (locale === "th")
        date = toBuddhistYear(date);
    return universalFormat(flagDateNoTimeFormat, date, _locale, dateFormat);
};
exports.dateToHuman = dateToHuman;
var universalFormat = function (flagDateNoTimeFormat, date, locale, dateFormat) {
    if (flagDateNoTimeFormat)
        return dateNoTimeFormat(date, locale, dateFormat);
    else
        return datetimeFormat(date, locale, dateFormat);
};
var datetimeFormat = function (date, locale, _format) {
    if (_format === void 0) { _format = defaultDatetimeFormat; }
    return date_fns_1.format(date, _format, { locale: locale });
};
var dateNoTimeFormat = function (date, locale, _format) {
    if (_format === void 0) { _format = defaultDateFormat; }
    return date_fns_1.format(date, _format, { locale: locale });
};
var toBuddhistYear = function (date) { return date_fns_1.addYears(date, 543); };
var checkDateNoTimeFormat = function (date) {
    var reg = /^([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))$/;
    if (reg.test(date))
        return true;
    else
        return false;
};
var convertString2Locale = function (locale) {
    if (locale === "th")
        return locale_1.th;
    if (locale === "enUS" || "en")
        return locale_1.enUS;
    else
        return locale_1.enUS;
};
var date = new Date(2020, 11, 25, 10, 20, 30);
var valid = "12/25/2020, 10:20 AM";
console.log(date, "\n", valid);
console.log(dateToHuman(date, undefined, "P"));
