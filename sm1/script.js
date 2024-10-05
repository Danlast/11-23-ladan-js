const quoteButton = document.getElementById("next");
const quoteElement = document.getElementById("quote");
const quoteElementA = document.getElementById("author");


const yandexTranslate = (from, to, txt) =>
    `https://translate.yandex.ru/?source_lang=${from}&target_lang=${to}&text=${txt}`;


const getQuote = async () => {
    const res = await fetch('https://api.quotable.io/random');
    const quote = await res.json();
    const quoteContent = quote.content;
    const quoteAuthor = quote.author;
    quoteElement.innerText = quoteContent;
    quoteElementA.innerText = quoteAuthor;

    // await fetch(yandexTranslate("en", "ru", encodeURI(`${quoteContent}`))).then((res2) => 
    //     console.log(res2.text()));
}

quoteButton.addEventListener("click", getQuote)