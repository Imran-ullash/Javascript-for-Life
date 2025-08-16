const age = 60;
const price = 400;
const vara50 = price * 50/100;
const vara30 = price * 30/100;
// console.log(vara30);


if(age <= 5){
    console.log('vara 0 tk ');
    
} else if(age <= 17){
    console.log(`tahole vara hobe ${price - vara50}`);
    
}else if(age >= 60){
    console.log(`tahole vara hobe ${price - vara30}`);
    
}else{
    console.log('full vara 100');
    
}