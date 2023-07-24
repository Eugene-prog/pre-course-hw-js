let passportMarried = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "Bobryisk"
    }
};

const passportNotMarried = {...passportMarried, married: true};

console.log(passportMarried);

console.log(passportNotMarried);
