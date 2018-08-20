module.exports = (message, error) => {
    console.error(message);
    error && process.exit(1);
}
