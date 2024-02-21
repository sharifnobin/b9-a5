
// =================================== Select Your Seat ========================================



//------------------------- function calling for A1---------------------------------------

function selectingSeatA1(){

    changeBackground('A1');
    showSeat('A1', 'seat-1', 'class-1', 'price-1');
    increaseSeat('seat-number');
     decreaseSeat('seat-left');
     
}
//------------------------- function calling for B1---------------------------------------

function selectingSeatB1(){

    changeBackground('B1');
    showSeat('B1', 'seat-2', 'class-2', 'price-2');
    increaseSeat('seat-number');
     decreaseSeat('seat-left');
     
}
//------------------------- function calling for C1---------------------------------------

function selectingSeatC1(){

    changeBackground('C1');
    showSeat('C1', 'seat-3', 'class-3', 'price-3');
    increaseSeat('seat-number');
     decreaseSeat('seat-left');
     
}
     

function changeBackground(elementId){
    const A1 = document.getElementById(elementId);
    A1.style.backgroundColor = "#1DD100";
}

function showSeat(elementId, seat, classs, price){
     let show = document.getElementById(elementId).innerText;
     document.getElementById(seat).innerText = show;

     let show2 = document.getElementById('Economy-class').innerText;
     document.getElementById(classs).innerText = show2;

      let show3 = document.getElementById('550').innerText;
     document.getElementById(price).innerText = show3;
}

function increaseSeat(elementId){
    const seatId = document.getElementById(elementId);
    const seatNumber = seatId.innerText;
    let seatInteger = parseInt(seatNumber);
    seatInteger = seatInteger + 1;
     document.getElementById(elementId).innerText = seatInteger;
     const seatValue = document.getElementById(elementId).innerText;
    if(seatValue === 1){
       return seatValue;
    }
   
}
function decreaseSeat(elementId){
    const seatId = document.getElementById(elementId);
    const seatNumber = seatId.innerText;
    let seatInteger = parseInt(seatNumber);
    seatInteger = seatInteger - 1;
    document.getElementById(elementId).innerText = seatInteger;
}


