window.onload = OnWindowLoad;

async function OnWindowLoad() {

    var findRepositoriesForm = document.getElementById("findRepositoriesForm");
    findRepositoriesForm.onsubmit = () => {
        event.preventDefault();
        FetchRepositories;
    };

    var findRepositoriesButton = document.getElementById("findRepositoriesButton");
    findRepositoriesButton.onclick = FetchRepositories;
}

async function FetchRepositories() {

    HideError();
    EmptyRepositoriesList();

    var githubUserNameElement = document.getElementById("githubUserName");

    var ownerName = githubUserNameElement.value;

    const userExists = await UserExists(ownerName);

    if (userExists == undefined) {
        HideRepositoriesList();
        ShowError("Connection error");
        return;
    }

    if (userExists == false) {
        HideRepositoriesList();
        ShowError("The user doesn't exist");
        throw "The user doesn't exist";
    }
    
    const repositoriesCount = await GetRepositoriesCount(ownerName);

    if (repositoriesCount <= 0) {
        HideRepositoriesList();
        ShowError("The user doesn't own any repositories");
        return;
    }

    const repositories = [];

    for (let i = 0; i < repositoriesCount; i++) {
        
        if (i % 10 == 0) {
            let page = Math.trunc(i / 10) + 1;
            let newPortion = await GetRepositories(ownerName, 10, page);
            newPortion.map(repository => repositories.push(repository));
            newPortion.map(repository => AddToRepositoriesList(repository));
            console.log(i);
        }
    }
}

//

function ShowError(errorMessage) {

    var errorMessageElement = document.getElementById("errorMessage");
    errorMessageElement.innerHTML = "";

    var innerElement = document.createElement("p");
    innerElement.innerHTML = errorMessage;
    errorMessageElement.appendChild(innerElement);

    errorMessageElement.hidden = false;
}

function HideError() {
    var errorMessageElement = document.getElementById("errorMessage");
    errorMessageElement.hidden = true;
}

function ShowRepositoriesList() {
    document.getElementById("repositoriesContainer").hidden = false;
}

function HideRepositoriesList() {
    document.getElementById("repositoriesContainer").hidden = true;
}

function EmptyRepositoriesList() {
    let containerElement = document.getElementById("repositoriesList");
    containerElement.innerHTML = "";
}

function AddToRepositoriesList(repository) {

    let containerElement = document.getElementById("repositoriesList");

    let itemElement = CreateElementPrototype(repository);

    containerElement.appendChild(itemElement);

    ShowRepositoriesList();
}

function CreateElementPrototype(repository) {
    var element = document.createElement("div");
    element.innerHTML = `<p>[${repository.id}] <b>${repository.name}</b>: <a href="${repository.url}">${repository.url}</a></p>`;
    return element;
}

//

async function GetRepositories(ownerName, countOnPage, page) {

    const url = `https://api.github.com/users/${ownerName}/repos`;
    const params = `?per_page=${countOnPage}&page=${page}`;

    const response = await fetch(`${url}${params}`);
    const data = await response.json();

    const repositories = data.map(r => {
        return {
            id: r.id,
            name: r.name,
            url: r.html_url
        };
    });

    return repositories;
}

async function GetRepositoriesCount(ownerName) {

    const url = `https://api.github.com/users/${ownerName}`;

    try {

        let response = await fetch(url);
        var data = await response.json();

    } catch {
        return;
    }

    return data.public_repos;
}

async function UserExists(ownerName) {

    const url = `https://api.github.com/users/${ownerName}`;

    try {

        let response = await fetch(url);

        if (!response.ok) {
            return undefined;
        }

        let userData = await response.json();

        console.log(userData);

        if (userData.type != "User") {
            throw "Not a user";
        }

        return true;

    } catch {
        // intentionally
    }

    return false;
}