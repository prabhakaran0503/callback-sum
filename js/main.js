let a,b,c
function operation(num1,num2,Sum_pass_this){
    let ans=num1+num2
    Sum_pass_this(ans)
} 
operation(2,3,sum=>{
    a=sum
    console.log(a);
    operation(a,5,sum=>{
        b=sum
        console.log(b);
        operation(b,8,sum=>{
            c=sum
            console.log(c);
        })
    })
})
    
