// objekta izgūšana ar literāļa palīdzību
const car = {type:"Fiat", model:"500", color:"white"};
// objekta īpašības (property) izgūšana
console.log(car.type);
console.log(car["type"]);
// objekts ar metodi
const person ={
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function() {
        return this.firstName +""+ this.lastName;
    }
};
//mans piemērs

const country ={
    firstUnion: "EU",
    lastCountry: "LATVIA",
    id: LV,
    Latvia_classification: function() {
        return this.firstUnion +""+ this.lastCountry;

    }
};

//piemērs

const EU = {
    countrys: ['Latvija', 'Lietuva', 'Cehija'],
    
    EU_classification: function () {
    return this.countrys == prompt("Enter country name") ? "EU" : "Not EU"
    }
    };