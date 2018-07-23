// ** 関数の定義
// function 関数名( 変数 : 型 ,....) : 戻り値の型{
//   ......
// }
// function calc(price:number ,tax:number):number{
//   return Math.floor(price * (1.0 + tax));
// }
//
// function doClick():void{
//   let text1:HTMLInputElement = document.querySelector('#text1');
//   let msg:Element = document.querySelector('#msg');
//   msg.innerHTML = calc(text1.value , 0.08) + '円';
// }
// ** オプション引数 （引数名の後に "？"）**
// 引数が存在するときは、その値を、ないときは固定のものを使う。存在しない場合その値は、undefinedとなる。
// function calc(price:number , tax?:number):number{
//   let tx = 0;
//   if (tax){
//     tx = tax;
//   }else{
//     tx = 0.08
//   }
//   return Math.floor(price * (1.0 + tx ));
// }
//
// function doClick():void{
//   let text1:HTMLInputElement = document.querySelector('#text1');
//   let msg:Element = document.querySelector('#msg');
//   msg.innerHTML = calc(text1.value) + '円';
// }
// ** オーバーライド(override)　関数 **
// 関数に型の違う引数を入れたい場合に使う手法
// function convert(item:number):string;
// function convert(item:string):string;
// function convert(item:boolean):string;
//
// function convert(item:any):string{
//   switch (typeof item){
//     case 'number':
//       return Math.floot(item).toString();
//     case 'string':
//       return item.toUpperCase();
//     case 'boolean':
//       return item ? 'yes' : 'no';
//   }
// }
//
// function doClick():void{
//   let val:string = 'hello';  //試すときここに色々入れる。
//   let msg:Element = document.querySelector('#msg');
//   msg.innerHTML = convert(val);
// }
// ** 総称型（Generics） について **
// オーバーライドとにていつが総称型は型そのものをパラメーター化し（ここでは " T "）、後から特定して呼び出せるようにする手法
// function convert<T>(item:T):string{
//   switch (typeof item){
//     case 'number':
//     return Math.floor(item);
//     case 'string':
//       return item.toUpperCase();
//     case 'boolean':
//       return item ? 'yes' : 'no';
//     default:
//       return 'any';
//   }
// }
//
// function doClick():void{
//   let a:number = convert<number>(1.23);
//   let b:stirng = convert<string>('hello');
//   let c:boolean = convert<boolean>(true);
//   let msg:Element = document.querySelector('#msg');
//   msg.innerHTML = convert(b);
// }
//** 可変長引数　**//
//java でいう array list　のこと。
// function total(...item:number[]):number{
//   let re:number = 0;
//   for(let i:number = 0; i < item.length; i++){
//     re += item[i];
//   }
//   return re;
// }
//
// function doClick():void{
//   let msg:Element = document.querySelector('#msg');
//   msg.innerHTML = total(1,2,3,4,5); //試すときここに色々入れる。total(1) , total(1,2) , total(1,2,3)という具合に。
// }
//** アロー関数　**//
// ( 引数の指定 ) => 実行する処理;
//　例えば『引数の値を2倍して返す』は
// (n:number)=> n * 2
// これを型として表すと
// (number) => number
// ( 引数の型 ) => （　戻り値の型　）
// この型の変数を宣言して関数を代入すると
// let funcA:(number) => number = (n:number) => n * 2 ;
// 上の記述はつまり　変数名:funcA ,型(number) => number という 変数に値 (n:number) => n * 2 を代入する。という事
function print(n, f) {
    var re = f(n);
    return '<p>結果：' + re + '</p>';
}
function doClick() {
    var val = document.querySelector('#text1').value * 1;
    var msg = document.querySelector('#msg');
    var a = function (n) { return n * n; };
    var b = function (n) {
        var total = 0;
        for (var i = 1; i <= n; i++) {
            total += i;
        }
        return total;
    };
    msg.innerHTML = print(val, b);
}
