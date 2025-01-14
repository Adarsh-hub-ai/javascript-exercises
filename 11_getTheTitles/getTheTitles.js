const getTheTitles = function (books) {
    let array = []
    books.forEach(info => {
        array.push(info.title)
    });
    return array
};

// Do not edit below this line
module.exports = getTheTitles;



// const books = [
//     {
//         title: 'Book',
//         author: 'Name'
//     },
//     {
//         title: 'Book2',
//         author: 'Name2'
//     }
// ]

// let array = []
// books.forEach(book => {

//     array.push(book.title)
// });

// console.log(array)


// let getTheTitles = function (book) {
//     let array = []
//     books.forEach(info => {
//         array.push(info.title)
//     })
//     return array
// }

// console.log(getTheTitles(books))