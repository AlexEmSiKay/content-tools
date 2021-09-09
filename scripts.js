var paras
var parasText = []
document.addEventListener("DOMContentLoaded", function () {
    paras = document.getElementsByTagName("p");
    for (var i = 0; i < paras.length; i++) {
        parasText.push(paras[i].innerHTML);
    }
    for (var i = 0; i < paras.length; i++) {
        paras[i].innerHTML = parasText[i].replace(/{{}}/g, "15").replace(/{{h}}/g, "1").replace(/{{m}}/g, "20");
    }

})
function copyFunction(para) {
    navigator.clipboard.writeText(document.getElementById(para).innerHTML.replace(/\s\s+/g, " ").replace(/<br>/g, "\n"));
}

function updateParas(q) {
    var h = Math.floor(q / 60);
    var m = q % 60
    var d = q / 100
    var dFixed = d.toFixed(2)
    if (q > 99) {
        var lead = 'DELETE ME'
    }
    else {
        var lead = q
    }
    for (var i = 0; i < paras.length; i++) {
        paras[i].innerHTML = parasText[i].replace(/{{}}/g, q).replace(/{{h}}/g, h).replace(/{{m}}/g, m).replace(/{{d}}/g, d).replace(/{{dF}}/g, dFixed).replace(/{{l}}/g, lead);
    }
    // console.log("function called");
}