const people = [
    {
        name: 'bob',
        age: 20,
        position: 'developer',
        salary: 4000
    },
    {
        name: 'anna',
        age: 25,
        position: 'designer',
        salary: 1400
    },
    {
        name: 'emma',
        age: 19,
        position: 'database executive',
        salary: 7000
    },
]

const dailyTotal = people.reduce((total,current) => {
    // console.log(total)
    total += current.salary
    return total
},0)

console.log(dailyTotal)