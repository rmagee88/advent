exports.reduce = (arr) => {
    const initialValue = 0;
    return arr.reduce((total, currentValue) => {
        return total + currentValue;
    }, initialValue);
};

exports.findFirstRepeatedSum = (arr) => {
    const found = new Set();
    let start = 0;
    for (let i = 0; i < Infinity; i++) {

        start = arr[i % arr.length] + start;
        if (found.has(start)) {
            return start;
        } else {
            found.add(start);
        }
    }
};