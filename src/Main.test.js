import { interpretCount } from './Output'

// OUTPUT COMPONENT TESTS

test('Check if multiples of 3 (not divisible by 5) return Fizz', () => {
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

    let value = true;

    for (let j = 0; j < multiplesOfThree.length; j++) {
        if(interpretCount(multiplesOfThree[j]) !== "Fizz") {
            value = false;
        } 
    }
    
    expect(value).toBe(true);
});

test('Check if multiples of 5 (not divisible by 3) return Buzz', () => {
    const multiplesOfFive = [];
    for (let i = 1; i <= 20; i++) {
        if(i*5 % 3 !== 0) {
            multiplesOfFive.push(i*5);
        }
    }

    let value = true;

    for (let j = 0; j < multiplesOfFive.length; j++) {
        if(interpretCount(multiplesOfFive[j]) !== "Buzz") {
            value = false;
        } 
    }
    
    expect(value).toBe(true);
});

test('Check if multiples of 15 return FizzBuzz', () => {
    const multiplesOfFifteen = [];
    for (let i = 1; i <= 6; i++) {
        multiplesOfFifteen.push(i*15);
    }

    let value = true;

    for (let j = 0; j < multiplesOfFifteen.length; j++) {
        if(interpretCount(multiplesOfFifteen[j]) !== "FizzBuzz") {
            value = false;
        } 
    }
    
    expect(value).toBe(true);
});