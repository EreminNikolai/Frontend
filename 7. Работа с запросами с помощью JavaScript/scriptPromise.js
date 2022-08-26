function UsePromise()
{
  fetch(gitHubUrl)
  .then(response => response.json())
  .then(commits => alert(commits[0].author.login));
  
}


function ExistsUser(userName){

    return fetch(`https://api.github.com/users/${userName}`)
        .then(function(response){
            if (!response.ok) {
                throw `Пользователь ${userName} не найден.`;
            }
            return response.json();
        })
        .then(r=>{
            console.log(r);
            return true;
        })        
        .catch(c=>{
            console.log(c);
            return false;
        });
  }
  
  function UsePromise()
  {
    let listProjects = document.getElementById("listProjects");
    listProjects.value = "";
  
    var userName = prompt("Введите имя пользователя:", "EreminNikolai");
  
    const userExists = ExistsUser(userName);
    
    userExists
        .then(function(result){
            if (!result) {
                alert(`Пользователь ${userName} не найден`);
                return;
            };

            const response = fetch(`https://api.github.com/users/${userName}/repos`)
                .then(response => response.json())
                .then(data => data.map(i => { return {id: i.id, name: i.name } } ));            
            return response;

        })
        .then(function(repos){
            console.log(repos);
            let result = repos.reduce((res, item) => `${res} ${item.id} ${item.name} \n`, "");
            listProjects.value = result;  
        });
  }