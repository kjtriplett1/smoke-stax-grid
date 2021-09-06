i = 0;
    myText = "Buy one get one free deals everyday!";
    let sequence = setInterval(update,100);

function update() {
    i++;
    if (i > myText.length) {
        i = 0;
    }
    marqueeText = myText.substring(i, myText.length);
    marqueeText += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp";
    marqueeText += myText.substring(0,i);
    document.getElementById("marquee").innerHTML = marqueeText;
}