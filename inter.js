var time = 0;
var count = setInterval(
function timer(){
document.getElementById("counter").innerHTML = "TIME PASSED " + time;
time++;
},1000 );

//-------------------------------------------------------------------------------------------//

const empties = document.querySelectorAll('.box001');

for (const empty of empties) {
empty.addEventListener('dragenter', dragEnter);
empty.addEventListener('dragleave', dragLeave);
}

function dragEnter(e) {
e.preventDefault();
this.className += ' hovered';
}

function dragLeave() {
this.className += '.box001';

}
//-------------------------------------------------------------------------------------------//


function dragStart1(event) {
 event.dataTransfer.setData("bx1", event.target.id);
}

function dragStart2(event) {
 event.dataTransfer.setData("bx2", event.target.id);
}

function dragStart3(event) {
 event.dataTransfer.setData("bx3", event.target.id);
}

function dragStart4(event) {
 event.dataTransfer.setData("bx4", event.target.id);
}

function dragStart5(event) {
 event.dataTransfer.setData("bx5", event.target.id);
}

//-------------------------------------------------------------------------------------------//

function allowDrop1(event) {
 event.preventDefault();
}

function allowDrop2(event) {
 event.preventDefault();
}

function allowDrop3(event) {
 event.preventDefault();
}

function allowDrop4(event) {
 event.preventDefault();
}

function allowDrop5(event) {
 event.preventDefault();
}

//-------------------------------------------------------------------------------------------//

var matched = 0;

function drop6(event) {
 var data = event.dataTransfer.getData("bx1");
 event.target.appendChild(document.getElementById(data));
 no.innerHTML = ++matched;
     dropPlace1.innerHTML = "1";

}

function drop7(event) {
 var data = event.dataTransfer.getData("bx2");
 event.target.appendChild(document.getElementById(data));
 no.innerHTML = ++matched;
     dropPlace2.innerHTML = "2";
}

function drop8(event) {
 var data = event.dataTransfer.getData("bx3");
 event.target.appendChild(document.getElementById(data));
 no.innerHTML = ++matched;
     dropPlace3.innerHTML = "3";
}

function drop9(event) {
 var data = event.dataTransfer.getData("bx4");
 event.target.appendChild(document.getElementById(data));
 no.innerHTML = ++matched;
     dropPlace4.innerHTML = "4";
}

function drop10(event) {
 var data = event.dataTransfer.getData("bx5");
 event.target.appendChild(document.getElementById(data));
 no.innerHTML = ++matched;
     dropPlace5.innerHTML = "5";
}

//-------------------------------------------------------------------------------------------//

function drop1(event) {
 event.preventDefault();
}

function drop2(event) {
 event.preventDefault();
}

function drop3(event) {
 event.preventDefault();

}

function drop4(event) {
 event.preventDefault();
}

function drop5(event) {
 event.preventDefault();
}
//-------------------------------------------------------------------------------------------//

function submit001() {
if (matched == 5) {
clearInterval(count);


/*

var last_best_score = JSON.stringify(result, null, 9); // variabila last_best_score va stoca utlimul cel mai score din tabela de scoruri
if(last_best_score > time ){                          // ca sa fie apoi comparata cu scorul jucatorului actual
       function postData(event){}                 // in caz ca scoul e mai bun sa se execute functia post la api-ul respectiv
}
  }
}
*/
}
}
