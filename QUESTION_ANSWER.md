# 1

# let greeting;

# greetign = {};

# console.log(greetign);

# answer : ReferenceError: greetign is not defined

- we are not declare greetign.as it is not declare so its not found.so,reference error

# 2

# function sum(a, b) {

# return a + b;

# }

# sum(1, "2");

# answer: "12"

- implicitily convert as String.So,we will get concanat of two value

# 3

# const food = ["🍕", "🍫", "🥑", "🍔"];

# const info = { favoriteFood: food[0] };

# info.favoriteFood = "🍝";

# console.log(food);

# answer : ['🍕', '🍫', '🥑', '🍔']

- we create a new object ,which has a key favouriteFood,that is totally different from food.so whatever we change we will not get any reference from food array.

# 4

# function sayHi(name) {

# return `Hi there, ${name}`;

# }

# console.log(sayHi());

# answer : Hi there, undefined

- we pass a parameter in the sayHi function,but when call we don't set any parameter.as a result we get an undefined value

# 5

# let count = 0;

# const nums = [0, 1, 2, 3];

# nums.forEach((num) => {

# if (num) count += 1;

# });

# console.log(count);

# answer 3

- js consider 0 as a falsy value,so loop through in truthy value(as conditional).so when we get 0 we are not update count value count
