{
    // problem - 3 : Write a TypeScript function countWordOccurrences that takes a sentence (string) and a word (string). It should return the number of times the word appears in the sentence, case-insensitively.

    const countWordOccurrences = (sentence: string, word: string): number => {
        return sentence
            .toLowerCase()
            .split(" ")
            .filter((w) => w.toLowerCase().includes(word.toLowerCase())).length;
    };

    const count = countWordOccurrences(
        "TypeScript is great. I love TypeScript! It gives us  typeSafety",
        "types"
    );
    console.log(count);
}
