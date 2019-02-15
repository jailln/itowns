/* global itowns, document */
// # Planar (EPSG:3946) viewer

// Define projection that we will use (taken from https://epsg.io/3946, Proj4js section)
itowns.proj4.defs('EPSG:3946',
    '+proj=lcc +lat_1=45.25 +lat_2=46.75 +lat_0=46 +lon_0=3 +x_0=1700000 +y_0=5200000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs');

// Define geographic extent: CRS, min/max X, min/max Y
var extent = new itowns.Extent(
    'EPSG:3946',
    1837816.94334, 1847692.32501,
    5170036.4587, 5178412.82698);

// `viewerDiv` will contain iTowns' rendering area (`<canvas>`)
var viewerDiv = document.getElementById('viewerDiv');

// Since the elevation layer use color textures, specify min/max z which is in
// gray scale. Normally a multiplicative factor should allow to get the data at
// the right scale but it is not done by the Open Data Grand Lyon
config = {
    materialOptions: {
        useColorTextureElevation: true,
        colorTextureElevationMinZ: 0,
        colorTextureElevationMaxZ: 255,
    },
    disableSkirt: true,
};

// Instanciate PlanarView*
view = new itowns.PlanarView(viewerDiv, extent, config);
setupLoadingScreen(viewerDiv, view);

// Add an WMS imagery layer (see WMSProvider* for valid options)
view.addLayer({
    type: 'color',
    id: 'wms_imagery',
    updateStrategy: {
        type: itowns.STRATEGY_DICHOTOMY,
        options: {},
    },
    source: {
        extent: extent,
        name: 'Ortho2009_vue_ensemble_16cm_CC46',
        protocol: 'wms',
        url: 'https://download.data.grandlyon.com/wms/grandlyon',
        version: '1.3.0',
        projection: 'EPSG:3946',
        format: 'image/jpeg',
    },
});

// Add an WMS elevation layer (see WMSProvider* for valid options)
view.addLayer({
    id: 'wms_elevation',
    type: 'elevation',
    source: {
        extent: extent,
        url: 'https://download.data.grandlyon.com/wms/grandlyon',
        protocol: 'wms',
        name: 'MNT2012_Altitude_10m_CC46',
        projection: 'EPSG:3946',
        heightMapWidth: 256,
        format: 'image/jpeg',
    },
});

// Define default display date and and add it to ui element for editing display date
// warning: months starts at 0 in Date
const defaultDisplayDate = new Date(2000, 0, 2);
var editableDate = document.getElementById('dateEdit');
editableDate.textContent = defaultDisplayDate.toISOString();

// Create a temporal 3d-tiles Layer
// This layer gets its data from rict server
const $3dtilesTemporal = new itowns.GeometryLayer('3d-tiles-discrete-lod', new itowns.THREE.Group());
$3dtilesTemporal.name = '3d-tiles-temporal';
$3dtilesTemporal.url = 'http://rict.liris.cnrs.fr/UDVDemo/Data/tileset.json';
$3dtilesTemporal.protocol = '3d-tiles';
// This layer contains data which have temporal information. Setting this value
// to true will create a special material (TemporalMaterial) and use appropriate
// shaders
$3dtilesTemporal.TemporalExtension = true;
$3dtilesTemporal.displayDate = defaultDisplayDate;
$3dtilesTemporal.visible = true;

// Event for picking example.
itowns.View.prototype.addLayer.call(view, $3dtilesTemporal).then(
    function _() {
        window.addEventListener('mousemove', picking, false);
    });

// Callback for changing display date of 3d-tiles layer when it is changed in
// the ui element allowing to change display date
function changeDisplayDate() {
        var strDate = editableDate.textContent.toString();
        var date = new Date(strDate);
        $3dtilesTemporal.displayDate = date;
        view.notifyChange($3dtilesTemporal);
}

button = document.getElementById('dateButton');
button.onclick = changeDisplayDate;

// Camera
c = { coord: extent.center(), heading: -49.6, range: 6200, tilt: 17 };
itowns.CameraUtils.transformCameraToLookAtTarget(view, view.camera.camera3D, c);

// instanciate controls
// eslint-disable-next-line no-new
new itowns.PlanarControls(view, {});

var menuPlanar = new GuiTools('menuDiv', view, 300);

// Add the UI Debug
var d = new debug.Debug(view, menuPlanar.gui);
debug.createTileDebugUI(menuPlanar.gui, view, view.tileLayer, d);
debug.create3dTilesDebugUI(menuPlanar.gui, view, $3dtilesTemporal, d);

// Request redraw
view.notifyChange(view.camera.camera3D);

// Picking example - - - - - - - - - - -- - - - -- - - - -- - - - -- - - - -- - - - -- - - - -
// Refer to the doc here: https://github.com/MEPP-team/RICT/blob/master/Doc/iTowns/Doc.md#itowns-internal-organisation-of-3d-tiles-data
// to understand why this is needed.
function findBatchTableParent(object, i) {
    if (object.batchTable) {
        return object.batchTable;
    }
    else if (object.parent) {
        return findBatchTableParent(object.parent, ++i);
    } else {
        return undefined;
    }
}

function picking(event) {
    // Pick an object with batch id
    var htmlInfo = document.getElementById('info');
    htmlInfo.innerHTML = ' ';

    const intersects = view.pickObjectsAt(
        event,
        5,
        $3dtilesTemporal);

    for (var i = 0; i < intersects.length; i++) {
        var interAttributes = intersects[i].object.geometry.attributes;
        if (interAttributes) {
            if (interAttributes._BATCHID) {
                var face = intersects[i].face.a;
                var batchID = interAttributes._BATCHID.array[face];
                var batchTable = findBatchTableParent(intersects[i].object,0);

                // Print Batch id and batch table attributes in an ui element.
                htmlInfo.innerHTML +='<li><b> Batch id: </b>'+ batchID +'</li>';
                Object.keys(batchTable).map(function(objectKey) {
                    var value = batchTable[objectKey][batchID];
                    if (value) {
                        htmlInfo.innerHTML +='<li><b>' + objectKey.toString() + ': </b>'+ value.toString() +'</li>';
                    }
                    return true;
                });

                return;
            }
        }
    }
}
