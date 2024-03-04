const numbersoutput = document.querySelector("#cc-numbers");
const numbersinput = document.querySelector("#numbers-input");
const nameinput = document.querySelector("#name-input");
const nameoutput = document.querySelector("#name-output");
const monthinput = document.querySelector("#mini001");
const monthoutput = document.querySelector("#date001");
const yearinput = document.querySelector("#mini002");
const yearoutput = document.querySelector("#date002");
const cvcinput = document.querySelector("#mini003");
const cvcoutput = document.querySelector("#cvc-shii");
const submit = document.querySelector("#submit001");
const temperal001 = document.querySelector("#form");
const temperal002 = document.querySelector("#sxcs");
const restart = document.querySelector("#submit002");
const err2 = document.querySelector("#err002");
const err1 = document.querySelector("#err001");
const err3 = document.querySelector("#err");
const err3a = document.querySelector("#err003a");
const err3b = document.querySelector("#err003b");


// limiting the numbers on the display
monthinput.addEventListener('input', function() {
    if (this.value.length > 2) {
      this.value = this.value.slice(0, 2);
    }
  });
  yearinput.addEventListener('input', function() {
    if (this.value.length > 2) {
      this.value = this.value.slice(0, 2);
    }
    return this.value;
  });
  cvcinput.addEventListener('input', function() {
    if (this.value.length > 3) {
      this.value = this.value.slice(0, 3);
    }
  });

//    update card details
numbersinput.addEventListener("input", function(){
let cval = this.value;
// Remove whitespace
cval =  cval.split(" ").join("");

// Add space after every 4 digits
   let result = "";
for (let i = 0; i < cval.length; i++) {
  if (i > 0 && i % 4 === 0) {
    result += " ";
  }
  result += cval[i];
}
numbersoutput.textContent  = result.trim().toUpperCase();
});
nameinput.addEventListener("input", function () {
        nameoutput.textContent = nameinput.value.toUpperCase()
      });
monthinput.addEventListener("input", function () {
    monthoutput.textContent = this.value
  });
yearinput.addEventListener("input", function(){
    yearoutput.textContent = this.value
  });
cvcinput.addEventListener("input", function(){
    cvcoutput.textContent = this.value
  });



  // NAME P
function checkname () { 
let gimick = nameinput.value;
let gk = true;
// check if input for name is empty
if (gimick.trim() === ""){
  gk = false
}
// implementin shii
if (!gk) {
   err1.style.display = "block";
  nameinput.style.border = "2px solid red";
  setTimeout(function() {
    err1.style.display = "none";
    nameinput.style.border = "";
  }, 3000);
  return false;
}
else return true;
}


// NUMBERS P
function checknumbers (){ 
  // Checking if input for numbers consists of only  digits
let parody = numbersinput.value.split(" ").join(""); // Remove spaces
let OnlyDigits = 0;
for (let i = 0; i < parody.length; i++) {
  let currentChar = parody[i];
  if (!(currentChar >= '0' && currentChar <= '9')) {
    OnlyDigits = 1;
    break;
  }
}
// Check if the input for numbers is empty
if (parody.trim() === "") {
  OnlyDigits = 2;
}

// implementing shii
if (OnlyDigits ===2){ 
  err2.style.display = "block";
  numbersinput.style.border = "2px solid red";
  err2.innerHTML = "Can't be blank!"
  setTimeout(function() {
    err2.style.display = "none";
    numbersinput.style.border = "";
    err2.innerHTML = ""
  }, 3000);
  return false
}
else if (OnlyDigits === 1) {
    err2.style.display = "block";
    numbersinput.style.border = "2px solid red";
    err2.innerHTML = "Wrong format, numbers only!"
    setTimeout(function() {
      err2.style.display = "none";
      numbersinput.style.border = "";
      err2.innerHTML = ""
    }, 3000);
    return false
}
else return true;
}

// DATE P
function checkdate() {
  let strict1 = monthinput.value;
  let strict2 = yearinput.value;
  // check if date input is null
  let garri = 0;
  if (strict1 === "") {
    garri = 1;
  }
  if (strict2 === "") {
    garri = 2;
  }
  if ((strict1 === "") && (strict2 === "")) {
    garri = 3;
  }
  // implementin shii
  if (garri ===3) {
    err3.style.display = "block";
    monthinput.style.border = "2px solid red";
    yearinput.style.border = "2px solid red";
    setTimeout(function() {
      err3.style.display = "none";
      monthinput.style.border = "";
      yearinput.style.border = "";
    }, 3000);
    return false;
  }
  else if (garri === 1) {
    err3.style.display = "block";
    monthinput.style.border = "2px solid red";
    setTimeout(function() {
      err3.style.display = "none";
      monthinput.style.border = "";
    }, 3000);
    return false
  }
  else if (garri === 2) {
    err3.style.display = "block";
    yearinput.style.border = "2px solid red";
    setTimeout(function() {
      err3.style.display = "none";
      yearinput.style.border = "";
    }, 3000);
    return false
  }
  else return true
}


// CVC P
function checkcvc() {
  let static = cvcinput.value
  // check if cvc input is null and implementin shii
  if (static === "") {
    err3b.style.display = "block";
    cvcinput.style.border = "2px solid red";
    setTimeout(function() {
      err3b.style.display = "none";
      cvcinput.style.border = "";
    }, 3000);
    return false
  }
  else return true
}

//Overall form validation before submit
submit.addEventListener("click", function(event){
  event.preventDefault();
 let numbersvalid = checknumbers ();
  let namevalid = checkname ();
  let datevalid = checkdate ();
  let cvcvalid = checkcvc();

 if (namevalid && numbersvalid && datevalid && cvcvalid) { 
temperal001.style.display = "none";
temperal002.style.display = "flex";}
});
// end of Validation b4 submit


// continuing to a fresh start
restart.addEventListener("click", function(e) {
  
  temperal001.style.display = "block";
  temperal002.style.display = "none";
  window.location.reload();
})
