import * as challenge from "./js11";

describe("Unit-testing challenge", () => {
  test("Function returns greeting", () => {
    expect(challenge.greet()).toEqual("Hello, nice to meet you");
  });

  test("Adding two numbers", () => {
    expect(challenge.sumTwoNumbers(3, 4)).toEqual(7);
  });

  test("Comparing numbers", () => {
    expect(challenge.checkLarger(3, 3)).toEqual("Both numbers are equal");
    expect(challenge.checkLarger(1, 2)).toEqual("2 is bigger than 1");
    expect(challenge.checkLarger(3, 2)).toEqual("3 is bigger than 2");
  });

  test("Filter valid names", () => {
    expect(challenge.filterByLength(["bigLongName", "bigLongName2"])).toEqual(
      "Sorry, no valid names supplied"
    );
    expect(
      challenge.filterByLength(["bigLongName", "bigLongName2", "Stu", "Bruce"])
    ).toEqual(["Stu", "Bruce"]);
  });

  test("Reducing numbers in array - values between 0 and 255", () => {
    expect(challenge.reduceNumbers([0, 3, -5], 5)).toEqual([0, 0, 0]);
    expect(challenge.reduceNumbers([300, 275, 400], 10)).toEqual([
      255, 255, 255,
    ]);
    expect(challenge.reduceNumbers([155, 20, 73], 5)).toEqual([150, 15, 68]);
  });
});
