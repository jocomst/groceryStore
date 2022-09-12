/*
Assignment requirements:
1. Create an array called "shoppingList" with the following items:
'pop tarts', 'ramen noodles', 'chips', 'salsa', and 'coffee'.
2. Write a function called 'addFruitLoops' that adds 'fruit loops' to an array
3. Write a function called updateElement that takes an array, an element from that array, and a new element
 and updates it : ex. "coffee" -> "fair trade coffee"
5. Create an empty array called 'shoppingCart'
6. Write a function called removeLast that takes the last element of one array and adds it to another array
7. Remove the first item from shoppingList and add it to shoppingCart
8. Write a 'while' loop that takes items from your shopping list and moves them 
to your cart until there are no items left in the list.
9. Sort the items in your cart alphabetically and then backwards
10. Print the list of items in your shopping cart to the console
as a comma separated string
*/

const shoppingList = ["pop tarts", "ramen noodles", "chips", "salsa", "coffee"];
const addFruitLoops = (arr) => {
	arr.push("fruit loops");
};

const updateElement = (arr, word, newWord) => {
	const index = arr.find(word);
	arr[index] = newWord;
};

const replaceWord = (word, newWord, arr) => {
	const indexNum = arr.findIndex((x) => x === word);
	arr[indexNum] = newWord;
};

const removeLast = (arrOne, arrTwo) => {
	arrTwo.push(arrOne.pop());
};

const removeFirst = (arrOne, arrTwo) => {
	arrTwo.push(arrOne.shift());
};

replaceWord("coffee", "fair trade coffee", shoppingList);
replaceWord("chips", "rice", shoppingList);
replaceWord("salsa", "beans", shoppingList);

const shoppingCart = [];
shoppingCart.push(shoppingList.pop());
shoppingCart.push(shoppingList.shift());

while (shoppingList.length > 1) {
	shoppingCart.push(shoppingList.pop());
}

shoppingCart.sort();
shoppingCart.sort().reverse();
console.log(shoppingCart.join(", "));
