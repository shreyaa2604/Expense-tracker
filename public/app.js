async function addExpense() {

    const description =
        document.getElementById("description").value;

    const amount =
        document.getElementById("amount").value;

    const expense = {
        description,
        amount
    };

    await fetch("http://localhost:5000/expenses", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(expense)
    });

    loadExpenses();
}

async function loadExpenses() {

    const response =
        await fetch("http://localhost:5000/expenses");

    const expenses =
        await response.json();

    const list =
        document.getElementById("expense-list");

    list.innerHTML = "";

    expenses.forEach((expense) => {

        const li =
            document.createElement("li");

        li.innerText =
            `${expense.description} - ₹${expense.amount}`;

        list.appendChild(li);
    });
}