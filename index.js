console.log('Hello!')

// initializes html elements
const userContainer = document.querySelector('#user-info')
const loginForm = document.querySelector('#login-form')
const registerForm = document.querySelector('#register-form')

const baseURL = `http://localhost:4004/api`

// runs login function on the backend
const login = body => axios.post(`${baseURL}/login`, body).then( res => {
  createUserCard(res.data)
}).catch(err => {
  console.log(err)
  alert('Uh oh. Your request did not work.')
})

// funs register functions on the front end
const register = body => axios.post(`${baseURL}/register`, body).then(res => {
  createUserCard(res.data)
}).catch(err => {
  console.log(err)
  alert('Uh oh. Your request did not work.')
})

// front end manipulation
function loginSubmitHandler(e) {
    e.preventDefault()

    // sets username and password to the input fields
    let username = document.querySelector('#login-username')
    let password = document.querySelector('#login-password')

    // saves username and password to local storage
    let bodyObj = {
        username: username.value,
        password: password.value
    }
    login(bodyObj)

    // clears username and password from displayed input fields
    username.value = ''
    password.value = ''
}

function registerSubmitHandler(e) {
  e.preventDefault()

  // Sets data to the input fields
  let username = document.querySelector('#register-username')
  let email = document.querySelector('#register-email')
  let firstName = document.querySelector('#register-firstName')
  let lastName = document.querySelector('#register-lastName')
  let password = document.querySelector('#register-password')
  let password2 = document.querySelector('#register-password-2')

  // checks if passwords match
  if (password.value !== password2.value) {
    alert("Your passwords need to match.")
    return
  }
  // saves data to local storage
  let bodyObj = {
      username: username.value,
      email: email.value,
      firstName: firstName.value,
      lastName: lastName.value,
      password: password.value
  }
  // runs register function with bodyObj
  register(bodyObj)

  // clears input fields
  username.value = ''
  email.value = ''
  firstName.value = ''
  lastName.value = ''
  password.value = ''
  password2.value = ''
}

// creates a user card
function createUserCard(data) {

    // makes a div element for the user card
    userContainer.innerHTML = ''
    const userCard = document.createElement('div')
    userCard.classList.add('user-card')

    // adds user data to user card
    userCard.innerHTML = `<p class="username">Username: ${data.username}</p>
    <p class="email">Email: ${data.email}</p>
    <p class="first-name">First Name: ${data.firstName}</p>
    <p class="last-name">Last Name: ${data.lastName}</p>
    `
    // appends user card to user container
    userContainer.appendChild(userCard)
}

// event listeners
loginForm.addEventListener('submit', loginSubmitHandler)
registerForm.addEventListener('submit', registerSubmitHandler)