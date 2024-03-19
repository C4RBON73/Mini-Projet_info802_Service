window.getVehicles = function(){
    fetch('/vehicles')
    .then(response => response.text())
    .then(data => {
        // document.getElementById("vehicles").innerHTML = data;
        jsonData = JSON.parse(data);
        var vehiclesContainer = document.getElementById("vehiclesList");
        jsonData.vehicleList.forEach(function(vehicle){
            var vehicleDiv = document.createElement("div");
            vehicleDiv.classList.add("vehicleCard");
            vehicleDiv.innerHTML = `
                <img src="${vehicle.media.image.url}" alt="${vehicle.naming.make} ${vehicle.naming.model}">
                <div>
                    <h2>${vehicle.naming.make} ${vehicle.naming.model} ${vehicle.naming.version || ''}</h2>
                    <p>Seats: ${vehicle.body.seats}</p>
                    <p>Usable Battery: ${vehicle.battery.usable_kwh} kWh</p>
                    <p>Chargetrip Range: ${vehicle.range.chargetrip_range.best} - ${vehicle.range.chargetrip_range.worst} miles</p>
                    <p>Fast Charging Support: ${vehicle.routing.fast_charging_support ? 'Yes' : 'No'}</p>
                </div>
            `;
            vehicleDiv.addEventListener('click', function(){
                selectedChargeTripRange = (vehicle.range.chargetrip_range.best + vehicle.range.chargetrip_range.worst) / 2; 
                console.log(selectedChargeTripRange);
                resetSelection();
                vehicleDiv.style.backgroundColor = "#82b08f";
            });
            vehiclesContainer.appendChild(vehicleDiv);
        })
    })
    .catch(error => {
        console.log(error);
    });
}