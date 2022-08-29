import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

class TodoMyApp extends React.Component{
  constructor(props){
    super(props);
  }


  onclick1(e) {
    let listProjects = document.getElementById("listProjects");
    listProjects.value = "";

    var userName = prompt("Введите имя пользователя:","EreminNikolai");
  }



  render(){
    return(
      <div className="App">
        <header className="App-header">
          <h1>Итерация 7.</h1>
          <h2>Работа с запросами с помощью JavaScript.</h2>          
        </header>
        <input type="button" value="Выполни" onclick={i=>this.onclick1}></input>
          <h3>Результат</h3>
        <textarea id = "listProjects"></textarea>
      </div>
    );
  }
}

class Clock extends React.Component {
  constructor(props){
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick(){
    this.setState({
      date: new Date()
    });
  }

  render(){
    return(
      <div>
        <h1>Привет, мир!</h1>
        <h2>Сейчас {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

// function Clock(props) {
//   return (
//     <div>
//       <h1>Привет, мир!</h1>
//       <h2>Сейчас {props.date.toLocaleTimeString()}.</h2>
//     </div>
//   );
// }

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // Эта привязка обязательна для работы `this` в колбэке.
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  deleteRow(){
    this.setState(state =>({
        isToggleOn: !state.isToggleOn
    }));
  }


  render() {
    return (
      // <button onClick={this.handleClick}>
      //   {this.state.isToggleOn ? 'Включено' : 'Выключено'}
      // </button>,
      <button onClick={(e) => this.deleteRow(e)}>
        Удалить строку
      </button>
      // <button onClick={this.deleteRow.bind(this, id)}>
      //   Удалить строку
      // </button>
    );
  }
}

function UserGreeting(props) {
  return <h1>С возвращением!</h1>;
}

function GuestGreeting(props) {
  return <h1>Войдите, пожалуйста.</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Войти
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Выйти
    </button>
  );
}

class LoginControl extends React.Component {
  constructor(props) {
    super(props);    
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>Здравствуйте!</h1>
      {unreadMessages.length > 0 && 
        <h2>
          У вас {unreadMessages.length} непрочитанных сообщений.
        </h2>
      }
    </div>
  );
}

const messages = ['React', 'Re: React', 'Re:Re: React'];



function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }

  return (
    <div className="warning">
      Предупреждение!
    </div>
  );
}

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showWarning: true};
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState(state => ({
      showWarning: !state.showWarning
    }));
  }

  render() {
    return (
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? 'Спрятать' : 'Показать'}
        </button>
      </div>
    );
  }
}

function NumberList(props){
  const numbers = props.numbers;
  const listItems = numbers.map((number)=>
   <li key={numbers.toString()}>{number*2}</li> 
  );
  return(
    <ul>{listItems}</ul>
  );
}
const numbers = [1,2,3,4,5,6];

function ListItem(props) {
  // Правильно! Не нужно определять здесь ключ:
  return <li>{props.value}</li>;
}

function NumberList2(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    // Правильно! Ключ нужно определять внутри массива:
    <ListItem key={number.toString()} value={number} />
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}

function Blog(props){
  const sidebar =(
    <ul>
      {props.posts.map((post)=>
        <li key={post.id}>
          {post.title}
        </li>
      )}
    </ul>
  );
  const content = props.posts.map((post)=>
    <div key={post.id}>
      <h3>{post.value}</h3>
      <p>{post.content}</p>
    </div>
  );
  return (
    <div>
      {sidebar}
      <hr/>
      {content}
    </div>
  );
}

const posts = [
  {id: 1, title: 'Привет, мир', content: 'Добро пожаловать в документацию React!'},
  {id: 2, title: 'Установка', content: 'React можно установить из npm.'}
];

const content = posts.map((post) =>
  <Post123
    key1={post.id}
    id1={post.id}
    title1={post.title} />
);

function Post123(props){
  props.title = props.title1;
  return(
    <div>

    </div>
  );
}


class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({value: event.target.value})
  }

  handleSubmit(event){
    alert('Отправленное имя: ' + this.state.value);
    event.preventDefault();
  }


  render() {
    return (
        //<form onSubmit={this.handleSubmit}>
        //  <lable>
        //    Имя:
        //    <input type="text" value={this.state.value} onChange={this.handleChange} />
        //  </lable>
        //  <input type="submit" value="Отправить"/>
        //</form>,
        <form onSubmit={this.handleSubmit}>
          <label>
            Имя:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
            Сочинение:
            <textarea value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Отправить" />
        </form>
    );
  }
}

class FlavorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'coconut'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event){
    alert('Ваш любимый вкус: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Выберите ваш любимый вкус:
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="grapefruit">Грейпфрут</option>
              <option value="lime">Лайм</option>
              <option value="coconut">Кокос</option>
              <option value="mango">Манго</option>
            </select>
          </label>
          <input type="submit" value="Отправить"/>
        </form>
    );
  }
}

class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event){
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
        <form>
          <label>
            Пойдут:
            <input
              name="isGoing"
              type="checkbox"
              checked={this.state.isGoing}
              onChange={this.handleInputChange} />
          </label>
          <br/>
          <label>
            Количество гостей:
            <input
              name="numberOfGuests"
              type="number"
              value={this.state.numberOfGuests}
              onChange={this.handleInputChange}
            />
          </label>
        </form>
    );
  }
}

function BoilingVerdict(props) {
  if(props.celsius >= 100){
    return <p>Вода закипит.</p>
  }
  return <p>Вода не закипит.</p>
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {temperature: ''};
  }

  handleChange(e) {
    this.setState({temperature: e.target.value});
  }

  render() {
    const temperature = this.state.temperature;
    return (
        <fieldset>
          <legend>Введите температуру в градусах Цельсия:</legend>
          <input
              value={temperature}
              onChange={this.handleChange} />
          <BoilingVerdict
              celsius={parseFloat(temperature)} />
        </fieldset>
    );
  }
}

const scaleNames ={
  c: 'Цельсия',
  f: 'Фвренгейта'
};

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {temperature: ''};
  }

  handleChange(e) {
    //Ранее было так: this.setState({temperature: e.target.value});
    this.props.onTemperatureChange(e.target.value);
  }

  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
        <fieldset>
          <legend>Введите температуру в градусах {scaleNames[scale]}:</legend>
          <input
              value={temperature}
              onChange={this.handleChange} />
        </fieldset>
    );
  }
}

class Calculator2 extends React.Component {
  constructor(props) {
    super(props);
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.state = {temperature: '', scale: 'c'};
  }

  handleCelsiusChange(temperature) {
    this.setState({scale: 'c', temperature});
  }

  handleFahrenheitChange(temperature) {
    this.setState({scale: 'f', temperature});
  }

  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
        <div>
          <TemperatureInput
              scale="c"
              temperature={celsius}
              onTemperatureChange={this.handleCelsiusChange} />
          <TemperatureInput
              scale="f"
              temperature={fahrenheit}
              onTemperatureChange={this.handleFahrenheitChange} />
          <BoilingVerdict
              celsius={parseFloat(celsius)} />
        </div>
    );
  }
}

function toCelsius(fahrenheit){
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius){
  return (celsius * 9 / 5) +32;
}

function tryConvert(temperature, convert){
  const input = parseFloat(temperature);
  if(Number.isNaN(input)){
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

function FancyBorder(props){
  return(
      <div className={'FancyBorder FancyBorder-' + props.color}>
        {props.children}
      </div>
  );
}

function WelcomeDialog() {
  return(
      <FancyBorder color="blue">
        <h1 className="Dialog-title">
          Добро пожаловать
        </h1>
        <p className="Dialog-message">
          Спасибо, что посетили наш космический корабль!
        </p>
      </FancyBorder>
  );
}

/////////////////////////////////////////////////////

function Contacts() {
  return <div className="Contacts" />;
}

function Chat() {
  return <div className="Chat" />;
}

function SplitPane(props) {
  return(
      <div className="SplitPane">
        <div className="SplitPane-left">
          {props.left}
        </div>
        <div className="SplitPane-right">
          {props.right}
        </div>
      </div>
  );
}

function App1() {
  return(
      <SplitPane left={
        <Contacts />
      }
      right={
        <Chat/>
      } />
  );
}

/////////////////////////////////////////////////////////

function Dialog(props) {
  return (
      <FancyBorder color="blue">
        <h1 className="Dialog-title">
          {props.title}
        </h1>
        <p className="Dialog-message">
          {props.message}
        </p>
        {props.children}
      </FancyBorder>
  );
}

class SignUpDialog extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.state = {login: ''};
  }

  render() {
    return (
        <Dialog title="Программа исследования Марса"
                message="Как к вам обращаться?">
          <input value={this.state.login}
                 onChange={this.handleChange} />
          <button onClick={this.handleSignUp}>
            Запишите меня!
          </button>
        </Dialog>
    );
  }

  handleChange(e) {
    this.setState({login: e.target.value});
  }

  handleSignUp() {
    alert(`Добро пожаловать на борт, ${this.state.login}!`);
  }
}

