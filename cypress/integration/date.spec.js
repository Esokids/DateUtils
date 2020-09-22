/// <reference types="cypress" />

const dateToHuman = require("../../date").dateToHuman;

describe("String Datetime like Date object", () => {
  it("enUS", () => {
    let date = "Fri Sep 18 2020 10:20:30 GMT+0700 (ICT)";
    let valid = "September 18th, 2020 10:20:30";
    expect(valid).to.equal(dateToHuman(date, "enUS"));
  });

  it("th", () => {
    let date = "Fri Sep 18 2020 10:20:30 GMT+0700 (ICT)";
    let valid = "18 กันยายน 2563 10:20:30";
    expect(valid).to.equal(dateToHuman(date, "th"));
  });

  it("No Locale", () => {
    let date = "Fri Sep 18 2020 10:20:30 GMT+0700 (ICT)";
    let valid = "September 18th, 2020 10:20:30";
    expect(valid).to.equal(dateToHuman(date));
  });

  it("Specific Format th", () => {
    let date = "Fri Sep 18 2020 10:20:30 GMT+0700 (ICT)";
    let valid = "09/18/2020, 10:20 AM";
    expect(valid).to.equal(dateToHuman(date, "enUS", "Pp"));
  });

  it("Specific Format en", () => {
    let date = "Fri Sep 18 2020 10:20:30 GMT+0700 (ICT)";
    let valid = "18/09/2563, 10:20 น.";
    expect(valid).to.equal(dateToHuman(date, "th", "Pp"));
  });
});

// =======================================================

describe("Datetime Object", () => {
  it("enUS", () => {
    let date = new Date(2020, 11, 25, 10, 20, 30);
    let valid = "December 25th, 2020 10:20:30";
    expect(valid).to.equal(dateToHuman(date, "enUS"));
  });

  it("th", () => {
    let date = new Date(2020, 11, 25, 10, 20, 30);
    let valid = "25 ธันวาคม 2563 10:20:30";
    expect(valid).to.equal(dateToHuman(date, "th"));
  });

  it("No Locale", () => {
    let date = new Date(2020, 11, 25, 10, 20, 30);
    let valid = "December 25th, 2020 10:20:30";
    expect(valid).to.equal(dateToHuman(date));
  });

  it("Specific Format en", () => {
    let date = new Date(2020, 11, 25, 10, 20, 30);
    let valid = "12/25/2020, 10:20 AM";
    expect(valid).to.equal(dateToHuman(date, "enUS", "Pp"));
  });

  it("Specific Format th", () => {
    let date = new Date(2020, 11, 25, 10, 20, 30);
    let valid = "25/12/2563, 10:20 น.";
    expect(valid).to.equal(dateToHuman(date, "th", "Pp"));
  });
});

// =========================================================

describe("Date no time", () => {
  it("enUS", () => {
    let date = "2020-07-09";
    let valid = "July 9th, 2020";
    expect(valid).to.equal(dateToHuman(date, "enUS"));
  });

  it("th", () => {
    let date = "2020-07-09";
    let valid = "9 กรกฎาคม 2563";
    expect(valid).to.equal(dateToHuman(date, "th"));
  });

  it("No Locale", () => {
    let date = "2020-07-09";
    let valid = "July 9th, 2020";
    expect(valid).to.equal(dateToHuman(date));
  });

  it("Specific Format en", () => {
    let date = "2020-07-09";
    let valid = "07/09/2020";
    expect(valid).to.equal(dateToHuman(date, "enUS", "P"));
  });

  it("Specific Format th", () => {
    let date = "2020-07-09";
    let valid = "09/07/2563";
    expect(valid).to.equal(dateToHuman(date, "th", "P"));
  });
});

// =========================================================

describe("ISO Datetime", () => {
  it("enUS", () => {
    let date = "2020-09-21T01:13:45.906Z";
    let valid = "September 21st, 2020 08:13:45";
    expect(valid).to.equal(dateToHuman(date, "enUS"));
  });

  it("th", () => {
    let date = "2020-09-21T01:13:45.906Z";
    let valid = "21 กันยายน 2563 08:13:45";
    expect(valid).to.equal(dateToHuman(date, "th"));
  });

  it("No Locale", () => {
    let date = "2020-09-21T01:13:45.906Z";
    let valid = "September 21st, 2020 08:13:45";
    expect(valid).to.equal(dateToHuman(date));
  });

  it("Specific Format en", () => {
    let date = "2020-09-21T01:13:45.906Z";
    let valid = "09/21/2020, 8:13 AM";
    expect(valid).to.equal(dateToHuman(date, "enUS", "Pp"));
  });

  it("Specific Format th", () => {
    let date = "2020-09-21T01:13:45.906Z";
    let valid = "21/09/2563, 8:13 น.";
    expect(valid).to.equal(dateToHuman(date, "th", "Pp"));
  });
});
