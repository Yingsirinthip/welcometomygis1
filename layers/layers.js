var wms_layers = [];


        var lyr_LightColorMap_0 = new ol.layer.Tile({
            'title': 'Light Color Map',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png'
            })
        });

        var lyr_Bingmaps_1 = new ol.layer.Tile({
            'title': 'Bing maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://ecn.dynamic.t0.tiles.virtualearth.net/comp/CompositionHandler/{q}?mkt=en-us&it=G,VE,BX,L,LA&shading=hill'
            })
        });

        var lyr_GoogleSatellite_2 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_3 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_S2B_MSIL1C_20181106_RGB_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "S2B_MSIL1C_20181106_RGB",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/S2B_MSIL1C_20181106_RGB_4.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11125277.492537, 1866614.510885, 11192233.422841, 1941670.659095]
                            })
                        });

lyr_LightColorMap_0.setVisible(true);lyr_Bingmaps_1.setVisible(true);lyr_GoogleSatellite_2.setVisible(true);lyr_OSMStandard_3.setVisible(true);lyr_S2B_MSIL1C_20181106_RGB_4.setVisible(true);
var layersList = [lyr_LightColorMap_0,lyr_Bingmaps_1,lyr_GoogleSatellite_2,lyr_OSMStandard_3,lyr_S2B_MSIL1C_20181106_RGB_4];
