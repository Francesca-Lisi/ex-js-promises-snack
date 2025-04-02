const creaLanciaDado = () => {
    let ultimoRisultato = null;

    return function () {
        return new Promise((resolve, reject) => {
            console.log('Estrazione in corso...')
            setTimeout(() => {
                if (Math.random() > 0.2) {
                    const risultato = Math.floor(Math.random() * 6) + 1;
                    if (risultato === ultimoRisultato) {
                        console.log('Incredibile!')
                    }
                    ultimoRisultato = risultato
                    resolve(risultato)
                } else {
                    ultimoRisultato = null;
                    reject('Il dado è incastrato, per favore riprova')
                }
            }, 3000)
        })
    }

}


const estrazioneMemorizzata = creaLanciaDado()

estrazioneMemorizzata()
    .then(risultato => {
        console.log('Il dado ha estratto il numero', risultato)
        estrazioneMemorizzata()
            .then(risultato => console.log('Il dado ha estratto il numero', risultato))
            .catch(error => console.error(error))
    })
    .catch(error => console.error(error))