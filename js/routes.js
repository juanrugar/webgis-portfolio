function addRutas() {

    var url = 'data/routes.geojson';
    map.addSource('routes', { type: 'geojson', data: url });

    map.addLayer({
        'id': 'route',
        'type': 'line',
        'source': 'routes',
        'layout': {
            'line-join': 'round',
            'line-cap': 'round'
        },
        'paint': {
            'line-color': '#ff0000',
            'line-width': 5
        }
    });

} //fin funcion

function zoomToRutas(valores) {

    var coord = valores.split("/");

    map.flyTo({
        center: [coord[2], coord[1]],
        zoom: coord[0]
    });

} //fin funcion

var animacion;
function rotarCamara(timestamp) {

    rotacion = timestamp / 100 == 360 ? 0 : timestamp / 100;
    map.rotateTo(rotacion, { duration: 0 });

    animacion = requestAnimationFrame(rotarCamara);
}

function finalRotarCamara() {

    cancelAnimationFrame(animacion);
}   
