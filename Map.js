const people = [
    {
        name: 'bob',
        age: 20,
        position: 'developer'
    },
    {
        name: 'anna',
        age: 25,
        position: 'designer'
    },
    {
        name: 'emma',
        age: 19,
        position: 'database executive'
    },
]

const ages = people.map((age) => {
    return age.age
})


const newPeople = people.map((item) => {
    return {
        firstName: item.name.toUpperCase(),
        age: item.age + 20
    }
})
console.log(people)
console.log(newPeople)