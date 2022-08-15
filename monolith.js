

"use strict";


try {
    var pseudo_random_ISBN_generator = () => {
        let stringie = '';
        for (let indx_iterator = 0; indx_iterator <= 12; indx_iterator++) {
            stringie += String(Math.floor(Math.random() * 10));
            if (
                (indx_iterator === 2) ||
                (indx_iterator === 3) ||
                (indx_iterator === 5) ||
                (indx_iterator === 11)
            ) stringie += '-';
        };
        return (stringie);
    };
} catch (err) {
    if (err) console.log(err);
};


try {
    require("http").createServer((req, res) => {
        if (req.url === '/') {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(start_HTML);
            res.end();
        }
        else if (require("url").parse(req.url, true).query.initialized === "true") {
            require("mongodb").MongoClient.connect("mongodb://localhost:27017", (err, db) => {
                if (err) throw err;
                db.db("tryout_db").createCollection("books_collection", (err, rlst) => {
                    if (err) throw err;
                    db.close();
                });
                db.db("tryout_db").collection("books_collection").insertMany([
                    {
                        ISBN: `${pseudo_random_ISBN_generator.call()}`,
                        title: "A Walk By Sand Trees", author: "Bukekele Mengva"
                    },
                    {
                        ISBN: `${pseudo_random_ISBN_generator.call()}`,
                        title: "Moonlight Wall", author: "Frederick Oline"
                    },
                    {
                        ISBN: `${pseudo_random_ISBN_generator.call()}`,
                        title: "Before Big Bangs", author: "Jeffrey Khajyti"
                    },
                    {
                        ISBN: `${pseudo_random_ISBN_generator.call()}`,
                        title: "After Vacuum", author: "Alan Von Wolfram"
                    },
                    {
                        ISBN: `${pseudo_random_ISBN_generator.call()}`,
                        title: "Misinterpretation And The Bug", author: "Andrew Owens"
                    },
                    {
                        ISBN: `${pseudo_random_ISBN_generator.call()}`,
                        title: "Boogie & Skating Woogie", author: "Osvald Carti"
                    },
                    {
                        ISBN: `${pseudo_random_ISBN_generator.call()}`,
                        title: "Ch-room And Where Turings At?", author: "Natasha Quigley Foy"
                    }
                ], (err, rslt) => {
                    if (err) throw err;
                    db.close();
                });
            });
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(CRUD_HTML);
            res.end();
        }
        else { };
    }).listen(5500);
} catch (err) {
    if (err) console.log(err);
};


try {
    var start_HTML =
        `<!DOCTYPE html>` +
        `<html lang="en">` +
        `<head>` +
        `<meta charset="UTF-8" />` +
        `<meta name="viewport" content="width=device-width, initial-scale=1.0" />` +
        `<meta name="author" content="dodo : jozef.javorsky.strom44zem88@gmail.com" />` +
        `<meta name="description" content="Node.js & MongoDB tryouts." />` +
        `<title>eLibrary v0.03</title>` +
        `<link rel="icon" type="image/x-icon" sizes="16x16"` +
        `href="` +
        `data:image/x-icon;` +
        `base64,` +
        `iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAAXNS` +
        `R0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7D` +
        `AcdvqGQAAABXSURBVDhPzYxhCkAhDIJ34278zlI9hwuhtf71IaRD` +
        `s8nX/ueE18ZzJd9UiBocPoCAXHjXvDOMmneGMTIF5ML74lJ0kMy0` +
        `8PIgEWuTcClewwd1+abCqJl1ymiErwObpFQAAAAASUVORK5CYII=" />` +
        `<style>` +
        `#html-body {` +
        `background-color: rgb(122, 122, 122);` +
        `}` +
        `.hrElement {` +
        `height: 2mm;` +
        `width: 12cm;` +
        `background-color: rgb(0, 0, 0);` +
        `margin-left: 0;` +
        `margin-top: 4mm;` +
        `margin-left: 2mm;` +
        `}` +
        `#header-h2 {` +
        `margin-left: 3cm;` +
        `font-family: cursive;` +
        `text-decoration: overline underline;` +
        `display: inline-block;` +
        `color: rgba(0, 0, 0, 1);` +
        `border: 1mm dotted rgba(0, 0, 0, 1);` +
        `box-shadow: 0 0 7mm 4mm rgb(0, 0, 0);` +
        `}` +
        `#main-bttn {` +
        `border: 0;` +
        `margin-left: 3cm;` +
        `background-color: rgb(0, 200, 100);` +
        `font-family: cursive;` +
        `font-weight: 900;` +
        `padding: 1mm 2mm 1mm 2mm;` +
        `border-radius: 3mm;` +
        `color: rgba(0, 0, 0, 1);` +
        `}` +
        `</style>` +
        `</head>` +
        `<body id="html-body">` +
        `<hr class="hrElement" />` +
        `<header>` +
        `<h2 id="header-h2">|eLibrary v0.03|</h2>` +
        `</header>` +
        `<hr class="hrElement" />` +
        `<main>` +
        `<button id="main-bttn">initialize books collection of database</button>` +
        `</main>` +
        `<hr class="hrElement" />` +
        `<script>` +
        `"use strict";` +
        `try {` +
        `document.querySelector("#main-bttn").addEventListener("mouseenter", (ev) => {` +
        `ev.target.style.cursor = "pointer";` +
        `ev.target.style.backgroundColor = "rgb(0, 0, 0)";` +
        `ev.target.style.color = "rgba(0, 200, 100, 1)";` +
        `});` +
        `document.querySelector("#main-bttn").addEventListener("mouseleave", (ev) => {` +
        `ev.target.style.backgroundColor = "rgb(0, 200, 100)";` +
        `ev.target.style.color = "rgba(0, 0, 0, 1)";` +
        `});` +
        `} catch (err) {` +
        `if (err) console.log(err);` +
        `};` +
        `try {` +
        `document.querySelector("#main-bttn").addEventListener("click", () => {` +
        `window.location = "/?initialized=true";` +
        `});` +
        `} catch(err) {` +
        `if (err) console.log(err);` +
        `};` +
        `</script>` +
        `</body>` +
        `</html>`;
} catch (err) {
    if (err) console.log(err);
};


