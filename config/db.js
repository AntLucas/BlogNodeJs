if(process.env.NODE_ENV == "production"){
  module.exports = {mongoURI: "mongodb+srv://<user>:<password>@cluster0-vss7n.mongodb.net/test?retryWrites=true&w=majority"}
}
else{
  module.exports = {mongoURI: "mongodb://localhost/blogapp"}
}
