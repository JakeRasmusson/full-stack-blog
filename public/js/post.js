const commentForm = document.getElementById('addComment')


if (commentForm) {
    commentForm.addEventListener('submit', async (e) => {
        e.preventDefault()
        const content = document.getElementById('commentContent').value
        const post_id = document.getElementById('postId').value
        if (!content) {
            alert('Please fill out the required content field')
            return
        }
        console.log(post_id)
        try {
            const createComment = await fetch('/api/comments/', 
                {
                    method: 'post',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({content, post_id})
                }
            )
            commentForm.reset()
            location.reload()
        } catch (err) {
            console.log(err)
            
        }
        
    })


}