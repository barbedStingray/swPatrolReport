const inputVehicle = document.querySelector(`#vehicle-con`);
const inputLocation = document.querySelector(`#star-system`);
const starSystemDiv = document.querySelector(`#base-selection`);

let starSystem;

let starSystemBases = [
    {
        name: `Space Station`,
        var: `5`,
        locations: [`The Death Star`, `The Executor`, `Imperial Mining Operation`]
    },
    {
        name: `Mustafar`,
        var: `3`,
        locations: [`Imperial Base`, `Station gamma`, `Sith Location`]
    },
    {
        name: `Endor`,
        var: `end`,
        locations: [`Endor Shield Generator`, `Forest Outpost`, `Ship Docking Bay`]
    },
    {
        name: `Tatooine`,
        var: `2`,
        locations: [`Station Alpha`, `Mos-Eisley`, `Tatooine Supply Depot`]
    },
    {
        name: `Dagobah`,
        var: `4`,
        locations: [`Swamp Outpost`, `Imperial Secret Facility`, `Dagobah Relay Outpost`]
    },
];



// imperial bases
// imperial center of research-scariff, spire-scariff, cairn installation, coruscant shipyard
// felucia imperial base, shipyard, detainment center
// geonosis imperial base, shipyard, detainment center
// imperial base mustafar, naboo, yavin 4
// imperial orbital base
// outposts, dantooine, dathomir, endor, naboo, yavin 4, Deyer, Orra, Aurek-Two
// imperial production laboratories
// relay outposts
// resource base, station alpha, beta, gamma, imperial secret facility
// imperial weapons laboratory, weapons research facility weapons development facility
// kashyyyk imperial base, 
// naboo weapons depot
// training camp imiif-138
// talus imperial outpost



// do you use a vehicle?

console.log(`Ready for Action!`);



// function vehicleUsed(val){
//     if(val === true){
//         inputVehicle.innerHTML +=                 
//     `<div id="veh-used">
//         <label for="usedV"> What do you use?
//             <select id="dropdown"> 
//                 <option value="" >(select one)</option>
//                 <option value="1" >Speeder</option>
//                 <option value="2" >Walker</option>
//                 <option value="3" >Two legged Walker</option>
//             </select>
//         </label>
//     </div>`
//     }// end true
// }// end function


function starSystemOutput(){
    console.log(`in starSystemOutput`);
    clearStarSystem();
    // define value from HTML (THIS TURNED OUT TO BE A STRING VALUE! WHO WOULD HAVE THOUGHT!)
    let systemValue = document.getElementById("dropDownStars").value;
    // console.log(starSystem);
    // console.log(systemValue);

    // setting the starSystem variable
    for(let item of starSystemBases){
        console.log(`inside starSystemBase loop`);
        if(item.var === systemValue){
            // console.log(`found a match`);
            starSystem = item.var;
        }// end find value match and set variable starSystem
    }// end loop through starSystemBases 

    console.log(starSystem);

    // loop through bases to display names of bases
    for(let item of starSystemBases){
        console.log(`inside displaying bases`);
        if(starSystem === item.var){
            console.log(`Your base is on ${item.name} with locations of ${item.locations}`);
            for(let base of item.locations){
                console.log(`this base is ${base}`);
                starSystemDiv.innerHTML += 
                `
                <label for="${base}"><input id="${base}" type="radio" class="inline" name="${base}" select value="true">${base}</label>
                `;
            }// end loop through bases
        }// end matching the dropdown menu to selection
    }// end looping through bases display
}// end star system bases

// end function insert
// console.log(starSystemOutput(`Space Station`));

function clearStarSystem(){
    starSystemDiv.innerHTML = ``;
    
    
}
function repeatedInsanity(){
    console.log(document.getElementById("dropDownStars").value);
}




