var paras
var parasText = []
document.addEventListener("DOMContentLoaded", function () {
    paras = document.getElementsByTagName("p");
    for (var i = 0; i < paras.length; i++) {
        parasText.push(paras[i].innerHTML);
    }
    for (var i = 0; i < paras.length; i++) {
        paras[i].innerHTML = parasText[i].replace(/{{}}/g, "15")
    }

})
function copyFunction(para) {
    navigator.clipboard.writeText(document.getElementById(para).innerHTML.replace(/\s\s+/g, " ").replace(/<br>/g, "\n"));
}

function updateParas(q) {
    for (var i = 0; i < paras.length; i++) {
        paras[i].innerHTML = parasText[i].replace(/{{}}/g, q)
    }
    console.log("function called");
}