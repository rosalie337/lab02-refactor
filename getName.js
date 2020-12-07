const getName = (items, name) => {
    const foundName = items.find(item => item.name === name);
    return foundName;
}

module.exports = {
  getName
};