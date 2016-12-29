
/* 環境からAIP.aiアクセストークンを取得 */
const APIAI_CLIENT_ACCESS_TOKEN = process.env.APIAI_CLIENT_ACCESS_TOKEN;

var luis = request('./luis');

/**
 * Promise用のExecuterを生成
 * Excuter実行後のレスポンスとしてAIに登録してある文字列を返す
 * "お店に行きたい"と同じ意味の言葉はshopLocationという単語に変換されるように登録してある。
 * @param {type} message 
 * @returns {nm$_executer-factory.module.exports.executerByMessage.apiaiExecutor|
 * nm$_executer-factory.module.exports.executerByMessage.executor} 
 * AIが識別した文字列を返す,AIを使用しなかった場合はemptyを返す
 */
module.exports.executerByMessage = function(message) {
    switch(message.type) {
        case 'text':
            luis(message.text);
            var executor = function(resolve, reject) {
                resolve('empty');
            };
            return executor;
        default:
            var executor = function(resolve, reject) {
                resolve('empty');
            };
            return executor;
    }
};