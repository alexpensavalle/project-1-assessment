// App State
var sum;//initial

// Cached Elements
//sum = document.querySelector("#sum");
var tempSum = document.querySelector(".numChangerDisplay");

// Event Listeners
document.querySelector(".add").addEventListener("click", handlePlusClick)
document.querySelector(".minus").addEventListener("click", handleMinusClick)


// Functions
function init() {
  sum = 1;
  render();
}

function render() {
  
  if (sum >= 0) {
    document.getElementById("sum").style.color = "black";
    $(".sum").html(sum);
  } 

    else if (sum < 0) {
    document.getElementById("sum").style.color = "red";
    $(".sum").html(sum); 
  }
}

function handlePlusClick() {
  console.log(sum);
  sum += parseInt(tempSum.value);
  render();
}

function handleMinusClick() {
  console.log(sum);
  sum -= parseInt(tempSum.value);
  render();
}

init();