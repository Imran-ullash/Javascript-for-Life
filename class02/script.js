// আপনার কাছে 1000 টাকা আছে। আপনি একটি মোবাইল কভার কিনলেন 350 টাকা এবং একটি হেডফোন কিনলেন 499 টাকা। কত টাকা অবশিষ্ট আছে তা বের করুন।

const myPocket = 1000;
const cover = 350;
const headphone = 499;

const expensess = cover + headphone;

const leftMoney = myPocket - expensess;
console.log(`amr kase ${leftMoney} tk oboshito ase`);

// ২. একটি দোকানে আপেলের দাম প্রতি কেজি 120 টাকা। আপনি 5 কেজি 
// আপেল কিনলেন। মোট কত টাকা দিতে হবে তা বের করুন।

const pricePerKg = 120;
const buyKg = 5;

const sumOfApple = pricePerKg * buyKg;

console.log(`Mot hobe ${sumOfApple} tk`);

//  ৩. আপনার কাছে 2000 টাকা আছে। আপনি একটি শার্ট কিনলেন 750 টাকা এবং 
//  একটি জুতা কিনলেন 1150 টাকা দিয়ে। কত টাকা ফেরত রইল, এবং যদি 100 টাকা ফেরত পাওয়া যায় তবে দোকানদারকে কত টাকা দিতে হবে তা প্রিন্ট করুন।

const haveMoney = 2000;
const shirtPrice = 750;
const shoePrice = 1150;

const leftMoney2 = haveMoney - (shirtPrice + shoePrice);
console.log(`amr kase roilo ${leftMoney2}`);

const needPay = haveMoney - leftMoney2;

console.log(`dokander k dite hobe ${needPay}`);

// ৪. আপনি 3টি চকলেট কিনলেন, প্রতিটি চকলেটের দাম 45 টাকা। 
// আপনার কাছে মোট 500 টাকা ছিল। মোট দাম বের করুন, তারপর কত 
// টাকা ফেরত রইল তা বের করুন।

const myMoney = 500;
const numOfChocolate = 3;
const priceOfChocolate = 45;

const sumOfChoco = numOfChocolate * priceOfChocolate;

const leftMoney3 = myMoney - sumOfChoco;

console.log(`àmr kase tk ferot roilo ${leftMoney3}`);

// ৫. একজন বাবার বয়স 50 বছর। তার ছেলের বয়স বাবার বয়সের অর্ধেক।
// তাদের বয়সের যোগফল ও পার্থক্য বের করুন।

const fatherAge = 50;
const childAge = 50 / 2;

const sumOfAge = fatherAge + childAge;

const gapOfAGe = fatherAge - childAge;


// ৬. আলীর বয়স 30 বছর। তার বোনের বয়স আলীর বয়সের থেকে 7 বছর কম।
//     তাদের বয়সের যোগফল ও পার্থক্য বের করুন \

const aliAGe = 30;
const ageOfSister = 30 - 7;

const sumOfAGe = aliAGe + ageOfSister;
const gapOfage = aliAGe - ageOfSister;




