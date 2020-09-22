# Date Utils TH, EN

- run command `yarn run dev` or `npm run dev`
- cypress run `yarn run cy:run` or `npm run cy:run`
- cypress open `yarn run cy:open` or `npm run cy:open`

### Import dateToHuman

`const dateToHuman = require("date").dateToHuman;`

**ES6/Typescript :** `import { dateToHuman } from date`

### How to use

```
    dateToHuman(date, locale, format) // return string date format
```

- date **(Required)** : Can be `string, number or Date Object`

  - String : "Fri Sep 18 2020 10:20:30 GMT+0700 (ICT)"
  - Datetime Object : `new Date(2020, 11, 25, 10, 20, 30);`
  - Date : "2020-07-09" (YYYY-MM-dd)

- locale **(Optional)** : `th | en | enUS` => `enUS` by Default
- format **(Optional)**

  - Datetime : `PPP HH:mm:ss` by default

    - September 18th, 2020 10:20:30
    - 8 กันยายน 2563 10:20:30;

  - Date : `PPP` by default

    - July 9th, 2020
    - 9 กรกฎาคม 2563

  - **Other** : https://date-fns.org/docs/format

#### Example

###### Date Object

```
    //December 25th, 2020 10:20:30"
    let date = new Date(2020, 11, 25, 10, 20, 30);
    let result = dateToHuman(date)

    console.log(result) // December 25th, 2020 10:20:30
```

###### String Datetime

```
    let date = "Fri Sep 18 2020 10:20:30 GMT+0700 (ICT)";
    let result = dateToHuman(date, "th")

    console.log(result) // 18 กันยายน 2563 10:20:30
```

###### String Date

```
    let date = "2020-07-09";
    let result = dateToHuman(date, "enUS")

    console.log(result) // July 9th, 2020
```

```
    let date = "2020-07-09";
    let result = dateToHuman(date, "th")
    console.log(result) // 9 กรกฎาคม 2563
```

###### ISO Datetime

```

    let date = "2020-09-21T01:13:45.906Z";
    let result = dateToHuman(date, "enUS", "Pp")

    console.log(result) // 09/21/2020, 8:13 AM

```

```
    let date = "2020-07-09";
    let result = dateToHuman(date, "th", "P")
    console.log(result) // 09/07/2563
```

```
    let date = "2020-07-09";
    let result = dateToHuman(date, undefined, "P")
    console.log(result) // 07/09/2020
```
