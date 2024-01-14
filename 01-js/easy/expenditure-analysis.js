/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  a={}
  l=transactions.length;
  for(let i=0;i<l;i++){
    if(a.hasOwnProperty(transactions[i]["category"])){
      a[transactions[i]["category"]]+=transactions[i]["price"];
    }
    else{
      a[transactions[i]["category"]]=transactions[i]["price"];
    }
    
  }
  console.log(a);
  f=[]
  la=l.length;
  for(let i in a){
    d={}
    d["category"]=i;
    d["totalSpent"]=a[i];
    f.push(d);
  }
  return f;
}

module.exports = calculateTotalSpentByCategory;

calculateTotalSpentByCategory([
  {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: 'Food',
    itemName: 'Pizza',
  },
  {
    id: 2,
    timestamp: 1656259600000,
    price: 20,
    category: 'Food',
    itemName: 'Burger',
  },
  {
    id: 3,
    timestamp: 1656019200000,
    price: 15,
    category: 'Clothing',
    itemName: 'T-Shirt',
  },
  {
    id: 4,
    timestamp: 1656364800000,
    price: 30,
    category: 'Electronics',
    itemName: 'Headphones',
  },
  {
    id: 5,
    timestamp: 1656105600000,
    price: 25,
    category: 'Clothing',
    itemName: 'Jeans',
  },
])
