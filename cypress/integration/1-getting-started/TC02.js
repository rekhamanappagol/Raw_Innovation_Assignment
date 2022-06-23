
/// <reference types= "cypress"/>
describe('Verify the given string is palindrome and find the number which are divisible by 4 and 6',function(){

it('verify the given string is palindrome or not (radar) ',function(){

        cy.check_palindrome('radar').then(function(result){
            expect(result).to.be.true
    })
});
it('verify the given number with speacial character is palindrome or not (12221) ',function(){

    cy.check_palindrome('12221').then(function(result){
        expect(result).to.be.true
    })
});
it('verify the given number with speacial character is palindrome or not (87654!) ',function(){

    cy.check_palindrome('87654!').then(function(result){
        expect(result).to.be.false
    })
});
it('verify the given string with speacial character is palindrome or not (string!#$%) ',function(){

    cy.check_palindrome('string!#$%').then(function(result){
        expect(result).to.be.false
    })
});
it('verify the given special character is palindrome or not (@$@@#^$$)',function(){

    cy.check_palindrome('@$@@#^$$').then(function(result){
        expect(result).to.be.false
    })
});
it('Verify the number which is divisible by 4 and 6 with array [1,2,3,4,40,34,6,7,16]',()=>{
    var array =[1,2,3,4,40,34,6,7,16]
    cy.multiple_Four_Six(array).then((num)=>{
        expect(num).to.include.members([4,40,6,16])
    });
})
it('Verify the number which is divisible by 4 and 6 with array [1,2,3,-1,0]',()=>{
    var array =[1,2,3,-1,0]
    cy.multiple_Four_Six(array).then((num)=>{
        //cy.log(num).to.be.string("0 can not be devided by zero")
        expect(num).to.be.string("0 can not be devided by zero")
    });
})
})