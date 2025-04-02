const lanciaDado = () => {
    return new Promise((resolve, reject) => {
        console.log('Estrazione in corso...')
        setTimeout(() => {
            if (Math.random() > 0.2) {
                const risultato = Math.floor(Math.random() * 6) + 1;
                resolve(risultato)
            } else {
                reject('Il dado è incastrato, per favore riprova')
            }
        }, 3000)
    })
}

lanciaDado()
    .then(risultato => console.log('Il dado ha estratto il numero', risultato))
    .catch(error => console.error(error))