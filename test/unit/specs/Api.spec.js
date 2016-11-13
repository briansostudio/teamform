//import api from 'src/api'
//import fb from 'src/api/firebase'

function testAsync(asyncFn){
    return function(done){
        asyncFn().then(()=>done(),err=>done(err));
    };
}
function callback(cb, done){
    try{
        (cb())
    }catch(err){
        done(err);
    }
}


// describe("Api",()=>{
//     describe("register",() => {
//         let user = {
//             name:"test",
//             email:`${Math.random()}@test.com`,
//             password: "123456"
//         };
//         it("can register user",(done) => {

//             api.register(user,function(err){
//                 if(err) done(err);
                
//                 db.ref('users/'+user.uid).once(callback((snapshot)=>{
//                     expect(snapshot.value.name).equal("test");
//                 }));
//             })
//         });

//         it("cannot register user if it is already exist",()=>{

//         });
//     });
// });