const main=document.getElementById("main");
main.remove();
const newHeader = document.createElement("h1");
newHeader.id="victory";
newHeader.textContent="Nick is the champion";
document.getElementById("body").append(newHeader);