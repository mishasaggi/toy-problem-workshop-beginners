# How to use this repo
    Fork the repo 
    commit and push to your repo/branch


# Interactive exercises
    Refer to the example.js


# Toy problem solving guidelines/ tips
    1. Make note of the input and outputs required by the problem. 

    2. Take or create a small test case and solve it by hand without any programming logic

    3. What data types to use
      After you have a manual solution, to start thinking about code representation, start with data types.
      Example Arrays vs Objects vs Strings

    4. Transformation and Manipulation of data 
      Think about what you might need to do to the given data to get to your solution.
      This might require you to change the data type you chose to store your intermediate values in.

    5. Algorithm
      First write in plain english the steps you are going to follow.
      Then Psuedocode the solution. Maintain nesting and indentation in your psuedocode like you would in code.


# Useful resources
    snippets
    chrome dev console
    MDN - search
    MDN - javascript guide
    

# Challenges
    Round robin through all the challenges and pduedocode it out before coding them.

### data manipulation

##### Abbreviation
    Problem Description:

    The word i18n is a common abbreviation of internationalization the developer community use instead of typing the whole word and trying to spell it correctly. Similarly, a11y is an abbreviation of accessibility.

    Write a function that takes a string and turns any and all words within that string of length 4 or greater into an abbreviation following the same rules.

    Note:
    A "word" is a sequence of alphabetical characters. By this definition, any other character like a space or hyphen (eg. "elephant-ride") will split up a series of letters into two words (eg. "elephant" and "ride").
    The abbreviated version of the word should have the first letter, then the number of removed characters, then the last letter (eg. "e6t-r2e").


##### Word search
    Problem Description:

    Create a function wordsearch(w) that searches to see whether a word w is present in the given text variable. Please note it has to be a full word.
    You must not modify the text variable!

    Note: 
    First implement without any clever search and replace related inbuilt functions, then try implementing the shortest, cleverest possible solution.

    Example:
    Text - "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair."

    wordSearch(Text,"incredulity")--> true
    wordSearch(Text,"beautiful")--> false
    wordSearch(Text,"despair")--> true
    wordSearch(Text,"disbelief")--> false
    wordSearch(Text,"ing of")--> false


### nested looping

    Problem Description:

    Write a function x(n) that takes in a number n and returns an nxn array with an X in the middle. The X will be represented by 1's and the rest will be 0's. 
    E.g.

    x(5) === [[1, 0, 0, 0, 1],
              [0, 1, 0, 1, 0],
              [0, 0, 1, 0, 0],
              [0, 1, 0, 1, 0],
              [1, 0, 0, 0, 1]];

    x(6) === [[1, 0, 0, 0, 0, 1],
              [0, 1, 0, 0, 1, 0],
              [0, 0, 1, 1, 0, 0],
              [0, 0, 1, 1, 0, 0],
              [0, 1, 0, 0, 1, 0],
              [1, 0, 0, 0, 0, 1]];


### Puzzle - find heavy ball

    There are 8 balls numbered from 0 to 7. Seven of them have the same weight. One is heavier. Your task is to find it's number.

    Your function findBall will receive single argument - scales object. The scales object contains an internally stored array of 8 elements (indexes 0-7), each having the same value except one, which is greater. It also has a public method named getWeight(left, right) which takes two arrays of indexes and returns -1, 0, or 1 based on the accumulation of the values found at the indexes passed are heavier, equal, or lighter.

    getWeight returns:

    -1 if left pan is heavier

    1 if right pan is heavier

    0 if both pans weight the same

    Examples of scales.getWeight() usage:

    scales.getWeight([3], [7]) returns -1 if ball 3 is heavier than ball 7, 1 if ball 7 is heavier, or 0 i these balls have the same weight.

    scales.getWeight([3, 4], [5, 2]) returns -1 if weight of balls 3 and 4 is heavier than weight of balls 5 and 2 etc.

    So where's the catch, you may ask. Well - the scales is very old. You can use it only 4 TIMES before the scale breaks.


### Extra Credit
    Find heavy ball - You can use it only 3 TIMES before the scale breaks.

### Extra Extra credit:
    Find heavy ball - You can use it only TWICE before the scale breaks. 




### References
    MDN, codewars, challenge.makersquare











