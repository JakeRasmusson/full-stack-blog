const logoutButton = document.getElementById('logout')

if (logoutButton) {
    logoutButton.addEventListener('click', async (e) => {
        try {
            const logout = await fetch('/api/user/logout',
                {
                    method: 'post'
                }
            )
            
        } catch (err) {
            console.log(err)
        }
        location.reload()
    })
}