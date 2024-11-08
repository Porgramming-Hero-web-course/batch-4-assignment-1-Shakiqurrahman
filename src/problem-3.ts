{
    // problem - 3 ---> Create a TypeScript function called countWordOccurrences that accepts a sentence (string) and a word (string). The function should return the number of times the word appears in the sentence, ignoring case. Use the simple sentence without punctuation as input.

    const countWordOccurrences = (sentence: string, word: string): number => {
        return sentence
            .toLowerCase()
            .split(" ")
            .filter((w) => w.toLowerCase() === word.toLowerCase()).length;
    };

    const count = countWordOccurrences(
        "I love typescript TypeScript",
        "typescript"
    );
    console.log(count);
}
