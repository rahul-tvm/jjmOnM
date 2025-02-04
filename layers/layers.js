var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Panchayat_1 = new ol.format.GeoJSON();
var features_Panchayat_1 = format_Panchayat_1.readFeatures(json_Panchayat_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Panchayat_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Panchayat_1.addFeatures(features_Panchayat_1);
var lyr_Panchayat_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Panchayat_1, 
                style: style_Panchayat_1,
                interactive: true,
                title: '<img src="styles/legend/Panchayat_1.png" /> Panchayat'
            });
var format_JJM_PL_2 = new ol.format.GeoJSON();
var features_JJM_PL_2 = format_JJM_PL_2.readFeatures(json_JJM_PL_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JJM_PL_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JJM_PL_2.addFeatures(features_JJM_PL_2);
var lyr_JJM_PL_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JJM_PL_2, 
                style: style_JJM_PL_2,
                interactive: true,
                title: '<img src="styles/legend/JJM_PL_2.png" /> JJM_PL'
            });
var format_OLD_PL_3 = new ol.format.GeoJSON();
var features_OLD_PL_3 = format_OLD_PL_3.readFeatures(json_OLD_PL_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OLD_PL_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OLD_PL_3.addFeatures(features_OLD_PL_3);
var lyr_OLD_PL_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_OLD_PL_3, 
                style: style_OLD_PL_3,
                interactive: true,
                title: '<img src="styles/legend/OLD_PL_3.png" /> OLD_PL'
            });
var format_RESERVOIR_4 = new ol.format.GeoJSON();
var features_RESERVOIR_4 = format_RESERVOIR_4.readFeatures(json_RESERVOIR_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RESERVOIR_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RESERVOIR_4.addFeatures(features_RESERVOIR_4);
var lyr_RESERVOIR_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RESERVOIR_4, 
                style: style_RESERVOIR_4,
                interactive: true,
                title: '<img src="styles/legend/RESERVOIR_4.png" /> RESERVOIR'
            });
var format_WTPs_5 = new ol.format.GeoJSON();
var features_WTPs_5 = format_WTPs_5.readFeatures(json_WTPs_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WTPs_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WTPs_5.addFeatures(features_WTPs_5);
var lyr_WTPs_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WTPs_5, 
                style: style_WTPs_5,
                interactive: true,
                title: '<img src="styles/legend/WTPs_5.png" /> WTPs'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_Panchayat_1.setVisible(true);lyr_JJM_PL_2.setVisible(true);lyr_OLD_PL_3.setVisible(true);lyr_RESERVOIR_4.setVisible(true);lyr_WTPs_5.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_Panchayat_1,lyr_JJM_PL_2,lyr_OLD_PL_3,lyr_RESERVOIR_4,lyr_WTPs_5];
