function generate(){
    let quotes = {
        "-Rabindra Thapa": '"Everything you see is not real"',
        "-Albert Einstein": '"The first statement is true"',
        "-Isacc Newton": '"Rabindra can never be wrong"'
    }

    let author = Object.keys(quotes);

    let authors = author[Math.floor(Math.random()* author.length)];

    let quote = quotes[authors];

    document.getElementById("quotes").innerHTML = quote;
    document.getElementById("author").innerHTML = authors;
}