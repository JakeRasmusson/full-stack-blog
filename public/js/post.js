const commentForm = document.getElementById('createComment')

commentForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const content = document.getElementById('commentContent').value
    if (!content) {
        alert('Please fill out the required content field')
        return
    }
    console.log(e)
})