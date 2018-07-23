var Person = /** @class */ (function () {
    function Person(n, y) {
        this.name = n;
        this.age = y;
    }
    Person.prototype.print = function () {
        var msg = '<p>My name is ' + this.name +
            '.I am ' + this.age + 'years old.';
        return msg;
    };
    return Person;
}());
var Student = /** @class */ (function () {
    function Student(n, y, g) {
        this.name = n;
        this.age = y;
        this.grade = g;
    }
    Student.prototype.print = function () {
        var msg = '<p>私は、' + this.name + 'です。' +
            this.age + '歳です。現在は、' + this.grade + '年生です。</p>';
        return msg;
    };
    return Student;
}());
var data = [];
data.push(new Person('Taro', 37));
data.push(new Student('Jone', 17, 3));
data.push(new Person('Cody', 45));
function doClick() {
    var msg = document.querySelector('#msg');
    var val = document.querySelector('#text1').value * 1;
    var obj = data[val];
    msg.innerHTML = obj.print();
}
