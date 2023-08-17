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
    let total = 0,cost;
    for(let i=0; i<ages.length;i++){

        if(ages<12){
            cost=5
            total += cost
        }
        else if(ages >= 12 && ages <= 17  ){
            cost = 10;
            total += cost
        }
        else if(ages >= 18 && ages <= 59  ){
            cost = 15;
            total += cost
        }
        else{
            cost = 8;
            total += cost
        }
    }
    console.log(total)

}
calculateTotalTicketPrice(ages)