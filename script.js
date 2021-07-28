var forestDragon = dragon("forest");
var waterDragon = dragon("water");
var stoneDragon = dragon("stone");
var sandDragon = dragon("sand");
var iceDragon = dragon("ice");


function dragon(species) {
    return {
        category: `#${species} output`,
        click:0,
        addClick: function(clickNumber) {
            this.click += clickNumber;
            document.querySelector(this.category).innerText = this.click;
        },
        view: function() {
            document.querySelector(".dragonCard").innerHTML = "";
            document.querySelector(".dragonCard").innerHTML += `<div class="card" id="${species}" onclick="${species}Dragon.addClick(1)">
              <h2>${species} dragon</h2>
              <img src="https://cdn.glitch.com/8ff012a0-d643-4c08-b27e-7ce2744a4f17%2Fdragon_1f409.png?v=1626716716225" alt="${species} dragon" class="${species}" width="200">
              <output>${this.click}</output>
            </div>`
        }
    }
}
