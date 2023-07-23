// jame adad dar sorate bodan STRING
let marjan = [1, 7, 10, 17, 'jafar', 6, 8 , 'jafar+', 'sardame' , 25];

function specialkhateri (marjan){
    let sum = 0;
    
    for (let i = 0; i < marjan.length; i++) {
       
        if (typeof marjan[i] === "number"){
            sum += marjan [i];
        }
    }
    console.log("jame number : " + sum);
}
specialkhateri(marjan);

// gereftane bozorgtrin adad
let numbers = [20, 30, 40 ,50 ,100, 200];
function maxNumber(numbers) {
    let max = numbers[0];

    for (let i = 0; i < numbers.length; i++) {
       if (numbers[i] > max) {
        max = numbers[i];
       } 
    }
    console.log("max number : " + max)
}
maxNumber(numbers);
// gereftane kochiktrin adad
let number = [1,20, 30, 40 ,50 ,100, 200];
function minNumber(number) {
    let min = number[0];

    for (let i = 0; i < number.length; i++) {
       if (number[i] < min) {
        min = number[i];
       } 
    }
    console.log("min number : " + min)
}
minNumber(number);
// gereftane avarage
let average = [10, 50, 30, 15];
let result = sumAverage(average);
function sumAverage(average) {
    let sum = 0;
    for (let i = 0; i < average.length; i++) {
        sum += average[i];
    }
    let avg = sum / average.length;
    return{
        sum : sum , avg : avg
    };
}
console.log("jame number : " + result.sum);
console.log("average number : " + result.avg);
// jame number and strings
let array = [55, 77 , 90 , 65 , 'Salam', 65 , 'Ostad' , 78 , 'Khateri'];
sumArray(array);
function sumArray (array){
    let sum = 0;
    let stringSum = "";

    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === "number") {
            sum += array[i];
        }
        else if (typeof array[i] === "string"){
            stringSum += array[i];
        } 
    }

    console.log("number sum : " , sum)
    console.log("string sum : " , stringSum)
}
