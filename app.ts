const cl=console.log;

const num1=document.getElementById("num1") as HTMLInputElement ;
const num2=document.getElementById("num2") as HTMLInputElement ;
const addbtn=document.getElementById("addbtn") as HTMLElement ;

const add=(n1:number, n2:number):number=>{
       return n1+n2;
}


addbtn.addEventListener("click",function(){
      cl(add(+num1.value ,+num2.value))
})



