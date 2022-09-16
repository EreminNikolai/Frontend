async function ExistsUserAsync(userName){
  try {

      let response = await fetch(`https://api.github.com/users/${userName}`);

      if (!response.ok) {
          return undefined;
      }
      let data = await response.json();
      console.log(data);

      return true;

  } catch(ex) {
      alert(`Ошибка: ${ex}`)
  }

  return false;

}

async function UseAsyncAwait()
{
  let listProjects = document.getElementById("listProjects");
  listProjects.value = "";

  var userName = prompt("Введите имя пользователя:","EreminNikolai");

  const userExists = await ExistsUserAsync(userName);
  
  if (userExists == undefined) {
    alert("Нет доступа")
    return;
  }

  if (userExists == false) {
      alert(`Пользователь ${userName} не найден`);
      return;
  }

  let repos = await GetRepositoriesAsync(userName);
  console.log(repos);
  let result = repos.reduce((res, item) => `${res} ${item.id} ${item.name} \n`, "");
  listProjects.value = result;  
}

async function GetRepositoriesAsync(ownerName) {

  const response = await fetch(`https://api.github.com/users/${ownerName}/repos`);
  const data = await response.json();

  const repos = data.map(i => {
      return {
          id: i.id,
          name: i.name,
      };
  });

  return repos;
}



