const commentForm = document.getElementById('addComment')


if (commentForm) {
    commentForm.addEventListener('submit', async (e) => {
        e.preventDefault()
        const content = document.getElementById('commentContent').value
        if (!content) {
            alert('Please fill out the required content field')
            return
        }
        try {
            const createComment = await fetch('/api/comments/', 
                {
                    method: 'post',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({content, user})
                }
            )
        } catch (err) {
            console.log(err)
            
        }
        commentForm.reset()
        location.reload()
    })


}