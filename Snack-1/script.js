const getPostTitle = id => {
    const promessa = new Promise((resolve, reject) => {
        fetch(`https://dummyjson.com/posts/${id}`)
            .then(res => res.json())
            .then(post => resolve(post.title))
            .catch(reject)
    })
    return promessa;
}



const getPost = id => {
    return new Promise((resolve, reject) => {
        fetch(`https://dummyjson.com/posts/${id}`)
            .then(res => res.json())
            .then(post => {
                fetch(` https://dummyjson.com/users/${post.userId}`)
                    .then(res => res.json())
                    .then(user => resolve({ ...post, user }))
                    .catch(reject)
            })
            .catch(reject)
    })

}

getPostTitle(1)
    .then(title => console.log('Titolo del post:', title))
    .catch(error => console.error(error));


getPost(1)
    .then(post => console.log('Post selezionato:', post))
    .catch(error => console.error(error)) 