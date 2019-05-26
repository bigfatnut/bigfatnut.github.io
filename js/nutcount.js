function ihadANut() {
    fetch('https://script.google.com/macros/s/AKfycbxg-JrtMtFm8f7w8DKj0ApIv8J20hK8lFPmHUYZBo7MNYc6dx4/exec', { method: 'POST', body: new FormData(document.forms['i-had-a-nut'])})
}

function detect69(nutCount) { // Lol
    let stringNut = nutCount.toString()
    if (stringNut.includes("69")) {
        return true
    }
    return false
}

function zoomin(){
    ihadANut();
    if (nutCount != 0) {
        document.getElementById("nutCount").innerHTML = ++nutCount
    }
    const nut = document.getElementById("nut");
    let width = nut.clientWidth
    nut.style.width = (width + 100) + "px";
    nut.style.height = (width + 100) + "px";
}