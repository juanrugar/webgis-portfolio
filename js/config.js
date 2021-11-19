var config = {
    style: 'mapbox://styles/mapbox/satellite-v9',
    accessToken: 'pk.eyJ1IjoianVhbnJ1Z2FyIiwiYSI6ImNranlpd2lqbzB5djQydW1sZTRvem9tdmgifQ.zvNvGIYji6wVpwjlnTHeJg',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'dark',
    use3dTerrain: true,
    title: 'Volcanes',
    subtitle: 'Los principales volcanes activos del mundo',
    byline: 'Cinco montes volcánicos cuya actividad reciente deja huella en la actualidad',
    footer: 'Fuentes: wikipedia.org; imagen de Cumbre Vieja de Eduardo Robaina <a>https://commons.wikimedia.org/w/index.php?curid=110322497</a>',
    chapters: [
        {
            id: 'volcan1',
            alignment: 'left',
            hidden: false,
            title: 'Eyjafjallajökull, Islandia',
            image: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Eyjafjallaj%C3%B6kull_first_crater_20100329.jpg',
            description: 'También conocido como Eyjafjöll,2​ o Eyjafjalla,3​ es un volcán situado al norte de Skógar, en la región de Suðurland, al sur de Islandia.4​ Tiene entre 1651 m y 1666 m de altitud,​ y ha estado moderadamente activo en los últimos 8000 años.',
            location: {
                center: [-19.62, 63.63],
                zoom: 14.5,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        }, {
            id: 'volcan2',
            alignment: 'right',
            hidden: false,
            title: 'Monte Vesubio, Italia',
            image: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Cr%C3%A1ter_del_Vesubio.jpg',
            description: 'Es un volcán activo del tipo vesubiano situado frente a la bahía de Nápoles y a unos nueve kilómetros de distancia de la ciudad de Nápoles. Se encuentra en la ciudad metropolitana de Nápoles, perteneciente a la región italiana de la Campania. Tiene una altura máxima de 1281 m s. n. m. y se alza al sur de la cadena principal de los Apeninos.',
            location: {
                center: [14.42555555, 40.82138888],
                zoom: 14.5,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }, {
            id: 'volcan3',
            alignment: 'left',
            hidden: false,
            title: 'Popocatépetl, México',
            image: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Mexico-Popocatepetl.jpg',
            description: 'Es un volcán activo localizado en el centro de México. Se encuentra en los límites territoriales de los estados de Morelos, Puebla y el estado de México. Se localiza unos 72 km al sureste de la Ciudad de México, a 43 km de Puebla, a 63 km de Cuernavaca, y a 53 km de Tlaxcala.',
            location: {
                center: [-98.62176, 19.02104],
                zoom: 14.45,
                pitch: 54,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }, {
            id: 'volcan4',
            alignment: 'right',
            hidden: false,
            title: 'Volcán de Fuego, Guatemala',
            image: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Fuego_Eruption.jpg',
            description: 'El volcán de Fuego es a lo que se le conoce como un estratovolcán activo situado entre los departamentos de Sacatepéquez, Escuintla y Chimaltenango, al centro-sur de Guatemala. El volcán de Fuego es el volcán más activo de Centroamérica y uno de los más activos del mundo. Su nombre indígena es Chi gag, que se traduciría del idioma cakchiquel como <q>donde está el fuego</q>. El volcán de Fuego tiene una altura de 3763 m de altitud, quedando libre de vegetación a partir de los 1300 m.',
            location: {
                center: [-90.880833, 14.474722],
                zoom: 14.45,
                pitch: 54,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'volcan5',
            alignment: 'left',
            hidden: false,
            title: 'Cumbre Vieja, Isla de La Palma, Canarias, España',
            image: 'https://upload.wikimedia.org/wikipedia/commons/6/62/LUN_8401.jpg',
            description: 'La erupción volcánica de La Palma de 2021 se inició a las 14:10 horas (UTC) del 19 de septiembre en el paraje de Cabeza de Vaca, cercano a la localidad de El Paraíso del municipio de El Paso, en la isla española de La Palma',
            location: {
                center: [-17.837472, 28.572622],
                zoom: 15.45,
                pitch: 54,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