lyr_Panchayat_1.set('fieldAliases', {'DISTRICT': 'DISTRICT', 'panchayath': 'panchayath', 'blocks': 'blocks', 'municip': 'municip', 'AREA': 'AREA', 'AREA_SQ_KM': 'AREA_SQ_KM', 'LAC': 'LAC', 'layer': 'layer', 'path': 'path', });
lyr_JJM_PL_2.set('fieldAliases', {'gid': 'gid', '__gid': '__gid', 'region': 'region', 'circle': 'circle', 'division': 'division', 'panchayath': 'panchayath', 'scheme': 'scheme', 'diameter': 'diameter', 'material': 'material', 'type': 'type', 'comments': 'comments', 'length_km': 'length_km', 'scheme_typ': 'scheme_typ', 'district': 'district', 'date': 'date', 'pan_id': 'pan_id', 'dis_id': 'dis_id', 'section': 'section', 'id': 'id', 'layer': 'layer', 'path': 'path', });
lyr_OLD_PL_3.set('fieldAliases', {'uid': 'uid', 'scheme': 'scheme', 'Pipe_Type': 'Pipe_Type', 'pressure': 'pressure', 'pmpng_main': 'pmpng_main', 'Scheme_Nam': 'Scheme_Nam', 'Sub_Divisi': 'Sub_Divisi', 'Division': 'Division', 'Circle': 'Circle', 'Region': 'Region', 'yr_commsng': 'yr_commsng', 'remarks': 'remarks', 'Thickness': 'Thickness', 'Length': 'Length', 'Unq_code': 'Unq_code', 'diameter': 'diameter', 'OBJECTID': 'OBJECTID', 'Pipelin_ID': 'Pipelin_ID', 'Year_Lay': 'Year_Lay', 'SHAPE_Leng': 'SHAPE_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Section_1': 'Section_1', 'Remark': 'Remark', 'OBJECTID_1': 'OBJECTID_1', 'layer': 'layer', 'path': 'path', 'length_km': 'length_km', });
lyr_RESERVOIR_4.set('fieldAliases', {'uid': 'uid', 'wr_sy_schm': 'wr_sy_schm', 'urbn_rural': 'urbn_rural', 'rservr_typ': 'rservr_typ', 'sectn_ofce': 'sectn_ofce', 'sb_dn_ofce': 'sb_dn_ofce', 'divsn_ofce': 'divsn_ofce', 'crcle_ofce': 'crcle_ofce', 'region': 'region', 'name': 'name', 'capacity': 'capacity', 'yr_commsng': 'yr_commsng', 'photo1': 'photo1', 'photo2': 'photo2', 'remarks': 'remarks', 'Unq_code': 'Unq_code', });
lyr_WTPs_5.set('fieldAliases', {'uid': 'uid', 'wr_sy_schm': 'wr_sy_schm', 'urbn_rural': 'urbn_rural', 'sectn_ofce': 'sectn_ofce', 'sb_dn_ofce': 'sb_dn_ofce', 'divsn_ofce': 'divsn_ofce', 'crcle_ofce': 'crcle_ofce', 'region': 'region', 'name': 'name', 'quantity': 'quantity', 'capacity': 'capacity', 'clarifier': 'clarifier', 'filter_bed': 'filter_bed', 'population': 'population', 'yr_commsng': 'yr_commsng', 'photo1': 'photo1', 'photo2': 'photo2', 'remarks': 'remarks', 'Unq_code': 'Unq_code', 'Long': 'Long', });
lyr_Panchayat_1.set('fieldImages', {'DISTRICT': 'TextEdit', 'panchayath': 'TextEdit', 'blocks': 'TextEdit', 'municip': 'TextEdit', 'AREA': 'TextEdit', 'AREA_SQ_KM': 'TextEdit', 'LAC': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_JJM_PL_2.set('fieldImages', {'gid': 'TextEdit', '__gid': 'TextEdit', 'region': 'TextEdit', 'circle': 'TextEdit', 'division': 'TextEdit', 'panchayath': 'TextEdit', 'scheme': 'TextEdit', 'diameter': 'TextEdit', 'material': 'TextEdit', 'type': 'TextEdit', 'comments': 'TextEdit', 'length_km': 'TextEdit', 'scheme_typ': 'TextEdit', 'district': 'TextEdit', 'date': 'DateTime', 'pan_id': 'TextEdit', 'dis_id': 'TextEdit', 'section': 'TextEdit', 'id': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_OLD_PL_3.set('fieldImages', {'uid': 'TextEdit', 'scheme': 'TextEdit', 'Pipe_Type': 'TextEdit', 'pressure': 'TextEdit', 'pmpng_main': 'TextEdit', 'Scheme_Nam': 'TextEdit', 'Sub_Divisi': 'TextEdit', 'Division': 'TextEdit', 'Circle': 'TextEdit', 'Region': 'TextEdit', 'yr_commsng': 'TextEdit', 'remarks': 'TextEdit', 'Thickness': 'TextEdit', 'Length': 'TextEdit', 'Unq_code': 'TextEdit', 'diameter': 'TextEdit', 'OBJECTID': 'Range', 'Pipelin_ID': 'TextEdit', 'Year_Lay': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Section_1': 'TextEdit', 'Remark': 'TextEdit', 'OBJECTID_1': 'Range', 'layer': 'TextEdit', 'path': 'TextEdit', 'length_km': 'TextEdit', });
lyr_RESERVOIR_4.set('fieldImages', {'uid': 'TextEdit', 'wr_sy_schm': 'TextEdit', 'urbn_rural': 'TextEdit', 'rservr_typ': 'TextEdit', 'sectn_ofce': 'TextEdit', 'sb_dn_ofce': 'TextEdit', 'divsn_ofce': 'TextEdit', 'crcle_ofce': 'TextEdit', 'region': 'TextEdit', 'name': 'TextEdit', 'capacity': 'TextEdit', 'yr_commsng': 'TextEdit', 'photo1': 'TextEdit', 'photo2': 'TextEdit', 'remarks': 'TextEdit', 'Unq_code': 'TextEdit', });
lyr_WTPs_5.set('fieldImages', {'uid': 'TextEdit', 'wr_sy_schm': 'TextEdit', 'urbn_rural': 'TextEdit', 'sectn_ofce': 'TextEdit', 'sb_dn_ofce': 'TextEdit', 'divsn_ofce': 'TextEdit', 'crcle_ofce': 'TextEdit', 'region': 'TextEdit', 'name': 'TextEdit', 'quantity': 'TextEdit', 'capacity': 'TextEdit', 'clarifier': 'TextEdit', 'filter_bed': 'TextEdit', 'population': 'TextEdit', 'yr_commsng': 'TextEdit', 'photo1': 'TextEdit', 'photo2': 'TextEdit', 'remarks': 'TextEdit', 'Unq_code': 'TextEdit', 'Long': 'TextEdit', });
lyr_Panchayat_1.set('fieldLabels', {'DISTRICT': 'no label', 'panchayath': 'no label', 'blocks': 'no label', 'municip': 'no label', 'AREA': 'no label', 'AREA_SQ_KM': 'no label', 'LAC': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_JJM_PL_2.set('fieldLabels', {'gid': 'no label', '__gid': 'no label', 'region': 'no label', 'circle': 'no label', 'division': 'no label', 'panchayath': 'inline label', 'scheme': 'inline label', 'diameter': 'inline label', 'material': 'inline label', 'type': 'no label', 'comments': 'no label', 'length_km': 'no label', 'scheme_typ': 'no label', 'district': 'no label', 'date': 'no label', 'pan_id': 'no label', 'dis_id': 'no label', 'section': 'no label', 'id': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_OLD_PL_3.set('fieldLabels', {'uid': 'no label', 'scheme': 'no label', 'Pipe_Type': 'no label', 'pressure': 'no label', 'pmpng_main': 'no label', 'Scheme_Nam': 'no label', 'Sub_Divisi': 'no label', 'Division': 'no label', 'Circle': 'no label', 'Region': 'no label', 'yr_commsng': 'no label', 'remarks': 'no label', 'Thickness': 'no label', 'Length': 'no label', 'Unq_code': 'no label', 'diameter': 'no label', 'OBJECTID': 'no label', 'Pipelin_ID': 'no label', 'Year_Lay': 'no label', 'SHAPE_Leng': 'inline label', 'Shape_Le_1': 'no label', 'Section_1': 'no label', 'Remark': 'no label', 'OBJECTID_1': 'no label', 'layer': 'inline label', 'path': 'no label', 'length_km': 'header label', });
lyr_RESERVOIR_4.set('fieldLabels', {'uid': 'no label', 'wr_sy_schm': 'no label', 'urbn_rural': 'no label', 'rservr_typ': 'no label', 'sectn_ofce': 'no label', 'sb_dn_ofce': 'no label', 'divsn_ofce': 'no label', 'crcle_ofce': 'no label', 'region': 'no label', 'name': 'no label', 'capacity': 'no label', 'yr_commsng': 'no label', 'photo1': 'no label', 'photo2': 'no label', 'remarks': 'no label', 'Unq_code': 'no label', });
lyr_WTPs_5.set('fieldLabels', {'uid': 'no label', 'wr_sy_schm': 'no label', 'urbn_rural': 'no label', 'sectn_ofce': 'no label', 'sb_dn_ofce': 'inline label', 'divsn_ofce': 'header label', 'crcle_ofce': 'no label', 'region': 'no label', 'name': 'no label', 'quantity': 'no label', 'capacity': 'no label', 'clarifier': 'no label', 'filter_bed': 'no label', 'population': 'no label', 'yr_commsng': 'no label', 'photo1': 'no label', 'photo2': 'no label', 'remarks': 'no label', 'Unq_code': 'no label', 'Long': 'no label', });
lyr_WTPs_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});