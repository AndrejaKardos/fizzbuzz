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

    var value = true;

    for (let j = 0; j < multiplesOfThree.length; j++) {
        if(interpretCount(multiplesOfThree[j]) !== "Fizz") {
            value = false;
        } 
    }
    
    expect(value).toBe(true);
});