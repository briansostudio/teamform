import api from 'src/api'
import fb from 'src/api/firebase'
const db = fb.database()

function testAsync(asyncFn){
    return function(done){
        asyncFn().then(()=>done(),err=>done(err));
    };
}

describe("Api",()=>{
    describe.skip("register",() => {
        let user = {
            name:"test",
            email:`${Math.random()}@test.com`,
            password: "123456"
        };
        it("can register user",function(done){
            this.timeout(5000);
            api.register(user,function(err){
                if(err) done(err);
                db.ref('users/'+user.uid).once("value",(snapshot)=>{
                    console.log("SNAPSHOT",snapshot);
                    expect(snapshot.val().name).equal("test");
                    done();
                },done);
            })
        });

        it("cannot register user if it is already exist",()=>{

        });
    });
});