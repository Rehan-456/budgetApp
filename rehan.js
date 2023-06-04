let expenseList =[]

function addItems(){
    console.log('rehan kaim khani')
    document.getElementById("addListForm").className += "show"
    document.getElementById("showExpenseList").className = "hidden"
    document.getElementById("balanceOverview").className += "show"
    
}
function back(){
    document.getElementById("addListForm").className = "hidden"
    document.getElementById("showExpenseList").className = "show"
}
function Object(category,date,totalAmount,description){
    this.category = category,
    this.date = date,
    this.totalAmount = totalAmount,
    this.description = description
}
function deleteNode(item){
    item.parentNode.remove()
    expense()
}
function setBudget(){
    document.getElementById("budgetOverview").className = "show budgetDisplay"
    document.getElementById("addItems").className = "show"
    
    const totalBudget =document.getElementById("setBudgetAmount").value
    console.log(totalBudget)
    document.getElementById("totalBudgetOverview").innerText = totalBudget

    expense()
}
function expense(){
    let parentDiv = document.getElementById("showExpenseList");
    const spanElements = parentDiv.querySelectorAll('div > div > span.value');
    console.log(spanElements)
    let sum = 0;
    spanElements.forEach((span) => {
    const value = parseInt(span.innerText); // Parse the text content of the span as an integer
    console.log(value)
    sum += value; // Add the value to the sum
    });
    const expenseSumElement = document.getElementById('expenseOverview');
    expenseSumElement.textContent = sum;
    console.log(expenseSumElement)
    
    let totalAmount = document.getElementById("totalBudgetOverview")
    let balanceAmount = parseInt(totalAmount.innerText) - sum

    document.getElementById("balanceOverview").innerText = balanceAmount

}

function home(){
    let monthList =['Jan','Feb',"March","April","May","June","July","Aug","Sep","Oct","Nov","Dec"]
    console.log('rehan kaim khani')
    document.getElementById("addListForm").className += " hidden"
    //document.getElementById("expenseList").className += " show"
    document.getElementById("showExpenseList").className = "show"
   
    let category = document.getElementById("category").value
    let totalAmount = document.getElementById("totalAmount").value
    let rawDate = document.getElementById("date").value
    let monthValue = +(rawDate.slice(5,7)) - 1
    let dateNum = rawDate.slice(8,10)
    let month = monthList[monthValue]
    let year = rawDate.slice(0,4)
    let date = dateNum +" "+ month+" "+ year
    let description = document.getElementById("description").value
    let obj = new Object(category,date,totalAmount,description)
    expenseList.push(obj)
    console.log(date)
    
    
    // const newContainer = document.createElement("div");
    // newContainer.id = "showExpenseList";
    // document.body.appendChild(newContainer);

    // parentDiv.insertBefore(newContainer, parentDiv);
    const showExpenseList = document.getElementById("showExpenseList")

    const firstDiv = document.createElement("div")
    firstDiv.setAttribute("class", "display");
    showExpenseList.appendChild(firstDiv)

    const listElement = document.createElement("div");
    listElement.textContent = obj.category
    listElement.setAttribute("class", "categoryWidth");
    firstDiv.appendChild(listElement);

    const amountElement = document.createElement("span");
    amountElement.textContent = obj.totalAmount + "$"
    amountElement.setAttribute("class", "value");
    firstDiv.appendChild(amountElement);

    const dateElement = document.createElement("div");
    dateElement.textContent = obj.date
    dateElement.setAttribute("class", "dateWidth");
    firstDiv.appendChild(dateElement);

    const descriptionElement = document.createElement("div");
    descriptionElement.textContent = obj.description
    descriptionElement.setAttribute("class", "descriptionWidth");
    firstDiv.appendChild(descriptionElement);

    const newLineElement = document.createElement("br");
    firstDiv.appendChild(newLineElement);

    const deleteButton = document.createElement("input");
    deleteButton.setAttribute("onclick", "deleteNode(this)");
    deleteButton.setAttribute("type", "submit");
    deleteButton.setAttribute("value", "X");
    firstDiv.appendChild(deleteButton);

    // Step 1: Retrieve the reference to the div element
    const divElement = document.getElementById('addListForm');

    // Step 2: Iterate through the child elements of the div
    for (let i = 0; i < divElement.children.length; i++) {
    const child = divElement.children[i];

    // Step 3: Check if the child element is an input or select element
    if (child.tagName === 'INPUT' || child.tagName === 'SELECT') {
        // Clear the input value or selected option
        if (child.tagName === 'SELECT') {
        child.selectedIndex = 0; // Set the first option as selected
        } else {
        child.value = ''; // Clear the input value
        }
    }
    }
    expense()
    
}
