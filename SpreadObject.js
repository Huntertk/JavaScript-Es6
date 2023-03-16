const scrimba = 'scrimba'

const letters = [...scrimba]
// console.log(letters)

const boys = ['hardin', 'Taufik', 'harry', 'paul']

const girls = ['emma', 'tessa', 'kathrine']

const bestFriend = 'simran'

const friends = [...boys, ...girls, bestFriend]
const Taufik = friends.filter((taufik) => {
    return taufik !== 'Taufik'
})
console.log(friends)
console.log("BElow")
console.log(Taufik)


const person = {name: 'john', job: 'developer' };

const newPerson = {...person, city:"Patna", name:"Taufik"}

console.log(newPerson)


