async function getch(url){
    const response = await fetch(url);
    const json_promise = await response.json();
    return json_promise;
}

// function veletlen_szam(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

async function uj_info(){
    console.log("megnyomódtam");
    let data = await getch("https://dogapi.dog/api/v2/facts?limit=1");
    console.log(data);
    console.log("adat megérkezett és már ki is írtam");
    //
    console.log(data.data[0].attributes);
    console.log(data.data[0].type);

    

    // cim.innerHTML = data['object'];
    cim.innerHTML = data.data[0].id;
    type.innerHTML = data.data[0].type;

    info.innerHTML = data.data[0].attributes.body;

    
}

async function uj_kep() {
    console.log("megnyomodtam");
    let data = await getch("https://dog.ceo/api/breeds/image/random");
    console.log(data);
    console.log("adat megérkezett és már kirajzoltam is írtam");

    kep.src = data.message;
}

const gomb = document.getElementById("gomb");
const cim = document.getElementById("cim");
const info = document.getElementById("info");

gomb.addEventListener("click", uj_info);
gomb.addEventListener("click", uj_kep);


