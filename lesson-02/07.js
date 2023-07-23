let passportMarried = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "Bobryisk"
    }
};

console.log(passportMarried);

let newPassportMarried = Object.assign(passportMarried, {married: true});

console.log(newPassportMarried);
