var arr = [12,34,2,23,8,62,14,10];

var min = arr[0];
var max = arr[0]; 

// max
for(var i=1; i<arr.length; i++){
    if(max < arr[i]){
        max = arr[i];
    }
}

// min
for(var i=1; i<arr.length; i++){
    if(min > arr[i]){
        min = arr[i];
    }
}

// sec
var sec = arr[0];
for(var i=1; i<arr.length; i++){
    if((sec > arr[i])&&(arr[i]!= min)){
        sec = arr[i];
    }
}


console.log("min:" + min);
console.log("max：" + max);
console.log("sec:" + sec);