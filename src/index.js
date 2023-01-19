import Resolver from '@forge/resolver';

const resolver = new Resolver();

/*resolver.define('getText', (req) => {
    console.log(req);

    return 'Hello, world!';
});*/

/*resolver.define('getTable', (req) => {
    console.log(req);

    return <Table/>
});*/

export const handler = resolver.getDefinitions();

