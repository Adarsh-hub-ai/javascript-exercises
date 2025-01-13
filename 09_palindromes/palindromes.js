const palindromes = function (string) {
    let new_string = string.replace(/[^a-zA-z0-9]/g, "").toLowerCase()
    let reversed_string = new_string.split("").reverse().join("").toLowerCase()
    return (reversed_string === new_string)
};

// Do not edit below this line
module.exports = palindromes;

