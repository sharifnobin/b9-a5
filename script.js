// =================================== Select Your Seat ========================================

//------------------------- function calling for A1---------------------------------------
let A1 = B1 = C1 = 0;

let A2 =B2 = C2 = 0;
let A3 = B3 = C3 = 0;
let A4 =B4 = C4 = 0;

function selectingSeatA1() {
  if (!A1) {
    changeBackground("A1");
    removeClass(".seat-details-2");
    showSeat("A1", "seat-1", "class-1", "price-1");
    totalPrice();

    increaseSeat("seat-number");
    decreaseSeat("seat-left");
  }
  A1 = 1;
}

function selectingSeatA2() {
  if (!A2) {
    changeBackground("A2");
    removeClass(".seat-details-5");
    showSeat("A2", "seat-4", "class-4", "price-4");
    totalPrice();

    increaseSeat("seat-number");
    decreaseSeat("seat-left");
  }
  A2 = 1;
}

function selectingSeatA3() {
  if (!A3) {
    changeBackground("A3");
    removeClass(".seat-details-8");
    showSeat("A3", "seat-7", "class-7", "price-7");
    totalPrice();

    increaseSeat("seat-number");
    decreaseSeat("seat-left");
  }
  A3 = 1;
}

function selectingSeatA4() {
  if (!A4) {
    changeBackground("A4");
    removeClass(".seat-details-11");
    showSeat("A4", "seat-10", "class-10", "price-10");
    totalPrice();

    increaseSeat("seat-number");
    decreaseSeat("seat-left");
  }
  A4 = 1;
}
//------------------------- function calling for B1---------------------------------------

function selectingSeatB1() {
  if (!B1) {
    changeBackground("B1");
    removeClass(".seat-details-3");
    showSeat("B1", "seat-2", "class-2", "price-2");
    totalPrice();

    increaseSeat("seat-number");
    decreaseSeat("seat-left");
  }
  B1 = 1;
}
function selectingSeatB2() {
  if (!B2) {
    changeBackground("B2");
    removeClass(".seat-details-6");
    showSeat("B2", "seat-5", "class-5", "price-5");
    totalPrice();

    increaseSeat("seat-number");
    decreaseSeat("seat-left");
  }
  B2 = 1;
}
function selectingSeatB3() {
  if (!B3) {
    changeBackground("B3");
    removeClass(".seat-details-9");
    showSeat("B3", "seat-8", "class-8", "price-8");
    totalPrice();

    increaseSeat("seat-number");
    decreaseSeat("seat-left");
  }
  B3 = 1;
}
function selectingSeatB4() {
  if (!B4) {
    changeBackground("B4");
    removeClass(".seat-details-12");
    showSeat("B4", "seat-11", "class-11", "price-11");
    totalPrice();

    increaseSeat("seat-number");
    decreaseSeat("seat-left");
  }
  B4 = 1;
}
//------------------------- function calling for C1---------------------------------------

function selectingSeatC1() {
  if (!C1) {
    changeBackground("C1");
    removeClass(".seat-details-4");
    showSeat("C1", "seat-3", "class-3", "price-3");
    totalPrice();

    increaseSeat("seat-number");
    decreaseSeat("seat-left");
  }
  C1 = 1;
}

function selectingSeatC2() {
  if (!C2) {
    changeBackground("C2");
    removeClass(".seat-details-7");
    showSeat("C2", "seat-6", "class-6", "price-6");
    totalPrice();

    increaseSeat("seat-number");
    decreaseSeat("seat-left");
  }
  C2 = 1;
}

function selectingSeatC3() {
  if (!C3) {
    changeBackground("C3");
    removeClass(".seat-details-10");
    showSeat("C3", "seat-9", "class-9", "price-9");
    totalPrice();

    increaseSeat("seat-number");
    decreaseSeat("seat-left");
  }
  C3 = 1;
}

function selectingSeatC4() {
  if (!C4) {
    changeBackground("C4");
    removeClass(".seat-details-13");
    showSeat("C4", "seat-12", "class-12", "price-12");
    totalPrice();

    increaseSeat("seat-number");
    decreaseSeat("seat-left");
  }
  C4 = 1;
}

function changeBackground(elementId) {
  const A1 = document.getElementById(elementId);
  A1.style.backgroundColor = "#1DD100";
  A1.style.color = "#fff";
}

function showSeat(elementId, seat, classs, price) {
  let show = document.getElementById(elementId).innerText;
  document.getElementById(seat).innerText = show;

  let show2 = document.getElementById("Economy-class").innerText;
  document.getElementById(classs).innerText = show2;

  let show3 = document.getElementById("550").innerText;
  document.getElementById(price).innerText = show3;
}

