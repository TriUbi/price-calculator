function updatePrice() {
    let employeeSlider = document.getElementById("employeeSlider");
    let sliderValue = parseInt(employeeSlider.value);
    
    let employeeValues = [0, 1, 25, 50, 70];
    let selectedEmployeeValue = employeeValues[sliderValue];

    let basePrice = 1900; // Pris per anställd

    let totalPrice = basePrice * selectedEmployeeValue;
    
    let priceElement = document.getElementById("price");
    let perMonth = document.getElementById("perMonth");

    // Uppdatera priset
    if (totalPrice > 100000) {
        priceElement.textContent = "Offert";
        perMonth.style.display = "none";
    } else {
        priceElement.textContent = totalPrice.toLocaleString();
        perMonth.style.display = "inline";
    }

    // Uppdaterar 1+ label position
    let antalMedarbetare = document.querySelector('.antalMedarbetare');
    let sliderWidth = employeeSlider.offsetWidth;
    let max = employeeSlider.max;
    let min = employeeSlider.min;

    
    let position = ((sliderValue - min) / (max - min)) * (sliderWidth - 40); 
    antalMedarbetare.style.left = `${position}px`;


       // Uppdaterar värdet av antal medarbetare baserat på slidern value
       
       if (selectedEmployeeValue === 1) {
        antalMedarbetare.querySelector('span').textContent = `${selectedEmployeeValue}+`;
    } else {
        antalMedarbetare.querySelector('span').textContent = `${selectedEmployeeValue}`;
    }    

window.onload = function() {
    updatePrice();
};

window.onresize = function() {
    updatePrice();
}

}