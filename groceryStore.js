/*
Assignment requirements:
1. Create an arry called "shoppingList" with the following items:
'pop tarts', 'ramen noodles', 'chips', 'salsa', and 'coffee'.
2. Add 'fruit loops' to the shopping list
3. Update 'coffee' to 'fair trade coffee'
4. Replace 'chips' and 'salsa' with 'rice' and 'beans'
5. Create an empty array called 'shoppingCart'
6. Remove the last item from shoppingList and add it to shoppingCart
7. Remove the first item from shoppingList and add it to shoppingCart
8. Write a 'while' loop that takes items from your shopping list and moves them 
to your cart until there are no items left in the list.
9. Sort the items in your cart alphabetically and then backwards
10. Print the list of items in your shopping cart to the console
as a comma separated string
*/

const shoppingList = ["pop tarts", "ramen noodles", "chips", "salsa", "coffee"];
shoppingList.push("fruit loops");

const replaceWord = (word, newWord, arr) => {
	const indexNum = arr.findIndex((x) => x === word);
	arr[indexNum] = newWord;
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
