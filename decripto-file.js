const fs = require('fs')
const crypto = require('crypto')

const algo = 'aes-256-ctr'
const secret = '23f2e5915c973e4717ca205a40d33bba'

const read = fs.createReadStream('encriptado.pdf')
const write = fs.createWriteStream('decriptado.pdf')

const encrypt = (input, output) => {
    const cipher = crypto.createDecipher(algo, secret)
    input.pipe(cipher).pipe(output)

    console.log("Arquivo decriptado com sucesso")
}

encrypt(read, write)