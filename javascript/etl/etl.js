module.exports = class ETL {
    transform(old) {
        return Object.keys(old)
            .reduce((transformed, curr) => {
                old[curr].forEach((char) => transformed[char.toLowerCase()] = +curr);
                return transformed;
            }, {});
    }
};