const url = "https://randomuser.me/api/?results=1" // Detta är API för att generera slumpmässiga "Best cat saver of the day!" :)
const catsaver = document.getElementById("catsaver")

fetch(url)
    .then(function(response) { return response.json() })
    .then(function(data){

        let users = data.results;

        users.map(function(user) // Hämtar en bild av person + namn
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