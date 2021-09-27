var paras
var parasText = []
document.addEventListener("DOMContentLoaded", function () {
    paras = document.getElementsByTagName("p");
    vars = document.getElementsByClassName("variable")
    console.log(vars)
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

function updateParas() {
    q = document.getElementById("quantity").value
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
        console.log(vars[i].value);
        if (vars[i].value != "") {
            var extra = (paras[i].innerHTML + ',<br>' + paras[i].innerHTML).split('<br>');
            console.log(extra)
            for (var j = 0; j < extra.length / 2; j++) {
                extra[j] = '"' + vars[i].value + " = " + extra[j].slice(1);
            }
            for (var j = extra.length / 2; j < extra.length; j++) {
                extra[j] = extra[j].slice(0, ((j == extra.length - 1) ? -1 : -2)) + " = " + vars[i].value + '",';
            }
            paras[i].innerHTML += ",<br>" + extra.join('<br>')
        }
        // console.log("function called");
    }
}

function update_escape() {
    var text_in = document.getElementById("input").value;
    document.getElementById("output").innerHTML = text_in.replace(/(\{\' \'\})?(?<!\>)\n(?!\<)/g, ' ').replace(/\t/g, ' ').replace(/ +/g, ' ').replace(/\\/g, '\\\\').replace(/\"/g, '\\"').replace(/\> \</, '><').replace(/\</g, "&lt").replace(/\>/, '&gt').replace(/\n/g, '<br>');//
}