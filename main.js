
function myFunction(){

    console.log("Hello from the console! *waves*");
}

myFunction();

function handleClick(){
    alert("You booped the snoot. Fox thanks you!");
}

document.getElementById("paragraph").innerHTML = "<p>I overwrote you</p>"
document.getElementsByName("")

for(var i = 0; i<10; i++){

    console.log(i+1);
}

if (1+1 == 5){

    console.log("is 1+1 really 5 ?");
}
else {
    console.log("whats 1+1 then ? ");
}

try {
var wrongID = document.getElementsById("im wrong");
wrongID.innerHTML = "<p>im sooo wrong</p>"

} catch(error) {
    console.error("Apparently something went wrong: " + error)
}
