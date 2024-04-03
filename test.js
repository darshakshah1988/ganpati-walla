const A = [1,2,3,4,5,6,7,8,9,0];

/*  generate the skipper logic for above element skipper should be initially 0 and increment by postion of the next element, it should skip those next elements so for abovr variable the output should be [1,3,6,0] */

/*
    Generate the skipper logic for above element

    Skipper should be initially 0 and increment by position of the next element
    Skipper should skip those next elements

    For example, if the input is:
    [1, 2, 3, 4, 5, 6]

    The output should be:
    [1, 3, 6, 0]
*/
// const generateSkipperLogic = (elements) => {
//     // Initialize the skipper array with the first element of the input array
//     const skipper = [elements[0]];

//     // Iterate over the input array starting from the second element
//     for (let i = 1; i < elements.length; i++) {
//         // Add the current element's position to the previous element's skipper value
//         skipper.push(skipper[i - 1] + elements[i]);
//     }

//     // Add a 0 to the end of the skipper array to indicate the end of the skipping sequence
//     skipper.push(0);

//     // Return the skipper array
//     return skipper;
// };

const generateSkipperLogic = (elements) => {
    // Initialize the skipper array with the first element of the input array
    const skipper = [elements[0]];

    // Iterate over the input array starting from the second element
    for (let i = 1; i < elements.length; i++) {
        // Add the current element's position to the previous element's skipper value
        skipper.push(skipper[i - 1] + elements[i]);
    }

    // Add a 0 to the end of the skipper array to indicate the end of the skipping sequence
    skipper.push(0);

    // Return the skipper array
    return skipper;
};

const B = generateSkipperLogic(A);

console.log(B);