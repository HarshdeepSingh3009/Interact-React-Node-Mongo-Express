const appHost = "192.168.56.1";
const appPort = 8000;
const env  = process.env
//TODO add mongodb url

export default {
    mongodbUri: 'mongodb://localhost:27017/test',
    port : env.PORT || appPort,
    host: env.HOST || appHost,
    get serverUrl(){
        return `http://${this.host}:${this.port}`;
    },
    user:{
        username: "harsh",
        password: "harsh123"
    }
};