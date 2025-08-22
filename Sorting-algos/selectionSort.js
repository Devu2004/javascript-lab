function selection(arr){
    let n = arr.length;
    for(let i = 0; i<n-1;i++){
        let minIdx = i;
        for(let j = i+1;j<n;j++){
            if(arr[minIdx]>arr[j]) minIdx = j
        }
        if(minIdx != i){
            let temp = arr[minIdx];
            arr[minIdx] = arr[i];
            arr[i] = temp
        }
    }
    return arr
}
console.log(selection([10,5,1,12,3]));