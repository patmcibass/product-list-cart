// 1. Create a greeting function
const createGreeting = (name, time) => {
  // If time is "morning" OR the name starts with "A", return "Good morning, [name]!"
  if(time === 'morning' || name.startsWith('A')){
    return `Good morning, ${name}!`
    // If time is "afternoon", return "Good afternoon, [name]!"
  }else if(time ==='afternoon'){
    return `Good afternoon, ${name}!`
  }else {
    return `Hello, ${name}!`
  }
  // Otherwise, return "Hello, [name]!"
}

// 2. Create a joke function
const tellJoke = (topic) => {
  // If topic is "weather", return the weather joke
  if(topic === 'weather'){
    return "What do you call a stormy robot? A thunder-bot!"
  }else if(topic === 'animals'){// If topic is "animals", return the animals joke
    return "Why did the robot go to the zoo? To study creature features!"
    }else {
        return "Why was the robot tired? Because it had too many bytes!"
    }// Otherwise, return the default joke

}

// 3. Create a function to greet multiple people
const greetPeople = (people, time) => {
  // Create an empty array to store all the greetings
  const greetings = []
  // Loop through each person in the people array
  for(const person of people){
    const greet = createGreeting(person, time)
    greetings.push(greet)
  }
  return greetings
  // Create a greeting for each person

  // Add the greeting to the array

  // Return the array of greetings

}

// 4. Create a robot interaction function
const robotInteraction = (name, time, topic) => {
  // Get the greeting
  const greet = createGreeting(name, time)
  // Get the joke
  const joke = tellJoke(topic)
  // Return both together
  return `${greet} ${joke}`

}

// Test your functions
// Create a greeting
const greeting = createGreeting("Sam", "morning");
console.log(greeting);

// Tell a joke
const joke = tellJoke("weather");
console.log(joke);

// Greet multiple people
const people = ["Taylor", "Jamie", "Alex"];
const greetings = greetPeople(people, "afternoon");
console.log(greetings);

// Create a complete interaction
const interaction = robotInteraction("Taylor", "afternoon", "animals");
console.log(interaction);