try {
    var CRUD_HTML =
        `<!DOCTYPE html>` +
        `<html lang="en">` +
        `<head>` +
        `<meta charset="UTF-8" />` +
        `<meta name="viewport" content="width=device-width, initial-scale=1.0" />` +
        `<meta name="author" content="dodo : jozef.javorsky.strom44zem88@gmail.com" />` +
        `<meta name="description" content="Node.js & MongoDB tryouts." />` +
        `<title>eLibrary v0.03</title>` +
        `<link rel="icon" type="image/x-icon" sizes="16x16"` +
        `href="` +
        `data:image/x-icon;` +
        `base64,` +
        `iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAAXNS` +
        `R0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7D` +
        `AcdvqGQAAABXSURBVDhPzYxhCkAhDIJ34278zlI9hwuhtf71IaRD` +
        `s8nX/ueE18ZzJd9UiBocPoCAXHjXvDOMmneGMTIF5ML74lJ0kMy0` +
        `8PIgEWuTcClewwd1+abCqJl1ymiErwObpFQAAAAASUVORK5CYII=" />` +
        `<style>` +
        `#html-body {` +
        `background-color: rgb(122, 122, 122);` +
        `}` +
        `.hrElement {` +
        `height: 2mm;` +
        `width: 12cm;` +
        `background-color: rgb(0, 0, 0);` +
        `margin-left: 0;` +
        `margin-top: 4mm;` +
        `margin-left: 2mm;` +
        `}` +
        `#header-h2 {` +
        `margin-left: 3cm;` +
        `font-family: cursive;` +
        `text-decoration: overline underline;` +
        `display: inline-block;` +
        `color: rgba(0, 0, 0, 1);` +
        `border: 1mm dotted rgba(0, 0, 0, 1);` +
        `box-shadow: 0 0 7mm 4mm rgb(0, 0, 0);` +
        `}` +
        `#main-nav {` +
        `display: inline-block;` +
        `margin-left: 2cm;` +
        `padding: 7mm 2cm 7mm 2cm;` +
        `border-radius: 10mm;` +
        `background-color: rgb(0, 0, 0);` +
        `}` +
        `.bttnCRUD {` +
        `border: 0;` +
        `background-color: rgb(122, 122, 122);` +
        `border-radius: 4mm;` +
        `padding: 3mm 6mm 3mm 6mm;` +
        `font-family: cursive;` +
        `font-weight: 900;` +
        `color: rgba(0, 0, 0, 1);` +
        `}` +
        `</style>` +
        `</head>` +
        `<body id="html-body">` +
        `<hr class="hrElement" />` +
        `<header>` +
        `<h2 id="header-h2">|eLibrary v0.03|</h2>` +
        `</header>` +
        `<hr class="hrElement" />` +
        `<main>` +
        `<nav id="main-nav">` +
        `<button id="c-reate-bttn" class="bttnCRUD">add</button>` +
        `<br />` +
        `<br />` +
        `<button id="r-ead-bttn" class="bttnCRUD">details</button>` +
        `<br />` +
        `<br />` +
        `<button id="u-pdate-bttn" class="bttnCRUD">edit</button>` +
        `<br />` +
        `<br />` +
        `<button id="d-elete-bttn" class="bttnCRUD">remove</button>` +
        `</nav>` +
        `</main>` +
        `<hr class="hrElement" />` +
        `<script>` +
        `"use strict";` +
        `try {` +
        `let node_bttnsCRUD = document.querySelectorAll(".bttnCRUD");` +
        `node_bttnsCRUD.forEach(bttn => {` +
        `bttn.addEventListener("mouseenter", (ev) => {` +
        `ev.target.style.cursor = "pointer";` +
        `ev.target.parentElement.style.backgroundColor = "rgb(0, 200, 100)";` +
        `});` +
        `bttn.addEventListener("mouseleave", (ev) => {` +
        `ev.target.parentElement.style.backgroundColor = "rgb(0, 0, 0)";` +
        `});` +
        `});` +
        `} catch(err) {` +
        `if (err) console.log(err);` +
        `};` +
        `</script>` +
        `</body>` +
        `</html>`;
} catch (err) {
    if (err) console.log(err);
};

