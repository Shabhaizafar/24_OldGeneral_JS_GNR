// // // base Class : 
// // // Empty Class
class BaseClass{};    // reference 

// Anonumous Class : 

var Father = (superclass) =>  class extends superclass{
    Fathername = "Ajaybhai";
}
var Mother = (superclass) =>  class extends superclass{
    Mothername = "Rina";
}

// helper class
class MixinBuilder{
    constructor(superclass){
        this.superclass = superclass;
    }
    with(...mixins){
        return mixins.reduce((mixin,next)=>  next(mixin),this.superclass);
    }
}

// path
const mix = (superclass) => new MixinBuilder(superclass);

class Child extends mix(BaseClass).with(Father,Mother){
    Childname = "Raj";
}

var c1 = new Child();
console.log(c1);






employee  < child 
    Raj

Father   < company 
    XyZ
Mother   < OwerData 
    sdfgh 

























// /////////////
// // some base class
// class BaseClass { }
// // SocialNetworkMixin
// const SocialNetwork = (superclass) => class extends superclass {
//     foo() {
//         console.log('foo');
//     }
// }
// // AdProviderMixin
// const AdProvider = (superclass) => class extends superclass {
//     bar() {
//         console.log('bar');
//     }
// }
// // Our helper class that will make things look better
// class MixinBuilder {
//     constructor(superclass) {
//         this.superclass = superclass;//emty class
//     }
//     with(...mixins) {
//         return mixins.reduce((c, mixin) => mixin(c), this.superclass);
//     }
// }
// // this will combine everything in one class
// //arrow 
// const mix = (superclass) => new MixinBuilder(superclass);

// class Facebook extends mix(BaseClass).with(SocialNetwork, AdProvider) {}
// const fb = new Facebook();
// fb.foo();
// fb.bar();