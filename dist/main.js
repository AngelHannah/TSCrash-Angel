var a = "1";
console.log("aaa", a);
//Variables in typescript
//constants are not allowed to change in ts
var hello = "world";
//In ts we can only assign data of the same type to the variable, to ensure the type will never change
var helloagain = "world";
//Syntax to explicity specify the type of a variable
var hellothere = "world";
//Functions in TS
var getFullName = function (name, surname) {
    //Arrow functions usually easier and faster
    return name + " " + surname;
};
console.log(getFullName("Hannah", "Angel"));
