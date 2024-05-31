const loginForm = document.getElementById('loginForm')
const signUpForm = document.getElementById('signUpForm')



loginForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const username = document.getElementById('username').value
    const password = document.getElementById('password').value
    
})


signUpForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const username = document.getElementById('signup_username').value
    const password = document.getElementById('signup-password').value
})