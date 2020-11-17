import { addYears, format } from 'date-fns';
import { enUS, th } from 'date-fns/locale';

type TypeInputDate = Date | number | string;
type TypeDate = Date | number;

const DEFAULT_DATETIMEFORMAT: string = 'PPP HH:mm:ss';
const DEFAULT_DATEFORMAT: string = 'PPP';
const DEFAULT_LOCALE: string = 'enUS';

const dateToHuman = (date: TypeInputDate, locale: string = DEFAULT_LOCALE, dateFormat?: string): string => {
  try {
    let _locale = convertString2Locale(locale);
    let flagDateNoTimeFormat: boolean = false;

    if (typeof date === 'string') {
      flagDateNoTimeFormat = checkDateNoTimeFormat(date);
      date = Date.parse(date);
    }

    if (locale === 'th') date = toBuddhistYear(date);

    return universalFormat(flagDateNoTimeFormat, date, _locale, dateFormat);
  } catch (error) {
    return 'N/A';
  }
};

const universalFormat = (flagDateNoTimeFormat: boolean, date: TypeDate, locale: Locale, dateFormat?: string): string => {
  if (flagDateNoTimeFormat) return dateTimeFormat(date, locale, dateFormat ? dateFormat : DEFAULT_DATEFORMAT);
  else return dateTimeFormat(date, locale, dateFormat ? dateFormat : DEFAULT_DATETIMEFORMAT);
};

const dateTimeFormat = (date: TypeDate, locale: Locale, _format: string): string => format(date, _format, { locale });

const toBuddhistYear = (date: TypeDate): Date => addYears(date, 543);

const checkDateNoTimeFormat = (date: string): boolean => {
  let reg: RegExp = /^([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))$/;
  if (reg.test(date)) return true;
  else return false;
};

const convertString2Locale = (locale: string): Locale => {
  if (locale === 'th') return th;
  if (locale === 'enUS' || 'en') return enUS;
  else return enUS;
};

export { dateToHuman };
