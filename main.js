var cards = document.getElementsByTagName("td");

for (var i = 0; i < cards.length; i++) {
    cards[i].onclick = function(e) {
        if (!this.parentElement.classList.contains("struck")) {
            var boxesInRow = this.parentElement.children;
            for (var j = 0; j < boxesInRow.length; j++) {
                boxesInRow[j].classList.toggle("strike");
            }
        }
    }
};

function showTextboxes() {

}

var players;
function submit() {
    players = document.getElementsByTagName("select")[0].value;
    var hide = document.getElementsByClassName("hide");
    for (var i = 0; i < hide.length; i++) {
        hide[i].style.display = "none";
    };

    var tr = document.querySelectorAll("tr:not(.title)");
    for (var i = 0; i < players; i++) {
        var td = document.createElement("th");
        var text = document.createTextNode("P" + String(i+1));
        td.appendChild(text);
        tr[0].appendChild(td);
    };
    for (var i = 1; i < tr.length; i++) {
        for (var j = 0; j < players; j++){
            var td = document.createElement("td");
            tr[i].appendChild(td);
        }
    };

    var boxes = document.querySelectorAll("tr > td:not(:first-child)");
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].onclick = function(e) {
            if (!this.parentElement.firstElementChild.classList.contains("strike") || this.textContent == "✓"){
                var card = this.parentElement.firstElementChild;
                switch (this.textContent) {
                    case "":
                        this.textContent = "✗";
                        card.classList.remove("strike");
                        this.parentElement.classList.remove("struck");
                        break;
                    case "✗":
                        this.textContent = "✓";
                        card.classList.add("strike");
                        this.parentElement.classList.add("struck");
                        break;
                    case "✓":
                        this.textContent = "";
                        card.classList.remove("strike");
                        this.parentElement.classList.remove("struck");
                }
            }
        }
    }
};
