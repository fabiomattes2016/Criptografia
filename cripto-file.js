const fs = require('fs')
const crypto = require('crypto')

const algo = 'aes-256-ctr'
const secret = '23f2e5915c973e4717ca205a40d33bba'

const read = fs.createReadStream('arquivo.pdf')
const write = fs.createWriteStream('encriptado.pdf')

const cipher = crypto.createCipher(algo, secret)

read.pipe(cipher).pipe(write)