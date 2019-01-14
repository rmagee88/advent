exports.parseNumbers = (body) => {
    const stringNumbers = body.split('\n');
    return stringNumbers.map((stringNum) => {
        return Number.parseInt(stringNum);
    }).filter((parsedNumber) => {
        return Number.isInteger(parsedNumber);
    });
};