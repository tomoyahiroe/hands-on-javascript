// ハンズオンJSサンプルコード(RunJSで使ってね)

// 1. 定数と変数の宣言

// 1-1. 宣言
// const string = 'Johny'; //文字列型の代入
// let number = 24; // 数値型の代入
// const array = [1, 2, 3, 4, 5]; // 配列の代入
// const person = {
//   //オブジェクトの代入
//   name: 'John',
//   age: 24,
//   hobby: ['running', 'reading', 'programming'],
//   function: () => {
//     console.log("Hello World")
//   }
// };

// 1-2. 定数(const)は変更不可
// string = "Alex" // TypeError: Assignment to constant variable.

// 1-3. 変数(let)は再代入可能
// number = 35

// 1-4演算と論理
// 1 + 3 - 57
// const one = 1;
// const two = 2;
// one + two
// 2 * 3 /2
// let num = 1
// num += 1 // インクリメント for(;; i++)
// num = num + 1
// 1 < 2 // 論理値が返る boolean
// 1 === "1" //厳格等価演算子 
// 1 == "1"

// 2. 条件分岐
// const templature = 0

// if (templature > 25) {
//   console.log("暑い")
// } else {
//   console.log("暑くない")
// }
// if (条件文) {
//   条件文が正しい時の処理
// } else {
//   条件文が正しくない時の処理
// }

// 3. 繰り返し
// console.log("おはよう")
// const a = "あ"
// console.log(a)
// for (初期化式;条件式;更新式){}
// for (let i = 0; i < 10;i++) {
//   console.log(i, "iihara")
// }

// const arr = [1,2,3,4,5]
// for (let i = 0,len = arr.length; i < len;i++) {
//   console.log(arr[i])
  // console.log(len)
// }
// 4. 関数
// function sum(x, y) {
//   const z = x + y
//   return z
// }
// sum(3,4)
// sum(3,8)

// function sumArray(array) {
//   const length = array.length
//   let result = 0;
//   for (let i=0;i<length;i++) {
//     result = result + array[i]
//   }
//   return result
// }
// const testScore = [90, 80, 70, 88, 12,100]
// sumArray(testScore)
// 90 + 80 + 70 +88 + 12

// 5. 配列をランダムにシャッフルしよう
// 5-1 Math() //組み込みオブジェクト
// Math.floor(1.9)//ネイピア数
// Math.random() // 0〜1のランダムな数を生成

// 5-2 1〜10をランダムに出力する
// Math.floor(10 * Math.random()) + 1
// for (let i =0; i < 100; i++) {
//   console.log(Math.floor(10 * Math.random()) + 1)
// }

// 5-3 席替えプログラム
// const perticipants = ["Ito", "Kubo", "Shion", "Kojima","Sunguk", "Tomoya", "Koichi", "Yata"]
// const numberOfPerticipants = perticipants.length
// const randomIndex = Math.floor(numberOfPerticipants * Math.random())

// for (let i = 0; i < 100; i++) {
//   const randomIndex = Math.floor(perticipants.length * Math.random());
//   //問題のコード
//   [perticipants[i], perticipants[randomIndex]] = [perticipants[randomIndex], perticipants[i]]
// }
// console.log(perticipants)

const perticipants = ["Ito", "Kubo", "Shion", "Kojima","Sunguk", "Tomoya", "Koichi", "Yata"]
let shuffledArray = []
// for (;shuffledArray.length < perticipants.length;) {
//   const numberOfPerticipants = perticipants.length
//   const randomIndex = Math.floor(numberOfPerticipants * Math.random())
//   if (!shuffledArray.includes(perticipants[randomIndex])) {
//     shuffledArray.push(perticipants[randomIndex]);
//   } 
// }
// console.log(shuffledArray)

// while (shuffledArray.length < perticipants.length) {
//   const numberOfPerticipants = perticipants.length
//   const randomIndex = Math.floor(numberOfPerticipants * Math.random())
//   if (!shuffledArray.includes(perticipants[randomIndex])) {
//     shuffledArray.push(perticipants[randomIndex]);
//   }
// }
// console.log(shuffledArray)










