const a = "1";

console.log("aaa", a);

//Variables in typescript
//constants are not allowed to change in ts
const hello = "world";

//In ts we can only assign data of the same type to the variable, to ensure the type will never change
let helloagain = "world";

//Syntax to explicity specify the type of a variable
let hellothere: string = "world";

//Functions in TS
const getFullName = (name: string, surname: string) => {
    //Arrow functions usually easier and faster
    return name + " " + surname;
}

console.log(getFullName("Hannah", "Angel"));