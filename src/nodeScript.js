const NodeRSA = require('node-rsa');

function encryptAndDecrypt() {
    const key = new NodeRSA({ b: 512 });
    const text = 'Pakistan is planning an attack!';

    const encryptedPrivate = key.encryptPrivate(text, 'base64');
    const decryptedPublic = key.decryptPublic(encryptedPrivate, 'utf8');

    const encryptedPublic = key.encrypt(text, 'base64');
    const decryptedPrivate = key.decrypt(encryptedPublic, 'utf8');

    return {
        encryptedPrivate,
        decryptedPublic,
        encryptedPublic,
        decryptedPrivate,
    };
}

module.exports = encryptAndDecrypt;
