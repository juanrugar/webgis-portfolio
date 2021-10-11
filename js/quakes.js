function quakesGeonamesToGeoJSON(answerGeonames) {

    var geoJSON = {
        "type": "FeatureCollection",
        "features": []
    };

    for (var i = 0; i < answerGeonames.earthquakes.length; i++) {

        geoJSON.features.push(
            {
                "type": "Feature",
                "properties": {
                    "magnitude": answerGeonames.earthquakes[i].magnitude,
                    "datetime": answerGeonames.earthquakes[i].datetime,
                    "depth": answerGeonames.earthquakes[i].depth
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        answerGeonames.earthquakes[i].lng,
                        answerGeonames.earthquakes[i].lat
                    ]
                }
            }
        );

    } //fin loop

    return geoJSON;

} //fin funcion

function generateRequestQuakes() {

    var request = 'https://secure.geonames.org/earthquakesJSON?' +
        'north=' + map.getBounds()._ne.lat + '&' +
        'south=' + map.getBounds()._sw.lat + '&' +
        'east=' + map.getBounds()._ne.lng + '&' +
        'west=' + map.getBounds()._sw.lng + '&' +
        'maxRows=50&' +
        'minMagnitude=5&' +
        'username=masterupc&';
    //date : 'yyyy-MM-d

    enviarPeticion(request).then(function (answerGeonames) {

        var geoJSON = quakesGeonamesToGeoJSON(answerGeonames);

        if (!map.getSource("terremotos_source")) {

            map.addSource("terremotos_source", {
                type: "geojson",
                data: geoJSON
            });

            map.addLayer({
                'id': 'terremotos',
                'type': 'circle',
                'source': 'terremotos_source',
                'paint': {
                    'circle-color': [
                        'interpolate',
                        ['linear'],
                        ['get', 'magnitude'],
                        3, '#ebe709',
                        5, '#eb1809',
                        7, '#ef4bf2',
                    ],
                    'circle-opacity': 0.75,
                    'circle-radius': [
                        'interpolate',
                        ['linear'], ['get', 'magnitude'],
                        3, 8,
                        5, 16,
                        8, 32
                    ]
                }
            });

            map.addLayer({
                'id': 'terremotos-textos',
                'type': 'symbol',
                'source': 'terremotos_source',
                'layout': {
                    'text-field': [
                        'format', ['get', 'magnitude'],
                    ],
                    'text-size': 10
                },
                'paint': {
                    'text-color': 'rgba(255,255,255,1)'
                }
            });


        } else {

            map.getSource("terremotos_source").setData(geoJSON);

        }

    });

} // fin funcion

