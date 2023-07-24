let passportNotMarried = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "Bobryisk"
    }
};

const passportMarried = {...passportNotMarried, married: true};

console.log(passportNotMarried);

console.log(passportMarried);

