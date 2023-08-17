function arrayGen(num){
    let outputArr = []
    for(let i=0; i<=num; i++){
        outputArr.push(Math.floor(Math.random()*100))
    }
    // console.log(outputArr)
    return outputArr
}
let ages = arrayGen(5)
function calculateTotalTicketPrice(ages){
    let total = 0, cost =0;
    
    if(ages<12){
        cost=5;
    }
    else if(ages >= 12 && ages >= 17  ){
        cost = 10;
    }
    else if(ages >= 18 && ages >= 59  ){
        cost = 15;
    }
    else if(ages>=60){
        cost = 8;
    }
    console.log(total += cost)

}
calculateTotalTicketPrice(ages)