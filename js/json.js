const user = { id: 1, name: 'Golam Ali', job: 'actor' };
const stringified = JSON.stringify(user);
// console.log(user);
// console.log(stringified);

const shop = {
    owner: 'Alim',
    address: {
        street: 'Bangabandhu Avenue',
        city: 'Dhaka',
        country: 'BD'
    },
    products: ['laptop', 'mic', 'monitor', 'keyboard'],
    revenue: 45000,
    isOpen: true,
    isNew: false
}
console.log(shop);

const shopJSON = JSON.stringify(shop);
console.log(shopJSON);

const shopObj = JSON.parse(shopJSON);
console.log(shopObj);
