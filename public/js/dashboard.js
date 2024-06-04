const addPost = document.getElementById('addPost')
const deletePostBtn = document.getElementById('postList')


addPost.addEventListener('submit', async (e) => {
    e.preventDefault()
    console.log(e)
    const title = document.getElementById('postTitle').value
    const content = document.getElementById('postContent').value
    console.log(title, content)
    if (!content || !title) {
        alert('Please fill out all fields')
        return
    }
    try {
        const creatPost = await fetch('/api/posts/', 
                {
                    method: 'post',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({title, content})
                }
            )
            addPost.reset()
            location.reload()
    } catch (err) {
        console.log(err)
    }
    
})

if (deletePostBtn) {
    deletePostBtn.addEventListener('click', async (e) => {
        if (e.target.classList[0] == 'deletePost'){
            console.log('success')
            const id = e.target.dataset.id
            try {
                const deletePost = await fetch(`/api/posts/${id}`, 
                    {
                        method: 'delete'
                    }
                )
                location.reload()
                console.log(deletePost)
            } catch (err) {
                console.log(err)
            }
        }
    })
}
