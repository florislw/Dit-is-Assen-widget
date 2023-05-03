import small from './views/small.html';
import large from './views/large.html';
import './views/global.css';
import './views/small.css';
import './views/large.css';

let elements = [];
let body;

export function show( {
                          type,
                          positionX,
                          positionY,
                          zIndex,
                      } ) {
    // convert plain HTML string into DOM elements
    const temporary = document.createElement( 'div' );
    temporary.innerHTML = type === 'large' ? large : small;

    const widget = temporary.querySelector( '.vaart-in-assen-widget' );
    widget.classList.add( `vaart-in-assen-${ positionX }` );
    widget.classList.add( `vaart-in-assen-${ positionY }` );
    widget.style.zIndex = zIndex;

    // append elements to body
    body = document.getElementsByTagName( 'body' )[0];
    while ( temporary.children.length > 0 ) {
        elements.push( temporary.children[0] );
        body.appendChild( temporary.children[0] );
    }
}