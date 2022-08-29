function ArrowFunction()
{
  function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  
  ask(
    "Вы согласны?",
    () => alert("Вы согласились."),
    () => alert("Вы отменили выполнение.")
  );
}

function DefaultParameter()
{
  function multiply(a, b = 1) {
    return a * b;
  }
  let v1 = prompt("Первое значение");
  let v2 = prompt("Второе значение");
  alert(`${v1} * ${v2}= ${ multiply(v1, v2) }`);
  alert(`${v1} * 1 = ${ multiply(v1)}`);
}

function SpreadRestOperator()
{
  function sumAll(...args) {
    let sum = 0;
  
    for (let arg of args) 
      sum += arg;
  
    return sum;
  }

  let sum = sumAll(+prompt("1 слагаемое"),+prompt("2 слагаемое"),+prompt("3 слагаемое"));
  alert(`Сумма = ${sum}`);

}

function KeywordSuper()
{
  let car = {
    carname: prompt("Название марки:"),
    present() {
      return 'Марка моей машины: ' + this.carname;
    }
  }
  
  let model = {
    __proto__: car,
    model: prompt("Название модели:"),
    show() {
      return super.present() + ', модель: ' + this.model;
    }
  }

    alert(model.show());
}

function UseYield(){
  function* generateSequence(start, end) {

    if(+start > +end){
      for (let i = start; i >= end; i--) {
        yield i;
      }
    }else{
      for (let i = start; i <= end; i++) {
        yield i;
      }
    }
    
  
  }

  let start = prompt("Начало последовательности:");
  let end = prompt("Конец последовательности:");

  let sequence = [...generateSequence(start,end)];
  alert(sequence);

}

function DestructuringObject(){
  let options = {
    title: "Menu",
    body: "Text",
    height: 200,
    width: 100
  };

  let {title, body, ...rest} = options;
  
  alert(`title: ${title}`);
  alert(`body: ${body}`);
  alert(`height:${rest.height}`);
  alert(`width:${rest.width}`);
}

function StringTemplate(){
  let options = {
    title: "Menu",
    body: "Text",
    height: 200,
    width: 100
  };

  let {title, body, ...rest} = options;
  let str = `title: ${title};\n body: ${body};\n height: ${rest.height};\n width: ${rest.width};`;

  alert(`Шаблон строки: ${String.raw`title: ${title};\n body: ${body};\n height: ${rest.height};\n width: ${rest.width};` }`);
  alert(`Полученная строка: ${str}`);
}

function ClassJS(){

  class Car {
    constructor(brand) {
      this.carname = brand;
    }
    present() {
      return 'Марка моей машины: ' + this.carname;
    }
  }
  
  class Model extends Car {
    constructor(brand, mod) {
      super(brand);
      this.model = mod;
    }
    show() {
      return this.present() + ', модель: ' + this.model;
    }
  }

  let brand = prompt("Название марки:");
  let model = prompt("Название модели:");
  
  mycar = new Model(brand, model);
  alert(mycar.show());
}
