// Its a Simple Comparsion-based algorithem where adjacent elements are compare and if first is greator than second then it swaps
function bubble(arr){
    let n = arr.length;
    for(let i=0;i<n-1;i++){
        let swap = false;
        for(let j = 0; j<n-i-1; j++){
            if(arr[j] > arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
                swap = true;
            }    
        }
        if(!swap) break;
    }
    return arr;
}

console.log(bubble([5, 3, 4, 1]));
