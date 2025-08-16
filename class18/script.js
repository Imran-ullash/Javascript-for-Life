// // Jode 80 marks er beshi pai tahole certificate pabo noi pabo na 
// const passMark = 80;
// const myMark = 33;

// if( myMark >= passMark){
//     // console.log('ami certificate pabo');

// }else{
//     // console.log('ami certificate pabo na');

// }


// const user = 50;
// const aPlus = 80;
// const aGrade = 70;
// const aMinus = 60;
// const bGrade = 50;


// if (user >= aPlus){
//     console.log('tmi a plus paiso');

// } else if(user >= aGrade){
//     console.log('tmi a grade paiso');

// }else if(user >= aMinus){
//     console.log('tmi a minus paiso');

// }else if(user >= bGrade){
//     console.log('tmi b grade paiso');

// }else{
//     console.log('tmi fail korso');

// }


const isInsideDhaka =false       ;
const amount = 900;
const dFree = "free"
const d60 = 60;
const d120 = 120;

if (amount >= 1000) {
    console.log(`delivary charge hobe ${dFree} and total amount hobe ${amount}`);

} else {
    if (isInsideDhaka) {
        console.log(`delivary charge hobe ${d60} and total amount hobe ${amount+d60}`);

    } else {
        console.log(`delivary charge hobe ${d120} and total amount hobe ${amount+d120}`);

    }
}


