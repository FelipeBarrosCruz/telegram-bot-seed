function Brain(name) {
    return require('./${name}'.replace('${name}', name));
}

module.exports = Brain