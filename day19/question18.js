//18. Count the number of vowels and consonants in a given string.

function countNumber(str){
    let vowels =0 , consonents = 0;
    for(let i=0; i<str.length;i++){
        let str1 = str[i].toLowerCase();
        if(str1=='a' || str1=='e' || str1=='i' || str1=='o' || str1=='u'){
            vowels++;
            // console.log(vowels)
        }
        else consonents++
    }
    console.log(vowels)
    console.log(consonents)
}
let str = "edfhgejfkjeiouhjj"
countNumber(str)