///////////////////////////////////


class ProductCategoryRow extends React.Component {
  render() {
    const category = this.props.category;
    return (
        <tr>
          <th colSpan="2">
            {category}
          </th>
        </tr>
    );
  }
}

class ProductRow extends React.Component {
  render() {
    const product = this.props.product;
    const name = product.stocked ?
        product.name :
        <span style={{color: 'red'}}>
        {product.name}
      </span>;

    return (
        <tr>
          <td>{name}</td>
          <td>{product.price}</td>
        </tr>
    );
  }
}

class ProductTable extends React.Component {
  render() {
    const filterText = this.props.filterText;
    const inStockOnly = this.props.inStockOnly;

    const rows = [];
    let lastCategory = null;

    this.props.products.forEach((product) => {
      if(product.name.indexOf(filterText) === -1){
        return;
      }
      if(inStockOnly && !product.stocked){
        return;
      }
      if (product.category !== lastCategory) {
        rows.push(
            <ProductCategoryRow
                category={product.category}
                key={product.category} />
        );
      }
      rows.push(
          <ProductRow
              product={product}
              key={product.name} />
      );
      lastCategory = product.category;
    });

    return (
        <table>
          <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
    );
  }
}

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);

  }

  handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value);
  }

  handleInStockChange(e) {
    this.props.onInStockChange(e.target.checked);
  }

  render() {
    return (
        <form>
          <input
              type="text"
              placeholder="Search..."
              value={this.props.filterText}
              onChange={this.handleFilterTextChange}
          />
          <p>
            <input
                type="checkbox"
                checked={this.props.inStockOnly}
                onChange={this.handleInStockChange}
            />
            {' '}
            Only show products in stock
          </p>
        </form>
    );
  }
}

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      inStockOnly: false
    };

    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }

  handleFilterTextChange(filterText) {
    this.setState({
      filterText: filterText
    });
  }

  handleInStockChange(inStockOnly) {
    this.setState({
      inStockOnly: inStockOnly
    })
  }

  render() {
    return (
        <div>
          <SearchBar
              filterText={this.state.filterText}
              inStockOnly={this.state.inStockOnly}
              onFilterTextChange={this.handleFilterTextChange}
              onInStockChange={this.handleInStockChange}
          />
          <ProductTable
              products={this.props.products}
              filterText={this.state.filterText}
              inStockOnly={this.state.inStockOnly}
          />
        </div>
    );
  }
}

const PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

////////////////////////////////////////////////////////


class OuterClickExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = {isOpen: false};
    this.toggleContainer = React.createRef();

    this.onClickHandler = this.onClickHandler.bind(this);
    this.onClickOutsideHandler = this.onClickOutsideHandler.bind(this);
  }

  componentDidMount() {
    window.addEventListener('click', this.onClickOutsideHandler);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.onClickOutsideHandler);
  }

  onClickHandler() {
    this.setState(currentState=>({
      isOpen: !currentState.isOpen
    }));
  }

  onClickOutsideHandler(event) {
    if (this.state.isOpen && !this.toggleContainer.current.contains(event.target)) {
      this.setState({ isOpen: false });
    }
  }

  render() {
    return (
        <div ref={this.toggleContainer}>
          <button onClick={this.onClickHandler}>Select an option</button>
          {this.state.isOpen && (
              <ul>
                <li>Option 1</li>
                <li>Option 2</li>
                <li>Option 3</li>
              </ul>
          )}
        </div>
    );
  }
}

ReactDOM.render(
    //<Clock />,
    //<Toggle />,
    //<Greeting isLoggedIn={true} />,
    //<LoginControl />,
    //<Mailbox unreadMessages={messages} />,
    //<Page/>,
    //<NumberList numbers={numbers}/>,
    //<NumberList2 numbers={numbers}/>,
    //<Blog posts={posts}/>,
    //<NameForm />
    // <FlavorForm/>,
    //<Reservation />,
    //<Calculator />,
    //<Calculator2 />,
    //<WelcomeDialog/>,
    //<App1/>,
    //<SignUpDialog/>,
    //<FilterableProductTable products={PRODUCTS}/>,
    <OuterClickExample/>,
    document.getElementById('root')
);

//setInterval(tick, 1000);


// ReactDOM.render(
//   // <TodoMyApp />,
//   //<Welcome name="Nick" test="TEST" />,
//   //element,
//   <MyApp />,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
