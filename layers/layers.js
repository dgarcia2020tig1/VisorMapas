var wms_layers = [];

var format_VIAS_0 = new ol.format.GeoJSON();
var features_VIAS_0 = format_VIAS_0.readFeatures(json_VIAS_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VIAS_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VIAS_0.addFeatures(features_VIAS_0);
var lyr_VIAS_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VIAS_0, 
                style: style_VIAS_0,
                interactive: true,
                title: '<img src="styles/legend/VIAS_0.png" /> VIAS'
            });
var format_MANZANAS_1 = new ol.format.GeoJSON();
var features_MANZANAS_1 = format_MANZANAS_1.readFeatures(json_MANZANAS_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MANZANAS_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MANZANAS_1.addFeatures(features_MANZANAS_1);
var lyr_MANZANAS_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MANZANAS_1, 
                style: style_MANZANAS_1,
                interactive: true,
                title: '<img src="styles/legend/MANZANAS_1.png" /> MANZANAS'
            });
var format_LOTES_2 = new ol.format.GeoJSON();
var features_LOTES_2 = format_LOTES_2.readFeatures(json_LOTES_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LOTES_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LOTES_2.addFeatures(features_LOTES_2);
var lyr_LOTES_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LOTES_2, 
                style: style_LOTES_2,
                interactive: true,
                title: '<img src="styles/legend/LOTES_2.png" /> LOTES'
            });

lyr_VIAS_0.setVisible(true);lyr_MANZANAS_1.setVisible(true);lyr_LOTES_2.setVisible(true);
var layersList = [lyr_VIAS_0,lyr_MANZANAS_1,lyr_LOTES_2];
lyr_VIAS_0.set('fieldAliases', {'__gid': '__gid', 'tipo_diagn': 'tipo_diagn', 'nombre_dia': 'nombre_dia', 'nomenclatu': 'nomenclatu', 'cod_actual': 'cod_actual', 'nombre_act': 'nombre_act', 'cod_propue': 'cod_propue', 'nombre_pro': 'nombre_pro', 'distrito': 'distrito', 'observacio': 'observacio', });
lyr_MANZANAS_1.set('fieldAliases', {'FID_1': 'FID_1', 'MZ_URB': 'MZ_URB', 'NOMBRE_AAH': 'NOMBRE_AAH', 'DISTRITO': 'DISTRITO', });
lyr_LOTES_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'LOTE_URB': 'LOTE_URB', 'NUM_PARTID': 'NUM_PARTID', 'MZ_URB': 'MZ_URB', 'DISTRITO': 'DISTRITO', 'TITULAR': 'TITULAR', 'SECTORIZAC': 'SECTORIZAC', 'DIRECCION': 'DIRECCION', 'ORIGEN': 'ORIGEN', 'COD_CATAST': 'COD_CATAST', 'AÃ‘O_TITUL': 'AÃ‘O_TITUL', 'NUM_TITULO': 'NUM_TITULO', 'USO': 'USO', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_VIAS_0.set('fieldImages', {'__gid': 'TextEdit', 'tipo_diagn': 'TextEdit', 'nombre_dia': 'TextEdit', 'nomenclatu': 'TextEdit', 'cod_actual': 'TextEdit', 'nombre_act': 'TextEdit', 'cod_propue': 'TextEdit', 'nombre_pro': 'TextEdit', 'distrito': 'TextEdit', 'observacio': 'TextEdit', });
lyr_MANZANAS_1.set('fieldImages', {'FID_1': 'TextEdit', 'MZ_URB': 'TextEdit', 'NOMBRE_AAH': 'TextEdit', 'DISTRITO': 'TextEdit', });
lyr_LOTES_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'LOTE_URB': 'TextEdit', 'NUM_PARTID': 'TextEdit', 'MZ_URB': 'TextEdit', 'DISTRITO': 'TextEdit', 'TITULAR': 'TextEdit', 'SECTORIZAC': 'TextEdit', 'DIRECCION': 'TextEdit', 'ORIGEN': 'TextEdit', 'COD_CATAST': 'TextEdit', 'AÃ‘O_TITUL': 'DateTime', 'NUM_TITULO': 'TextEdit', 'USO': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_VIAS_0.set('fieldLabels', {'__gid': 'no label', 'tipo_diagn': 'inline label', 'nombre_dia': 'inline label', 'nomenclatu': 'inline label', 'cod_actual': 'inline label', 'nombre_act': 'inline label', 'cod_propue': 'inline label', 'nombre_pro': 'inline label', 'distrito': 'inline label', 'observacio': 'inline label', });
lyr_MANZANAS_1.set('fieldLabels', {'FID_1': 'no label', 'MZ_URB': 'header label', 'NOMBRE_AAH': 'header label', 'DISTRITO': 'header label', });
lyr_LOTES_2.set('fieldLabels', {'OBJECTID': 'no label', 'LOTE_URB': 'header label', 'NUM_PARTID': 'header label', 'MZ_URB': 'header label', 'DISTRITO': 'header label', 'TITULAR': 'header label', 'SECTORIZAC': 'header label', 'DIRECCION': 'header label', 'ORIGEN': 'header label', 'COD_CATAST': 'header label', 'AÃ‘O_TITUL': 'no label', 'NUM_TITULO': 'header label', 'USO': 'header label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_LOTES_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});