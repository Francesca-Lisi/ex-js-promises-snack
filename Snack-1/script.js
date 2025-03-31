const getPostTitle = id => {
    const promessa = new Promise((resolve, reject) => {
        fetch(`https://dummyjson.com/posts/${id}`)
            .then(res => res.json())
            .then(oggetto => resolve(oggetto))
            .catch(reject)
    })
    return promessa;
}

getPostTitle(1)
    .then(oggetto => console.log(oggetto.title))
    .catch(error => console.error(error))