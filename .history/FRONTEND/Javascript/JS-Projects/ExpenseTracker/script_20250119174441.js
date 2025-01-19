document.addEventListener('DOMContentLoaded',()=>{
    const expenseForm= document.getElementById("expense-form");
    const expenseName=document.getElementById("expense-name");
    const expenseList=document.getElementById("expense-list");
    const totalAmountDisplay= document.getElementById("total-amount");
    const expenseAmount=document.getElementById("expense-amount");
    
    let expenses=[];
    let totalAmount= calculateTotal()

//adding amounts and pushing data in the array 
    expenseForm.addEventListener('submit',(e)=>{
        e.preventDefault()
        const name= expenseName.value.trim()
        const amount=parseFloat(expenseAmount.value.trim());

        if(name !== "" && !isNaN(amount) && amount > 0){
            const newExpense={
                id:Date.now(),
                name:name,
                amount:amount
            }
            expenses.push(newExpense)
            saveExpensesToLocal();
            updateTotal()

            //ckear input
            expenseName.value=""
            expenseAmount.value=""
        }
    })
    function calculateTotal(){
        return expenses.reduce((sum, expense)=>sum + expense.amount,0)

    }
    function saveExpensesToLocal(){
        localStorage.setItem('expenses',JSON.stringify(expenses));
    }
    function updateTotal(){
        totalAmount=calculateTotal()
        totalAmountDisplay.textContent=totalAmount.toFixed(2); 
    }
})