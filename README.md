# JavaScriptLibrary
# 基本
javascript library を使ったプロジェクトを作る
$ npm init
上記によりpackage.json(プロジェクトの情報)ファイルが生成される。

#jQuery
jQueryをプロジェクトにインストールする。
$ npm install jquery
上記によりpackage.jsonファイルに jqueryが情報が記述される。

#typescript
typescript はtsファイルをjsコンパイルしてブラウザで起動できるようにしている。
js ファイル生成。
$ tsc tsファイル名

パソコンにtypescript がインストールされていない場合、npmを使ってインストールする。
$ npm install -g typescript


*basic
var : 何度でも宣言できる
let :1度だけ宣言できる
    OK
    var a:any = 1;
    var a:any = "hello";

    NG
    let a:any = 1;
    let a:any = "hello";
    
    OK
    let a:any = 1;
         a:any = "hello";
     
const:値の変更ができない

配列
var 変数　: 型[] = [];
例）
var arr : number[] = [123,456,789]

エイリアス
type  名前　＝　型名
例）
type myname = string

let a:myname

enum
あらかじめ用意されたいくつかの値のいずれかのみ代入できる型。用意されたもの以外の値は一切入れられない。
enum 型名 {値1 , 値2 , ....}

tuple
カスタマイズしたフォーマット（配列）

*functions
基本
function 関数名（ 変数 : 型 , .... ） : 戻り値の型{
        処理
}

オプション引数 （引数名の後に "？"）
オーバーライド(override)
総称型（Generics）
アロー関数
    ( 引数の指定 ) => 実行する処理
    例1）
    ( n : number ) => n * 2
    例2）
    let funcA : ( number ) => number = ( n : number ) => n * 2 ;
    変数名:funcA ,型(number) => number という 変数に値 (n:number) => n * 2 を代入。という事
    

