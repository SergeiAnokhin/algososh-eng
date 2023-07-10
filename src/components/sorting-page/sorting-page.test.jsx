import { ElementStates } from "../../types/element-states";
import { SortType } from "../../types/types";
import { bubbleSort, selectionSort } from "./utils";
import { LONG_DELAY_IN_MS } from "../../constants/delays";

const newArr = [];
const initialOneCharArr = [{ chars: 1, state: ElementStates.Default }];
const resultOneCharArr = [{ chars: 1, state: ElementStates.Modified }];
const initialArr = [
  { chars: 1, state: ElementStates.Default },
  { chars: 9, state: ElementStates.Default },
  { chars: 8, state: ElementStates.Default },
  { chars: 5, state: ElementStates.Default },
];
const resultAscArr = [
  { chars: 1, state: ElementStates.Modified },
  { chars: 5, state: ElementStates.Modified },
  { chars: 8, state: ElementStates.Modified },
  { chars: 9, state: ElementStates.Modified },
];
const resultDescArr = [
  { chars: 9, state: ElementStates.Modified },
  { chars: 8, state: ElementStates.Modified },
  { chars: 5, state: ElementStates.Modified },
  { chars: 1, state: ElementStates.Modified },
];

describe("Array Sortingа", () => {
  it("bubble sort with an empty array", async () => {
    expect(await bubbleSort(newArr, SortType.Asc, () => {})).toEqual(newArr);
  });

  it("selection sort with an empty array", async () => {
    expect(await selectionSort(newArr, SortType.Asc, () => {})).toEqual(newArr);
  });

  it("bubble sort in ascending order with an array of one element", async () => {
    expect(await bubbleSort(initialOneCharArr, SortType.Asc, () => {})).toEqual(resultOneCharArr);
  });

  it("selection sort in ascending order with an array of one element", async () => {
    expect(await selectionSort(initialOneCharArr, SortType.Asc, () => {})).toEqual(resultOneCharArr);
  });

  it("bubble sort in descending order with an array of one element", async () => {
    expect(await bubbleSort(initialOneCharArr, SortType.Desc, () => {})).toEqual(resultOneCharArr);
  });

  it("selection sort in descending order with an array of one element", async () => {
    expect(await selectionSort(initialOneCharArr, SortType.Desc, () => {})).toEqual(resultOneCharArr);
  });

  it("bubble sort in ascending order with an array of multiple elements", async () => {
    expect(await bubbleSort(initialArr, SortType.Asc, () => {})).toEqual(resultAscArr);
  });

  it("selection sort in ascending order with an array of multiple elements", async () => {
    expect(await selectionSort(initialArr, SortType.Asc, () => {})).toEqual(resultAscArr);
  }, LONG_DELAY_IN_MS);

  it("bubble sort in descending order with an array of multiple elements", async () => {
    expect(await bubbleSort(initialArr, SortType.Desc, () => {})).toEqual(resultDescArr);
  });

  it("selection sort in descending order with an array of multiple elements", async () => {
    expect(await selectionSort(initialArr, SortType.Desc, () => {})).toEqual(resultDescArr);
  }, LONG_DELAY_IN_MS);
});