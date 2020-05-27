
//let map= "";

window.initMap = () => {
    // The location of Uluru
    const maimo = { lat: -34.610490, lng: -58.440860 };
    // The map, centered at Uluru
    map = new google.maps.Map(
        document.getElementById('map'),
        {
            zoom: 15,
            center: maimo,
            styles: styles,
            streetViewControl: false,
            fullscreenControl: false,
            mapTypeControlOptions: {

                mapTypeIds: []

            },
            zoomControlOptions: {
                position: google.maps.ControlPosition.LEFT_CENTER
            }
        });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({ position: maimo, map: map });

    fetchMarkers(map)
}

const fetchMarkers = async (map) => {

    try {

        const response = await fetch('/markers.json');
        const json = await response.json();

        json.forEach(marker => {
            addMarker(map, marker)
        });

    } catch (error) {

        console.log(error);
    }
}

addMarker = (map, marker) => {

    console.log(marker)
    const { lat, lng, name, type, description } = marker;
    const contentString = `
    <div><h2>${name}</h2>
    <h3>${type}</h3>
    <p>${description}</p></div>`;
    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    const icons = {
        'Birreria': 'assets/img/beer.png',
        'Restaurant': 'assets/img/food.png',
        'Barcito Cheto': 'assets/img/bar.png'
    }

    const markerItem = new google.maps.Marker({
        position: { lat: lat, lng: lng },
        map: map,
        icon: icons [type],
    });

    markerItem.setMap(map);
    markerItem.addListener('click', function () {
        infowindow.open(map, markerItem);
    })
}


