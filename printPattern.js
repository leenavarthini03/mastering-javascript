// input n .

/* if n = 5
***** 5
**** 4
*** 3
** 2
* 1
*/


function pattern(n) {
    for (let i = n; i > 0; i--) {
        let mystr = "";
        for (let a = i; a > 0; a--) {
            mystr = mystr + "*"
        }
        console.log(mystr)
    }
}
pattern(8);



//array of numbers and print sum
//using for loop
let a = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i <= a[i]; i++) {
    sum = sum + a[i]
}
console.log(sum)
//using functions
function array(n) {
    let sum = 0;
    for (let i = 0; i < n.length; i++) {
        //console.log(n.length)
        sum = a[i] + sum;
        //console.log(sum)
    };
    return sum;
};
array([1, 2, 3])



/* if n=5
*
**
***
****
*****
*/
function pattern(n) {
    let str = '';
    for (let i = 1; i <= n; i++) {
        str = str + '*';
        console.log(str)
    }
}
pattern(5);


/* if n=5
* 1
** 2 
*** 3 
**** 4
***** 5
**** 4
*** 3
** 2
* 1
*/


function pattern(n) {
    let str = '';
    for (let i = 1; i <= n; i++) {
        str += '*';
        console.log(str)
    }
    for (let i = n - 1; i > 0; i--) {
        //str = str.substring(0, str.length - 1);
        str = str.slice(0, str.length - 1)
        console.log(str)
    }
}
pattern(5);




/* if n=5
***** 5
 *** 3 
  * 1
*/
// function pattern(n) {
//     for (i = n; i <= n; i--) {
//         let str = '';
//         if (i % 2 != 0) {
//             for (let a = i; a > 0; a--)
//                 str = str + '*';
//         }
//         console.log(str)
//     }
// }
// pattern(5)

function pattern(n) {
    let str = '';
    for (let i = 0; i < n; i++) {
        str = str + '*'
    }
    console.log(str);
    for (let i = n; i > 0; i--) {
        if (i % 2 != 0) {
            str = str.slice(1, -1)
            let mystr = ' ' + str + ' ';
            console.log(mystr);
        }
    }
}
pattern(5)



//[1,2,3,4] sum=6 => [2,4] output

let arr = [1, 2, 3, 4];
for (let i = 0; i <= arr.length; i++) {
    if ((arr[0] + arr[i]) == 6) {
        console.log([arr[0], arr[i]])
    }
    else if ((a[1] + a[i]) == 6) {
        console.log([arr[1], arr[i]])
    }
}
//sum of all numbers in array
let ab = [1, 2, 3, 4];
let sums = 0;
for (let i = 0; i < ab.length; i++) {
    sums = sums + ab[i];
    //console.log(ab[i])
}
console.log(sums)


