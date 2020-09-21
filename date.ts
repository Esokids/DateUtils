import { addYears, format, parseISO, toDate } from "date-fns";
import { enUS, th } from "date-fns/locale";

type TypeInputDate = Date | number | string;
type TypeDate = Date | number;

const dateToHuman = (date: TypeInputDate, locale: string = "enUS"): string => {
  let _locale = convertString2Locale(locale);
  let flagDateNoTimeFormat: boolean = false;

  if (typeof date === "string") {
    flagDateNoTimeFormat = checkDateNoTimeFormat(date);
    date = Date.parse(date);
  }
  if (locale === "th") date = toBuddhistYear(date);

  console.log(flagDateNoTimeFormat);

  return universalFormat(flagDateNoTimeFormat, date, _locale);
};

const universalFormat = (flag: boolean, date: TypeDate, locale: Locale): string => {
  if (flag) return dateNoTimeFormat(date, locale);
  else return datetimeFormat(date, locale);
};

const datetimeFormat = (date: TypeDate, locale: Locale): string => format(date, "PPP HH:mm:ss", { locale });

const dateNoTimeFormat = (date: TypeDate, locale: Locale): string => format(date, "PPP", { locale });

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
