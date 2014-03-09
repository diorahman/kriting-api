var request = require ("supertest");
var api = require ("../..");
var koa = require ("koa");

// /api/1/ is the default root 
describe ("GET /api/1/papers", function (){

  it ("should respond with papers", function (done) {

    var app = koa();
    app.use (api().mount);

    request (app.listen())
    .get ("/api/1/papers")
    .end (function (err, res){
      if (err) {
        return done (err);
      }
      
      res.body.length.should.eql(2);

      if (res.body.length > 0) {
        Object.keys(res.body[0]).should.eql(["id","body","title"]);  
      }
      
      done();

    });
  });

})