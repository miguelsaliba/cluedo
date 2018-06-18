var players;
var cards = document.getElementsByTagName("td");
showTextboxes();

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
    var oldTextboxes = document.getElementsByTagName("input");
    try {
        while (true) {
            oldTextboxes[0].remove();
        }
    } catch(err) {};
    players = document.getElementsByTagName("select")[0].value;
    for (var i = 0; i < players; i++) {
        var textbox = document.createElement("input");
        textbox.setAttribute("type", "text");
        textbox.placeholder = "Player " + String(i + 1);
        document.getElementById("hide").insertBefore(textbox, document.getElementsByTagName("button")[0]);
    }
}

function submit() {
    players = document.getElementsByTagName("select")[0].value;
    var hide = document.getElementById("hide");
    hide.style.display = "none";

    var tr = document.querySelectorAll("tr:not(.title)");
    var texts = document.getElementsByTagName("input");
    for (var i = 0; i < players; i++) {
        var td = document.createElement("th");
        var text = document.createTextNode(texts[i].value);
        td.appendChild(text);
        tr[0].appendChild(td);
    };
    for (var i = 1; i < tr.length; i++) {
        for (var j = 0; j < players; j++){
            var td = document.createElement("td");
            tr[i].appendChild(td);
        }
    };

    var subtitles = document.getElementsByClassName("subtitle");
    for (var i = 0; i < subtitles.length; i++) {
        subtitles[i].colSpan = Number(players) + 1;
    }
    var boxes = document.querySelectorAll("tr > td:not(:first-child)");
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].onclick = function(e) {
            if (!this.parentElement.firstElementChild.classList.contains("strike") || this.style.backgroundColor == "forestgreen"){
                var card = this.parentElement.firstElementChild;
                var found;
                switch (this.style.backgroundColor) {
                    case "":
                        this.style.backgroundColor = "red";
                        card.classList.remove("strike");
                        this.parentElement.classList.remove("struck");
                        var siblings = this.parentElement.children;
                        var redBoxes = 0;
                        for (var i = 1; i < siblings.length; i++) {
                            if (siblings[i].style.backgroundColor == "red") {
                                redBoxes++;
                            };
                        }
                        redBoxes == players ? found = true : found = false;
                        break;
                    case "red":
                        this.style.backgroundColor = "forestgreen";
                        card.classList.add("strike");
                        this.parentElement.classList.add("struck");
                        found = false;
                        break;
                    case "forestgreen":
                        this.style.backgroundColor = "";
                        card.classList.remove("strike");
                        this.parentElement.classList.remove("struck");
                        found = false;
                }
                if (found) {
                    this.parentElement.firstElementChild.style.fontWeight = "bolder";
                    this.parentElement.firstElementChild.style.color = "green";
                } else {
                    this.parentElement.firstElementChild.style.fontWeight = "normal";
                    this.parentElement.firstElementChild.style.color = "black";
                }
            }
        }
    }
};
