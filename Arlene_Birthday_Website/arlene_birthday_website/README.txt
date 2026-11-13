ARLENE'S BIRTHDAY WEBSITE
=========================

FILES
- index.html  : website structure and birthday message
- style.css   : colors, layout, desktop/tablet/mobile responsiveness
- script.js   : jazz player and interactive birthday letter
- assets/     : place your jazz MP3 here

HOW TO OPEN
1. Keep index.html, style.css, and script.js in the same folder.
2. Double-click index.html to preview in your browser.
3. For publishing, upload the whole folder to your preferred static website host.

HOW TO ADD YOUR OWN PHOTOS
Open index.html and find the section with class="scrapbook-grid".
Replace each sample image URL in an <img src="..."> with your own image path, e.g.
<img src="images/arlene-photo-1.jpg" alt="Arlene">

Create an "images" folder and put your pictures inside it.

HOW TO ADD JAZZ MUSIC
1. Create a folder named "assets" beside index.html.
2. Add an MP3 you are allowed to use and name it jazz.mp3.
3. The music button will play it after the visitor taps the button.
   Browsers generally block autoplay until the visitor interacts with the page.

HOW TO EDIT THE LETTER
In index.html, find <article class="letter-paper" id="letterPaper">.
Edit the paragraphs between <p> and </p>. Keep the opening and closing tags.

RESPONSIVE
The design includes responsive CSS breakpoints for desktop, tablet, and phone.
No separate mobile files are required.
