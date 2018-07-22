// *===  基本コード (コマンドライン：$tsc hello.ts でjsファイル生成) ===*
    // class MyClass{
    //   constructor(public title:string, public message:string){}
    //     print(){
    //       return "<h1>" + this.title + "</h1>" +
    //         "<p>" + this.message + "</p>";
    //     }
    // };
    //
    // var msg:MyClass = new MyClass("Hello","this is TypeScript sample!");
    //
    // document.write(msg.print());

// *===  varを使ったコード ===*
    // var price:number = 12300;
    // var tax:number = 0.08;
    //
    // var res:number = price * (1.0 + tax);
    // var msg:string = price + '円の税込金額は、' + res + '円です。';
    //
    // document.write('<h1>Sample</h1>');
    // document.write(msg);

// *===  let を使ったコード ===*
    // let arr:number[] = [123,456,789];
    // let total:number = 0;
    // for(let i = 0; i < arr.length; i++){
    //   total += arr[i];
    // }
    // document.write('<h1>Array</h1>');
    // document.write('<p>total:' + total + '</p>');

// *===  エイリアス(型名に別名を入れる)/　enum / tuple を使ったコード ===*
// *===  エイリアス：type名をカスタマイズするもの ===*　
// *===  enum： ===*　
// *===  tuple: カスタマイズしたフォーマット（配列） ===*　

    // enum
    enum gender { male , female };
    //エイリアス
    type myname = string;
    type mail = string;
    type age = number;

    //tuple
    let person:[myname,mail,gender,age];
    person = ['taro','taro@yamada' , gender.male,23];

    document.write('<h1>Tuple</h1>');
    document.write('<p>' + person +'</p>');

    // *===  tupleの特徴を使ったコード ===*
    type Kid = [myname,mail,gender,age];
    let data:Kid[] = []
    data.push(['taro','taro@yamada',gender.male,23]);
    data.push(['kaori','kaori@yamada',gender.female,25]);
    data.push(['minami','minami@yamada',gender.female,35]);

    document.write('<h1>Tuple</h1>');
    document.write('<p>'+ data[0] + '</p>');
    document.write('<p>'+ data[1] + '</p>');
    document.write('<p>'+ data[2] + '</p>');
