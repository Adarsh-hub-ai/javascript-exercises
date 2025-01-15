const findTheOldest = function (person) {

    const currentYear = new Date().getFullYear()
    const ages = person.map(individual => {
        const deathyear = individual.yearOfDeath || currentYear
        return deathyear - individual.yearOfBirth
    })
    let maxAge = ages.reduce((largest, age) => age > largest ? age : largest, ages[0])

    let oldestPersonAge = ages.indexOf(maxAge)

    return person[oldestPersonAge]
};

// Do not edit below this line
module.exports = findTheOldest;


