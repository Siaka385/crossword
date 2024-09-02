var checkString = (str) => /^[\d.\n]*$/.test(str);

var checkDuplicate = (items) => new Set(items).size === items.length;

var ToArray = (item) => item.split("\n").map(line => line.split(""));

// Main function
var crosswordSolver = (emptyPuzz, wordList) => {
    if (!checkString(emptyPuzz) || !checkDuplicate(wordList)) {
        return "Error";
    }

    let puzzleArray = ToArray(emptyPuzz);

    function placeWords(index) {
        if (index === wordList.length) {
            return true;
        }
        let word = wordList[index];

        for (let row = 0; row < puzzleArray.length; row++) {
            for (let col = 0; col < puzzleArray[row].length; col++) {
                if (canPlaceWordHorizontally(puzzleArray, word, row, col)) {
                    placeWordHorizontally(puzzleArray, word, row, col);
                    if (placeWords(index + 1)) {
                        return true;
                    }
                    removeWordHorizontally(puzzleArray, word, row, col);
                }
                if (canPlaceWordVertically(puzzleArray, word, row, col)) {
                    placeWordVertically(puzzleArray, word, row, col);
                    if (placeWords(index + 1)) {
                        return true;
                    }
                    removeWordVertically(puzzleArray, word, row, col);
                }
            }
        }
        return false;
    }

    if (placeWords(0)) {
        return puzzleArray.map(row => row.join('')).join('\n');
    } else {
        return "No solution found";
    }
}

// Check if a word can be placed horizontally
function canPlaceWordHorizontally(puzzle, word, row, col) {
    if (col + word.length > puzzle[row].length) return false;
    let count = parseInt(puzzle[row][col], 10);
    if (isNaN(count) || count !== word.length) return false;
    
    for (let i = 0; i < word.length; i++) {
        if (puzzle[row][col + i] !== '0' && puzzle[row][col + i] !== '.') {
            return false;
        }
    }
    return true;
}

// Place a word horizontally
function placeWordHorizontally(puzzle, word, row, col) {
    for (let i = 0; i < word.length; i++) {
        puzzle[row][col + i] = word[i];
    }
}

// Remove a word placed horizontally
function removeWordHorizontally(puzzle, word, row, col) {
    for (let i = 0; i < word.length; i++) {
        puzzle[row][col + i] = '0';
    }
}

// Check if a word can be placed vertically
function canPlaceWordVertically(puzzle, word, row, col) {
    if (row + word.length > puzzle.length) return false;
    let count = parseInt(puzzle[row][col], 10);
    if (isNaN(count) || count !== word.length) return false;
    
    for (let i = 0; i < word.length; i++) {
        if (puzzle[row + i][col] !== '0' && puzzle[row + i][col] !== '.') {
            return false;
        }
    }
    return true;
}

// Place a word vertically
function placeWordVertically(puzzle, word, row, col) {
    for (let i = 0; i < word.length; i++) {
        puzzle[row + i][col] = word[i];
    }
}

// Remove a word placed vertically
function removeWordVertically(puzzle, word, row, col) {
    for (let i = 0; i < word.length; i++) {
        puzzle[row + i][col] = '0';
    }
}

// Example Usage
const emptyPuzzle = `2001
0..0
1000
0..0`;

const words = ['casa', 'alan', 'ciao', 'anta'];

console.log(crosswordSolver(emptyPuzzle, words));
