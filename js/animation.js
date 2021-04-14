function changeName(input) {
  var nameValue = input.playername.value
  alert("you typed: " + nameValue);
  myObj = {code: "ABCD1234", name: nameValue};
  myJSON = JSON.stringify(myObj);
  localStorage.setItem("testJSON", myJSON);
}

function tableFromJson() {

  var myBooks = JSON.parse(data);

  var col = [];
  for (var i = 0; i < myBooks.length; i++) {
    for (var key in myBooks[i]) {
      if (col.indexOf(key) === -1) {
        col.push(key);
      }
    }
  }

  // Create a table.
  var table = document.createElement("table");

  // add json data to the table as rows.
  for (var i = 0; i < myBooks.length; i++) {

    tr = table.insertRow(-1);

    for (var j = 0; j < 4; j++) {
      var tabCell = tr.insertCell(-1);
      // tabCell.innerHTML = myBooks[i][col[j]];
      if (j == 0) {
        tabCell.className = "Left_Border";
        tabCell.innerHTML = myBooks[i][col[j]];
      } else {
        var pCard = document.createElement("a");
        pCard.className = "Preview_Card";
        pCard.style = "background-image: url('" + myBooks[i][col[1]][j - 1] + "');"
        pCard.href = "https://scryfall.com";
        pCard.target = "_blank";

        tabCell.innerHTML = "a";
        tabCell.appendChild(pCard);
      }
      if (j == 3) {
        tabCell.className = "Right_Border";
      }
    }
  }

  // Now, add the newly created table with json data, to a container.
  var divShowData = document.getElementById('Player_List');
  divShowData.innerHTML = "";
  divShowData.appendChild(table);

  // document.getElementById('msg').innerHTML = '<br />You can later <a href="https://www.encodedna.com/javascript/dynamically-add-remove-rows-to-html-table-using-javascript-and-save-data.htm" target="_blank" style="color:#1464f4;text-decoration:none;">get all the data from table and save it in a database.</a>';
}