function increaseSeat(elementId) {
  const seatId = document.getElementById(elementId);
  const seatNumber = seatId.innerText;
  let seatInteger = parseInt(seatNumber);
  seatInteger = seatInteger + 1;
  document.getElementById(elementId).innerText = seatInteger;
  if (seatInteger >= 4) {

   

    document.getElementById("A1").setAttribute("disabled", true);
    document.getElementById("B1").setAttribute("disabled", true);
    document.getElementById("C1").setAttribute("disabled", true);

    document.getElementById("A2").setAttribute("disabled", true);
    document.getElementById("B2").setAttribute("disabled", true);
    document.getElementById("C2").setAttribute("disabled", true);

    document.getElementById("A3").setAttribute("disabled", true);
    document.getElementById("B3").setAttribute("disabled", true);
    document.getElementById("C3").setAttribute("disabled", true);

    document.getElementById("A4").setAttribute("disabled", true);
    document.getElementById("B4").setAttribute("disabled", true);
    document.getElementById("C4").setAttribute("disabled", true);

     const applyID = document.getElementById('apply'); 
    applyID.setAttribute("enable", true);
    console.log(applyID)
    applyID.setAttribute('style', 'background-color : #1DD100;');

  }

  //  const seatValue = document.getElementById(elementId).innerText;
}

function decreaseSeat(elementId) {
  const seatId = document.getElementById(elementId);
  const seatNumber = seatId.innerText;
  let seatInteger = parseInt(seatNumber);
  seatInteger = seatInteger - 1;
  document.getElementById(elementId).innerText = seatInteger;
}

//--------------------------- Coupon Field ----------------------------------------

const buttonId = document.querySelector("#apply");
console.log(buttonId);

buttonId.addEventListener("click", function (event) {
  const coupon = document.querySelector("#coupon");
  console.log(coupon);

  const inputID = document.querySelector(".input-id");
  console.log(inputID)

  const grandTotalId = document.getElementById("grand-total");


  const couponCode = coupon.value.toUpperCase();

  const new15 = "new15".toUpperCase();

  if (couponCode === new15) {
    // buttonId.setAttribute("disabled", true);
    // buttonId.setAttribute("style", "background-color:grey;");
    inputID.setAttribute("style", "display:none;");
    console.log(inputID);

  } else if (couponCode === "couple 20".toUpperCase()) {
    buttonId.setAttribute("disabled", true);
    buttonId.setAttribute("style", "background-color:grey;");

     inputID.setAttribute("style", "display:none;");
  } else {
    alert("Try With A Valid Coupon !");
  }


  //----------------------------- Grand Total -------------------------------------
  
   grandTotalPrice();
});

//------------------------------ Total Price -------------------------------

function totalPrice() {
  const price1 = document.getElementById("price-1");
  const price1InnerText = price1.innerText;
  const price1Integer = parseInt(price1InnerText);

  const price2 = document.getElementById("price-2");
  const price2InnerText = price2.innerText;
  const price2Integer = parseInt(price2InnerText);

  const price3 = document.getElementById("price-3");
  const price3InnerText = price3.innerText;
  const price3Integer = parseInt(price3InnerText);

  const price4 = document.getElementById("price-4");
  const price4InnerText = price4.innerText;
  const price4Integer = parseInt(price4InnerText);

  const price5 = document.getElementById("price-5");
  const price5InnerText = price5.innerText;
  const price5Integer = parseInt(price5InnerText);

  const price6 = document.getElementById("price-6");
  const price6InnerText = price6.innerText;
  const price6Integer = parseInt(price6InnerText);

  const price7 = document.getElementById("price-7");
  const price7InnerText = price7.innerText;
  const price7Integer = parseInt(price7InnerText);

  const price8 = document.getElementById("price-8");
  const price8InnerText = price8.innerText;
  const price8Integer = parseInt(price8InnerText);

  const price9 = document.getElementById("price-9");
  const price9InnerText = price9.innerText;
  const price9Integer = parseInt(price9InnerText);

  const price10 = document.getElementById("price-10");
  const price10InnerText = price10.innerText;
  const price10Integer = parseInt(price10InnerText);

  const price11 = document.getElementById("price-11");
  const price11InnerText = price11.innerText;
  const price11Integer = parseInt(price11InnerText);

  const price12 = document.getElementById("price-12");
  const price12InnerText = price12.innerText;
  const price12Integer = parseInt(price12InnerText);

  const totalPriceId = document.getElementById("total-price");
  

  const totalPriceCalc =
    price1Integer +
    price2Integer +
    price3Integer +
    price4Integer +
    price5Integer +
    price6Integer +
    price7Integer +
    price8Integer +
    price9Integer +
    price10Integer +
    price11Integer +
    price12Integer;
 
  totalPriceId.innerText = "BDT "+totalPriceCalc;
   grandTotal(totalPriceCalc);

   return totalPriceCalc;

  //  grandTotalPrice(totalPriceCalc);
}

//------------------------------Grand Total  -------------------------------

function grandTotal(totalPriceCalc){
   
 const grandTotalId = document.getElementById("grand-total");
 
 grandTotalId.innerText ="BDT "+totalPriceCalc;
}

function grandTotalPrice(totalPriceCalc){

  const grandTotalId = document.getElementById("grand-total");
  const grandTotalPrice = totalPriceCalc - totalPriceCalc * 0.15;

  grandTotalId.classList.add("font-bold");
  grandTotalId.classList.add("text-[#27AE60]");
  
   grandTotalId.innerText ="BDT"+  grandTotalPrice;
}

//---------------------- Removing Class -----------------------------------------------

function removeClass(C1, R1 = "hidden") {
  const reClass = document.querySelector(C1);
  reClass.classList.remove(R1);
}
