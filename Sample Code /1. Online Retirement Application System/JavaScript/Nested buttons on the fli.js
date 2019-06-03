/*
<button type="button" id="Delta1">Blast Off!</button>
<div id="insertHere"></div>
*/
//Reference: https://jsfiddle.net/mmv1219/koqpzrar/1/ 



$('#Delta1').click(function () {
    var functions = ['btn1()', 'btn2()', 'btn3()', 'btn4()', 'btn5()', 'btn6()', 'btn7()', 'btn8()', 'btn9()', 'btn10()'];
    var div = document.getElementById('insertHere');
    var ctr = 1;
    for (var i in functions) {

        var btn = document.createElement('button');
        var txt = document.createTextNode(String(ctr));

        btn.appendChild(txt);
        btn.setAttribute('type', 'button');
        btn.setAttribute('onclick', functions[i]);
        btn.setAttribute('id', 'button' + ctr);
        div.appendChild(btn);
        ctr++;
    }
});

function btn1() {
    alert('button 1');
}

function btn2() {
    alert('button 2');
}

function btn3() {
    alert('button 3');
}

function btn4() {
    alert('button 4');
}

function btn5() {
    alert('button 5');
}

function btn6() {
    alert('button 6');
}

function btn7() {
    alert('button 7');
}

function btn8() {
    alert('button 8');
}

function btn9() {
    alert('button 9');
}

function btn10() {
    alert('button 10');
}