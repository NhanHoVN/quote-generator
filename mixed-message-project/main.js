const quoteFactory = (id, content, author) => {
    return {
        id,
        content,
        author
    }
}

function randomlyMessage(array) {
    let len = array.length //Find the length of array
    let randomIndex = Math.floor(Math.random() * len);
    return `The quote of today is: ${array[randomIndex].content} --- ${array[randomIndex].author}`;
}

const quote1 = quoteFactory(1, "I learned that courage was not the absence of fear, but the triumph over it. The brave man is not he who does not feel afraid, but he who conquers that fear.", "Nelson Mandela");
const quote2 = quoteFactory(2,  "If you believe it will work, you'll see opportunities. If you believe it won't, you will see obstacles.", "Wayne Dyer");
const quote3 = quoteFactory(3,  "Believe you can and you're halfway there.", "Theodore Roosevelt ");

const quoteArray = [];
quoteArray.push(quote1);
quoteArray.push(quote2);
quoteArray.push(quote3);

console.log(randomlyMessage(quoteArray));
