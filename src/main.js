import { show } from './show-widget'

const supportedAPI = ['renderWidget'];

// set default configurations
let configurations = {
    type: 'small',
    positionX: 'right',
    positionY: 'bottom',
    zIndex: 100,
};

/**
 The main entry of the application
 */
function app( window ) {
    // all methods that were called till now and stored in queue
    // needs to be called now
    let globalObject = window[window['VAS-widget']];
    let queue = globalObject.q;
    if ( queue ) {
        for ( var i = 0; i < queue.length; i ++ ) {
            apiHandler( queue[i][0], queue[i][1] );
        }
    }

    // override temporary (until the app loaded) handler
    // for widget's API calls
    globalObject = apiHandler;
    window[window['VAS-widget']] = globalObject;
    globalObject.configurations = configurations;
}

/**
 Method that handles all API calls
 */
function apiHandler( api, params ) {
    if ( ! api ) throw Error( 'API method required' );

    params = {
        ...configurations,
        ...params,
    }

    if ( supportedAPI.indexOf( api ) === - 1 ) throw Error( `Method ${ api } is not supported` );

    switch ( api ) {
        case 'renderWidget':
            show( params );
            break;
        default:
            console.warn( `No handler defined for ${ api }` );
    }
}

app( window );