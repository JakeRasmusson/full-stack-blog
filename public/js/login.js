const loginForm = document.getElementById('loginForm')
const signUpForm = document.getElementById('signUpForm')



loginForm.addEventListener('submit', async (e) => {
    e.preventDefault()
    const username = document.getElementById('username').value
    const password = document.getElementById('password').value
    if(!username || !password) {
        alert('Please fill out the required fields') 
        return } 
        try {
            const userSignIn = await fetch('/api/user/login', 
                {
                    method: 'post',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({username, password})
                }
            )
            console.log(userSignIn)
        } catch (err) {
            console.log(err)
        }
        loginForm.reset()
        location.reload()
})


signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault()
    const username = document.getElementById('signup-username').value
    const password = document.getElementById('signup-password').value
    const email = document.getElementById('signup-email').value
    console.log(username, password, email)
    if(!username || !password) {
        alert('Please fill out the required fields') 
        return } 
    try {
        const userCreate = await fetch('/api/user/', 
            {
                method: 'post',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({username, password, email})
            }
        )
    } catch (err) {
        console.log(err)
    }
    signUpForm.reset()
    location.reload()
})