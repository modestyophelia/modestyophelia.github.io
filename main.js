

var counter = 0;

function handleClick(){

    counter+= 1;
    document.getElementById("counter").innerHTML = counter;

    if (counter < 3){

        alert("You booped the snoot. Fox thanks you!");
    }

    else {
        alert("Fox loves you!");
        document.getElementById("heart").style.visibility = "visible";
    } 
}


//document.getElementById("paragraph").innerHTML = "<p>I overwrote you</p>"

for(var i = 0; i<10; i++){ /* for-loop, index starts at 0 */

    console.log(i+1);
}

if (1+1 == 5){ /* if-conditions */ 

    console.log("is 1+1 really 5 ?");
}
else {
    console.log("whats 1+1 then ? ");
}

try { /* try catch, wrongID does not exist and cannot be replaced */ 
var wrongID = document.getElementsById("im wrong");
wrongID.innerHTML = "<p>im sooo wrong</p>"

} catch(error) {
    console.error("Apparently something went wrong: " + error)
}