import { addYears, format } from "date-fns";
import { enUS, th } from "date-fns/locale";

type TypeInputDate = Date | number | string;
type TypeDate = Date | number;

let defaultDatetimeFormat: string = "PPP HH:mm:ss";
let defaultDateFormat: string = "PPP";
let defaultLocale: string = "enUS";

const dateToHuman = (date: TypeInputDate, locale: string = defaultLocale, dateFormat?: string): string => {
  let _locale = convertString2Locale(locale);
  let flagDateNoTimeFormat: boolean = false;

  if (typeof date === "string") {
    flagDateNoTimeFormat = checkDateNoTimeFormat(date);
    date = Date.parse(date);
  }
  if (locale === "th") date = toBuddhistYear(date);

  return universalFormat(flagDateNoTimeFormat, date, _locale, dateFormat);
};

const universalFormat = (flagDateNoTimeFormat: boolean, date: TypeDate, locale: Locale, dateFormat?: string): string => {
  if (flagDateNoTimeFormat) return dateNoTimeFormat(date, locale, dateFormat);
  else return datetimeFormat(date, locale, dateFormat);
};

const datetimeFormat = (date: TypeDate, locale: Locale, _format: string = defaultDatetimeFormat): string => format(date, _format, { locale });

const dateNoTimeFormat = (date: TypeDate, locale: Locale, _format: string = defaultDateFormat): string => format(date, _format, { locale });

const toBuddhistYear = (date: TypeDate): Date => addYears(date, 543);

const checkDateNoTimeFormat = (date: string): boolean => {
  let reg: RegExp = /^([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))$/;
  if (reg.test(date)) return true;
  else return false;
};

const convertString2Locale = (locale: string): Locale => {
  if (locale === "th") return th;
  if (locale === "enUS" || "en") return enUS;
  else return enUS;
};

export { dateToHuman };
