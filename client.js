const inputVehicle = document.querySelector(`#vehicle-type`);
const inputVehicleUpload = document.querySelector(`#vehicle-upload`);
const inputLocation = document.querySelector(`#star-system`);
const starSystemDiv = document.querySelector(`#base-selection`);
const weaponTypeDiv = document.querySelector(`#weapon-type`);

let starSystem;
let vehicleValue;

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


function weaponUsed(val){
    if(val === true){
        console.log(`you have used a weapon!`);
        weaponTypeDiv.innerHTML += 
        `<label for="weapon-used"> Indicate Your Weapon
            <select onchange="" id="dropDownWeapons">
                <option value="" >(select one)</option>
                <option value="yy" >E-11 Blaster Rifle</option>
                <option value="yy" >Repeating Blaster</option>
                <option value="yy" >Relby-k23</option>
            </select>
        </label>
        `
    }
    else if(val === false){
        console.log(`You are unarmed.`);
        clearWeaponType();
    }
}// end function

// populates selector for vehicle used
function vehicleUsed(val){
        if(val === true){
            console.log(`vehicle dropdown initiated`);
            clearVehicle();
                inputVehicle.innerHTML +=                 
                    `<label for="usedV"> What do you use?
                        <select onchange="uploadVehiclePhoto()" id="dropDownVehicle"> 
                            <option value="" >(select one)</option>
                            <option value="xx" >74-Z Speeder</option>
                            <option value="xx" >AT-ST</option>
                            <option value="xx" >AT-AT</option>
                            <option value="xx" >Tie Fighter</option>
                        </select>
                    </label>`
        }// end true
        if(val === false){
            console.log(`vehicle log clear`);
            clearVehicle();
            clearVehicleUpload();
        } // end false
}// end function

// function that allows the upload of vehicle photo
function uploadVehiclePhoto(){
    console.log(`inVehicleUplaod`);
    vehicleValue = document.getElementById(`dropDownVehicle`).value;
    console.log(vehicleValue);
    clearVehicleUpload();
        if(vehicleValue == `xx`){
            console.log(`upload your photo!`);
            inputVehicleUpload.innerHTML += 
            `
            <label for='vehicle-pic'>Upload Condition Record: <input name='vehicle-pic' id='vehicle-pic' type="file"></label>
            `;
        }// if string option selected return upload box
}


// function for the starSystem DOM
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
            starSystemDiv.innerHTML += `Select your Base`
            for(let base of item.locations){
                console.log(`this base is ${base}`);
                starSystemDiv.innerHTML += 
                `
                <label for="${base}"><input id="${base}" type="radio" class="inline" name="base-ops" select value="true"> ${base} </label>
                `;
            }// end loop through bases
        }// end matching the dropdown menu to selection
    }// end looping through bases display
}// end star system bases

// end function insert

//clears star system field
function clearStarSystem(){
    starSystemDiv.innerHTML = ``;  
}

//clears the selector for vehicle used
function clearVehicle(){
    inputVehicle.innerHTML = ``;
}

function clearVehicleUpload(){
    inputVehicleUpload.innerHTML = ``;
}

function clearWeaponType(){
    weaponTypeDiv.innerHTML = ``;
}




