function randomInt(min, max) {
    console.log("random");
    return Math.floor(Math.random() * (max - min)) + min;
}

export { randomInt };