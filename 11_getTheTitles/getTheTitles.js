const getTheTitles = function (books) {
    let array = []
    books.forEach(info => {
        array.push(info.title)
    });
    return array
};

// Do not edit below this line
module.exports = getTheTitles;


