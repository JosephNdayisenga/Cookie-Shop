// Declare a variable called cookieShopsArray and assign it an empty array

let cookieShopsArray = [];

//Find the table by the id "store-table"

let elTable = document.getElementById("main-table");

// Create a constructor function

let Store = function (name, location, storeOpens, storeCloses, salePerHour, minCookieSoldPerHour, maxCookieSoldPerHour) {
    this.name = name;
    this.location = location;
    this.storeOpens = storeOpens;
    this.storeCloses = storeCloses;
    this.salePerHour = salePerHour;
    this.minCookieSoldPerHour = minCookieSoldPerHour;
    this.maxCookieSoldPerHour = maxCookieSoldPerHour;
    this.totalSalePerDay = 0;

    // Create a method that generates a random number of customers per hour

    this.totalSalePerHour = function () {
        return Math.floor(Math.random () * (this.maxCookieSoldPerHour -this.minCookieSoldPerHour) + this.minCookieSoldPerHour) * this.salePerHour;
    }

}

// Instiate new instances of the store constructor

let ButterCookie = new Store ("Butter Cookie", "Silver Spring", 6, 14, 60, 50, 100);

let AnimalCookie = new Store ("Animal Cookie", "Bethesda", 6, 14, 50, 40, 80);

let VanillaCookie = new Store ("Vanilla Cookie", "RockVille", 6, 14, 40, 40, 70);

// Push the new instances in the cookieShopsArray

cookieShopsArray.push(ButterCookie, AnimalCookie, VanillaCookie);

// Define a function that display the header of our table

let displayTableHeader = function () {

    let elRow = document.createElement("tr")
    elTable.appendChild(elRow);

    let elNameHeader = document.createElement("th")
    elRow.appendChild(elNameHeader).innerHTML = "Cookie Shop"

    for (let i = 6; i < 14; i++) {
        
        let elTableHeader = document.createElement("th")
        elRow.appendChild(elTableHeader).innerHTML = i + ":00";
    }

    // Create a new table header element "total"

    let elTotalHeader = document.createElement("th")
    elRow.appendChild(elTotalHeader).innerHTML = "Total";
}

//Define a function that will populate the table with sales from all the instances

let displayTotalSale = function(store) {

    let storeRow = document.createElement("tr")
    elTable.appendChild(storeRow);

    let storeHeader = document.createElement("th")
    storeRow.appendChild(storeHeader).innerHTML = store.name;

    for (let i = store.storeOpens; i < store.storeCloses; i++) {

        let result = store.totalSalePerHour();

        let elTableData = document.createElement("td");
        storeRow.appendChild(elTableData).innerHTML = result;

        store.totalSalePerDay += result;
    }

    // Create a new table head element that will contain the totals

    let elTotalTableData = document.createElement("th");
    storeRow.appendChild(elTotalTableData).innerHTML = store.totalSalePerDay;
}

