let passportMarried = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "Bobryisk"
    }
};

console.log(passportMarried);

Object.assign(passportMarried, {married: true});

console.log(passportMarried);