"use strict";


function gMapHome() {
    if ($('.google-map-home').length) {
        $('.google-map-home').each(function() {
            // getting options from html 
            var Self = $(this);
            var mapName = Self.attr('id');
            var mapLat = Self.data('map-lat');
            var mapLng = Self.data('map-lng');
            var iconPath = Self.data('icon-path');
            var mapZoom = Self.data('map-zoom');
            var mapTitle = Self.data('map-title');


            var styles = [{ elementType: "geometry", stylers: [{ color: "#f5f5f5" }] }, { elementType: "labels.icon", stylers: [{ visibility: "off" }] }, { elementType: "labels.text.fill", stylers: [{ color: "#616161" }] }, { elementType: "labels.text.stroke", stylers: [{ color: "#f5f5f5" }] }, { featureType: "administrative.land_parcel", elementType: "labels.text.fill", stylers: [{ color: "#bdbdbd" }] }, { featureType: "poi", elementType: "geometry", stylers: [{ color: "#eeeeee" }] }, { featureType: "poi", elementType: "labels.text.fill", stylers: [{ color: "#757575" }] }, { featureType: "poi.park", elementType: "geometry", stylers: [{ color: "#e5e5e5" }] }, { featureType: "poi.park", elementType: "labels.text.fill", stylers: [{ color: "#9e9e9e" }] }, { featureType: "road", elementType: "geometry", stylers: [{ color: "#ffffff" }] }, { featureType: "road.arterial", elementType: "labels.text.fill", stylers: [{ color: "#757575" }] }, { featureType: "road.highway", elementType: "geometry", stylers: [{ color: "#dadada" }] }, { featureType: "road.highway", elementType: "labels.text.fill", stylers: [{ color: "#616161" }] }, { featureType: "road.local", elementType: "labels.text.fill", stylers: [{ color: "#9e9e9e" }] }, { featureType: "transit.line", elementType: "geometry", stylers: [{ color: "#e5e5e5" }] }, { featureType: "transit.station", elementType: "geometry", stylers: [{ color: "#eeeeee" }] }, { featureType: "water", elementType: "geometry", stylers: [{ color: "#c9c9c9" }] }, { featureType: "water", elementType: "labels.text.fill", stylers: [{ color: "#9e9e9e" }] }];


            // if zoom not defined the zoom value will be 15;
            if (!mapZoom) {
                var mapZoom = 10;
            };
            // init map
            var map;
            map = new GMaps({
                div: '#' + mapName,
                scrollwheel: false,
                lat: mapLat,
                lng: mapLng,
                styles: styles,
                zoom: mapZoom
            });
            // if icon path setted then show marker
            if (iconPath) {

                map.addMarker({
                    icon: 'assets/images/map/1.png',
                    lat: 40.925372,
                    lng: -74.276544,
                    title: 'North Parchrtome Steet ',
                    infoWindow: {
                        content: '<h4>North Parchrtome Steet</h4> <p>Marbella, Luxury Villa</p>'
                    }
                });
                map.addMarker({
                    icon: 'assets/images/map/2.png',
                    lat: 40.929399,
                    lng: -74.430091,
                    title: 'Raibow MAnor California',
                    infoWindow: {
                        content: '<h4>Raibow MAnor California</h4> <p>Marbella, Romantic Villa</p>'
                    }
                });
                map.addMarker({
                    icon: 'assets/images/map/3.png',
                    lat: 40.892321,
                    lng: -74.477377,
                    title: 'Sub Office for Rental',
                    infoWindow: {
                        content: '<h4>17 Thorpe Close Notting</h4> <p>Marbella, Village Villa</p>'
                    }
                });
                map.addMarker({
                    icon: 'assets/images/map/4.png',
                    lat: 40.935654,
                    lng: -74.186256,
                    title: 'Sub Office for Rental',
                    infoWindow: {
                        content: '<h4>Longkloof Studio</h4> <p>City Life Villa</p>'
                    }
                });
                map.addMarker({
                    icon: 'assets/images/map/5.png',
                    lat: 40.905099,
                    lng: -74.209868,
                    title: 'Main Head office',
                    infoWindow: {
                        content: '<h4>Raibow MAnor California</h4> <p>Marbella, Romantic Villa</p>'
                    }
                });
                map.addMarker({
                    icon: 'assets/images/map/6.png',
                    lat: 40.944543,
                    lng: -74.075419,
                    title: 'Sub office for rental',
                    infoWindow: {
                        content: '<h4>Redfort California</h4> <p>Elveria, Beach Vila</p>'
                    }
                });

                map.addMarker({
                    icon: 'assets/images/map/7.png',
                    lat: 41.879198,
                    lng: -87.843116,
                    title: 'Sub office for rental',
                    infoWindow: {
                        content: '<h4>Khan Toul Kark </h4> <p>Elveria, Ocean View Villa</p>'
                    }
                });

                map.addMarker({
                    icon: 'assets/images/map/8.png',
                    lat: 40.928710,
                    lng: -74.039862,
                    title: 'Sub office for rental',
                    infoWindow: {
                        content: '<h4>Raibow MAnor California</h4> <p>Marbella, Romantic Villa</p>'
                    }
                });
                map.addMarker({
                    icon: 'assets/images/map/9.png',
                    lat: 40.856766,
                    lng: -74.128476,
                    title: 'Sub office for rental',
                    infoWindow: {
                        content: '<h4>Green Acres House</h4> <p>Marbella, Vila</p>'
                    }
                });
                map.addMarker({
                    icon: 'assets/images/map/10.png',
                    lat: 40.962876,
                    lng: -74.132921,
                    title: 'Sub office for rental',
                    infoWindow: {
                        content: '<h4>North Parchrtome Steet</h4> <p>Marbella, Luxury Villa</p>'
                    }
                });
                map.addMarker({
                    icon: 'assets/images/map/11.png',
                    lat: 40.923202,
                    lng: -74.343958,
                    title: 'Sub office for rental',
                    infoWindow: {
                        content: '<h4>Redfort California</h4> <p>Elveria, Beach Vila</p>'
                    }
                });

                map.addMarker({
                    icon: 'assets/images/map/12.png',
                    lat: 40.940376,
                    lng: -74.131810,
                    title: 'Sub office for rental',
                    infoWindow: {
                        content: '<h4>Khan Toul Kark </h4> <p>Elveria, Ocean View Villa</p>'
                    }
                });

                map.addMarker({
                    icon: 'assets/images/map/13.png',
                    lat: 40.914821,
                    lng: -74.383763,
                    title: 'Sub office for rental',
                    infoWindow: {
                        content: '<h4>Raibow MAnor California</h4> <p>Marbella, Romantic Villa</p>'
                    }
                });
                map.addMarker({
                    icon: 'assets/images/map/14.png',
                    lat: 40.904019,
                    lng: -74.408741,
                    title: 'Sub office for rental',
                    infoWindow: {
                        content: '<h4>Green Acres House</h4> <p>Marbella, Vila</p>'
                    }
                });
                map.addMarker({
                    icon: 'assets/images/map/15.png',
                    lat: 40.916765,
                    lng: -74.171811,
                    title: 'Sub office for rental',
                    infoWindow: {
                        content: '<h4>North Parchrtome Steet</h4> <p>Marbella, Luxury Villa</p>'
                    }
                });
            }
        });
    };
}

gMapHome();

// Dom Ready Function
jQuery(document).on('ready', function() {
    (function($) {
        // add your functions
        gMapHome();
    })(jQuery);
});