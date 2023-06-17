/*Programmer: Sai Chand Akkisani
     Student ID: C0882366
     Front End Web Development 2 Assignment 3-4
     Date: 16 Jun 2023*/
 
function convert(event) {      //Function to convert currency//
     event.preventDefault()
    let select = document.getElementById("to").value;
    let select2 = document.getElementById("to2").value;
    let usdOption = document.getElementById("usdCurrency").value;
    let cadOption = document.getElementById("cadCurrency").value;
    
     //Condition to change currency//
     if (select == null || select == undefined || select == "") {
        alert("Please enter a value to convert")
    }
    else if (select == "CAD") {                 
        console.log(usdOption,   cadOption);    
        document.getElementById("cadCurrency").value = parseFloat(usdOption * 0.756);
        changeSelectOption("to2", "USD");

    }
    else if (select == "USD") {
        document.getElementById("cadCurrency").value = parseFloat(usdOption) * 1.322
        changeSelectOption("to2", "CAD");
    }

}

function changeSelectOption(selectId, newValue) {      //Function to change currency option//
  var selectElement = document.getElementById(selectId);
  
  for (var i = 0; i < selectElement.options.length; i++) {
    if (selectElement.options[i].value === newValue) {
      selectElement.selectedIndex = i;
      break;
    }
  }
}