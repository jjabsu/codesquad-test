let str = prompt("단어를 입력하세요");
let num = prompt("얼만큼?");
let absoluteNum = Math.abs(num);
let dir = prompt("방향은 어디로?");
let strArr = str.split("");
let result = '';


function right(arr, absoluteNum) {
    for (let i = 0; i < absoluteNum; i++) {
        let last = arr.pop();
        arr.unshift(last);
    }
}

function left(arr, absoluteNum) {
    for (let i = 0; i < absoluteNum; i++) {
        let first = arr.shift();
        arr.push(first);
    }
}



function main() {
   
    if (num > 0) {
        if (dir === 'r' || dir === 'R') {
            right(strArr, absoluteNum);
        } else if (dir === 'l' || dir === 'L') {
            left(strArr, absoluteNum);
        }
    } else {
        if (dir === 'r' || dir === 'R') {
            left(strArr, absoluteNum);
        } else if (dir === 'l' || dir === 'L') {
            right(strArr, absoluteNum);
        }
    }
    result = strArr.join("");
}


main();

let word = document.querySelector("#word");
word.innerHTML = `단어: ${str} 몇번?: ${num} 방향: ${dir} <br> 결과: ${result}`;
