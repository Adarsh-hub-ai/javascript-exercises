const leapYears = function(year) {
switch (true) {
    case (year % 4 === 0 && year % 100 !== 0):
        return true
    case(year % 4 !== 0):
    return false
    case(year % 4 === 0 && year % 100 === 0):
    return checkDivisibleBy400(year)
    default:
        break;

        function checkDivisibleBy400(year) {
            if (year % 400 === 0) {
                return true
            }else {
                 return false
            }
        }
}
};

// Do not edit below this line
module.exports = leapYears;


