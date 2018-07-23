//** class の基本形　**//
// var 変数 : クラス = new  クラス ( 引数 );
//private : クラス内からのみアクセス可能
//public : どこからでもアクセス可能
//protected : 基本クラス内からのみアクセス可能。継承を利用した場合は、サブクラスからもアクセス可能。

class Person{
  public name:string;
  // protected age:number;
  public age:number;

  constructor(n:string , y:number){
    this.name = n;
    this.age = y;
  }

  print():string{
    let msg:string = '<p>My name is ' + this.name +
    '. i am ' + this.age + 'years old.</p>'
    return msg;
  }
}

class Student extends Person {
  public grade:number;

  constructor(n:string,y:number,g:number){
    super(n,y);
    this.grade = g;
  }

  print():string{
    let msg:string = '<p>私は、' + this.name + 'です。' +
      this.age +'歳です。現在、' + this.grade + '年生です。</p>';
    return msg;
  }
}

function doClick():void{
  let msg:Element = document.querySelector('#msg');
  let val:string = document.querySelector('#text1').value;

  let arr:string[] = val.split(',');
  if (arr.length == 2){
    let obj:Person = new Person(arr[0],parseInt(arr[1]));
    msg.innerHTML = obj.print();
  }
  if(arr.length == 3){
    let obj:Student = new Student(arr[0],parseInt(arr[1]),parseInt(arr[2]));
    msg.innerHTML = obj.print();
  }
}
