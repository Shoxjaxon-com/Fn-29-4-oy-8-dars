// === For === //

//  1-masala

// for(let i = 1; i<= 50; i++){
// if( i % 5 == 0){
//     console.log('5ga bolinadi');
// }else if( i % 3 == 0){
//     console.log('3 ga bolinadi');
// }
//  if( i % 3 == 0 && i % 5 == 0){
//     console.log('3 va 5 ga bolinadi');
// }
// }

// 2-masala
// let sum = 0;
// for(let i = 1; i<= 100; i++){
//     if(i >= 30 && i<= 70 && i % 2 == 0){
//             sum += i
//         }
//     }
//     console.log(sum);

// 3-masala

// let musbat = 0;
// let toq = 0;
// for(let i = -20 ; i <=20;i++){
//     if( i % 2 == 1){
//         toq++
//     } else if(i > 0){
//         musbat++
//     }
// }

// console.log('Musbat sonlar' + musbat);
// console.log('Toq sonlar' + toq);

// 4-masala
// for(let i=1; i <= 100; i++){
        // if (i % 2 == 0 || i % 7 == 0) {
        //     console.log("maxsus son");
            
        // }
//     }


 // === Break continue //

//  1-masala
// for(let i = 1; i<= 100; i++){
//     if(i === 25){
//         break
//     }
//     console.log(i);
// }

// 2-masala
// for(let i = 1; i <= 20; i++){
//     if(i % 2 == 0){
//         continue
//     }
//     console.log(i);
// }

// 3-masala

// for(let i = 1; i<= 50;i++){
//    if( i > 30){
//     break
//    }
//    if(i < 10 || i > 30){
//     continue
//    }
//     console.log(i);
// }


// === Switch case  === //
// 1-masala
// let day = +prompt('Kunni harifini aniqlash') 
// switch (day) {
//     case 1:
//         console.log('Dushanba');
//         break;
//         case 2:
//             console.log('Seshanba');
//             break;
//             case 3:
//         console.log('Chorshanba');
//         break;
//         case 4:
//         console.log('Payshanba');
//         break;
//         case 5:
//         console.log('Juma');
//         break;
//         case 6:
//         console.log('Shanba');
//         break;
//         case 7:
//         console.log('Yakshanba');
//         break;
//     default: console.log('Bunday kun mavjud emas');
//         break;
//  }

// 2-masala
// let month = +prompt('Oy raqamini kiriting')
// switch (month) {
//     case 1:
//     case 2:
//     case 12:
//         console.log('Qish');
//         break;
        
//         case 3:
//          case 4:
//          case 5:
//                 console.log('Bahor');
//                 break;
               
//                 case 6:
//                 case 7:
//                 case 8:
//                 console.log('Yoz');
//                 break;
                
//                 case 9:
//                 case 10;
//                 case 11:
//                 console.log('Kuz');
//                 break;

//     default:console.log('BUnday oy mavjud emas');
//         break;
// }

// 3-masala
// let baho =+prompt('Bahoni kiriritng')
// switch (baho) {
//     case 1:
//     console.log('Juda yomon');
//     break;
    
//     case 2:
//     console.log('Yomon');
//     break;
    
//     case 3:
//     console.log('Qoniqarlik');
//     break;
//     case 4:
//     console.log('Yaxshi');
//     break;
//     case 5:
//     console.log('A`lo');
//     break;

//     default:console.log('Bunday baho mavjud emas');
//         break;
// }

// 4-masala
// let tarif = +prompt('Tarifni kiriting')
// switch (tarif) {
//     case 1:
//     console.log('Ekanom');
//     break;
//     case 2:
//     console.log('Standart');
//     break;
//     case 3:
//     console.log('Premium');
//     break;
    

//     default:console.log("Bunday tarif mavjud emas");
//         break;
// }

// 5-masala
// let Meva = +prompt("Meva narxini aniqlash");
// switch (Meva) {
//   case 1:
//     console.log("olma");
//     break;
//   case 2:
//     console.log("apelsin");
//     break;
//   case 3:
//     console.log("banan");
//     break;
//   case 4:
//     console.log("uva");
//     break;
//   default:
//     console.log("bunday meva qolmabdi");
//     break;
// }

// 6-masala
// let parol =+prompt('PArolni kiriting')
// switch (parol) {
//     case 1:
//     console.log('1 - Parolni tiklas');
//      break;

//      case 2:
//      console.log('2 - Parolni ozgartirish');
//      break;

//      case 2:
//      console.log('3 - Chiqish');
//      break;


//     default:console.log('Bunday parol mavjud emas');
//         break;
// }


// === WIhile Do === //

// let i = 1;
// while (i<= 10) {
//     console.log(i);
//     i++
// }


// let i = 1;
// do{
//  console.log(i);
//  i++
// }while(i <= 10)

// 2-masala

// let i = 10;
// while (i >= 1) {
//     console.log(i);
//     i--
// }
// let i = 10;
// do{
// console.log(i);
// i--
// }while(i >= 1)

// 3-masala

// let number = +prompt('Son kiriting: ');
// while (number < 0) {
//   alert('Musbat son kiriting!');
//   number = +prompt('Son kiriting: ');
// }

// 4-masala

// let i = 1;
// while(i<= 20){
//         if(i % 2 ==0){
//                 console.log(i);
//         }
//         i++
// }

// let i = 1;
// do{
//         if( i % 2 == 0)
//         console.log(i);
//         i++
// }while(i<=20)

// 5-masala
// let i = 123;
// let sum = 0;

// while (i > 0) {
//         let num = i % 10;
//         sum+=num;
//         i =Math.floor(i / 10)
// }
// console.log(sum);

// 6-masala

// let num =+prompt('Sonni kiriting')
// while ( num >=1) {
//         console.log(num);
//         num/=2
// }
// 8-masala
// let num =+prompt('Sonni kiritng')
// while (num % 3 == 0) {
//         if(num % 3 == 0){
//                 console.log(num);
//         }
// }

// 9-masala
// let arr = [1,2,3,4,5,6,7,8,9]
// let res = arr.reverse()
// console.log(res);


// 11-masala

// let num =+prompt('Sonni kiriting')
// let kopaytma = 1;
// while (num > 0) {
//         let res = num % 10
//         kopaytma *= res
//         num = Math.floor(son /10)
// }
// console.log(kopaytma);