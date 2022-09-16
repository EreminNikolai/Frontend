function GetCurrentUrl()
{
  alert(location.href);
}

function PostBackGoogle(){
  location.href = "https://google.com";
}

function AddItemHistory(){
  let linkWebSite = prompt("Добавить ссылку на сайти");
  //window.history.pushState({foo: 'bar'}, linkWebSite, linkWebSite );

  const state = { 'page_id': 1, 'user_id': 5 };
  const title = '';
  const url = linkWebSite;

  history.pushState(null, document.title, url)
}

function StartLink()
{
  window.history.go(0);
}
function BackLink()
{
  window.history.back();
}

function ForwardLink()
{
  window.history.forward();
}

function LastLink()
{
  window.history.go(window.history.length - 1);
}

function UserAlert(){
  alert(prompt("Напиши что угодно."));
}

function SaveCookies(){
  let name = prompt("Введите свое имя");
  document.cookie = encodeURIComponent("name") + '=' + encodeURIComponent(name);
  let age = prompt("Введите свой возраст");
  document.cookie = encodeURIComponent("age") + '=' + encodeURIComponent(age);
  alert(document.cookie);
}

function SaveInLocalStorage(){
  localStorage.setItem('test1', prompt("Давайте что-то сохраним в LocalStorage"));
  localStorage.test2 = prompt("И еще раз запишем");

  let keys = Object.keys(localStorage);
  for(let key of keys) {
    alert(`${key}: ${localStorage.getItem(key)}`);
  }

  delete localStorage.test;
  delete localStorage.test2;
}

function SaveInSessionStorage(){
  sessionStorage.setItem('test1', prompt("Давайте что-то сохраним в LocalStorage"));
  sessionStorage.test2 = prompt("И еще раз запишем");

  let keys = Object.keys(sessionStorage);
  for(let key of keys) {
    alert(`${key}: ${sessionStorage.getItem(key)}`);
  }

  delete sessionStorage.test;
  delete sessionStorage.test2;
}



