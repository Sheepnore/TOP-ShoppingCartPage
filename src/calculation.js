export const singleItemTotal = (price, quan)=>{
  const priceInCent = price * 100;
  const total = ((priceInCent * quan) /100)
  return total
}
