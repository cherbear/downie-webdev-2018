/*

ATTRIBUTION:
Code based initially off lecture notes and 
add_paragraph was heavily reliant from https://www.w3schools.com/jsref/met_node_appendchild.asp but changed
to fit specifications

*/

//Using wrapper function as described in lecture notes
(function() {
  "use strict";

  function init() {
    var headernumber = document.getElementById('headernumber');
    headernumber.innerText = 10;
    document.getElementById("alert-value").addEventListener("click", current_value);
    document.getElementById("increment-value").addEventListener("click", add_value);
    document.getElementById("new-paragraph").addEventListener("click", add_paragraph);
  }

  function current_value() {
    var button = document.getElementById('headernumber');
    alert(button.innerText);
  }

  function add_value() {
    var button = document.getElementById('headernumber');
    headernumber.innerText = parseInt(headernumber.innerText) + 1;
  }

  function add_paragraph() {
    var node = document.createElement('p');
    var current = document.createTextNode(document.getElementById('headernumber').innerText);
    node.appendChild(current);
    var button = document.getElementById('bottom').appendChild(node);

    button.innerText = button.innerText;
  }

  window.addEventListener('load', init, false);

})();


