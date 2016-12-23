/* 
 * リクエストヘッダーの署名検証を行う
 */


var signatureValidation = function(signature, body) {
    var crypto = require('crypto');
    /* Heroku環境から秘密鍵を取得 */
    const LINE_CHANNEL_SECRET = process.env.LINE_CHANNEL_SECRET;
    return signature == crypto.createHmac('sha256', LINE_CHANNEL_SECRET).update(new Buffer(JSON.stringify(body), 'utf8')).digest('base64');
};

module.exports = signatureValidation;