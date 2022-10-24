//Preparation function
//- Params:
//    - Function callback (will resolve once item is prepped)
//    - String itemName,
//- If/Else for menu items
function prepare(callback, itemName) {
    let preparationTime;

    switch (itemName) {
        case "Coffee":
            preparationTime = 4000;
            break;
        case "Juice":
            preparationTime = 500;
            break;
        case "Chips":
            preparationTime = 8500;
            break;
        case "Sandwhich":
            preparationTime = 3500;
            break;
        case "Burger":
            preparationTime = 10000
            break;
        default:
            console.log("That's not on the menu.");
            return;
    }
    setTimeout(callback, preparationTime, itemName);
}

//Take Order function
//- Params:
//    - String itemName,
//Passes itemName to the Submit Order function
function takeOrder(itemName) {
    console.log(`${itemName}, is that correct?`);
    submitOrder(itemName);
}

//Submit Order function
//- Paramas:
//    - String itemName
//Passes itemName to the Preparation function
function submitOrder(itemName) {
    console.log(`Taking ${itemName} to the kitchen`);
    prepare(serveOrder, itemName)
}

//Serve function
//- Params:
//    - String itemName
function serveOrder(itemName) {
    console.log(`Serving ${itemName}`);
}


// Juice will be served before coffee, even though the call is after,
// because the wait for juice is so much smaller than that for coffee. 
takeOrder("Coffee");
takeOrder("Juice");