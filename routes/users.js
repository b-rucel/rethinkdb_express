'use strict';

const r = require( 'rethinkdb' );
const router = require( 'express' ).Router();
const connect = require( '../lib/connect' );

router.post( '/users', ( request, response ) => {
    let user = Object.assign( {}, {
        'email': request.body.email,
        'name': request.body.name
    } );

    r.db( 'auth' ).table( 'users' )
        .insert( user )
        .run( request._rdb )
        .then( cursor => cursor.toArray() )
        .then( result => {
            response.send( result );
        } )
        .catch( error => response.send( error ) );
} );

router.get( '/users', ( request, response ) => {
    r.db( 'auth' ).table( 'users' )
        .run( request._rdb )
        .then( cursor => cursor.toArray() )
        .then( result => {
            response.send( result );
        } )
        .catch( error => response.send( error ) );
} );

router.put( '/users/:user_id', ( request, response ) => {
    let user_id = request.params.user_id;

    r.db( 'auth' ).table( 'users' )
        .get( user_id )
        .update( {
            'email': request.body.email,
            'name': request.body.name
        } )
        .run( request._rdb )
        .then( cursor => cursor.toArray() )
        .then( result => {
            response.send( result );
        } )
        .catch( error => response.send( error ) );
} );

router.delete( '/users/:user_id', ( request, response ) => {
    let user_id = request.params.user_id;

    r.db( 'auth' ).table( 'users' )
        .get( user_id )
        .delete()
        .run( request._rdb )
        .then( cursor => cursor.toArray() )
        .then( result => {
            response.send( result );
        } )
        .catch( error => response.send( error ) );
} );

module.exports = router;