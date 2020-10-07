import Factory from 'node-model-factory';

let factory = new Factory();


factory.define('Book', (faker) => {
    return {
        id: faker.uuid.v4(),
        title: faker.name.firstName(),
    };
});

export default factory;