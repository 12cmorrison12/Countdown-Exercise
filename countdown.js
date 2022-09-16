//Write a function called countdown that accepts a number as a parameter and every 1000 milliseconds decrements the value 
// and console.logs it. Once the value is 0 it should log “DONE!” and stop.

// countDown(4);
// 3
// 2
// 1
// "DONE!"

const countDown = (count) => {
    let countNum = setInterval(function(){
        count--;
        if(count === 0){
            console.log("DONE!");
        }
        else {
            console.log(count);
        }
    }, 1000);
}