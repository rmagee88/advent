const getLetterFrequency = (string) => {
    const frequencyMap = {};
    string.split('').map((char) => {
        if (frequencyMap[char]) {
            frequencyMap[char]++;
        } else {
            frequencyMap[char] = 1;
        }
    });
    return frequencyMap;
};

// TODO: refactor to it's own class
const getTwosAndThrees = (frequencyMap) => {
 const twosAndThrees = { 'two': 0, 'three': 0};
 const keys = Object.keys(frequencyMap);
 keys.forEach((key) => {
     const letterFrequency = frequencyMap[key];
     if (letterFrequency === 2 && !twosAndThrees.two) {
         twosAndThrees.two++;
     } else if (letterFrequency === 3 && !twosAndThrees.three) {
         twosAndThrees.three++;
     }
 });

 return twosAndThrees;
};

const getCheckSum = (frequencyMaps) => {
    let twos = 0;
    let threes = 0;

    frequencyMaps.forEach((frequencyMap) => {
        const twosAndThrees = getTwosAndThrees(frequencyMap);
        twos += twosAndThrees.two;
        threes += twosAndThrees.three;
    });

    return twos * threes;
};

exports.getCheckSumForIds = (strings) => {
  // get frequencies for each string
    const frequencyMaps = [];
    strings.forEach((string) => {
        frequencyMaps.push(getLetterFrequency(string));
    });

    return getCheckSum(frequencyMaps);
};