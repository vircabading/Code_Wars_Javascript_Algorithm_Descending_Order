////////////////////////////////////////////////
//  Code Wars: DESCENDING ORDER
////////////////////////////////////////////////

function descendingOrder(n){
    let num = n.toString();
    let numList = [];
    console.log ("Num:", num);
    for (x in num) {
        numList.push(parseInt(x));
    }
    numList.sort();
    console.log("numList:", numList);
}

descendingOrder(12345);