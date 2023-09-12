let count=0;

function btn1(){
    if(count%2==0) document.getElementById("1").value = "O"; 
    else  document.getElementById("1").value = "X"; 
    document.getElementById("1").disabled = true;
    count++;
    isWinner();   
}

function btn2(){
    if(count%2==0){ document.getElementById("2").value = "O"; }
    else { document.getElementById("2").value = "X"; }
    document.getElementById("2").disabled = true;
    count++;
    isWinner();
}
function btn3(){
    if(count%2==0){ document.getElementById("3").value = "O"; }
    else { document.getElementById("3").value = "X"; }
    document.getElementById("3").disabled = true;
    count++;
    isWinner();
}
function btn4(){
    if(count%2==0){ document.getElementById("4").value = "O"; }
    else { document.getElementById("4").value = "X"; }
    document.getElementById("4").disabled = true;
    count++;
    isWinner();
}
function btn5(){
    if(count%2==0){ document.getElementById("5").value = "O"; }
    else { document.getElementById("5").value = "X"; }
    document.getElementById("5").disabled = true;
    count++;
    isWinner();
}
function btn6(){
    if(count%2==0){ document.getElementById("6").value = "O"; }
    else { document.getElementById("6").value = "X"; }
    document.getElementById("6").disabled = true;
    count++;
    isWinner();
}

function btn7() {
    if (count % 2 == 0) {
        document.getElementById("7").value = "O";
    } else {
        document.getElementById("7").value = "X";
    }
    document.getElementById("7").disabled = true;
    count++;
    isWinner();
}

function btn8() {
    if (count % 2 == 0) {
        document.getElementById("8").value = "O";
    } else {
        document.getElementById("8").value = "X";
    }
    document.getElementById("8").disabled = true;
    count++;
    isWinner();
}

function btn9() {
    if (count % 2 == 0) {
        document.getElementById("9").value = "O";
    } else {
        document.getElementById("9").value = "X";
    }
    document.getElementById("9").disabled = true;
    count++;
    isWinner();
}


function isWinner() {

    let one = document.getElementById("1").value;
    let two = document.getElementById("2").value;
    let three = document.getElementById("3").value;
    let four = document.getElementById("4").value;
    let five = document.getElementById("5").value;
    let six = document.getElementById("6").value;
    let seven = document.getElementById("7").value;
    let eight = document.getElementById("8").value;
    let nine = document.getElementById("9").value;


    if(one==two && two==three && three=="O"){
        alert("player one is winner");
        
    }
    else if(one==two && two==three && three=="X"){
        alert("Player two is winner");
    }

    if(four==five && five==six && four=="O"){
        alert("player one is winner");
    }
    else if(four==five && five==six && four=="X"){
        alert("Player two is winner");
    }
}
