// Step 2

// Sum Zero //
let addZero = false;

const sumZero = (arr) => {
    for (i = 0; i < arr.length; i++) {
        for (j = i + 1; j < arr.length - 1; j++) {
            if (arr[i] + arr[j] === 0) {
                addZero = true;
            }
        }
    }
    return addZero;
}

// The time complexity of this function is O(n^2) because there is a nested for loop.
// The space complexity of this function is O(n).



// Unique Characters //
const hasUniqueChars = (string) => [... new Set(string)].join("") === string;

// The time complexity of this function is O(n) since the Set class iterates through the whole string.
// The space complexity of this function is O(n).



// Pangram Sentence //
const isPangram = (string) => new Set(string.toLowerCase().match(/[a-z]/g)).size === 26;    

// The time complexity of this function is O(n) since the Set class iterates through the whole string.
// The space complexity of this function is O(n).



// Longest Word //
let array = ["hi", "hello", "hullaballuuoooo", "wassup", "greetings"];
let res = [];

function find_longest_word(arr) {
    for (i = 0; i < arr.length; i++) {
        res.push(arr[i].length)
    }
    return Math.max(... res);
}

// The time complexity of this function is O(n) since there is one for loop that it dictated upon a variable that can change according the array.
// The space complexity of this function is O(n).





