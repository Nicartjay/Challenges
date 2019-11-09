
/**
 * Bingo function
 */
function generateBingoCardValues() {

    var bingo_card = [];
    var bingo_letters = ["B", "I", "N", "G", "O"];

    var b_range = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    var i_range = [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
    var n_range = [31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45];
    var g_range = [46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60];
    var o_range = [61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75];

    var bingo_ranges = {
        "B": b_range,
        "I": i_range,
        "N": n_range,
        "G": g_range,
        "O": o_range
    };

    var bingo_values_count = {
        "B": 5,
        "I": 5,
        "N": 4,
        "G": 5,
        "O": 5
    };

    // for each letter
    for (var letter_ctr = 0; letter_ctr < bingo_letters.length; letter_ctr++) {

        var current_letter = bingo_letters[letter_ctr];

        // Generate values
        for (var i = 0; i < bingo_values_count[current_letter]; i++) {

            // get the range for the current letter
            var current_range = bingo_ranges[current_letter];

            // get a random index
            var chosen_one_index = Math.floor(Math.random() * current_range.length);

            // get the value form that chosen index
            var chosen_one = current_range[chosen_one_index];

            // insert value into the bingo card
            bingo_card.push(current_letter + chosen_one);

            // remove from the list of possible values
            current_range.splice(chosen_one_index, 1);
        }
    }

    return bingo_card;

}

console.log(generateBingoCardValues());