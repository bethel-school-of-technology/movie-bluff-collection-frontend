var faker = require('faker');
var database = { movies: []};

for (var i = 1; i<=30; i++) {
    database.movies.push({
        id: i,
        name: faker.commerce.productName(),
        description: faker.lorem.sentences(),
        imageUrl: "https://source.unsplash.com/1600x900/?movie"
    });
}

console.log(JSON.stringify(database));