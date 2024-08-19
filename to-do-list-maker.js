const addButton = document.getElementById("button1");
const resetButton = document.getElementById("resetButton");
const elimButton = document.getElementById("elim1");
const elimButton2 = document.getElementById("elim2");
const elimButton3 = document.getElementById("elim3");
const elimButton4 = document.getElementById("elim4");
const elimButton5 = document.getElementById("elim5");
const elimButton6 = document.getElementById("elim6");
const elimButton7 = document.getElementById("elim7");
const elimButton8 = document.getElementById("elim8");
const elimButton9 = document.getElementById("elim9");
const elimButton10 = document.getElementById("elim10");
const warnText = document.getElementById("warnText")
elimButton.style.display = "none";
elimButton2.style.display = "none";
elimButton3.style.display = "none";
elimButton4.style.display = "none";
elimButton5.style.display = "none";
elimButton6.style.display = "none";
elimButton7.style.display = "none";
elimButton8.style.display = "none";
elimButton9.style.display = "none";
elimButton10.style.display = "none";
elimButton.style.backgroundColor = "rgb(121, 201, 225)";
elimButton2.style.backgroundColor = "rgb(121, 201, 225)";
elimButton3.style.backgroundColor = "rgb(121, 201, 225)";
elimButton4.style.backgroundColor = "rgb(121, 201, 225)";
elimButton5.style.backgroundColor = "rgb(121, 201, 225)";
elimButton6.style.backgroundColor = "rgb(121, 201, 225)";
elimButton7.style.backgroundColor = "rgb(121, 201, 225)";
elimButton8.style.backgroundColor = "rgb(121, 201, 225)";
elimButton9.style.backgroundColor = "rgb(121, 201, 225)";
elimButton10.style.backgroundColor = "rgb(121, 201, 225)";
let inputTask;
let itemSlot;
let slots = 1;

    addButton.onclick = function(){
        if(slots == 1){
        inputTask = document.getElementById("input1").value;
        itemSlot = document.getElementById("itemSlot1");
        slots = slots + 1;
        
        itemSlot.textContent = (inputTask);
        elimButton.style.display = "inline-block";
        document.getElementById("input1").value = "";
        }
        else if(slots == 2){
            inputTask = document.getElementById("input1").value;
            itemSlot = document.getElementById("itemSlot2");
            slots = slots + 1;
            
            itemSlot.textContent = (inputTask);
            elimButton2.style.display = "inline-block";
            document.getElementById("input1").value = "";
        }
        else if(slots == 3){
            inputTask = document.getElementById("input1").value;
            itemSlot = document.getElementById("itemSlot3");
            slots = slots + 1;
    
            itemSlot.textContent = (inputTask);
            elimButton3.style.display = "inline-block";
            document.getElementById("input1").value = "";
        }
        else if(slots == 4){
            inputTask = document.getElementById("input1").value;
            itemSlot = document.getElementById("itemSlot4");
            slots = slots + 1;
    
            itemSlot.textContent = (inputTask);
            elimButton4.style.display = "inline-block";
            document.getElementById("input1").value = "";
        }
        else if(slots == 5){
            inputTask = document.getElementById("input1").value;
            itemSlot = document.getElementById("itemSlot5");
            slots = slots + 1;
    
            itemSlot.textContent = (inputTask);
            elimButton5.style.display = "inline-block";
            document.getElementById("input1").value = "";
        }
        else if(slots == 6){
            inputTask = document.getElementById("input1").value;
            itemSlot = document.getElementById("itemSlot6");
            slots = slots + 1;
    
            itemSlot.textContent = (inputTask);
            elimButton6.style.display = "inline-block";
            document.getElementById("input1").value = "";
        }
        else if(slots == 7){
            inputTask = document.getElementById("input1").value;
            itemSlot = document.getElementById("itemSlot7");
            slots = slots + 1;
    
            itemSlot.textContent = (inputTask);
            elimButton7.style.display = "inline-block";
            document.getElementById("input1").value = "";
        }
        else if(slots == 8){
            inputTask = document.getElementById("input1").value;
            itemSlot = document.getElementById("itemSlot8");
            slots = slots + 1;
    
            itemSlot.textContent = (inputTask);
            elimButton8.style.display = "inline-block";
            document.getElementById("input1").value = "";
        }
        else if(slots == 9){
            inputTask = document.getElementById("input1").value;
            itemSlot = document.getElementById("itemSlot9");
            slots = slots + 1;
    
            itemSlot.textContent = (inputTask);
            elimButton9.style.display = "inline-block";
            document.getElementById("input1").value = "";
        }
        else if(slots == 10){
            inputTask = document.getElementById("input1").value;
            itemSlot = document.getElementById("itemSlot10");
            slots = slots + 1;
    
            itemSlot.textContent = (inputTask);
            elimButton10.style.display = "inline-block";
            document.getElementById("input1").value = "";
        }
        else if(slots >= 11){
            warnText.textContent = ("You've reached the limit of 10 tasks! Please reset to add new ones");
        }
         }

    resetButton.onclick = function(){
        slots = 1;
        document.getElementById("itemSlot1").textContent = ("");
        document.getElementById("itemSlot2").textContent = ("");
        document.getElementById("itemSlot3").textContent = ("");
        document.getElementById("itemSlot4").textContent = ("");
        document.getElementById("itemSlot5").textContent = ("");
        document.getElementById("itemSlot6").textContent = ("");
        document.getElementById("itemSlot7").textContent = ("");
        document.getElementById("itemSlot8").textContent = ("");
        document.getElementById("itemSlot9").textContent = ("");
        document.getElementById("itemSlot10").textContent = ("");
        elimButton.style.display = "none";
        elimButton2.style.display = "none";
        elimButton3.style.display = "none";
        elimButton4.style.display = "none";
        elimButton5.style.display = "none";
        elimButton6.style.display = "none";
        elimButton7.style.display = "none";
        elimButton8.style.display = "none";
        elimButton9.style.display = "none";
        elimButton10.style.display = "none";
        elimButton.style.backgroundColor = "rgb(121, 201, 225)";
        elimButton2.style.backgroundColor = "rgb(121, 201, 225)";
        elimButton3.style.backgroundColor = "rgb(121, 201, 225)";
        elimButton4.style.backgroundColor = "rgb(121, 201, 225)";
        elimButton5.style.backgroundColor = "rgb(121, 201, 225)";
        elimButton6.style.backgroundColor = "rgb(121, 201, 225)";
        elimButton7.style.backgroundColor = "rgb(121, 201, 225)";
        elimButton8.style.backgroundColor = "rgb(121, 201, 225)";
        elimButton9.style.backgroundColor = "rgb(121, 201, 225)";
        elimButton10.style.backgroundColor = "rgb(121, 201, 225)";
        warnText.textContent = ("");
    }

    elimButton.onclick = function() {
        if(elimButton.style.backgroundColor === "rgb(121, 201, 225)"){
        elimButton.style.backgroundColor = "rgb(16, 228, 41)";
        }
        else{
        elimButton.style.backgroundColor = "rgb(121, 201, 225)";
        }
    }
    elimButton2.onclick = function() {
        if(elimButton2.style.backgroundColor === "rgb(121, 201, 225)"){
        elimButton2.style.backgroundColor = "rgb(16, 228, 41)";
        }
        else{
        elimButton2.style.backgroundColor = "rgb(121, 201, 225)";
        }
    }
    elimButton3.onclick = function() {
        if(elimButton3.style.backgroundColor === "rgb(121, 201, 225)"){
        elimButton3.style.backgroundColor = "rgb(16, 228, 41)";
        }
        else{
        elimButton3.style.backgroundColor = "rgb(121, 201, 225)";
        }
    }
    elimButton4.onclick = function() {
        if(elimButton4.style.backgroundColor === "rgb(121, 201, 225)"){
        elimButton4.style.backgroundColor = "rgb(16, 228, 41)";
        }
        else{
        elimButton4.style.backgroundColor = "rgb(121, 201, 225)";
        }
    }
    elimButton5.onclick = function() {
        if(elimButton5.style.backgroundColor === "rgb(121, 201, 225)"){
        elimButton5.style.backgroundColor = "rgb(16, 228, 41)";
        }
        else{
        elimButton5.style.backgroundColor = "rgb(121, 201, 225)";
        }
    }
    elimButton6.onclick = function() {
        if(elimButton6.style.backgroundColor === "rgb(121, 201, 225)"){
        elimButton6.style.backgroundColor = "rgb(16, 228, 41)";
        }
        else{
        elimButton6.style.backgroundColor = "rgb(121, 201, 225)";
        }
    }
    elimButton7.onclick = function() {
        if(elimButton7.style.backgroundColor === "rgb(121, 201, 225)"){
        elimButton7.style.backgroundColor = "rgb(16, 228, 41)";
        }
        else{
        elimButton7.style.backgroundColor = "rgb(121, 201, 225)";
        }
    }
    elimButton8.onclick = function() {
        if(elimButton8.style.backgroundColor === "rgb(121, 201, 225)"){
        elimButton8.style.backgroundColor = "rgb(16, 228, 41)";
        }
        else{
        elimButton8.style.backgroundColor = "rgb(121, 201, 225)";
        }
    }
    elimButton9.onclick = function() {
        if(elimButton9.style.backgroundColor === "rgb(121, 201, 225)"){
        elimButton9.style.backgroundColor = "rgb(16, 228, 41)";
        }
        else{
        elimButton9.style.backgroundColor = "rgb(121, 201, 225)";
        }
    }
    elimButton10.onclick = function() {
        if(elimButton10.style.backgroundColor === "rgb(121, 201, 225)"){
        elimButton10.style.backgroundColor = "rgb(16, 228, 41)";
        }
        else{
        elimButton10.style.backgroundColor = "rgb(121, 201, 225)";
        }
    }

