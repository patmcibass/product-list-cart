const calculateCartTotal = (prices) => {
      // 1. Create a variable to store the total, starting at 0
      let total = 0
      // 2. Loop through all prices in the array and add each to total
      for(const price of prices){
        total+= price
      }
      // 3. Check if total is over $100, and if so apply a 10% discount
      if(total > 100){
        total*= .9
      }
      // 4. Return the final total
      return total
  }

  // Test your function with following steps:
  // 1. Invoke the function
  const myArr = calculateCartTotal([1,2,3,4,5])
  // 2. Store the return value in a variable
  // 3. Log the variable to the console
  console.log(myArr)



