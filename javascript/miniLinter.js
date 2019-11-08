let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];
let unnecessaryWords = ['extremely', 'literally', 'actually' ];
const storyWords = story.split(" ")
const betterWords = storyWords.filter(word => !unnecessaryWords.includes(word))

// Count overused words
let overWordCount = 0
const logOverUsedWord = word => {
    if (overusedWords.includes(word)) {
        overWordCount++;
    }
}

// Apply overused word overcount function
storyWords.forEach(word => logOverUsedWord(word))

// Count total sentences
let sentenaceCount = 0
const logSentance = word => {
    if (['.', '!'].includes(word[word.length-1])) {
        sentenaceCount++;
    }
}

// Apply sentenance count function
storyWords.forEach(word => logSentance(word))

const showStoryStats = () => {
    console.log('');
    console.log(`Total story words is ${storyWords.length}.`);
    console.log(`Replacing overused word cout ${betterWords.length}.`);
    console.log(`Overused word count ${overWordCount}.`);
    console.log(`The total sentenance count is ${sentenaceCount}.`);
    console.log('');
}

showStoryStats()

console.log(betterWords.join(' '));
