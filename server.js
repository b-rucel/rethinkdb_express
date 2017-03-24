'use strict';

const express = require( 'express' );
const logger = require( 'morgan' );
const bodyParser = require( 'body-parser' );
const cors = require( 'cors' );
const helmet = require( 'helmet' );
require( 'dotenv' ).config();

const app = express();

app.get( '/', ( request, response, next ) => {
    response.json( { hello: "world" } );
} );

app.use( logger( 'dev' ) );
app.use( bodyParser.urlencoded( {
    extended: false
} ) );
app.use( bodyParser.json() );
app.use( cors() );
app.use( helmet() );

app.use( ( error, request, response, next ) => {
    response.status( error.status || 500 );
    response.json( {
        error: error.message
    } );
} );

app.use( ( request, response, next ) => {
    let error = new Error( 'Not Found' );
    error.status = 404;
    response.json( error );
} );

var server = app.listen( 3000, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log( 'App is listening on http://%s:%s', host, port );
} );