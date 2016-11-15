import api from 'src/api'
import fb from 'src/api/firebase'
const db = fb.database()

function testAsync(asyncFn){
    return function(done){
        asyncFn().then(()=>done(),err=>done(err));
    };
}

describe("Api",function(){
  this.timeout(5000);
    describe("register",() => {
        let user = {
            name:"test",
            email:`${Math.random()}@test.com`,
            password: "123456"
        };
        it("can register user",function(done){
            api.register(user,function(err){
                if(err)
                  return done(err);
                done();
            })
        });

        it("cannot register user if it is already exist",function(done){
            api.register(user,(err)=>{
              if(!err)
                return done(new Error("expect err but no err"));
              done();
            })
        });

        it("can login user", function(done){
          api.login(user, (err)=>{
            if(err)
              return done(err);
            done();
          })
        });
    });

    describe("get data from server", function(){
      it('get all events', function(done){
        api.getAllEvents((events, err)=>{
          if(err)
            return done(err);
          done();
        });
      });
      it('get team list from server', function(done){
        api.getTeamsFromEvent("test", (val, err)=>{
          if(err)
            return done(err);
          done();
        });
      });
      it('load event', function(){
        api.loadEvent("title");
      })
      it('update event', function(){
        api.updateTeam("try", {"test":"test"});
      })
      it("check event exist", function(done){
        api.eventExist("test").then(done);
      })
      it('createEvent', function(done){
        api.createEvent("test").then(()=>done(), done);
      });
    })
});
