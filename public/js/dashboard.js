const createPostBtn = document.getElementById('createPost')
const deletePostBtn = document.getElementById('postList')


createPostBtn.addEventListener('click', async (e) => {

})


deletePostBtn.addEventListener('click', async (e) => {
    if (e.target.className == 'deletePost'){
        const id = e.target.parentElement.id
        console.log(id)
        try {
            const deletePost = await fetch(`/api/posts/${id}`, 
                {
                    method: 'delete'
                }
            )
            console.log(deletePost)
        } catch (err) {
            console.log(err)
        }
    }
})