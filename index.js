function updatePrice() {
    var employeeSlider = document.getElementById("employeeSlider");
    var sliderValue = parseInt(employeeSlider.value);
    
   
    var employeeValues = [0, 1, 25, 50, 70];
    var selectedEmployeeValue = employeeValues[sliderValue];

    var basePrice = 1900; // Pris per anställd

   
    var totalPrice = basePrice * selectedEmployeeValue;
    
    var priceElement = document.getElementById("price");
    var perMonth = document.getElementById("perMonth");

    // Uppdatera priset
    if (totalPrice > 100000) {
        priceElement.textContent = "Offert";
        perMonth.style.display = "none";
        
     } else {
        priceElement.textContent = totalPrice.toLocaleString();
        perMonth.style.display = "inline";
        
 
     }
  
    employeeSlider.setAttribute('data-thumb-value', selectedEmployeeValue);
    
}


window.onload = function() {
    updatePrice();
};