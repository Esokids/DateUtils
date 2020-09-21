/// <reference types="cypress" />

const dateToHuman = require("../../date").dateToHuman;

describe("String Datetime like Date object", () => {
  it("enUS", () => {
    let date = "Fri Sep 18 2020 10:20:30 GMT+0700 (ICT)";
    let valid = "September 18th, 2020 10:20:30";
    expect(valid).to.equal(dateToHuman(date));
  });

  it("th", () => {
    let date = "Fri Sep 18 2020 10:20:30 GMT+0700 (ICT)";
    let valid = "18 กันยายน 2563 10:20:30";
    expect(valid).to.equal(dateToHuman(date, "th"));
  });
});

// =======================================================

describe("Datetime Object", () => {
  it("enUS", () => {
    let date = new Date(2020, 11, 25, 10, 20, 30);
    let valid = "December 25th, 2020 10:20:30";
    expect(valid).to.equal(dateToHuman(date));
  });

  it("th", () => {
    let date = new Date(2020, 11, 25, 10, 20, 30);
    let valid = "25 ธันวาคม 2563 10:20:30";
    expect(valid).to.equal(dateToHuman(date, "th"));
  });
});

// =========================================================

describe("Date no time", () => {
  it("enUS", () => {
    let date = "2020-07-09";
    let valid = "July 9th, 2020";
    expect(valid).to.equal(dateToHuman(date));
  });

  it("th", () => {
    let date = "2020-07-09";
    let valid = "9 กรกฎาคม 2563";
    expect(valid).to.equal(dateToHuman(date, "th"));
  });
});

// =========================================================

describe("ISO Datetime", () => {
  it("enUS", () => {
    let date = "2020-09-21T01:13:45.906Z";
    let valid = "September 21st, 2020 08:13:45";
    expect(valid).to.equal(dateToHuman(date));
  });

  it("th", () => {
    let date = "2020-09-21T01:13:45.906Z";
    let valid = "21 กันยายน 2563 08:13:45";
    expect(valid).to.equal(dateToHuman(date, "th"));
  });
});
