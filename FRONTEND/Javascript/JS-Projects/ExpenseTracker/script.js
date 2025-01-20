document.addEventListener('DOMContentLoaded',()=>{
    const expenseForm= document.getElementById("expense-form");
    const expenseName=document.getElementById("expense-name");
    const expenseList=document.getElementById("expense-list");
    const totalAmountDisplay= document.getElementById("total-amount");
    const expenseAmount=document.getElementById("expense-amount");
    
    let expenses=JSON.parse(localStorage.getItem('expenses')) || [];
    let totalAmount= calculateTotal()

    renderExpenses()
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
            renderExpenses();
            updateTotal()

            //ckear input
            expenseName.value=""
            expenseAmount.value=""
        }
    })
    function renderExpenses(){
        expenseList.innerHTML=""
        expenses.forEach(expense=>{
            const li= document.createElement('li');
            li.innerHTML=`${expense.name}-$${expense.amount}
            <button data-id="${expense.id}">Delete</button>`;
            expenseList.appendChild(li); 
        })
    }
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
    
    
    expenseList.addEventListener('click',(e)=>{
        if(e.target.tagName === 'BUTTON'){
        const expenseID= (e.target.getAttribute('data-id'))
        expenses= expenses.filter(expense=> expense.id!== expenseID)

        saveExpensesToLocal();
        renderExpenses();
        updateTotal();
        }
    })
})
