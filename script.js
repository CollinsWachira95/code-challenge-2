//// Get references to HTML elements using their IDs
const newItemInput = document.getElementById("new-item")
const addButton = document.getElementById("add-button")
const shoppingList = document.getElementById("shopping-list")

//// Function to add an item to the list
function addItemToList(ItemName) {
//// Array to store list items
    const items = [];
    items.push(ItemName);

const newListItem = document.createElement("li");
newListItem.textContent = ItemName;
//// Add the list item to the shopping list
shoppingList.appendChild(newListItem);
}

// Add event listener to "Add" button
addButton.addEventListener("click", function() {
    const newItem = newItemInput.value;

    if (newItem) {
        addItemToList(newItem);

        newItemInput.value = "";
    }
});

// Function to add the items to the shopping list
function markPurchased (){
    const listItems = shoppingList.querySelectorAll("li");

    for(const item of listItems) {
        item.classList.add("purchased");
    }
}

// Add event listener to "Mark Purchased" button
const markPurchasedButton = document.getElementById("mark-purchased-button");
markPurchasedButton.addEventListener("click", markPurchased);

// Function to clear the shopping list
function clearShoppingList(){
    const items = [];

    shoppingList.innerHTML = "";
}

// Add event listener to "Clear List" button
const clearListButton = document.getElementById("clear-button");
clearListButton.addEventListener("click", clearShoppingList);