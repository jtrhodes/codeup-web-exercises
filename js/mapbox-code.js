function geocode(search, token) {
    var baseUrl = 'https://api.mapbox.com';
    var endPoint = '/geocoding/v5/mapbox.places/';
    return fetch(baseUrl + endPoint + encodeURIComponent(search) + '.json' + "?" + 'access_token=' + token)
        .then(function(res) {
            return res.json();
            // to get all the data from the request, comment out the following three lines...
        }).then(function(data) {
            return data.features[0].center;
        });
}
function reverseGeocode(coordinates, token) {
    var baseUrl = 'https://api.mapbox.com';
    var endPoint = '/geocoding/v5/mapbox.places/';
    return fetch(baseUrl + endPoint + coordinates.lng + "," + coordinates.lat + '.json' + "?" + 'access_token=' + token)
        .then(function(res) {
            return res.json();
        })
        .then(function(data) {
            return data.features[0].place_name;
        });
}
    var accessToken = MAPBOX_TOKEN;
    mapboxgl.accessToken = accessToken;
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v9',
        zoom: 10,
    });
    var restaurants = [
        {
            name: 'dogfather' ,
            food: 'hotdogs',
            address:
        }
    ]
function placeTheMarkers(resturaunt){

}
function markers(restaurant, map){
        geocode(restaurant.address, accessToken).then(function(coordinates) {
        var popup = new mapboxgl.Popup()
            .setHTML('<h3>' + restaurant.name + '</h3><p>' + restaurant.message + '</p>');
        new mapboxgl.Marker()
            .setLngLat(coordinates)
            .setPopup(popup)
            .addTo(map);
    });
}

select.addEventListener('change', function() {
    map.setZoom(select.value);
});