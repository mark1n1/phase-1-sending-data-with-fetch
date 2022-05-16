// Add your code here
function submitData() {
  const configurationObject = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({
      name: 'Steve',
      email: 'steve@steve.com'
    })
  };
  return fetch("http://localhost:3000/users", configurationObject)
    .then((response) => response.json())
    .then((userData) => console.log(userData))
    .catch((error) => console.log(error.message));
}

submitData();