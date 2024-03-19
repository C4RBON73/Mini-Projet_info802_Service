window.getBornes = function(latlngs, selectedChargeTripRange){
    fetch('/bornesData')
    .then(response => response.text())
    .then(data =>{
        console.log(data);

        return fetch("/findChargingStations");
    })
    .then(response => response.text())
    .then(data => {
        jsonData = JSON.parse(data);
        console.log(jsonData);
        console.log(latlngs);
        console.log(selectedChargeTripRange);
        chargingStations = findChargingStations(latlngs, selectedChargeTripRange, jsonData);
        console.log(chargingStations);
    })
    .catch(error => {
        console.error("Error fetching charging stations: ", error);
    });
    
}

window.getCoords = function(){
    const pos = document.getElementById("start").value.toString();

    document.getElementById("depart").innerHTML = "Departure : " + pos;

    const url = '/coordinates/'+pos+'/';

    fetch(url)
    .then(response => response.text())
    .then(data => {
        jsonData = JSON.parse(data);
        const coordinates = jsonData.features[0].geometry.coordinates;
        const latitude = coordinates[1];
        const longitude = coordinates[0];

        // document.getElementById("coordsD").innerHTML = "Latitude : " + latitude.toString() + " Longitude : " + longitude.toString();

        latD = latitude;
        longD = longitude;
    })
    .catch(error => {
        console.log(error);
    });

    const arr = document.getElementById("end").value.toString();

    document.getElementById("arrive").innerHTML = "Arrival : " + arr;

    const url2 = '/coordinates/'+arr+'/';

    fetch(url2)
    .then(response => response.text())
    .then(data => {
        // console.log(data);
        jsonData = JSON.parse(data);
        const coordinates = jsonData.features[0].geometry.coordinates;
        const latitude = coordinates[1];
        const longitude = coordinates[0];

        // document.getElementById("coordsA").innerHTML = "Latitude : " + latitude.toString() + " Longitude : " + longitude.toString();

        latA = latitude;
        longA = longitude;
    })
    .catch(error => {
        console.log(error);
    });
}