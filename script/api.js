const url = "https://randomuser.me/api/?results=1"
const catsaver = document.getElementById("catsaver")

fetch(url)
    .then(function(response) { return response.json() })
    .then(function(data){

        let users = data.results;

        users.map(function(user)
        {
            console.log(user)

            let card = document.createElement("div")
            card.setAttribute("class", "card")

            let picture = document.createElement("img")
            picture.src = user.picture.large 

            let name = document.createElement("p")
            name.innerHTML = user.name.first + " " + user.name.last
            
            card.appendChild(picture)
            card.appendChild(name)
            catsaver.appendChild(card)
        })
    })