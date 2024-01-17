function getBudgets (objects) {
    let budget = 0
    for (let i of objects) {
        budget += i.budget
    }
    console.log(budget)
}

getBudgets([
    { name : "john", age : 1, budget: 23000 },
    { name : "john", age : 2, budget: 23000 },
    { name : "john", age : 3, budget: 23000 }
])