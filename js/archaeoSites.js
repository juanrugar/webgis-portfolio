
function addSites() {
    //PLB PhD Thesis archaeological record
    var url = 'data/mayaScape/maya_sites_v5_simple.geojson';
    map.addSource('sites', { type: 'geojson', data: url });

    map.addLayer({
        'id': 'siteMap',
        'type': 'circle',
        'source': 'sites',
        'layout': {
        },
        'paint': {
            'circle-color': '#fff',
            'circle-stroke-color': '#000',
            'circle-stroke-width':1,
            'circle-radius': 5
        }
    });

} //END FUNCTION
