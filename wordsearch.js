const wordSearch = (letters, word) => {
    if (!letters.length) {
        return false;
    };
    const horizontalJoin = letters.map(ls => ls.join(''));
    for (l of horizontalJoin) {
        if (l.includes(word)) {
            return true
        }
    }
    let vertical = [];
    for (let i = 0; i < letters[i].length; i++) {
        vertical = [];
        for (j = 0; j < letters.length; j++) {
            vertical.push(letters[j][i]);
            if (vertical.join('').includes(word)) {
                return true;
            }
        }
    }
    return false;
};

module.exports = wordSearch;