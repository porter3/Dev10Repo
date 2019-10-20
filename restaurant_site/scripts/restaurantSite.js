function validateInput(){

    var radioOne = document.getElementById("choice1").checked;
    var radioTwo = document.getElementById("choice2").checked;
    var monday = document.getElementById("monday").checked;
    var tuesday = document.getElementById("tuesday").checked;
    var wednesday = document.getElementById("wednesday").checked;
    var thursday = document.getElementById("thursday").checked;
    var friday = document.getElementById("friday").checked;

    if (document.getElementById("name").value == "" ||
    document.getElementById("email").value == "" ||
    document.getElementById("phone").value == "" ||
    (radioOne == false && radioTwo == false) ||
    (monday == false && tuesday == false && wednesday == false
        && thursday == false && friday == false)){
        alert("All required fields must be filled out.");
    }
    else{
        alert("Information is valid.");
    }
}