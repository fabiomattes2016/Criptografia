const crypto = require('crypto')
const secret = '23f2e5915c973e4717ca205a40d33bba'

texto = `Lorem ipsum eleifend hendrerit semper pellentesque metus sem aliquam,pharetra donec ligula nullam consectetur dolor non cubilia, etiam commodo justo conubia cursus magna dui. tempor eleifend nullam sociosqu magna vehicula viverra cras, habitasse inceptos faucibus curabitur at urna, sodales commodo ullamcorper faucibus suspendisse himenaeos. nec integer cubilia ut sem dolor cursus per velit, pellentesque donec eget lobortis nam morbi curabitur ultricies class, aenean euismod molestie lacinia urna hac commodo. fringilla taciti donec nisi torquent hac rhoncus nisi aliquet sollicitudin adipiscing ut, eleifend primis quisque justo aptent dictum tristique urna fringilla curabitur.`

const encrypt = value => {
    const iv = Buffer.from(crypto.randomBytes(16))
    const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(secret), iv)
    let encrypted = cipher.update(value)
    encrypted = Buffer.concat([encrypted, cipher.final()])

    return `${iv.toString('hex')}:${encrypted.toString('hex')}`
}

console.log(encrypt(texto))