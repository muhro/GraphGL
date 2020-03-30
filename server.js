'use strict';

const express = require('express');
const graphqlHTTP = require('express-graphql');
const MyGraphQLSchema = require('./schema/schema');

const app = express();

app.use(
    '/graphql',
    graphqlHTTP({
        schema: MyGraphQLSchema,
        graphiql: true,
    }),
);

app.listen(3000);
// schema/schema.js
'use strict';

'use strict';

const {GraphQLObjectType, GraphQLID, GraphQLString, GraphQLList, GraphQLSchema} = require(
    'graphql');

const animalData = [
    {
        id: '1',
        animalName: 'Frank',
        species: '1',
    },
];

const speciesData = [
    {
        id: '1',
        speciesName: 'Cat',
        category: '1',
    },
];

const categoryData = [
    {
        id: '1',
        categoryName: 'Mammal',
    },
];

const animalType = new GraphQLObjectType({
    name: 'animal',
    description: 'Animal name and species',
    fields: () => ({
        id: {type: GraphQLID},
        animalName: {type: GraphQLString},
        species: {type: GraphQLID},
    }),
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        animals: {
            type: new GraphQLList(animalType),
            description: 'Get all animals',
            resolve(parent, args) {
                return animalData;
            },
        },
    },
});

module.exports = new GraphQLSchema({
    query: RootQuery,
});
