// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
// };

// console.log(restaurant.mainMenu);
// // allows you to access restaurant.mainMenu by just typing mainMenu instead
// // allows you to access restaurant.categories by just typing cats instead
// // if mainMenu didn't exist, we set a default value to an empty array that will just display if nothing is there
// //  = []   sets default value    and   :<variable name> creates a new name for value
// const { mainMenu = [], categories: cats = [] } = restaurant;

// console.log(mainMenu, cats);
let cadeSillyNumber = 1;
let i = 2990;
while (i < 3000) {
  console.log(`I love you so much + ${cadeSillyNumber}% `);
  cadeSillyNumber = cadeSillyNumber + '💢';
  i++;
}
