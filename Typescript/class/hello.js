//** class の基本形　**//
// var 変数 : クラス = new  クラス ( 引数 );
//private : クラス内からのみアクセス可能
//public : どこからでもアクセス可能
//protected : 基本クラス内からのみアクセス可能。継承を利用した場合は、サブクラスからもアクセス可能。
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(n, y) {
        this.name = n;
        this.age = y;
    }
    Person.prototype.print = function () {
        var msg = '<p>My name is ' + this.name +
            '. i am ' + this.age + 'years old.</p>';
        return msg;
    };
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(n, y, g) {
        var _this = _super.call(this, n, y) || this;
        _this.grade = g;
        return _this;
    }
    Student.prototype.print = function () {
        var msg = '<p>私は、' + this.name + 'です。' +
            this.age + '歳です。現在、' + this.grade + '年生です。</p>';
        return msg;
    };
    return Student;
}(Person));
function doClick() {
    var msg = document.querySelector('#msg');
    var val = document.querySelector('#text1').value;
    var arr = val.split(',');
    if (arr.length == 2) {
        var obj = new Person(arr[0], parseInt(arr[1]));
        msg.innerHTML = obj.print();
    }
    if (arr.length == 3) {
        var obj = new Student(arr[0], parseInt(arr[1]), parseInt(arr[2]));
        msg.innerHTML = obj.print();
    }
}
