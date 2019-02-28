process.stdin.on("readable", function() {
    let word;

    while (word = this.read()) {
        console.log(`receiver ${word.length} bytes of data`);
    }
});