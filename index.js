// Add your code here
document.getElementById('user-form').addEventListener('submit', (event) => {
  event.preventDefault();
  console.log(event.target.username.value);
  console.log(event.target.email.value);
  submitData(event.target.username.value, event.target.email.value)
});

function submitData(name, email) {
  const userObject = { 
    name: name, 
    email: email
  }
  const configurationObject = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(userObject)
  };
  return fetch("http://localhost:3000/users", configurationObject)
    .then((response) => response.json())
    .then((userData) => {
      console.log(userData)
      const body = document.getElementById('main');
      const h3 = document.createElement('h3');
      h3.innerHTML = `Id: ${userData.id}`;

      body.appendChild(h3);
    })
    .catch(() => {
      const p = document.createElement('p');
      p.innerHTML = "Unauthorized Access";

      document.body.appendChild(p);
    });
}

//submitData();