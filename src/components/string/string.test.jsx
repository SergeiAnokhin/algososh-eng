import { ElementStates } from "../../types/element-states";
import { reverseString } from "../string/utils";

describe("String Reversal", () => {
  it("with an even number of characters", async () => {
    const initialArr = [
      { chars: "j", state: ElementStates.Default },
      { chars: "e", state: ElementStates.Default },
      { chars: "s", state: ElementStates.Default },
      { chars: "t", state: ElementStates.Default },
    ];
    const resultArr = [
      { chars: "t", state: ElementStates.Modified },
      { chars: "s", state: ElementStates.Modified },
      { chars: "e", state: ElementStates.Modified },
      { chars: "j", state: ElementStates.Modified },
    ];
    expect(await reverseString(initialArr, () => {})).toEqual(resultArr);
  });

  it("with an odd number of characters", async () => {
    const initialArr = [
      { chars: "j", state: ElementStates.Default },
      { chars: "e", state: ElementStates.Default },
      { chars: "s", state: ElementStates.Default },
    ];
    const resultArr = [
      { chars: "s", state: ElementStates.Modified },
      { chars: "e", state: ElementStates.Modified },
      { chars: "j", state: ElementStates.Modified },
    ];
    expect(await reverseString(initialArr, () => {})).toEqual(resultArr);
  });

  it("with a single character", async () => {
    const initialArr = [{ chars: "j", state: ElementStates.Default }];
    const resultArr = [{ chars: "j", state: ElementStates.Modified }];
    expect(await reverseString(initialArr, () => {})).toEqual(resultArr);
  });

  it("with an empty string", async () => {
    const array = [];
    expect(await reverseString(array, () => {})).toEqual(array);
  });
});