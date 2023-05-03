# Vaart in Assen Widget

De Vaart in Assen widget is een eenvoudige en aanpasbare tool die een logo (groot of klein) van Vaart in Assen op uw
website weergeeft. Wanneer bezoekers op het logo klikken, worden ze doorgestuurd naar de officiële website van Vaart in
Assen (www.vaartinassen.nl).

## Kenmerken

- Keuze uit een groot of klein logo
- Widget blijft bovenaan de pagina zweven, zodat het altijd zichtbaar is
- Mogelijkheid om de positie aan te passen (boven/onder, links/rechts)
- Optionele z-index instelling (zIndex, standaardwaarde: 100)

## Installatie

Voeg de volgende code toe aan de `<head>` sectie van uw website:

```html

<script>
    (function ( w, d, s, o, f, js, fjs ) {
        w['JS-Widget'] = o;
        w[o] = w[o] || function () {
            (w[o].q = w[o].q || []).push( arguments )
        };
        js = d.createElement( s ), fjs = d.getElementsByTagName( s )[0];
        js.id = o;
        js.src = f;
        js.async = 1;
        fjs.parentNode.insertBefore( js, fjs );
    }( window, document, 'script', 'vasWidget', './widget.js' ));
    vasWidget( 'renderWidget', {type: 'small', positionX: 'right', positionY: 'top', zIndex: 100} );
</script>
```

Vervang type: 'small' door type: 'large' voor een groter logo en pas positionX en positionY aan om de gewenste positie
van de widget te bepalen. U kunt ook de zIndex waarde aanpassen als u de stapelvolgorde van de widget ten opzichte van
andere elementen op uw pagina wilt wijzigen (standaardwaarde is 100).

## DEMO

Er is een demo beschikbaar op de volgende pagina: https://vaartinassen.nl/widget/demo.html