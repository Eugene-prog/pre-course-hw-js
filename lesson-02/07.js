let passportMarried = {
    name: "Petr",
    surname: "Petrov",
    married: true,
    address: {
        country: "USA",
        city: "Bobryisk"
    }
};

const passportNotMarried = {...passportMarried, name: "Ivan", surname: "Ivanov", married: false};

console.log(passportMarried);

console.log(passportNotMarried);
