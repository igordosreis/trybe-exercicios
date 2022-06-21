const techList = (techsArray, name) => {
    const techsWithName = [];
    if (!techsArray.length) return 'Vazio!';
    for (let tech of techsArray.sort()) {
        techsWithName.push({
            tech: tech,
            name: name,
        });
    }
    return techsWithName;
}
module.exports = techList;