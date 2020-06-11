const faker=require("faker")

console.log("Finance Details(Sample)")

for (let index = 0; index < 10; index++) {
    console.log(faker.finance.accountName()+" has "+faker.finance.currencySymbol()+faker.finance.amount())
}