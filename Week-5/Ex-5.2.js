function isVowel(char) {
    let vowel = 'aeiou';
    return vowel.includes(char);
}

function vowelcount(str) {
    const vowelMap = new Map();
    for(let char of str) {
        let lowercaseChar = char.toLowerCase();
        if (isVowel(lowercaseChar)) {
            if(vowelMap.has(lowercaseChar)) {
                vowelMap.set(lowercaseChar, vowelMap.get(lowercaseChar) + 1);
            } else {
                vowelMap.set(lowercaseChar, 1);
            }
        }
    }
    return vowelMap;
}

console.log(vowelcount('encyclopaedia')); //Map(4) { 'e' => 2, 'o' => 1, 'a' => 2, 'i' => 1 }