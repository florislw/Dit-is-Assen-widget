# Dit is Assen Widget

De Dit is Assen widget is een eenvoudige en aanpasbare tool die een logo (groot of klein) van Dit is Assen op uw
website weergeeft. Wanneer bezoekers op het logo klikken, worden ze doorgestuurd naar www.ditisassen.nl.

## Kenmerken

- Keuze uit een groot of klein logo
- Widget blijft bovenaan de pagina zweven, zodat het altijd zichtbaar is
- Mogelijkheid om de positie aan te passen (boven/onder, links/rechts). Let op: voor het kleine logo is boven niet
  beschikbaar.
- Optionele stapelvolgorde (z-index) instelling (zIndex, standaardwaarde: 100)

## Installatie

Voeg de volgende code toe aan de `<head>` sectie van uw website:

```html
<script>
  (function (w,d,s,o,f,js,fjs) {
    w['DIA-widget']=o;w[o] = w[o] || function () { (w[o].q = w[o].q || []).push(arguments) };
    js = d.createElement(s), fjs = d.getElementsByTagName(s)[0];
    js.id = o; js.src = f; js.async = 1; fjs.parentNode.insertBefore(js, fjs);
  }(window, document, 'script', 'diaWidget', 'https://www.vaartinassen.nl/templates/gridbox/js/widget.js'));
  diaWidget('renderWidget', { type: 'small', positionX: 'left', positionY: 'bottom'});
</script>
```

Vervang type: 'small' door type: 'large' voor een groter logo en pas positionX en positionY aan om de gewenste positie
van de widget te bepalen. U kunt ook de zIndex waarde aanpassen als u de stapelvolgorde van de widget ten opzichte van
andere elementen op uw pagina wilt wijzigen (standaardwaarde is 100). Verhoog deze waarde als de widget achter andere
elementen op de pagina verdwijnt.

## DEMO

Er is een demo beschikbaar op de volgende pagina: [https://florislw.github.io/Dit-is-Assen-widget/demo/](https://florislw.github.io/Dit-is-Assen-widget/demo/)