function updatePrice() {
    var employeeSlider = document.getElementById("employeeSlider");
    var employeeValue = employeeSlider.value;
    var basePrice = 1900; // Pris per anställd

    // Dynamisk beräkning av pris
    var totalPrice = basePrice * employeeValue;

    // Uppdatera priset
    document.getElementById("price").textContent = totalPrice.toLocaleString();

    // Uppdatera värdet som visas i reglagets cirkel ("thumb")
    employeeSlider.style.setProperty('--slider-thumb-text', `"${employeeValue}+"`);
}
