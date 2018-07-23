interface Man{
    name:string;
    age: number;

    print():string;
}

class Person implements Man{
    name:string;
    age:number;

    constructor(n:string, y:number){
        this.name = n;
        this.age = y;
    }

    print():string{
        let msg:string = '<p>My name is ' + this.name + 
        '.I am ' + this.age + 'years old.';
        return msg;
    }
}

class Student implements Man{
    public name:string;
    public age:number;
    public grade:number;

    constructor(n:string,y:number,g:number){
        this.name = n;
        this.age = y;
        this.grade = g;
    }

    print():string{
        let msg:string = '<p>私は、' + this.name　+ 'です。' +
        this.age + '歳です。現在は、' + this.grade + '年生です。</p>'
        return msg;
    }
}

var data:Man[] = [];
data.push(new Person('Taro',37));
data.push(new Student('Jone',17,3));
data.push(new Person('Cody',45));

function doClick():void{
    let msg:Element = document.querySelector('#msg');
    let val:number = document.querySelector('#text1').value * 1;

    let obj:Man = data[val];
    msg.innerHTML = obj.print();
}