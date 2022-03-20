// Write your JavaScript code here!

window.addEventListener("load", () => {
    console.log(`page loaded`);

    let listedPlanets;
    
    let listedPlanetsResponse = myFetch();

    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;}).then(function () {
            let planet = pickPlanet(listedPlanets);
            addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image);
    });
    
    let list = document.getElementById('faultyItems');
    let form = document.querySelector("form");
    list.style.visibility = "hidden";
    form.addEventListener("submit", function(event) {
        event.preventDefault();
    
    let pilot = document.querySelector("input[name=pilotName]").value;
    let copilot = document.querySelector("input[name=copilotName]").value;
    let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
    let cargoMass = document.querySelector("input[name=cargoMass]").value;
    console.log(pilot,copilot,fuelLevel,cargoMass)
                
    formSubmission(document,list,pilot,copilot,fuelLevel,cargoMass);
    });      
    })