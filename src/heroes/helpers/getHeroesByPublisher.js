import { Heroes } from '../data/heroes';

export const getHeroesByPublisher = ( publisher ) => { 
const validPublishers = ['DC Comics', 'Marvel Comics'];
if ( !validPublishers.includes( publisher ) ) {
    throw new Error(`${ publisher } is not a valid publisher`);
} 

return Heroes.filter( hero => hero.publisher === publisher );
}
