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
    const q = document.getElementById("quantity").value
    var h = Math.floor(q / 60);
    var m = q % 60
    var d = q / 100
    var dFixed = d.toFixed(2)
    var c = q * 100
    if (q > 99) {
        var lead = 'DELETE ME'
    }
    else {
        var lead = q
    }
    if (q % 1 != 0) {
        var trail = 'DELETE ME'
    }
    else {
        var trail = q
    }

    for (var i = 0; i < paras.length; i++) {
        paras[i].innerHTML = parasText[i].replace(/{{}}/g, q).replace(/{{h}}/g, h).replace(/{{m}}/g, m).replace(/{{d}}/g, d).replace(/{{dF}}/g, dFixed).replace(/{{l}}/g, lead).replace(/{{t}}/g, trail).replace(/{{c}}/g, c).replace(/<br>/g, '<br>\n').replace(/\".*DELETE ME[\s\S]*?\"(,<br>)?/g, '').replace(/\n"/g, '"');
        //console.log(vars[i].value);
        if (vars[i].value !== "") {
            var extra = (paras[i].innerHTML + ',<br>' + paras[i].innerHTML).split('<br>');
            console.log(extra)
            for (var j = 0; j < extra.length / 2; j++) {
                extra[j] = vars[i].value + " = " + extra[j];
            }
            for (var j = extra.length / 2; j < extra.length; j++) {
                extra[j] = extra[j] + " = " + vars[i].value;
            }
            paras[i].innerHTML += "<br>" + extra.join('<br>')
        }
        // console.log("function called");

    }
    if (!(q < 1000 || isNaN(+q))) {
        console.log('running commas')
        var num = Math.floor(q);
        var dcount = 0
        while (num > 0) {
            num = Math.floor(num / 10);
            dcount++
        }
        console.log(dcount)
        var u = q
        for (var i = 0; i < Math.floor((dcount - 1) / 3); i++) {
            u = u.slice(0, dcount - 3 * (i + 1)) + "," + u.slice(dcount - 3 * (i + 1))
        }
        var qr = u
        for (var i = 0; i < paras.length; i++) {
            paras[i].innerHTML += ',<br>' + parasText[i].replace(/{{}}/g, qr)
        }
    }
}

function updateCoords() {
    var x = document.getElementById("vx").value
    var y = document.getElementById("vy").value
    for (var i = 0; i < paras.length; i++) {
        paras[i].innerHTML = parasText[i].replace(/{{x}}/g, x).replace(/{{y}}/g, y).replace(/<br>/g, '<br>\n');
    }
}

function update_escape() {
    var text_in = document.getElementById("input").value;
    document.getElementById("output").innerHTML = text_in.replace(/(\{\' \'\})?\n/g, ' ').replace(/\t/g, ' ').replace(/ +/g, ' ').replace(/\\/g, '\\\\').replace(/\"/g, '\\"').replace(/\> \</, '><').replace(/\</g, "&lt").replace(/\>/, '&gt').replace(/\n/g, '<br>');//
}