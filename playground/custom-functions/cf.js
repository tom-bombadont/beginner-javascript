function calculateBill(billAmount, taxRate) {
  console.log('running calculateBill');
  const total = billAmount * (1 + taxRate);
  return total;
}
const dorTotal = 500;
const dorTaxRate = 0.1;
const myTotal = calculateBill(dorTotal, dorTaxRate);
console.log(myTotal);
