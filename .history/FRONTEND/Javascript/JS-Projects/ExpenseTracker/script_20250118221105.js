document.addEventListener('DOMContentLoaded',()=>{
    const expenseForm= document.getElementById("expense-form");
    const expenseName=document.getElementById("expense-name");
    const expenseList=document.getElementById("expense-list");
    const totalAmountDisplay= document.getElementById("total-amount");
    const expenseAmount=document.getElementById("expense-amount");
    
    let expenses=[];
    let totalAmount= calculateTotal()

//adding amounts
    expenseForm.addEventListener('submit',(e)=>{
        e.preventDefault()
    })


    function calculateTotal(){

    }

})