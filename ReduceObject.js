const mobile = [
    {
        name: 'redmi note 12',
        price: 12000,
        android: 13,
        quantity: 1
    },
     {
        name: 'vivo t1 44w',
        price: 16999,
        android: 14,
        quantity: 3
    },
     {
        name: 'moto g82',
        price: 20000,
        android: 12,
        quantity: 2
    },
]

const total = mobile.reduce((total, mobile) => {
    total.totalItem += mobile.quantity
    total.cartItem += mobile.quantity *  mobile.price
    return total
}, {
    totalItem: 0,
    cartItem : 0
})

console.log(total)