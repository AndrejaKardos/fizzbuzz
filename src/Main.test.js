import { interpretCount } from './Output'


// OUTPUT COMPONENT TESTS

test('multiples of 3 (not divisible by 5) return Fizz', () => {
    // we make an array with values that are multiples of 3
    // running from 3 to 99 inclusively

    const multiplesOfThree = [];
    for (let i = 1; i <= 33; i++) {
        if(i*3 % 5 !== 0) {
            multiplesOfThree.push(i*3);
        }
    }

    // we will use our interpretCount function on the array
    // while checking whether any value doesn't equal "Fizz"

    let containsOnlyFizz = true;

    for (let j = 0; j < multiplesOfThree.length; j++) {
        if(interpretCount(multiplesOfThree[j]) !== "Fizz") {
            containsOnlyFizz = false;
        } 
    }
    
    expect(containsOnlyFizz).toBe(true);
});

test('multiples of 5 (not divisible by 3) return Buzz', () => {
    const multiplesOfFive = [];
    for (let i = 1; i <= 20; i++) {
        if(i*5 % 3 !== 0) {
            multiplesOfFive.push(i*5);
        }
    }

    let containsOnlyBuzz = true;

    for (let j = 0; j < multiplesOfFive.length; j++) {
        if(interpretCount(multiplesOfFive[j]) !== "Buzz") {
            containsOnlyBuzz = false;
        } 
    }
    
    expect(containsOnlyBuzz).toBe(true);
});

test('multiples of 15 return FizzBuzz', () => {
    const multiplesOfFifteen = [];
    for (let i = 1; i <= 6; i++) {
        multiplesOfFifteen.push(i*15);
    }

    let containsOnlyFizzBuzz = true;

    for (let j = 0; j < multiplesOfFifteen.length; j++) {
        if(interpretCount(multiplesOfFifteen[j]) !== "FizzBuzz") {
            containsOnlyFizzBuzz = false;
        } 
    }
    
    expect(containsOnlyFizzBuzz).toBe(true);
});

test('numbers not divisible by 3 or 5 return themselves', () => {
    const otherNumbers = [];
    for (let i = 0; i <= 100; i++) {
        if(i % 3 !== 0 && i % 5 !== 0) {
            otherNumbers.push(i);
        }
    }

    let containsOnlyNums = true;

    for (let j = 0; j < otherNumbers.length; j++) {
        if (interpretCount(otherNumbers[j]) !== otherNumbers[j]) {
            containsOnlyNums = false;
        } 
    }
    
    expect(containsOnlyNums).toBe(true);
});