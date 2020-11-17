"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateToHuman = void 0;
var date_fns_1 = require("date-fns");
var locale_1 = require("date-fns/locale");
var DEFAULT_DATETIMEFORMAT = 'PPP HH:mm:ss';
var DEFAULT_DATEFORMAT = 'PPP';
var DEFAULT_LOCALE = 'enUS';
var dateToHuman = function (date, locale, dateFormat) {
    if (locale === void 0) { locale = DEFAULT_LOCALE; }
    try {
        var _locale = convertString2Locale(locale);
        var flagDateNoTimeFormat = false;
        if (typeof date === 'string') {
            flagDateNoTimeFormat = checkDateNoTimeFormat(date);
            date = Date.parse(date);
        }
        if (locale === 'th')
            date = toBuddhistYear(date);
        return universalFormat(flagDateNoTimeFormat, date, _locale, dateFormat);
    }
    catch (error) {
        return 'N/A';
    }
};
exports.dateToHuman = dateToHuman;
var universalFormat = function (flagDateNoTimeFormat, date, locale, dateFormat) {
    if (flagDateNoTimeFormat)
        return datetimeFormat(date, locale, dateFormat ? dateFormat : DEFAULT_DATEFORMAT);
    else
        return datetimeFormat(date, locale, dateFormat ? dateFormat : DEFAULT_DATETIMEFORMAT);
};
var datetimeFormat = function (date, locale, _format) { return date_fns_1.format(date, _format, { locale: locale }); };
// const dateNoTimeFormat = (date: TypeDate, locale: Locale, _format: string = DEFAULT_DATEFORMAT): string => format(date, _format, { locale });
var toBuddhistYear = function (date) { return date_fns_1.addYears(date, 543); };
var checkDateNoTimeFormat = function (date) {
    var reg = /^([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))$/;
    if (reg.test(date))
        return true;
    else
        return false;
};
var convertString2Locale = function (locale) {
    if (locale === 'th')
        return locale_1.th;
    if (locale === 'enUS' || 'en')
        return locale_1.enUS;
    else
        return locale_1.enUS;
};
