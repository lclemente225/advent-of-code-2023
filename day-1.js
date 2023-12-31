

let test = ['1abc2',
    'pqr3stu8vwx',
    'a1b2c3d4e5f',
    'treb7uchet'];


function addTogether(array){
    console.log("adding together")
    return array.reduce((acc, curr) => {
        let sum = parseInt(acc);
        let add = parseInt(curr);
        console.log(sum + " + " + add )
        return sum+=add
    })
}

function extractNum(array) {
    let newArray = [];
    for(let index in array){
        let number = '';
        let word = array[index];
        for(let i in word) {
            if(parseInt(word[i]) > 0 || parseInt(word[i]) < 10) {
                 number += word[i] 
            }
        }
        newArray.push(number);
    }
   return addTogether(newArray)
   
}

console.log(extractNum(test))