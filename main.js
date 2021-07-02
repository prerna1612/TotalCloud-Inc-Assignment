const search_input = document.getElementById('search');




function fetchdata(){

fetch("https://reqres.in/api/users").then(response =>
    {
     return response.json();
    }).then(data=> 
        {
            console.log(data.data)
            const html = data.data
            .map(user =>{
                return `
                <div class="user">
                <p><img src="${user.avatar}" alt="${user.first_name}"/></p>
                <p> First Name : ${user.first_name}</p>
                <p> Last Name : ${user.last_name}</p>
                <p> Email : ${user.email}</p>
                </div>
                `;
            })
            .join("");
            document.querySelector("#charactersList").insertAdjacentHTML("afterbegin", html);


             
        })
      
    }
fetchdata();
