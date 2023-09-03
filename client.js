

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

let spaceStation = {
    impBase: "The Death Star",
    starDestroyer: "The Executor",
    facMining: "Imperial Mining Operation"
}

let endorStation = {
    impBase: "Endor Shield Generator",
    outpost: "Forest Outpost",
    outpost1: "Ship Docking Bay"
}

// do you use a vehicle?

console.log(`Ready for Action!`);


const inputVehicle = document.querySelector(`#vehicle-con`);
const inputLocation = document.querySelector(`#star-system`);

function vehicleUsed(val){
    if(val === true){
        inputVehicle.innerHTML +=                 
    `<div id="veh-used">
        <label for="usedV"> What do you use?
            <select id="dropdown"> 
                <option value="" >(select one)</option>
                <option value="1" >Speeder</option>
                <option value="2" >Walker</option>
                <option value="3" >Two legged Walker</option>
            </select>
        </label>
    </div>`
    }// end true
}// end function


function starSystem(){
    inputLocation.innerHTML += `
                    <div id="space-station">   
                        <label for="spaceStation-Loc"> Please Select your Station:
                            <label for="death-star"><input id="death-star" type="radio" class="inline" name="spaceStation" select value="true"> Death Star</label>
                            <label for="exe-cutor"><input id="exe-cutor" type="radio" class="inline" name="spaceStation" select value="true"> The Executor</label>
                            <label for="imp-mining"><input id="imp-mining" type="radio" class="inline" name="spaceStation" select value="true"> Imperial Mining Station</label>
                        </label>
                    </div> `
}// end function insert








