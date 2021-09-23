

var counter = 0;
/* counter starts at 0 clicks */

function handleClick(){

    counter+= 1;
    /* counter increases by 1 for each button click */

    document.getElementById("counter").innerHTML = counter;
    /* fetches the ID's value in the HTML and changes the value to counter */

    if (counter < 2){
        /* if counter is less than 2, print:  */

        alert("You booped the snoot. Fox thanks you!");
    }

    else if (counter < 3) {
        alert("You booped the snoot. Fox really likes you!");
        /* if counter is less than 3, print:  */
    }

    else {
        alert("You booped the snoot. Fox loves you!");
        document.getElementById("heart").style.visibility = "visible";
        /* fetches the ID's value in the HTML and changes its style from hidden to visible */
    } 
}


for(var i = 0; i<10; i++){ /* for-loop, index starts at 0 */

    /* add +1 in the consol:e for aestethical reasons, it doesnt actually change i:s value */
    console.log(i+1);
}

try { /* try catch, wrongID does not exist and cannot be replaced */ 
var wrongID = document.getElementsById("im wrong");
/* trying to fetch the value of an ID that doesnt exist */
wrongID.innerHTML = "<p>im sooo wrong</p>"
/* tries to overwrite a non-existing ID */

} catch(error) {
    console.error("Apparently something went wrong: " + error)
    /* prints out what went wrong in the console */
}