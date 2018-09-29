var arr = [12,34,2,23,8,62,14,10];

var bubbleArr = arr;

var selectArr = arr;

// bubbleSort
for (var i = 0; i < bubbleArr.length - 1; i++) {   
    for (var j = 0; j < bubbleArr.length - 1 - i; j++) {   
        if (bubbleArr[j] > bubbleArr[j+1]) {        // 相邻元素两两对比   
            var temp = bubbleArr[j+1];        // 元素交换   
            bubbleArr[j+1] = bubbleArr[j];   
            bubbleArr[j] = temp;   
        }   
    }   
}   
console.log(bubbleArr);

// selectSort
for(var i=0; i<arr.length-1; i++){
    for(var j=i+1; j<arr.length; j++){
        var cur = arr[i]; // 这一步很关键，arr[i]的值会不断变化
        if(cur > arr[j]){
            var index = arr[j];
            arr[j] = cur;
            arr[i] = index;
        }
        
    }
}

console.log(arr);