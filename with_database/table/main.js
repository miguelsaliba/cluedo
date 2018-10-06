function submit(players, names) {
    var tr = document.querySelectorAll("tr:not(.title)");
    for (var i = 1; i < tr.length; i++) {
        for (var j = 0; j < players; j++){
            var td = document.createElement("td");
            td.style.backgroundColor = 'red';
            tr[i].appendChild(td);
        }
    };

    for (var i = 0; i < players; i++) {
        var td = document.createElement("th");
        var text = document.createTextNode(names[i]);
        td.appendChild(text);
        tr[0].appendChild(td);
    };
    var subtitles = document.getElementsByClassName("subtitle");
    for (var i = 0; i < subtitles.length; i++) {
        subtitles[i].colSpan = Number(players) + 1;
    }
    var boxes = document.querySelectorAll("tr > td:not(:first-child)");
    /*for (var i = 0; i < boxes.length; i++) {
        boxes[i].onclick = function(e) {
            if (!this.parentElement.firstElementChild.classList.contains("strike") || this.style.backgroundColor == "forestgreen"){
                var card = this.parentElement.firstElementChild;
                var found;
                var siblings = this.parentElement.children;
                if (this.style.backgroundColor == "") {
                    this.style.backgroundColor = "red";
                    var redBoxes = 0;
                    for (var i = 1; i < siblings.length; i++) {
                        if (siblings[i].style.backgroundColor == "red") {
                            redBoxes++;
                        };
                    }
                    redBoxes == players ? found = true : found = false;
                } else if (this.style.backgroundColor == "red") {
                    for (var i = 1; i < siblings.length; i++) {
                        siblings[i].classList.add("red");
                    }
                    this.style.backgroundColor = "forestgreen";
                    card.classList.add("strike");
                    this.parentElement.classList.add("struck");
                    found = false;
                } else if (this.style.backgroundColor == "forestgreen") {
                    for (var i = 1; i < siblings.length; i++) {
                        siblings[i].classList.remove("red");
                    }
                    this.style.backgroundColor = "lightgray";
                    card.classList.remove("strike");
                    this.parentElement.classList.remove("struck");
                    found = false;
                } else if (this.style.backgroundColor == "lightgray"){
                    this.style.backgroundColor = "yellow";
                    found = false;
                } else {
                    this.style.backgroundColor = "";
                    found = false;
                }
                if (found) {
                    this.parentElement.firstElementChild.classList.add("found");
                } else {
                    this.parentElement.firstElementChild.classList.remove("found");
                }
            }
        }
    }*/
};
