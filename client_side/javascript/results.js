var imported = document.createElement('script');
imported.src = './computerScript.js';
document.head.appendChild(imported);

function pc_result() {
    let xhttp = new XMLHttpRequest();

    let price = document.getElementsByName("price");
    let genre = document.getElementsByName('genre');
    let LOVE = document.getElementsByName('LOVE');
    let PlayLevel = document.getElementsByName('PlayLevel');
    let WorldStyle = document.getElementsByName('WorldStyle');
    let GPU = document.getElementsByName('gpu');

    scanButtons(price) === undefined ? price = 0 : price = scanButtons(price);
    scanButtons(genre) === undefined ? genre = 0 : genre = scanButtons(genre);
    scanButtons(LOVE) === undefined ? LOVE = 0 : LOVE = scanButtons(LOVE);
    // scanButtons(PlayLevel) === undefined ? PlayLevel = 0 : scanButtons(PlayLevel);
    PlayLevel = 0; // hot fix
    scanButtons(WorldStyle) === undefined ? WorldStyle = 0 : WorldStyle = scanButtons(WorldStyle);
    scanButtons(GPU) === undefined ? GPU = 0 : GPU = scanButtons(GPU);

    let sendstring = "price="+price+"&genre="+genre+"&LOVE="+LOVE+"&PlayLevel="+PlayLevel+
        "&worldStyle="+WorldStyle+"&GPU="+GPU;

    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
             alert(xhttp.responseText);
        }
    };
    xhttp.open("POST", "http://localhost:9001/PC.html", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(sendstring);
}

function mobile_result() {
    let xhttp = new XMLHttpRequest();

    let price = document.getElementsByName("price");
    let genre = document.getElementsByName('genre');
    let PlayLevel = document.getElementsByName('PlayLevel');
    let WorldStyle = document.getElementsByName('WorldStyle');

    scanButtons(price) === undefined ? price = 0 : price = scanButtons(price);
    scanButtons(genre) === undefined ? genre = 0 : genre = scanButtons(genre);
    scanButtons(PlayLevel) === undefined ? PlayLevel = 0 : scanButtons(PlayLevel);
    scanButtons(WorldStyle) === undefined ? WorldStyle = 0 : WorldStyle = scanButtons(WorldStyle);

    let sendstring = "price="+price+"&genre="+genre+"&PlayLevel="+PlayLevel+"&worldStyle="+WorldStyle;

    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            alert(xhttp.responseText);
        }
    };
    xhttp.open("POST", "http://localhost:9001/mobile.html", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(sendstring);
}

function xbox_result() {
    let xhttp = new XMLHttpRequest();

    let price = document.getElementsByName("price");
    let genre = document.getElementsByName('genre');
    let LOVE = document.getElementsByName('LOVE');
    let PlayLevel = document.getElementsByName('PlayLevel');
    let WorldStyle = document.getElementsByName('WorldStyle');

    scanButtons(price) === undefined ? price = 0 : price = scanButtons(price);
    scanButtons(genre) === undefined ? genre = 0 : genre = scanButtons(genre);
    scanButtons(LOVE) === undefined ? LOVE = 0 : LOVE = scanButtons(LOVE);
    scanButtons(PlayLevel) === undefined ? PlayLevel = 0 : scanButtons(PlayLevel);
    scanButtons(WorldStyle) === undefined ? WorldStyle = 0 : WorldStyle = scanButtons(WorldStyle);

    let sendstring = "price="+price+"&genre="+genre+"&LOVE="+LOVE+"&PlayLevel="+PlayLevel+"&worldStyle="+WorldStyle;

    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            alert(xhttp.responseText);
        }
    };
    xhttp.open("POST", "http://localhost:9001/XboxOneX.html", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(sendstring);
}

function ps4_result() {
    let xhttp = new XMLHttpRequest();

    let price = document.getElementsByName("price");
    let genre = document.getElementsByName('genre');
    let LOVE = document.getElementsByName('LOVE');
    let PlayLevel = document.getElementsByName('PlayLevel');
    let WorldStyle = document.getElementsByName('WorldStyle');

    scanButtons(price) === undefined ? price = 0 : price = scanButtons(price);
    scanButtons(genre) === undefined ? genre = 0 : genre = scanButtons(genre);
    scanButtons(LOVE) === undefined ? LOVE = 0 : LOVE = scanButtons(LOVE);
    scanButtons(PlayLevel) === undefined ? PlayLevel = 0 : scanButtons(PlayLevel);
    scanButtons(WorldStyle) === undefined ? WorldStyle = 0 : WorldStyle = scanButtons(WorldStyle);

    let sendstring = "price="+price+"&genre="+genre+"&LOVE="+LOVE+"&PlayLevel="+PlayLevel+"&worldStyle="+WorldStyle;

    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            alert(xhttp.responseText);
        }
    };
    xhttp.open("POST", "http://localhost:9001/mobile.html", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(sendstring);
}


