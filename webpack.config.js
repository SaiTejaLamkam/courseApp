require('dotenv').config();
module.exports = (env = {}) => {
    if(env.production) {
        return require('./config/webpack.prod');
    } else {
        return require('./config/webpack.dev');
    }
}
