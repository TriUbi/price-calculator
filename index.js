function updatePrice() {
    var employeeSlider = document.getElementById("employeeSlider");
    var sliderValue = parseInt(employeeSlider.value);
    
   
    var employeeValues = [0, 1, 25, 50, 70];
    var selectedEmployeeValue = employeeValues[sliderValue];

    var basePrice = 1900; // Pris per anställd

   
    var totalPrice = basePrice * selectedEmployeeValue;

    // Uppdatera priset
    document.getElementById("price").textContent = totalPrice.toLocaleString();

  
    employeeSlider.setAttribute('data-thumb-value', selectedEmployeeValue);
}


window.onload = function() {
    updatePrice();
};