import { Context, it } from 'mocha';
import UserManager from './testdata/UserManager'
describe('Shoppers Tests',()=>{
    before(function(){
        this.user = UserManager().create();
    })
    describe('Login',()=>{
        it('userIsAbleToLoginWithValidCredentials',function(){
            console.log("test: check if login works")
        })
    })
    describe('Buy products',()=>{
        it('checkAddToCart',()=>{
            console.log("test: check if add to cart works")
        })
    })
    describe('Products Review',()=>{
        it('writeReview',()=>{
            console.log("test: check if user can write review")
        })
        describe('For Existing Reviews',()=>{
            before(function(){
                console.log("test data:create review for further test")
            })
            it('delete review',()=>{
                console.log("test: check if user can delete review")
            })
        })
    })
    after(function(){
        UserManager().delete(this.user);
    })
})