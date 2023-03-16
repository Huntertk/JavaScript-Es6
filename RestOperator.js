/*Arrya Rest Opeartor */

const fruits = ['mango', 'orange', 'kiwi', 'grapes']


const [first, ...rest] =fruits
// console.log(first, rest)

const specficFruit = rest.find((fruit) => {
    return fruit === 'kiwi'
})
// console.log(specficFruit)

/*Object Rest Operator */


const bob = {
    name:"MD TAUFIK",
    age: 21,
    position: "FrontEnd Developer"
} 

const {age, ...restObj} = bob

console.log(age,  restObj)


/*Function in Rest Operator */

const internalMarks = [20,44,87,45,85,96,98,2,58,100]

const averageScore = (name, ...score) => {
    console.log(name)
    console.log(score)
    const averge = score.reduce((total, current) => {
        return (total += current)/score.length
    })
    console.log(averge.toFixed(2))
}

averageScore(bob.name,...internalMarks)

