// NodeList = Static collection of HTML elements by (id, class, element)
// Can be created by using queryselectorAll()
// Similar to an array, but no (map, filter, reduce)
// NodeList won't update to automatically reflect changes

 // querySelectorAll returns a NodeList
const items = document.querySelectorAll(".item");

// items is NOT an array, but it looks like one
console.log(items); // NodeList(3)

// Loop through the NodeList using forEach
items.forEach((element, index) => {
    // Change text color of each paragraph
    element.style.color = "blue";

    // Add index number to text
    element.textContent = index + 1 + ". " + element.textContent;
});

// querySelectorAll() → NodeList
// forEach() works on NodeList
// You can access elements using index (items[0])