"use strict";
exports.__esModule = true;
exports.dateToHuman = void 0;
var date_fns_1 = require("date-fns");
var locale_1 = require("date-fns/locale");
var dateToHuman = function (date, locale) {
    if (locale === void 0) { locale = "enUS"; }
    var _locale = convertString2Locale(locale);
    var flagDateNoTimeFormat = false;
    if (typeof date === "string") {
        flagDateNoTimeFormat = checkDateNoTimeFormat(date);
        date = Date.parse(date);
    }
    if (locale === "th")
        date = toBuddhistYear(date);
    console.log(flagDateNoTimeFormat);
    return universalFormat(flagDateNoTimeFormat, date, _locale);
};
exports.dateToHuman = dateToHuman;
var universalFormat = function (flag, date, locale) {
    if (flag)
        return dateNoTimeFormat(date, locale);
    else
        return datetimeFormat(date, locale);
};
var datetimeFormat = function (date, locale) { return date_fns_1.format(date, "PPP HH:mm:ss", { locale: locale }); };
var dateNoTimeFormat = function (date, locale) { return date_fns_1.format(date, "PPP", { locale: locale }); };
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
