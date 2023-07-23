let passportMarried = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "Bobryisk"
    }
};

console.log(passportMarried);

let newPerson = {
  name: passportMarried.name,
  surname: passportMarried.surname,
  married: true,
  address: passportMarried.address,
};

console.log(newPerson);
