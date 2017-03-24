'use strict';

const router = require( 'express' ).Router();

router.post( '/users', ( request, response ) => {
    response.json( { create: 'users' } );
} );

router.get( '/users', ( request, response ) => {
    response.json( { read: 'users' } );
} );

router.put( '/users', ( request, response ) => {
    response.json( { update: 'users' } );
} );

router.delete( '/users', ( request, response ) => {
    response.json( { delete: 'users' } );
} );

module.exports = router;