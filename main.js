var counter = 0;

function boopFox() {
  counter += 1;

  document.getElementById("counter").innerHTML = counter;

  if (counter < 2) {
    alert("You booped the snoot. Fox thanks you!");
  } else if (counter < 3) {
    alert("You booped the snoot. Fox really likes you!");
  } else {
    alert("You booped the snoot. Fox loves you!");
    document.getElementById("heart").style.visibility = "visible";
  }
}

btn.addEventListener("click", (e) => {
  console.log("You clicked the fox");
});

heart.addEventListener("mouseover", function () {
  console.log("Your mouse went over the heart");
});

for (var i = 0; i < 10; i++) {
  console.log(i + 1);
}
