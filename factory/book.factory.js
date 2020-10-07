import factory from 'factoria';

factory.define('Book', faker => ({
    id: faker.random.number(),
    name: faker.name.findName(),
}));

export default factory;