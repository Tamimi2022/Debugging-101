const array = [
    { name: "N. Armstrong", profession: "spacecowboy", age: 89 },
    { name: "H. de Haan", profession: "chicken hypnotist", age: 59 },
    { name: "A. Curry", profession: "frogman", age: 32 },
    { name: "F. Vonk", profession: "snake milker", age: 36 },
    { name: "B. Bunny", profession: "rabbit walking service", age: 27 },
    { name: "Dr.Evil", profession: "digital overlord", age: 56 }
  ];

  for (let person of array) {
    
    // Answer no.1 console.log(person); 
   //  console.log(person.name);

    // Answer no.2 console.log("This is the name: ", [person.name]);

    //  Answer no.3 console.log(2020 - person.age);

    // Answer no.4 console.log("occupation: ", person.name + " is " + person.profession);

        // Answer no.5 
    if (person.age > 50) {
        console.log("Older and amazing!!", person.age);
    }
  }