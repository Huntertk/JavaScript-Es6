const menu = [
    {
        name:"Biryani",
        category: "nonveg"
    },
    {
        name:"chicken handi",
        category: "nonveg"
    },
    {
        name:"dosa",
        category: "veg"
    },
    {
        name:"chole",
        category: "veg"
    },
]

const category = [...new Set(menu.map((item) => {
    return item.category 
}))]
console.log(category)

const render = category.map((item) => {
    return `<h1>${item}</h1>`
}).join('')

console.log(render)