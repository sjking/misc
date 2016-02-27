#!/usr/bin/env node
// Count the most common occurence(s) of a character(s) in a string
// Runs in linear time: O(n)
var str = process.argv[2];

if (!str) {
    console.error("usage: %s <string>", process.argv[1].split('/').pop());
    process.exit(1);
}

function mostCommon(str) {
    var occurences = {};
    var alphabet = [];
    var mostCommon = [];
    var max = 0;

    for (var i=0; i < str.length; i++) {
        var curr = str[i];
        if (occurences[curr]) {
            occurences[curr] += 1;
        }
        else {
            occurences[curr] = 1;
            alphabet.push(curr);
        }
    }
    for (var k=0; k < alphabet.length; k++) {
        var curr = alphabet[k];
        if (occurences[curr] > max) {
            max = occurences[curr];
            mostCommon = [curr];
        }
        else if (occurences[curr] === max) {
            mostCommon.push(curr);
        }
    }

    return [mostCommon, max];
}

var common = mostCommon(str);

console.log("Most common character in string '%s' are '%s' with %d occurences each", str, common[0].join(", "), common[1]);
