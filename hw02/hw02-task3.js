/*

ATTRIBUTION:
Lorem Ipsem text generated by https://www.lipsum.com/feed/html
Lyrics to 99 Bottles of Beer on the Wall taken from http://www.99-bottles-of-beer.net/lyrics.html

*/

//Using wrapper function as described in lecture notes
(function() {
  "use strict";

  function init() {
    var rside = document.getElementById('rside');
    document.getElementById("lorem").addEventListener("click", display_lorem_ipsem);
    document.getElementById("bottles").addEventListener("click", display_bottles);
    document.getElementById("last").addEventListener("click", display_last_thing);
    display_lorem_ipsem();

  }

  function display_lorem_ipsem() {
    var link = document.getElementById('rside');
    link.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                     "Quisque consectetur augue ut aliquam fermentum. " +
                     "Aliquam odio quam, tristique non tincidunt sit amet, feugiat in tellus. " +
                     "Sed ut est vel neque rutrum aliquet. " +
                     "Nunc pharetra consectetur lobortis. " +
                     "Sed varius magna mauris, nec posuere ipsum commodo ac. " +
                     "Pellentesque ullamcorper suscipit dui. " +
                     "Nam ut nunc ac massa sagittis molestie eget vel ex. Mauris et tortor in risus posuere dignissim. \n\n" +
                     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                     "Quisque consectetur augue ut aliquam fermentum. " +
                     "Aliquam odio quam, tristique non tincidunt sit amet, feugiat in tellus. " +
                     "Sed ut est vel neque rutrum aliquet. " +
                     "Nunc pharetra consectetur lobortis. " +
                     "Sed varius magna mauris, nec posuere ipsum commodo ac. " +
                     "Pellentesque ullamcorper suscipit dui. " +
                     "Nam ut nunc ac massa sagittis molestie eget vel ex. Mauris et tortor in risus posuere dignissim. \n\n" +
                     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                     "Quisque consectetur augue ut aliquam fermentum. " +
                     "Aliquam odio quam, tristique non tincidunt sit amet, feugiat in tellus. " +
                     "Sed ut est vel neque rutrum aliquet. " +
                     "Nunc pharetra consectetur lobortis. " +
                     "Sed varius magna mauris, nec posuere ipsum commodo ac. " +
                     "Pellentesque ullamcorper suscipit dui. " +
                     "Nam ut nunc ac massa sagittis molestie eget vel ex. Mauris et tortor in risus posuere dignissim. \n\n" +
                     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                     "Quisque consectetur augue ut aliquam fermentum. " +
                     "Aliquam odio quam, tristique non tincidunt sit amet, feugiat in tellus. " +
                     "Sed ut est vel neque rutrum aliquet. " +
                     "Nunc pharetra consectetur lobortis. " +
                     "Sed varius magna mauris, nec posuere ipsum commodo ac. " +
                     "Pellentesque ullamcorper suscipit dui. " +
                     "Nam ut nunc ac massa sagittis molestie eget vel ex. Mauris et tortor in risus posuere dignissim. \n\n";

  }

  function display_bottles() {
    var link = document.getElementById('rside');
    link.innerText = "99 bottles of beer on the wall, 99 bottles of beer.\nTake one down and pass it around, 98 bottles of beer on the wall.\n\n" +
                     "98 bottles of beer on the wall, 98 bottles of beer.\nTake one down and pass it around, 97 bottles of beer on the wall.\n\n" +
                     "97 bottles of beer on the wall, 97 bottles of beer.\nTake one down and pass it around, 96 bottles of beer on the wall.\n\n" +
                     "96 bottles of beer on the wall, 96 bottles of beer.\nTake one down and pass it around, 95 bottles of beer on the wall.\n\n";
  }

  function display_last_thing() {
    var link = document.getElementById('rside');
    link.innerText = "this is the third thing";
  }

  window.addEventListener('load', init, false);

})();


