<a name="2.41.0"></a>
# [2.41.0](https://github.com/iTowns/itowns/compare/v2.40.0...v2.41.0) (2023-10-11)


### Features

* **3dtiles:** add method to enable ktx2 loader for gltf ([a260109](https://github.com/iTowns/itowns/commit/a260109))
* **points:** Add attenuated mode for points size rendering ([6db3c5e](https://github.com/iTowns/itowns/commit/6db3c5e))
* **points:** Add option to render points in shape square or circle ([363f137](https://github.com/iTowns/itowns/commit/363f137))
* **VectorTile:** add coordProj in pushCoordinatesValues() to get access to position when using style.base_altitude. ([451e5d6](https://github.com/iTowns/itowns/commit/451e5d6))


### Bug Fixes

* **example:** fix example Gpx 3d and functional test ([781a47d](https://github.com/iTowns/itowns/commit/781a47d))
* fix Glob error when lauching npm install on windows ([e56bf65](https://github.com/iTowns/itowns/commit/e56bf65))
* **picking:** Fix point reference of picking ([#2192](https://github.com/iTowns/itowns/issues/2192)) ([1cd4db9](https://github.com/iTowns/itowns/commit/1cd4db9))


### Examples

* **VectorTile:** new example using official mapbox flux, showing buildings placed at ground level. ([cefebce](https://github.com/iTowns/itowns/commit/cefebce))


### Code Refactoring

* **Feature:** Feature.pushCoordinates() change in arguments order ([44e9532](https://github.com/iTowns/itowns/commit/44e9532))
* **VectorTile:** Code clean up ([284c46b](https://github.com/iTowns/itowns/commit/284c46b))
* **View:** Deprecate WebGL 1.0 support ([1cf7075](https://github.com/iTowns/itowns/commit/1cf7075))


### Workflow and chores

* release v2.41.0 ([e829036](https://github.com/iTowns/itowns/commit/e829036))
* add commit message checker ([9370312](https://github.com/iTowns/itowns/commit/9370312))
* **integration:** add release commit to message check ([b88de83](https://github.com/iTowns/itowns/commit/b88de83))
* separate build and test jobs ([c3bc003](https://github.com/iTowns/itowns/commit/c3bc003))


### Documentation

* **CONTRIBUTING.md:** add commits type list ([b91404a](https://github.com/iTowns/itowns/commit/b91404a))
* **CONTRIBUTING.md:** fix typo ([ac6c328](https://github.com/iTowns/itowns/commit/ac6c328))
* **WebGL1:** Remove tutorial "Getting Started - WebGL 1.0/2.0" ([57f7b59](https://github.com/iTowns/itowns/commit/57f7b59))


### Others

* test ([3b8b143](https://github.com/iTowns/itowns/commit/3b8b143))
* update to node 18 for npm provenance ([0d901cc](https://github.com/iTowns/itowns/commit/0d901cc))
* wip provenance ([df931d2](https://github.com/iTowns/itowns/commit/df931d2))


### BREAKING CHANGES

* **VectorTile:** Feature.pushCoordinatesValues() signature change from pushCoordinatesValues(feature, long, lat, normal) to pushCoordinatesValues(feature, coordIn, coordProj)
* **Feature:** Feature.pushCoordinates() change in arguments order from pushCoordinates(coordIn, feature) to pushCoordinates(feature, coordIn)



<a name="2.40.0"></a>
# [2.40.0](https://github.com/iTowns/itowns/compare/v2.39.0...v2.40.0) (2023-07-31)


### Features

* **3dtiles:** add classification for rendering pointscloud ([b924cd7](https://github.com/iTowns/itowns/commit/b924cd7))
* **3DTiles:** add style API + C3DTFeature ([864268a](https://github.com/iTowns/itowns/commit/864268a))
* **3dtiles:** add support for 3d tiles from cesium ion server ([e9793a3](https://github.com/iTowns/itowns/commit/e9793a3))
* **Coordinates:** Add a setCrs method ([606b6b8](https://github.com/iTowns/itowns/commit/606b6b8))
* **elevationLayers:** Add config.clampValues for clamping values of the elevation dataset ([1985078](https://github.com/iTowns/itowns/commit/1985078))
* **instancing:** use instancing for large number of 3d objects ([619a611](https://github.com/iTowns/itowns/commit/619a611))
* **LabelLayer:** add option to clamp labels to terrain. ([f46ca97](https://github.com/iTowns/itowns/commit/f46ca97))
* **Parser:** detect if original source have elevation data. ([17aaa8b](https://github.com/iTowns/itowns/commit/17aaa8b))
* **picking:** Add distance and point position to returned object by points picking ([97a5e6a](https://github.com/iTowns/itowns/commit/97a5e6a))
* **Style:** add icon.color and icon.opacity ([4fd5dc4](https://github.com/iTowns/itowns/commit/4fd5dc4))
* **typescript:** Add devDeps on three's definitions ([2fbbcc3](https://github.com/iTowns/itowns/commit/2fbbcc3))
* **typescript:** Add tsconfig.json configuration ([3c8c5f5](https://github.com/iTowns/itowns/commit/3c8c5f5))
* **typescript:** Add typescript dependency ([71a2370](https://github.com/iTowns/itowns/commit/71a2370))
* **view:** allow to pass an array of layers for picking ([9b6d59f](https://github.com/iTowns/itowns/commit/9b6d59f))
* **WMTS:** Support vendor specific parameters ([cff042c](https://github.com/iTowns/itowns/commit/cff042c))
* **XbilParser:** gestion nodata in elevation layer (elevation set to 0) ([20075b8](https://github.com/iTowns/itowns/commit/20075b8))


### Bug Fixes

* **3dtiles:** fix batchtable reading ([b245301](https://github.com/iTowns/itowns/commit/b245301))
* **3dtiles:** improve 3D Tiles cache cleaning ([284be24](https://github.com/iTowns/itowns/commit/284be24))
* **controls:** keyboard events are now on the domElement on the view instead of window ([d5c80f4](https://github.com/iTowns/itowns/commit/d5c80f4))
* **CRS:** more robust parameter tests ([a2e0f5c](https://github.com/iTowns/itowns/commit/a2e0f5c))
* **Debug:** fix 3dTiles bbox visibility ([cd8d106](https://github.com/iTowns/itowns/commit/cd8d106))
* **example:** change config file linked with the clampValues config ([2a4e911](https://github.com/iTowns/itowns/commit/2a4e911))
* **example:** invert order of the ElevationLayer addition when using 2 ([c6800c9](https://github.com/iTowns/itowns/commit/c6800c9))
* **examples:** Fix  cesium ion token ([7f86d26](https://github.com/iTowns/itowns/commit/7f86d26))
* **examples:** Replace Lyon's deprecated MNT sources ([7490590](https://github.com/iTowns/itowns/commit/7490590))
* **examples:** Replace Lyon's deprecated Ortho2009 sources ([8dbb3d6](https://github.com/iTowns/itowns/commit/8dbb3d6))
* **examples:** Update Lyon bus source options ([0881b2d](https://github.com/iTowns/itowns/commit/0881b2d))
* **Feature2Texture:** prevent empty style ([ab5713a](https://github.com/iTowns/itowns/commit/ab5713a))
* **GeoJsonParser:** fix firstCoordinates when empty ([e54f352](https://github.com/iTowns/itowns/commit/e54f352))
* **GlobeLayer, PlanarLayer:** fix too much tiles subdivision due to wrong param name ([c726f25](https://github.com/iTowns/itowns/commit/c726f25))
* **Label:** catch no data elevation. ([e1e3b1d](https://github.com/iTowns/itowns/commit/e1e3b1d))
* **ObjectRemovalHelper:** linked objects are not removed. ([05a0768](https://github.com/iTowns/itowns/commit/05a0768))
* **Parser:** detect if original source have elevation data with multi-features. ([9d509da](https://github.com/iTowns/itowns/commit/9d509da))
* **Source:** Validate crs in Source constructor ([195bef3](https://github.com/iTowns/itowns/commit/195bef3))
* **typescript:** Add annotation to unblock typechecking ([25619f3](https://github.com/iTowns/itowns/commit/25619f3))
* **view:** improve resource disposal by removing textures and allow to remove cache ([2497d00](https://github.com/iTowns/itowns/commit/2497d00))
* **view:** improve view disposal by removing resize listener ([6f4ec34](https://github.com/iTowns/itowns/commit/6f4ec34))


### Performance Improvements

* **LabelLayer:** add automatic label filtering to reduce rendering calls. ([e7dde10](https://github.com/iTowns/itowns/commit/e7dde10))


### Examples

* **3dtiles:** add an example to display OSM buildings from cesium ion server ([9e9acb0](https://github.com/iTowns/itowns/commit/9e9acb0))
* **3dtiles:** rename some 3D tiles examples ([e032bf2](https://github.com/iTowns/itowns/commit/e032bf2))
* **3dtiles:** update 3d tiles dataset on 3dtiles_25d example to a textured one ([15b438c](https://github.com/iTowns/itowns/commit/15b438c))
* **Collada:** clean and update ([08dbd3d](https://github.com/iTowns/itowns/commit/08dbd3d))
* **potree_25d_map:** declare map projection code ([604b6ac](https://github.com/iTowns/itowns/commit/604b6ac))
* **SourceFileGeoJson:** geojson raster file -> add new example for planarView ([2d6abcd](https://github.com/iTowns/itowns/commit/2d6abcd))
* **SourceFileKML:** add new kml raster file from official source ([58734ee](https://github.com/iTowns/itowns/commit/58734ee))


### Code Refactoring

* **c3DEngine:** deleting the unused method getUniqueThreejsLayer. ([9664006](https://github.com/iTowns/itowns/commit/9664006))
* **example:** update with new gestion of Style ([955722c](https://github.com/iTowns/itowns/commit/955722c))
* **Extent:** move calculation of Extent intersection to static Extent.intersectsExtent(ExtentA,ExtentB) ([4ca93a9](https://github.com/iTowns/itowns/commit/4ca93a9))
* **FeatureGeometryLayer:** cleanup -> remove extra line break ([4cef6ba](https://github.com/iTowns/itowns/commit/4cef6ba))
* **FeatureToolTip:** update for official kml and geojson flux ([6e2a98c](https://github.com/iTowns/itowns/commit/6e2a98c))
* **GlobeControls:** remove three layer for helpers. ([a1a8391](https://github.com/iTowns/itowns/commit/a1a8391))
* **GlobeLayer:** pass in static the method horizonCulling. ([18af800](https://github.com/iTowns/itowns/commit/18af800))
* **GlobeView:** move sun light, from tileLayer to main scene. ([68b78f0](https://github.com/iTowns/itowns/commit/68b78f0))
* **LabeLayer:** change label node culling mechanism. ([b833744](https://github.com/iTowns/itowns/commit/b833744))
* **LabelLayer:** apply architecture node and simplify process. ([aff7964](https://github.com/iTowns/itowns/commit/aff7964))
* **Label:** optimize elevation update. ([7492c8e](https://github.com/iTowns/itowns/commit/7492c8e))
* **Layer:** instanciate new Style at Layer instead of at examples ([d26f29e](https://github.com/iTowns/itowns/commit/d26f29e))
* **LayerUpdateState:** add hasFinished method. ([3767b0a](https://github.com/iTowns/itowns/commit/3767b0a))
* **OBB:** remove OBB from node's children. ([0440bb6](https://github.com/iTowns/itowns/commit/0440bb6))
* **pickFeaturesAt:** avoid picking twice the same featureGeometry ([d5e5f7e](https://github.com/iTowns/itowns/commit/d5e5f7e))
* **RasterTile:** emit event when raster elevation changed. ([ea52ee1](https://github.com/iTowns/itowns/commit/ea52ee1))
* **Style:** instantiate canvas when no document ([b20916f](https://github.com/iTowns/itowns/commit/b20916f))
* **test:** add a npm run test in develpment mode -> run test-dev ([9ca1d5f](https://github.com/iTowns/itowns/commit/9ca1d5f))
* **test:** commenting failing test in test/unit/CameraUtils ([b39edf8](https://github.com/iTowns/itowns/commit/b39edf8))
* **test:** handling assert fail messages in tests ([1131abe](https://github.com/iTowns/itowns/commit/1131abe))
* **test:** handling fail messages in test with promise ([48b9750](https://github.com/iTowns/itowns/commit/48b9750))
* **THREE:** Remove Three.js layers using. ([971f175](https://github.com/iTowns/itowns/commit/971f175))
* **TileMesh:** add change visibility event. ([90ada88](https://github.com/iTowns/itowns/commit/90ada88))
* **TileMesh:** new structuring of the data linked to the node. ([05eb368](https://github.com/iTowns/itowns/commit/05eb368))
* **view:** rename pickCoordinates to pickTerrainCoordinates ([9c701db](https://github.com/iTowns/itowns/commit/9c701db))


### Workflow and chores

* release v2.40.0 ([532adb9](https://github.com/iTowns/itowns/commit/532adb9))
* add coding rules ([1ec89f2](https://github.com/iTowns/itowns/commit/1ec89f2))
* **contributors:** update contributors and maintainers ([b5123f5](https://github.com/iTowns/itowns/commit/b5123f5))
* **deployment:** prevent deploying potree bundle since it is not used yet ([8f7ae1a](https://github.com/iTowns/itowns/commit/8f7ae1a))
* **deps-dev:** bump webpack from 5.72.1 to 5.76.0 ([0bf309b](https://github.com/iTowns/itowns/commit/0bf309b))
* **deps-dev:** bump word-wrap from 1.2.3 to 1.2.5 ([64794b1](https://github.com/iTowns/itowns/commit/64794b1))
* **deps:** bump dns-packet from 5.3.1 to 5.4.0 ([96987fd](https://github.com/iTowns/itowns/commit/96987fd))
* don't watch git hash modification ([f19973e](https://github.com/iTowns/itowns/commit/f19973e))
* **examples:** update draco to work with THREE r153 ([00b6db5](https://github.com/iTowns/itowns/commit/00b6db5))
* **integration:** differentiate deployment for LTS and current version ([470e306](https://github.com/iTowns/itowns/commit/470e306))
* **integration:** fix next version publication ([fdb4813](https://github.com/iTowns/itowns/commit/fdb4813))
* **integration:** publish latest and next npm packages ([f8996b3](https://github.com/iTowns/itowns/commit/f8996b3))
* **integration:** update actions in integration script ([c83bfcf](https://github.com/iTowns/itowns/commit/c83bfcf))
* replace variable declaration by const or let ([36ce64d](https://github.com/iTowns/itowns/commit/36ce64d))
* update packages ([a841343](https://github.com/iTowns/itowns/commit/a841343))
* update three to 0.153.0 ([728f473](https://github.com/iTowns/itowns/commit/728f473))
* update three to r154 ([85c9b78](https://github.com/iTowns/itowns/commit/85c9b78))


### Documentation

* **3dtiles:** add documentation for 3d tiles source ([eb7c8ca](https://github.com/iTowns/itowns/commit/eb7c8ca))
* add coding conventions and other rules for PR. ([5001c8d](https://github.com/iTowns/itowns/commit/5001c8d))
* **examples:** Add documentation on some test cases ([cba2146](https://github.com/iTowns/itowns/commit/cba2146))
* **layers:** improve raster layers doc ([c53436a](https://github.com/iTowns/itowns/commit/c53436a))
* **style:** JSDoc for StyleOptions ([3adbf39](https://github.com/iTowns/itowns/commit/3adbf39))
* **tutorials:** fix tutorials source API keys ([0c10d82](https://github.com/iTowns/itowns/commit/0c10d82))
* **tutorials:** update with new gestion of Style ([d76f92f](https://github.com/iTowns/itowns/commit/d76f92f))
* **WMTSSource:** Change the link and the extend to TMSSource ([23c16d2](https://github.com/iTowns/itowns/commit/23c16d2))


### Tests

* **3dtiles:** test 3d tiles sources and 3d tiles ion example ([47db4c7](https://github.com/iTowns/itowns/commit/47db4c7))
* **examples:** add new functional tests ([8e14fe8](https://github.com/iTowns/itowns/commit/8e14fe8))
* **LabelLayer:** add and modify LabelLayer tests. ([a8dfb36](https://github.com/iTowns/itowns/commit/a8dfb36))
* **style:** add tests for applyToHTML() and getImage() ([8e04cd8](https://github.com/iTowns/itowns/commit/8e04cd8))


### Others

* add name to contributors ([2f81334](https://github.com/iTowns/itowns/commit/2f81334))
* fix(3DTiles) addEventListener onTileContentLoaded constructor ([6f9a9d2](https://github.com/iTowns/itowns/commit/6f9a9d2))
* remove camera argument from CameraRig ([2af65b7](https://github.com/iTowns/itowns/commit/2af65b7))
* feat(3DTiles) add C3DTILES_LAYER_EVENTS.ON_TILE_REQUESTED ([ec837c7](https://github.com/iTowns/itowns/commit/ec837c7))
* fix(3DTiles) tileId == 0 can update style ([11582c9](https://github.com/iTowns/itowns/commit/11582c9))
* feat(Widget) add C3DTilesStyle widget ([7862bc1](https://github.com/iTowns/itowns/commit/7862bc1))
* feat(planarcontrols) : add enabled attribute ([f13a060](https://github.com/iTowns/itowns/commit/f13a060))
* refact(Widget) expose Widget in API ([ca77fc8](https://github.com/iTowns/itowns/commit/ca77fc8))


### BREAKING CHANGES

* **view:** View.pickCoordinates has been renamed to View.pickTerrainCoordinates and returns the coordinates in the referenceCrs of the view instead of in the crs of the tiledLayer extent.



<a name="2.39.0"></a>
# [2.39.0](https://github.com/iTowns/itowns/compare/v2.38.2...v2.39.0) (2023-01-04)


### Features

* **3dtiles:** add support for binary batch table ([47325ab](https://github.com/iTowns/itowns/commit/47325ab))
* add a npm build task creating a non minified version ([48a24fa](https://github.com/iTowns/itowns/commit/48a24fa))
* **debug:** add altitude to displayed coordinates. ([e1fea9f](https://github.com/iTowns/itowns/commit/e1fea9f))
* **globeControls:** add configuration parameters and documentation ([cdd865c](https://github.com/iTowns/itowns/commit/cdd865c))
* **globeView:** allow to configure globeControls when creating a globeView ([821e522](https://github.com/iTowns/itowns/commit/821e522))


### Bug Fixes

* **3dtiles:** fix and document 3d tiles material overriding ([8ade709](https://github.com/iTowns/itowns/commit/8ade709))
* **3dtiles:** fix layer opacity and visibility change for 3d tiles pnts ([059fe5e](https://github.com/iTowns/itowns/commit/059fe5e))
* **3dtiles:** handle tilesets with cesium specific uniforms in shaders ([04f8b40](https://github.com/iTowns/itowns/commit/04f8b40))
* **3dtiles:** use correct batch table constructor for pnts tiles ([e1dbd63](https://github.com/iTowns/itowns/commit/e1dbd63))
* change THREE.Math to THREE.MathUtils ([826b5bd](https://github.com/iTowns/itowns/commit/826b5bd))
* **gltf:** fix parsing of khr_binary_extension in gltf 1.0 files ([2bf9d2d](https://github.com/iTowns/itowns/commit/2bf9d2d))
* **LayeredMaterial:** fix opacity when initialized to 0 ([deac41e](https://github.com/iTowns/itowns/commit/deac41e))
* **picking:** fix picking on multiple layers ([5c2f578](https://github.com/iTowns/itowns/commit/5c2f578))
* **Scheduler:** replace url subdomains alternatives ([91fd9ec](https://github.com/iTowns/itowns/commit/91fd9ec))
* **view:** fix view resize when width or height is 0 ([dbd9ee3](https://github.com/iTowns/itowns/commit/dbd9ee3))


### Performance Improvements

* **demutils:** texture data read optimization in elevation measurement ([9ee991c](https://github.com/iTowns/itowns/commit/9ee991c))
* **picking:** don't pick atmosphere layer ([069b2dd](https://github.com/iTowns/itowns/commit/069b2dd))


### Examples

* **3dtiles_25d:** change data url ([52a412f](https://github.com/iTowns/itowns/commit/52a412f))
* **Camera animation:** cleanup example code ([2bfe4e6](https://github.com/iTowns/itowns/commit/2bfe4e6))
* **GuiTools:** fix opacity slider by adding step ([3b205bc](https://github.com/iTowns/itowns/commit/3b205bc))


### Code Refactoring

* **feature:** use feature crs property for instance center property. ([e455bdb](https://github.com/iTowns/itowns/commit/e455bdb))


### Workflow and chores

* release v2.39.0 ([46f8c38](https://github.com/iTowns/itowns/commit/46f8c38))
* add a script to start an https local session with webpack ([e99bf15](https://github.com/iTowns/itowns/commit/e99bf15))
* **deps:** bump loader-utils from 2.0.2 to 2.0.3 ([fd0f01b](https://github.com/iTowns/itowns/commit/fd0f01b))
* **deps:** bump loader-utils from 2.0.3 to 2.0.4 ([cccacae](https://github.com/iTowns/itowns/commit/cccacae))
* **deps:** bump terser from 5.13.1 to 5.14.2 ([7134b26](https://github.com/iTowns/itowns/commit/7134b26))
* **integration:** add option to launch integration workflow manually ([db05ed6](https://github.com/iTowns/itowns/commit/db05ed6))
* **integration:** update potree repository ([39fbdd7](https://github.com/iTowns/itowns/commit/39fbdd7))
* up chalk to 5.0.1 ([1a30d66](https://github.com/iTowns/itowns/commit/1a30d66))
* update CONTRIBUTORS.md ([ba33056](https://github.com/iTowns/itowns/commit/ba33056))
* update packages. ([3dac8b9](https://github.com/iTowns/itowns/commit/3dac8b9))


### Documentation

* **RasterTile:** fix faulty link ([7cf4fcf](https://github.com/iTowns/itowns/commit/7cf4fcf))
* **tutorials:** Improve tutorial and add two tutorials for 3D tiles ([3063925](https://github.com/iTowns/itowns/commit/3063925))


### Tests

* **3dtiles:** add 3D Tiles batch table parsing tests ([f3bd6c7](https://github.com/iTowns/itowns/commit/f3bd6c7))


### Others

* Typo in the readme redirecting to a 404 error ([04122a8](https://github.com/iTowns/itowns/commit/04122a8))
* fix (wfs, wms, wmts): support urls ending with or without ? character ([f44dfb2](https://github.com/iTowns/itowns/commit/f44dfb2))
* example(MNS) ([2f9d558](https://github.com/iTowns/itowns/commit/2f9d558))
* **Feature2Texture:** prevent drawing points if they lack style ([5706e6f](https://github.com/iTowns/itowns/commit/5706e6f))
* update three.js to 0.146.0 ([55e7016](https://github.com/iTowns/itowns/commit/55e7016))


### BREAKING CHANGES

* **3dtiles:** `C3DTBatchTable` constructor signature has changed from
C3DTBatchTable(buffer, binaryLength, batchLength, registeredExtensions) to
C3DTBatchTable(buffer, jsonLength, binaryLength, batchLength, registeredExtensions)



<a name="2.38.2"></a>
## [2.38.2](https://github.com/iTowns/itowns/compare/v2.38.1...v2.38.2) (2022-05-11)


### Features

* **View:** Add option viewer to enable/disable focus on start. ([88d7c93](https://github.com/iTowns/itowns/commit/88d7c93))


### Bug Fixes

* **Minimap:** remove focus on minimap, and focus back on view ([e585b42](https://github.com/iTowns/itowns/commit/e585b42))


### Workflow and chores

* release v2.38.2 ([6c05281](https://github.com/iTowns/itowns/commit/6c05281))



<a name="2.38.1"></a>
## [2.38.1](https://github.com/iTowns/itowns/compare/v2.38.0...v2.38.1) (2022-04-14)


### Examples

* **Navigation:** fix addButton method call ([c53ae71](https://github.com/iTowns/itowns/commit/c53ae71))


### Workflow and chores

* release v2.38.1 ([3c3f041](https://github.com/iTowns/itowns/commit/3c3f041))



<a name="2.38.0"></a>
# [2.38.0](https://github.com/iTowns/itowns/compare/v2.37.0...v2.38.0) (2022-04-13)


### Features

* **FeatureGeometryLayer:** introduce FeatureMesh, they are added to layer.object3d. ([0d777ce](https://github.com/iTowns/itowns/commit/0d777ce))
* **Widgets:** add a searchbar widget ([164b6ee](https://github.com/iTowns/itowns/commit/164b6ee))
* **Widgets:** add a widget to display a scale ([d3a0154](https://github.com/iTowns/itowns/commit/d3a0154))
* **Widgets:** add show and hide methods ([59ac32c](https://github.com/iTowns/itowns/commit/59ac32c))
* **widgets:** Navigation tooltips can be parametrized ([094803f](https://github.com/iTowns/itowns/commit/094803f))
* **Widgets:** placeholder for searchbar can be modified ([9bd81ce](https://github.com/iTowns/itowns/commit/9bd81ce))


### Bug Fixes

* **Feature2Mesh:** fix wrong computing of clockwise polygon. ([bad5e34](https://github.com/iTowns/itowns/commit/bad5e34))
* **GeoidLayer:** transformation error on tileMesh. ([472e39c](https://github.com/iTowns/itowns/commit/472e39c))
* **parser:** GeoJsonParser add legacy identifier to fct readCRS() ([a0195c6](https://github.com/iTowns/itowns/commit/a0195c6))
* **VectorTileParser:** clock wise polygon wasn't calculated. ([135ee7a](https://github.com/iTowns/itowns/commit/135ee7a))
* **View:** fix pickCoordinates undefined parameter ([0ec49f4](https://github.com/iTowns/itowns/commit/0ec49f4))
* **Widgets:** fix focus policy and event propagation on widgets ([7775a04](https://github.com/iTowns/itowns/commit/7775a04))
* **Widgets:** fix in Navigation css ([a85f8b4](https://github.com/iTowns/itowns/commit/a85f8b4))


### Examples

* change view source button style ([e593237](https://github.com/iTowns/itowns/commit/e593237))
* **FeatureGeometryLayer:** add vector tile to 3d object. ([53a42a6](https://github.com/iTowns/itowns/commit/53a42a6))
* **view 3d:** updates on widgets ([30bee5f](https://github.com/iTowns/itowns/commit/30bee5f))
* **Widgets:** use minimap widget in view 3D example ([5042ba7](https://github.com/iTowns/itowns/commit/5042ba7))


### Code Refactoring

* **Feature:** move properties to private fields. ([02604b9](https://github.com/iTowns/itowns/commit/02604b9))
* **Feature:** simplify normals data. ([0914834](https://github.com/iTowns/itowns/commit/0914834))
* **GeometryLayer:** reference to material properties from Layer properties. ([23a0269](https://github.com/iTowns/itowns/commit/23a0269))
* **label:** render only object with labels. ([c317a8a](https://github.com/iTowns/itowns/commit/c317a8a))
* **MainLoop:** use class for MainLoop. ([25a48fd](https://github.com/iTowns/itowns/commit/25a48fd))
* **PlanarControls:** change focus policy ([99fadc0](https://github.com/iTowns/itowns/commit/99fadc0))
* **view_3d_map:** simplify example ([3786dcf](https://github.com/iTowns/itowns/commit/3786dcf))
* **View:** move View properties to private fields. ([51f5508](https://github.com/iTowns/itowns/commit/51f5508))
* **Widgets:** add onClick property in Navigation ([8d9f69e](https://github.com/iTowns/itowns/commit/8d9f69e))
* **Widgets:** simplify Navigation usage ([7c2bc89](https://github.com/iTowns/itowns/commit/7c2bc89))


### Workflow and chores

* release v2.38.0 ([05508b8](https://github.com/iTowns/itowns/commit/05508b8))
* add support ecma 2022 ([25080d9](https://github.com/iTowns/itowns/commit/25080d9))
* **deps:** bump deps to fix security vulnerability. ([1db1ae7](https://github.com/iTowns/itowns/commit/1db1ae7))
* **deps:** bump minimist from 1.2.5 to 1.2.6 ([09e047a](https://github.com/iTowns/itowns/commit/09e047a))
* **deps:** bump node-forge from 1.2.1 to 1.3.0 ([e536532](https://github.com/iTowns/itowns/commit/e536532))
* **submodule:** use submodule for widgets. ([44cc7d0](https://github.com/iTowns/itowns/commit/44cc7d0))
* update packages. ([e19809f](https://github.com/iTowns/itowns/commit/e19809f))


### Documentation

* **core:** Add doc for local execution ([faf58be](https://github.com/iTowns/itowns/commit/faf58be))
* **Widgets:** specify GlobeView support for navigation ([c209fdc](https://github.com/iTowns/itowns/commit/c209fdc))
* **Widgets:** specify resources needed to use widgets ([b65c081](https://github.com/iTowns/itowns/commit/b65c081))


### Tests

* **Feature2Mesh:** add test to calculate the difference with and without proj4. ([1527c64](https://github.com/iTowns/itowns/commit/1527c64))
* **GeoidLayer:** remove comment. ([0ca50fc](https://github.com/iTowns/itowns/commit/0ca50fc))



<a name="2.37.0"></a>
# [2.37.0](https://github.com/iTowns/itowns/compare/v2.36.2...v2.37.0) (2022-02-08)


### Features

* **Geoid:** add support for geoid heights ([38569f6](https://github.com/iTowns/itowns/commit/38569f6))
* **Parser:** add parsers for GTX, ISG and GDF file formats ([a55b154](https://github.com/iTowns/itowns/commit/a55b154))
* **View:** add a method to pick world coordinates ([91ccfe3](https://github.com/iTowns/itowns/commit/91ccfe3))
* **View:** add support for ortho camera in getScale method ([06eb805](https://github.com/iTowns/itowns/commit/06eb805))
* **View:** dispatch an event when camera is moved ([37cfb90](https://github.com/iTowns/itowns/commit/37cfb90))
* **Widget:** add a minimap widget ([6d82c74](https://github.com/iTowns/itowns/commit/6d82c74))


### Bug Fixes

* **GlobeControl:** stop damping when launching new animation ([dad7641](https://github.com/iTowns/itowns/commit/dad7641))
* **test:** fetch local laz files behind proxy. ([b732c0a](https://github.com/iTowns/itowns/commit/b732c0a))
* **View:** fix picking radius with polygons ([b7be8e9](https://github.com/iTowns/itowns/commit/b7be8e9))


### Examples

* add GeoidLayer implementation example ([5df8cc5](https://github.com/iTowns/itowns/commit/5df8cc5))
* **Compass:** add an example of a compass in a GlobeView ([3290820](https://github.com/iTowns/itowns/commit/3290820))
* **FileSource:** add exemples of FileSource instantiation ([7db9bcb](https://github.com/iTowns/itowns/commit/7db9bcb))
* **Potree:** add an example of Potree intgration within iTowns ([4bbc772](https://github.com/iTowns/itowns/commit/4bbc772))
* **Potree:** fix minor issues on the example ([1ee50c8](https://github.com/iTowns/itowns/commit/1ee50c8))
* **source / file:** simplify FileSource usage ([21317b4](https://github.com/iTowns/itowns/commit/21317b4))
* **Widget:** add an example of minimap widget ([2b89f83](https://github.com/iTowns/itowns/commit/2b89f83))
* **Widgets:** add a plugin to display widgets ([ec56fa9](https://github.com/iTowns/itowns/commit/ec56fa9))


### Code Refactoring

* **TileMesh:** refactorize bbox update method ([18196b6](https://github.com/iTowns/itowns/commit/18196b6))
* **Widgets:** rename widgets to navigation ([509a042](https://github.com/iTowns/itowns/commit/509a042))


### Workflow and chores

* release v2.37.0 ([ee8e250](https://github.com/iTowns/itowns/commit/ee8e250))
* add potree repo and symbolic link to gitignore ([d7bb92c](https://github.com/iTowns/itowns/commit/d7bb92c))
* change itowns.github.io deploying ([870299f](https://github.com/iTowns/itowns/commit/870299f))
* deploy itowns and potree bundle. ([b104fd5](https://github.com/iTowns/itowns/commit/b104fd5))
* **deps-dev:** bump marked from 4.0.8 to 4.0.10 ([cfc9100](https://github.com/iTowns/itowns/commit/cfc9100))
* fix eslint rules. ([6fff078](https://github.com/iTowns/itowns/commit/6fff078))
* replace data keys. ([a815dac](https://github.com/iTowns/itowns/commit/a815dac))
* update CONTRIBUTING.md ([96cfb21](https://github.com/iTowns/itowns/commit/96cfb21))
* update packages. ([eb7c8d5](https://github.com/iTowns/itowns/commit/eb7c8d5))



<a name="2.36.2"></a>
## [2.36.2](https://github.com/iTowns/itowns/compare/v2.36.1...v2.36.2) (2021-11-29)


### Bug Fixes

* **VectorTileSource:** error if vector tile layer style is undefined. ([b535583](https://github.com/iTowns/itowns/commit/b535583))


### Code Refactoring

* **Coordinates/Extent:** rename dimension and distance methods. ([6a436ac](https://github.com/iTowns/itowns/commit/6a436ac))
* **examples:** replace geoservice keys. ([b81738c](https://github.com/iTowns/itowns/commit/b81738c))
* **Feature:** defaults buildExtent parameter to true for 2d structure ([3182075](https://github.com/iTowns/itowns/commit/3182075))


### Workflow and chores

* release v2.36.2 ([92cf0a3](https://github.com/iTowns/itowns/commit/92cf0a3))



<a name="2.36.1"></a>
## [2.36.1](https://github.com/iTowns/itowns/compare/v2.36.0...v2.36.1) (2021-11-22)


### Bug Fixes

* **View:** wrong calculate pick radius with distance/zoom. ([d5efa03](https://github.com/iTowns/itowns/commit/d5efa03))


### Workflow and chores

* release v2.36.1 ([7051c54](https://github.com/iTowns/itowns/commit/7051c54))



<a name="2.36.0"></a>
# [2.36.0](https://github.com/iTowns/itowns/compare/v2.35.0...v2.36.0) (2021-11-18)


### Features

* **Coordinates:** add methods to calculate distance between coordinates. ([acdf643](https://github.com/iTowns/itowns/commit/acdf643))
* **Crs:** add isGeocentric method. ([1ab76c8](https://github.com/iTowns/itowns/commit/1ab76c8))
* **Extent:** add methods to calculate extent dimensions. ([ed583d9](https://github.com/iTowns/itowns/commit/ed583d9))
* **Label:** add parameter to change labels padding property ([33f8680](https://github.com/iTowns/itowns/commit/33f8680))


### Bug Fixes

* **ColorLayer:** fix shader when transparent is true ([1a4f44d](https://github.com/iTowns/itowns/commit/1a4f44d))
* **ElevationLayer:** scale elevation isn't updated ([26d72da](https://github.com/iTowns/itowns/commit/26d72da))
* **Ellipsoid:** wrong geodesic distance. ([4d462f2](https://github.com/iTowns/itowns/commit/4d462f2))
* **Extent:** fix wrong calculating when apply matrix. ([04abdd2](https://github.com/iTowns/itowns/commit/04abdd2))
* **Feature2Mesh:** set scale transformation from FeatureCollection. ([0f5cd07](https://github.com/iTowns/itowns/commit/0f5cd07))
* **Feature:** wrong altitude and altitude limits. ([4746e86](https://github.com/iTowns/itowns/commit/4746e86))
* **FirstPersonControls:** prevent context menu from poping ([94bfd57](https://github.com/iTowns/itowns/commit/94bfd57))
* **GlobeControls:** fix black screen when zooming outside globe ([3e0f23f](https://github.com/iTowns/itowns/commit/3e0f23f))
* **label2DRenderer:** add frustum culling in global labels culling. ([5ba4e9d](https://github.com/iTowns/itowns/commit/5ba4e9d))
* **Point/3Dtiles:** wrong geographical extent property for points cloud and 3Dtiles. ([c663ce4](https://github.com/iTowns/itowns/commit/c663ce4))
* **Style:** copy order property when copying style ([cab78ba](https://github.com/iTowns/itowns/commit/cab78ba))
* **VectorTileSource:** set style parent with style Layer ([aba0743](https://github.com/iTowns/itowns/commit/aba0743))


### Examples

* **3dtiles_basic:** update 3dtiles sources url ([50d6733](https://github.com/iTowns/itowns/commit/50d6733))


### Code Refactoring

* **debug:** remove id text in OBB helper. ([d033279](https://github.com/iTowns/itowns/commit/d033279))
* **examples:** add wfs labels in 2.5d examples. ([944e412](https://github.com/iTowns/itowns/commit/944e412))
* **Extent:** throw error if the projection is geocentric. ([e0048f7](https://github.com/iTowns/itowns/commit/e0048f7))
* **Extent:** use Extent.planarDimensions instead of Extent.dimensions ([023d5fa](https://github.com/iTowns/itowns/commit/023d5fa))
* **OBBHelper:** remove OBBHelper text. ([1e2fc31](https://github.com/iTowns/itowns/commit/1e2fc31))
* **TerrainMaterial:** rename fogDepth -> vFogDepth ([7d162ec](https://github.com/iTowns/itowns/commit/7d162ec))
* **View:** change label margin default. ([8c6edf5](https://github.com/iTowns/itowns/commit/8c6edf5))


### Workflow and chores

* release v2.36.0 ([eefb62a](https://github.com/iTowns/itowns/commit/eefb62a))
* add contributor. ([b2d1d8f](https://github.com/iTowns/itowns/commit/b2d1d8f))
* update packages. ([ef204f9](https://github.com/iTowns/itowns/commit/ef204f9))


### Documentation

* **Ellipsoid:** minor fix on geodesicDistance doc ([a0cd2a3](https://github.com/iTowns/itowns/commit/a0cd2a3))



<a name="2.35.0"></a>
# [2.35.0](https://github.com/iTowns/itowns/compare/v2.34.0...v2.35.0) (2021-09-16)


### Features

* **AnimationPlayer:** add a callback ran at each animation frame ([1280ce0](https://github.com/iTowns/itowns/commit/1280ce0))


### Bug Fixes

* **c3DEngine:** fix error when input renderer.domElement is a canvas ([14567c1](https://github.com/iTowns/itowns/commit/14567c1))
* **CameraUtils:** CameraTransformOptions parameter stopPlaceOnGroundAtEnd is no longer overriden ([7f3a542](https://github.com/iTowns/itowns/commit/7f3a542))
* **CameraUtils:** compute precise altitude when setting CameraRig ([011fcbc](https://github.com/iTowns/itowns/commit/011fcbc))
* **Feature2Mesh:** addapt indices array type from the size of polygon ([378c092](https://github.com/iTowns/itowns/commit/378c092))
* **GlobeControls:** fix jittering move globe when devtool is open ([825841c](https://github.com/iTowns/itowns/commit/825841c))
* **Label:** clamp labels altitude over 0 ([ddd59e0](https://github.com/iTowns/itowns/commit/ddd59e0))
* **Label:** enforce Labels div top position to 0 ([08528d7](https://github.com/iTowns/itowns/commit/08528d7))
* **ShapefileParser:** prevent ignoring input crs wen given ([d2b90b7](https://github.com/iTowns/itowns/commit/d2b90b7))


### Examples

* **camera traveling:** add an example where user can pick points and have camera traveling between those points ([6e79ff3](https://github.com/iTowns/itowns/commit/6e79ff3))


### Code Refactoring

* **Controls:** change deprecated mouseWheel event to wheel event ([923d10c](https://github.com/iTowns/itowns/commit/923d10c))
* **Controls:** handle mouse events in StateControls ([ae1c30b](https://github.com/iTowns/itowns/commit/ae1c30b))
* **Controls:** switch context menu management in StateControl ([5fa010b](https://github.com/iTowns/itowns/commit/5fa010b))
* **Controls:** switch enabled property from GlobeControls to StateControl ([76130b4](https://github.com/iTowns/itowns/commit/76130b4))
* **Controls:** switch keyboard management to StateControls ([a392a7b](https://github.com/iTowns/itowns/commit/a392a7b))
* **Controls:** switch wheel management to StateControl ([4e64b75](https://github.com/iTowns/itowns/commit/4e64b75))
* **StateControl:** factorise handleMouse in pointer methods ([0e626d8](https://github.com/iTowns/itowns/commit/0e626d8))
* **StateControls:** simplify setFromOptions method ([a7d175f](https://github.com/iTowns/itowns/commit/a7d175f))


### Workflow and chores

* release v2.35.0 ([04b8806](https://github.com/iTowns/itowns/commit/04b8806))
* **examples:** change geoportail key. ([36f0f40](https://github.com/iTowns/itowns/commit/36f0f40))
* move babel preset-env options to .babelrc ([ad22bcc](https://github.com/iTowns/itowns/commit/ad22bcc))
* remove import three examples polyfill. ([48d52ae](https://github.com/iTowns/itowns/commit/48d52ae))
* up three 131.2 ([aed4dbc](https://github.com/iTowns/itowns/commit/aed4dbc))
* up to webpack 5. ([ea36982](https://github.com/iTowns/itowns/commit/ea36982))
* update packages. ([909e96e](https://github.com/iTowns/itowns/commit/909e96e))


### Documentation

* **Controls:** minor doc fixes ([d7c2ffa](https://github.com/iTowns/itowns/commit/d7c2ffa))
* minor update on Controls documentation ([5f4ace1](https://github.com/iTowns/itowns/commit/5f4ace1))



<a name="2.34.0"></a>
# [2.34.0](https://github.com/iTowns/itowns/compare/v2.33.0...v2.34.0) (2021-07-30)


### Features

* **GlobeControls:** add support for travel out animation ([9db6ecb](https://github.com/iTowns/itowns/commit/9db6ecb))
* **Label:** add support to pass custom domElements to labels ([b560005](https://github.com/iTowns/itowns/commit/b560005))
* **Layer:** add FeatureGeometryLayer. ([0961787](https://github.com/iTowns/itowns/commit/0961787))
* **StateControl:** add a method to modify class properties ([1e2e11e](https://github.com/iTowns/itowns/commit/1e2e11e))
* **Style:** add support for custom icon in labels ([7f355c4](https://github.com/iTowns/itowns/commit/7f355c4))
* **Style:** add support for custom label anchor ([fe2a2d9](https://github.com/iTowns/itowns/commit/fe2a2d9))
* **TMSSource:** add support for specific TileMatrix identifier ([e394255](https://github.com/iTowns/itowns/commit/e394255))
* **View:** add double right-click event ([9ce7213](https://github.com/iTowns/itowns/commit/9ce7213))


### Bug Fixes

* **3Dtiles:** remove debugger command. ([0a06614](https://github.com/iTowns/itowns/commit/0a06614))
* **eventToViewCoord:** check if event.offset properties are defined ([26f459a](https://github.com/iTowns/itowns/commit/26f459a))
* **example:** generate correct URL when sharing EPT example ([8ef0b34](https://github.com/iTowns/itowns/commit/8ef0b34))
* **FeatureToolTip:** fix tooltip legend icon ([f632308](https://github.com/iTowns/itowns/commit/f632308))
* **Label:** fix occlusion between icons and label text ([29b6435](https://github.com/iTowns/itowns/commit/29b6435))
* **Label:** fix Style.text.offset parameter ([26b970b](https://github.com/iTowns/itowns/commit/26b970b))
* **Label:** rounds the projected coordinates of labels ([5d0ca6f](https://github.com/iTowns/itowns/commit/5d0ca6f))
* **LayeredMaterialNodeProcessing:** checks for source cache with the layer crs for command cancellation ([7570cad](https://github.com/iTowns/itowns/commit/7570cad))
* **tutorial:** fix internal link in tutorials ([ce8029c](https://github.com/iTowns/itowns/commit/ce8029c))


### Examples

* add an example where user can define custom controls ([00e62c2](https://github.com/iTowns/itowns/commit/00e62c2))
* **GeoJSON raster:** center the camera initial position on the displayed features ([8d8ac2c](https://github.com/iTowns/itowns/commit/8d8ac2c))
* **geojson-file:** refactor example to illustrate two ways of displaying data from a file ([4bc0774](https://github.com/iTowns/itowns/commit/4bc0774))
* **vectorTile:** replace expired source in vector tile examples ([8ccc1a3](https://github.com/iTowns/itowns/commit/8ccc1a3))


### Code Refactoring

* **GlobeControls:** switch travel animation to StateControl ([d99827d](https://github.com/iTowns/itowns/commit/d99827d))
* **View:** eventToViewCoords returns middle view coords by default ([2e501c3](https://github.com/iTowns/itowns/commit/2e501c3))


### Workflow and chores

* release v2.34.0 ([3180a57](https://github.com/iTowns/itowns/commit/3180a57))
* expose 3dtiles process methods. ([7a94570](https://github.com/iTowns/itowns/commit/7a94570))
* update packages. ([50cd744](https://github.com/iTowns/itowns/commit/50cd744))


### Documentation

* **FeatureGeometryLayer:** add jsdoc to documentation config ([e77f102](https://github.com/iTowns/itowns/commit/e77f102))
* **README:** update deprecated link ([b483e0d](https://github.com/iTowns/itowns/commit/b483e0d))
* **README:** update integration badge to github action ([4c77adf](https://github.com/iTowns/itowns/commit/4c77adf))
* **Style:** add precision on doc ([bcee39f](https://github.com/iTowns/itowns/commit/bcee39f))
* **tutorials:** add support to sort tutorials in sections ([e9c8510](https://github.com/iTowns/itowns/commit/e9c8510))


### Others

* add tutorials on how to use iTowns ([5916ac9](https://github.com/iTowns/itowns/commit/5916ac9))
* **Fundamentals:** add links to documentation ([cf30e37](https://github.com/iTowns/itowns/commit/cf30e37))
* **Fundamentals:** change section titles ([296206f](https://github.com/iTowns/itowns/commit/296206f))
* **Fundamentals:** change tutorial links appearance ([ac167ec](https://github.com/iTowns/itowns/commit/ac167ec))
* resize tutorial images ([bbb91e7](https://github.com/iTowns/itowns/commit/bbb91e7))
* update html titles in some examples ([7ea6538](https://github.com/iTowns/itowns/commit/7ea6538))



<a name="2.33.0"></a>
# [2.33.0](https://github.com/iTowns/itowns/compare/v2.32.0...v2.33.0) (2021-05-28)


### Features

* **ColorLayer:** add custom shader to ColorLayer. ([2d32888](https://github.com/iTowns/itowns/commit/2d32888))
* **ColorLayer:** add option to filtering textures Layer. ([da245f9](https://github.com/iTowns/itowns/commit/da245f9))
* **Coordinates:** add applyMatrix4 method. ([061eda0](https://github.com/iTowns/itowns/commit/061eda0))


### Bug Fixes

* **CameraUtils:** count heading in clockwise direction ([880c67d](https://github.com/iTowns/itowns/commit/880c67d))
* **CameraUtils:** fix rotation animation when start heading is 0 ([1ca0c17](https://github.com/iTowns/itowns/commit/1ca0c17))
* **CameraUtils:** the camera rotation animation take the shortest angle ([ae194d3](https://github.com/iTowns/itowns/commit/ae194d3))
* **Controls:** replace deprecated THREE.Quaternion.slerp. ([2e27408](https://github.com/iTowns/itowns/commit/2e27408))
* **debug:** update coordinates event on mouse move ([9b62770](https://github.com/iTowns/itowns/commit/9b62770))
* **FeatureToolTip:** avoid undefined layer on move. ([6ae7305](https://github.com/iTowns/itowns/commit/6ae7305))
* **Feature:** wrong condition to choose extent crs projection. ([73198c7](https://github.com/iTowns/itowns/commit/73198c7))
* **FileSource:** transform extent source if is needed. ([0177503](https://github.com/iTowns/itowns/commit/0177503))
* **GeojsonParser:** store geojson properties within a separate property ([121b796](https://github.com/iTowns/itowns/commit/121b796))
* **LabelLayer:** init LabelLayer visibility with attached ColorLayer. ([67f25a1](https://github.com/iTowns/itowns/commit/67f25a1))
* **LayeredMaterialNodeProcessing:** prevent errors in layer update when removing layer ([d9fda75](https://github.com/iTowns/itowns/commit/d9fda75))
* **PlanarControls:** prevent freezing zoom when clicking while zooming with an orthographic camera ([b0f0a2d](https://github.com/iTowns/itowns/commit/b0f0a2d))
* **test:** use Extent.applyMatrix4 and Coordinates.applyMatrix4. ([bdf50ab](https://github.com/iTowns/itowns/commit/bdf50ab))


### Examples

* add custom shader effect example. ([15163d9](https://github.com/iTowns/itowns/commit/15163d9))
* change buildings id for coloring ([3f7ccd0](https://github.com/iTowns/itowns/commit/3f7ccd0))


### Code Refactoring

* **ColorLayer:** add effect type ColorLayer parameter. ([19d58c6](https://github.com/iTowns/itowns/commit/19d58c6))
* **ColorLayer:** remove useless features in ColorLayer command. ([66ee340](https://github.com/iTowns/itowns/commit/66ee340))
* **example:** remove unuseless variable. ([041b62a](https://github.com/iTowns/itowns/commit/041b62a))
* **Feature:** compute and apply local transform matrix in Feature. ([e244f55](https://github.com/iTowns/itowns/commit/e244f55))
* **Feature:** declare constant in file begining. ([f44c29e](https://github.com/iTowns/itowns/commit/f44c29e))
* **Feature:** FeatureCollection extends by Object3D and use local transform matrix. ([8d20315](https://github.com/iTowns/itowns/commit/8d20315))
* **Feature:** normalize crs projection. ([f9df7ff](https://github.com/iTowns/itowns/commit/f9df7ff))
* **Feature:** remove optionsFeature from FeatureCollection. ([b15c642](https://github.com/iTowns/itowns/commit/b15c642))
* **Feature:** replace parsing option withNormal and withAltitude by structure. ([420ba1a](https://github.com/iTowns/itowns/commit/420ba1a))
* **Feature:** simplify build extent check. ([0091a5a](https://github.com/iTowns/itowns/commit/0091a5a))
* **Layer:** deprecate labelEnable option Layer and replace by addLabelLayer. ([082d22c](https://github.com/iTowns/itowns/commit/082d22c))
* **ShaderChunk:** introduce shader chunk manager class to instance ShaderChunk. ([e93ed76](https://github.com/iTowns/itowns/commit/e93ed76))
* **Source:** avoid to cache raster data in Source. ([521ca74](https://github.com/iTowns/itowns/commit/521ca74))
* **Style/Convert:** move options from Converter to Style. ([23de259](https://github.com/iTowns/itowns/commit/23de259))
* **VectorTileParser:** remove unnecessary parameters. ([860d748](https://github.com/iTowns/itowns/commit/860d748))


### Workflow and chores

* release v2.33.0 ([3b0c8d9](https://github.com/iTowns/itowns/commit/3b0c8d9))
* **chart.js:** update chart.js to 3.0. ([6953e01](https://github.com/iTowns/itowns/commit/6953e01))
* update packages. ([0f54e2e](https://github.com/iTowns/itowns/commit/0f54e2e))


### Documentation

* **FeatureCollection:** clarify FeatureCollection.extent projection. ([f612eb3](https://github.com/iTowns/itowns/commit/f612eb3))
* **View:** add diffuse parameter documentation. ([fcc16da](https://github.com/iTowns/itowns/commit/fcc16da))


### Tests

* **unit:** update unit tests with feature refactoring. ([cbe3e68](https://github.com/iTowns/itowns/commit/cbe3e68))


### BREAKING CHANGES

* **Style/Convert:** * `GeometryLayer.convert` options are moved in Style properties. Use
  * `Style.xxx.color`
  * `Style.xxx.base_altitude`
  * `Style.fill.extrusion_height`
  * `Style.stroke.width`
  * `Style.point.radius`
* `overrideAltitudeInToZero` layer options is removed use `Style.xxx.base_altitude` instead.
* **CameraUtils:** The headings used in CameraUtils are now counted clockwise (they were
previously counted counter-clockwise).
* **Feature:** FeatureCollection and Feature signature constructor are changed.



<a name="2.32.0"></a>
# [2.32.0](https://github.com/iTowns/itowns/compare/v2.31.0...v2.32.0) (2021-04-09)


### Features

* **PlanarControls:** add max and min resolution parameters to limit zoom ([ad17590](https://github.com/iTowns/itowns/commit/ad17590))
* **PlanarControls:** Add property 'Cursor' and method 'setCursor' for cursor modification ([0870ede](https://github.com/iTowns/itowns/commit/0870ede))
* **Style:** support mapbox expression. ([0581d3d](https://github.com/iTowns/itowns/commit/0581d3d))


### Bug Fixes

* **Atmosphere:** avoid several realistic atmosphere initializations. ([b949f75](https://github.com/iTowns/itowns/commit/b949f75))
* **Camera:** resize preserves the scale ([e44de7f](https://github.com/iTowns/itowns/commit/e44de7f))
* **extent:** forget copy zoom in Extent#transformedCopy. ([1a607ea](https://github.com/iTowns/itowns/commit/1a607ea))
* **Extent:** forgetting zoom property copy, in Extent.as(). ([3efea0e](https://github.com/iTowns/itowns/commit/3efea0e))
* **Label:** wrong div translate. ([5ef7197](https://github.com/iTowns/itowns/commit/5ef7197))
* **PlanarControls:** fix drag when moving out of view domElement ([a4f0a3f](https://github.com/iTowns/itowns/commit/a4f0a3f))
* **PlanarControls:** prevent triggering new movement when already moving ([66256bb](https://github.com/iTowns/itowns/commit/66256bb))
* **test:** apply async icon label loading. ([76d732a](https://github.com/iTowns/itowns/commit/76d732a))
* **test:** update label test with default icon size. ([72a98d4](https://github.com/iTowns/itowns/commit/72a98d4))
* **test:** update vector tile style test with context expression. ([c9fc662](https://github.com/iTowns/itowns/commit/c9fc662))
* **VectorTileSource:** failing to open mapbox url format. ([b6dd383](https://github.com/iTowns/itowns/commit/b6dd383))


### Examples

* add atmosphere mars example. ([27e28ad](https://github.com/iTowns/itowns/commit/27e28ad))
* **Orthographic:** add resolution limit parameters in orthographic examples ([aafd37b](https://github.com/iTowns/itowns/commit/aafd37b))
* update irrelevant titles in some examples ([2914286](https://github.com/iTowns/itowns/commit/2914286))


### Code Refactoring

* **Atmosphere:** move realistic atmosphere options to Atmosphere constructor. ([234a8ee](https://github.com/iTowns/itowns/commit/234a8ee))
* **Source:** remove extentsInsideLimit. ([035701b](https://github.com/iTowns/itowns/commit/035701b))
* **VectorTilesSource:** remove useless styles by zoom. ([baabbae](https://github.com/iTowns/itowns/commit/baabbae))


### Workflow and chores

* release v2.32.0 ([d1dae17](https://github.com/iTowns/itowns/commit/d1dae17))
* update packages. ([e9ae835](https://github.com/iTowns/itowns/commit/e9ae835))


### Documentation

* **GeometryLayer:** fix example and typo regarding Object3D ([d77c8d6](https://github.com/iTowns/itowns/commit/d77c8d6))
* **TMSSource:** add example in doc ([dce0032](https://github.com/iTowns/itowns/commit/dce0032))



<a name="2.31.0"></a>
# [2.31.0](https://github.com/iTowns/itowns/compare/v2.30.0...v2.31.0) (2021-03-02)


### Bug Fixes

* **GlobeLayer:** doesn't subdivise the pole tile mesh. ([53a9f6f](https://github.com/iTowns/itowns/commit/53a9f6f))
* **PlanarControls:** fix pan movement ([5be30b7](https://github.com/iTowns/itowns/commit/5be30b7))
* **PlanarControls:** standardize zoom factors for perspective and orthographic camera ([c65bbab](https://github.com/iTowns/itowns/commit/c65bbab))
* **Points:** remove THREE.Geometry. ([6ff3b3d](https://github.com/iTowns/itowns/commit/6ff3b3d))
* **RasterColorTile:** wrong getter name. ([1f7eb05](https://github.com/iTowns/itowns/commit/1f7eb05))


### Examples

* correct zoom factor parameter in examples ([a86e3f8](https://github.com/iTowns/itowns/commit/a86e3f8))


### Code Refactoring

* **Debug:** simplified point debug code. ([c99fb09](https://github.com/iTowns/itowns/commit/c99fb09))
* **GlobeControls:** refactor zoom speed management ([57f6666](https://github.com/iTowns/itowns/commit/57f6666))
* **Immersive:** replace Matrix4.makeBasisFromMatrix by Matrix4.setFromMatrix3. ([d442602](https://github.com/iTowns/itowns/commit/d442602))
* **MaterialLayer:** MaterialLayer to RasterNode. ([46b19f1](https://github.com/iTowns/itowns/commit/46b19f1))
* **PlanarControls:** refactor zoom speed management ([ca47389](https://github.com/iTowns/itowns/commit/ca47389))
* **points:** avoid clone point material. ([174a60f](https://github.com/iTowns/itowns/commit/174a60f))
* **RasterTile:** rename file. ([c73fc38](https://github.com/iTowns/itowns/commit/c73fc38))
* **View:** remove useless getParentLayer method ([6f0b545](https://github.com/iTowns/itowns/commit/6f0b545))
* **View:** simplify getLayerById method. ([58874ec](https://github.com/iTowns/itowns/commit/58874ec))


### Workflow and chores

* release v2.31.0 ([3738ecc](https://github.com/iTowns/itowns/commit/3738ecc))
* **deps-dev:** bump marked from 1.2.9 to 2.0.0 ([46bc3f9](https://github.com/iTowns/itowns/commit/46bc3f9))
* update package-lock.json. ([b3e81fc](https://github.com/iTowns/itowns/commit/b3e81fc))
* update packages. ([09f12c9](https://github.com/iTowns/itowns/commit/09f12c9))


### Tests

* **MaterialLayer:** update tests with the MaterialLayer refactoring. ([0fa3c06](https://github.com/iTowns/itowns/commit/0fa3c06))



<a name="2.30.0"></a>
# [2.30.0](https://github.com/iTowns/itowns/compare/v2.29.2...v2.30.0) (2021-02-05)


### Features

* **CameraUtils:** add possibility to set camera placement from an extent ([d6b2ab4](https://github.com/iTowns/itowns/commit/d6b2ab4))
* **VectorTilesSource:** store parsed vector tile style as class property ([bb581fb](https://github.com/iTowns/itowns/commit/bb581fb))


### Bug Fixes

* **Camera:** rename intersectSphere to intersectsSphere ([f5e1004](https://github.com/iTowns/itowns/commit/f5e1004))
* **examples:** rename smartZoom param in vector_tile_raster_2d ([ca7aaeb](https://github.com/iTowns/itowns/commit/ca7aaeb))
* **examples:** update three version in view_mutli_25d ([7778a4d](https://github.com/iTowns/itowns/commit/7778a4d))
* **Terrain:** use exact method to compute min and max elevation node; ([6297c09](https://github.com/iTowns/itowns/commit/6297c09))


### Examples

* **OrthographicCamera:** set camera initial position from an extent ([6c10ba2](https://github.com/iTowns/itowns/commit/6c10ba2))


### Code Refactoring

* **Camera:** refactor Camera as an ES6 class ([596cee6](https://github.com/iTowns/itowns/commit/596cee6))
* **Camera:** remove matrixProjectionNeedsUpdate. ([a501c92](https://github.com/iTowns/itowns/commit/a501c92))
* **debug:** remove three r124 warning. ([9c2406f](https://github.com/iTowns/itowns/commit/9c2406f))
* **layer:** introduce RasterLayer. ([e7b2653](https://github.com/iTowns/itowns/commit/e7b2653))
* **Layer:** Layer constructor parameter needs Source. ([11b8645](https://github.com/iTowns/itowns/commit/11b8645))


### Workflow and chores

* release v2.30.0 ([a6f91c8](https://github.com/iTowns/itowns/commit/a6f91c8))
* update packages. ([a5d2cad](https://github.com/iTowns/itowns/commit/a5d2cad))



<a name="2.29.2"></a>
## [2.29.2](https://github.com/iTowns/itowns/compare/v2.29.1...v2.29.2) (2021-01-26)


### Bug Fixes

* **3dTile:** don't overload the b3dm material. ([d7f14b6](https://github.com/iTowns/itowns/commit/d7f14b6))
* **PlanarControls:** fix zoom movement with an orthographic camera ([999851a](https://github.com/iTowns/itowns/commit/999851a))


### Code Refactoring

* **view:** add vector target viewToNormalizedCoords. ([b83a9c8](https://github.com/iTowns/itowns/commit/b83a9c8))


### Workflow and chores

* release v2.29.2 ([b0fb0f9](https://github.com/iTowns/itowns/commit/b0fb0f9))



<a name="2.29.1"></a>
## [2.29.1](https://github.com/iTowns/itowns/compare/v2.29.0...v2.29.1) (2021-01-22)


### Bug Fixes

* **PlanarControls:** fix issues related to cameraOrtho feature ([475c788](https://github.com/iTowns/itowns/commit/475c788))


### Workflow and chores

* release v2.29.1 ([fe2db47](https://github.com/iTowns/itowns/commit/fe2db47))


### Documentation

* **Camera:** modify camera.adjustAltitudeToAvoidCollisionWithLayer doc ([aabe814](https://github.com/iTowns/itowns/commit/aabe814))
* **GlobeControls:** minor correction ([7230b53](https://github.com/iTowns/itowns/commit/7230b53))
* **GlobeControl:** update class constructor doc ([6fb3d28](https://github.com/iTowns/itowns/commit/6fb3d28))
* update some deprecated doc ([d16c796](https://github.com/iTowns/itowns/commit/d16c796))
* **View:** update doc of View.getMeterToPixel method ([cc2385c](https://github.com/iTowns/itowns/commit/cc2385c))



<a name="2.29.0"></a>
# [2.29.0](https://github.com/iTowns/itowns/compare/v2.28.1...v2.29.0) (2021-01-21)


### Features

* **controls:** add damping factor property. ([22d962d](https://github.com/iTowns/itowns/commit/22d962d))
* **controls:** add option enable smart travel in planarControls ([a31873d](https://github.com/iTowns/itowns/commit/a31873d))
* **orthographic camera:** add support for an orthographic camera ([de0dba6](https://github.com/iTowns/itowns/commit/de0dba6))
* **points:** apply opacity classification on others MODE. ([e411425](https://github.com/iTowns/itowns/commit/e411425))
* **webgl:** support pick position from depth buffer with ortho ([05fb79f](https://github.com/iTowns/itowns/commit/05fb79f))


### Bug Fixes

* **ColorLayer:** wrong white to opacity effect. ([9666822](https://github.com/iTowns/itowns/commit/9666822))
* **controls:** moving camera after disabling collision. ([2dd8e06](https://github.com/iTowns/itowns/commit/2dd8e06))
* **controls:** remove prevent default in mouseDown. ([c866807](https://github.com/iTowns/itowns/commit/c866807))
* **examples:** fix key events in examples ([c187616](https://github.com/iTowns/itowns/commit/c187616))
* **PlanarControls:** remove previously instantiated controls associated ([2726101](https://github.com/iTowns/itowns/commit/2726101))
* **PlanarControls:** reset focus policy default parameters ([b56aaaf](https://github.com/iTowns/itowns/commit/b56aaaf))
* **test:** update a deprecated method call ([497d55e](https://github.com/iTowns/itowns/commit/497d55e))
* **workflow:** wrong path to build docs link. ([066f54a](https://github.com/iTowns/itowns/commit/066f54a))


### Examples

* **orthographic camera:** add examples of PlanarView with an orthographic camera ([d58c1b6](https://github.com/iTowns/itowns/commit/d58c1b6))


### Code Refactoring

* **Three:** remove deprecated matrix method. ([fffef40](https://github.com/iTowns/itowns/commit/fffef40))
* **Three:** remove deprecated quaternion method. ([f435fef](https://github.com/iTowns/itowns/commit/f435fef))


### Workflow and chores

* release v2.29.0 ([64d2c4b](https://github.com/iTowns/itowns/commit/64d2c4b))
* add action github to release and npm publish. ([eef3d53](https://github.com/iTowns/itowns/commit/eef3d53))
* add bump script. ([9e0f7b6](https://github.com/iTowns/itowns/commit/9e0f7b6))
* add changelog script. ([f7f6c40](https://github.com/iTowns/itowns/commit/f7f6c40))
* add github action to continuous integration ([e8e4f01](https://github.com/iTowns/itowns/commit/e8e4f01))
* add script to unit tests coverage. ([7c128ab](https://github.com/iTowns/itowns/commit/7c128ab))
* **deps:** bump ini from 1.3.5 to 1.3.7 ([fd46fd1](https://github.com/iTowns/itowns/commit/fd46fd1))
* **example:** rename start zoom to smart travel in key bindings description ([24c7c2b](https://github.com/iTowns/itowns/commit/24c7c2b))
* prepare migrating to webpack 5. ([9a549d4](https://github.com/iTowns/itowns/commit/9a549d4))
* refactoring debug npm script. ([b56f8b0](https://github.com/iTowns/itowns/commit/b56f8b0))
* remove deprecated babel-polyfill ([2e3de03](https://github.com/iTowns/itowns/commit/2e3de03))
* remove useless integration files. ([349e1b4](https://github.com/iTowns/itowns/commit/349e1b4))
* update actions/setup-node to v2. ([e3e31c0](https://github.com/iTowns/itowns/commit/e3e31c0))
* update packages. ([34ee221](https://github.com/iTowns/itowns/commit/34ee221))
* upgrade and update lock file version to 2.0. ([537345b](https://github.com/iTowns/itowns/commit/537345b))


### Documentation

* **workflow:** bump and changelog scripts. ([01bf159](https://github.com/iTowns/itowns/commit/01bf159))


### Others

* Update LICENSE.md ([28be05c](https://github.com/iTowns/itowns/commit/28be05c))
* Change comment on workflow remove old artifact ([7fcbb3a](https://github.com/iTowns/itowns/commit/7fcbb3a))
* Update actions checkout to v2 ([9094edc](https://github.com/iTowns/itowns/commit/9094edc))
* Update remove-old-artifacts.yml ([0a9911f](https://github.com/iTowns/itowns/commit/0a9911f))
* Create remove-old-artifacts.yml ([617326c](https://github.com/iTowns/itowns/commit/617326c))



<a name="2.28.1"></a>
## [2.28.1](https://github.com/iTowns/itowns/compare/v2.28.0...v2.28.1) (2020-12-02)


### Bug Fixes

* **install:** prepare script spends a lot of time, to check npm version. ([a557cbf](https://github.com/iTowns/itowns/commit/a557cbf))


### Workflow and chores

* release v2.28.1 ([b5ff9e9](https://github.com/iTowns/itowns/commit/b5ff9e9))



<a name="2.28.0"></a>
# [2.28.0](https://github.com/iTowns/itowns/compare/v2.27.0...v2.28.0) (2020-12-01)


### Features

* **core:** expose proj4 defs methods. ([619077e](https://github.com/iTowns/itowns/commit/619077e))
* **scale 2D:** trigger event when 2D map animation is over to detect when scale computation is relevant ([bb5758a](https://github.com/iTowns/itowns/commit/bb5758a))


### Bug Fixes

* **PlanarControls:** fix refactoring errors ([6bc812d](https://github.com/iTowns/itowns/commit/6bc812d))
* **PlanarView:** fix a refactoring error ([63efafe](https://github.com/iTowns/itowns/commit/63efafe))


### Examples

* **map 2D and 25D:** add scale on 2D and 2.5D map examples ([cd4af7e](https://github.com/iTowns/itowns/commit/cd4af7e))
* **scale:** factorize the updateScaleWidget method as twoo methods declared in Scale.js ([00285ff](https://github.com/iTowns/itowns/commit/00285ff))


### Code Refactoring

* **planar examples:** refactor the implementation of PlanarView and PlanarControl in examples which use it to match the refactored PlanarView (with default PlanarControl instantiated) ([8ad6a9f](https://github.com/iTowns/itowns/commit/8ad6a9f))
* **planarControls:** refactor planar controls as an ES6 class ([348c7e7](https://github.com/iTowns/itowns/commit/348c7e7))
* **PlanarView:** associate a PlanarControls instance to a new PlanarView by default ([2c9a0e4](https://github.com/iTowns/itowns/commit/2c9a0e4))


### Workflow and chores

* release v2.28.0 ([64f2fb4](https://github.com/iTowns/itowns/commit/64f2fb4))
* npm update lock file. ([9c1857d](https://github.com/iTowns/itowns/commit/9c1857d))
* update packages. ([3a422f1](https://github.com/iTowns/itowns/commit/3a422f1))
* use current node version to test and deploy. ([0a7e22b](https://github.com/iTowns/itowns/commit/0a7e22b))



<a name="2.27.0"></a>
# [2.27.0](https://github.com/iTowns/itowns/compare/v2.26.0...v2.27.0) (2020-11-09)


### Features

* add Entwine Point Tile support ([697fefb](https://github.com/iTowns/itowns/commit/697fefb))
* **controls:** add dispose method in FirstPersonControls and StreetControls ([5b308be](https://github.com/iTowns/itowns/commit/5b308be))
* **point:** add an intensity range for point clouds ([0ff51cc](https://github.com/iTowns/itowns/commit/0ff51cc))
* **Point:** add classification support. ([090aa9d](https://github.com/iTowns/itowns/commit/090aa9d))
* **View:** add View.dispose method. ([b8544ae](https://github.com/iTowns/itowns/commit/b8544ae))


### Bug Fixes

* **doc:** update deprecated parsingOptions. ([d90ab27](https://github.com/iTowns/itowns/commit/d90ab27))
* **example:** broken split rendering div. ([fd70c6c](https://github.com/iTowns/itowns/commit/fd70c6c))
* **examples:** update deprecated parsingOptions. ([2e59505](https://github.com/iTowns/itowns/commit/2e59505))
* **examples:** update draco to work with THREE v121. ([7e0428a](https://github.com/iTowns/itowns/commit/7e0428a))
* **source:** move default format before calling parent constructor ([f254032](https://github.com/iTowns/itowns/commit/f254032))
* **test:** fix issue concerning node latest version for deployment ([eb738d7](https://github.com/iTowns/itowns/commit/eb738d7))
* **test:** switch latest node version from 15 to 14 ([fe4fbff](https://github.com/iTowns/itowns/commit/fe4fbff))
* **test:** temporary disable the LabelLayer ([2af0fd8](https://github.com/iTowns/itowns/commit/2af0fd8))
* **test:** update deprecated parsingOptions. ([8642441](https://github.com/iTowns/itowns/commit/8642441))
* **View:** undefined cache after removing layer with multi-view. ([d4c9871](https://github.com/iTowns/itowns/commit/d4c9871))


### Examples

* add two Entwine Point Tile examples ([581b64d](https://github.com/iTowns/itowns/commit/581b64d))


### Code Refactoring

* **ColorLayer:** move opacity/visibility ColorLayer handling to MaterialLayer. ([63d7b43](https://github.com/iTowns/itowns/commit/63d7b43))
* **core:** remove Layer.parsingOptions. ([8175642](https://github.com/iTowns/itowns/commit/8175642))
* **source:** use in/out system in PointCloudNode#load ([250b1ee](https://github.com/iTowns/itowns/commit/250b1ee))


### Workflow and chores

* release v2.27.0 ([5bef933](https://github.com/iTowns/itowns/commit/5bef933))
* **docs:** add horizontal scroll on the doc content to see the full methods signature ([86eae4f](https://github.com/iTowns/itowns/commit/86eae4f))
* export GlobeControls in itowns api ([e8e33eb](https://github.com/iTowns/itowns/commit/e8e33eb))
* update packages. ([76cf992](https://github.com/iTowns/itowns/commit/76cf992))


### Documentation

* add webGL 2.0 docs, examples and a tutorial. ([bc6ab91](https://github.com/iTowns/itowns/commit/bc6ab91))
* missing extends property in source documentation. ([c59a892](https://github.com/iTowns/itowns/commit/c59a892))
* **source:** update WMTSSource class documentation ([8d44ee2](https://github.com/iTowns/itowns/commit/8d44ee2))
* **tutorial:** update the beginning of the tutorial to display a geometry layer ([e1447b7](https://github.com/iTowns/itowns/commit/e1447b7))
* **tutorial:** update tutorial on how to create a simple globe ([daa5267](https://github.com/iTowns/itowns/commit/daa5267))


### Tests

* update opacity/visibility handling. ([babd1db](https://github.com/iTowns/itowns/commit/babd1db))


### BREAKING CHANGES

* **source:** the signature function of LASParser.parse and
PotreeBinParser.parse has changed.



<a name="2.26.0"></a>
# [2.26.0](https://github.com/iTowns/itowns/compare/v2.25.0...v2.26.0) (2020-10-06)


### Features

* **Webgl:** add support WebGl 2.0. ([b3aa2ff](https://github.com/iTowns/itowns/commit/b3aa2ff))


### Bug Fixes

* **doc:** update deprecated 'projection' parameter/property to 'crs'. ([148ef0b](https://github.com/iTowns/itowns/commit/148ef0b))
* **examples:** replace deprecated parsedData by features. ([92d9ca0](https://github.com/iTowns/itowns/commit/92d9ca0))
* **examples:** update deprecated 'projection' parameter/property to 'crs'. ([d204f65](https://github.com/iTowns/itowns/commit/d204f65))
* **label:** breaks word correctly ([58f9a04](https://github.com/iTowns/itowns/commit/58f9a04))
* **label:** correctly hide dom ([6bd7be7](https://github.com/iTowns/itowns/commit/6bd7be7))
* **label:** correctly remove labels when LabelLayer is deleted ([60cfa44](https://github.com/iTowns/itowns/commit/60cfa44))
* **label:** delete event to remove LabelLayer. ([cca6dfe](https://github.com/iTowns/itowns/commit/cca6dfe))
* **label:** horizon culling ([3d2e704](https://github.com/iTowns/itowns/commit/3d2e704))
* **label:** reduce flickering by ordering label ([2ed0fa2](https://github.com/iTowns/itowns/commit/2ed0fa2))
* **test:** add default value to tile segment. ([5a101f2](https://github.com/iTowns/itowns/commit/5a101f2))
* **test:** replace deprecated parsedData by features. ([096e678](https://github.com/iTowns/itowns/commit/096e678))
* **test:** replace deprecated waitFor method. ([70e52ed](https://github.com/iTowns/itowns/commit/70e52ed))
* **test:** update deprecated 'projection' parameter/property to 'crs'. ([3d35877](https://github.com/iTowns/itowns/commit/3d35877))
* **test:** update test to dataSourceProvider refactoring. ([017d0b2](https://github.com/iTowns/itowns/commit/017d0b2))
* **test:** update test to dataSourceProvider refactoring. ([e78249a](https://github.com/iTowns/itowns/commit/e78249a))


### Code Refactoring

* **Core:** rename all properties 'projection' by 'crs'. ([15bc424](https://github.com/iTowns/itowns/commit/15bc424))
* **examples:** remove multi-instance source. ([2984f03](https://github.com/iTowns/itowns/commit/2984f03))
* **geometry:** adjust index buffer size to vertex count. ([9132e74](https://github.com/iTowns/itowns/commit/9132e74))
* **picking:** avoid to instance typed array for each full depth buffer. ([ac2e800](https://github.com/iTowns/itowns/commit/ac2e800))
* **test:** add unit tests and error handling. ([0d612a4](https://github.com/iTowns/itowns/commit/0d612a4))


### Workflow and chores

* release v2.26.0 ([3f39c8b](https://github.com/iTowns/itowns/commit/3f39c8b))
* **label:** remove unnecessary registerLayer ([d7f5c06](https://github.com/iTowns/itowns/commit/d7f5c06))
* rename parsedData by features. ([4cd963d](https://github.com/iTowns/itowns/commit/4cd963d))
* update packages. ([7b4a245](https://github.com/iTowns/itowns/commit/7b4a245))
* update THREE package. ([7410e7b](https://github.com/iTowns/itowns/commit/7410e7b))


### Tests

* **label:** add test for Label2DRenderer ([854022d](https://github.com/iTowns/itowns/commit/854022d))


### Others

* **Provider:** loading/caching data in Source. ([1340016](https://github.com/iTowns/itowns/commit/1340016))



<a name="2.25.0"></a>
# [2.25.0](https://github.com/iTowns/itowns/compare/v2.24.3...v2.25.0) (2020-09-17)


### Features

* **label:** add a new class to Labels ([01fa199](https://github.com/iTowns/itowns/commit/01fa199))
* **parser:** add LAS/LAZ files parser ([f410de2](https://github.com/iTowns/itowns/commit/f410de2))


### Bug Fixes

* **debug:** fix debug gui tools. ([c9a5395](https://github.com/iTowns/itowns/commit/c9a5395))
* **label:** allow label to only have an icon ([4728d2d](https://github.com/iTowns/itowns/commit/4728d2d))
* **label:** labels don't jitter anymore ([1931326](https://github.com/iTowns/itowns/commit/1931326))
* **label:** makes LabelLayer able to run alone ([8cf0ca6](https://github.com/iTowns/itowns/commit/8cf0ca6))
* **label:** separate labels dom in layers ([84a7ff2](https://github.com/iTowns/itowns/commit/84a7ff2))
* **style:** load patterns correctly ([f5a1c95](https://github.com/iTowns/itowns/commit/f5a1c95))
* **test:** more robust animation testing. ([6ac683b](https://github.com/iTowns/itowns/commit/6ac683b))


### Performance Improvements

* **label:** don't loop into render() if there is no LabelLayer visible ([23558d3](https://github.com/iTowns/itowns/commit/23558d3))


### Workflow and chores

* release v2.25.0 ([8cb353e](https://github.com/iTowns/itowns/commit/8cb353e))
* **deps-dev:** bump node-fetch from 2.6.0 to 2.6.1 ([de26581](https://github.com/iTowns/itowns/commit/de26581))



<a name="2.24.3"></a>
## [2.24.3](https://github.com/iTowns/itowns/compare/v2.24.2...v2.24.3) (2020-09-10)


### Bug Fixes

* **example:** wrong display minimum zoom parameter in immersive view. ([4be4805](https://github.com/iTowns/itowns/commit/4be4805))
* **label:** delete LabelLayer if attached layer is also deleted ([f3dc93e](https://github.com/iTowns/itowns/commit/f3dc93e))
* **style:** correctly read the sprites from VT ([b181a5a](https://github.com/iTowns/itowns/commit/b181a5a))


### Code Refactoring

* add an abstract PointCloud system ([7f7cab8](https://github.com/iTowns/itowns/commit/7f7cab8))
* **controls:** reuse picked position ([c7a32f5](https://github.com/iTowns/itowns/commit/c7a32f5))
* **material:** mutualize common uniform/define methods ([693d649](https://github.com/iTowns/itowns/commit/693d649))


### Workflow and chores

* release v2.24.3 ([f810496](https://github.com/iTowns/itowns/commit/f810496))
* **deps:** bump bl from 4.0.2 to 4.0.3 ([e8e04e7](https://github.com/iTowns/itowns/commit/e8e04e7))


### BREAKING CHANGES

* The signature of the `PotreeLayer` constructor has
changed.



<a name="2.24.2"></a>
## [2.24.2](https://github.com/iTowns/itowns/compare/v2.24.1...v2.24.2) (2020-09-01)


### Features

* **style:** add a Style (CSS) Chunk system similar to ShaderChunk ([877471a](https://github.com/iTowns/itowns/commit/877471a))


### Bug Fixes

* **label:** add compatibility with <!DOCTYPE html> ([7d363a0](https://github.com/iTowns/itowns/commit/7d363a0))
* **style:** move label halo management from CSS example to Style.js ([e33ec37](https://github.com/iTowns/itowns/commit/e33ec37))


### Workflow and chores

* release v2.24.2 ([5e63c0c](https://github.com/iTowns/itowns/commit/5e63c0c))



<a name="2.24.1"></a>
## [2.24.1](https://github.com/iTowns/itowns/compare/v2.24.0...v2.24.1) (2020-08-25)


### Others

* release 2.24.1 ([5d62312](https://github.com/iTowns/itowns/commit/5d62312))



<a name="2.24.0"></a>
# [2.24.0](https://github.com/iTowns/itowns/compare/v2.23.0...v2.24.0) (2020-07-30)


### Features

* **examples:** 3D Tiles on 2.5D map ([ba1a8c8](https://github.com/iTowns/itowns/commit/ba1a8c8))
* **Label:** text stroke width support. ([07a616c](https://github.com/iTowns/itowns/commit/07a616c))
* **layer:** add max and min zoom properties, they define visibility interval. ([18c2ec3](https://github.com/iTowns/itowns/commit/18c2ec3))
* **LayerUpdateState:** enhancement handling of no data source. ([b0ebfca](https://github.com/iTowns/itowns/commit/b0ebfca))


### Bug Fixes

* **3dtiles:** update enableDracoLoader ([cddf2b9](https://github.com/iTowns/itowns/commit/cddf2b9))
* **DataSourceProvider:** wrong cache keys for vector sources. ([a44d003](https://github.com/iTowns/itowns/commit/a44d003))
* **examples:** remove redundant parameter ([95a5d12](https://github.com/iTowns/itowns/commit/95a5d12))
* **potree:** a typo disabled progressive display everytime ([2431a85](https://github.com/iTowns/itowns/commit/2431a85))
* **raster process:** error checking level elevation raster. ([c6b8bf9](https://github.com/iTowns/itowns/commit/c6b8bf9))
* **Webgl:** tempory fix webgl error. ([aca95ed](https://github.com/iTowns/itowns/commit/aca95ed))


### Performance Improvements

* remove some instanceof that can be avoided ([5119853](https://github.com/iTowns/itowns/commit/5119853))


### Examples

* **layer:** update examples with max and min zoom properties Layer. ([febc656](https://github.com/iTowns/itowns/commit/febc656))
* **VectorTile:** fix wrong max level source. ([31e8e91](https://github.com/iTowns/itowns/commit/31e8e91))


### Code Refactoring

* **c3Engine:** replace WebGLRenderer to WebGL1Renderer. ([37aa8e1](https://github.com/iTowns/itowns/commit/37aa8e1))
* **GeoJsonParser:** change filteringExtent parsing option to Extent or boolean, instead of only Extent. ([d73c52f](https://github.com/iTowns/itowns/commit/d73c52f))
* **Source:** clean handling error. ([b2399ee](https://github.com/iTowns/itowns/commit/b2399ee))


### Workflow and chores

* release v2.24.0 ([1521658](https://github.com/iTowns/itowns/commit/1521658))
* **deps:** bump elliptic from 6.5.2 to 6.5.3 ([ec2fd4a](https://github.com/iTowns/itowns/commit/ec2fd4a))
* **deps:** bump lodash from 4.17.15 to 4.17.19 ([3f24d44](https://github.com/iTowns/itowns/commit/3f24d44))
* update packages. ([3192f0d](https://github.com/iTowns/itowns/commit/3192f0d))


### Tests

* **layer:** update examples with max and min zoom properties Layer. ([d427aac](https://github.com/iTowns/itowns/commit/d427aac))



<a name="2.23.0"></a>
# [2.23.0](https://github.com/iTowns/itowns/compare/v2.22.0...v2.23.0) (2020-07-02)


### Features

* **Cache:** add get/set methods by key array. ([9665a43](https://github.com/iTowns/itowns/commit/9665a43))
* **style:** add Style inheritance ([d76a573](https://github.com/iTowns/itowns/commit/d76a573)), closes [#1318](https://github.com/iTowns/itowns/issues/1318)
* **style:** allow URL of a fill.pattern to be used ([fae1b34](https://github.com/iTowns/itowns/commit/fae1b34))


### Bug Fixes

* **core:** forgotten fetch options. ([ac8b1e3](https://github.com/iTowns/itowns/commit/ac8b1e3))
* **examples:** GUI errors in examples. ([32d856f](https://github.com/iTowns/itowns/commit/32d856f))
* **gui:** prevent other events when the GUI is used. ([3dd1b18](https://github.com/iTowns/itowns/commit/3dd1b18))
* **label:** register the labellayer if added alone ([f13c78c](https://github.com/iTowns/itowns/commit/f13c78c))
* **layer:** get correct extent destination for a LabelLayer ([a304a8d](https://github.com/iTowns/itowns/commit/a304a8d))
* **layer:** hide labels when hiding LabelLayers ([#1408](https://github.com/iTowns/itowns/issues/1408)) ([1ca4041](https://github.com/iTowns/itowns/commit/1ca4041))
* **oriented image:** wrong feature property calling. ([09a39c9](https://github.com/iTowns/itowns/commit/09a39c9))
* **parser:** MultiPoint from geojson files were not read correctly ([191c97d](https://github.com/iTowns/itowns/commit/191c97d)), closes [/tools.ietf.org/html/rfc7946#section-3](https://github.com//tools.ietf.org/html/rfc7946/issues/section-3)
* **renderer:** set the correct size for labels dom element ([9457593](https://github.com/iTowns/itowns/commit/9457593))
* **test:** wrong adding potree layers. ([55e82fc](https://github.com/iTowns/itowns/commit/55e82fc))


### Examples

* add a vector tile example with style drag and drop ([eeb6e16](https://github.com/iTowns/itowns/commit/eeb6e16))
* add labels in Shapefile example ([c89d284](https://github.com/iTowns/itowns/commit/c89d284))
* add labels in VRT example ([98dc439](https://github.com/iTowns/itowns/commit/98dc439))
* add labels in WFS example ([58ee3ba](https://github.com/iTowns/itowns/commit/58ee3ba))
* enable labels in kml example ([8d243c2](https://github.com/iTowns/itowns/commit/8d243c2))


### Code Refactoring

* **3d tiles:** move attribute from layer to tileset to match spec. ([25f59aa](https://github.com/iTowns/itowns/commit/25f59aa))
* **3dtiles:** remove BatchTableParser ([c027894](https://github.com/iTowns/itowns/commit/c027894))
* **3dtiles:** rename tileIndex property of C3DTilesLayer to tileset. ([8f0baaf](https://github.com/iTowns/itowns/commit/8f0baaf))
* **oriented image:** remove unnecessary key to cache. ([3c5f80c](https://github.com/iTowns/itowns/commit/3c5f80c))
* **parser:** re-write Matrix4#setMatrix3(). ([532a687](https://github.com/iTowns/itowns/commit/532a687)), closes [Matrix4#setMatrix3](https://github.com/Matrix4/issues/setMatrix3)
* **Provider:** remove unnecessary fetchedData source case. ([26ea402](https://github.com/iTowns/itowns/commit/26ea402))
* **Vector Tiles:** set style in vector tiles parser. ([cd0756f](https://github.com/iTowns/itowns/commit/cd0756f))


### Workflow and chores

* release v2.23.0 ([0e0cb04](https://github.com/iTowns/itowns/commit/0e0cb04))
* **3dtiles:** check that extensions found in a tileset have been correctly registered to layer ([a436aa9](https://github.com/iTowns/itowns/commit/a436aa9))
* **deps:** bump websocket-extensions from 0.1.3 to 0.1.4 ([cfcc09d](https://github.com/iTowns/itowns/commit/cfcc09d))
* **examples:** add tileMatrixSetLimits in a example layer. ([338dda0](https://github.com/iTowns/itowns/commit/338dda0))
* **parser:** change [@mapbox](https://github.com/mapbox)/togeojson to [@tmcw](https://github.com/tmcw)/togeojson ([75fb66b](https://github.com/iTowns/itowns/commit/75fb66b))
* **test:** replace bootstrap by mocha hook in functional tests. ([395424d](https://github.com/iTowns/itowns/commit/395424d))
* update packages. ([de5fd1f](https://github.com/iTowns/itowns/commit/de5fd1f))
* update tests and examples to support the new Style inheritance ([4cd9d5d](https://github.com/iTowns/itowns/commit/4cd9d5d))


### Tests

* **Cache:** add unit test on setByArray/getByArray ([259b38d](https://github.com/iTowns/itowns/commit/259b38d))
* **Layer:** add OrientedImageLayer unit test. ([4ff5126](https://github.com/iTowns/itowns/commit/4ff5126))


### Others

* refactor(3dtiles):Add spec classes and modify extensions management. ([8009f7a](https://github.com/iTowns/itowns/commit/8009f7a))


### BREAKING CHANGES

* **3dtiles:** C3DTilesLayer tileIndex renamed to tileset.
* **3dtiles:** C3DTileset's index attribute renamed to tiles.
* 3D Tiles Tileset index attribute (stored in
layer.tileIndex.index) is now an array starting at 0.
* 3D Tiles extensions are now registered in the
registeredExtensions attribute of C3DTilesLayer. See
examples/3dtiles_batch_table.html for an example.
* C3DTExtensions expects for an object extending
C3DTAbstractExtension to manage a registered extension instead
of a parser.
* Rename core 3D Tiles classes: $3DTilesExtensions
becomes C3DTExtensions and $3dTilesAbstractExtension becomes
C3DTAbstractExtension and BatchTableHierarchyExtension becomes
C3DTBatchTableHierarchyExtension.

* New classes maching the 3D Tiles specification:
C3DTBatchTable, C3DTBoundingVolume, C3DTileset.

* Add attributes to 3D Tiles core classes indicating their type

* 3D Tiles tests updated.

* 3D Tiles documentation updated.
* **style:** `Style#text.halo` is not available anymore, and each
property of it as been place in the `text` object, with the `halo`
prefix: `haloWidth`, `haloColor` and `haloBlur`.



<a name="2.22.0"></a>
# [2.22.0](https://github.com/iTowns/itowns/compare/v2.21.0...v2.22.0) (2020-06-04)


### Features

* **label:** add a first implementation of Labels ([1d05289](https://github.com/iTowns/itowns/commit/1d05289))
* **renderer:** add a renderer for Labels ([b8cded0](https://github.com/iTowns/itowns/commit/b8cded0))


### Bug Fixes

* **Cache:** wrong key handling when the keys count is inferior at 3. ([8bafa13](https://github.com/iTowns/itowns/commit/8bafa13))
* **planar:** use correct mouse position in PlanarControls ([347653c](https://github.com/iTowns/itowns/commit/347653c))
* sort features by order in VectorTileParser ([d0392c2](https://github.com/iTowns/itowns/commit/d0392c2))
* **source:** set the Style.minzoom correctly in VectorTilesSource ([#1395](https://github.com/iTowns/itowns/issues/1395)) ([f8d9de7](https://github.com/iTowns/itowns/commit/f8d9de7))
* **style:** add onload handler for symbol icon ([0bf3a69](https://github.com/iTowns/itowns/commit/0bf3a69))


### Examples

* change the raster GPX example to support labels ([b6448b8](https://github.com/iTowns/itowns/commit/b6448b8))
* enable labels in Vector Tiles examples ([a9bc6f3](https://github.com/iTowns/itowns/commit/a9bc6f3))


### Code Refactoring

* **core:** add Cache Class and instance one cache by Layer. ([94a63d7](https://github.com/iTowns/itowns/commit/94a63d7))
* **core:** rename Feature#geometry to geometries ([be61d15](https://github.com/iTowns/itowns/commit/be61d15))
* **style:** get anchor position values instead of CSS ([#1396](https://github.com/iTowns/itowns/issues/1396)) ([8c456d7](https://github.com/iTowns/itowns/commit/8c456d7))


### Workflow and chores

* release v2.22.0 ([a5ef5a5](https://github.com/iTowns/itowns/commit/a5ef5a5))
* fix lint in eslintrc.js ([32de088](https://github.com/iTowns/itowns/commit/32de088))
* rename some features variables to collection to avoid confusion ([0d40073](https://github.com/iTowns/itowns/commit/0d40073))
* update packages. ([8529e99](https://github.com/iTowns/itowns/commit/8529e99))


### Tests

* **unit:** add onload property to DOMElement ([47241b2](https://github.com/iTowns/itowns/commit/47241b2))


### BREAKING CHANGES

* **core:** `Feature#geometry` is no longer available, use
`Feature#geometries` instead.
* **style:** `Style#getTextAnchorPositionInCSS` has been renamed to
`Style#getTextAnchorPosition`.



<a name="2.21.0"></a>
# [2.21.0](https://github.com/iTowns/itowns/compare/v2.20.0...v2.21.0) (2020-05-06)


### Features

* **layer:** add `getCurrentMaxZoom` property to InfoLayer ([b35d414](https://github.com/iTowns/itowns/commit/b35d414))
* **style:** add partial support for steps in vector tiles ([36cdfd4](https://github.com/iTowns/itowns/commit/36cdfd4))


### Bug Fixes

* **Core:** unnecessary testing. ([f594727](https://github.com/iTowns/itowns/commit/f594727))
* **DataSourceProvider:** wrong withAltitude and withNormal parsing options. ([1de4391](https://github.com/iTowns/itowns/commit/1de4391))
* **demutils:** interpolate values considering noDataValue ([3ddaedf](https://github.com/iTowns/itowns/commit/3ddaedf))
* **ElevationLayer:** avoid to replace value if noDataValue is undefined. ([c359c81](https://github.com/iTowns/itowns/commit/c359c81))
* **examples:** change tile matrix limit to Ortho Layer. ([764d47a](https://github.com/iTowns/itowns/commit/764d47a))
* **examples:** wrong altitude points bus line. ([9419f97](https://github.com/iTowns/itowns/commit/9419f97))
* **test:** adapt FileSource and avoid overload Fetcher. ([d6d3242](https://github.com/iTowns/itowns/commit/d6d3242))
* **test:** add events managing back in bootstrap ([30b3354](https://github.com/iTowns/itowns/commit/30b3354))
* **test:** add global document before parsing src. ([09a200f](https://github.com/iTowns/itowns/commit/09a200f))
* **test:** dispose context crash if old canvas is keeped. ([df519e1](https://github.com/iTowns/itowns/commit/df519e1))
* **VectorTileParser:** wrong calling filter expression. ([c1b8065](https://github.com/iTowns/itowns/commit/c1b8065))
* **VectorTileParser:** wrong layers filtering by zoom. ([0f20ce3](https://github.com/iTowns/itowns/commit/0f20ce3))


### Code Refactoring

* **convert:** handling NaN to minAltitude computing. ([3f7cb7e](https://github.com/iTowns/itowns/commit/3f7cb7e))
* **core:** remove BuilderEllipsoidTile#OBB ([37c2908](https://github.com/iTowns/itowns/commit/37c2908)), closes [#1381](https://github.com/iTowns/itowns/issues/1381)
* **Feature:** build feature extent with the correct crs. ([90cf38c](https://github.com/iTowns/itowns/commit/90cf38c))
* **FileSource:** pre-Parse file in constructor Layer. ([8a1193d](https://github.com/iTowns/itowns/commit/8a1193d))
* **Layer:** move Layer.sequence initialization to View. ([53fa9a3](https://github.com/iTowns/itowns/commit/53fa9a3))
* **Layer:** Robust layer#whenReady mechanisms. ([ab8d3d0](https://github.com/iTowns/itowns/commit/ab8d3d0))
* **OrientedImage:** move fetching to OrientedImageSource. ([cc66768](https://github.com/iTowns/itowns/commit/cc66768))
* **parser:** remove unnecessary extent to parse vector tile file. ([2328e4c](https://github.com/iTowns/itowns/commit/2328e4c))
* **source:** add C3DtilesSource. ([c2e3485](https://github.com/iTowns/itowns/commit/c2e3485))
* **style:** add minzooom/maxzoom support ([0f67725](https://github.com/iTowns/itowns/commit/0f67725))
* **style:** make the text outline lighter, and limit it to 1px wide ([ba68784](https://github.com/iTowns/itowns/commit/ba68784))
* **test:** use mocha --file to unit tests instead of use first file list. ([90c6eaf](https://github.com/iTowns/itowns/commit/90c6eaf))
* **view:** allow GeometryLayer in View#pickFeaturesAt ([0c9bf0d](https://github.com/iTowns/itowns/commit/0c9bf0d))


### Workflow and chores

* release v2.21.0 ([6813063](https://github.com/iTowns/itowns/commit/6813063))
* add deepscan badge. ([1e0f35b](https://github.com/iTowns/itowns/commit/1e0f35b))
* **test:** add batch table test unit. ([e02dc25](https://github.com/iTowns/itowns/commit/e02dc25))
* **test:** add DEMUtils unit test. ([025e56c](https://github.com/iTowns/itowns/commit/025e56c))
* **test:** add ellipsoid test unit. ([74f2a60](https://github.com/iTowns/itowns/commit/74f2a60))
* **test:** add feature2Mesh test unit. ([f02b735](https://github.com/iTowns/itowns/commit/f02b735))
* **test:** add Style unit test and move global declaration to mock file. ([b36027e](https://github.com/iTowns/itowns/commit/b36027e))
* **test:** add view test unit. ([4c3c2e2](https://github.com/iTowns/itowns/commit/4c3c2e2))
* **test:** clean and add GlobeControls unit tests. ([f643db7](https://github.com/iTowns/itowns/commit/f643db7))
* **test:** move mock file to bootstrap file. ([7c70267](https://github.com/iTowns/itowns/commit/7c70267))
* update packages. ([203f5ad](https://github.com/iTowns/itowns/commit/203f5ad))


### Documentation

* **Layer:** add View#whenReady, View#ready and View#source documentation. ([d7bb925](https://github.com/iTowns/itowns/commit/d7bb925))


### Tests

* **unit:** rewrote vector tiles testing ([4509fa7](https://github.com/iTowns/itowns/commit/4509fa7))


### BREAKING CHANGES

* **view:** the signature of View#pickFeaturesAt has changed
* **style:** Style#setFromVectorTile no longer has a `zoom`
parameter. The `zoom` value is equal to `Style#minzoom`.
* **FileSource:** Source must be in Layer constructor options.
You couldn't add a source after a Layer instancing.
* **source:** To instance C3DtilesLayer, it's needed to instance C3DtilesSource too.



<a name="2.20.0"></a>
# [2.20.0](https://github.com/iTowns/itowns/compare/v2.19.0...v2.20.0) (2020-04-03)


### Features

* **core:** export itowns release version. ([a35943c](https://github.com/iTowns/itowns/commit/a35943c))
* **renderer:** emit a (in)visible event for LayeredMaterial ([e889b59](https://github.com/iTowns/itowns/commit/e889b59)), closes [#1303](https://github.com/iTowns/itowns/issues/1303)
* **style:** add Style to CSS methods ([15699fd](https://github.com/iTowns/itowns/commit/15699fd))
* **style:** add support for complex fields ([812207a](https://github.com/iTowns/itowns/commit/812207a))


### Bug Fixes

* **debug:** wrong OBBHelper visibility and transforming. ([02c2105](https://github.com/iTowns/itowns/commit/02c2105))
* **debug:** wrong parameter for tile cleaning. ([0531199](https://github.com/iTowns/itowns/commit/0531199))
* **example:** missing parameters in GUITools creation ([98f610c](https://github.com/iTowns/itowns/commit/98f610c))
* **examples:** change sseThreshold because geometric error sample was changed. ([7a02136](https://github.com/iTowns/itowns/commit/7a02136))
* **view:** check every offset for eventToViewCoords ([19f575f](https://github.com/iTowns/itowns/commit/19f575f))


### Code Refactoring

* **core:** optimize tile cleaning. ([fde6363](https://github.com/iTowns/itowns/commit/fde6363))
* **DEMUtils:** change the getElevationValueAt method ([e9c2cf6](https://github.com/iTowns/itowns/commit/e9c2cf6))
* **geographic:** unify and encapsulate crs. ([8fa4a84](https://github.com/iTowns/itowns/commit/8fa4a84))
* **picking:** picking with the new Raycaster.layers THREE 114. ([b6e162c](https://github.com/iTowns/itowns/commit/b6e162c))
* **style:** merge addIconToElement into applyToHTML ([c7953a2](https://github.com/iTowns/itowns/commit/c7953a2))
* **THREE:** Material.vertexColors is now a boolean. ([825b867](https://github.com/iTowns/itowns/commit/825b867))


### Workflow and chores

* release v2.20.0 ([c3aed21](https://github.com/iTowns/itowns/commit/c3aed21))
* **deps:** bump acorn from 6.4.0 to 6.4.1 ([f1daec6](https://github.com/iTowns/itowns/commit/f1daec6))
* remove blank line. ([3e968cf](https://github.com/iTowns/itowns/commit/3e968cf))
* update packages. ([c59f838](https://github.com/iTowns/itowns/commit/c59f838))


### BREAKING CHANGES

* **DEMUtils:** the method `DEMUtils.getElevationValueAt` only returns
a value now, if you want the previous object, use
`DEMUtils.getTerrainObjectAt` instead.



<a name="2.19.0"></a>
# [2.19.0](https://github.com/iTowns/itowns/compare/v2.18.0...v2.19.0) (2020-03-03)


### Features

* **view:** add a `domElement` property ([86e0024](https://github.com/iTowns/itowns/commit/86e0024))
* **view:** add a `resize` method for the viewer ([7a70246](https://github.com/iTowns/itowns/commit/7a70246)), closes [#1333](https://github.com/iTowns/itowns/issues/1333)


### Bug Fixes

* **debug:** display 3dtiles bbox helper. ([f06f28b](https://github.com/iTowns/itowns/commit/f06f28b))
* **debug:** miss css circle for sse helper. ([cc7b463](https://github.com/iTowns/itowns/commit/cc7b463))
* **debug:** wrong transformation for bbox helper. ([6c57158](https://github.com/iTowns/itowns/commit/6c57158))
* **debug:** wrong update to potree debug. ([93ef794](https://github.com/iTowns/itowns/commit/93ef794))
* **example:** picking in kml raster example. ([05fa58d](https://github.com/iTowns/itowns/commit/05fa58d))
* **examples:** bad `this` reference in 3dTilesHelper ([26f0de5](https://github.com/iTowns/itowns/commit/26f0de5))
* **examples:** color line function returned black color and add better filter line. ([698749d](https://github.com/iTowns/itowns/commit/698749d))
* **examples:** wrong min and max altitude in 2.5D examples. ([51fe996](https://github.com/iTowns/itowns/commit/51fe996))
* **GeometryLayer:** wrong function declaration. ([f5fb861](https://github.com/iTowns/itowns/commit/f5fb861))
* **test:** fix camera and globecontrol unit tests after proj4 update ([edb545c](https://github.com/iTowns/itowns/commit/edb545c))
* **VectorTile:** Differentiated style caches with the VectorTileSources. ([1dbac04](https://github.com/iTowns/itowns/commit/1dbac04))
* **view:** use correct DOM element and offset ([37047d7](https://github.com/iTowns/itowns/commit/37047d7)), closes [#1333](https://github.com/iTowns/itowns/issues/1333)


### Code Refactoring

* **debug:** OBBHelper extends by THREE.Box3Helper. ([7126c08](https://github.com/iTowns/itowns/commit/7126c08))
* **PointCloud:** add PointCloudSource and PointCloudNode. ([9587fa2](https://github.com/iTowns/itowns/commit/9587fa2))
* **PointCloud:** change tests units. ([4fd93dd](https://github.com/iTowns/itowns/commit/4fd93dd))
* **pointCloud:** remove Lopocs support. ([e81a671](https://github.com/iTowns/itowns/commit/e81a671))
* **pointCloud:** use BoxHelper to display point cloud boudingBox. ([c04fd64](https://github.com/iTowns/itowns/commit/c04fd64))
* **potree:** use only Potree.load function in provider and add Potree.url getter. ([1b31372](https://github.com/iTowns/itowns/commit/1b31372))
* **process:** use Geometry.applyMatrix4() to transform vertex position. ([0d3789d](https://github.com/iTowns/itowns/commit/0d3789d))
* **proj4:** simplify coordinates conversion ([1d65844](https://github.com/iTowns/itowns/commit/1d65844))


### Workflow and chores

* release v2.19.0 ([2dda206](https://github.com/iTowns/itowns/commit/2dda206))
* **css:** change z-index of some html elements in examples ([04e7c32](https://github.com/iTowns/itowns/commit/04e7c32))
* rename all poinCloudXxx to potreeXxx. ([599ea61](https://github.com/iTowns/itowns/commit/599ea61))
* rename Frustum.setFromMatrix() to Frustum.setFromProjectionMatrix() ([81560f2](https://github.com/iTowns/itowns/commit/81560f2))
* rename Object3D.applyMatrix to Object3D.applyMatrix4 ([3d8b083](https://github.com/iTowns/itowns/commit/3d8b083))
* rename THREE.math to THREE.mathUtils ([2fb126b](https://github.com/iTowns/itowns/commit/2fb126b))
* **test:** move variables declaration in describe() ([a4f792a](https://github.com/iTowns/itowns/commit/a4f792a))
* update packages. ([ca18cec](https://github.com/iTowns/itowns/commit/ca18cec))


### Documentation

* **style:** add default values and proper documentation of Style properties ([c86fcc2](https://github.com/iTowns/itowns/commit/c86fcc2))


### Tests

* **globecontrol:** emitEvent on correct DOMelement ([e996369](https://github.com/iTowns/itowns/commit/e996369))
* write a proper mock of DOMElement ([2210132](https://github.com/iTowns/itowns/commit/2210132))


### BREAKING CHANGES

* **PointCloud:** To add points cloud, you need to instance:
- PointCloudSource to specify parameters to fetch data.
- PointCloudLayer to add this points cloud in viewer.



<a name="2.18.0"></a>
# [2.18.0](https://github.com/iTowns/itowns/compare/v2.17.0...v2.18.0) (2020-02-05)


### Features

* **controls:** use a more global div for event listening ([e3ff159](https://github.com/iTowns/itowns/commit/e3ff159))
* **style:** add more complete parsing of vector tiles style ([a5cdbf0](https://github.com/iTowns/itowns/commit/a5cdbf0))


### Bug Fixes

* **core:** remove objects of a GeometryLayer from the Scene ([95e420b](https://github.com/iTowns/itowns/commit/95e420b))
* **example:** add the GUITools to the parent of viewerDiv ([b348207](https://github.com/iTowns/itowns/commit/b348207))
* **example:** don't apply transformation to the camera ([5e822af](https://github.com/iTowns/itowns/commit/5e822af))
* **feature:** return style when filtering features ([0e6d94a](https://github.com/iTowns/itowns/commit/0e6d94a))
* **layer:** wrong default value for min and max subdivision level. ([da30c18](https://github.com/iTowns/itowns/commit/da30c18))
* **parser:** add an option to parse symbols as circles in VT ([586dbb2](https://github.com/iTowns/itowns/commit/586dbb2)), closes [#1310](https://github.com/iTowns/itowns/issues/1310)
* **terrain:** apply parameter segments to define the segments count by side tile. ([0669940](https://github.com/iTowns/itowns/commit/0669940)), closes [#910](https://github.com/iTowns/itowns/issues/910)
* **test:** change value of visible tiles in planar ([c2c5704](https://github.com/iTowns/itowns/commit/c2c5704))


### Code Refactoring

* **extent:** use global variable in isPointInside ([abb72c5](https://github.com/iTowns/itowns/commit/abb72c5))
* **Layer:** add c3DTilesLayer. ([7b067c7](https://github.com/iTowns/itowns/commit/7b067c7))
* **Layer:** add PointCloudLayer. ([cd49423](https://github.com/iTowns/itowns/commit/cd49423))
* **layer:** move LayerUpdateState to class structure ([55f7a2b](https://github.com/iTowns/itowns/commit/55f7a2b))
* **orientedImage:** remove useless material property from oriented image feature. ([a67fcb0](https://github.com/iTowns/itowns/commit/a67fcb0)), closes [#990](https://github.com/iTowns/itowns/issues/990)
* remove the Feature reference from FeatureGeometry ([f703723](https://github.com/iTowns/itowns/commit/f703723))
* **View:** remove useless provider pre-process. ([788454c](https://github.com/iTowns/itowns/commit/788454c))


### Workflow and chores

* release v2.18.0 ([1c2a669](https://github.com/iTowns/itowns/commit/1c2a669))
* **deps:** bump handlebars from 4.1.2 to 4.5.3 ([ab81ac2](https://github.com/iTowns/itowns/commit/ab81ac2))
* update packages. ([805b896](https://github.com/iTowns/itowns/commit/805b896))



<a name="2.17.0"></a>
# [2.17.0](https://github.com/iTowns/itowns/compare/v2.16.0...v2.17.0) (2019-12-18)


### Features

* **view:** initialize position with CameraTransformOptions. ([0643300](https://github.com/iTowns/itowns/commit/0643300))


### Bug Fixes

* **test:** adapt unit test to new view Constructor. ([edfc652](https://github.com/iTowns/itowns/commit/edfc652))


### Code Refactoring

* **cache:** ditch Map() in Cache for simple tree ([#1264](https://github.com/iTowns/itowns/issues/1264)) ([881604f](https://github.com/iTowns/itowns/commit/881604f))
* **controls:** clean class GlobeControls. ([1e6c4d8](https://github.com/iTowns/itowns/commit/1e6c4d8))
* **controls:** simplify animation and globeControls damping. ([d87e133](https://github.com/iTowns/itowns/commit/d87e133))
* **controls:** use Class for GlobeControls. ([b70125d](https://github.com/iTowns/itowns/commit/b70125d))


### Workflow and chores

* release v2.17.0 ([a5d337c](https://github.com/iTowns/itowns/commit/a5d337c))
* add proxy argument to functional tests. ([0b6f3b5](https://github.com/iTowns/itowns/commit/0b6f3b5))
* remove unused files. ([21fb3b3](https://github.com/iTowns/itowns/commit/21fb3b3))
* update packages. ([bacc5f3](https://github.com/iTowns/itowns/commit/bacc5f3))
* update packages. ([2955aaf](https://github.com/iTowns/itowns/commit/2955aaf))


### BREAKING CHANGES

* **view:** Constructor signature changes.



<a name="2.16.0"></a>
# [2.16.0](https://github.com/iTowns/itowns/compare/v2.15.3...v2.16.0) (2019-11-26)


### Features

* **source:** add VectorTileSource. ([cd43854](https://github.com/iTowns/itowns/commit/cd43854))
* **vector tiles:** best support for vector tiles. ([a882b50](https://github.com/iTowns/itowns/commit/a882b50))


### Bug Fixes

* **example:** avoid collision camera with the ground. ([9a5580b](https://github.com/iTowns/itowns/commit/9a5580b))
* **process:** wrong pitch to color textures. ([540f3dd](https://github.com/iTowns/itowns/commit/540f3dd))
* **provider:** wrong tag to cache data. ([4b1adf2](https://github.com/iTowns/itowns/commit/4b1adf2))
* **test:** apply vector tiles changes to tests ([02c7555](https://github.com/iTowns/itowns/commit/02c7555))


### Code Refactoring

* **example:** add all layers in vector tiles examples. ([b3b900b](https://github.com/iTowns/itowns/commit/b3b900b))
* rename .coords as .extent when it was an Extent ([7893da9](https://github.com/iTowns/itowns/commit/7893da9))


### Workflow and chores

* release v2.16.0 ([6df3c3c](https://github.com/iTowns/itowns/commit/6df3c3c))



<a name="2.15.3"></a>
## [2.15.3](https://github.com/iTowns/itowns/compare/v2.15.2...v2.15.3) (2019-10-10)


### Bug Fixes

* **core:** forgotten glsl includes. ([cd770ec](https://github.com/iTowns/itowns/commit/cd770ec))


### Workflow and chores

* release v2.15.3 ([5f3db8c](https://github.com/iTowns/itowns/commit/5f3db8c))



<a name="2.15.2"></a>
## [2.15.2](https://github.com/iTowns/itowns/compare/v2.15.1...v2.15.2) (2019-10-09)


### Features

* **extent:** add isExtent flag to Extent class ([dbdf23f](https://github.com/iTowns/itowns/commit/dbdf23f))


### Bug Fixes

* **coord:** set CRS in Coordinates#copy() ([9a0e37b](https://github.com/iTowns/itowns/commit/9a0e37b))
* **feature:** convert coordinate and extent to correct projection when ([a3c1194](https://github.com/iTowns/itowns/commit/a3c1194))


### Workflow and chores

* release v2.15.2 ([c3fc8d5](https://github.com/iTowns/itowns/commit/c3fc8d5))



<a name="2.15.1"></a>
## [2.15.1](https://github.com/iTowns/itowns/compare/v2.15.0...v2.15.1) (2019-10-04)


### Bug Fixes

* **utils:** change the CRS of the coordinate in FeatureUtils ([db19ea0](https://github.com/iTowns/itowns/commit/db19ea0))


### Workflow and chores

* release v2.15.1 ([b112ac5](https://github.com/iTowns/itowns/commit/b112ac5))
* update packages. ([22e2a66](https://github.com/iTowns/itowns/commit/22e2a66))



<a name="2.15.0"></a>
# [2.15.0](https://github.com/iTowns/itowns/compare/v2.14.0...v2.15.0) (2019-10-04)


### Features

* **debug:** enhancement debug gui. ([0aa6e42](https://github.com/iTowns/itowns/commit/0aa6e42))
* **OrientationUtils:** fix [#1215](https://github.com/iTowns/itowns/issues/1215), doc, better api ([c413902](https://github.com/iTowns/itowns/commit/c413902))
* **plugins:** readapt FeatureToolTip with pickFeaturesAt ([b037f3a](https://github.com/iTowns/itowns/commit/b037f3a))
* **view:** add a pickFeaturesAt method in View ([4032bc8](https://github.com/iTowns/itowns/commit/4032bc8))
* **view:** add isGlobeView and isPlanarView booleans ([ea54aa2](https://github.com/iTowns/itowns/commit/ea54aa2))


### Bug Fixes

* **3dtile:** avoid to clone overrideMaterials to each each assignment. ([968643b](https://github.com/iTowns/itowns/commit/968643b))
* **layer:** undefined projection for planar builder. ([9158e44](https://github.com/iTowns/itowns/commit/9158e44))
* **style:** add circle style support. ([b80ab06](https://github.com/iTowns/itowns/commit/b80ab06))


### Code Refactoring

* **core:** Clean up DataSourceProvider. ([bb32196](https://github.com/iTowns/itowns/commit/bb32196))
* **core:** move handling fetcher/parser to Source class. ([ab20f4c](https://github.com/iTowns/itowns/commit/ab20f4c))
* **process:** clean up and remove useless FileSource case. ([6bf4137](https://github.com/iTowns/itowns/commit/6bf4137))


### Workflow and chores

* release v2.15.0 ([5b9d94c](https://github.com/iTowns/itowns/commit/5b9d94c))
* **controls:** remove deprecated methods in GlobeControls ([b6e5756](https://github.com/iTowns/itowns/commit/b6e5756))
* **doc:** fix missing scrolling on content ([c1ffcb3](https://github.com/iTowns/itowns/commit/c1ffcb3))
* **docs:** fix some CSS problems when having a small window ([9f52531](https://github.com/iTowns/itowns/commit/9f52531))
* **es6:** use ES6 type class for c3DEngine ([4f89982](https://github.com/iTowns/itowns/commit/4f89982))
* update npm packages. ([43218b2](https://github.com/iTowns/itowns/commit/43218b2))
* upgrade vulnerable packages ([1998307](https://github.com/iTowns/itowns/commit/1998307))



<a name="2.14.0"></a>
# [2.14.0](https://github.com/iTowns/itowns/compare/v2.13.1...v2.14.0) (2019-09-04)


### Features

* **3dtile:** add onTileContentLoaded callback called when new content is loaded. ([bb44243](https://github.com/iTowns/itowns/commit/bb44243))
* **core:** support fill pattern image for features to raster. ([8cbaae6](https://github.com/iTowns/itowns/commit/8cbaae6))
* **orientation:** improved crs support for rotations ([3400360](https://github.com/iTowns/itowns/commit/3400360))
* **parser:** add a plugin to parse OGR VRT and CSV files ([7723fbd](https://github.com/iTowns/itowns/commit/7723fbd))
* **point:** option to link OrientedImageMaterial to PointsMaterial. ([f89f1c5](https://github.com/iTowns/itowns/commit/f89f1c5))


### Bug Fixes

* **controls:** focus on the viewer div after view creation ([f8be633](https://github.com/iTowns/itowns/commit/f8be633))
* **examples:** bad images link and wrong css in loading screen ([dd8c6b5](https://github.com/iTowns/itowns/commit/dd8c6b5))
* **examples:** change Ortho tile matrix set limit. ([1438399](https://github.com/iTowns/itowns/commit/1438399))
* **example:** wrong move atmosphere in multi globe. ([60a913a](https://github.com/iTowns/itowns/commit/60a913a))
* **orientedImage:** wrong affectation in projective texture shader. ([b684d7b](https://github.com/iTowns/itowns/commit/b684d7b))
* **picking:** NaN value when getting the tile under the picking position ([971e7ff](https://github.com/iTowns/itowns/commit/971e7ff))
* **test:** call correctly each View with a domElement. ([643a874](https://github.com/iTowns/itowns/commit/643a874))


### Examples

* **js:** move plugins to a specific folder ([5459c9d](https://github.com/iTowns/itowns/commit/5459c9d))
* **js:** rename and move LoadingScreen to GUI folder ([f370f44](https://github.com/iTowns/itowns/commit/f370f44))
* **js:** replace dat.gui by a cdn version ([215a4d3](https://github.com/iTowns/itowns/commit/215a4d3))
* **js:** replace proj4defs files by direct declaration ([15d10b3](https://github.com/iTowns/itowns/commit/15d10b3))


### Code Refactoring

* **Layer:** change to display raster in zoom 20. ([4c80d02](https://github.com/iTowns/itowns/commit/4c80d02))
* **source:** extend WMTSSource from TMSSource. ([8935ec9](https://github.com/iTowns/itowns/commit/8935ec9))


### Workflow and chores

* release v2.14.0 ([fd6800b](https://github.com/iTowns/itowns/commit/fd6800b))
* **example:** correct the view source link ([0492d14](https://github.com/iTowns/itowns/commit/0492d14))
* **example:** fix some CSS misalignement ([#1209](https://github.com/iTowns/itowns/issues/1209)) ([5a90b48](https://github.com/iTowns/itowns/commit/5a90b48))
* **example:** rewrite the index page of examples ([#1202](https://github.com/iTowns/itowns/issues/1202)) ([9097436](https://github.com/iTowns/itowns/commit/9097436))
* update npm packages. ([feba6ff](https://github.com/iTowns/itowns/commit/feba6ff))



<a name="2.13.1"></a>
## [2.13.1](https://github.com/iTowns/itowns/compare/v2.13.0...v2.13.1) (2019-07-31)


### Bug Fixes

* **elevation:** add a removed line from the elevation shader ([b9de977](https://github.com/iTowns/itowns/commit/b9de977))


### Workflow and chores

* release v2.13.1 ([f3d47da](https://github.com/iTowns/itowns/commit/f3d47da))



<a name="2.13.0"></a>
# [2.13.0](https://github.com/iTowns/itowns/compare/v2.12.0...v2.13.0) (2019-07-31)


### Features

* **layer:** add full support to scaling for elevation layers ([e736d1f](https://github.com/iTowns/itowns/commit/e736d1f)), closes [#511](https://github.com/iTowns/itowns/issues/511)
* **url:** add sub-domains handling in url construction ([5638615](https://github.com/iTowns/itowns/commit/5638615)), closes [#942](https://github.com/iTowns/itowns/issues/942)


### Bug Fixes

* **core:** check if Mesh.material is an array in OBBHelper ([69536f4](https://github.com/iTowns/itowns/commit/69536f4))
* **core:** handle the case where the Mesh.material is an array ([ddc820e](https://github.com/iTowns/itowns/commit/ddc820e))
* **process:** wrong offset scale for elevation texture. ([f191a74](https://github.com/iTowns/itowns/commit/f191a74))
* **test:** core breaking changes after refactor TMS/Extent ([b9f3b77](https://github.com/iTowns/itowns/commit/b9f3b77))
* **utils:** preserve callback quaternion when we use CameraUtils. ([d47da2a](https://github.com/iTowns/itowns/commit/d47da2a))


### Code Refactoring

* **core:** tile matrix set and projection/crs handling. ([f5d8cac](https://github.com/iTowns/itowns/commit/f5d8cac))
* **source:** The projection option to instance a TMS and WMTS source is mandatory. ([1f35627](https://github.com/iTowns/itowns/commit/1f35627))


### Workflow and chores

* release v2.13.0 ([4c56493](https://github.com/iTowns/itowns/commit/4c56493))
* **md:** add some testing tips for development ([775c771](https://github.com/iTowns/itowns/commit/775c771))
* update npm packages. ([044171f](https://github.com/iTowns/itowns/commit/044171f))
* update THREE to r106.2 ([e51ea8f](https://github.com/iTowns/itowns/commit/e51ea8f))


### Tests

* **extent:** add a test to get center for extrem cases ([d305a6b](https://github.com/iTowns/itowns/commit/d305a6b))
* **unit:** add GlobeView, feature process, point clould, 3dtiles test unit. ([d7989d2](https://github.com/iTowns/itowns/commit/d7989d2))


### Others

* Merge pull request #1187 from zarov/835-planar-controls ([fd8c61d](https://github.com/iTowns/itowns/commit/fd8c61d)), closes [#1187](https://github.com/iTowns/itowns/issues/1187)


### BREAKING CHANGES

* **source:** The projection option to instance a TMS and WMTS source is mandatory.



<a name="2.12.0"></a>
# [2.12.0](https://github.com/iTowns/itowns/compare/v2.11.1...v2.12.0) (2019-07-01)


### Features

* **core:** doesn't clean depth buffer when needed. ([3a8daf0](https://github.com/iTowns/itowns/commit/3a8daf0))
* **example:** add a DragNDrop module in examples/ ([1fcca5a](https://github.com/iTowns/itowns/commit/1fcca5a))
* **orientedImage:** support multi transformation panoramics and masks ([4c4e791](https://github.com/iTowns/itowns/commit/4c4e791))
* **parser:** add a TIFF parser using utif ([5a36f93](https://github.com/iTowns/itowns/commit/5a36f93))
* **system:** expose Capabilities class in Main. ([e9de7b6](https://github.com/iTowns/itowns/commit/e9de7b6))


### Bug Fixes

* **examples:** remove UTIF package and use it from a CDN ([15e1d44](https://github.com/iTowns/itowns/commit/15e1d44))
* FT_RTC have to be a local variable ([a542e91](https://github.com/iTowns/itowns/commit/a542e91))
* **tms:** return the correct coordinates for a TMS source ([3d9ae12](https://github.com/iTowns/itowns/commit/3d9ae12))


### Examples

* **dragndrop:** update the legend ([2311b48](https://github.com/iTowns/itowns/commit/2311b48))


### Code Refactoring

* **controls:** fixes and optimization for StreetControls ([9680f17](https://github.com/iTowns/itowns/commit/9680f17))
* **view:** change Views to ES6 syntax ([15ce61e](https://github.com/iTowns/itowns/commit/15ce61e))
* **view:** unify events. ([3ac9394](https://github.com/iTowns/itowns/commit/3ac9394))


### Workflow and chores

* release v2.12.0 ([d40e8af](https://github.com/iTowns/itowns/commit/d40e8af))


### Documentation

* **layer:** use Source instead of a list of all sources ([10e4df1](https://github.com/iTowns/itowns/commit/10e4df1))


### Tests

* **process:** don't use a zero-size extent, it is prone to error ([0f8e3c7](https://github.com/iTowns/itowns/commit/0f8e3c7))



<a name="2.11.1"></a>
## [2.11.1](https://github.com/iTowns/itowns/compare/v2.11.0...v2.11.1) (2019-06-06)


### Bug Fixes

* **geographic:** return the correct center of an extent ([f88b5a2](https://github.com/iTowns/itowns/commit/f88b5a2))


### Workflow and chores

* release v2.11.1 ([78fa8dc](https://github.com/iTowns/itowns/commit/78fa8dc))
* update npm packages. ([a94bba0](https://github.com/iTowns/itowns/commit/a94bba0))
* update THREE to r105.2 ([54a8f9b](https://github.com/iTowns/itowns/commit/54a8f9b))



<a name="2.11.0"></a>
# [2.11.0](https://github.com/iTowns/itowns/compare/v2.10.0...v2.11.0) (2019-06-04)


### Features

* **3dtile:** support rtc center from feature. ([b050461](https://github.com/iTowns/itowns/commit/b050461))
* **core:** export Feature, FeatureCollection and FeatureGeometry ([b0e5838](https://github.com/iTowns/itowns/commit/b0e5838))


### Bug Fixes

* **chore:** no message on shader failed after THREE v104. ([6ba4733](https://github.com/iTowns/itowns/commit/6ba4733))
* **converter:** don't allow filling for LINES features ([bfd9260](https://github.com/iTowns/itowns/commit/bfd9260))
* **test:** test parse Style. ([f439b2d](https://github.com/iTowns/itowns/commit/f439b2d))
* **tooltip:** display all properties of a feature ([cc778a1](https://github.com/iTowns/itowns/commit/cc778a1))


### Code Refactoring

* **core:** Coordinates to ES6 class ([d02f3a0](https://github.com/iTowns/itowns/commit/d02f3a0))
* **core:** reflect the refactor of Coordinates across examples/ ([76bfbd2](https://github.com/iTowns/itowns/commit/76bfbd2))
* **core:** reflect the refactor of Coordinates across src/ ([e4a9805](https://github.com/iTowns/itowns/commit/e4a9805))
* **core:** reflect the refactor of Coordinates across test/ ([9a98a8b](https://github.com/iTowns/itowns/commit/9a98a8b))
* **view:** simplify the whenReady section of the View ([3bc8223](https://github.com/iTowns/itowns/commit/3bc8223))


### Workflow and chores

* release v2.11.0 ([e104d14](https://github.com/iTowns/itowns/commit/e104d14))
* add watch script to transpile when sources files has changed. ([a2ce36d](https://github.com/iTowns/itowns/commit/a2ce36d))
* option to disable babel-inline-import-loader. ([8d2b104](https://github.com/iTowns/itowns/commit/8d2b104)), closes [#934](https://github.com/iTowns/itowns/issues/934)
* update npm packages. ([575fa70](https://github.com/iTowns/itowns/commit/575fa70))
* update THREE to r104.0 ([1a3f093](https://github.com/iTowns/itowns/commit/1a3f093))
* **view:** remove support of passing a source as an object ([3bfef5c](https://github.com/iTowns/itowns/commit/3bfef5c))


### Others

*     chore(view): remove createXXXLayer methods ([20381a2](https://github.com/iTowns/itowns/commit/20381a2))


### BREAKING CHANGES

* **core:** * `x()`, `y()`, `z()`, `latitude()`, `longitude()` and `altitude()` have
been replaced by getters of the same names
* `setAltitude()` has been replaced by a setter on `altitude`
* the validity of a CRS is no longer check when doing conversion using
`as()`, so it needs to be checked beforehand if needed
* **view:** Adding a layer to a view, with a source not
instantiated (only as an object) is no longer supported, even in
deprecation mode.



<a name="2.10.0"></a>
# [2.10.0](https://github.com/iTowns/itowns/compare/v2.9.0...v2.10.0) (2019-05-10)


### Features

* **core:** add initialization condition when union a Extent ([c8c9991](https://github.com/iTowns/itowns/commit/c8c9991))
* **parser:** classify polygon by clockwise. ([37cf1ba](https://github.com/iTowns/itowns/commit/37cf1ba))
* **parser:** parse vector tile in Feature without coordinates conversion. ([efa0f7e](https://github.com/iTowns/itowns/commit/efa0f7e))


### Bug Fixes

* **provider:** remove the caching exception causing jittering ([b7b4f26](https://github.com/iTowns/itowns/commit/b7b4f26))
* **test:** inverse range with wheel mouse event. ([42bd1c4](https://github.com/iTowns/itowns/commit/42bd1c4))


### Examples

* add a new one with a multipolygon geojson ([a539446](https://github.com/iTowns/itowns/commit/a539446))


### Code Refactoring

* **converter:** In feature2Mesh, avoid transformation if altitude is zero. ([745784e](https://github.com/iTowns/itowns/commit/745784e))
* **coord:** remove C.EPSG_4326 ([1fdd137](https://github.com/iTowns/itowns/commit/1fdd137))
* **core:** add style class. ([88f959f](https://github.com/iTowns/itowns/commit/88f959f))
* **core:** use class Es6 for Builder tile and add factory of Tile. ([6bbef61](https://github.com/iTowns/itowns/commit/6bbef61))
* **core:** use proj4 to set ellipsoid size. ([66d43ca](https://github.com/iTowns/itowns/commit/66d43ca))
* **core:** use specification to set EPSG:3857 bound dimension ([9b32b44](https://github.com/iTowns/itowns/commit/9b32b44))
* **crs:** create a CRS module ([b5d81c6](https://github.com/iTowns/itowns/commit/b5d81c6))
* **ellipsoid:** move ellipsoidSizes from Coordinates to Ellipsoid ([8739dfb](https://github.com/iTowns/itowns/commit/8739dfb))
* **extent:** remove Float64Array from Extent ([8319c36](https://github.com/iTowns/itowns/commit/8319c36))
* **parser:** Class Feature ([9895d3f](https://github.com/iTowns/itowns/commit/9895d3f))


### Workflow and chores

* release v2.10.0 ([56812e9](https://github.com/iTowns/itowns/commit/56812e9))
* **build:** swap functional and unit testing in npm run test ([f21132a](https://github.com/iTowns/itowns/commit/f21132a))
* **docs:** remove console.log ([f6c6c50](https://github.com/iTowns/itowns/commit/f6c6c50))
* **docs:** remove navigation.json file ([765e381](https://github.com/iTowns/itowns/commit/765e381))
* fix useless or missing conditions. ([ef2e183](https://github.com/iTowns/itowns/commit/ef2e183))
* remove deprecated config layer ([f66ec37](https://github.com/iTowns/itowns/commit/f66ec37))
* remove eslint rule 'class methods use this'. ([21ffdf3](https://github.com/iTowns/itowns/commit/21ffdf3))
* update dev packages ([f059a87](https://github.com/iTowns/itowns/commit/f059a87))
* update THREE to v103 ([422d996](https://github.com/iTowns/itowns/commit/422d996))


### Documentation

* add the support markdown when writing JSDoc ([511db53](https://github.com/iTowns/itowns/commit/511db53))
* **tmpl:** add divider ([0f467c9](https://github.com/iTowns/itowns/commit/0f467c9))
* **tmpl:** add events generation for classes ([f746e38](https://github.com/iTowns/itowns/commit/f746e38))
* **tmpl:** fix caption tag in examples generation ([232736a](https://github.com/iTowns/itowns/commit/232736a))
* **tmpl:** make the documentation template more readable ([4b1ad40](https://github.com/iTowns/itowns/commit/4b1ad40))
* **tuto:** fix [#1076](https://github.com/iTowns/itowns/issues/1076) ([ec2823f](https://github.com/iTowns/itowns/commit/ec2823f))
* **tuto:** update geometry layer using sources object instead of configuration ([09541a1](https://github.com/iTowns/itowns/commit/09541a1))


### Tests

* add Feature test unit. ([5790ca1](https://github.com/iTowns/itowns/commit/5790ca1))
* add test to feature2Texture and elevation processing ([fa58319](https://github.com/iTowns/itowns/commit/fa58319))
* add unit test on gltfLoader and remove ThreeExtented from coveralls. ([a5957ac](https://github.com/iTowns/itowns/commit/a5957ac))
* add unit test on view ([46b7fa1](https://github.com/iTowns/itowns/commit/46b7fa1))
* fix Errors. ([f26a340](https://github.com/iTowns/itowns/commit/f26a340))
* **parser:** add test on vector Style parsing. ([d7ce98e](https://github.com/iTowns/itowns/commit/d7ce98e))
* **source:** add more tests to sources ([1a55901](https://github.com/iTowns/itowns/commit/1a55901))



<a name="2.9.0"></a>
# [2.9.0](https://github.com/iTowns/itowns/compare/v2.8.0...v2.9.0) (2019-04-01)


### Features

* **core:** add Extent.copy(extent) ([786d853](https://github.com/iTowns/itowns/commit/786d853))
* **core:** add Extent.expandByValues ([efeec80](https://github.com/iTowns/itowns/commit/efeec80))
* **core:** add function to copy and transform Extent ([a2bdabf](https://github.com/iTowns/itowns/commit/a2bdabf))
* **fetcher:** add a multiple method to load a bunch of files ([6c616d7](https://github.com/iTowns/itowns/commit/6c616d7))
* **FirstPersontControl:** enabled: a boolean used to enable or disable this control ([cf4f495](https://github.com/iTowns/itowns/commit/cf4f495))
* **parser:** add a simple Shapefile parser ([de42db7](https://github.com/iTowns/itowns/commit/de42db7))
* **StreetControls:** enabled: a boolean used to enable or disable this control ([6ee3d7f](https://github.com/iTowns/itowns/commit/6ee3d7f))


### Bug Fixes

* **3dtiles:** enable draco loader for b3dm ([a4c442a](https://github.com/iTowns/itowns/commit/a4c442a))
* **3dtiles:** fix batch table support, for null object. ([a0408ad](https://github.com/iTowns/itowns/commit/a0408ad))
* **chore:** prepare 'Three js examples' didn't export all functions. ([ce7a6d2](https://github.com/iTowns/itowns/commit/ce7a6d2))
* **controls:** check if targetOrientation is defined in travel of planarControls. ([b8a1328](https://github.com/iTowns/itowns/commit/b8a1328))
* **controls:** fix of removeEventListener in GlobeControls.dispose. ([fe7bf07](https://github.com/iTowns/itowns/commit/fe7bf07))
* **controls:** fix ORBIT touch event making North down. ([0d6ab33](https://github.com/iTowns/itowns/commit/0d6ab33))
* **core:** event target change doesn't trigged with little change ([bf2e54e](https://github.com/iTowns/itowns/commit/bf2e54e))
* **core:** wrong default parameter in OBB.setFromExtent ([d1a3bed](https://github.com/iTowns/itowns/commit/d1a3bed))
* **debug:** add a check if folder already exists ([f9d0245](https://github.com/iTowns/itowns/commit/f9d0245))
* **example:** fix Geoportail stream for administrative boundaries ([97d5eb1](https://github.com/iTowns/itowns/commit/97d5eb1))
* **examples:** dilate extent to Region WMS to show entire data. ([08189fc](https://github.com/iTowns/itowns/commit/08189fc)), closes [#1067](https://github.com/iTowns/itowns/issues/1067)
* **examples:** refresh debug gui with correct color status. ([b91b017](https://github.com/iTowns/itowns/commit/b91b017))
* **example:** undefined value to enable realistic atmosphere ([af7714f](https://github.com/iTowns/itowns/commit/af7714f))
* **FirstPersonControls:** add boolean isFirstPersonControls ([a21235b](https://github.com/iTowns/itowns/commit/a21235b))
* **process:** bad calling of window.setTimeout ([60c61e4](https://github.com/iTowns/itowns/commit/60c61e4))
* **process:** pass, through the command, the parsedData attached to textures ([eb8c1ba](https://github.com/iTowns/itowns/commit/eb8c1ba))


### Performance Improvements

* **converter:** add extent checks in Feature2Texture ([e2f0c93](https://github.com/iTowns/itowns/commit/e2f0c93))


### Examples

* **stream:** Add stream from Geoportail (Cassini, Etat Major and Top25) ([beaeb7c](https://github.com/iTowns/itowns/commit/beaeb7c))
* update examples using FileSource ([b8686ff](https://github.com/iTowns/itowns/commit/b8686ff))


### Code Refactoring

* **convert:** in convert to tile mesh separate init tile from layer ([5455da8](https://github.com/iTowns/itowns/commit/5455da8))
* **core:** add zoom to each extent of tile ([7475a3f](https://github.com/iTowns/itowns/commit/7475a3f))
* **core:** compute ColorLayers sequence order only one time, in tileLayer.preUpdate ([2610963](https://github.com/iTowns/itowns/commit/2610963))
* **core:** Extent to Es6 class ([cf18241](https://github.com/iTowns/itowns/commit/cf18241))
* **core:** remove spread syntax in Extent ([e8525ae](https://github.com/iTowns/itowns/commit/e8525ae))
* **layer:** use layer.projection to add MaterialLayer and move colorLayersOrder in tileLayer ([b89d678](https://github.com/iTowns/itowns/commit/b89d678))
* **process:** add default time Stamp parameter to LayerUpdateState.canTryUpdate. ([7e6f25e](https://github.com/iTowns/itowns/commit/7e6f25e))
* **process:** extract common functions in layered material processing. ([2bdc27d](https://github.com/iTowns/itowns/commit/2bdc27d))
* **provider:** make DataSourceProvider more modulable ([4152104](https://github.com/iTowns/itowns/commit/4152104))
* **three:** remove all instanceof THREE.* ([bb19d1b](https://github.com/iTowns/itowns/commit/bb19d1b))


### Workflow and chores

* add draco library in examples/libs ([4ac4818](https://github.com/iTowns/itowns/commit/4ac4818))
* clean some useless things ([70af947](https://github.com/iTowns/itowns/commit/70af947))
* **docs:** add generation of each property type in typedef ([f0b0eab](https://github.com/iTowns/itowns/commit/f0b0eab))
* **docs:** add generation of return description for methods ([997c14c](https://github.com/iTowns/itowns/commit/997c14c))
* **examples:** clean eslintrc ([8e98262](https://github.com/iTowns/itowns/commit/8e98262))
* remove PanoramaView, PanoramaLayer, StaticSource and PanoramaTileBuilder. ([e977f30](https://github.com/iTowns/itowns/commit/e977f30))
* update to Three r102.1 ([d3ff2d3](https://github.com/iTowns/itowns/commit/d3ff2d3))
* upgrade packages after new release 2.8.0 ([d22f12c](https://github.com/iTowns/itowns/commit/d22f12c))


### Tests

* add extent tests ([ed06704](https://github.com/iTowns/itowns/commit/ed06704))
* **provider:** add two new tests for FileSource ([d4dcfda](https://github.com/iTowns/itowns/commit/d4dcfda))


### Others

* v2.9.0 ([0f46fd3](https://github.com/iTowns/itowns/commit/0f46fd3))


### BREAKING CHANGES

* **core:** * crs() and this._crs, west(), east(), south() and north() are replaced by this.crs and getter west, east, south and north.
* The Function Extent.extentParent has renamed to Extent.tiledExtentParent.
* Remove PanoramaView, PanoramaLayer, StaticSource and PanoramaTileBuilder.



<a name="2.8.0"></a>
# [2.8.0](https://github.com/iTowns/itowns/compare/v2.7.1...v2.8.0) (2019-03-01)


### Features

* **3dtiles:** add 3D Tiles extension support ([92f4aba](https://github.com/iTowns/itowns/commit/92f4aba))
* **3dtiles:** implement 3DTILES_batch_table_hierarchy extension ([0f4d3f7](https://github.com/iTowns/itowns/commit/0f4d3f7))
* **3dtiles:** update batch table support ([bc01f50](https://github.com/iTowns/itowns/commit/bc01f50))
* **core:** support metric unit to convert Extent to Obb ([8f850fc](https://github.com/iTowns/itowns/commit/8f850fc))
* **example:** Add an example demonstrating 3D Tiles batch table hierarchy extension management ([262ceae](https://github.com/iTowns/itowns/commit/262ceae))
* **parser:** add a kml parser and modify gpx parser ([ba4a174](https://github.com/iTowns/itowns/commit/ba4a174))
* **StreetControls:** add click and go, surface helpers, click and look at, tweens animations : ([ca4f8d5](https://github.com/iTowns/itowns/commit/ca4f8d5))
* **TileMesh:** add a boolean to know if it's a TileMesh or not, without doing an instanceof ([287b914](https://github.com/iTowns/itowns/commit/287b914))


### Bug Fixes

* **core:** error in condition to get difference between camera transformation ([a536e9a](https://github.com/iTowns/itowns/commit/a536e9a))
* **core:** forgotten Extent instantiation in projection convert ([349e2df](https://github.com/iTowns/itowns/commit/349e2df))
* **core:** problem with debug layer because PanoramaView haven't Atmosphere ([195f506](https://github.com/iTowns/itowns/commit/195f506))
* **core:** remove condition on scheduler singleton ([3784d10](https://github.com/iTowns/itowns/commit/3784d10))
* **core:** wrong handling error with the layer.id ([e1c96c2](https://github.com/iTowns/itowns/commit/e1c96c2))
* **example:** change id building in wfs functional test ([06555c2](https://github.com/iTowns/itowns/commit/06555c2))
* **examples:** forgotten variable declaration ([f7c72f5](https://github.com/iTowns/itowns/commit/f7c72f5))
* **examples:** wrong altitude for buildings in immersive paris example. ([8b79e1f](https://github.com/iTowns/itowns/commit/8b79e1f))
* **example:** update the gpx example to create directly meshes in it ([4d6febc](https://github.com/iTowns/itowns/commit/4d6febc))
* **gpx:** waypoint are scaling correctly ([05bfc52](https://github.com/iTowns/itowns/commit/05bfc52)), closes [#1045](https://github.com/iTowns/itowns/issues/1045)
* **OrientedImageCamera:** increase default far from 1000 to 10 000. ([bc057cc](https://github.com/iTowns/itowns/commit/bc057cc))
* **OrientedImageMaterial:** it supports opacity. ([710a970](https://github.com/iTowns/itowns/commit/710a970))
* **process:** fix and unify calls to window.setTimeOut ([e88480e](https://github.com/iTowns/itowns/commit/e88480e))
* security vulnerability in lodash ([c27e220](https://github.com/iTowns/itowns/commit/c27e220))
* **source:** wrong handling error with file ([a558e2e](https://github.com/iTowns/itowns/commit/a558e2e))
* **view:** picking: Add a log warning when user try to pick on a layer not ready. ([4803371](https://github.com/iTowns/itowns/commit/4803371))


### Examples

* **immersive:** add debug UI, and change the name of 'WFS buildings' layer to 'Buildings', and increase background radius from 80 to 1 200 ([89fef54](https://github.com/iTowns/itowns/commit/89fef54))


### Code Refactoring

* **core:** extend Atmosphere from GeometryLayer ([75206b3](https://github.com/iTowns/itowns/commit/75206b3))
* **debug:** remove useless traverse nodes to select them ([50565f5](https://github.com/iTowns/itowns/commit/50565f5))
* **debug:** use GeometryLayer for debug Layer ([02f5db4](https://github.com/iTowns/itowns/commit/02f5db4))
* **examples, tests:** factorize 3d tiles examples and tests common helpers ([5c5749a](https://github.com/iTowns/itowns/commit/5c5749a))


### Workflow and chores

* **3dtile:** useless variable assignment ([23b9bd7](https://github.com/iTowns/itowns/commit/23b9bd7))
* **core:** remove useless condition ([9907641](https://github.com/iTowns/itowns/commit/9907641))
* **core:** useless condition to parse xbil data ([04683f6](https://github.com/iTowns/itowns/commit/04683f6))
* **core:** useless return ([0bff6f5](https://github.com/iTowns/itowns/commit/0bff6f5))
* **docs:** add eslint check for jsdoc scripts ([a610c95](https://github.com/iTowns/itowns/commit/a610c95))
* **docs:** Local variable 'tutorials' is not used ([b9cb452](https://github.com/iTowns/itowns/commit/b9cb452))
* **docs:** required module component 'taffy' is not used ([b0013d1](https://github.com/iTowns/itowns/commit/b0013d1))
* fix 'npm ci' when it prints npm version. ([555921b](https://github.com/iTowns/itowns/commit/555921b))
* remove useless global directive ([353bbb7](https://github.com/iTowns/itowns/commit/353bbb7))
* Required module component 'patchedPath' is not used. ([dd494c6](https://github.com/iTowns/itowns/commit/dd494c6))
* **test:** rename test/examples to test/functional ([21dd2c5](https://github.com/iTowns/itowns/commit/21dd2c5))
* **tests:** remove useless littleEndian parameter for UInt8 ([0926dcf](https://github.com/iTowns/itowns/commit/0926dcf))
* update packages ([f4c0742](https://github.com/iTowns/itowns/commit/f4c0742))
* update THREE.js to r101.1 ([ce002f7](https://github.com/iTowns/itowns/commit/ce002f7))


### Documentation

* **3dtiles:** expose documentation of 3D Tiles related classes ([a9066e3](https://github.com/iTowns/itowns/commit/a9066e3))
* add generation of typedefs in the documentation ([3c9a438](https://github.com/iTowns/itowns/commit/3c9a438))


### Styles

* **examples:** reduce padding of 3D Tiles examples feature info div ([7fcb3b2](https://github.com/iTowns/itowns/commit/7fcb3b2))


### Tests

* **example:** add tests for 3D Tiles batch table hierarchy extension example ([d7bb4eb](https://github.com/iTowns/itowns/commit/d7bb4eb))


### Others

* Release v2.8.0. ([3f39c8e](https://github.com/iTowns/itowns/commit/3f39c8e))


### BREAKING CHANGES

* **parser:** GpxParser doesn't return a THREE.Mesh anymore.



<a name="2.7.1"></a>
## [2.7.1](https://github.com/iTowns/itowns/compare/v2.6.0...v2.7.1) (2019-02-01)


### Features

* **controls:** Street controls, to move the camera from a point to another point. ([67eea6c](https://github.com/iTowns/itowns/commit/67eea6c))
* **converter:** add batchId attribute in mesh from convert of feature2Mesh ([e54a44a](https://github.com/iTowns/itowns/commit/e54a44a))
* **core:** function get layer by Id ([af2d582](https://github.com/iTowns/itowns/commit/af2d582))
* **core:** function removeLayer to remove color, elevation and geometry layers from viewer ([6b772ed](https://github.com/iTowns/itowns/commit/6b772ed)), closes [#906](https://github.com/iTowns/itowns/issues/906)
* **OrientedImageLayer:** add the previous pano position to the onPanoChanged event. ([27e825e](https://github.com/iTowns/itowns/commit/27e825e))
* **OrientedImageLayer:** Specific layer to show oriented images. ([4a9b57f](https://github.com/iTowns/itowns/commit/4a9b57f))
* **parser:** add option to override altitude incoming (from source) by 0. ([c3a1f43](https://github.com/iTowns/itowns/commit/c3a1f43))
* **parser:** add the possibility to specify parser ([e7e9c5e](https://github.com/iTowns/itowns/commit/e7e9c5e))
* **StreetControls:** add a previousPosition, binded on key S, to move camera to previousPosition. ([3fa4b18](https://github.com/iTowns/itowns/commit/3fa4b18))
* **StreetControls:** The user can now change key binding ([e64828e](https://github.com/iTowns/itowns/commit/e64828e))
* **wms:** enable vendor specific parameters ([b8a9c9c](https://github.com/iTowns/itowns/commit/b8a9c9c)), closes [#959](https://github.com/iTowns/itowns/issues/959)


### Bug Fixes

* **3dtiles:** region extent is treated as an OBB ([4339851](https://github.com/iTowns/itowns/commit/4339851))
* **controls:** Fix key in FirstPersonControl, remove prevent default. ([33aee47](https://github.com/iTowns/itowns/commit/33aee47))
* **core:** avoid to access to DOM properties ([c64ff59](https://github.com/iTowns/itowns/commit/c64ff59)), closes [#140](https://github.com/iTowns/itowns/issues/140)
* **core:** fix delete OrientedImageLayer ([46f5de2](https://github.com/iTowns/itowns/commit/46f5de2)), closes [#1018](https://github.com/iTowns/itowns/issues/1018)
* **core:** missed layer to layer.source ([5099a8a](https://github.com/iTowns/itowns/commit/5099a8a))
* **core:** stop calling unnecessarily WebGLUniforms.upload through uniformsNeedUpdate ([c071721](https://github.com/iTowns/itowns/commit/c071721)), closes [#979](https://github.com/iTowns/itowns/issues/979)
* **core:** wrong Z min and max  to compute tile's obb ([a7a4e84](https://github.com/iTowns/itowns/commit/a7a4e84))
* **example:** 3dTile, change ortho image layer source to openSM data, to avoid many warnings. ([d14aadd](https://github.com/iTowns/itowns/commit/d14aadd))
* **example:** Immersive example, update camera projection matrix. ([0d158d1](https://github.com/iTowns/itowns/commit/0d158d1))
* **example:** Improve performance on immersive example. ([1f8323f](https://github.com/iTowns/itowns/commit/1f8323f))
* **example:** move elevation options in elevation layer ([9f66f3b](https://github.com/iTowns/itowns/commit/9f66f3b))
* **examples:** wrong properties in layers json files ([50ec664](https://github.com/iTowns/itowns/commit/50ec664))
* **examples:** wrong property to filter layers by type ([e135e92](https://github.com/iTowns/itowns/commit/e135e92))
* **example:** wrong filtering to get layer with FileSource ([a82ebbc](https://github.com/iTowns/itowns/commit/a82ebbc))
* **gui:** Fix GUI debug color layer and elevation layer ([b0b4c6c](https://github.com/iTowns/itowns/commit/b0b4c6c))
* **loop:** Add a preUpdate call for attached geometry layers ([877c623](https://github.com/iTowns/itowns/commit/877c623))
* security vulnerability detected in webpack-dev-server ([18756fc](https://github.com/iTowns/itowns/commit/18756fc))
* **shader:** remove unnecessary declarations of variables in some modes ([f0f0e29](https://github.com/iTowns/itowns/commit/f0f0e29))
* **test:** reduce displayed tiles count because of the improvement horizon culling ([a96a63a](https://github.com/iTowns/itowns/commit/a96a63a))
* **utils:** wrong filtering with filterFeaturesUnderCoordinate ([48745d4](https://github.com/iTowns/itowns/commit/48745d4))
* windows install no more backslash ([3a1964b](https://github.com/iTowns/itowns/commit/3a1964b))


### Examples

* **immersive:** Example Immersive Paris. ([5ef1d02](https://github.com/iTowns/itowns/commit/5ef1d02))
* **immersive:** update to manage previous pano key binding ([c891b11](https://github.com/iTowns/itowns/commit/c891b11))


### Code Refactoring

* **core:** improved results and performance of the culling horizon ([0692c05](https://github.com/iTowns/itowns/commit/0692c05))
* **core:** issue [#1011](https://github.com/iTowns/itowns/issues/1011) question about the usefulness of the test on precision altitute ([555e40d](https://github.com/iTowns/itowns/commit/555e40d))
* **core:** update preSSE view only when it's needed ([f3d9df7](https://github.com/iTowns/itowns/commit/f3d9df7))
* **core:** update size view only when it's needed ([59204c8](https://github.com/iTowns/itowns/commit/59204c8))
* **core:** update view Matrix view only when it's needed ([29fa985](https://github.com/iTowns/itowns/commit/29fa985))
* **example:** use batchId attributes to pick buildings ([c1a32be](https://github.com/iTowns/itowns/commit/c1a32be))
* **layer:** replace all layer.type by layer.isLayer ([6d017a5](https://github.com/iTowns/itowns/commit/6d017a5)), closes [#951](https://github.com/iTowns/itowns/issues/951)


### Workflow and chores

* check node version to prevent error in THREE examples installation ([eae303c](https://github.com/iTowns/itowns/commit/eae303c))
* check PUPPETEER_SKIP_CHROMIUM_DOWNLOAD to warn user ([5c26437](https://github.com/iTowns/itowns/commit/5c26437))
* **docs:** add a README concerning the documentation of itowns ([fc804b9](https://github.com/iTowns/itowns/commit/fc804b9))
* **example:** update jsonlayers url to https ([26b1d04](https://github.com/iTowns/itowns/commit/26b1d04))
* **lint:** remove max-length parameter for testing examples ([dade5fe](https://github.com/iTowns/itowns/commit/dade5fe))
* remove useless propocol properties ([8d0976b](https://github.com/iTowns/itowns/commit/8d0976b))
* update and rewrite contents in README and other .md files. ([185ef25](https://github.com/iTowns/itowns/commit/185ef25))
* update package lock ([25520f6](https://github.com/iTowns/itowns/commit/25520f6))
* upgrade packages npm ([149208c](https://github.com/iTowns/itowns/commit/149208c))
* upgrade to THREE r100 ([daba997](https://github.com/iTowns/itowns/commit/daba997))


### Documentation

* **StreetControls:** update doc for key code properties ([fcdd0cb](https://github.com/iTowns/itowns/commit/fcdd0cb))


### Tests

* add new tests for camera ([9a40a5e](https://github.com/iTowns/itowns/commit/9a40a5e))
* add tests on View.removeLayer with ColorLayer, ElevationLayer and GeometryLayer ([846ea34](https://github.com/iTowns/itowns/commit/846ea34))
* disable default node warning regarding event listeners ([a4028ff](https://github.com/iTowns/itowns/commit/a4028ff))
* pick feature from Layer with SourceFile ([b998fce](https://github.com/iTowns/itowns/commit/b998fce))
* trap console errors when an example page is loaded ([73458ec](https://github.com/iTowns/itowns/commit/73458ec))


### Others

* Release v2.7.1. ([0cc3e90](https://github.com/iTowns/itowns/commit/0cc3e90))
* Release v2.6.1. ([759cdb5](https://github.com/iTowns/itowns/commit/759cdb5))



<a name="2.6.0"></a>
# [2.6.0](https://github.com/iTowns/itowns/compare/v2.5.0...v2.6.0) (2018-12-19)


### Features

* **debug:** add sse helper on tiled geometry layer ([f4a8afe](https://github.com/iTowns/itowns/commit/f4a8afe))
* **fetcher:** add the possibility to specify fetcher ([83ab9e1](https://github.com/iTowns/itowns/commit/83ab9e1)), closes [#954](https://github.com/iTowns/itowns/issues/954)
* **layer:** add isXXXLayer properties to layers objects ([41933f4](https://github.com/iTowns/itowns/commit/41933f4))
* **OrientedImageMaterial:** Material used to compute projective textures. ([bd737eb](https://github.com/iTowns/itowns/commit/bd737eb))
* **view:** add support for a coordinate when creating a GlobeView ([6947b78](https://github.com/iTowns/itowns/commit/6947b78))


### Bug Fixes

* **3dTilesDebugUI:** Fix view.notifyChanges. ([eec5ec5](https://github.com/iTowns/itowns/commit/eec5ec5))
* **core:** implement preSSE once and fix the formula ([958f124](https://github.com/iTowns/itowns/commit/958f124))
* **core:** wrong parameter in dichotomy strategy. ([4df0540](https://github.com/iTowns/itowns/commit/4df0540))
* **debug:** disable fog with camera debug rendering ([a5169c9](https://github.com/iTowns/itowns/commit/a5169c9))
* **doc:** wrong includes in doc configuration ([326722f](https://github.com/iTowns/itowns/commit/326722f))
* **examples:** fix a bad merge in planar_vector ([29d899f](https://github.com/iTowns/itowns/commit/29d899f)), closes [#926](https://github.com/iTowns/itowns/issues/926)
* **examples:** fix the debug menu in oriented_images ([7dffe9e](https://github.com/iTowns/itowns/commit/7dffe9e))
* **examples:** forgotten color layers in examples ([72e1598](https://github.com/iTowns/itowns/commit/72e1598))
* **examples:** instantiate sources for index.html example ([3019ce4](https://github.com/iTowns/itowns/commit/3019ce4))
* **examples:** wrong layer id for picking ([e8494a9](https://github.com/iTowns/itowns/commit/e8494a9))
* **examples:** wrong menu position in 3dtiles ([29f62ba](https://github.com/iTowns/itowns/commit/29f62ba))
* **FirstPersonControl:** Fix a bug introduced in [#881](https://github.com/iTowns/itowns/issues/881). Before this change, this controls was going up when we pressed key up instead of going forward as expected. Now it goes forward again when we press key up. ([f734985](https://github.com/iTowns/itowns/commit/f734985))
* **geometryLayer:** wireFrame property change only affect This layer objects. Before this commit, it could also affect objects on attached layers (for example, bounding box from attached debug layers). fix [#940](https://github.com/iTowns/itowns/issues/940) ([7ffb31b](https://github.com/iTowns/itowns/commit/7ffb31b))
* **layer:** Add default convert function ([2aedd17](https://github.com/iTowns/itowns/commit/2aedd17))
* **protocol:** error while getting textures and zoom texture, for StaticSource ([24d2aea](https://github.com/iTowns/itowns/commit/24d2aea))
* **test:** wrong synchronization with elevation data and DEMUtils/CameraUTils ([ad223ad](https://github.com/iTowns/itowns/commit/ad223ad))
* **utils:** wrong steps up in hierachy to read altitude in DEM ([fc3b50e](https://github.com/iTowns/itowns/commit/fc3b50e)), closes [#936](https://github.com/iTowns/itowns/issues/936)


### Examples

* **projection:** File to store projection definitions, like EPSG:2154... So it can be used in many examples ([cd02e96](https://github.com/iTowns/itowns/commit/cd02e96))
* update all examples to reflect Source changes ([1291ea7](https://github.com/iTowns/itowns/commit/1291ea7))
* update position of help div and translate french text to english ([25928b0](https://github.com/iTowns/itowns/commit/25928b0))


### Code Refactoring

* **core:** move elevation data process in xbilparser ([462d69b](https://github.com/iTowns/itowns/commit/462d69b))
* **core:** move responsibility to replace nodatavalue in MaterialLayer ([ae0f0a5](https://github.com/iTowns/itowns/commit/ae0f0a5))
* **core:** move selectNodeAt in tileTebug ([f56a636](https://github.com/iTowns/itowns/commit/f56a636))
* **core:** Unify culling for TiledGeometryLayer ([e0053e5](https://github.com/iTowns/itowns/commit/e0053e5))
* **core:** unify sse for Planar and globe ([b1740ed](https://github.com/iTowns/itowns/commit/b1740ed))
* **examples:** use projections definition file ([268362d](https://github.com/iTowns/itowns/commit/268362d))
* **layer:** deprecate adding a layer with only a configuration ([fd36d3b](https://github.com/iTowns/itowns/commit/fd36d3b))
* **protocol:** best place to layer wfs update state ([c954f1d](https://github.com/iTowns/itowns/commit/c954f1d))
* **renderer:** LayeredMaterial splitted and simplified ([810a756](https://github.com/iTowns/itowns/commit/810a756))
* **source:** deprecate adding a source with only a configuration ([0f7ca09](https://github.com/iTowns/itowns/commit/0f7ca09))
* **source:** deprecate source.heightMapWidth for source.width ([ca920c6](https://github.com/iTowns/itowns/commit/ca920c6))


### Workflow and chores

* add babel-inline-import-loader in webpack ([b37d6b0](https://github.com/iTowns/itowns/commit/b37d6b0))
* automatic patch three examples ([194e354](https://github.com/iTowns/itowns/commit/194e354))
* clean up webpack module.exports ([bbf9381](https://github.com/iTowns/itowns/commit/bbf9381))
* deprecate Panorama components ([f731450](https://github.com/iTowns/itowns/commit/f731450))
* **docs:** move from API_Doc to docs ([1be1aee](https://github.com/iTowns/itowns/commit/1be1aee))
* **docs:** new custom template for the documentation ([6399b8f](https://github.com/iTowns/itowns/commit/6399b8f))
* **docs:** remove old style and template ([7ec83de](https://github.com/iTowns/itowns/commit/7ec83de))
* ECMAScript 2016, replace Array.prototype.indexOf by Array.prototype.includes ([d0405a5](https://github.com/iTowns/itowns/commit/d0405a5))
* ECMAScript 2016, replace Math.pow by exponentiation operator (**) ([781ad8a](https://github.com/iTowns/itowns/commit/781ad8a))
* **examples:** Simplify example page ([ca59a21](https://github.com/iTowns/itowns/commit/ca59a21))
* remove relative path in tests ([d25b9fa](https://github.com/iTowns/itowns/commit/d25b9fa))
* remove useless require ([25658a1](https://github.com/iTowns/itowns/commit/25658a1))
* rename utils to Utils ([f85321d](https://github.com/iTowns/itowns/commit/f85321d))
* reorganize files and folders ([ae3120c](https://github.com/iTowns/itowns/commit/ae3120c))
* update all npm packages to last version ([7ec7ae5](https://github.com/iTowns/itowns/commit/7ec7ae5))
* update package lock ([96a41a5](https://github.com/iTowns/itowns/commit/96a41a5))
* update THREE r98 to r99 ([57354e8](https://github.com/iTowns/itowns/commit/57354e8))
* upgrade THREE to v98 ([9a999ff](https://github.com/iTowns/itowns/commit/9a999ff))
* use resolve.modules to avoid relative in ES6 import ([15a4911](https://github.com/iTowns/itowns/commit/15a4911))


### Documentation

* add a simple tutorial on geometry layer ([674114f](https://github.com/iTowns/itowns/commit/674114f))
* add a simple tutorial on globe creation ([7a693d5](https://github.com/iTowns/itowns/commit/7a693d5))
* clean and rewrite documentation of Fetcher ([34c2c1c](https://github.com/iTowns/itowns/commit/34c2c1c))
* cleaning and updating the Source/ folder ([caf22c2](https://github.com/iTowns/itowns/commit/caf22c2)), closes [#968](https://github.com/iTowns/itowns/issues/968)
* update the documentation for the new template ([b47315a](https://github.com/iTowns/itowns/commit/b47315a))
* update the globe creation tutorial ([74f7038](https://github.com/iTowns/itowns/commit/74f7038))


### Tests

* **core:** add tests on tile subdivision ([98abec9](https://github.com/iTowns/itowns/commit/98abec9))


### Others

* Release v2.6.0. ([87bb03e](https://github.com/iTowns/itowns/commit/87bb03e))
* 3dtiles:Replace hardcoded values by constants in B3dmParser ([faaf2e3](https://github.com/iTowns/itowns/commit/faaf2e3))
* Chore:Add contributor ([a54ebb2](https://github.com/iTowns/itowns/commit/a54ebb2))
* fix(3dtiles):Support v1.0 metadata.content.uri attribute ([85ef442](https://github.com/iTowns/itowns/commit/85ef442))


### BREAKING CHANGES

* **core:** Computing screen space error is changed, so tile subdivision are different.
* **renderer:** the API of TileMesh and LayeredMaterial have changed.
* **renderer:** LayeredMaterialConstants and RendererConstant have
been removed.
* **source:** the origin property of TMSSource has been replaced by a
boolean, isInverted, that serves the same goal, but using a boolean.
* **source:** the protocol property no longer exists, instead to test
the type of Source, one needs to use the property isSource, adapted to
each type: for example, isWMTSSource tells if the source is WMTSSource.
* **layer:** layer.options.mimetype is no longer supported, use
layer.format instead



<a name="2.5.0"></a>
# [2.5.0](https://github.com/iTowns/itowns/compare/v2.4.0...v2.5.0) (2018-11-08)


### Features

* **core:** add option to stop place to ground at animation ending ([889ef5b](https://github.com/iTowns/itowns/commit/889ef5b))
* **debug:** show displayed tiles extent with obb helper ([d72ddb6](https://github.com/iTowns/itowns/commit/d72ddb6))
* **OrientedImageCamera:** Camera extension for oriented images ([56fc4a1](https://github.com/iTowns/itowns/commit/56fc4a1))
* **parser:** Camera calibration parser ([f8e7753](https://github.com/iTowns/itowns/commit/f8e7753))


### Bug Fixes

* **controls:** remove THREE warning ([8364c7a](https://github.com/iTowns/itowns/commit/8364c7a))
* **core:** problem in runtime with bundle itowns and debug ([f917be4](https://github.com/iTowns/itowns/commit/f917be4))
* **core:** remove useless console.info in animation ([b6a5329](https://github.com/iTowns/itowns/commit/b6a5329))
* **core:** wrong OBB from extent ([d0aedf2](https://github.com/iTowns/itowns/commit/d0aedf2))
* **debug:** error typo on obb properties ([bb58aa7](https://github.com/iTowns/itowns/commit/bb58aa7))
* **doc:** wrong camera utils parameter in documentation ([dfab6ae](https://github.com/iTowns/itowns/commit/dfab6ae))
* **FirstPersonControl:** It now supports Globe view. ([1eae7fe](https://github.com/iTowns/itowns/commit/1eae7fe))
* **shaderUtils:** use boundary delimiter in the regex ([c62d9e0](https://github.com/iTowns/itowns/commit/c62d9e0))
* **source:** always build an extent in FileSource ([375375e](https://github.com/iTowns/itowns/commit/375375e))
* **test:** add node 10 build and remove node 11 build (11.0.0) for the moment ([bcb1026](https://github.com/iTowns/itowns/commit/bcb1026))
* **test:** enhancement bootstrap and globeControls test ([da7b75e](https://github.com/iTowns/itowns/commit/da7b75e))
* **test:** resolve fail test and cleanup boostrap ([98ca430](https://github.com/iTowns/itowns/commit/98ca430))
* wrong node version in auto deploy ([e75eb27](https://github.com/iTowns/itowns/commit/e75eb27))


### Examples

* **cameraCalibrationParser:** Example showing 5 cameras helper on a car. ([4d91723](https://github.com/iTowns/itowns/commit/4d91723))


### Code Refactoring

* **core:** OBB object to ES6 class ([0776efa](https://github.com/iTowns/itowns/commit/0776efa))
* **debug:** OBBHelper object to OBBHelper Class ES6 ([1215dd7](https://github.com/iTowns/itowns/commit/1215dd7))
* **examples:** use layer.info in visible layers example ([a7b323c](https://github.com/iTowns/itowns/commit/a7b323c))


### Workflow and chores

* add forgotten dependencies and upgrade dependencies ([9b64a7d](https://github.com/iTowns/itowns/commit/9b64a7d))
* change debugAnimation to __DEBUG__ in AnimationPlayer ([64c8e1b](https://github.com/iTowns/itowns/commit/64c8e1b)), closes [#245](https://github.com/iTowns/itowns/issues/245)
* **docs:** reorganize documentation files in docs/ ([9a11383](https://github.com/iTowns/itowns/commit/9a11383))
* fix version node in autodeploy ([2684a81](https://github.com/iTowns/itowns/commit/2684a81))
* migrate travis-ci.org to travis-ci.com ([6b5ad1d](https://github.com/iTowns/itowns/commit/6b5ad1d))
* move githubs templates in .github/ folder ([5e90f92](https://github.com/iTowns/itowns/commit/5e90f92))
* remove check-node-version test in prepare script ([2f5f653](https://github.com/iTowns/itowns/commit/2f5f653))
* remove warning eslint ([8d6d635](https://github.com/iTowns/itowns/commit/8d6d635))
* reorganize contents in README and other markdown files ([ecb515d](https://github.com/iTowns/itowns/commit/ecb515d))
* support node 11.1.0 ([1c1663e](https://github.com/iTowns/itowns/commit/1c1663e)), closes [#889](https://github.com/iTowns/itowns/issues/889)
* update the Geoportal API key ([31a7476](https://github.com/iTowns/itowns/commit/31a7476))
* upgrade dev dependencies ([8795229](https://github.com/iTowns/itowns/commit/8795229))
* upgrade mocha, eslint, cross-env, nyc, webpack and whatwg-fetch ([c5cd1ad](https://github.com/iTowns/itowns/commit/c5cd1ad))


### Tests

* add test layer.info ([3f8abbc](https://github.com/iTowns/itowns/commit/3f8abbc))


### Others

* Release v2.5.0. ([31b0ef7](https://github.com/iTowns/itowns/commit/31b0ef7))
* feat (core): add information in TiledGeometryLayer ([daa57a7](https://github.com/iTowns/itowns/commit/daa57a7))



<a name="2.4.0"></a>
# [2.4.0](https://github.com/iTowns/itowns/compare/v2.3.0...v2.4.0) (2018-10-16)


### Features

* **controls:** make event listeners opt-out for FirstPersonControls ([5f20af6](https://github.com/iTowns/itowns/commit/5f20af6))
* **core:** add a 'radius' parameter to picking methods ([4b45651](https://github.com/iTowns/itowns/commit/4b45651))
* **core:** add a Cache system with expiration policy ([cbf248a](https://github.com/iTowns/itowns/commit/cbf248a)), closes [#687](https://github.com/iTowns/itowns/issues/687)
* **core:** add a new VIEW.LAYERS_INITIALIZED event ([e5ccfbb](https://github.com/iTowns/itowns/commit/e5ccfbb))
* **core:** add camera utils tools ([03640f3](https://github.com/iTowns/itowns/commit/03640f3))
* **core:** add vector tile loading in TMS ([6411908](https://github.com/iTowns/itowns/commit/6411908))
* **core:** allow layer to specify which elements should be updatable ([0cb47e4](https://github.com/iTowns/itowns/commit/0cb47e4))
* **core:** implement layer priorities ([985d051](https://github.com/iTowns/itowns/commit/985d051))
* **core:** improve imagery layer processing ([dd4d772](https://github.com/iTowns/itowns/commit/dd4d772))
* **core:** move url function outside providers ([3aef9ca](https://github.com/iTowns/itowns/commit/3aef9ca)), closes [#182](https://github.com/iTowns/itowns/issues/182)
* **core:** store Layer instead of layer's id ([7a93779](https://github.com/iTowns/itowns/commit/7a93779))
* **core:** unify tilelayer in globeViewer, planarViewer and panoramaViewer ([1e08030](https://github.com/iTowns/itowns/commit/1e08030))
* **core:** update to THREE v97 ([fa81c64](https://github.com/iTowns/itowns/commit/fa81c64))
* **examples:** add a loading screen for examples ([7428478](https://github.com/iTowns/itowns/commit/7428478))
* **examples:** add debug camera and freeze update layer tile ([f2977b0](https://github.com/iTowns/itowns/commit/f2977b0))
* **GeometryLayer:** wireframe and opacity are updated with defineProperty ([a21c401](https://github.com/iTowns/itowns/commit/a21c401))
* **gis:** add or use optional target to methods to avoid memory allocations ([3a3ad6e](https://github.com/iTowns/itowns/commit/3a3ad6e))
* **panorama:** add projection type constant [#677](https://github.com/iTowns/itowns/issues/677) ([b94ae1a](https://github.com/iTowns/itowns/commit/b94ae1a))
* **parser:** add partial z support for geojson parsing ([f0835f3](https://github.com/iTowns/itowns/commit/f0835f3)), closes [/tools.ietf.org/html/rfc7946#section-9](https://github.com//tools.ietf.org/html/rfc7946/issues/section-9)
* **pointclouds:** compute extent for pointclouds elements ([#793](https://github.com/iTowns/itowns/issues/793)) ([a2f5950](https://github.com/iTowns/itowns/commit/a2f5950))
* **pointcloud:** use 'changeSource' mechanism to avoid useless work ([b67670a](https://github.com/iTowns/itowns/commit/b67670a))
* **protocol:** add Source ([b04e83b](https://github.com/iTowns/itowns/commit/b04e83b))
* **protocols:** add globalCompositeOperation property in style for feature to texture ([93e0af3](https://github.com/iTowns/itowns/commit/93e0af3))
* **protocols:** add spatial hashing to StaticProvider ([#675](https://github.com/iTowns/itowns/issues/675)) ([d4ec447](https://github.com/iTowns/itowns/commit/d4ec447))
* **protocols:** implement targetLevel for StaticProvider ([ea7b786](https://github.com/iTowns/itowns/commit/ea7b786))
* **protocols:** make targetLevel supported for WMTS_Provider color textures ([beb2f53](https://github.com/iTowns/itowns/commit/beb2f53))
* **renderer:** add default background color to texture ([01035ac](https://github.com/iTowns/itowns/commit/01035ac))


### Bug Fixes

* **3dtiles:** apply matrixWorld to boundingVolume.box ([7ae39eb](https://github.com/iTowns/itowns/commit/7ae39eb))
* **3dtiles:** dont stop subdivision at tileset boundaries ([bbf0a9b](https://github.com/iTowns/itowns/commit/bbf0a9b))
* **3dtiles:** fix pnts loading ([c091b0d](https://github.com/iTowns/itowns/commit/c091b0d))
* **3dtiles:** simplify 3dtiles layer creation ([ce9191c](https://github.com/iTowns/itowns/commit/ce9191c))
* **badge:** fix typo for coverage badge ([5319066](https://github.com/iTowns/itowns/commit/5319066))
* **chore:** fix package_lock.json ([152ac73](https://github.com/iTowns/itowns/commit/152ac73))
* **chore:** tag eslint config as root ([f75aed9](https://github.com/iTowns/itowns/commit/f75aed9))
* **Coordinates:** Concerning coordinate conversions, this commit fixes two bugs: ([f3ce0fa](https://github.com/iTowns/itowns/commit/f3ce0fa))
* **core:** assign the correct layer property ([73f3592](https://github.com/iTowns/itowns/commit/73f3592)), closes [#758](https://github.com/iTowns/itowns/issues/758)
* **core:** assume min level is 0 if not provided for dichotomy strategy ([c9c93eb](https://github.com/iTowns/itowns/commit/c9c93eb))
* **core:** avoid clone vector to convert coordinate ([06e3313](https://github.com/iTowns/itowns/commit/06e3313))
* **core:** Cache return mesh with null geometry ([d1ba731](https://github.com/iTowns/itowns/commit/d1ba731)), closes [#869](https://github.com/iTowns/itowns/issues/869)
* **core:** chain animations stops after the first animation ([d75ca7d](https://github.com/iTowns/itowns/commit/d75ca7d))
* **core:** compute globe fog distance after camera update ([d65d4e6](https://github.com/iTowns/itowns/commit/d65d4e6))
* **core:** correct typo in event's name ([97f1000](https://github.com/iTowns/itowns/commit/97f1000))
* **core:** delay FrameRequesters deletion to avoid breaking updates ([139156d](https://github.com/iTowns/itowns/commit/139156d))
* **core:** fix wrong 3dtiles's OBB using BuilderEllipsoidTile ([ca6daf1](https://github.com/iTowns/itowns/commit/ca6daf1)), closes [#656](https://github.com/iTowns/itowns/issues/656)
* **core:** fix wrong cachekey value equal to NaN in geometry building ([8414a5d](https://github.com/iTowns/itowns/commit/8414a5d))
* **core:** force the use of decimal notation in protocol requests ([ed4d001](https://github.com/iTowns/itowns/commit/ed4d001))
* **core:** make sure PlanarControls call notifyChange when needed ([2989aea](https://github.com/iTowns/itowns/commit/2989aea)), closes [#776](https://github.com/iTowns/itowns/issues/776)
* **core:** make sure VIEW_EVENTS.LAYERS_INITIALIZED if fired ([1cb2fa1](https://github.com/iTowns/itowns/commit/1cb2fa1))
* **core:** pass GlobeView options to GlobeLayer ([dcb4830](https://github.com/iTowns/itowns/commit/dcb4830))
* **Core:** reject the promise in all error cases in `view.addLayer` ([2e9ed61](https://github.com/iTowns/itowns/commit/2e9ed61)), closes [#768](https://github.com/iTowns/itowns/issues/768)
* **core:** remove correctly event listener after globe is initialized ([106f054](https://github.com/iTowns/itowns/commit/106f054))
* **core:** simplify zoom, row and col in Extent ([d6a74ed](https://github.com/iTowns/itowns/commit/d6a74ed))
* **core:** stop to add layer if there's a error ([a7f33ac](https://github.com/iTowns/itowns/commit/a7f33ac))
* **core:** stop using wmtsc for OSM layers on globe ([8fcfd6c](https://github.com/iTowns/itowns/commit/8fcfd6c))
* **core:** unassign layer of deleted objects ([19ae01c](https://github.com/iTowns/itowns/commit/19ae01c)), closes [#727](https://github.com/iTowns/itowns/issues/727)
* **core:** wrong picking with depth buffer ([01b7ff4](https://github.com/iTowns/itowns/commit/01b7ff4))
* correct some console outputs ([#684](https://github.com/iTowns/itowns/issues/684)) ([00b51c7](https://github.com/iTowns/itowns/commit/00b51c7))
* **debug:** apply notifyChange breaking change on debug Tools ([68d128f](https://github.com/iTowns/itowns/commit/68d128f))
* **debug:** cleanup pointcloud debug tools ([ac799bc](https://github.com/iTowns/itowns/commit/ac799bc))
* **debug:** stop to update chart when is hidden ([467bddb](https://github.com/iTowns/itowns/commit/467bddb))
* **debug:** use layer instead of layer.id in TileVisibilityChart ([9ce08e6](https://github.com/iTowns/itowns/commit/9ce08e6)), closes [#758](https://github.com/iTowns/itowns/issues/758)
* **doc:** wrong path to layer.js ([a6ea152](https://github.com/iTowns/itowns/commit/a6ea152))
* **example:** add gpx projection in planar_vector.html ([2a94150](https://github.com/iTowns/itowns/commit/2a94150))
* **example:** define pole texture for globe vector tile and globe max level subdivision ([528aa69](https://github.com/iTowns/itowns/commit/528aa69))
* **example:** point picking, wrong point's property in console.log ([78ee02f](https://github.com/iTowns/itowns/commit/78ee02f))
* **example:** remove menuGlobe in gpx.html ([134ee8a](https://github.com/iTowns/itowns/commit/134ee8a))
* **examples:** add GUI layers when add layer throw error ([44ca042](https://github.com/iTowns/itowns/commit/44ca042))
* **examples:** add missing param to notifyChange call in multiglobe ([ced513f](https://github.com/iTowns/itowns/commit/ced513f))
* **examples:** fix Layer Visibility example ([8c4d598](https://github.com/iTowns/itowns/commit/8c4d598))
* **examples:** fix renderer.domElement's mouseEvent doesn't work under menu ([#712](https://github.com/iTowns/itowns/issues/712)) ([21515c0](https://github.com/iTowns/itowns/commit/21515c0))
* **examples:** remove unused variable ([1986766](https://github.com/iTowns/itowns/commit/1986766))
* **examples:** unhide dat.gui elements when loadingscreen is finished ([#718](https://github.com/iTowns/itowns/issues/718)) ([cddad55](https://github.com/iTowns/itowns/commit/cddad55))
* **examples:** use correct type for updateStrategy.type ([a231884](https://github.com/iTowns/itowns/commit/a231884))
* **gis:** initialize Extent from Coordinates correctly ([e794252](https://github.com/iTowns/itowns/commit/e794252))
* **layer:** declare GeometryLayer placeholder in prototype ([b920783](https://github.com/iTowns/itowns/commit/b920783))
* **npm:** update the url-parse package ([0f6ae08](https://github.com/iTowns/itowns/commit/0f6ae08))
* **panorama:** change flatbush version and import line ([#689](https://github.com/iTowns/itowns/issues/689)) ([a76519c](https://github.com/iTowns/itowns/commit/a76519c))
* **panorama:** improve default settings for Panorama ([c98ebb6](https://github.com/iTowns/itowns/commit/c98ebb6))
* **parser:** change the internal structure of geojson ([35361f7](https://github.com/iTowns/itowns/commit/35361f7))
* **parser:** failing to determine the min and max elevation doesn't mean that it is zero ([bbc4bc4](https://github.com/iTowns/itowns/commit/bbc4bc4)), closes [#823](https://github.com/iTowns/itowns/issues/823)
* **parser:** problem filtering in geoJsonParser ([6bf0d8e](https://github.com/iTowns/itowns/commit/6bf0d8e))
* **parser:** upgrade the version of meshline ([26a8508](https://github.com/iTowns/itowns/commit/26a8508))
* **pointcloud:** layer.visible fixed and PointsMaterial.copy renamed to update ([224d48f](https://github.com/iTowns/itowns/commit/224d48f)), closes [#764](https://github.com/iTowns/itowns/issues/764)
* **pointcloud:** remove unused variable ([e0d839d](https://github.com/iTowns/itowns/commit/e0d839d)), closes [#719](https://github.com/iTowns/itowns/issues/719)
* **protocol:** handling error source ([b3f9b89](https://github.com/iTowns/itowns/commit/b3f9b89))
* **Protocol:** in TMS/VectorTile, wrong projection convert for globe ([f04805d](https://github.com/iTowns/itowns/commit/f04805d))
* **protocols:** fix wrong orientation in panorama ([7f86bf1](https://github.com/iTowns/itowns/commit/7f86bf1))
* **protocols:** handle 'w' component in WMTS_WGS84Parent ([ab776d1](https://github.com/iTowns/itowns/commit/ab776d1))
* **protocols:** wrong xbil/DEM texture's min and max ([e06b35e](https://github.com/iTowns/itowns/commit/e06b35e))
* **protocol:** vectorTile to geojson directly in 'EPSG:3857' ([80cb868](https://github.com/iTowns/itowns/commit/80cb868))
* **protocol:** wrong computation of source level from tile ([f0acd16](https://github.com/iTowns/itowns/commit/f0acd16))
* **protocol:** wrong parsedData in command to get color texture ([7acb2a5](https://github.com/iTowns/itowns/commit/7acb2a5))
* **protocol:** wrong projection from tileMatrixSet ([ce72ac6](https://github.com/iTowns/itowns/commit/ce72ac6))
* **provider:** deal with network errors in a better way for WFS ([7166aff](https://github.com/iTowns/itowns/commit/7166aff))
* **provider:** don't restrict outputFormat to mimetype on WFS layers ([2d1cf4d](https://github.com/iTowns/itowns/commit/2d1cf4d))
* remove forgotten TiledNodeProcessing ([f81ce27](https://github.com/iTowns/itowns/commit/f81ce27))
* **security:** update eslint-plugin-import ([1834365](https://github.com/iTowns/itowns/commit/1834365))
* **security:** update packages lock to fix security issues ([a417d22](https://github.com/iTowns/itowns/commit/a417d22))
* **security:** update to mocha v4 ([967da80](https://github.com/iTowns/itowns/commit/967da80))
* stop using 'level' property where it's not mandatory ([c5633f2](https://github.com/iTowns/itowns/commit/c5633f2))
* **test:** wrong event dispatcher in bootstrap ([e6dec1c](https://github.com/iTowns/itowns/commit/e6dec1c))
* **test:** wrong location for quaternion unit test ([4f5aba3](https://github.com/iTowns/itowns/commit/4f5aba3))


### Performance Improvements

* **protocols:** decrease the count of network fetch image/xbil ([b891a81](https://github.com/iTowns/itowns/commit/b891a81))
* **renderer:** stop creating new vector for each feature ([#713](https://github.com/iTowns/itowns/issues/713)) ([b426336](https://github.com/iTowns/itowns/commit/b426336))


### Examples

* add example with THREE loader collada ([813577d](https://github.com/iTowns/itowns/commit/813577d))
* add globe travel example, camera' animation ([1d723af](https://github.com/iTowns/itowns/commit/1d723af))
* add picking in wfs examples ([ac7286f](https://github.com/iTowns/itowns/commit/ac7286f))
* **collada:** refactor example using three js loader helper ([8ed9ec1](https://github.com/iTowns/itowns/commit/8ed9ec1))
* **core:** add Source examples ([c8ccd3f](https://github.com/iTowns/itowns/commit/c8ccd3f))
* fix positionGlobe camera moves and altitude ([41b9528](https://github.com/iTowns/itowns/commit/41b9528)), closes [#747](https://github.com/iTowns/itowns/issues/747)
* **loader:** helper to load three js loaders and use it. ([699b9bc](https://github.com/iTowns/itowns/commit/699b9bc))
* move style to a global css file ([382e836](https://github.com/iTowns/itowns/commit/382e836))
* **OrientationUtils:** Example of OrientationUtils on planar view. It show oriented cars in Paris. ([3f7d11d](https://github.com/iTowns/itowns/commit/3f7d11d))
* **OrientationUtils:** Example of the OrientationUtils methods on the globe. It shows a list of oriented car in Paris. ([0319d78](https://github.com/iTowns/itowns/commit/0319d78))
* **OrientedImage:** example showing how to adjust a picture position and orientation. ([905ca9b](https://github.com/iTowns/itowns/commit/905ca9b))
* simplify orthographic controls ([d944dd7](https://github.com/iTowns/itowns/commit/d944dd7))
* sync camera in planar and globe view ([c7b61d0](https://github.com/iTowns/itowns/commit/c7b61d0))
* use Camera utils in other examples ([5cf243e](https://github.com/iTowns/itowns/commit/5cf243e))


### Code Refactoring

* **3dtiles:** adapt PntsParser to return a Geometry ([0488dcc](https://github.com/iTowns/itowns/commit/0488dcc)), closes [#764](https://github.com/iTowns/itowns/issues/764)
* **3dtiles:** improve 3dtiles tiles cleanup mechanism ([4be3344](https://github.com/iTowns/itowns/commit/4be3344))
* change the geojson parsing of multi- ([45f5cd8](https://github.com/iTowns/itowns/commit/45f5cd8))
* change the return value of Fetcher.texture ([592e8f8](https://github.com/iTowns/itowns/commit/592e8f8))
* **controls:** replace preciseSlerp by Quaternion.slerpFlat ([77189aa](https://github.com/iTowns/itowns/commit/77189aa))
* **controls:** Use cameraUtils in GlobeControls ([dfbee91](https://github.com/iTowns/itowns/commit/dfbee91))
* **core:** add or use optional target to getPickingPositionFromDepth ([e4c4697](https://github.com/iTowns/itowns/commit/e4c4697))
* **core:** auto-assign texture layer update function ([08989e8](https://github.com/iTowns/itowns/commit/08989e8))
* **Core:** Avoid intermediate projection to convert a Extent ([37a33fc](https://github.com/iTowns/itowns/commit/37a33fc))
* **core:** avoid manipulating LayeredMaterial internal state ([d40385f](https://github.com/iTowns/itowns/commit/d40385f))
* **core:** avoid to convert extent if it's not needed ([e3aba3c](https://github.com/iTowns/itowns/commit/e3aba3c))
* **core:** change view.notifyChange semantics ([881013d](https://github.com/iTowns/itowns/commit/881013d)), closes [#4](https://github.com/iTowns/itowns/issues/4)
* **core:** Homogenize all providers as static ([a531732](https://github.com/iTowns/itowns/commit/a531732))
* **core:** improve render view to buffer / target functions ([1b07ea6](https://github.com/iTowns/itowns/commit/1b07ea6))
* **core:** move commonAncestorLookup to TileMesh ([4bdb62a](https://github.com/iTowns/itowns/commit/4bdb62a))
* **core:** optimize coordinate.geodesicNormal compute ([c809d84](https://github.com/iTowns/itowns/commit/c809d84))
* **core:** remove OBB() method of TileMesh in favor of direct access to obb property ([e57b6c6](https://github.com/iTowns/itowns/commit/e57b6c6))
* **core:** remove unused condition in Scheduler ([43b76ef](https://github.com/iTowns/itowns/commit/43b76ef))
* **core:** unify mesh picking methods ([5d8753c](https://github.com/iTowns/itowns/commit/5d8753c))
* **examples:** clean up examples ([ee4c556](https://github.com/iTowns/itowns/commit/ee4c556))
* **examples:** make most examples single file ([f19266f](https://github.com/iTowns/itowns/commit/f19266f))
* **gis:** change ellipsoidSizes from function to object ([f681060](https://github.com/iTowns/itowns/commit/f681060))
* **gis:** remove _internalUnitStorage from Coordinates/Extent ([#693](https://github.com/iTowns/itowns/issues/693)) ([3b7cce3](https://github.com/iTowns/itowns/commit/3b7cce3))
* Harmonize the mimetype configuration ([#597](https://github.com/iTowns/itowns/issues/597)) ([b38aa7b](https://github.com/iTowns/itowns/commit/b38aa7b))
* move geometric layers off views ([10decfd](https://github.com/iTowns/itowns/commit/10decfd))
* move GlobeTileProcessing internals to GlobeLayer ([6929c16](https://github.com/iTowns/itowns/commit/6929c16))
* move PanoramaTileProcessing internals to PanoramaLayer ([b08d27b](https://github.com/iTowns/itowns/commit/b08d27b))
* move PlanarTileProcessing internals to PlanarLayer ([8b3ee90](https://github.com/iTowns/itowns/commit/8b3ee90))
* move TiledNodeProcessing internals to TiledGeometryLayer ([afc79f2](https://github.com/iTowns/itowns/commit/afc79f2))
* **parser/converter:** merge features option and use one array of number to store the coordinates ([263320c](https://github.com/iTowns/itowns/commit/263320c)), closes [#731](https://github.com/iTowns/itowns/issues/731) [#763](https://github.com/iTowns/itowns/issues/763)
* **parser:** move Materials from potree parsers to potree provider + new layer.material option ([2aa09d3](https://github.com/iTowns/itowns/commit/2aa09d3))
* **parsers:** homogenize parser interface ([7a28c13](https://github.com/iTowns/itowns/commit/7a28c13))
* **parsers:** move and rename parsers to a new parser directory ([6324b66](https://github.com/iTowns/itowns/commit/6324b66)), closes [#695](https://github.com/iTowns/itowns/issues/695)
* **pointcloud:** rework point budget implementation ([5fda3f5](https://github.com/iTowns/itowns/commit/5fda3f5))
* **pointcloud:** rework point budget implementation ([0b1ccc4](https://github.com/iTowns/itowns/commit/0b1ccc4))
* **pointcloud:** simplify SSE computation for pointcloud ([f18548f](https://github.com/iTowns/itowns/commit/f18548f)), closes [#674](https://github.com/iTowns/itowns/issues/674)
* **pointcloud:** simplify SSE computation for pointcloud ([739f053](https://github.com/iTowns/itowns/commit/739f053)), closes [#674](https://github.com/iTowns/itowns/issues/674)
* **provider:** don't guess format based on extension ([b508b5f](https://github.com/iTowns/itowns/commit/b508b5f))
* **renderer:** get mesh properties generically ([e08c102](https://github.com/iTowns/itowns/commit/e08c102))
* **renderer:** PointsMaterial shader cleanup and optimization ([04899d9](https://github.com/iTowns/itowns/commit/04899d9))
* **renderer:** remove unused PanoramicMesh ([6606363](https://github.com/iTowns/itowns/commit/6606363))
* **shader:** manage chunk directly into shaders ([bb871cc](https://github.com/iTowns/itowns/commit/bb871cc))
* **test:** robustify test-example target ([59e7fac](https://github.com/iTowns/itowns/commit/59e7fac))
* **vector:** add hole support ([a212dde](https://github.com/iTowns/itowns/commit/a212dde)), closes [#688](https://github.com/iTowns/itowns/issues/688)


### Workflow and chores

* **3dtiles:** move b3dm mesh init from 3dTilesProvider to B3dmParser ([a98abf4](https://github.com/iTowns/itowns/commit/a98abf4))
* adapt getBoundingSphere call to three v0.91 ([#725](https://github.com/iTowns/itowns/issues/725)) ([c82685d](https://github.com/iTowns/itowns/commit/c82685d))
* **build:** drop babel-plugin-webpack-loader ([0be15c3](https://github.com/iTowns/itowns/commit/0be15c3))
* **build:** remove unused packages ([f1c2d57](https://github.com/iTowns/itowns/commit/f1c2d57))
* **build:** update all babel dependencies ([2aaa2e3](https://github.com/iTowns/itowns/commit/2aaa2e3))
* **build:** verify that we are using npm >= 6 ([c8b61cc](https://github.com/iTowns/itowns/commit/c8b61cc))
* change the JSDOC configuration ([b2c3f3a](https://github.com/iTowns/itowns/commit/b2c3f3a))
* change the no-console property of eslint ([dd17e28](https://github.com/iTowns/itowns/commit/dd17e28))
* **doc:** change missing files GpxParser and GeoJSONParser ([31f697f](https://github.com/iTowns/itowns/commit/31f697f))
* **examples:** no need to pass a parent layer ([840208b](https://github.com/iTowns/itowns/commit/840208b))
* **examples:** rename all globeView variables in examples to view ([a842c6d](https://github.com/iTowns/itowns/commit/a842c6d))
* **examples:** simplify the multiglobe example ([#720](https://github.com/iTowns/itowns/issues/720)) ([0754505](https://github.com/iTowns/itowns/commit/0754505))
* **packaging:** update to webpack 3 ([77e6cc0](https://github.com/iTowns/itowns/commit/77e6cc0))
* **parser:** remove unneeded gpx/geojson parser options ([29e0799](https://github.com/iTowns/itowns/commit/29e0799))
* **Providers:** move providers to a directory Provider at the root of the source ([8f4077f](https://github.com/iTowns/itowns/commit/8f4077f))
* **test:** add unit test coverage report. ([a24bec2](https://github.com/iTowns/itowns/commit/a24bec2))
* **travis:** remove the manual installation of puppeteer for travis ([9dc1468](https://github.com/iTowns/itowns/commit/9dc1468))
* update package-lock.json ([dd5eaaf](https://github.com/iTowns/itowns/commit/dd5eaaf))
* Use prepublishOnly npm script rather than prepublish ([075dd6a](https://github.com/iTowns/itowns/commit/075dd6a))


### Documentation

* add doc for PlanarControls constructor ([36c5be7](https://github.com/iTowns/itowns/commit/36c5be7))
* add partial doc for Scheduler and Provider ([b30fea4](https://github.com/iTowns/itowns/commit/b30fea4))
* clean the GeoJsonParser documentation ([3893c44](https://github.com/iTowns/itowns/commit/3893c44))


### Tests

* Add continuous integration on Windows through AppVeyor ([ad12c03](https://github.com/iTowns/itowns/commit/ad12c03))
* add puppeteer master in dev dependencies ([374b860](https://github.com/iTowns/itowns/commit/374b860))
* add remote debugging option ([30e8d6a](https://github.com/iTowns/itowns/commit/30e8d6a))
* add test unit test on the accuracy of the function Quaternion.slerp ([e6bb7d0](https://github.com/iTowns/itowns/commit/e6bb7d0))
* CameraUtils with Globe example ([984cb74](https://github.com/iTowns/itowns/commit/984cb74))
* **core:** add new source examples ([c7fd059](https://github.com/iTowns/itowns/commit/c7fd059))
* **core:** add source unit test ([8304969](https://github.com/iTowns/itowns/commit/8304969))
* **core:** add unit test on providers and sources ([90d2dbb](https://github.com/iTowns/itowns/commit/90d2dbb))
* **core:** error operation on addLayer ([fc83923](https://github.com/iTowns/itowns/commit/fc83923))
* fix a typo in Feature2Mesh test ([7153164](https://github.com/iTowns/itowns/commit/7153164))
* GlobeControls with Globe example ([7163758](https://github.com/iTowns/itowns/commit/7163758))
* move unit test to specific folder ([35d61c3](https://github.com/iTowns/itowns/commit/35d61c3))
* **protocols:** should fetch like expected for wmts ([7b1878a](https://github.com/iTowns/itowns/commit/7b1878a))
* reduce test time for examples ([1f12a47](https://github.com/iTowns/itowns/commit/1f12a47))
* remove tempory save screenshot ([abfe583](https://github.com/iTowns/itowns/commit/abfe583))
* retry cubic_planar test if necessary ([ee49a3d](https://github.com/iTowns/itowns/commit/ee49a3d))
* should get picking position from depth ([3cee1b4](https://github.com/iTowns/itowns/commit/3cee1b4))
* UNIT CameraUtils ([e182a82](https://github.com/iTowns/itowns/commit/e182a82))
* use puppeteer to test all examples ([9b6bb98](https://github.com/iTowns/itowns/commit/9b6bb98))


### Others

* Release v2.4.0. ([033f197](https://github.com/iTowns/itowns/commit/033f197))
* feat (core): restriction to maximum count of color layers ([9a5dfe2](https://github.com/iTowns/itowns/commit/9a5dfe2))
* Add support for other data types in potree pointclouds (#767) ([d21bd10](https://github.com/iTowns/itowns/commit/d21bd10)), closes [#767](https://github.com/iTowns/itowns/issues/767)
* fix (core): get max texture sampler unit with mesa/firefox ([f452bec](https://github.com/iTowns/itowns/commit/f452bec))
* Revert "refactor(pointcloud): rework point budget implementation" ([7ad11ae](https://github.com/iTowns/itowns/commit/7ad11ae))
* Revert "refactor(pointcloud): simplify SSE computation for pointcloud" ([c1fdbc5](https://github.com/iTowns/itowns/commit/c1fdbc5))
* clean up code ([065edd4](https://github.com/iTowns/itowns/commit/065edd4))
* Replace TextDecoder polyfill with static instance (#698) ([c02545b](https://github.com/iTowns/itowns/commit/c02545b)), closes [#698](https://github.com/iTowns/itowns/issues/698)
* Update the global documents of the project (#694) ([2de6ba7](https://github.com/iTowns/itowns/commit/2de6ba7)), closes [#694](https://github.com/iTowns/itowns/issues/694)
* refactor(core) remove CacheRessource (#687) ([5d33d62](https://github.com/iTowns/itowns/commit/5d33d62)), closes [#687](https://github.com/iTowns/itowns/issues/687)
* review ([a48c5cc](https://github.com/iTowns/itowns/commit/a48c5cc))
* Remove `layer.parentLayer` from last commit ([64226a5](https://github.com/iTowns/itowns/commit/64226a5))
* **core:** upgrade Earcut to 2.1.3 ([2289a7f](https://github.com/iTowns/itowns/commit/2289a7f))
* **debug:** update chart.js to 2.7.2 ([741cf2c](https://github.com/iTowns/itowns/commit/741cf2c))
* **examples:** filter layers vector tile ([cf3754a](https://github.com/iTowns/itowns/commit/cf3754a))
* **Orientation:** Orientation utils provides a method to create quaternion from properties (roll, pitch, heading, or omega phi kappa) ([8c60fb1](https://github.com/iTowns/itowns/commit/8c60fb1))
* **View:** fix event vs mouse detection when picking ([ebeecfd](https://github.com/iTowns/itowns/commit/ebeecfd))


### BREAKING CHANGES

* **gis:** ellipsoidSizes from Coordinates.js is no longer a
function but an object.
* **core:** change view.notifyChange signature and semantics
* **Core:** Before this change, `view.addLayer` was throwing some errors directly in
some cases, and rejecting the promise in others. This replaces the
former for the latter in all cases. If you relied on a try/catch block
surrounding `view.addLayer` to catch some undocumented errors, you need
to move your error handling code to your promise rejection handler.
* **core:** this modify the signature of all picking functions.
* the signature of Fetcher.texture has changed, and only
return a promise now, instead of an object containing the texture and
the promise.
* **core:** a Provider needs to return a Promise every time after
calling its executeCommand function.
* **vector:** feature collection are not merged anymore
* **vector:** GeoJSON2Feature now returns a Promise
* **core:** c3DEngine.renderViewTobuffer has been renamed renderViewToBuffer
and has a new signature.
* - `layer.options.mimetype` is removed in favor of `layer.format`.
- `WFS_Provider`: format should now be a proper mimetype. So `json`
  becomes `application/json`, `geojson` becomes `application/geojson`.
* **core:** KML_Provider and BuildingBox_Provider have been
removed, as well as getPointOrder from WFS_Provider.



<a name="2.3.0"></a>
# [2.3.0](https://github.com/iTowns/itowns/compare/v2.2.0...v2.3.0) (2018-02-27)


### Features

* **3dtiles:** add wireframe support for 3dTiles layer, and add wireframe checkbox to 3dTilesDebugUI, visible in the 3dTiles example ([1a0d632](https://github.com/iTowns/itowns/commit/1a0d632))
* **core:** add bounding sphere helper in debug mode ([d1a5cd8](https://github.com/iTowns/itowns/commit/d1a5cd8))
* **core:** add event to coordinates helpers ([861114c](https://github.com/iTowns/itowns/commit/861114c))
* **core:** add or use optional target to methods to avoid memory allocations ([eedfa09](https://github.com/iTowns/itowns/commit/eedfa09))
* **core:** avoid memory allocation to function declaration ([88a78e9](https://github.com/iTowns/itowns/commit/88a78e9))
* **core:** re-enable three.js object sorting ([fc1f3eb](https://github.com/iTowns/itowns/commit/fc1f3eb))
* **core:** update to THREE v89 ([97a0c90](https://github.com/iTowns/itowns/commit/97a0c90))
* **examples:** add gui debug in planar in debug mode only ([ccfede0](https://github.com/iTowns/itowns/commit/ccfede0))
* **wfs:** Add a debug UI for geometry layer, to change visibility, opacity and toggle wireframe, material size and material linewith ([89a05ef](https://github.com/iTowns/itowns/commit/89a05ef))


### Bug Fixes

* **3dtiles:** fix the sphere bounding volume visualisation in debug mode ([dc431e4](https://github.com/iTowns/itowns/commit/dc431e4))
* **3dtiles:** SSE computation for spherical bounding volumes ([e133a84](https://github.com/iTowns/itowns/commit/e133a84))
* **controls:** Fix typo in getBoundingClientRect ([28a365b](https://github.com/iTowns/itowns/commit/28a365b))
* **controls:** stop using originalTarget which mozilla-specific ([bccf23b](https://github.com/iTowns/itowns/commit/bccf23b))
* **core:** blending with premultiplied color to transparent color layer ([b8062a3](https://github.com/iTowns/itowns/commit/b8062a3))
* **core:** disable logdepthbuffer if EXT_frag_depth is missing ([eb6da6d](https://github.com/iTowns/itowns/commit/eb6da6d))
* **core:** error to update OBBHelper ([58ef581](https://github.com/iTowns/itowns/commit/58ef581))
* **core:** fix wrong calculation of the color of the sky ([77c19ef](https://github.com/iTowns/itowns/commit/77c19ef)), closes [#652](https://github.com/iTowns/itowns/issues/652)
* **core:** handle near pos. in box3 visibility functions ([628eeb3](https://github.com/iTowns/itowns/commit/628eeb3))
* **core:** marked dependency is insecure version ([b7c222f](https://github.com/iTowns/itowns/commit/b7c222f)), closes [/github.com/jsdoc3/jsdoc/issues/1489#issuecomment-355521471](https://github.com//github.com/jsdoc3/jsdoc/issues/1489/issues/issuecomment-355521471)
* **core:** Prevent to subdivide for poor elevation level ([60dccb5](https://github.com/iTowns/itowns/commit/60dccb5))
* **core:** use parent extent transformation to compute tile's transformation ([84f45ca](https://github.com/iTowns/itowns/commit/84f45ca)), closes [#668](https://github.com/iTowns/itowns/issues/668) [#642](https://github.com/iTowns/itowns/issues/642)
* **core:** wrong building 3dTiles's OBB ([20c9a90](https://github.com/iTowns/itowns/commit/20c9a90))
* **examples:** bad orthographic origin ([37aa12a](https://github.com/iTowns/itowns/commit/37aa12a)), closes [#639](https://github.com/iTowns/itowns/issues/639)
* **examples:** fix eslint warnings ([20ad2f9](https://github.com/iTowns/itowns/commit/20ad2f9))
* **examples:** make examples test friendly ([81d0f10](https://github.com/iTowns/itowns/commit/81d0f10))
* **examples:** wrong tile matrix limit ([f670b10](https://github.com/iTowns/itowns/commit/f670b10))
* **gis:** possibility to set tiled crs ([a7d3422](https://github.com/iTowns/itowns/commit/a7d3422))
* **gis:** update proj4 to 2.4.4 ([b8b8cf1](https://github.com/iTowns/itowns/commit/b8b8cf1))
* **GlobeControls:** minor debug ([db99ec1](https://github.com/iTowns/itowns/commit/db99ec1))
* **protocols:** avoid to set points's count at zero ([4f854e6](https://github.com/iTowns/itowns/commit/4f854e6))
* **protocols:** determine the correct mimeType when using StaticProvider ([d172dfe](https://github.com/iTowns/itowns/commit/d172dfe))
* **protocols:** stop parsing unnecessarily xbil buffer ([1f987ff](https://github.com/iTowns/itowns/commit/1f987ff))
* **protocols:** wfs, adapt the mesh transformation with the tile space ([776101a](https://github.com/iTowns/itowns/commit/776101a)), closes [#558](https://github.com/iTowns/itowns/issues/558)
* **protocols:** wrong OBB for 3dTile's region ([c9e3098](https://github.com/iTowns/itowns/commit/c9e3098))
* **test:** !change subdivision count in PLANAR test! ([a7c9d15](https://github.com/iTowns/itowns/commit/a7c9d15))
* **wfs:** use bigger integer data type for indices array, for THREE.LineSegments. ([133a85b](https://github.com/iTowns/itowns/commit/133a85b))


### Performance Improvements

* **core:** reduce to obb's highest points for horizon culling ([2073699](https://github.com/iTowns/itowns/commit/2073699))
* **examples:** increase performance in filtering the duplicates lines ([f0d5948](https://github.com/iTowns/itowns/commit/f0d5948))
* **examples:** increase performance to compute altitude line ([bef8b9e](https://github.com/iTowns/itowns/commit/bef8b9e))
* **geometry:** avoid useless computation for elevation layers ([eece915](https://github.com/iTowns/itowns/commit/eece915))
* **protocols:** increase performance to building features ([4201967](https://github.com/iTowns/itowns/commit/4201967))


### Examples

* add anaglyph, parallax and stereo effects ([99c3fce](https://github.com/iTowns/itowns/commit/99c3fce))
* **pointcloud:** Mix pointcloud and globe example ([dcf7cd8](https://github.com/iTowns/itowns/commit/dcf7cd8))
* **wfs:** Place points and bus lines on the ground ([f75d9ad](https://github.com/iTowns/itowns/commit/f75d9ad))


### Code Refactoring

* **core:** use common geometry in meshTile ([9241818](https://github.com/iTowns/itowns/commit/9241818)), closes [#87](https://github.com/iTowns/itowns/issues/87)
* **protocols:** use THREE GLTFloader 2.0 ([5195ed1](https://github.com/iTowns/itowns/commit/5195ed1))
* **wfs:** add contour coordinates to the callback that compute altitude. ([a95fc45](https://github.com/iTowns/itowns/commit/a95fc45))


### Workflow and chores

* **debug:** use FrameRequester instead of overriding layer.update fn ([2c26e25](https://github.com/iTowns/itowns/commit/2c26e25))


### Styles

* **core:** eslint no-use-before-define warning ([2e40973](https://github.com/iTowns/itowns/commit/2e40973))


### Tests

* **core:** add unit tests for updateLayeredMaterialNodeImagery ([d84b4ad](https://github.com/iTowns/itowns/commit/d84b4ad))
* **core:** should subdivide like expected and prevent to subdivide for poor elevation level ([bde707b](https://github.com/iTowns/itowns/commit/bde707b))


### Others

* Release v2.3.0. ([932ded2](https://github.com/iTowns/itowns/commit/932ded2))
*  feat(core): compute TMS coordinates from top to bottom ([b480019](https://github.com/iTowns/itowns/commit/b480019))
* fix (controls): add an offset after mouse movement ([f3d7772](https://github.com/iTowns/itowns/commit/f3d7772))
* fix (GpxUtils): add handling of multiple track segments #613 ([36ba47f](https://github.com/iTowns/itowns/commit/36ba47f)), closes [#613](https://github.com/iTowns/itowns/issues/613)
* docs(jsdoc) : adding a home page to the API documentation + adding a new template for the API documentation ([bcf69ee](https://github.com/iTowns/itowns/commit/bcf69ee))
* fix (renderer): set DEBUG after defines definition ([0238fb4](https://github.com/iTowns/itowns/commit/0238fb4))
* **examples:** avoid displaying the tooltip before the js loads ([a740302](https://github.com/iTowns/itowns/commit/a740302))
* **gis:** correctly set extent _internalStorageUnit when intersecting ([36a232b](https://github.com/iTowns/itowns/commit/36a232b))
* **lint:** Change formatting errors and 'unused var' errors to warnings ([c28ec96](https://github.com/iTowns/itowns/commit/c28ec96))



<a name="2.2.0"></a>
# [2.2.0](https://github.com/iTowns/itowns/compare/v2.0.0...v2.2.0) (2017-12-18)


### Features

* 3dtiles file: pnts and b3dm RTC feature ([b63171a](https://github.com/iTowns/itowns/commit/b63171a))
* add 'object to attach to' param to GeometryLayer ([9f2616a](https://github.com/iTowns/itowns/commit/9f2616a))
* add 'splitted rendering' example ([00d9647](https://github.com/iTowns/itowns/commit/00d9647))
* add a postUpdate method to GeometryLayer ([9950706](https://github.com/iTowns/itowns/commit/9950706))
* add collision handling for camera with terrain ([99de55f](https://github.com/iTowns/itowns/commit/99de55f))
* add command.targetLevel support to WMS_Provider ([ad5f741](https://github.com/iTowns/itowns/commit/ad5f741))
* add DEMUtils module ([61d0b89](https://github.com/iTowns/itowns/commit/61d0b89))
* add helper functions to create Globe and Planar layers ([c9ecfa2](https://github.com/iTowns/itowns/commit/c9ecfa2))
* add in the gltfLoader the extension batch id ([53375f9](https://github.com/iTowns/itowns/commit/53375f9))
* add new FirstPersonControls ([33f028d](https://github.com/iTowns/itowns/commit/33f028d))
* add new functions to prevent subdivisions when textures are missing ([d1d63d4](https://github.com/iTowns/itowns/commit/d1d63d4))
* add optional target to methods to avoid memory allocations ([c6a44eb](https://github.com/iTowns/itowns/commit/c6a44eb))
* add point cloud support ([55cecff](https://github.com/iTowns/itowns/commit/55cecff))
* add StaticProvider to download from a list of predefined images ([dc7526c](https://github.com/iTowns/itowns/commit/dc7526c))
* add support for transparent 3d-tiles geometries ([f3aa79f](https://github.com/iTowns/itowns/commit/f3aa79f))
* add support for transparent geometries (tiles or pointcloud) ([e43e059](https://github.com/iTowns/itowns/commit/e43e059))
* add UPDATE_STATE.FINISHED state = no need to update this layer anymore ([ef20ae9](https://github.com/iTowns/itowns/commit/ef20ae9))
* add WFS example ([4238506](https://github.com/iTowns/itowns/commit/4238506))
* add WFS/geojson support ([ca658cf](https://github.com/iTowns/itowns/commit/ca658cf))
* allow layer custom 'can this tile get a better texture' mechanism ([e3238d0](https://github.com/iTowns/itowns/commit/e3238d0))
* **controls:** support touch interface in FirstPersonControls ([575a196](https://github.com/iTowns/itowns/commit/575a196))
* **core:** add the ability to colorize pointclouds ([b12fc2f](https://github.com/iTowns/itowns/commit/b12fc2f))
* **examples:** add point features representing route points, in the WFS examples ([8de7389](https://github.com/iTowns/itowns/commit/8de7389))
* **examples:** add polygon extrusion on globe example ([a2615ea](https://github.com/iTowns/itowns/commit/a2615ea))
* handle missing WebGL support gracefully ([6f2c0f8](https://github.com/iTowns/itowns/commit/6f2c0f8))
* implement Extent.as() for different crs ([f89b49f](https://github.com/iTowns/itowns/commit/f89b49f))
* replace hardcoded color by a noTextureColor uniform ([71f0225](https://github.com/iTowns/itowns/commit/71f0225))
* Sphere management for debug ([1b5ed3f](https://github.com/iTowns/itowns/commit/1b5ed3f))
* update multiglobe example ([9766c11](https://github.com/iTowns/itowns/commit/9766c11))
* use parent's extent for attached layer if undefined ([fde464b](https://github.com/iTowns/itowns/commit/fde464b))
* **wfs:** add a function to filter feature ([4e56369](https://github.com/iTowns/itowns/commit/4e56369))
* **wfs:** add convert and onMeshCreated customisation for wfs layers. ([1ba5f4a](https://github.com/iTowns/itowns/commit/1ba5f4a))


### Bug Fixes

* 3dTilesProcessing outdated notifyChange call ([69e3053](https://github.com/iTowns/itowns/commit/69e3053))
* add missing 'new' to Extent.clone() method ([76dac3b](https://github.com/iTowns/itowns/commit/76dac3b))
* call initNode function on level 0 nodes too ([dd145e9](https://github.com/iTowns/itowns/commit/dd145e9))
* check if extensions field exists for b3dm rtc ([3dc0bbb](https://github.com/iTowns/itowns/commit/3dc0bbb))
* **controls:** make rotation direction coherent ([1778dbc](https://github.com/iTowns/itowns/commit/1778dbc))
* **controls:** simplify internal state in FirstPersonControls ([dce3c42](https://github.com/iTowns/itowns/commit/dce3c42))
* **controls:** use a more explicit heuristic for rotations ([962dfa2](https://github.com/iTowns/itowns/commit/962dfa2))
* **core:** avoid hiding all other Object3D when hiding first layer ([119468a](https://github.com/iTowns/itowns/commit/119468a))
* **core:** Don't try to add scene to itself ([2d27945](https://github.com/iTowns/itowns/commit/2d27945))
* do not remove id from user layer object ([74bc575](https://github.com/iTowns/itowns/commit/74bc575))
* don't block subdivision on frozen layers ([ee1ebaf](https://github.com/iTowns/itowns/commit/ee1ebaf))
* don't enable debug features in non debug builds ([6676d0a](https://github.com/iTowns/itowns/commit/6676d0a))
* fix a bug with the points, they don't have the z-buffer logarithmic active ([cdad4ff](https://github.com/iTowns/itowns/commit/cdad4ff))
* frame requester removal ([400275a](https://github.com/iTowns/itowns/commit/400275a))
* **loader:** remove two warnings ([9c755dd](https://github.com/iTowns/itowns/commit/9c755dd))
* make getXBilTextureByUrl always return a Texture ([9c33742](https://github.com/iTowns/itowns/commit/9c33742))
* make sure addLayer functions have a consistent API ([fa75ada](https://github.com/iTowns/itowns/commit/fa75ada))
* make sure camera's matrix is only update by iTowns ([74e031b](https://github.com/iTowns/itowns/commit/74e031b))
* missing 4 component value of unpack1K factors ([45bfdf3](https://github.com/iTowns/itowns/commit/45bfdf3))
* **packaging:** correctly remove debug code from transpiled sources ([9c3e5f0](https://github.com/iTowns/itowns/commit/9c3e5f0))
* **packaging:** put proj4 into peerDependencies and devDependencies ([a16303d](https://github.com/iTowns/itowns/commit/a16303d))
* **pointcloud:** add internal groups before first update ([88f4745](https://github.com/iTowns/itowns/commit/88f4745))
* **pointcloud:** don't ignore layer.opacity ([f867ad5](https://github.com/iTowns/itowns/commit/f867ad5))
* **pointcloud:** honour object3D for pointcloud layers ([836de9c](https://github.com/iTowns/itowns/commit/836de9c))
* properly hide 3d-tiles tiles with "replace" refinement behaviour when children are displayed ([e3e8b7e](https://github.com/iTowns/itowns/commit/e3e8b7e))
* remove non working Clouds feature ([c790193](https://github.com/iTowns/itowns/commit/c790193))
* repair globe horizon culling when globe is not at 0,0,0 ([3660237](https://github.com/iTowns/itowns/commit/3660237))
* replace broken OPENSM example layers url ([624187d](https://github.com/iTowns/itowns/commit/624187d))
* restore PM layers texture display ([333e50d](https://github.com/iTowns/itowns/commit/333e50d)), closes [#525](https://github.com/iTowns/itowns/issues/525)
* skirt size now depends on tile size ([6c38cb2](https://github.com/iTowns/itowns/commit/6c38cb2))
* syntax error in 3d-tiles example ([be7b410](https://github.com/iTowns/itowns/commit/be7b410))
* The UI of 3dtiles example ([958cfb0](https://github.com/iTowns/itowns/commit/958cfb0))
* throw an Error when adding a Layer with the same id ([3d9dffd](https://github.com/iTowns/itowns/commit/3d9dffd))
* use babel-polyfill and url-polyfill to support IE11 ([f2da729](https://github.com/iTowns/itowns/commit/f2da729)), closes [#510](https://github.com/iTowns/itowns/issues/510)
* use CDN for OrbitControls for cubic_planar example ([1193984](https://github.com/iTowns/itowns/commit/1193984))
* various syntax and grammar corrections ([bed351f](https://github.com/iTowns/itowns/commit/bed351f))
* verify viewerDiv validity in View constructor ([c0c5f37](https://github.com/iTowns/itowns/commit/c0c5f37))


### Performance Improvements

* **wfs:** Avoid creating needlessly objects ([29a79a2](https://github.com/iTowns/itowns/commit/29a79a2))


### Examples

* add a mesh on globe ([30114c2](https://github.com/iTowns/itowns/commit/30114c2))
* add new example 'cubic planar' ([b36e0fb](https://github.com/iTowns/itowns/commit/b36e0fb))
* complete the index one with five different layers ([0db51b7](https://github.com/iTowns/itowns/commit/0db51b7))
* enable a different network strategy for the planar example ([5275e33](https://github.com/iTowns/itowns/commit/5275e33))


### Code Refactoring

* 3d-tiles/b3dm move the glTF axis rotation management in the b3dmloader. ([8b4a779](https://github.com/iTowns/itowns/commit/8b4a779))
* add Extent.intersect method and use three.js wording ([7618f7a](https://github.com/iTowns/itowns/commit/7618f7a))
* **example:** change controls in wfs planar example ([fe5c6f8](https://github.com/iTowns/itowns/commit/fe5c6f8))
* **examples:** update wfs planar to use layer.{convert, onMeshCreated} ([6b8933d](https://github.com/iTowns/itowns/commit/6b8933d))
* **packaging:** factorize common loaders between webpack and babel ([b56360d](https://github.com/iTowns/itowns/commit/b56360d))
* rework Camera's API ([8b2474a](https://github.com/iTowns/itowns/commit/8b2474a))
* rework Debug tools ([de404a2](https://github.com/iTowns/itowns/commit/de404a2))
* rework Tiles removal and cleanup ([6d9b0c8](https://github.com/iTowns/itowns/commit/6d9b0c8))


### Workflow and chores

* add out/ to .gitignore ([c9bb47d](https://github.com/iTowns/itowns/commit/c9bb47d))
* **example:** enlarge debug ui in pointcloud.html ([0e1aea1](https://github.com/iTowns/itowns/commit/0e1aea1))
* **examples:** Minor fix network options ([050f40d](https://github.com/iTowns/itowns/commit/050f40d))
* **packaging:** correct a bad peer dependency ([6bd596d](https://github.com/iTowns/itowns/commit/6bd596d))
* **packaging:** do not expose peer dependencies when using the modules ([357ed7b](https://github.com/iTowns/itowns/commit/357ed7b))
* **packaging:** put three and three.meshline into peerDependencies ([400d3d0](https://github.com/iTowns/itowns/commit/400d3d0))
* **packaging:** Update jsdoc to correct incompatibility with node8 ([0d0a904](https://github.com/iTowns/itowns/commit/0d0a904))
* **test:** set BABEL_DISABLE_CACHE=1 for unit test too ([1691aaf](https://github.com/iTowns/itowns/commit/1691aaf))


### Styles

* fix new linters errors ([d3e54ad](https://github.com/iTowns/itowns/commit/d3e54ad))


### Others

* 2.2.0 ([45f3d25](https://github.com/iTowns/itowns/commit/45f3d25))
* fix (protocols) : stop using layer's option tileMatrixSet in WMS provider ([5a482e9](https://github.com/iTowns/itowns/commit/5a482e9))
* fix (examples): Wrong zoom min in layer example ([f328e78](https://github.com/iTowns/itowns/commit/f328e78)), closes [#600](https://github.com/iTowns/itowns/issues/600)
* fix (example): set correct value on init of GUITools ([28f8592](https://github.com/iTowns/itowns/commit/28f8592))
* feat (core): complete and use FrameRequesters ([492e660](https://github.com/iTowns/itowns/commit/492e660))
* docs (core): fix error to build view documentation ([92190f2](https://github.com/iTowns/itowns/commit/92190f2))
* fix (examples): add comments to panorama.html and remove arrow func ([db43b2f](https://github.com/iTowns/itowns/commit/db43b2f))
* fix (core): add quality settings to tweak panorama refinement behavior ([05ac08e](https://github.com/iTowns/itowns/commit/05ac08e))
* fix (geometry): allow layer to override the default 16 segments value ([1d1a741](https://github.com/iTowns/itowns/commit/1d1a741))
* fixes ([bf0d823](https://github.com/iTowns/itowns/commit/bf0d823))
* feat (examples): add panorama example ([b42ade0](https://github.com/iTowns/itowns/commit/b42ade0))
* feat (core): add Panorama display support ([5cb85dc](https://github.com/iTowns/itowns/commit/5cb85dc))
* fix (protocols): add missing wmts's parameters in request url ([9c25a95](https://github.com/iTowns/itowns/commit/9c25a95))
* fix (core): correct typo in TileMesh ([548ad2b](https://github.com/iTowns/itowns/commit/548ad2b))
* fix (core): don't update non ready layers or not visible layers ([cce948b](https://github.com/iTowns/itowns/commit/cce948b)), closes [#567](https://github.com/iTowns/itowns/issues/567)
* fix (controls): correct typo in FirstPersonControls ([353ee67](https://github.com/iTowns/itowns/commit/353ee67))
* feat (controls): add PanoramaControls ([386cadd](https://github.com/iTowns/itowns/commit/386cadd))
* test (core): add Scheduler unit test ([12a1a3a](https://github.com/iTowns/itowns/commit/12a1a3a))
* refactor (3dtiles): don't instanciate several TextDecoder at startup ([dc4c41d](https://github.com/iTowns/itowns/commit/dc4c41d))
* fix (core): not allow parent's elevation when tile's elevation level is superior ([e94d7ec](https://github.com/iTowns/itowns/commit/e94d7ec))
* fix (core): cancel command or not allow elevation when tile's elevation level is superior ([c7f69cc](https://github.com/iTowns/itowns/commit/c7f69cc))
* feat (core): split OBB computation from tile method in two functions ([0a79f4e](https://github.com/iTowns/itowns/commit/0a79f4e))
* test (geometry): add OBB verification test ([aa660b8](https://github.com/iTowns/itowns/commit/aa660b8)), closes [#87](https://github.com/iTowns/itowns/issues/87)
* fix (controls): reset globeControls when window's focus is losed ([532e972](https://github.com/iTowns/itowns/commit/532e972))
* fix (controls): conflict between simple click and double click ([4917ca7](https://github.com/iTowns/itowns/commit/4917ca7))
* fix (controls): in GlobeControls.setCameraTargetPosition the final position isn't the desired position ([c70c5ed](https://github.com/iTowns/itowns/commit/c70c5ed))
* fix (geometry): sync material visibility and layer visibility in all case ([be96c0c](https://github.com/iTowns/itowns/commit/be96c0c)), closes [#562](https://github.com/iTowns/itowns/issues/562)
* refactor (geometry): simplify TileGeometry code ([70dd629](https://github.com/iTowns/itowns/commit/70dd629))
* test (geometry): add test case for bug #562 ([916c20b](https://github.com/iTowns/itowns/commit/916c20b)), closes [#562](https://github.com/iTowns/itowns/issues/562)
* refactor (core): split LayeredMaterial constants and CommandCancelledEx to their own file ([9a4e1ca](https://github.com/iTowns/itowns/commit/9a4e1ca))
* fix (geometry): don't make material state depends on layer update state ([b524928](https://github.com/iTowns/itowns/commit/b524928)), closes [#562](https://github.com/iTowns/itowns/issues/562) [#562](https://github.com/iTowns/itowns/issues/562)
* feat (protocols): improve StaticProvider.tileInsideLimit performance ([e8f0ef7](https://github.com/iTowns/itowns/commit/e8f0ef7))
* fix (core): use scale.w to compute y value for reading in textures ([d56def9](https://github.com/iTowns/itowns/commit/d56def9))
* refactor (geometry): avoid useless computation when processing a color layer ([e3db230](https://github.com/iTowns/itowns/commit/e3db230))
* fix (3dtiles): don't try to subdivide a children-less node ([a382537](https://github.com/iTowns/itowns/commit/a382537)), closes [#542](https://github.com/iTowns/itowns/issues/542)
* test (core): unit test on OBB.isSphereAboveXYBox ([b560773](https://github.com/iTowns/itowns/commit/b560773))
* feat (controls): add collision camera/tiles's obb in globeControls ([b4f78f1](https://github.com/iTowns/itowns/commit/b4f78f1))
* feat (core): support fog for none logarithmic depth buffer ([f86ff0e](https://github.com/iTowns/itowns/commit/f86ff0e))
* fix (core): don't initialize the fog distance if value is undefined ([19448f7](https://github.com/iTowns/itowns/commit/19448f7))
* fix (geometry): compute vertices/triangles count correctly ([cd800e7](https://github.com/iTowns/itowns/commit/cd800e7))
* feat (core): support texture with different x/y scales ([a616629](https://github.com/iTowns/itowns/commit/a616629))
* fix (core): rollback deletion compute fogDistance in PR #239 ([9e42ac9](https://github.com/iTowns/itowns/commit/9e42ac9)), closes [#239](https://github.com/iTowns/itowns/issues/239)
* feat (core): simplify layer/object3d API ([ea5ff2f](https://github.com/iTowns/itowns/commit/ea5ff2f))
* feat (core): only use threeJsLayer feature when necessary ([6df7898](https://github.com/iTowns/itowns/commit/6df7898))
* fix (protocols): use correct WMS parameter names using the version ([e854657](https://github.com/iTowns/itowns/commit/e854657))
* fix (control): bad camera's heading convention in globeControls ([b6de6ac](https://github.com/iTowns/itowns/commit/b6de6ac))
* fix (controls): in GlobeControls.setCameraTargetPosition the final position isn't the desired position ([576bc74](https://github.com/iTowns/itowns/commit/576bc74))
* fix (controls): in GlobeControls.setOrbitalPosition, the final position isn't the desired position ([18708e9](https://github.com/iTowns/itowns/commit/18708e9))
* fix (controls): fix error target with pick depth position ([ba352ce](https://github.com/iTowns/itowns/commit/ba352ce))
* fix (controls): add target update target for wheel event ([8dc324f](https://github.com/iTowns/itowns/commit/8dc324f))
* fix (controls): wait initialization before move camera ([4afbf31](https://github.com/iTowns/itowns/commit/4afbf31))
* fix (controls): add THREE.layer for helper axis ([74888f9](https://github.com/iTowns/itowns/commit/74888f9))
* fix (examples): change url for OPENSM layer ([c75b73b](https://github.com/iTowns/itowns/commit/c75b73b))
* fix (gis): clamp latitude to convert coordinate EPSG:4326 to EPSG:3857 ([f0da9d4](https://github.com/iTowns/itowns/commit/f0da9d4))
* fix (protocols): support wms in EPSG:3857 projection ([b1341ef](https://github.com/iTowns/itowns/commit/b1341ef))
* fix (examples): change url for OPENSM layer ([14ba355](https://github.com/iTowns/itowns/commit/14ba355))
* fix (points): assign layer property to created objects ([80a5683](https://github.com/iTowns/itowns/commit/80a5683))
* feat (points): add a onPointsCreated callback ([af6c0af](https://github.com/iTowns/itowns/commit/af6c0af))
* Feature (controls) : add configuration key ([5ba09b1](https://github.com/iTowns/itowns/commit/5ba09b1))
* test (vector): test filter features under coordinates ([470edab](https://github.com/iTowns/itowns/commit/470edab))
* example (vector): filter features under coordinate ([920450d](https://github.com/iTowns/itowns/commit/920450d))
* feature (vector): add tools to pick raster features ([2c49aa0](https://github.com/iTowns/itowns/commit/2c49aa0))
* refactor (vector): attribute name layer.geojson to layer.feature ([e396372](https://github.com/iTowns/itowns/commit/e396372))
* feature (gis): add 'epsilon expand' parameter in Extent.insideExtent ([0759e76](https://github.com/iTowns/itowns/commit/0759e76))
* fix (provider): add elevation textures support to StaticProvider ([57f3e2b](https://github.com/iTowns/itowns/commit/57f3e2b))
* fix (geometry): remove tile's layer ([14ee544](https://github.com/iTowns/itowns/commit/14ee544))
* fix (core): error progress animation expression ([a253947](https://github.com/iTowns/itowns/commit/a253947))
* fix (core): assign three.js layers before their first usage ([590837c](https://github.com/iTowns/itowns/commit/590837c))
* fix (GlobeControls) : fixes resize so camera.update is taken into account at the right time ([9fefce6](https://github.com/iTowns/itowns/commit/9fefce6))
* refactor (vector): rename GeoJSON2Feature to GeoJSON2Features ([d8f4a26](https://github.com/iTowns/itowns/commit/d8f4a26))
* refactor (vector): deleting an unnecessary key properties in geojson parsing ([9d128db](https://github.com/iTowns/itowns/commit/9d128db))
* feat (3dtiles): implement tiles cleaning ([a9c2ae1](https://github.com/iTowns/itowns/commit/a9c2ae1))
* feat (3dtiles): use different subdiv. logic for add and sub refinement ([92b738b](https://github.com/iTowns/itowns/commit/92b738b))
* feature (Coordinate): compute geodesic surface normal of the point, using defineProperty ([5728849](https://github.com/iTowns/itowns/commit/5728849))
* feature (Ellipsoid): compute normal of the plane tangent to the surface of the ellipsoid at given cartesian position ([8283cfd](https://github.com/iTowns/itowns/commit/8283cfd))
* Fix (Debug) Allow point size of 0 ([08226ee](https://github.com/iTowns/itowns/commit/08226ee))
* feat (3dtiles): improve gltf line support ([c691473](https://github.com/iTowns/itowns/commit/c691473)), closes [/github.com/KhronosGroup/glTF/blob/master/specification/2.0/schema/mesh.primitive.schema.json#L28](https://github.com//github.com/KhronosGroup/glTF/blob/master/specification/2.0/schema/mesh.primitive.schema.json/issues/L28)
* feat (3dtiles): allow layer.overrideMaterials to be a material ([3ef99d1](https://github.com/iTowns/itowns/commit/3ef99d1))
* fix (3dtiles): use distance to as commands priority value ([ef45a07](https://github.com/iTowns/itowns/commit/ef45a07))
* fix (geojson): check for empty coordinates list before iterating ([46c962c](https://github.com/iTowns/itowns/commit/46c962c))
* test (npm): add unit tests ([334cda5](https://github.com/iTowns/itowns/commit/334cda5))
* test (Coordinate): add unit tests for coordinate conversions ([3aeb258](https://github.com/iTowns/itowns/commit/3aeb258))
* fix (View) : missing camera.update after resize ([b146d9d](https://github.com/iTowns/itowns/commit/b146d9d))
* fix (Camera): don't reset camera's position on resize ([bd675af](https://github.com/iTowns/itowns/commit/bd675af))
* fix (Coordinate): workaround proj4 EPSG:4978 bug ([8962047](https://github.com/iTowns/itowns/commit/8962047))
* fix (globe): workaround texture issues at North Pole ([b2e616c](https://github.com/iTowns/itowns/commit/b2e616c))
* fix (Feature): filteringExtent parameter was missing for multiLineString conversion method. ([b878f6b](https://github.com/iTowns/itowns/commit/b878f6b))
* fix (Extent): during conversion, internal storage unit was not given ([d1f6918](https://github.com/iTowns/itowns/commit/d1f6918))
* fix (3dtiles): do not try to subdivide a tile without children ([87f817d](https://github.com/iTowns/itowns/commit/87f817d))
* Chore (packaging): update package-lock.json ([9bdc7a6](https://github.com/iTowns/itowns/commit/9bdc7a6))
* fix (Scheduler) Error is logged, at most 2 times, in the console. ([63171b5](https://github.com/iTowns/itowns/commit/63171b5))
* fix (Scheduler) Error caught from the providers is logged in the console ([936059f](https://github.com/iTowns/itowns/commit/936059f))
* fix (FeatureProcessing): add coordinate conversion to reference view crs to make it work with the globe. ([bc5f159](https://github.com/iTowns/itowns/commit/bc5f159))
* feature (GlobeView) : use cache depth buffer ([061d19e](https://github.com/iTowns/itowns/commit/061d19e))
* fix (3tiles): handle 'refine' parameter inheritance properly ([7db57de](https://github.com/iTowns/itowns/commit/7db57de)), closes [#185](https://github.com/iTowns/itowns/issues/185)
* 2.1.0 ([fdcbc55](https://github.com/iTowns/itowns/commit/fdcbc55))
* updated THREE to r87 ([682bbb1](https://github.com/iTowns/itowns/commit/682bbb1))
* fix (scheduler): improve layers with relative url support ([47de0aa](https://github.com/iTowns/itowns/commit/47de0aa))
* fix (Depth) : correct calculation of depth ([067699e](https://github.com/iTowns/itowns/commit/067699e))
* fix (subdivision) : no stop subdivision in case error loading ([1e1a446](https://github.com/iTowns/itowns/commit/1e1a446))
* feature (WMTS) : give priority options.zoom to tileMatrixSetLimits ([fc5f41d](https://github.com/iTowns/itowns/commit/fc5f41d))
* fix (api): pan correction ([4a06fbb](https://github.com/iTowns/itowns/commit/4a06fbb))
* example : add planar and globe examples Vector data to Color layers ([cea1482](https://github.com/iTowns/itowns/commit/cea1482))
* refacto (feature) : split GeoJSon2THREE ([81c46e6](https://github.com/iTowns/itowns/commit/81c46e6))
* feature (Vector) : add protocol to generate texture from vector datas ([5969b2c](https://github.com/iTowns/itowns/commit/5969b2c))
* Feature : added new PlanarControls (#454) ([92f404d](https://github.com/iTowns/itowns/commit/92f404d)), closes [#454](https://github.com/iTowns/itowns/issues/454)
* fix (api): getZoom debug ([eb27dc4](https://github.com/iTowns/itowns/commit/eb27dc4))
* feature (3dtiles): sse subdivision threshold can be manually defined ([2ef4d4b](https://github.com/iTowns/itowns/commit/2ef4d4b))
* fix (3dtiles): fix SSE computation ([e8ce7b7](https://github.com/iTowns/itowns/commit/e8ce7b7)), closes [#185](https://github.com/iTowns/itowns/issues/185)
* example (scanEx) : update tile Matrix Set Limits ([e671403](https://github.com/iTowns/itowns/commit/e671403))
* test (3dtiles): add an example for watch the information about one building, ([14dd6fb](https://github.com/iTowns/itowns/commit/14dd6fb))
* feature (3dtiles): add support for batch table ([d31fb7e](https://github.com/iTowns/itowns/commit/d31fb7e))
* feature (Coordinates): add offsetInExtent method ([ddea05c](https://github.com/iTowns/itowns/commit/ddea05c))
* refacto (gpx) : add options and documention ([175d618](https://github.com/iTowns/itowns/commit/175d618))
* refacto (gpx) : change default export loadGpx by gpxUtils ([81177c8](https://github.com/iTowns/itowns/commit/81177c8))
* fix elevation problem ([e0f5938](https://github.com/iTowns/itowns/commit/e0f5938))
* feature (gpx) : add support crs in gpx ([0a502de](https://github.com/iTowns/itowns/commit/0a502de))
* feature (GPX) : scale path and point GPX to correct display ([a74c3ea](https://github.com/iTowns/itowns/commit/a74c3ea))
* fix (PlanarView): apply correct factor when denormalizing picking value ([8ee40d6](https://github.com/iTowns/itowns/commit/8ee40d6))
* fix (Extent): fix constructor by properly reading _values ([e6d5a03](https://github.com/iTowns/itowns/commit/e6d5a03))
* fix:(3d-tiles) fix a bug with the transform of bounding volume region and their parent (issue #414) ([59a779d](https://github.com/iTowns/itowns/commit/59a779d)), closes [#414](https://github.com/iTowns/itowns/issues/414)
* fix:(3d-tiles) fix a visibility bug for bounding volume's debug helpers. ([545e540](https://github.com/iTowns/itowns/commit/545e540))
* fix:(3d-tiles) fix badly positioned debug bounding volume boxes ([cea3278](https://github.com/iTowns/itowns/commit/cea3278))
* fix (wfs): pass layer.networkOptions to Fetcher ([c8e1a69](https://github.com/iTowns/itowns/commit/c8e1a69))
* fix (Coordinates): fix copy method ([f164e84](https://github.com/iTowns/itowns/commit/f164e84))
* example (Globe) : add mini viewer ([d919316](https://github.com/iTowns/itowns/commit/d919316))
* fix (GlobeView) : get, dynamically, alpha value rendering ([d894c24](https://github.com/iTowns/itowns/commit/d894c24))
* example (globe) : add scale widget ([3c14bb3](https://github.com/iTowns/itowns/commit/3c14bb3))
* fix (Coordinates): handle target argument in as() method ([a8504bf](https://github.com/iTowns/itowns/commit/a8504bf))
* fix (globe): do not initialize realistic lightning meshes by default ([8b53990](https://github.com/iTowns/itowns/commit/8b53990))
* fix (globe): assign correct three.js layer to atmosphere elements ([aeedbdb](https://github.com/iTowns/itowns/commit/aeedbdb))
* fix (example): make pointcloud demo work in examples/index.html ([7804735](https://github.com/iTowns/itowns/commit/7804735))
* fix (planar): add support for noTextureColor layer options ([af9cae7](https://github.com/iTowns/itowns/commit/af9cae7))
* feature (proj4): add a projection cache to avoid validating proj4 transform each time ([a750c79](https://github.com/iTowns/itowns/commit/a750c79))
* fix (README) : corrected links for demos and doc ([6cc7dd5](https://github.com/iTowns/itowns/commit/6cc7dd5))
* fix (examples): add missing iframe ([3a5c836](https://github.com/iTowns/itowns/commit/3a5c836))
* add Style for deployment before Jekyll template ([288b6dd](https://github.com/iTowns/itowns/commit/288b6dd))
* changed dir itowns2 to itowns on public site ([a5977ab](https://github.com/iTowns/itowns/commit/a5977ab))
* on title click, opens each demo in new tab by default ([76ae961](https://github.com/iTowns/itowns/commit/76ae961))
* Use screenshots instead ([3372327](https://github.com/iTowns/itowns/commit/3372327))
* Add new example landing page ([0cb8915](https://github.com/iTowns/itowns/commit/0cb8915))
* updated readme for V2 release ([1155123](https://github.com/iTowns/itowns/commit/1155123))
* fix (camera): simplify Camera visibility helpers functions ([9147e98](https://github.com/iTowns/itowns/commit/9147e98))
* fix (GlobeView) : fix problem with viewerDiv in resize event ([d5b96f2](https://github.com/iTowns/itowns/commit/d5b96f2))
* fix (test) : process.env.PWD is undefined in Windows ([045b365](https://github.com/iTowns/itowns/commit/045b365))
* ability to hook a module to requestAnimationFrame ([7bfb8e1](https://github.com/iTowns/itowns/commit/7bfb8e1))
* add a PR template for gh ([22f71e6](https://github.com/iTowns/itowns/commit/22f71e6))
* add a preprocessed promise to layer ([e077b2f](https://github.com/iTowns/itowns/commit/e077b2f))
* add a template for gh issues ([671cad8](https://github.com/iTowns/itowns/commit/671cad8))
* add fly controls ([c135dce](https://github.com/iTowns/itowns/commit/c135dce))
* Add missing contributors ([957afbb](https://github.com/iTowns/itowns/commit/957afbb))
* add missing diff to package-lock.json ([5669772](https://github.com/iTowns/itowns/commit/5669772))
* add option to not create GlobeControls ([fd2fc24](https://github.com/iTowns/itowns/commit/fd2fc24))
* add Text{Encoder, Decoder} polyfill for older browsers ([78c0bb7](https://github.com/iTowns/itowns/commit/78c0bb7))
* allow canvas to be focused by default ([30f50bb](https://github.com/iTowns/itowns/commit/30f50bb))
* avoid collision for preSSE ([c5563c0](https://github.com/iTowns/itowns/commit/c5563c0)), closes [#458](https://github.com/iTowns/itowns/issues/458)
* correctly prepare lib/ for running test ([8e94f7d](https://github.com/iTowns/itowns/commit/8e94f7d))
* correctly update geometry in all cases ([5c24c57](https://github.com/iTowns/itowns/commit/5c24c57))
* correctly update sizeRendering when resizing ([feae0d9](https://github.com/iTowns/itowns/commit/feae0d9))
* fail fast if a protocol is given but unknown ([b31f6da](https://github.com/iTowns/itowns/commit/b31f6da)), closes [#455](https://github.com/iTowns/itowns/issues/455)
* fix compatibility issues in examples ([f46399e](https://github.com/iTowns/itowns/commit/f46399e))
* reformat {Globe,Planar}View to use preprocessDataLayer ([f2a16df](https://github.com/iTowns/itowns/commit/f2a16df))
* reformat 3dTiles_Provider to use preprocessDataLayer ([faf75f5](https://github.com/iTowns/itowns/commit/faf75f5))
* reformat pointcloud to use whenReady promise ([ac5799f](https://github.com/iTowns/itowns/commit/ac5799f))
* remove incorrect information ([4b80989](https://github.com/iTowns/itowns/commit/4b80989))
* replace TextDecoder polyfill with something lighter ([63915f7](https://github.com/iTowns/itowns/commit/63915f7))
* update BUILDING and CONTRIBUTING doc ([a5c48eb](https://github.com/iTowns/itowns/commit/a5c48eb))
* update eslint-config-airbnb-base version ([44bd671](https://github.com/iTowns/itowns/commit/44bd671))
* update package-lock.json, forgotton on PR [#400](https://github.com/iTowns/itowns/issues/400) ([c11feed](https://github.com/iTowns/itowns/commit/c11feed))
* update the camera before updating layers ([fadd0d9](https://github.com/iTowns/itowns/commit/fadd0d9))
* use newer version of dat.gui, from release tarball ([0fdca8a](https://github.com/iTowns/itowns/commit/0fdca8a))
* workaround for https://github.com/travis-ci/travis-ci/issues/8082 ([64cda70](https://github.com/iTowns/itowns/commit/64cda70))



<a name="2.0.0"></a>
# [2.0.0](https://github.com/iTowns/itowns/compare/7cbc11e...v2.0.0) (2017-07-06)


### Features

* Add 'needsRedraw' param to notifyChange ([97fe4a1](https://github.com/iTowns/itowns/commit/97fe4a1))
* Add 3d-tiles support for region and sphere bounding volumes ([bafa375](https://github.com/iTowns/itowns/commit/bafa375))
* add a new prefab: PlanarView ([e1510b4](https://github.com/iTowns/itowns/commit/e1510b4))
* Add animation feature ([8231069](https://github.com/iTowns/itowns/commit/8231069))
* Add animation option in api functions ([b33322b](https://github.com/iTowns/itowns/commit/b33322b))
* add Camera.box3DSizeOnScreen method ([c4ba01e](https://github.com/iTowns/itowns/commit/c4ba01e))
* Add damping in globe's control, in state MOVE_GLOBE and ORBIT ([dd01df5](https://github.com/iTowns/itowns/commit/dd01df5))
* Add debug chart showing visible object count. ([cef5ea4](https://github.com/iTowns/itowns/commit/cef5ea4))
* add DEFINITIVE_ERROR state to LayerUpdateState ([b996134](https://github.com/iTowns/itowns/commit/b996134))
* add isBox3DVisible method to Camera ([6b5039c](https://github.com/iTowns/itowns/commit/6b5039c))
* Add LayerUpdateState object to manager updates cycle ([44057a4](https://github.com/iTowns/itowns/commit/44057a4))
* add option to disable tilemesh skirt ([ba0f03f](https://github.com/iTowns/itowns/commit/ba0f03f))
* Add partial support for '3d-tiles' spherical viewer Request Volume ([9d984fe](https://github.com/iTowns/itowns/commit/9d984fe))
* Add post-processing and external Scene examples ([0c23a5a](https://github.com/iTowns/itowns/commit/0c23a5a))
* add support for color textures as elevation ([23cc142](https://github.com/iTowns/itowns/commit/23cc142))
* Add the early support for 3d-tiles Pnts format ([cb6c596](https://github.com/iTowns/itowns/commit/cb6c596)), closes [#185](https://github.com/iTowns/itowns/issues/185)
* add TMS_Provider ([7a67961](https://github.com/iTowns/itowns/commit/7a67961))
* Add UI to switch between tilesets in 3dtiles example, Change the import main : OBBHelper to debug.js ([fe0ca0b](https://github.com/iTowns/itowns/commit/fe0ca0b))
* Added early support for 3d-tiles ([8cfb0d1](https://github.com/iTowns/itowns/commit/8cfb0d1))
* added support for tileset links in 3d-tiles tilesets. Slightly reworked 3d-tiles initialisation. ([0d97afd](https://github.com/iTowns/itowns/commit/0d97afd))
* added visibility management for 3d-tiles ([10befb2](https://github.com/iTowns/itowns/commit/10befb2))
* allow command to indicate they don't need a redraw ([258efcd](https://github.com/iTowns/itowns/commit/258efcd))
* allow external THREE Scene and Renderer ([dc5ffce](https://github.com/iTowns/itowns/commit/dc5ffce)), closes [#278](https://github.com/iTowns/itowns/issues/278)
* allow geometry layer to implement partial update ([3f340b9](https://github.com/iTowns/itowns/commit/3f340b9))
* allow override View rendering method ([3e9dc43](https://github.com/iTowns/itowns/commit/3e9dc43))
* encapsulate 3d-tiles content into a Object3D node, making support for gltfUpaxis possible ([d46b111](https://github.com/iTowns/itowns/commit/d46b111))
* export LayerUpdateStrategy constants ([e78fcf3](https://github.com/iTowns/itowns/commit/e78fcf3))
* GuiTools displays color layers ordered by sequence number ([ce012ed](https://github.com/iTowns/itowns/commit/ce012ed))
* improve isBox3DVisible and box3DSizeOnScreen (reduce mem. alloc) ([682dd93](https://github.com/iTowns/itowns/commit/682dd93))
* keep more values in debug graph ([d84949e](https://github.com/iTowns/itowns/commit/d84949e))
* only redraw if needed ([ea8905a](https://github.com/iTowns/itowns/commit/ea8905a))
* remove delay param from notifyChange ([ede2e0c](https://github.com/iTowns/itowns/commit/ede2e0c))
* replace TileMesh OBBHelper by a debug layer ([18904aa](https://github.com/iTowns/itowns/commit/18904aa))
* simplify command cancellation function ([2611561](https://github.com/iTowns/itowns/commit/2611561)), closes [#244](https://github.com/iTowns/itowns/issues/244)
* simplify redraw handling ([6ac3ea7](https://github.com/iTowns/itowns/commit/6ac3ea7))
* support user supplied camera ([cb9fdad](https://github.com/iTowns/itowns/commit/cb9fdad))
* Throw custom error when cancelling commands ([b86bd11](https://github.com/iTowns/itowns/commit/b86bd11))


### Bug Fixes

* 3d-tiles tiles are now properly hidden when zooming out when using the additive refinement property ([073aa83](https://github.com/iTowns/itowns/commit/073aa83))
* add tolerance when comparing Extent ([0294c28](https://github.com/iTowns/itowns/commit/0294c28))
* cancel subdivision commands if parent is deleted ([0a74342](https://github.com/iTowns/itowns/commit/0a74342))
* Check elevation values before replacing parent : LayeredMaterialNodeProcessing ([3f2a1fc](https://github.com/iTowns/itowns/commit/3f2a1fc))
* clarify PM coordonites computation and add limit ([00c9c3a](https://github.com/iTowns/itowns/commit/00c9c3a))
* correct network options for OSM examples ([5ff8bf8](https://github.com/iTowns/itowns/commit/5ff8bf8))
* correct typo in function name ([d71f7fd](https://github.com/iTowns/itowns/commit/d71f7fd))
* correct WMS bbox computation from parent ([3992e16](https://github.com/iTowns/itowns/commit/3992e16))
* damping effect when we want camera fixed after movement ([4e5f395](https://github.com/iTowns/itowns/commit/4e5f395))
* disable double-click in GlobeControls when !enabled ([abaf23d](https://github.com/iTowns/itowns/commit/abaf23d))
* disable horizon culling for level-1 tiles ([de1d3b2](https://github.com/iTowns/itowns/commit/de1d3b2))
* don't rebuild WMS layer extent when it's already an Extent instance ([06b5793](https://github.com/iTowns/itowns/commit/06b5793))
* don't try to compute min/max elevation if no bufffer ([f60e937](https://github.com/iTowns/itowns/commit/f60e937))
* Fix LayeredMaterial.setSequence method ([03ebafa](https://github.com/iTowns/itowns/commit/03ebafa))
* fix transparent layer rendering in FF ([ea3c181](https://github.com/iTowns/itowns/commit/ea3c181))
* globe Z axis now goes through north pole and uses proper WGS84 coordinates. Set Three default up axis as z. ([2b1efa3](https://github.com/iTowns/itowns/commit/2b1efa3))
* increase priority of non-loaded base nodes ([56b9d03](https://github.com/iTowns/itowns/commit/56b9d03))
* layer properties ([ba789f2](https://github.com/iTowns/itowns/commit/ba789f2))
* make sure tile's children inherit correct layer settings ([0489ee7](https://github.com/iTowns/itowns/commit/0489ee7))
* only update debug charts if they're visible ([41d10f4](https://github.com/iTowns/itowns/commit/41d10f4))
* ovezealous b3dm semantic filtering ([e42ed70](https://github.com/iTowns/itowns/commit/e42ed70))
* patch log depth buffer support for imported b3dm models ([d3e2456](https://github.com/iTowns/itowns/commit/d3e2456))
* prevent auto matrix update ([ee7cfa0](https://github.com/iTowns/itowns/commit/ee7cfa0))
* really support external renderer ([9606786](https://github.com/iTowns/itowns/commit/9606786))
* recursively cleanup all nodes ([27fe023](https://github.com/iTowns/itowns/commit/27fe023))
* remove Debug dependency from View ([dcdf7c0](https://github.com/iTowns/itowns/commit/dcdf7c0))
* restore 'request different level than tile's level' feature ([d16638e](https://github.com/iTowns/itowns/commit/d16638e))
* SimpleFS and SimpleVS no longer have obsolete header ([6cb96ad](https://github.com/iTowns/itowns/commit/6cb96ad))
* stop resetting needsRedraw flag in multiple place in MainLoop ([30bf1fc](https://github.com/iTowns/itowns/commit/30bf1fc))
* typos ([f545c2c](https://github.com/iTowns/itowns/commit/f545c2c))
* update 3d-tiles handling to threejs 0.86 ([363c205](https://github.com/iTowns/itowns/commit/363c205))
* use getSize() instead of size() ([7a8f479](https://github.com/iTowns/itowns/commit/7a8f479))
* use scissor test ([331aa68](https://github.com/iTowns/itowns/commit/331aa68))


### Examples

* add MultiGlobe example ([559243c](https://github.com/iTowns/itowns/commit/559243c))
* add Orthographic camera example ([31ac433](https://github.com/iTowns/itowns/commit/31ac433))


### Code Refactoring

* Camera now has a viewMatrix attribute. Slightly reworked camera update ([3c17ee2](https://github.com/iTowns/itowns/commit/3c17ee2))
* deep rework of layers and threejs integration ([77d94fd](https://github.com/iTowns/itowns/commit/77d94fd)), closes [#217](https://github.com/iTowns/itowns/issues/217) [#124](https://github.com/iTowns/itowns/issues/124) [#40](https://github.com/iTowns/itowns/issues/40)
* Elevation textures can now have 3 states ([8bc0767](https://github.com/iTowns/itowns/commit/8bc0767))
* getRTCMatrixFromCenter ([1e612d5](https://github.com/iTowns/itowns/commit/1e612d5))
* Invoke command.resolve/reject in ManagerCommand ([518b23e](https://github.com/iTowns/itowns/commit/518b23e))
* limit WMTS and matrixSet to WMTS_Provider ([2ea34c6](https://github.com/iTowns/itowns/commit/2ea34c6))
* move camera and controls to Scene ([116c2b8](https://github.com/iTowns/itowns/commit/116c2b8))
* move globe specific code to ApiGlobe ([2a7f0a4](https://github.com/iTowns/itowns/commit/2a7f0a4))
* Move Three' scene to View ([b7d6c7c](https://github.com/iTowns/itowns/commit/b7d6c7c))
* Moved geometry building from TileMesh to TileProvider ([d01b57e](https://github.com/iTowns/itowns/commit/d01b57e))
* remove BasicMaterial ([6c7d9b6](https://github.com/iTowns/itowns/commit/6c7d9b6))
* remove custom point/line mesh and materials ([b6021be](https://github.com/iTowns/itowns/commit/b6021be))
* remove dead code in TileProvider ([d34c8b8](https://github.com/iTowns/itowns/commit/d34c8b8))
* remove deprecated RTC feature ([d20aec9](https://github.com/iTowns/itowns/commit/d20aec9))
* remove Quad.js ([1ef077e](https://github.com/iTowns/itowns/commit/1ef077e))
* remove Scene and reorganize files ([00b17d2](https://github.com/iTowns/itowns/commit/00b17d2))
* remove unused Node's properties ([208ce5f](https://github.com/iTowns/itowns/commit/208ce5f))
* remove usage of defaultValue ([965f5e1](https://github.com/iTowns/itowns/commit/965f5e1))
* remove WMTS dependencies in Layer update code ([509567f](https://github.com/iTowns/itowns/commit/509567f))
* Removed distance and helper attributes from TileMesh ([0dbb3e9](https://github.com/iTowns/itowns/commit/0dbb3e9))
* rename BoundingBox -> Extent ([3a4d5fa](https://github.com/iTowns/itowns/commit/3a4d5fa))
* rename ManagerCommands -> Scheduler ([38bbe33](https://github.com/iTowns/itowns/commit/38bbe33))
* rename ThreeExtented -> ThreeExtended and MathExtented -> MathExtended ([245d328](https://github.com/iTowns/itowns/commit/245d328))
* rework GeoCoordinate and rename it Coordinates ([fc6bc1a](https://github.com/iTowns/itowns/commit/fc6bc1a))
* simplify command system ([2bfe0ec](https://github.com/iTowns/itowns/commit/2bfe0ec))
* Stop catching errors in WMS/WTMS providers ([fa5876d](https://github.com/iTowns/itowns/commit/fa5876d))
* subdivision test for planar mode rework ([44b1426](https://github.com/iTowns/itowns/commit/44b1426))
* Use new LayerUpdateState ([abb7443](https://github.com/iTowns/itowns/commit/abb7443))


### Workflow and chores

* rework examples and stop commit builds/example to this repo ([a906c18](https://github.com/iTowns/itowns/commit/a906c18))
* update three.js 0.86 ([d060e0e](https://github.com/iTowns/itowns/commit/d060e0e))


### Documentation

* **jsdoc:** documentation complements ([f743d7a](https://github.com/iTowns/itowns/commit/f743d7a))
* Usage instruction ([93642a2](https://github.com/iTowns/itowns/commit/93642a2))


### Styles

* enable 'block-scoped-var' rule ([5d5cf21](https://github.com/iTowns/itowns/commit/5d5cf21))
* enable 'default-case' rule ([0d5fc78](https://github.com/iTowns/itowns/commit/0d5fc78))
* enable 'no-lonely-if' rule ([bc7cd6f](https://github.com/iTowns/itowns/commit/bc7cd6f))
* enable 'no-loop-func' rule ([87edd37](https://github.com/iTowns/itowns/commit/87edd37))
* enable 'no-tabs' rule ([3917934](https://github.com/iTowns/itowns/commit/3917934))
* enable 'no-unneeded-ternary' rule ([16cf771](https://github.com/iTowns/itowns/commit/16cf771))
* fix some 'camelcase' rule offenders ([0397831](https://github.com/iTowns/itowns/commit/0397831))
* use const/let and for of ([38719a0](https://github.com/iTowns/itowns/commit/38719a0))


### Tests

* use examples as functionnal tests ([eb237cc](https://github.com/iTowns/itowns/commit/eb237cc))


### Others

* Bump version: 2.0.0 ([3bd7af9](https://github.com/iTowns/itowns/commit/3bd7af9))
* fix (example) : fix menu and size div for globe example (#375) ([ea4024c](https://github.com/iTowns/itowns/commit/ea4024c)), closes [#375](https://github.com/iTowns/itowns/issues/375)
* fix (coordWMTS) : fix error in PM coords ([ea9ef79](https://github.com/iTowns/itowns/commit/ea9ef79))
* Fix (Debug): keep OBBHelper between updates if node stays visible ([33063b7](https://github.com/iTowns/itowns/commit/33063b7))
* fix (tests): missing mock method ([31aed84](https://github.com/iTowns/itowns/commit/31aed84))
* example (WMS) : change key before before it was deleted ([c34b20b](https://github.com/iTowns/itowns/commit/c34b20b))
* fix (WMS) : add default min max ([66476b8](https://github.com/iTowns/itowns/commit/66476b8))
* refacto (extent/layer) : Identical use of extents in layer ([b05f668](https://github.com/iTowns/itowns/commit/b05f668))
* fix (BuilderEllipsoidTile) : fix wrong height in OBB computation ([852711b](https://github.com/iTowns/itowns/commit/852711b)), closes [#303](https://github.com/iTowns/itowns/issues/303)
* fix (ImageryLayers) : moveLayerToIndex ([0ffbe16](https://github.com/iTowns/itowns/commit/0ffbe16))
* fix (GlobeControls) : pickGeoPosition ([2d524f5](https://github.com/iTowns/itowns/commit/2d524f5))
* fix (GlobeView) : fix wrong sequence number ([e6106c9](https://github.com/iTowns/itowns/commit/e6106c9))
* doc (jsdoc): event documentation improvements ([7e3d68c](https://github.com/iTowns/itowns/commit/7e3d68c))
* fix (event) : 'layer-added' event returns the id of the layer added ([7c73a80](https://github.com/iTowns/itowns/commit/7c73a80))
* Turn on ESLint valid-jsdoc rule, and fix all errors ([5343054](https://github.com/iTowns/itowns/commit/5343054))
* fix (examples) : use new api in all examples ([c1c71ad](https://github.com/iTowns/itowns/commit/c1c71ad))
* feature (Layer) : add layer's properties and event layer ([abb0cd0](https://github.com/iTowns/itowns/commit/abb0cd0))
* fix (GlobeControl) : fix typo event ([56facb3](https://github.com/iTowns/itowns/commit/56facb3))
* refacto (GlobeView) : move specific globe's functions from ApiGlobe to GlobeView ([789f4e3](https://github.com/iTowns/itowns/commit/789f4e3))
* refacto (GlobeControls) : move functions of control from ApiGlobe to GlobeControl ([2a5e295](https://github.com/iTowns/itowns/commit/2a5e295))
* fix (ellipsoid) : error longitude in compute Cartesian to Cartographic ([13e71c5](https://github.com/iTowns/itowns/commit/13e71c5))
* fix (example) : fix path json files ([995f9b1](https://github.com/iTowns/itowns/commit/995f9b1))
* fix (c3Engine) : flick rendering in c3Engine.screenCoordsToNodeId() ([934974a](https://github.com/iTowns/itowns/commit/934974a))
* refacto (Scale) : simplify computing getZoomScale and setZoomScale ([b24db5b](https://github.com/iTowns/itowns/commit/b24db5b))
* fix (getZoomLevel) : update with the new geometric error ([e3609aa](https://github.com/iTowns/itowns/commit/e3609aa))
* refacto (sse) : change geometric error ([a908191](https://github.com/iTowns/itowns/commit/a908191))
* fix (example) : fix script path and update globe ([316b0cc](https://github.com/iTowns/itowns/commit/316b0cc))
* feature (wmts): use tileMatrixSetLimits in tileInsideLimit ([a6f81fc](https://github.com/iTowns/itowns/commit/a6f81fc))
* Examples (Layer) : fix wrong tile matrix limits ([70e55f4](https://github.com/iTowns/itowns/commit/70e55f4))
* fix (example): use correct tileMatrixSetLimits for ORTHOIMAGERY.ORTHOPHOTOS layer ([5c004a2](https://github.com/iTowns/itowns/commit/5c004a2))
* refacto (nodeProcess, layeredMaterial, tileMesh) ([9956b45](https://github.com/iTowns/itowns/commit/9956b45))
* refactor (WMTS/WMS) : add tiledImageTools ([207c89a](https://github.com/iTowns/itowns/commit/207c89a))
* refactor (provider) : pass parent's texture in command ([42e5143](https://github.com/iTowns/itowns/commit/42e5143))
* refactor ( provider) : Factorization WMTS and WMS provider ([16333ae](https://github.com/iTowns/itowns/commit/16333ae))
* refactor ( provider) : remove ancestor in WMTS and WMS provider ([a43830a](https://github.com/iTowns/itowns/commit/a43830a))
* doc (protocol) : Imagery and Elevation ([c36e39d](https://github.com/iTowns/itowns/commit/c36e39d))
* Fix (Camera): fix target position update after setRange() ([af573d7](https://github.com/iTowns/itowns/commit/af573d7))
* Fix (GlobeControls): Correct initial target position ([725b33b](https://github.com/iTowns/itowns/commit/725b33b))
* refacto (WMTS) : move WMTS's options in layer.options ([8d40ef5](https://github.com/iTowns/itowns/commit/8d40ef5))
* fix (GlobeControls) : fix error in pan() and with helperViewer ([c02c5e0](https://github.com/iTowns/itowns/commit/c02c5e0))
* Fix (Camera): Return a promise in setRange ([54be48f](https://github.com/iTowns/itowns/commit/54be48f))
* fix (Camera) : fix setCameraTargetGeoPosition and setCameraTargetGeoPositionAdvanced ([fd37465](https://github.com/iTowns/itowns/commit/fd37465))
* test(layer) : test if the id of the layer already exist. If so, the layer is not added to the scene. ([41de7e7](https://github.com/iTowns/itowns/commit/41de7e7))
* clean (shader) : remove unused uniform ([11282f4](https://github.com/iTowns/itowns/commit/11282f4))
* clean (api) : remove unused function ([a60e784](https://github.com/iTowns/itowns/commit/a60e784))
* fix (api): pickPosition ([0d7c36c](https://github.com/iTowns/itowns/commit/0d7c36c))
* feat (Layers) : add getLayers(type) and getLayerById(pId) ([de065ff](https://github.com/iTowns/itowns/commit/de065ff))
* PR 221 Corrections ([8b0267d](https://github.com/iTowns/itowns/commit/8b0267d))
* IPR / Attribution ([364c815](https://github.com/iTowns/itowns/commit/364c815))
* IPR / Attribution ([0991cb7](https://github.com/iTowns/itowns/commit/0991cb7))
* fix (Layer) : error in option layer for lighting ([f62185d](https://github.com/iTowns/itowns/commit/f62185d))
* refactor (CVML): Replace CVML by Earcut module for triangualisation ([755d8ee](https://github.com/iTowns/itowns/commit/755d8ee))
* example (front page) : removes layers for demo Front page ([fd3504f](https://github.com/iTowns/itowns/commit/fd3504f))
* BABEL_DISABLE_CACHE for windows ([d6f0841](https://github.com/iTowns/itowns/commit/d6f0841))
* Package babelized src/ into lib/ ([8cfa4ec](https://github.com/iTowns/itowns/commit/8cfa4ec))
* Change import path from absolute to relative ([a69b5ee](https://github.com/iTowns/itowns/commit/a69b5ee))
* NODE_ENV for Windows ([7f902fa](https://github.com/iTowns/itowns/commit/7f902fa))
* Fix gh-pages deployment ([f3fe24e](https://github.com/iTowns/itowns/commit/f3fe24e))
* fix (Loading texture) : error loading elevation #236 ([c00a2ad](https://github.com/iTowns/itowns/commit/c00a2ad)), closes [#236](https://github.com/iTowns/itowns/issues/236)
* Upgrade packages ([79bcca0](https://github.com/iTowns/itowns/commit/79bcca0))
* Prepare publishing alpha to npm ([9431a37](https://github.com/iTowns/itowns/commit/9431a37))
* Deleted LensFlare texture access causing problems in build ([9f894f5](https://github.com/iTowns/itowns/commit/9f894f5))
* Upgrade Three.js v82 to v83 ([4b15978](https://github.com/iTowns/itowns/commit/4b15978))
* Reactivate import/no-named-as-default linter rule ([a06ed8d](https://github.com/iTowns/itowns/commit/a06ed8d))
* Correct import/newline-after-import linter error ([a39dbcb](https://github.com/iTowns/itowns/commit/a39dbcb))
* Correct various linter errors about imports ([cf7eac7](https://github.com/iTowns/itowns/commit/cf7eac7))
* Activate linter on examples/ ([f04748f](https://github.com/iTowns/itowns/commit/f04748f))
* Remove JavaTools, that wasn't actually doing anything ([59bb583](https://github.com/iTowns/itowns/commit/59bb583))
* Correct 'one-var' linter rule ([9f9fe6c](https://github.com/iTowns/itowns/commit/9f9fe6c))
* Remove unused function ([8668c93](https://github.com/iTowns/itowns/commit/8668c93))
* Remove Date.now shim, not needed ([c115145](https://github.com/iTowns/itowns/commit/c115145))
* Fix func_names linter errors ([3996a8d](https://github.com/iTowns/itowns/commit/3996a8d))
* set off the linebreak-style to avoid hundreds of errors on windows ([a17fd64](https://github.com/iTowns/itowns/commit/a17fd64))
* Use Three.js download capabilities directly. ([99993b1](https://github.com/iTowns/itowns/commit/99993b1))
* Remove unused files. ([01cf1a6](https://github.com/iTowns/itowns/commit/01cf1a6))
* Group network operation in Fetcher ([b783574](https://github.com/iTowns/itowns/commit/b783574))
* Add airbnb eslint conf ([8c7c7bc](https://github.com/iTowns/itowns/commit/8c7c7bc))
* Add binary tools object ([7bc439a](https://github.com/iTowns/itowns/commit/7bc439a))
* Rework LayeredMaterial and uniforms shaders ([5589824](https://github.com/iTowns/itowns/commit/5589824))
* Change Skirt size -> influence performance ([c36b3be](https://github.com/iTowns/itowns/commit/c36b3be))
* Add StyleManager object ([eb7fb3b](https://github.com/iTowns/itowns/commit/eb7fb3b))
* fixup! Fix race condition in the initialisation of the Scene. ([02d37d6](https://github.com/iTowns/itowns/commit/02d37d6))
* Fix race condition in the initialisation of the Scene. ([121a0d0](https://github.com/iTowns/itowns/commit/121a0d0))
* Run JSDoc as part of "npm test" (and not just the deployment) ([274eca3](https://github.com/iTowns/itowns/commit/274eca3)), closes [#204](https://github.com/iTowns/itowns/issues/204) [#203](https://github.com/iTowns/itowns/issues/203)
* Run Travis on the latest and latest-LTS Node.js version ([f2b3d46](https://github.com/iTowns/itowns/commit/f2b3d46))
* WMSOptions default values in WMS_Providers (corrections) (#208) ([201c59f](https://github.com/iTowns/itowns/commit/201c59f)), closes [#208](https://github.com/iTowns/itowns/issues/208) [#207](https://github.com/iTowns/itowns/issues/207)
* WMTSOptions default values in WMTS_Provider.js ([62f510d](https://github.com/iTowns/itowns/commit/62f510d))
* WMTSOpotions in WMTS_Provider.js ([29f313f](https://github.com/iTowns/itowns/commit/29f313f))
* Correction to the ApiGlobe.js file so the API Documentation will be generated correctly. ([dd04332](https://github.com/iTowns/itowns/commit/dd04332))
* add addElevationLayerFromJSON() ([173f82f](https://github.com/iTowns/itowns/commit/173f82f))
* autodeploy with examples ([101b855](https://github.com/iTowns/itowns/commit/101b855))
* addImageryLayersFromJSONArray() ([ff32ebd](https://github.com/iTowns/itowns/commit/ff32ebd))
* THREE v80 to v82 ([1dc0fbc](https://github.com/iTowns/itowns/commit/1dc0fbc))
* Fix bug ApiGlobe.removeImageryLayer() ([019ba45](https://github.com/iTowns/itowns/commit/019ba45))
* Remove small oblique weight in Screen space error compute ([7a85dc2](https://github.com/iTowns/itowns/commit/7a85dc2))
* Add ApiGlobe.setZoomLevel() ([613af86](https://github.com/iTowns/itowns/commit/613af86))
* Reset TileMesh pendingSubdivision flag when removing children ([34496db](https://github.com/iTowns/itowns/commit/34496db))
* Use the same logic for ancestor texture fetching ([267d5cf](https://github.com/iTowns/itowns/commit/267d5cf))
* Rework scene and rendering ([ee2b8ee](https://github.com/iTowns/itowns/commit/ee2b8ee))
* Reworked and simplified update loop using requestAnimationFrame. ([dbf9d25](https://github.com/iTowns/itowns/commit/dbf9d25))
* Api globe add features : ([57a5ad3](https://github.com/iTowns/itowns/commit/57a5ad3))
* Change Three v79 to v80 ([afa3a29](https://github.com/iTowns/itowns/commit/afa3a29))
* Debug and clean up globe control ([5bd80c7](https://github.com/iTowns/itowns/commit/5bd80c7))
* Fix debug Mode with GlobeControl ([978aebe](https://github.com/iTowns/itowns/commit/978aebe))
* Recast GlobeControl ([28e0f3e](https://github.com/iTowns/itowns/commit/28e0f3e))
* Implement different layer update strategies ([e67e320](https://github.com/iTowns/itowns/commit/e67e320))
* Cleanup index.html ([133f591](https://github.com/iTowns/itowns/commit/133f591))
* Removed need for tileMatrixSet for WMS layer ([6f05ec6](https://github.com/iTowns/itowns/commit/6f05ec6))
* Rework texture loading ([fcf274e](https://github.com/iTowns/itowns/commit/fcf274e))
* Adapt TileMesh.distance computation ([10a910a](https://github.com/iTowns/itowns/commit/10a910a))
* Simplify Frustum culling ([4db0f01](https://github.com/iTowns/itowns/commit/4db0f01))
* Corrected lensflare bug (small fix) ([7b785c3](https://github.com/iTowns/itowns/commit/7b785c3))
* Recast CoordCarto to GeoCoordinate ([0ec6d89](https://github.com/iTowns/itowns/commit/0ec6d89))
* Change Globe BoundingBox ([de69815](https://github.com/iTowns/itowns/commit/de69815))
* Replace members'BBOX minCarto and maxCarto by west,east, north and south ([2cf7d9b](https://github.com/iTowns/itowns/commit/2cf7d9b))
* Fix wrong geographic coord for tile ([dd3b266](https://github.com/iTowns/itowns/commit/dd3b266))
* Fix horizon occlusion bug ([6311db8](https://github.com/iTowns/itowns/commit/6311db8))
* Recast gpx provider ([18d0f0b](https://github.com/iTowns/itowns/commit/18d0f0b))
* add shader to draw point of interest ([0fbf582](https://github.com/iTowns/itowns/commit/0fbf582))
* Add material line with width under ANGLE windows ([78c6cb4](https://github.com/iTowns/itowns/commit/78c6cb4))
* #114 : Add GPX_Provider ([de668fc](https://github.com/iTowns/itowns/commit/de668fc)), closes [#114](https://github.com/iTowns/itowns/issues/114)
* Fix error color for selected tiles ([8697aec](https://github.com/iTowns/itowns/commit/8697aec))
* Remove dummy in c3Engine ([d0e8ab1](https://github.com/iTowns/itowns/commit/d0e8ab1))
* Move header fragment and vertex shader in BasicMaterial ([7624d2a](https://github.com/iTowns/itowns/commit/7624d2a))
* Add Package custom-event ([698dc42](https://github.com/iTowns/itowns/commit/698dc42))
* Properly handle errors in IoDriver_Image ([f828c4e](https://github.com/iTowns/itowns/commit/f828c4e))
* Handle HTTP errors in fetch()es and IoDriverXML ([a4bf95f](https://github.com/iTowns/itowns/commit/a4bf95f))
* Fixed priority queue comparator. ([bcc5abc](https://github.com/iTowns/itowns/commit/bcc5abc))
* Move textures' level management to NodeProcess ([8cf6a4e](https://github.com/iTowns/itowns/commit/8cf6a4e))
* Workaround 'getDelta' bug ([dc2bfd9](https://github.com/iTowns/itowns/commit/dc2bfd9))
* Remove redundant info in TileMesh/LayeredMaterial ([0f69b1d](https://github.com/iTowns/itowns/commit/0f69b1d))
* Add WMS/WGS84 pitch transformation function ([2cd08c0](https://github.com/iTowns/itowns/commit/2cd08c0))
* Remove unused 'useParent' method ([f35b4f8](https://github.com/iTowns/itowns/commit/f35b4f8))
* Remove 'destination' knowledge from providers ([cfaf42c](https://github.com/iTowns/itowns/commit/cfaf42c)), closes [#157](https://github.com/iTowns/itowns/issues/157)
* Ignore error from IoDriver_Image ([d1d5e50](https://github.com/iTowns/itowns/commit/d1d5e50)), closes [#169](https://github.com/iTowns/itowns/issues/169)
* Fix rendering artifacts ([60a40d1](https://github.com/iTowns/itowns/commit/60a40d1))
* Add example WMS layer ([a4816bc](https://github.com/iTowns/itowns/commit/a4816bc))
* Add WMS support ([ee41586](https://github.com/iTowns/itowns/commit/ee41586)), closes [#92](https://github.com/iTowns/itowns/issues/92)
* Remove js-beautify dependency ([9696445](https://github.com/iTowns/itowns/commit/9696445))
* Move from AMD and CommonJS to ES6 modules ([c88fd94](https://github.com/iTowns/itowns/commit/c88fd94))
* Make Convert Three.js extensions to proper modules ([52b23a5](https://github.com/iTowns/itowns/commit/52b23a5))
* Use Babel to allow for using ES6 language features ([1837c61](https://github.com/iTowns/itowns/commit/1837c61))
* Clean Up (whitespace, blank lines, braces, dead code, style) ([c809896](https://github.com/iTowns/itowns/commit/c809896))
* Replace cachedRTC object variable by local function variable ([9b8665b](https://github.com/iTowns/itowns/commit/9b8665b))
* Fix error : Inverse UV texture in Depth Shader ([3baed4a](https://github.com/iTowns/itowns/commit/3baed4a))
* Rename idMaterial to MatteIdsMaterial ([8ca641a](https://github.com/iTowns/itowns/commit/8ca641a))
* Add RendererConstant object: ([2173141](https://github.com/iTowns/itowns/commit/2173141))
* Use new feature, picking id's tile to select tile ([043c98a](https://github.com/iTowns/itowns/commit/043c98a))
* Add new feature : picking id's tile ([f7dbb1e](https://github.com/iTowns/itowns/commit/f7dbb1e))
* Add mechanism 'state rendering' in TileMesh ([31bf392](https://github.com/iTowns/itowns/commit/31bf392))
* Add getMatrixRTC() in BasicMaterial ([993a4e0](https://github.com/iTowns/itowns/commit/993a4e0))
* Create specific globe's material for picking position : GlobeDepthMaterial ([777bcc5](https://github.com/iTowns/itowns/commit/777bcc5)), closes [#111](https://github.com/iTowns/itowns/issues/111)
* Change behavior in TileMesh for picking position ([bc01712](https://github.com/iTowns/itowns/commit/bc01712)), closes [#111](https://github.com/iTowns/itowns/issues/111)
* Replace size by ellipsoid in most constructors. ([cac4e92](https://github.com/iTowns/itowns/commit/cac4e92))
* Update Three.js r77 to r79 ([c1774e3](https://github.com/iTowns/itowns/commit/c1774e3)), closes [#123](https://github.com/iTowns/itowns/issues/123)
* Correct typos ([a2089ca](https://github.com/iTowns/itowns/commit/a2089ca))
* Added testing exemples and demonstration link in readme file ([8e01290](https://github.com/iTowns/itowns/commit/8e01290))
* Fix layer opacity control bug ([7f56788](https://github.com/iTowns/itowns/commit/7f56788))
* Implement layers ordering using LayersConfiguration ([7f74dcf](https://github.com/iTowns/itowns/commit/7f74dcf))
* Add LayersConfiguration ([bc815f3](https://github.com/iTowns/itowns/commit/bc815f3))
* Use texture's alpha value ([379dd64](https://github.com/iTowns/itowns/commit/379dd64))
* Store visibility/opacity attributes directly in layer ([d5ffa66](https://github.com/iTowns/itowns/commit/d5ffa66))
* Limit command cancelation to refinement commands ([cb012b9](https://github.com/iTowns/itowns/commit/cb012b9))
* Reject canceled command promises ([03e721a](https://github.com/iTowns/itowns/commit/03e721a))
* Fix missing subdivision levels ([257e375](https://github.com/iTowns/itowns/commit/257e375))
* Limit TileProvider role to tile creation ([572dc04](https://github.com/iTowns/itowns/commit/572dc04))
* Revert TileMesh initial visibility change ([0fd707c](https://github.com/iTowns/itowns/commit/0fd707c))
* Transform TileProvider in a real provider (no special case) ([36dce2d](https://github.com/iTowns/itowns/commit/36dce2d))
* Refactor source layers and WMTS_Provider ([75a3eb5](https://github.com/iTowns/itowns/commit/75a3eb5))
* Remove dead code in WMTS_Provider ([f7ed9eb](https://github.com/iTowns/itowns/commit/f7ed9eb))
* Tiny Bug fix for camera rotation using Shift. ([41570d3](https://github.com/iTowns/itowns/commit/41570d3))
* Make sure to not keep stale files in gh-pages during auto-deploys ([7650d55](https://github.com/iTowns/itowns/commit/7650d55))
* Fix autodeploy.sh to not deploy on pull requests for master ([e0b4073](https://github.com/iTowns/itowns/commit/e0b4073)), closes [#152](https://github.com/iTowns/itowns/issues/152)
* Use whatwg-fetch instead of XmlHttpRequester ([f09497a](https://github.com/iTowns/itowns/commit/f09497a))
* Prevent creation of the same command multiple times ([57a970c](https://github.com/iTowns/itowns/commit/57a970c))
* Add an automatic deployment on gh-pages ([fb2ecf4](https://github.com/iTowns/itowns/commit/fb2ecf4))
* Document Buffer computation code ([3b6d685](https://github.com/iTowns/itowns/commit/3b6d685))
* Rework UV shader parameters ([503fe29](https://github.com/iTowns/itowns/commit/503fe29))
* Make sure children tiles are all ready when hiding a parent ([654bc94](https://github.com/iTowns/itowns/commit/654bc94))
* Prioritize recents commands ([22a91de](https://github.com/iTowns/itowns/commit/22a91de))
* Replace Quadtree's command priority function ([8f42421](https://github.com/iTowns/itowns/commit/8f42421))
* Allow custom command priority functions ([b039078](https://github.com/iTowns/itowns/commit/b039078))
* Move InterfaceCommander creation from Layer to Quadtree ([16d012a](https://github.com/iTowns/itowns/commit/16d012a))
* Rename Camera.SSE -> Camera.computeNodeSSE ([2171df5](https://github.com/iTowns/itowns/commit/2171df5))
* Fix one concurrency bug in PanoramicProvider wrt resource loading ([6ea78f2](https://github.com/iTowns/itowns/commit/6ea78f2))
* Refactor some nested promises (aka "callback pyramid of doom") ([280ed07](https://github.com/iTowns/itowns/commit/280ed07))
* Fix concurrency bug in ProjectiveTexturingMaterial.init() ([1b57c0f](https://github.com/iTowns/itowns/commit/1b57c0f))
* Fix suboptimal KMZ cache in KML_Provider ([275fcc1](https://github.com/iTowns/itowns/commit/275fcc1))
* Remove Require.js from LICENSE.md ([fe3842e](https://github.com/iTowns/itowns/commit/fe3842e))
* Replace when.js with native promises and a polyfill ([89213d1](https://github.com/iTowns/itowns/commit/89213d1))
* Contributing rules update : protected master ([5f67a91](https://github.com/iTowns/itowns/commit/5f67a91))
* Add earlyDropFunction attribute to Commands (#94) ([09bacb5](https://github.com/iTowns/itowns/commit/09bacb5)), closes [#94](https://github.com/iTowns/itowns/issues/94) [#82](https://github.com/iTowns/itowns/issues/82)
* Change call name function in API following correcting spell ([13d6fa3](https://github.com/iTowns/itowns/commit/13d6fa3))
* Enable wmtsc protocol support ([90cb864](https://github.com/iTowns/itowns/commit/90cb864))
* fix all warnings (#128) ([f69eafe](https://github.com/iTowns/itowns/commit/f69eafe)), closes [#128](https://github.com/iTowns/itowns/issues/128)
* fix error when no WEBGL_debug_renderer_info ([b2dd261](https://github.com/iTowns/itowns/commit/b2dd261))
* added note in doc for debian users with npm 1.4 ([2843df8](https://github.com/iTowns/itowns/commit/2843df8))
* return to Three r77 ([27ff3bd](https://github.com/iTowns/itowns/commit/27ff3bd))
* remove warning in WMTS_Provider ([318234c](https://github.com/iTowns/itowns/commit/318234c))
* change Three.js r77 to r78 ([8b58920](https://github.com/iTowns/itowns/commit/8b58920))
* WMTS_Provider : rename layersWMTS to layersData ([22d1b7c](https://github.com/iTowns/itowns/commit/22d1b7c))
* 'globe-built' correction ([6c2c362](https://github.com/iTowns/itowns/commit/6c2c362))
* #92 layer/provider to generic in tileProvider ([ad715da](https://github.com/iTowns/itowns/commit/ad715da)), closes [#92](https://github.com/iTowns/itowns/issues/92)
* #92 layer/provider to generic in tileProvider ([48f46dd](https://github.com/iTowns/itowns/commit/48f46dd)), closes [#92](https://github.com/iTowns/itowns/issues/92)
* #62 : getZoomLevel ([0518fe8](https://github.com/iTowns/itowns/commit/0518fe8)), closes [#62](https://github.com/iTowns/itowns/issues/62)
* #92 layer/provider to generic ([2fec97f](https://github.com/iTowns/itowns/commit/2fec97f)), closes [#92](https://github.com/iTowns/itowns/issues/92)
* #92 layer/provider to generic ([ec354d2](https://github.com/iTowns/itowns/commit/ec354d2)), closes [#92](https://github.com/iTowns/itowns/issues/92)
* Rework color layers parameters handling ([10ad30d](https://github.com/iTowns/itowns/commit/10ad30d))
* Fix typo in WMTS_Provider ([e33955e](https://github.com/iTowns/itowns/commit/e33955e))
* fix error build in fragment shader GlobeFS.glsl ([143a05e](https://github.com/iTowns/itowns/commit/143a05e))
* Fix visibility testing typo ([3bca5e7](https://github.com/iTowns/itowns/commit/3bca5e7))
* Transform WMTS_Provider to use Promise ([9bd3db2](https://github.com/iTowns/itowns/commit/9bd3db2))
* factorised SSE process into several functions ([a277e6d](https://github.com/iTowns/itowns/commit/a277e6d))
* Use Promise for Commands ([43cc4c0](https://github.com/iTowns/itowns/commit/43cc4c0))
* #62 fix some bugs in removeImageryLayer and moveLayerToIndex ([d5bc1a6](https://github.com/iTowns/itowns/commit/d5bc1a6))
* Max Texture in shader for Angle #86 ([25d7a96](https://github.com/iTowns/itowns/commit/25d7a96)), closes [#86](https://github.com/iTowns/itowns/issues/86)
* maxTexturesUnits -1 is back. But 15 in shader ([8af0f2d](https://github.com/iTowns/itowns/commit/8af0f2d))
* #62 fix error in TileMesh.changeSequenceLayers ([ec8e6f3](https://github.com/iTowns/itowns/commit/ec8e6f3))
* Moved visibility and (most) tile creation operations from Quadtree to NodeProcess. ([21d5e9c](https://github.com/iTowns/itowns/commit/21d5e9c))
* Added setVisibility and setDisplayed to Node class. ([8b3b2cc](https://github.com/iTowns/itowns/commit/8b3b2cc))
* DOC :new diagram Layer3D ([5e7fcd5](https://github.com/iTowns/itowns/commit/5e7fcd5))
* maxTextureUnits now used as is. (no decrementation) ([bfd57c2](https://github.com/iTowns/itowns/commit/bfd57c2))
* #62 : add new API function moveLayerToIndex,moveLayerUp,moveLayerDown ([33b7600](https://github.com/iTowns/itowns/commit/33b7600)), closes [#62](https://github.com/iTowns/itowns/issues/62)
* #86 fix error glsl build : 'array index out of range' and 'memory exhausted' ([2d7ff20](https://github.com/iTowns/itowns/commit/2d7ff20))
* #62 : start new API function moveLayerToIndex ([150fca1](https://github.com/iTowns/itowns/commit/150fca1)), closes [#62](https://github.com/iTowns/itowns/issues/62)
* #62 : fix bug pit texture in function removeImageryLayer ([58b358b](https://github.com/iTowns/itowns/commit/58b358b))
* change key for KML ([ba53a1b](https://github.com/iTowns/itowns/commit/ba53a1b))
* fix problem in gui (remove layer) in index.html ([295edd6](https://github.com/iTowns/itowns/commit/295edd6))
* clean up index.html ([099e6e2](https://github.com/iTowns/itowns/commit/099e6e2))
* #62 : fix problem id in api functions : setLayerOpacity and setLayerVibility ([f893177](https://github.com/iTowns/itowns/commit/f893177))
* add openStreetMap example in index.html ([f6f9ee5](https://github.com/iTowns/itowns/commit/f6f9ee5))
* #62 : start new API function removeImageryLayer ([a918230](https://github.com/iTowns/itowns/commit/a918230)), closes [#62](https://github.com/iTowns/itowns/issues/62)
* #62 : start new API function; #86 : add limit samplers for mesa driver; ([fb2b1dc](https://github.com/iTowns/itowns/commit/fb2b1dc)), closes [#62](https://github.com/iTowns/itowns/issues/62) [#86](https://github.com/iTowns/itowns/issues/86)
* chunked shader ([f3d3964](https://github.com/iTowns/itowns/commit/f3d3964))
* chunked shader ([cae6c70](https://github.com/iTowns/itowns/commit/cae6c70))
* #86 chunked glsl : add max textures unit ([ffbf93f](https://github.com/iTowns/itowns/commit/ffbf93f)), closes [#86](https://github.com/iTowns/itowns/issues/86)
* Fix tile.material null access ([d508715](https://github.com/iTowns/itowns/commit/d508715))
* Fix style issue, add comment ([d44565c](https://github.com/iTowns/itowns/commit/d44565c))
* Refactor visibility/display algorithm ([7e896b2](https://github.com/iTowns/itowns/commit/7e896b2))
* Remove visible property direct access ([024980c](https://github.com/iTowns/itowns/commit/024980c))
* remove setCenter in index ([1674606](https://github.com/iTowns/itowns/commit/1674606))
* #62 #76 : changed event's names (build -> globe-loaded ; loaded -> gloe-loaded) and events are listening on 'viewerDiv' instead of 'document' ([47daf3c](https://github.com/iTowns/itowns/commit/47daf3c)), closes [#62](https://github.com/iTowns/itowns/issues/62) [#76](https://github.com/iTowns/itowns/issues/76)
* no more cloud texture loaded before generation ([2bfc835](https://github.com/iTowns/itowns/commit/2bfc835))
* #74 bug tileMatrixSetLimits ([98a7ec9](https://github.com/iTowns/itowns/commit/98a7ec9)), closes [#74](https://github.com/iTowns/itowns/issues/74)
* #78 partial correction, new replace color in layeredMaterial ([bbdd5ba](https://github.com/iTowns/itowns/commit/bbdd5ba)), closes [#78](https://github.com/iTowns/itowns/issues/78)
* debug param color layer ([f6314eb](https://github.com/iTowns/itowns/commit/f6314eb))
* change param atmosphere ([1e1d368](https://github.com/iTowns/itowns/commit/1e1d368))
* debug slot texture ([08dcc68](https://github.com/iTowns/itowns/commit/08dcc68))
* move delta slot texture ([849b651](https://github.com/iTowns/itowns/commit/849b651))
* Check TileMesh validity before assigning textures ([6391465](https://github.com/iTowns/itowns/commit/6391465)), closes [#79](https://github.com/iTowns/itowns/issues/79)
* index ([9d8caa8](https://github.com/iTowns/itowns/commit/9d8caa8))
* Reverse textures slot ([7f34825](https://github.com/iTowns/itowns/commit/7f34825))
* disable atmosphere ([f47b9b6](https://github.com/iTowns/itowns/commit/f47b9b6))
* clean ([c439098](https://github.com/iTowns/itowns/commit/c439098))
* remove warning ([77a4bc1](https://github.com/iTowns/itowns/commit/77a4bc1))
* remove warning ([04dcce1](https://github.com/iTowns/itowns/commit/04dcce1))
* Clean up ([e306fc2](https://github.com/iTowns/itowns/commit/e306fc2))
* Clean ([f401888](https://github.com/iTowns/itowns/commit/f401888))
* error UglifyJs ([6fed4fb](https://github.com/iTowns/itowns/commit/6fed4fb))
* Error UglifyJs ([17cc477](https://github.com/iTowns/itowns/commit/17cc477))
* clean shader ([e1e974e](https://github.com/iTowns/itowns/commit/e1e974e))
* #62 #76 : adding CallBack function + addEventListener + setCenter()/getTilt()/getHeading()/getCameraOrientation()/computeDistance() debug ([5853a90](https://github.com/iTowns/itowns/commit/5853a90)), closes [#62](https://github.com/iTowns/itowns/issues/62) [#76](https://github.com/iTowns/itowns/issues/76)
* gui index ([c0a0a9c](https://github.com/iTowns/itowns/commit/c0a0a9c))
* dynamic gui add layer ([de9491f](https://github.com/iTowns/itowns/commit/de9491f))
* Factorization layer color ([5205ba0](https://github.com/iTowns/itowns/commit/5205ba0))
* factorization layer color ([a783833](https://github.com/iTowns/itowns/commit/a783833))
* add projection ([9e2b0c1](https://github.com/iTowns/itowns/commit/9e2b0c1))
* wmts custom url ([ce734c8](https://github.com/iTowns/itowns/commit/ce734c8))
* custom url WMTS ([9ba7c9d](https://github.com/iTowns/itowns/commit/9ba7c9d))
* add GUI layer ([d5fc55d](https://github.com/iTowns/itowns/commit/d5fc55d))
* #62 progression addImageryLayer in shader glsl ([d7229c6](https://github.com/iTowns/itowns/commit/d7229c6)), closes [#62](https://github.com/iTowns/itowns/issues/62)
* draw multi-layer ([874c0d0](https://github.com/iTowns/itowns/commit/874c0d0))
* remove warning empty slot ([85d8ae7](https://github.com/iTowns/itowns/commit/85d8ae7))
* debug meshNode & layer visibilty ([561b9c0](https://github.com/iTowns/itowns/commit/561b9c0))
* THREE v77 ([e94941a](https://github.com/iTowns/itowns/commit/e94941a))
* THREE v77 ([82334f8](https://github.com/iTowns/itowns/commit/82334f8))
* load color layer ([081ab2d](https://github.com/iTowns/itowns/commit/081ab2d))
* load layer ([9da4fdf](https://github.com/iTowns/itowns/commit/9da4fdf))
* load layer color ([1460480](https://github.com/iTowns/itowns/commit/1460480))
* color layer loading ([6a413e2](https://github.com/iTowns/itowns/commit/6a413e2))
* Pre layers generic (reverted from commit a8096634865a9f241c6cac0239fb4891742e4d25) ([b62beb3](https://github.com/iTowns/itowns/commit/b62beb3))
* Pre layers generic ([a809663](https://github.com/iTowns/itowns/commit/a809663))
* #62 : setCenter() debug ([0d8795b](https://github.com/iTowns/itowns/commit/0d8795b)), closes [#62](https://github.com/iTowns/itowns/issues/62)
* add 3 layers ([185a9ec](https://github.com/iTowns/itowns/commit/185a9ec))
* prepare layer generic ([eb99b5a](https://github.com/iTowns/itowns/commit/eb99b5a))
* clean layer material ([e06865b](https://github.com/iTowns/itowns/commit/e06865b))
* clean layer material ([f4043a7](https://github.com/iTowns/itowns/commit/f4043a7))
* clean up ([f280023](https://github.com/iTowns/itowns/commit/f280023))
* debug setFromDegreeGeo ([c2785ca](https://github.com/iTowns/itowns/commit/c2785ca))
* Debug simple shader and kml ([1abf229](https://github.com/iTowns/itowns/commit/1abf229))
* debug 2 layers colors ([1c83ce0](https://github.com/iTowns/itowns/commit/1c83ce0))
* provier wmts to generic ([96b284d](https://github.com/iTowns/itowns/commit/96b284d))
* Opacity Layer ([1003ea8](https://github.com/iTowns/itowns/commit/1003ea8))
* Add layer color ([f3cc369](https://github.com/iTowns/itowns/commit/f3cc369))
* add 2 layers ([b94dbce](https://github.com/iTowns/itowns/commit/b94dbce))
* #62 : getMinZoomLevel(id), getMaxZoomLevel(id) ([ab59449](https://github.com/iTowns/itowns/commit/ab59449)), closes [#62](https://github.com/iTowns/itowns/issues/62)
* Add layer in index ([1250cce](https://github.com/iTowns/itowns/commit/1250cce))
* Debug GLSL ([23eaeff](https://github.com/iTowns/itowns/commit/23eaeff))
* Trying to debug GLSL error on chrome ([4919942](https://github.com/iTowns/itowns/commit/4919942))
* #62 : setCenterAdvanced(position) -- Without level, range and scale; API Documentation ([814c663](https://github.com/iTowns/itowns/commit/814c663)), closes [#62](https://github.com/iTowns/itowns/issues/62)
* #62 : setCenter(position) ([50a2521](https://github.com/iTowns/itowns/commit/50a2521)), closes [#62](https://github.com/iTowns/itowns/issues/62)
* sub layer with provider WMTS ([36ad41a](https://github.com/iTowns/itowns/commit/36ad41a))
* remove layerId by id (in class parent Node) ([a32d585](https://github.com/iTowns/itowns/commit/a32d585))
* layer services ([a59537f](https://github.com/iTowns/itowns/commit/a59537f))
* clean up ([cbaa40a](https://github.com/iTowns/itowns/commit/cbaa40a))
* #62 : HTML container "viewerDiv", changed rays computeDistance() input mode ([a43a609](https://github.com/iTowns/itowns/commit/a43a609)), closes [#62](https://github.com/iTowns/itowns/issues/62)
* prepare to generic layer ([e22c328](https://github.com/iTowns/itowns/commit/e22c328))
* #62 : HTML container "viewerDiv", changed ray's computeDistance() input mode ([362a266](https://github.com/iTowns/itowns/commit/362a266)), closes [#62](https://github.com/iTowns/itowns/issues/62)
* step to rgba elevation ([f3cfe91](https://github.com/iTowns/itowns/commit/f3cfe91))
* find error in rgba texture elevation ([17094ae](https://github.com/iTowns/itowns/commit/17094ae))
* space ([227dbfe](https://github.com/iTowns/itowns/commit/227dbfe))
* debug IE ([ab97685](https://github.com/iTowns/itowns/commit/ab97685))
* RGBA function ([59a53ff](https://github.com/iTowns/itowns/commit/59a53ff))
* Try promise ([81cc6ba](https://github.com/iTowns/itowns/commit/81cc6ba))
* error def RGBA_ELEVATION ([de9a164](https://github.com/iTowns/itowns/commit/de9a164))
* start RGBA uint8 elevation ([fe5b1b4](https://github.com/iTowns/itowns/commit/fe5b1b4))
* try to support IE ([88502bc](https://github.com/iTowns/itowns/commit/88502bc))
* replace pickposition texture float by RGBA uint8 ([db83f7f](https://github.com/iTowns/itowns/commit/db83f7f))
* fixed bad recursive call ([e4195fb](https://github.com/iTowns/itowns/commit/e4195fb))
* add getPickingPositionFromDepth ([32e10a8](https://github.com/iTowns/itowns/commit/32e10a8))
* Try to debug size ([b432573](https://github.com/iTowns/itowns/commit/b432573))
* debug clean process ([af4b5a5](https://github.com/iTowns/itowns/commit/af4b5a5))
* clean up ([e88169a](https://github.com/iTowns/itowns/commit/e88169a))
* move addImageryLayer and addElevationLayer ([fd221ba](https://github.com/iTowns/itowns/commit/fd221ba))
* first clean tileMesh ([bcb9002](https://github.com/iTowns/itowns/commit/bcb9002))
* test depth rendering ([dbb279f](https://github.com/iTowns/itowns/commit/dbb279f))
* max min zoom limits WMTS ([a6c0cfd](https://github.com/iTowns/itowns/commit/a6c0cfd))
* options limits WMTS ([4045e7a](https://github.com/iTowns/itowns/commit/4045e7a))
* default process globe ([3c0a3b3](https://github.com/iTowns/itowns/commit/3c0a3b3))
* remove warning ([49044ea](https://github.com/iTowns/itowns/commit/49044ea))
* Trim trailing spaces (and enforce it) ([10d6f8c](https://github.com/iTowns/itowns/commit/10d6f8c))
* prepare params WMTS ([83e3e03](https://github.com/iTowns/itowns/commit/83e3e03))
* Node processes are now linked to a layer ([594ab2c](https://github.com/iTowns/itowns/commit/594ab2c))
* factorization provider ([baff9e8](https://github.com/iTowns/itowns/commit/baff9e8))
* intersection ray ellipsoid ([78a5152](https://github.com/iTowns/itowns/commit/78a5152))
* #62 : API setCameraOrientation() ([8dd8db7](https://github.com/iTowns/itowns/commit/8dd8db7)), closes [#62](https://github.com/iTowns/itowns/issues/62)
* prepare to unified url wmts layer ([3768bd5](https://github.com/iTowns/itowns/commit/3768bd5))
* prepare add provider ([432c1b2](https://github.com/iTowns/itowns/commit/432c1b2))
* prepare add layer api ([f07f520](https://github.com/iTowns/itowns/commit/f07f520))
* Singleton previous pattern ([6f687be](https://github.com/iTowns/itowns/commit/6f687be))
* debug singleton c3dEngine and controls ([dc7ac85](https://github.com/iTowns/itowns/commit/dc7ac85))
* unstable commit, prepare to new singleton ([5a6d734](https://github.com/iTowns/itowns/commit/5a6d734))
* add file TileProvider ([ccd6cde](https://github.com/iTowns/itowns/commit/ccd6cde))
* remove init scene, rename tileGlobeProvider to TileProvider ([64f5a0b](https://github.com/iTowns/itowns/commit/64f5a0b))
* singleton manager command error ([488908f](https://github.com/iTowns/itowns/commit/488908f))
* remove init manager singleton ([5b719e7](https://github.com/iTowns/itowns/commit/5b719e7))
* THREE JS 0.74 to 0.75 ([47f7964](https://github.com/iTowns/itowns/commit/47f7964))
* clean Scene ([486211c](https://github.com/iTowns/itowns/commit/486211c))
* process mobile layer ([dc4f2b4](https://github.com/iTowns/itowns/commit/dc4f2b4))
* debug load image pano ([cc903d9](https://github.com/iTowns/itowns/commit/cc903d9))
* back ([8e20081](https://github.com/iTowns/itowns/commit/8e20081))
* modify select mode ([f450784](https://github.com/iTowns/itowns/commit/f450784))
* test animation satellite ([2803755](https://github.com/iTowns/itowns/commit/2803755))
* #62 : API setHeading(), resetTilt(), resetHeading() and computeDistance() ([61b5522](https://github.com/iTowns/itowns/commit/61b5522)), closes [#62](https://github.com/iTowns/itowns/issues/62)
* debug CVML ([3caba67](https://github.com/iTowns/itowns/commit/3caba67))
* remove warning priority queue ([14f5275](https://github.com/iTowns/itowns/commit/14f5275))
* rename ([a88b35b](https://github.com/iTowns/itowns/commit/a88b35b))
* #62 : API setTilt() ([0589db4](https://github.com/iTowns/itowns/commit/0589db4)), closes [#62](https://github.com/iTowns/itowns/issues/62)
* remove warning ([9db8c48](https://github.com/iTowns/itowns/commit/9db8c48))
* remove test in wmts provider ([669f0bd](https://github.com/iTowns/itowns/commit/669f0bd))
* Cleaning warnings ([757071d](https://github.com/iTowns/itowns/commit/757071d))
* #62 : API getTilt(), getHeading() and getRange() ([5cd861f](https://github.com/iTowns/itowns/commit/5cd861f)), closes [#62](https://github.com/iTowns/itowns/issues/62)
* simplification check loading ([8e9ad7b](https://github.com/iTowns/itowns/commit/8e9ad7b))
* clean up load texture ([cdea155](https://github.com/iTowns/itowns/commit/cdea155))
* back dirty changing wmts provider for debug ([555931b](https://github.com/iTowns/itowns/commit/555931b))
* #62 : API pickPosition ([2dc2a9e](https://github.com/iTowns/itowns/commit/2dc2a9e)), closes [#62](https://github.com/iTowns/itowns/issues/62)
* remove absolute center tile mesh ([b25f691](https://github.com/iTowns/itowns/commit/b25f691))
* optimization frustumCullingOBB ([6e137eb](https://github.com/iTowns/itowns/commit/6e137eb))
* debugged first pivot ([732de8e](https://github.com/iTowns/itowns/commit/732de8e))
* update uniform ok. Beta camera move ([1bb0c58](https://github.com/iTowns/itowns/commit/1bb0c58))
* debug SSE ([6546a11](https://github.com/iTowns/itowns/commit/6546a11))
* #62 : API doc ([daf5f12](https://github.com/iTowns/itowns/commit/daf5f12)), closes [#62](https://github.com/iTowns/itowns/issues/62)
* clean unneeded module import ([9a25fbc](https://github.com/iTowns/itowns/commit/9a25fbc))
* cleaner structure for mobilemapping ([23231cc](https://github.com/iTowns/itowns/commit/23231cc))
* few debugs. temp modif in browsetree ([ce60bb9](https://github.com/iTowns/itowns/commit/ce60bb9))
* nothing ([e9739a8](https://github.com/iTowns/itowns/commit/e9739a8))
* roof back ([f636fea](https://github.com/iTowns/itowns/commit/f636fea))
* debug sse process ([d751b11](https://github.com/iTowns/itowns/commit/d751b11))
* Factorization process node ([652b654](https://github.com/iTowns/itowns/commit/652b654))
* RTC ok ([7d281fc](https://github.com/iTowns/itowns/commit/7d281fc))
* rtc slow ([0cc296b](https://github.com/iTowns/itowns/commit/0cc296b))
* referential look good ([3b5f8a4](https://github.com/iTowns/itowns/commit/3b5f8a4))
* closer ([1629266](https://github.com/iTowns/itowns/commit/1629266))
* closer ([4b3f845](https://github.com/iTowns/itowns/commit/4b3f845))
* #62 : API : getCameraOrientation ([42336fd](https://github.com/iTowns/itowns/commit/42336fd)), closes [#62](https://github.com/iTowns/itowns/issues/62)
* debug atmosphere ([1787786](https://github.com/iTowns/itowns/commit/1787786))
* API : getCenter First Step (wrong altitude) ([69f955c](https://github.com/iTowns/itowns/commit/69f955c))
* move camera debug ([33127e7](https://github.com/iTowns/itowns/commit/33127e7))
* KML option ([7b8d69e](https://github.com/iTowns/itowns/commit/7b8d69e))
* Debug debug mode ([fca81e7](https://github.com/iTowns/itowns/commit/fca81e7))
* remove RENDER WARNING in chrome 49.0 ([032ab3c](https://github.com/iTowns/itowns/commit/032ab3c))
* simplification browseTree ([c6db108](https://github.com/iTowns/itowns/commit/c6db108))
* Simplification browse tree and debug UpSubLayer ([9db221e](https://github.com/iTowns/itowns/commit/9db221e))
* Factorization browseTree ([064c022](https://github.com/iTowns/itowns/commit/064c022))
* deeper ([14a8abe](https://github.com/iTowns/itowns/commit/14a8abe))
* Add new file ([2c16cdb](https://github.com/iTowns/itowns/commit/2c16cdb))
* Builder Tile and generic tile ([2993e2d](https://github.com/iTowns/itowns/commit/2993e2d))
* remain image to read with calibration parameters ... ([cb59842](https://github.com/iTowns/itowns/commit/cb59842))
* to generic tile ([c1562bc](https://github.com/iTowns/itowns/commit/c1562bc))
* (forgot atmoin uniform too) ([6dcadd6](https://github.com/iTowns/itowns/commit/6dcadd6))
* Deleted not really useful uniforms for atmo ([d877556](https://github.com/iTowns/itowns/commit/d877556))
* added WFS (not finished) ([e3e2f49](https://github.com/iTowns/itowns/commit/e3e2f49))
* remove double function in scene ([e88622d](https://github.com/iTowns/itowns/commit/e88622d))
* debug resize  #17 ([c73e0c5](https://github.com/iTowns/itowns/commit/c73e0c5)), closes [#17](https://github.com/iTowns/itowns/issues/17)
* resize picking texture ([303d3f0](https://github.com/iTowns/itowns/commit/303d3f0))
* globeMaterial to LayeredMaterial ([8f09b50](https://github.com/iTowns/itowns/commit/8f09b50))
* globe material array pitscale ([9ecf271](https://github.com/iTowns/itowns/commit/9ecf271))
* bool to int ([cdf0af3](https://github.com/iTowns/itowns/commit/cdf0af3))
* simplification globe material ([abdda9e](https://github.com/iTowns/itowns/commit/abdda9e))
* debug #59 ([1a8802e](https://github.com/iTowns/itowns/commit/1a8802e)), closes [#59](https://github.com/iTowns/itowns/issues/59)
* debug globe material ([3fa9d47](https://github.com/iTowns/itowns/commit/3fa9d47))
* clean up ([4d35965](https://github.com/iTowns/itowns/commit/4d35965))
* bug : unnecessary texture float  ([a44637b](https://github.com/iTowns/itowns/commit/a44637b))
* clean up ([1438ddf](https://github.com/iTowns/itowns/commit/1438ddf))
* clean up c3Engine ([b0bdda6](https://github.com/iTowns/itowns/commit/b0bdda6))
* optimization picking ([3cc9a1f](https://github.com/iTowns/itowns/commit/3cc9a1f))
* remove error in promise ([687a0e2](https://github.com/iTowns/itowns/commit/687a0e2))
* debug error then ([0a85ce3](https://github.com/iTowns/itowns/commit/0a85ce3))
* buffer test ([1834429](https://github.com/iTowns/itowns/commit/1834429))
* rename buffer ([3b18ed3](https://github.com/iTowns/itowns/commit/3b18ed3))
* reverse ([c1b3f8f](https://github.com/iTowns/itowns/commit/c1b3f8f))
* optimization compute geometry debug ([2b92947](https://github.com/iTowns/itowns/commit/2b92947))
* optimization compute geometry ([2c905e7](https://github.com/iTowns/itowns/commit/2c905e7))
* cache buffer geometry ([30d0d12](https://github.com/iTowns/itowns/commit/30d0d12))
* cache buffer geometry ([670cc99](https://github.com/iTowns/itowns/commit/670cc99))
* manage 16 task ([70c3af9](https://github.com/iTowns/itowns/commit/70c3af9))
* better computation OBB and bouding sphere  ([6523e1f](https://github.com/iTowns/itowns/commit/6523e1f))
* Better inti OBBHelper ([2c2ee74](https://github.com/iTowns/itowns/commit/2c2ee74))
* factorization OBBHelper ([1334676](https://github.com/iTowns/itowns/commit/1334676))
* remove test in quadtree ([cf2d6ca](https://github.com/iTowns/itowns/commit/cf2d6ca))
* Clean Up  ([34ce152](https://github.com/iTowns/itowns/commit/34ce152))
* speed ([ff6177d](https://github.com/iTowns/itowns/commit/ff6177d))
* remove updatematrixworld ([9fef2c1](https://github.com/iTowns/itowns/commit/9fef2c1))
* js-priority-queue 0.1.5 ([b389725](https://github.com/iTowns/itowns/commit/b389725))
* get ancestor layer ([9ce127d](https://github.com/iTowns/itowns/commit/9ce127d))
* clean up globe material ([effed38](https://github.com/iTowns/itowns/commit/effed38))
* partial loading tile : in progress ([c0b30aa](https://github.com/iTowns/itowns/commit/c0b30aa))
* tile add current level layer ([943d320](https://github.com/iTowns/itowns/commit/943d320))
* tile add current level layer ([2516868](https://github.com/iTowns/itowns/commit/2516868))
* factorisation ellipsoid mesh ([539cf19](https://github.com/iTowns/itowns/commit/539cf19))
* loading layers MNT partial ([a2df042](https://github.com/iTowns/itowns/commit/a2df042))
* orbit speed to rework ([530d93c](https://github.com/iTowns/itowns/commit/530d93c))
* loading layers MNT partial ([99c4bde](https://github.com/iTowns/itowns/commit/99c4bde))
* loading layers ([1057310](https://github.com/iTowns/itowns/commit/1057310))
* better use of ALL Promise ([7e2ad38](https://github.com/iTowns/itowns/commit/7e2ad38))
* manage command  ([29ad54f](https://github.com/iTowns/itowns/commit/29ad54f))
* change browse tree ([4d096ab](https://github.com/iTowns/itowns/commit/4d096ab))
* Orbit Option ([23dc4a6](https://github.com/iTowns/itowns/commit/23dc4a6))
* more weighted ground and clouds. animation option ([45117e4](https://github.com/iTowns/itowns/commit/45117e4))
* depthWrite false for sky dome ([9c70a99](https://github.com/iTowns/itowns/commit/9c70a99))
* update auto ground sky dome. ([9b17fa3](https://github.com/iTowns/itowns/commit/9b17fa3))
* Lighter gpu, added shader for close to ground ([3404b17](https://github.com/iTowns/itowns/commit/3404b17))
* seems alright ([161f75c](https://github.com/iTowns/itowns/commit/161f75c))
* better cache image ([c8a04e4](https://github.com/iTowns/itowns/commit/c8a04e4))
* debugging ([77b84a9](https://github.com/iTowns/itowns/commit/77b84a9))
* debug cache ([3b61d5d](https://github.com/iTowns/itowns/commit/3b61d5d))
* support glInspector ([1627878](https://github.com/iTowns/itowns/commit/1627878))
* support glinspector ([57858c8](https://github.com/iTowns/itowns/commit/57858c8))
* debug clean ([d3c09a4](https://github.com/iTowns/itowns/commit/d3c09a4))
* remove warning ([e6a1ac6](https://github.com/iTowns/itowns/commit/e6a1ac6))
* remove warning ([41a620a](https://github.com/iTowns/itowns/commit/41a620a))
* remove warning ([fbb16be](https://github.com/iTowns/itowns/commit/fbb16be))
* reactivate helper ([6537336](https://github.com/iTowns/itowns/commit/6537336))
* cleaned ([3d913c4](https://github.com/iTowns/itowns/commit/3d913c4))
* factorization ([d93fc19](https://github.com/iTowns/itowns/commit/d93fc19))
* Menu option to swtich ([bdf7ccb](https://github.com/iTowns/itowns/commit/bdf7ccb))
* looking good ([70a9194](https://github.com/iTowns/itowns/commit/70a9194))
* factorization ([33be2fe](https://github.com/iTowns/itowns/commit/33be2fe))
* ellipsoid mesh matrixAutoUpdate = false ([98603f5](https://github.com/iTowns/itowns/commit/98603f5))
* n ([0e8e71a](https://github.com/iTowns/itowns/commit/0e8e71a))
* Clean in no activity ([9fedd71](https://github.com/iTowns/itowns/commit/9fedd71))
* Atmosphre scattering ([8ac120c](https://github.com/iTowns/itowns/commit/8ac120c))
* load layer ortho in level disabled ([d180e5a](https://github.com/iTowns/itowns/commit/d180e5a))
* debug elevation ([56576a8](https://github.com/iTowns/itowns/commit/56576a8))
* load layer ortho in level ([0c1447d](https://github.com/iTowns/itowns/commit/0c1447d))
* Faster Elevation injection and add alti weight SSE dotprod ([663634c](https://github.com/iTowns/itowns/commit/663634c))
* load specific level wmts subscale ([ce6d924](https://github.com/iTowns/itowns/commit/ce6d924))
* local copy ([6a21dd0](https://github.com/iTowns/itowns/commit/6a21dd0))
* Optimized SSE function ([9044af7](https://github.com/iTowns/itowns/commit/9044af7))
* load specific level wmts ([2239f56](https://github.com/iTowns/itowns/commit/2239f56))
* More readable shader with function for sampling ([6962139](https://github.com/iTowns/itowns/commit/6962139))
* nothing ([346ddb2](https://github.com/iTowns/itowns/commit/346ddb2))
* fix multiple provider: added a unique id for each layer ([85bef07](https://github.com/iTowns/itowns/commit/85bef07))
* projection parent wmts ([1146438](https://github.com/iTowns/itowns/commit/1146438))
* projection parent wmts ([14cb64d](https://github.com/iTowns/itowns/commit/14cb64d))
* resfresh tree ([7255a2f](https://github.com/iTowns/itowns/commit/7255a2f))
* clean up ([45f7014](https://github.com/iTowns/itowns/commit/45f7014))
* .editorconfig: trailing whitespace can have special meaning in Markdown ([94a9f17](https://github.com/iTowns/itowns/commit/94a9f17))
* Enable Travis-CI, default to "npm run lint && npm run build" for now. ([a786e6d](https://github.com/iTowns/itowns/commit/a786e6d))
* Fix "npm run lint": glob was interpreted by the shell rather than eslint ([801172c](https://github.com/iTowns/itowns/commit/801172c))
* Merge ([04689d8](https://github.com/iTowns/itowns/commit/04689d8))
* clean up ([ba6af36](https://github.com/iTowns/itowns/commit/ba6af36))
* remove line ([f2313a6](https://github.com/iTowns/itowns/commit/f2313a6))
* remove warning glsl ([a33907a](https://github.com/iTowns/itowns/commit/a33907a))
* remove warning glsl ([abf7517](https://github.com/iTowns/itowns/commit/abf7517))
* loop sync ([7930fc4](https://github.com/iTowns/itowns/commit/7930fc4))
* remove all deferred ([b1a32cf](https://github.com/iTowns/itowns/commit/b1a32cf))
* remove pottree ([aa9f8c1](https://github.com/iTowns/itowns/commit/aa9f8c1))
* remove some deferred  ([a2f350a](https://github.com/iTowns/itowns/commit/a2f350a))
* Minor simplification in GlobeFS.glsl ([61e3d35](https://github.com/iTowns/itowns/commit/61e3d35))
* fixed not being able to pick quadtrees' tiles ([4352f17](https://github.com/iTowns/itowns/commit/4352f17))
* nothing serious ([3ee3582](https://github.com/iTowns/itowns/commit/3ee3582))
* debug RTC (problem with world position) ([4267557](https://github.com/iTowns/itowns/commit/4267557))
* Fix GlobeFS.glsl for compatibility with GLSL 1.30 ([caf07b8](https://github.com/iTowns/itowns/commit/caf07b8)), closes [#48](https://github.com/iTowns/itowns/issues/48)
* clean  ([594f78f](https://github.com/iTowns/itowns/commit/594f78f))
* Sampler array glsl use const ([2fa4735](https://github.com/iTowns/itowns/commit/2fa4735))
* "Cleaned" Change of provider WMTS ([a4d709e](https://github.com/iTowns/itowns/commit/a4d709e))
* Added change layer. ([39b7433](https://github.com/iTowns/itowns/commit/39b7433))
* Modified commandManager in order to allow multiple providers. Temporarily modifed quadtree to fix design issue. Introduced bug: cannot pan camera ([88f3ab3](https://github.com/iTowns/itowns/commit/88f3ab3))
* remove autorefresh ([0703b9c](https://github.com/iTowns/itowns/commit/0703b9c))
* rendering loop ([821b85b](https://github.com/iTowns/itowns/commit/821b85b))
* rendering when necessary ([1fab1d6](https://github.com/iTowns/itowns/commit/1fab1d6))
* test with potree ([80644e5](https://github.com/iTowns/itowns/commit/80644e5))
* provider architecture ([542b9f9](https://github.com/iTowns/itowns/commit/542b9f9))
* clean up ([2d34fa8](https://github.com/iTowns/itowns/commit/2d34fa8))
* add point cloud data ([0161394](https://github.com/iTowns/itowns/commit/0161394))
* capture ([1c128be](https://github.com/iTowns/itowns/commit/1c128be))
* Factorization browser ([d10af51](https://github.com/iTowns/itowns/commit/d10af51))
* debug RTC ([5fc7e52](https://github.com/iTowns/itowns/commit/5fc7e52))
* log off ([7b04041](https://github.com/iTowns/itowns/commit/7b04041))
* example Layer WGS84 Z up ([0c3d87f](https://github.com/iTowns/itowns/commit/0c3d87f))
* clean up browser ([c13fad0](https://github.com/iTowns/itowns/commit/c13fad0))
* (didn't see the push) ([acd5392](https://github.com/iTowns/itowns/commit/acd5392))
* corrected Backslash for all OS ([e07f9ef](https://github.com/iTowns/itowns/commit/e07f9ef))
* Fix Webpack loader path matching on Windows ([a901f7e](https://github.com/iTowns/itowns/commit/a901f7e))
* gitignore ([09bb5cb](https://github.com/iTowns/itowns/commit/09bb5cb))
* Enforce ESLint in Webpack; switch a few rules down to warnings. ([5362252](https://github.com/iTowns/itowns/commit/5362252))
* Add ESLint with basic configuration ([c1ba62f](https://github.com/iTowns/itowns/commit/c1ba62f))
* THREE r74 ([122cdbd](https://github.com/iTowns/itowns/commit/122cdbd))
* Re-JS-Beautify ([ba778dc](https://github.com/iTowns/itowns/commit/ba778dc))
* Setup end-of-line normalization ([8e13145](https://github.com/iTowns/itowns/commit/8e13145))
* Replace local dat.gui with version from CDNJS ([41bab3b](https://github.com/iTowns/itowns/commit/41bab3b))
* debug cloud colateral damage  ([f978888](https://github.com/iTowns/itowns/commit/f978888))
* Run JS Beautify over all of src/ (except the jsfont) and add .editorconfig ([d073928](https://github.com/iTowns/itowns/commit/d073928))
* factorization ([919d7f1](https://github.com/iTowns/itowns/commit/919d7f1))
* clean up ([7a9b673](https://github.com/iTowns/itowns/commit/7a9b673))
* remove helper add scene ([d04b503](https://github.com/iTowns/itowns/commit/d04b503))
* simplification loop request / refresh ([d8a43a3](https://github.com/iTowns/itowns/commit/d8a43a3))
* Build using webpack, getting dependencies with NPM ([de5291c](https://github.com/iTowns/itowns/commit/de5291c))
* no more superVISIBILITY ;) ([79769a2](https://github.com/iTowns/itowns/commit/79769a2))
* debug error in globe controls ([f5682ce](https://github.com/iTowns/itowns/commit/f5682ce))
* added GUI for tests and to force developing API style ([a63e1f0](https://github.com/iTowns/itowns/commit/a63e1f0))
* clean up ([be92f24](https://github.com/iTowns/itowns/commit/be92f24))
* delete unused files ([ead82f9](https://github.com/iTowns/itowns/commit/ead82f9))
* clean ([495ad2d](https://github.com/iTowns/itowns/commit/495ad2d))
* Removed folder nbproject from repository ([7dabef4](https://github.com/iTowns/itowns/commit/7dabef4))
* Start inerty control ([254c4f7](https://github.com/iTowns/itowns/commit/254c4f7))
* adding .gitignore ([e7a2106](https://github.com/iTowns/itowns/commit/e7a2106))
* Correction clouds Not activated by default ([227e2d0](https://github.com/iTowns/itowns/commit/227e2d0))
* Cloud Noise ([5a1b5e7](https://github.com/iTowns/itowns/commit/5a1b5e7))
* clean up ([9d0cfd4](https://github.com/iTowns/itowns/commit/9d0cfd4))
* clean up ([e470a12](https://github.com/iTowns/itowns/commit/e470a12))
* Debug and simplify rotate on it self ([9d22afc](https://github.com/iTowns/itowns/commit/9d22afc))
* clean globe control ([8f080ab](https://github.com/iTowns/itowns/commit/8f080ab))
* clouds ok. WMS more standard too ([bfc53a8](https://github.com/iTowns/itowns/commit/bfc53a8))
* debug globe control ([9fdd86b](https://github.com/iTowns/itowns/commit/9fdd86b))
* debug globe control ([8165e53](https://github.com/iTowns/itowns/commit/8165e53))
* Clouds test ([2daef0e](https://github.com/iTowns/itowns/commit/2daef0e))
* debug globe control ([b16b4c1](https://github.com/iTowns/itowns/commit/b16b4c1))
* debug globe control ([be3a553](https://github.com/iTowns/itowns/commit/be3a553))
* debug globe control ([1996518](https://github.com/iTowns/itowns/commit/1996518))
* debug globe control ([9cf35e3](https://github.com/iTowns/itowns/commit/9cf35e3))
* Update CONTRIBUTING.md ([b8d402b](https://github.com/iTowns/itowns/commit/b8d402b))
* debug globe control ([2d21d06](https://github.com/iTowns/itowns/commit/2d21d06))
* globe control ([ad1eb58](https://github.com/iTowns/itowns/commit/ad1eb58))
* globe control ([8a29c20](https://github.com/iTowns/itowns/commit/8a29c20))
* debug KML antoine ([2960be9](https://github.com/iTowns/itowns/commit/2960be9))
* debug KML antoine ([b19808c](https://github.com/iTowns/itowns/commit/b19808c))
* Added Quick fix for Cam To turn around itself (normal to globe) (SHIFT KEY) ([ea9ec5c](https://github.com/iTowns/itowns/commit/ea9ec5c))
* clean up KML ([d7c6801](https://github.com/iTowns/itowns/commit/d7c6801))
* merge with KML optimisation ([4426e6f](https://github.com/iTowns/itowns/commit/4426e6f))
* remove Classes for Immersive as there is a special branch for it ([85bbd8d](https://github.com/iTowns/itowns/commit/85bbd8d))
* optimisation kml ([0854b1c](https://github.com/iTowns/itowns/commit/0854b1c))
* kml shader ([ef4ff8d](https://github.com/iTowns/itowns/commit/ef4ff8d))
* kml RTC ([1172871](https://github.com/iTowns/itowns/commit/1172871))
* kml load in quadtree ([188f2cb](https://github.com/iTowns/itowns/commit/188f2cb))
* fix atmosphere when you flatten the earth ([59d9483](https://github.com/iTowns/itowns/commit/59d9483))
* Documentation guide not ready yet ([37066e5](https://github.com/iTowns/itowns/commit/37066e5))
* Coding guide draft ([230712e](https://github.com/iTowns/itowns/commit/230712e))
* Add advices for commiters ([97db923](https://github.com/iTowns/itowns/commit/97db923))
* Add a draft document for testing ([7f660f7](https://github.com/iTowns/itowns/commit/7f660f7))
* Add licences for third-party included components ([9dc7639](https://github.com/iTowns/itowns/commit/9dc7639))
* Fix typos, improve README with contributors & more ([883a0ab](https://github.com/iTowns/itowns/commit/883a0ab))
* Typo and small Fixes to CONTRIBUTING doc ([2bf3646](https://github.com/iTowns/itowns/commit/2bf3646))
* debug position KML ([f7e1f00](https://github.com/iTowns/itowns/commit/f7e1f00))
* Starting integration of immersive data ([d4fc03f](https://github.com/iTowns/itowns/commit/d4fc03f))
* Add License infos ([fd03d04](https://github.com/iTowns/itowns/commit/fd03d04))
* CHANGES.md for ChangeLog ([746263b](https://github.com/iTowns/itowns/commit/746263b))
* Add contributing guide and contributor's list ([ed8b63e](https://github.com/iTowns/itowns/commit/ed8b63e))
* Add draft for building instructions ([4991058](https://github.com/iTowns/itowns/commit/4991058))
* Ignore temp files in git ([dfd7dad](https://github.com/iTowns/itowns/commit/dfd7dad))
* control ([6ae5bdc](https://github.com/iTowns/itowns/commit/6ae5bdc))
* debug position kml ([d2760d9](https://github.com/iTowns/itowns/commit/d2760d9))
* debug start globe back and blue ([ddcba40](https://github.com/iTowns/itowns/commit/ddcba40))
* Forgotten spelling fixes ([fa85b22](https://github.com/iTowns/itowns/commit/fa85b22))
* Corrected spelling mistakes and renamed files accordingly ([fec7a47](https://github.com/iTowns/itowns/commit/fec7a47))
* function param kmz : longitude and latitude ([1aa8dd4](https://github.com/iTowns/itowns/commit/1aa8dd4))
* Remobe bug from bad merge ([8f948f4](https://github.com/iTowns/itowns/commit/8f948f4))
* control globe : vector up and rotate axis target ([123b023](https://github.com/iTowns/itowns/commit/123b023))
* this will be V2 :-) ([3b1d433](https://github.com/iTowns/itowns/commit/3b1d433))
* function param kmz : longitude and latitude ([313184a](https://github.com/iTowns/itowns/commit/313184a))
* back good v ([1965150](https://github.com/iTowns/itowns/commit/1965150))
* debug "Debug Mode" ([5ca23c9](https://github.com/iTowns/itowns/commit/5ca23c9))
* debug start loading ([38dd2da](https://github.com/iTowns/itowns/commit/38dd2da))
* clean up ([583707e](https://github.com/iTowns/itowns/commit/583707e))
* good orientation kml ([1c44fa7](https://github.com/iTowns/itowns/commit/1c44fa7))
* forgot to delete one log ([c8e1ebb](https://github.com/iTowns/itowns/commit/c8e1ebb))
* debug axe ellipsoid ([7ae7f63](https://github.com/iTowns/itowns/commit/7ae7f63))
* No more Bug of flashing wrong tiles (uv) !! ([6573501](https://github.com/iTowns/itowns/commit/6573501))
* debug axe ellipsoid ([003b542](https://github.com/iTowns/itowns/commit/003b542))
* remove click test in control ([055898d](https://github.com/iTowns/itowns/commit/055898d))
* first feature new globe control ([abe4719](https://github.com/iTowns/itowns/commit/abe4719))
* Few corrections ([0025f97](https://github.com/iTowns/itowns/commit/0025f97))
* prepare new control ([788f05a](https://github.com/iTowns/itowns/commit/788f05a))
* KML loader and collada loader ([bd34d3d](https://github.com/iTowns/itowns/commit/bd34d3d))
* debug mnt highres ([31c7180](https://github.com/iTowns/itowns/commit/31c7180))
* factorization ([5a7b948](https://github.com/iTowns/itowns/commit/5a7b948))
* clean up ([9f29640](https://github.com/iTowns/itowns/commit/9f29640))
* intersect sphere with ray | load texture ortho update needOrtho ([4da355e](https://github.com/iTowns/itowns/commit/4da355e))
* pick world position and select tile ([c8e25ac](https://github.com/iTowns/itowns/commit/c8e25ac))
* pick world position ([f981c3a](https://github.com/iTowns/itowns/commit/f981c3a))
* prepare render depth buffer ([bbc881b](https://github.com/iTowns/itowns/commit/bbc881b))
* debug clean tile ([e3bc62c](https://github.com/iTowns/itowns/commit/e3bc62c))
* debug with THREE 74dev ([33bee63](https://github.com/iTowns/itowns/commit/33bee63))
* dispose children ([77eedc4](https://github.com/iTowns/itowns/commit/77eedc4))
* clean tree ([b1ec2d2](https://github.com/iTowns/itowns/commit/b1ec2d2))
* improve loading texture ([c3fa901](https://github.com/iTowns/itowns/commit/c3fa901))
* debug mode ([1314588](https://github.com/iTowns/itowns/commit/1314588))
* debug mode ([ec3d2c9](https://github.com/iTowns/itowns/commit/ec3d2c9))
* debug mode ([fe58314](https://github.com/iTowns/itowns/commit/fe58314))
* helper ([58e6a63](https://github.com/iTowns/itowns/commit/58e6a63))
* best helper ([5a3ba8d](https://github.com/iTowns/itowns/commit/5a3ba8d))
* best helper  ([f80cc05](https://github.com/iTowns/itowns/commit/f80cc05))
* example 2 batiments ([467c659](https://github.com/iTowns/itowns/commit/467c659))
* example batiment ([654fd08](https://github.com/iTowns/itowns/commit/654fd08))
* material factorization ([cbdc208](https://github.com/iTowns/itowns/commit/cbdc208))
* load texture ([a41b23b](https://github.com/iTowns/itowns/commit/a41b23b))
* globeMaterial ([5569dce](https://github.com/iTowns/itowns/commit/5569dce))
* bounding sphere ([61738a2](https://github.com/iTowns/itowns/commit/61738a2))
* clean up manage helper bbox for tile ([c332274](https://github.com/iTowns/itowns/commit/c332274))
* manage helper bbox for tile ([3d213b4](https://github.com/iTowns/itowns/commit/3d213b4))
* screen space error tile ([6a3632e](https://github.com/iTowns/itowns/commit/6a3632e))
* cancel unnecessary request ([8c4542f](https://github.com/iTowns/itowns/commit/8c4542f))
* atmosphere ([8c062da](https://github.com/iTowns/itowns/commit/8c062da))
* clean up shader ([2f1a7b9](https://github.com/iTowns/itowns/commit/2f1a7b9))
* fog ([7adec13](https://github.com/iTowns/itowns/commit/7adec13))
* precision : debug relative to center ([83a5da6](https://github.com/iTowns/itowns/commit/83a5da6))
* precision ([578e042](https://github.com/iTowns/itowns/commit/578e042))
* globe controls ([dc7f833](https://github.com/iTowns/itowns/commit/dc7f833))
* clean up ([98377d2](https://github.com/iTowns/itowns/commit/98377d2))
* culling ([ee831d0](https://github.com/iTowns/itowns/commit/ee831d0))
* debug mode ([d977758](https://github.com/iTowns/itowns/commit/d977758))
* debug mode + switch RTC ([6344ad5](https://github.com/iTowns/itowns/commit/6344ad5))
* cache resssource ([048e5d9](https://github.com/iTowns/itowns/commit/048e5d9))
* debug skirt ([802971e](https://github.com/iTowns/itowns/commit/802971e))
* skirt ([d5d818a](https://github.com/iTowns/itowns/commit/d5d818a))
* progressive load  ([a019a25](https://github.com/iTowns/itowns/commit/a019a25))
* factorization ([a8500b0](https://github.com/iTowns/itowns/commit/a8500b0))
* clean up ([80689bb](https://github.com/iTowns/itowns/commit/80689bb))
* io driver xml ([576ecb6](https://github.com/iTowns/itowns/commit/576ecb6))
* io driver xml ([2bd7af1](https://github.com/iTowns/itowns/commit/2bd7af1))
* prepare garbage collector ([e5cfc28](https://github.com/iTowns/itowns/commit/e5cfc28))
* prepare dispose ([58a66cf](https://github.com/iTowns/itowns/commit/58a66cf))
* target ([5983525](https://github.com/iTowns/itowns/commit/5983525))
* debug resize window ([50909c1](https://github.com/iTowns/itowns/commit/50909c1))
* Clean up globe shader ([d948fd1](https://github.com/iTowns/itowns/commit/d948fd1))
* Clean up globe shader  ([eb9874e](https://github.com/iTowns/itowns/commit/eb9874e))
* clean up ([68c8b35](https://github.com/iTowns/itowns/commit/68c8b35))
* correct ([52e3e18](https://github.com/iTowns/itowns/commit/52e3e18))
* mmm ([f9f9a24](https://github.com/iTowns/itowns/commit/f9f9a24))
* relative to center  ([44fe408](https://github.com/iTowns/itowns/commit/44fe408))
* clean and free ([5b0c380](https://github.com/iTowns/itowns/commit/5b0c380))
* highres ortho with MNT ([580b689](https://github.com/iTowns/itowns/commit/580b689))
* debug shader ortho ([f7eba08](https://github.com/iTowns/itowns/commit/f7eba08))
* debug precision shader ortho ([061a0f1](https://github.com/iTowns/itowns/commit/061a0f1))
* level up ortho  ([bf4ec8c](https://github.com/iTowns/itowns/commit/bf4ec8c))
* caps ([2fba496](https://github.com/iTowns/itowns/commit/2fba496))
* nothing ([1d3f3c1](https://github.com/iTowns/itowns/commit/1d3f3c1))
* position tools ([c80f768](https://github.com/iTowns/itowns/commit/c80f768))
* position tools ([a7e22b3](https://github.com/iTowns/itowns/commit/a7e22b3))
* debug update rule ([558fd51](https://github.com/iTowns/itowns/commit/558fd51))
* debug update rule ([8662ae2](https://github.com/iTowns/itowns/commit/8662ae2))
* scale globe ([4858573](https://github.com/iTowns/itowns/commit/4858573))
* new init for : nodeProcess and provider ([dccac98](https://github.com/iTowns/itowns/commit/dccac98))
* orientaion relative ([2f5911f](https://github.com/iTowns/itowns/commit/2f5911f))
* OBB relatice to center ([29ecfb4](https://github.com/iTowns/itowns/commit/29ecfb4))
* Debug camera helper ([55f7702](https://github.com/iTowns/itowns/commit/55f7702))
* relative to center ([a0e339b](https://github.com/iTowns/itowns/commit/a0e339b))
* key problem + relative to center ([bdaf6d5](https://github.com/iTowns/itowns/commit/bdaf6d5))
* key problem ([58fedcf](https://github.com/iTowns/itowns/commit/58fedcf))
* high res elevation ([80fdea7](https://github.com/iTowns/itowns/commit/80fdea7))
* add layer ([0314d92](https://github.com/iTowns/itowns/commit/0314d92))
* add layer ([0b9ad51](https://github.com/iTowns/itowns/commit/0b9ad51))
* Documentation ([1a95885](https://github.com/iTowns/itowns/commit/1a95885))
* try hight res elevation ([9698651](https://github.com/iTowns/itowns/commit/9698651))
* windows build and remove atmosphere for IE ([4316fad](https://github.com/iTowns/itowns/commit/4316fad))
* what? ([ef6a72a](https://github.com/iTowns/itowns/commit/ef6a72a))
* nothing ([793f034](https://github.com/iTowns/itowns/commit/793f034))
* Hypotenuse SSE ([c3fee28](https://github.com/iTowns/itowns/commit/c3fee28))
* remove warning log buffer in fragment shader ([85be121](https://github.com/iTowns/itowns/commit/85be121))
* correct log buffer  ([8a1a36c](https://github.com/iTowns/itowns/commit/8a1a36c))
* atmosphere + optimisation tile mesh ([7382ead](https://github.com/iTowns/itowns/commit/7382ead))
* new loader image ([0adf338](https://github.com/iTowns/itowns/commit/0adf338))
* temporary update ([ccbce4f](https://github.com/iTowns/itowns/commit/ccbce4f))
* queue manager ([40e1b8f](https://github.com/iTowns/itowns/commit/40e1b8f))
* Stack Build Works now ([032885b](https://github.com/iTowns/itowns/commit/032885b))
* queue manager  ([9871a09](https://github.com/iTowns/itowns/commit/9871a09))
* max min altitude tile terrain ([2d3ecea](https://github.com/iTowns/itowns/commit/2d3ecea))
* clean ([108e5f8](https://github.com/iTowns/itowns/commit/108e5f8))
* require bug ([afb0d3b](https://github.com/iTowns/itowns/commit/afb0d3b))
* queue manager V0.1 ([e67431f](https://github.com/iTowns/itowns/commit/e67431f))
* queue manager V0.1 ([be0b0cd](https://github.com/iTowns/itowns/commit/be0b0cd))
* tile globe provider ([9d7caa9](https://github.com/iTowns/itowns/commit/9d7caa9))
* queue command v0.0 ([d93097b](https://github.com/iTowns/itowns/commit/d93097b))
* Build.sh for minify and normal itowns build ([04d0264](https://github.com/iTowns/itowns/commit/04d0264))
* prepare queue command ([1aeff0d](https://github.com/iTowns/itowns/commit/1aeff0d))
* queue  ([53e77d0](https://github.com/iTowns/itowns/commit/53e77d0))
* texture elevation when needed ([92a83d9](https://github.com/iTowns/itowns/commit/92a83d9))
* remove backface culling + texture bil  ([af62849](https://github.com/iTowns/itowns/commit/af62849))
* SSE + World in meter ([008d930](https://github.com/iTowns/itowns/commit/008d930))
* update scene ([f3a5427](https://github.com/iTowns/itowns/commit/f3a5427))
* update scene ([5ac102b](https://github.com/iTowns/itowns/commit/5ac102b))
* resize renderer ([2f2e522](https://github.com/iTowns/itowns/commit/2f2e522))
* request managing : count request ([b48dfd0](https://github.com/iTowns/itowns/commit/b48dfd0))
* AtmosphereIN merge in Atmosphere ([b249e43](https://github.com/iTowns/itowns/commit/b249e43))
* new instance Scene and engine3D ([05184e7](https://github.com/iTowns/itowns/commit/05184e7))
* update texture ([6431bd0](https://github.com/iTowns/itowns/commit/6431bd0))
* Code test and new atmosphere beta ([6689b60](https://github.com/iTowns/itowns/commit/6689b60))
* Control speed ([880ed90](https://github.com/iTowns/itowns/commit/880ed90))
* Atmosphere ([7650e29](https://github.com/iTowns/itowns/commit/7650e29))
* Glow ([bdff521](https://github.com/iTowns/itowns/commit/bdff521))
* alpha float texture for elevation ([dee4722](https://github.com/iTowns/itowns/commit/dee4722))
* Prepare queue ([3b69eec](https://github.com/iTowns/itowns/commit/3b69eec))
* reel elevation ([c092230](https://github.com/iTowns/itowns/commit/c092230))
* horizonCulling clean ([111307d](https://github.com/iTowns/itowns/commit/111307d))
* horizonCulling debug tools ([f91f8ca](https://github.com/iTowns/itowns/commit/f91f8ca))
* horizonCulling ([b6b6ff3](https://github.com/iTowns/itowns/commit/b6b6ff3))
* SSE ([9a0d95f](https://github.com/iTowns/itowns/commit/9a0d95f))
* SSE  ([86c8d6f](https://github.com/iTowns/itowns/commit/86c8d6f))
* SSE  ([289e011](https://github.com/iTowns/itowns/commit/289e011))
* Shader Image Ortho + Elevation ([204343a](https://github.com/iTowns/itowns/commit/204343a))
* Shader Image Ortho + Elevation ([bf47f6c](https://github.com/iTowns/itowns/commit/bf47f6c))
* Shader Image Ortho + Elevation ([17bc672](https://github.com/iTowns/itowns/commit/17bc672))
* Shader Image Ortho + Elevation ([67520bf](https://github.com/iTowns/itowns/commit/67520bf))
* Shader  Ortho ([609990f](https://github.com/iTowns/itowns/commit/609990f))
* Load ortho ([0f8e2f4](https://github.com/iTowns/itowns/commit/0f8e2f4))
* prepare load ortho ([0f5dc37](https://github.com/iTowns/itowns/commit/0f5dc37))
* cache managers ([10835ee](https://github.com/iTowns/itowns/commit/10835ee))
* globe shader nb texture ([c70ebc3](https://github.com/iTowns/itowns/commit/c70ebc3))
* globe shader ([d8d5dae](https://github.com/iTowns/itowns/commit/d8d5dae))
* projection wmts tools ([9ce11da](https://github.com/iTowns/itowns/commit/9ce11da))
* clean code ([c5b68be](https://github.com/iTowns/itowns/commit/c5b68be))
* Node Process ([010fcb8](https://github.com/iTowns/itowns/commit/010fcb8))
* Oriented bounding box Helper ([747db98](https://github.com/iTowns/itowns/commit/747db98))
* Oriented bounding box Helper ([f960eba](https://github.com/iTowns/itowns/commit/f960eba))
* Frustum Oriented bounding box ([0015c2a](https://github.com/iTowns/itowns/commit/0015c2a))
* Frustum Oriented bounding box ([a3cb845](https://github.com/iTowns/itowns/commit/a3cb845))
* Frustum Oriented bounding box ([1b1d9df](https://github.com/iTowns/itowns/commit/1b1d9df))
* Oriented bounding box ellispoid tile ([0269490](https://github.com/iTowns/itowns/commit/0269490))
* Oriented bounding box ellispoid tile ([4e5e63a](https://github.com/iTowns/itowns/commit/4e5e63a))
* Diagramme ([81de4d1](https://github.com/iTowns/itowns/commit/81de4d1))
* bounding box THREE tile mesh ([e5a9e91](https://github.com/iTowns/itowns/commit/e5a9e91))
* debug viewport ([a9ea97d](https://github.com/iTowns/itowns/commit/a9ea97d))
* frustum culling ([527ed87](https://github.com/iTowns/itowns/commit/527ed87))
* backFaceCulling ([b3fc0a6](https://github.com/iTowns/itowns/commit/b3fc0a6))
* browse tree  ([65bf3cb](https://github.com/iTowns/itowns/commit/65bf3cb))
* wait process ([61d15ba](https://github.com/iTowns/itowns/commit/61d15ba))
* ellipsoid tile ([b1f6409](https://github.com/iTowns/itowns/commit/b1f6409))
* subivise quadtree ([015993d](https://github.com/iTowns/itowns/commit/015993d))
* subivise quadtree ([e1fe702](https://github.com/iTowns/itowns/commit/e1fe702))
* Quad ([7b155dd](https://github.com/iTowns/itowns/commit/7b155dd))
* projection WMTS  ([8c13eaf](https://github.com/iTowns/itowns/commit/8c13eaf))
* Coord Carto and WMTS ([cb22707](https://github.com/iTowns/itowns/commit/cb22707))
* Singleton command manager ([62033cb](https://github.com/iTowns/itowns/commit/62033cb))
* Singleton command manager ([ae2df35](https://github.com/iTowns/itowns/commit/ae2df35))
* Quadtree Elevation ([1eb51a9](https://github.com/iTowns/itowns/commit/1eb51a9))
* Quadtree ([e3267eb](https://github.com/iTowns/itowns/commit/e3267eb))
* readme detaille ([e73a6a6](https://github.com/iTowns/itowns/commit/e73a6a6))
* add tile mesh ([2291eb8](https://github.com/iTowns/itowns/commit/2291eb8))
* delete Map ([fe00037](https://github.com/iTowns/itowns/commit/fe00037))
* Add cube in scene ([094d14f](https://github.com/iTowns/itowns/commit/094d14f))
* io driver bil format ([8bf2774](https://github.com/iTowns/itowns/commit/8bf2774))
* Changed Build Directory. ([8abe894](https://github.com/iTowns/itowns/commit/8abe894))
* Debug Layer bad copy on merge AND Build ([9b6e12f](https://github.com/iTowns/itowns/commit/9b6e12f))
* Merge remote-tracking branch 'origin/master' ([79cf07e](https://github.com/iTowns/itowns/commit/79cf07e))
* started creation of build and examples ([fedff13](https://github.com/iTowns/itowns/commit/fedff13))
* Architecture principal ([b506c96](https://github.com/iTowns/itowns/commit/b506c96))
* Api Globe : create scene Hello Globe ([639435c](https://github.com/iTowns/itowns/commit/639435c))
* require NodeMesh ([c1fc9f9](https://github.com/iTowns/itowns/commit/c1fc9f9))
* require Node ([00d55fc](https://github.com/iTowns/itowns/commit/00d55fc))
* require ([d22d699](https://github.com/iTowns/itowns/commit/d22d699))
* Add stucture class ([a6f4fc0](https://github.com/iTowns/itowns/commit/a6f4fc0))
* Images ([288e122](https://github.com/iTowns/itowns/commit/288e122))
* Diagramme  ([d8eeff7](https://github.com/iTowns/itowns/commit/d8eeff7))
* Diagrammes ([4d8e73d](https://github.com/iTowns/itowns/commit/4d8e73d))
* again test ([48e68f8](https://github.com/iTowns/itowns/commit/48e68f8))
* package scene ([10ae66d](https://github.com/iTowns/itowns/commit/10ae66d))
* last test ([b3d1809](https://github.com/iTowns/itowns/commit/b3d1809))
* change for tes ([6410b0e](https://github.com/iTowns/itowns/commit/6410b0e))
* image package scene ([d4a9952](https://github.com/iTowns/itowns/commit/d4a9952))
* image package ([8c25c7a](https://github.com/iTowns/itowns/commit/8c25c7a))
* test ([4f5ed9a](https://github.com/iTowns/itowns/commit/4f5ed9a))
* Update README.md ([e25c155](https://github.com/iTowns/itowns/commit/e25c155))
* Update README.md ([b282ebe](https://github.com/iTowns/itowns/commit/b282ebe))
* seconde push ([da50720](https://github.com/iTowns/itowns/commit/da50720))
* first push ([07c552c](https://github.com/iTowns/itowns/commit/07c552c))
* Create README.md ([7cbc11e](https://github.com/iTowns/itowns/commit/7cbc11e))
* Add __DEBUG__ global variable ([fa1dd09](https://github.com/iTowns/itowns/commit/fa1dd09))
* add 3d-tiles geometry layer support in Debug.js ([96ac31e](https://github.com/iTowns/itowns/commit/96ac31e))
* add a first example of debug chart ([403958b](https://github.com/iTowns/itowns/commit/403958b))
* add camera-target-updated event ([d27171a](https://github.com/iTowns/itowns/commit/d27171a))
* add comments in webpack configs ([57ea803](https://github.com/iTowns/itowns/commit/57ea803))
* add conversion from EPSG:4978 to EPSG:4326 ([0430c82](https://github.com/iTowns/itowns/commit/0430c82))
* Add dat.gui as devDependencies ([663671d](https://github.com/iTowns/itowns/commit/663671d))
* Add first debug UI: showOutline ([63de859](https://github.com/iTowns/itowns/commit/63de859))
* Add missing contributors ([0835707](https://github.com/iTowns/itowns/commit/0835707))
* add package-lock.json to follow npm5 recommandation ([44bf017](https://github.com/iTowns/itowns/commit/44bf017))
* add three.js memory info graph ([b96108d](https://github.com/iTowns/itowns/commit/b96108d))
* add various options args to Fetcher methods ([15d0a9a](https://github.com/iTowns/itowns/commit/15d0a9a))
* add wireframe debug display ([5989f12](https://github.com/iTowns/itowns/commit/5989f12))
* allow build script to deploy to itowns.github.io ([f01c03c](https://github.com/iTowns/itowns/commit/f01c03c))
* basic and dull reformating of example files ([55b98f3](https://github.com/iTowns/itowns/commit/55b98f3))
* clean OBB/OBBHelper code ([c5b8b29](https://github.com/iTowns/itowns/commit/c5b8b29))
* correct network options for all examples and for TMS_Provider ([8cdd930](https://github.com/iTowns/itowns/commit/8cdd930))
* correct type when cleaning ssh key ([8e28cf4](https://github.com/iTowns/itowns/commit/8e28cf4))
* correctly mock fetch behaviour ([b38e27f](https://github.com/iTowns/itowns/commit/b38e27f))
* Create demos page in example ([2e97b4e](https://github.com/iTowns/itowns/commit/2e97b4e))
* deduplicate dependencies between itowns.js and debug.js ([949a599](https://github.com/iTowns/itowns/commit/949a599))
* delete unused file ([0a6860e](https://github.com/iTowns/itowns/commit/0a6860e))
* don't give to mocha arrow functions ([21f70f9](https://github.com/iTowns/itowns/commit/21f70f9))
* embed GLTFLoader to fix our ./lib folder ([7caf383](https://github.com/iTowns/itowns/commit/7caf383))
* enable guard-for-in eslint rule ([1248b52](https://github.com/iTowns/itowns/commit/1248b52))
* enable import/no-mutable-exports rule ([1cd8766](https://github.com/iTowns/itowns/commit/1cd8766))
* enable import/no-named-as-default-member linter rule ([b705724](https://github.com/iTowns/itowns/commit/b705724))
* enable import/prefer-default-export ([209d60f](https://github.com/iTowns/itowns/commit/209d60f))
* enable linebreak-style rule ([9dad440](https://github.com/iTowns/itowns/commit/9dad440))
* examples/globe.html ([244723f](https://github.com/iTowns/itowns/commit/244723f))
* expose Coordinates object in camera-target-updated event ([e8f187f](https://github.com/iTowns/itowns/commit/e8f187f))
* increase timeout for long test ([1fc4fb1](https://github.com/iTowns/itowns/commit/1fc4fb1))
* make the implicit Scene crs configurable ([2308a8a](https://github.com/iTowns/itowns/commit/2308a8a))
* Move proj4 to dependencies, needed at runtime ([df58d7f](https://github.com/iTowns/itowns/commit/df58d7f))
* point 3dtiles to accessible file on the internet ([4c3cc24](https://github.com/iTowns/itowns/commit/4c3cc24))
* really give pull right to autodeploy.sh ([075f1cd](https://github.com/iTowns/itowns/commit/075f1cd))
* refacto Main.js to use simpler syntax ([b888131](https://github.com/iTowns/itowns/commit/b888131))
* reformat webpack configs according to eslint rules ([edc7bad](https://github.com/iTowns/itowns/commit/edc7bad))
* refresh the scene after adding a layer ([7c308de](https://github.com/iTowns/itowns/commit/7c308de))
* remove out-of-date doc folder ([1a30b4d](https://github.com/iTowns/itowns/commit/1a30b4d))
* remove outdated comment ([e2ec2d1](https://github.com/iTowns/itowns/commit/e2ec2d1))
* remove unnecessary clone of Vector3 ([5df23fe](https://github.com/iTowns/itowns/commit/5df23fe))
* remove unused custom-event dependencies ([a91492b](https://github.com/iTowns/itowns/commit/a91492b))
* remove unused video file ([9598011](https://github.com/iTowns/itowns/commit/9598011))
* remove webpack module aliases ([39727e8](https://github.com/iTowns/itowns/commit/39727e8))
* slightly amend README for the release ([f708520](https://github.com/iTowns/itowns/commit/f708520))
* update link to new repo name ([2a711d7](https://github.com/iTowns/itowns/commit/2a711d7))
* Use babel to inline glsl file using webpack loader ([e9e35ee](https://github.com/iTowns/itowns/commit/e9e35ee))
* use webpack v2 ([66cf42e](https://github.com/iTowns/itowns/commit/66cf42e))
* various eslint fixes ([602eaa9](https://github.com/iTowns/itowns/commit/602eaa9))
* wait for layers being added before trying to add them to gui ([0d20e1e](https://github.com/iTowns/itowns/commit/0d20e1e))



<a name="2.40.0"></a>
# [2.40.0](https://github.com/iTowns/itowns/compare/v2.38.2...v2.40.0) (2023-07-28)


### Features

* **3dtiles:** add classification for rendering pointscloud ([b924cd7](https://github.com/iTowns/itowns/commit/b924cd7))
* **3DTiles:** add style API + C3DTFeature ([864268a](https://github.com/iTowns/itowns/commit/864268a))
* **3dtiles:** add support for 3d tiles from cesium ion server ([e9793a3](https://github.com/iTowns/itowns/commit/e9793a3))
* **3DTiles:** add C3DTILES_LAYER_EVENTS.ON_TILE_REQUESTED ([ec837c7](https://github.com/iTowns/itowns/commit/ec837c7))
* **Coordinates:** Add a setCrs method ([606b6b8](https://github.com/iTowns/itowns/commit/606b6b8))
* **elevationLayers:** Add config.clampValues for clamping values of the elevation dataset ([1985078](https://github.com/iTowns/itowns/commit/1985078))
* **instancing:** use instancing for large number of 3d objects ([619a611](https://github.com/iTowns/itowns/commit/619a611))
* **LabelLayer:** add option to clamp labels to terrain. ([f46ca97](https://github.com/iTowns/itowns/commit/f46ca97))
* **Parser:** detect if original source have elevation data. ([17aaa8b](https://github.com/iTowns/itowns/commit/17aaa8b))
* **picking:** Add distance and point position to returned object by points picking ([97a5e6a](https://github.com/iTowns/itowns/commit/97a5e6a))
* **planarcontrols:** add enabled attribute ([f13a060](https://github.com/iTowns/itowns/commit/f13a060))
* **Style:** add icon.color and icon.opacity ([4fd5dc4](https://github.com/iTowns/itowns/commit/4fd5dc4))
* **typescript:** Add devDeps on three's definitions ([2fbbcc3](https://github.com/iTowns/itowns/commit/2fbbcc3))
* **typescript:** Add tsconfig.json configuration ([3c8c5f5](https://github.com/iTowns/itowns/commit/3c8c5f5))
* **typescript:** Add typescript dependency ([71a2370](https://github.com/iTowns/itowns/commit/71a2370))
* **view:** allow to pass an array of layers for picking ([9b6d59f](https://github.com/iTowns/itowns/commit/9b6d59f))
* **Widget:** add C3DTilesStyle widget ([7862bc1](https://github.com/iTowns/itowns/commit/7862bc1))
* **WMTS:** Support vendor specific parameters ([cff042c](https://github.com/iTowns/itowns/commit/cff042c))
* **XbilParser:** gestion nodata in elevation layer (elevation set to 0) ([20075b8](https://github.com/iTowns/itowns/commit/20075b8))


### Bug Fixes

* **3dTiles:** addEventListener onTileContentLoaded constructor ([6f9a9d2](https://github.com/iTowns/itowns/commit/6f9a9d2))
* **3dtiles:** fix batchtable reading ([b245301](https://github.com/iTowns/itowns/commit/b245301))
* **3dtiles:** improve 3D Tiles cache cleaning ([284be24](https://github.com/iTowns/itowns/commit/284be24))
* **3DTiles:** tileId == 0 can update style ([11582c9](https://github.com/iTowns/itowns/commit/11582c9))
* **controls:** keyboard events are now on the domElement on the view instead of window ([d5c80f4](https://github.com/iTowns/itowns/commit/d5c80f4))
* **CRS:** more robust parameter tests ([a2e0f5c](https://github.com/iTowns/itowns/commit/a2e0f5c))
* **Debug:** fix 3dTiles bbox visibility ([cd8d106](https://github.com/iTowns/itowns/commit/cd8d106))
* **example:** change config file linked with the clampValues config ([2a4e911](https://github.com/iTowns/itowns/commit/2a4e911))
* **example:** invert order of the ElevationLayer addition when using 2 ([c6800c9](https://github.com/iTowns/itowns/commit/c6800c9))
* **examples:** Fix  cesium ion token ([7f86d26](https://github.com/iTowns/itowns/commit/7f86d26))
* **examples:** Replace Lyon's deprecated MNT sources ([7490590](https://github.com/iTowns/itowns/commit/7490590))
* **examples:** Replace Lyon's deprecated Ortho2009 sources ([8dbb3d6](https://github.com/iTowns/itowns/commit/8dbb3d6))
* **examples:** Update Lyon bus source options ([0881b2d](https://github.com/iTowns/itowns/commit/0881b2d))
* **Feature2Texture:** prevent empty style ([ab5713a](https://github.com/iTowns/itowns/commit/ab5713a))
* **GeoJsonParser:** fix firstCoordinates when empty ([e54f352](https://github.com/iTowns/itowns/commit/e54f352))
* **GlobeLayer, PlanarLayer:** fix too much tiles subdivision due to wrong param name ([c726f25](https://github.com/iTowns/itowns/commit/c726f25))
* **Label:** catch no data elevation. ([e1e3b1d](https://github.com/iTowns/itowns/commit/e1e3b1d))
* **ObjectRemovalHelper:** linked objects are not removed. ([05a0768](https://github.com/iTowns/itowns/commit/05a0768))
* **Parser:** detect if original source have elevation data with multi-features. ([9d509da](https://github.com/iTowns/itowns/commit/9d509da))
* **Source:** Validate crs in Source constructor ([195bef3](https://github.com/iTowns/itowns/commit/195bef3))
* **typescript:** Add annotation to unblock typechecking ([25619f3](https://github.com/iTowns/itowns/commit/25619f3))
* **view:** improve resource disposal by removing textures and allow to remove cache ([2497d00](https://github.com/iTowns/itowns/commit/2497d00))
* **view:** improve view disposal by removing resize listener ([6f4ec34](https://github.com/iTowns/itowns/commit/6f4ec34))


### Performance Improvements

* **LabelLayer:** add automatic label filtering to reduce rendering calls. ([e7dde10](https://github.com/iTowns/itowns/commit/e7dde10))


### Examples

* **3dtiles:** add an example to display OSM buildings from cesium ion server ([9e9acb0](https://github.com/iTowns/itowns/commit/9e9acb0))
* **3dtiles:** rename some 3D tiles examples ([e032bf2](https://github.com/iTowns/itowns/commit/e032bf2))
* **3dtiles:** update 3d tiles dataset on 3dtiles_25d example to a textured one ([15b438c](https://github.com/iTowns/itowns/commit/15b438c))
* **Collada:** clean and update ([08dbd3d](https://github.com/iTowns/itowns/commit/08dbd3d))
* **potree_25d_map:** declare map projection code ([604b6ac](https://github.com/iTowns/itowns/commit/604b6ac))
* **SourceFileGeoJson:** geojson raster file -> add new example for planarView ([2d6abcd](https://github.com/iTowns/itowns/commit/2d6abcd))
* **SourceFileKML:** add new kml raster file from official source ([58734ee](https://github.com/iTowns/itowns/commit/58734ee))


### Code Refactoring

* **c3DEngine:** deleting the unused method getUniqueThreejsLayer. ([9664006](https://github.com/iTowns/itowns/commit/9664006))
* **Camera:** remove camera argument from CameraRig ([2af65b7](https://github.com/iTowns/itowns/commit/2af65b7))
* **example:** update with new gestion of Style ([955722c](https://github.com/iTowns/itowns/commit/955722c))
* **Extent:** move calculation of Extent intersection to static Extent.intersectsExtent(ExtentA,ExtentB) ([4ca93a9](https://github.com/iTowns/itowns/commit/4ca93a9))
* **FeatureGeometryLayer:** cleanup -> remove extra line break ([4cef6ba](https://github.com/iTowns/itowns/commit/4cef6ba))
* **FeatureToolTip:** update for official kml and geojson flux ([6e2a98c](https://github.com/iTowns/itowns/commit/6e2a98c))
* **GlobeControls:** remove three layer for helpers. ([a1a8391](https://github.com/iTowns/itowns/commit/a1a8391))
* **GlobeLayer:** pass in static the method horizonCulling. ([18af800](https://github.com/iTowns/itowns/commit/18af800))
* **GlobeView:** move sun light, from tileLayer to main scene. ([68b78f0](https://github.com/iTowns/itowns/commit/68b78f0))
* **LabeLayer:** change label node culling mechanism. ([b833744](https://github.com/iTowns/itowns/commit/b833744))
* **LabelLayer:** apply architecture node and simplify process. ([aff7964](https://github.com/iTowns/itowns/commit/aff7964))
* **Label:** optimize elevation update. ([7492c8e](https://github.com/iTowns/itowns/commit/7492c8e))
* **Layer:** instanciate new Style at Layer instead of at examples ([d26f29e](https://github.com/iTowns/itowns/commit/d26f29e))
* **LayerUpdateState:** add hasFinished method. ([3767b0a](https://github.com/iTowns/itowns/commit/3767b0a))
* **OBB:** remove OBB from node's children. ([0440bb6](https://github.com/iTowns/itowns/commit/0440bb6))
* **pickFeaturesAt:** avoid picking twice the same featureGeometry ([d5e5f7e](https://github.com/iTowns/itowns/commit/d5e5f7e))
* **RasterTile:** emit event when raster elevation changed. ([ea52ee1](https://github.com/iTowns/itowns/commit/ea52ee1))
* **Style:** instantiate canvas when no document ([b20916f](https://github.com/iTowns/itowns/commit/b20916f))
* **test:** add a npm run test in develpment mode -> run test-dev ([9ca1d5f](https://github.com/iTowns/itowns/commit/9ca1d5f))
* **test:** commenting failing test in test/unit/CameraUtils ([b39edf8](https://github.com/iTowns/itowns/commit/b39edf8))
* **test:** handling assert fail messages in tests ([1131abe](https://github.com/iTowns/itowns/commit/1131abe))
* **test:** handling fail messages in test with promise ([48b9750](https://github.com/iTowns/itowns/commit/48b9750))
* **THREE:** Remove Three.js layers using. ([971f175](https://github.com/iTowns/itowns/commit/971f175))
* **TileMesh:** add change visibility event. ([90ada88](https://github.com/iTowns/itowns/commit/90ada88))
* **TileMesh:** new structuring of the data linked to the node. ([05eb368](https://github.com/iTowns/itowns/commit/05eb368))
* **view:** rename pickCoordinates to pickTerrainCoordinates ([9c701db](https://github.com/iTowns/itowns/commit/9c701db))
* **Widget:** expose Widget in API ([ca77fc8](https://github.com/iTowns/itowns/commit/ca77fc8))


### Workflow and chores

* release v2.40.0 ([20a80eb](https://github.com/iTowns/itowns/commit/20a80eb))
* add coding rules ([1ec89f2](https://github.com/iTowns/itowns/commit/1ec89f2))
* add name to contributors ([2f81334](https://github.com/iTowns/itowns/commit/2f81334))
* **contributors:** update contributors and maintainers ([b5123f5](https://github.com/iTowns/itowns/commit/b5123f5))
* **deployment:** prevent deploying potree bundle since it is not used yet ([8f7ae1a](https://github.com/iTowns/itowns/commit/8f7ae1a))
* **deps-dev:** bump webpack from 5.72.1 to 5.76.0 ([0bf309b](https://github.com/iTowns/itowns/commit/0bf309b))
* **deps-dev:** bump word-wrap from 1.2.3 to 1.2.5 ([64794b1](https://github.com/iTowns/itowns/commit/64794b1))
* **deps:** bump dns-packet from 5.3.1 to 5.4.0 ([96987fd](https://github.com/iTowns/itowns/commit/96987fd))
* don't watch git hash modification ([f19973e](https://github.com/iTowns/itowns/commit/f19973e))
* **examples:** update draco to work with THREE r153 ([00b6db5](https://github.com/iTowns/itowns/commit/00b6db5))
* **integration:** differentiate deployment for LTS and current version ([470e306](https://github.com/iTowns/itowns/commit/470e306))
* **integration:** fix next version publication ([fdb4813](https://github.com/iTowns/itowns/commit/fdb4813))
* **integration:** publish latest and next npm packages ([f8996b3](https://github.com/iTowns/itowns/commit/f8996b3))
* **integration:** update actions in integration script ([c83bfcf](https://github.com/iTowns/itowns/commit/c83bfcf))
* replace variable declaration by const or let ([36ce64d](https://github.com/iTowns/itowns/commit/36ce64d))
* update packages ([a841343](https://github.com/iTowns/itowns/commit/a841343))
* update three to 0.153.0 ([728f473](https://github.com/iTowns/itowns/commit/728f473))
* update three to r154 ([85c9b78](https://github.com/iTowns/itowns/commit/85c9b78))


### Documentation

* **3dtiles:** add documentation for 3d tiles source ([eb7c8ca](https://github.com/iTowns/itowns/commit/eb7c8ca))
* add coding conventions and other rules for PR. ([5001c8d](https://github.com/iTowns/itowns/commit/5001c8d))
* **examples:** Add documentation on some test cases ([cba2146](https://github.com/iTowns/itowns/commit/cba2146))
* **layers:** improve raster layers doc ([c53436a](https://github.com/iTowns/itowns/commit/c53436a))
* **style:** JSDoc for StyleOptions ([3adbf39](https://github.com/iTowns/itowns/commit/3adbf39))
* **tutorials:** fix tutorials source API keys ([0c10d82](https://github.com/iTowns/itowns/commit/0c10d82))
* **tutorials:** update with new gestion of Style ([d76f92f](https://github.com/iTowns/itowns/commit/d76f92f))
* **WMTSSource:** Change the link and the extend to TMSSource ([23c16d2](https://github.com/iTowns/itowns/commit/23c16d2))


### Tests

* **3dtiles:** test 3d tiles sources and 3d tiles ion example ([47db4c7](https://github.com/iTowns/itowns/commit/47db4c7))
* **examples:** add new functional tests ([8e14fe8](https://github.com/iTowns/itowns/commit/8e14fe8))
* **LabelLayer:** add and modify LabelLayer tests. ([a8dfb36](https://github.com/iTowns/itowns/commit/a8dfb36))
* **style:** add tests for applyToHTML() and getImage() ([8e04cd8](https://github.com/iTowns/itowns/commit/8e04cd8))


### BREAKING CHANGES

* **view:** View.pickCoordinates has been renamed to View.pickTerrainCoordinates and returns the coordinates in the referenceCrs of the view instead of in the crs of the tiledLayer extent.



<a name="2.39.0"></a>
# [2.39.0](https://github.com/iTowns/itowns/compare/v2.38.2...v2.39.0) (2023-01-04)


### Features

* **3dtiles:** add support for binary batch table ([47325ab](https://github.com/iTowns/itowns/commit/47325ab))
* add a npm build task creating a non minified version ([48a24fa](https://github.com/iTowns/itowns/commit/48a24fa))
* **debug:** add altitude to displayed coordinates. ([e1fea9f](https://github.com/iTowns/itowns/commit/e1fea9f))
* **globeControls:** add configuration parameters and documentation ([cdd865c](https://github.com/iTowns/itowns/commit/cdd865c))
* **globeView:** allow to configure globeControls when creating a globeView ([821e522](https://github.com/iTowns/itowns/commit/821e522))


### Bug Fixes

* **3dtiles:** fix and document 3d tiles material overriding ([8ade709](https://github.com/iTowns/itowns/commit/8ade709))
* **3dtiles:** fix layer opacity and visibility change for 3d tiles pnts ([059fe5e](https://github.com/iTowns/itowns/commit/059fe5e))
* **3dtiles:** handle tilesets with cesium specific uniforms in shaders ([04f8b40](https://github.com/iTowns/itowns/commit/04f8b40))
* **3dtiles:** use correct batch table constructor for pnts tiles ([e1dbd63](https://github.com/iTowns/itowns/commit/e1dbd63))
* change THREE.Math to THREE.MathUtils ([826b5bd](https://github.com/iTowns/itowns/commit/826b5bd))
* **Feature2Texture:** prevent drawing points if they lack style ([5706e6f](https://github.com/iTowns/itowns/commit/5706e6f))
* **gltf:** fix parsing of khr_binary_extension in gltf 1.0 files ([2bf9d2d](https://github.com/iTowns/itowns/commit/2bf9d2d))
* **LayeredMaterial:** fix opacity when initialized to 0 ([deac41e](https://github.com/iTowns/itowns/commit/deac41e))
* **picking:** fix picking on multiple layers ([5c2f578](https://github.com/iTowns/itowns/commit/5c2f578))
* **Scheduler:** replace url subdomains alternatives ([91fd9ec](https://github.com/iTowns/itowns/commit/91fd9ec))
* **view:** fix view resize when width or height is 0 ([dbd9ee3](https://github.com/iTowns/itowns/commit/dbd9ee3))
* **wfs, wms, wmts:** support urls ending with or without ? character ([f44dfb2](https://github.com/iTowns/itowns/commit/f44dfb2))


### Performance Improvements

* **demutils:** texture data read optimization in elevation measurement ([9ee991c](https://github.com/iTowns/itowns/commit/9ee991c))
* **picking:** don't pick atmosphere layer ([069b2dd](https://github.com/iTowns/itowns/commit/069b2dd))


### Examples

* **3dtiles_25d:** change data url ([52a412f](https://github.com/iTowns/itowns/commit/52a412f))
* **Camera animation:** cleanup example code ([2bfe4e6](https://github.com/iTowns/itowns/commit/2bfe4e6))
* **GuiTools:** fix opacity slider by adding step ([3b205bc](https://github.com/iTowns/itowns/commit/3b205bc))
* **DSM:** add an example of Digital Surface Model ([2f9d558](https://github.com/iTowns/itowns/commit/2f9d558))


### Code Refactoring

* **feature:** use feature crs property for instance center property. ([e455bdb](https://github.com/iTowns/itowns/commit/e455bdb))


### Workflow and chores

* release v2.39.0 ([dd1d251](https://github.com/iTowns/itowns/commit/dd1d251))
* add a script to start an https local session with webpack ([e99bf15](https://github.com/iTowns/itowns/commit/e99bf15))
* **deps:** bump loader-utils from 2.0.2 to 2.0.3 ([fd0f01b](https://github.com/iTowns/itowns/commit/fd0f01b))
* **deps:** bump loader-utils from 2.0.3 to 2.0.4 ([cccacae](https://github.com/iTowns/itowns/commit/cccacae))
* **deps:** bump terser from 5.13.1 to 5.14.2 ([7134b26](https://github.com/iTowns/itowns/commit/7134b26))
* **integration:** add option to launch integration workflow manually ([db05ed6](https://github.com/iTowns/itowns/commit/db05ed6))
* **integration:** update potree repository ([39fbdd7](https://github.com/iTowns/itowns/commit/39fbdd7))
* up chalk to 5.0.1 ([1a30d66](https://github.com/iTowns/itowns/commit/1a30d66))
* update CONTRIBUTORS.md ([ba33056](https://github.com/iTowns/itowns/commit/ba33056))
* update packages. ([3dac8b9](https://github.com/iTowns/itowns/commit/3dac8b9))
* update three.js to 0.146.0 ([55e7016](https://github.com/iTowns/itowns/commit/55e7016))


### Documentation

* **RasterTile:** fix faulty link ([7cf4fcf](https://github.com/iTowns/itowns/commit/7cf4fcf))
* **README:** Typo in the readme redirecting to a 404 error ([04122a8](https://github.com/iTowns/itowns/commit/04122a8))
* **tutorials:** Improve tutorial and add two tutorials for 3D tiles ([3063925](https://github.com/iTowns/itowns/commit/3063925))


### Tests

* **3dtiles:** add 3D Tiles batch table parsing tests ([f3bd6c7](https://github.com/iTowns/itowns/commit/f3bd6c7))


### BREAKING CHANGES

* **3dtiles:** `C3DTBatchTable` constructor signature has changed from
C3DTBatchTable(buffer, binaryLength, batchLength, registeredExtensions) to
C3DTBatchTable(buffer, jsonLength, binaryLength, batchLength, registeredExtensions)



<a name="2.38.2"></a>
## [2.38.2](https://github.com/iTowns/itowns/compare/v2.38.1...v2.38.2) (2022-05-11)


### Features

* **View:** Add option viewer to enable/disable focus on start. ([88d7c93](https://github.com/iTowns/itowns/commit/88d7c93))


### Workflow and chores

* release v2.38.2 ([36213cc](https://github.com/iTowns/itowns/commit/36213cc))



<a name="2.38.1"></a>
## [2.38.1](https://github.com/iTowns/itowns/compare/v2.38.0...v2.38.1) (2022-04-13)


### Examples

* **Navigation:** fix addButton method call ([c53ae71](https://github.com/iTowns/itowns/commit/c53ae71))


### Workflow and chores

* release v2.38.1 ([2ea8b0a](https://github.com/iTowns/itowns/commit/2ea8b0a))



<a name="2.38.0"></a>
# [2.38.0](https://github.com/iTowns/itowns/compare/v2.37.0...v2.38.0) (2022-04-13)


### Features

* **FeatureGeometryLayer:** introduce FeatureMesh, they are added to layer.object3d. ([0d777ce](https://github.com/iTowns/itowns/commit/0d777ce))
* **Widgets:** add a searchbar widget ([164b6ee](https://github.com/iTowns/itowns/commit/164b6ee))
* **Widgets:** add a widget to display a scale ([d3a0154](https://github.com/iTowns/itowns/commit/d3a0154))
* **Widgets:** add show and hide methods ([59ac32c](https://github.com/iTowns/itowns/commit/59ac32c))
* **widgets:** Navigation tooltips can be parametrized ([094803f](https://github.com/iTowns/itowns/commit/094803f))
* **Widgets:** placeholder for searchbar can be modified ([9bd81ce](https://github.com/iTowns/itowns/commit/9bd81ce))


### Bug Fixes

* **Feature2Mesh:** fix wrong computing of clockwise polygon. ([bad5e34](https://github.com/iTowns/itowns/commit/bad5e34))
* **GeoidLayer:** transformation error on tileMesh. ([472e39c](https://github.com/iTowns/itowns/commit/472e39c))
* **parser:** GeoJsonParser add legacy identifier to fct readCRS() ([a0195c6](https://github.com/iTowns/itowns/commit/a0195c6))
* **VectorTileParser:** clock wise polygon wasn't calculated. ([135ee7a](https://github.com/iTowns/itowns/commit/135ee7a))
* **View:** fix pickCoordinates undefined parameter ([0ec49f4](https://github.com/iTowns/itowns/commit/0ec49f4))
* **Widgets:** fix focus policy and event propagation on widgets ([7775a04](https://github.com/iTowns/itowns/commit/7775a04))
* **Widgets:** fix in Navigation css ([a85f8b4](https://github.com/iTowns/itowns/commit/a85f8b4))


### Examples

* change view source button style ([e593237](https://github.com/iTowns/itowns/commit/e593237))
* **FeatureGeometryLayer:** add vector tile to 3d object. ([53a42a6](https://github.com/iTowns/itowns/commit/53a42a6))
* **view 3d:** updates on widgets ([30bee5f](https://github.com/iTowns/itowns/commit/30bee5f))
* **Widgets:** use minimap widget in view 3D example ([5042ba7](https://github.com/iTowns/itowns/commit/5042ba7))


### Code Refactoring

* **Feature:** move properties to private fields. ([02604b9](https://github.com/iTowns/itowns/commit/02604b9))
* **Feature:** simplify normals data. ([0914834](https://github.com/iTowns/itowns/commit/0914834))
* **GeometryLayer:** reference to material properties from Layer properties. ([23a0269](https://github.com/iTowns/itowns/commit/23a0269))
* **label:** render only object with labels. ([c317a8a](https://github.com/iTowns/itowns/commit/c317a8a))
* **MainLoop:** use class for MainLoop. ([25a48fd](https://github.com/iTowns/itowns/commit/25a48fd))
* **PlanarControls:** change focus policy ([99fadc0](https://github.com/iTowns/itowns/commit/99fadc0))
* **view_3d_map:** simplify example ([3786dcf](https://github.com/iTowns/itowns/commit/3786dcf))
* **View:** move View properties to private fields. ([51f5508](https://github.com/iTowns/itowns/commit/51f5508))
* **Widgets:** add onClick property in Navigation ([8d9f69e](https://github.com/iTowns/itowns/commit/8d9f69e))
* **Widgets:** simplify Navigation usage ([7c2bc89](https://github.com/iTowns/itowns/commit/7c2bc89))


### Workflow and chores

* release v2.38.0 ([34ae0f3](https://github.com/iTowns/itowns/commit/34ae0f3))
* add support ecma 2022 ([25080d9](https://github.com/iTowns/itowns/commit/25080d9))
* **deps:** bump deps to fix security vulnerability. ([1db1ae7](https://github.com/iTowns/itowns/commit/1db1ae7))
* **deps:** bump minimist from 1.2.5 to 1.2.6 ([09e047a](https://github.com/iTowns/itowns/commit/09e047a))
* **deps:** bump node-forge from 1.2.1 to 1.3.0 ([e536532](https://github.com/iTowns/itowns/commit/e536532))
* **submodule:** use submodule for widgets. ([44cc7d0](https://github.com/iTowns/itowns/commit/44cc7d0))
* update packages. ([e19809f](https://github.com/iTowns/itowns/commit/e19809f))


### Documentation

* **core:** Add doc for local execution ([faf58be](https://github.com/iTowns/itowns/commit/faf58be))
* **Widgets:** specify GlobeView support for navigation ([c209fdc](https://github.com/iTowns/itowns/commit/c209fdc))
* **Widgets:** specify resources needed to use widgets ([b65c081](https://github.com/iTowns/itowns/commit/b65c081))


### Tests

* **Feature2Mesh:** add test to calculate the difference with and without proj4. ([1527c64](https://github.com/iTowns/itowns/commit/1527c64))



<a name="2.37.0"></a>
# [2.37.0](https://github.com/iTowns/itowns/compare/v2.36.2...v2.37.0) (2022-01-31)


### Features

* **Geoid:** add support for geoid heights ([38569f6](https://github.com/iTowns/itowns/commit/38569f6))
* **Parser:** add parsers for GTX, ISG and GDF file formats ([a55b154](https://github.com/iTowns/itowns/commit/a55b154))
* **View:** add a method to pick world coordinates ([91ccfe3](https://github.com/iTowns/itowns/commit/91ccfe3))
* **View:** add support for ortho camera in getScale method ([06eb805](https://github.com/iTowns/itowns/commit/06eb805))
* **View:** dispatch an event when camera is moved ([37cfb90](https://github.com/iTowns/itowns/commit/37cfb90))
* **Widget:** add a minimap widget ([6d82c74](https://github.com/iTowns/itowns/commit/6d82c74))


### Bug Fixes

* **GlobeControl:** stop damping when launching new animation ([dad7641](https://github.com/iTowns/itowns/commit/dad7641))
* **test:** fetch local laz files behind proxy. ([b732c0a](https://github.com/iTowns/itowns/commit/b732c0a))
* **View:** fix picking radius with polygons ([b7be8e9](https://github.com/iTowns/itowns/commit/b7be8e9))


### Examples

* **Compass:** add an example of a compass in a GlobeView ([3290820](https://github.com/iTowns/itowns/commit/3290820))
* **FileSource:** add exemples of FileSource instantiation ([7db9bcb](https://github.com/iTowns/itowns/commit/7db9bcb))
* **Potree:** add an example of Potree intgration within iTowns ([4bbc772](https://github.com/iTowns/itowns/commit/4bbc772))
* **Potree:** fix minor issues on the example ([1ee50c8](https://github.com/iTowns/itowns/commit/1ee50c8))
* **source / file:** simplify FileSource usage ([21317b4](https://github.com/iTowns/itowns/commit/21317b4))
* **Widget:** add an example of minimap widget ([2b89f83](https://github.com/iTowns/itowns/commit/2b89f83))
* **Widgets:** add a plugin to display widgets ([ec56fa9](https://github.com/iTowns/itowns/commit/ec56fa9))
* add GeoidLayer implementation example ([5df8cc5](https://github.com/iTowns/itowns/commit/5df8cc5))


### Code Refactoring

* **TileMesh:** refactorize bbox update method ([18196b6](https://github.com/iTowns/itowns/commit/18196b6))
* **Widgets:** rename widgets to navigation ([509a042](https://github.com/iTowns/itowns/commit/509a042))


### Workflow and chores

* release v2.37.0 ([97e59b6](https://github.com/iTowns/itowns/commit/97e59b6))
* **deps-dev:** bump marked from 4.0.8 to 4.0.10 ([cfc9100](https://github.com/iTowns/itowns/commit/cfc9100))
* add potree repo and symbolic link to gitignore ([d7bb92c](https://github.com/iTowns/itowns/commit/d7bb92c))
* change itowns.github.io deploying ([870299f](https://github.com/iTowns/itowns/commit/870299f))
* deploy itowns and potree bundle. ([b104fd5](https://github.com/iTowns/itowns/commit/b104fd5))
* fix eslint rules. ([6fff078](https://github.com/iTowns/itowns/commit/6fff078))
* update CONTRIBUTING.md ([96cfb21](https://github.com/iTowns/itowns/commit/96cfb21))
* update packages. ([eb7c8d5](https://github.com/iTowns/itowns/commit/eb7c8d5))



<a name="2.36.2"></a>
## [2.36.2](https://github.com/iTowns/itowns/compare/v2.36.1...v2.36.2) (2021-11-29)


### Bug Fixes

* **VectorTileSource:** error if vector tile layer style is undefined. ([b535583](https://github.com/iTowns/itowns/commit/b535583))


### Code Refactoring

* **Coordinates/Extent:** rename dimension and distance methods. ([6a436ac](https://github.com/iTowns/itowns/commit/6a436ac))
* **examples:** replace geoservice keys. ([b81738c](https://github.com/iTowns/itowns/commit/b81738c))
* **Feature:** defaults buildExtent parameter to true for 2d structure ([3182075](https://github.com/iTowns/itowns/commit/3182075))


### Workflow and chores

* release v2.36.2 ([54c2128](https://github.com/iTowns/itowns/commit/54c2128))



<a name="2.36.1"></a>
## [2.36.1](https://github.com/iTowns/itowns/compare/v2.36.0...v2.36.1) (2021-11-22)


### Bug Fixes

* **View:** wrong calculate pick radius with distance/zoom. ([d5efa03](https://github.com/iTowns/itowns/commit/d5efa03))


### Workflow and chores

* release v2.36.1 ([b0cf534](https://github.com/iTowns/itowns/commit/b0cf534))



<a name="2.36.0"></a>
# [2.36.0](https://github.com/iTowns/itowns/compare/v2.35.0...v2.36.0) (2021-11-18)


### Features

* **Coordinates:** add methods to calculate distance between coordinates. ([acdf643](https://github.com/iTowns/itowns/commit/acdf643))
* **Crs:** add isGeocentric method. ([1ab76c8](https://github.com/iTowns/itowns/commit/1ab76c8))
* **Extent:** add methods to calculate extent dimensions. ([ed583d9](https://github.com/iTowns/itowns/commit/ed583d9))
* **Label:** add parameter to change labels padding property ([33f8680](https://github.com/iTowns/itowns/commit/33f8680))


### Bug Fixes

* **ColorLayer:** fix shader when transparent is true ([1a4f44d](https://github.com/iTowns/itowns/commit/1a4f44d))
* **ElevationLayer:** scale elevation isn't updated ([26d72da](https://github.com/iTowns/itowns/commit/26d72da))
* **Ellipsoid:** wrong geodesic distance. ([4d462f2](https://github.com/iTowns/itowns/commit/4d462f2))
* **Extent:** fix wrong calculating when apply matrix. ([04abdd2](https://github.com/iTowns/itowns/commit/04abdd2))
* **Feature:** wrong altitude and altitude limits. ([4746e86](https://github.com/iTowns/itowns/commit/4746e86))
* **Feature2Mesh:** set scale transformation from FeatureCollection. ([0f5cd07](https://github.com/iTowns/itowns/commit/0f5cd07))
* **FirstPersonControls:** prevent context menu from poping ([94bfd57](https://github.com/iTowns/itowns/commit/94bfd57))
* **GlobeControls:** fix black screen when zooming outside globe ([3e0f23f](https://github.com/iTowns/itowns/commit/3e0f23f))
* **label2DRenderer:** add frustum culling in global labels culling. ([5ba4e9d](https://github.com/iTowns/itowns/commit/5ba4e9d))
* **Point/3Dtiles:** wrong geographical extent property for points cloud and 3Dtiles. ([c663ce4](https://github.com/iTowns/itowns/commit/c663ce4))
* **Style:** copy order property when copying style ([cab78ba](https://github.com/iTowns/itowns/commit/cab78ba))
* **VectorTileSource:** set style parent with style Layer ([aba0743](https://github.com/iTowns/itowns/commit/aba0743))


### Examples

* **3dtiles_basic:** update 3dtiles sources url ([50d6733](https://github.com/iTowns/itowns/commit/50d6733))


### Code Refactoring

* **debug:** remove id text in OBB helper. ([d033279](https://github.com/iTowns/itowns/commit/d033279))
* **examples:** add wfs labels in 2.5d examples. ([944e412](https://github.com/iTowns/itowns/commit/944e412))
* **Extent:** throw error if the projection is geocentric. ([e0048f7](https://github.com/iTowns/itowns/commit/e0048f7))
* **Extent:** use Extent.planarDimensions instead of Extent.dimensions ([023d5fa](https://github.com/iTowns/itowns/commit/023d5fa))
* **OBBHelper:** remove OBBHelper text. ([1e2fc31](https://github.com/iTowns/itowns/commit/1e2fc31))
* **TerrainMaterial:** rename fogDepth -> vFogDepth ([7d162ec](https://github.com/iTowns/itowns/commit/7d162ec))
* **View:** change label margin default. ([8c6edf5](https://github.com/iTowns/itowns/commit/8c6edf5))


### Workflow and chores

* release v2.36.0 ([091c59b](https://github.com/iTowns/itowns/commit/091c59b))
* add contributor. ([323b046](https://github.com/iTowns/itowns/commit/323b046))
* update packages. ([ef204f9](https://github.com/iTowns/itowns/commit/ef204f9))


### Documentation

* **Ellipsoid:** minor fix on geodesicDistance doc ([a0cd2a3](https://github.com/iTowns/itowns/commit/a0cd2a3))



<a name="2.35.0"></a>
# [2.35.0](https://github.com/iTowns/itowns/compare/v2.34.0...v2.35.0) (2021-09-16)


### Features

* **AnimationPlayer:** add a callback ran at each animation frame ([1280ce0](https://github.com/iTowns/itowns/commit/1280ce0))


### Bug Fixes

* **c3DEngine:** fix error when input renderer.domElement is a canvas ([14567c1](https://github.com/iTowns/itowns/commit/14567c1))
* **CameraUtils:** CameraTransformOptions parameter stopPlaceOnGroundAtEnd is no longer overriden ([7f3a542](https://github.com/iTowns/itowns/commit/7f3a542))
* **CameraUtils:** compute precise altitude when setting CameraRig ([011fcbc](https://github.com/iTowns/itowns/commit/011fcbc))
* **Feature2Mesh:** addapt indices array type from the size of polygon ([378c092](https://github.com/iTowns/itowns/commit/378c092))
* **GlobeControls:** fix jittering move globe when devtool is open ([825841c](https://github.com/iTowns/itowns/commit/825841c))
* **Label:** clamp labels altitude over 0 ([ddd59e0](https://github.com/iTowns/itowns/commit/ddd59e0))
* **Label:** enforce Labels div top position to 0 ([08528d7](https://github.com/iTowns/itowns/commit/08528d7))
* **ShapefileParser:** prevent ignoring input crs wen given ([d2b90b7](https://github.com/iTowns/itowns/commit/d2b90b7))


### Examples

* **camera traveling:** add an example where user can pick points and have camera traveling between those points ([6e79ff3](https://github.com/iTowns/itowns/commit/6e79ff3))


### Code Refactoring

* **Controls:** change deprecated mouseWheel event to wheel event ([923d10c](https://github.com/iTowns/itowns/commit/923d10c))
* **Controls:** handle mouse events in StateControls ([ae1c30b](https://github.com/iTowns/itowns/commit/ae1c30b))
* **Controls:** switch context menu management in StateControl ([5fa010b](https://github.com/iTowns/itowns/commit/5fa010b))
* **Controls:** switch enabled property from GlobeControls to StateControl ([76130b4](https://github.com/iTowns/itowns/commit/76130b4))
* **Controls:** switch keyboard management to StateControls ([a392a7b](https://github.com/iTowns/itowns/commit/a392a7b))
* **Controls:** switch wheel management to StateControl ([4e64b75](https://github.com/iTowns/itowns/commit/4e64b75))
* **StateControl:** factorise handleMouse in pointer methods ([0e626d8](https://github.com/iTowns/itowns/commit/0e626d8))
* **StateControls:** simplify setFromOptions method ([a7d175f](https://github.com/iTowns/itowns/commit/a7d175f))


### Workflow and chores

* release v2.35.0 ([ade35e8](https://github.com/iTowns/itowns/commit/ade35e8))
* **examples:** change geoportail key. ([36f0f40](https://github.com/iTowns/itowns/commit/36f0f40))
* move babel preset-env options to .babelrc ([ad22bcc](https://github.com/iTowns/itowns/commit/ad22bcc))
* remove import three examples polyfill. ([48d52ae](https://github.com/iTowns/itowns/commit/48d52ae))
* up three 131.2 ([aed4dbc](https://github.com/iTowns/itowns/commit/aed4dbc))
* up to webpack 5. ([ea36982](https://github.com/iTowns/itowns/commit/ea36982))
* update packages. ([909e96e](https://github.com/iTowns/itowns/commit/909e96e))


### Documentation

* minor update on Controls documentation ([5f4ace1](https://github.com/iTowns/itowns/commit/5f4ace1))
* **Controls:** minor doc fixes ([d7c2ffa](https://github.com/iTowns/itowns/commit/d7c2ffa))



<a name="2.34.0"></a>
# [2.34.0](https://github.com/iTowns/itowns/compare/v2.33.0...v2.34.0) (2021-07-30)


### Features

* **GlobeControls:** add support for travel out animation ([9db6ecb](https://github.com/iTowns/itowns/commit/9db6ecb))
* **Label:** add support to pass custom domElements to labels ([b560005](https://github.com/iTowns/itowns/commit/b560005))
* **Layer:** add FeatureGeometryLayer. ([0961787](https://github.com/iTowns/itowns/commit/0961787))
* **StateControl:** add a method to modify class properties ([1e2e11e](https://github.com/iTowns/itowns/commit/1e2e11e))
* **Style:** add support for custom icon in labels ([7f355c4](https://github.com/iTowns/itowns/commit/7f355c4))
* **Style:** add support for custom label anchor ([fe2a2d9](https://github.com/iTowns/itowns/commit/fe2a2d9))
* **TMSSource:** add support for specific TileMatrix identifier ([e394255](https://github.com/iTowns/itowns/commit/e394255))
* **View:** add double right-click event ([9ce7213](https://github.com/iTowns/itowns/commit/9ce7213))


### Bug Fixes

* **3Dtiles:** remove debugger command. ([0a06614](https://github.com/iTowns/itowns/commit/0a06614))
* **eventToViewCoord:** check if event.offset properties are defined ([26f459a](https://github.com/iTowns/itowns/commit/26f459a))
* **example:** generate correct URL when sharing EPT example ([8ef0b34](https://github.com/iTowns/itowns/commit/8ef0b34))
* **FeatureToolTip:** fix tooltip legend icon ([f632308](https://github.com/iTowns/itowns/commit/f632308))
* **Label:** fix occlusion between icons and label text ([29b6435](https://github.com/iTowns/itowns/commit/29b6435))
* **Label:** fix Style.text.offset parameter ([26b970b](https://github.com/iTowns/itowns/commit/26b970b))
* **Label:** rounds the projected coordinates of labels ([5d0ca6f](https://github.com/iTowns/itowns/commit/5d0ca6f))
* **LayeredMaterialNodeProcessing:** checks for source cache with the layer crs for command cancellation ([7570cad](https://github.com/iTowns/itowns/commit/7570cad))
* **tutorial:** fix internal link in tutorials ([ce8029c](https://github.com/iTowns/itowns/commit/ce8029c))


### Examples

* add an example where user can define custom controls ([00e62c2](https://github.com/iTowns/itowns/commit/00e62c2))
* **GeoJSON raster:** center the camera initial position on the displayed features ([8d8ac2c](https://github.com/iTowns/itowns/commit/8d8ac2c))
* **geojson-file:** refactor example to illustrate two ways of displaying data from a file ([4bc0774](https://github.com/iTowns/itowns/commit/4bc0774))
* **vectorTile:** replace expired source in vector tile examples ([8ccc1a3](https://github.com/iTowns/itowns/commit/8ccc1a3))


### Code Refactoring

* **GlobeControls:** switch travel animation to StateControl ([d99827d](https://github.com/iTowns/itowns/commit/d99827d))
* **View:** eventToViewCoords returns middle view coords by default ([2e501c3](https://github.com/iTowns/itowns/commit/2e501c3))


### Workflow and chores

* release v2.34.0 ([4fe8baa](https://github.com/iTowns/itowns/commit/4fe8baa))
* expose 3dtiles process methods. ([7a94570](https://github.com/iTowns/itowns/commit/7a94570))
* update packages. ([50cd744](https://github.com/iTowns/itowns/commit/50cd744))


### Documentation

* **FeatureGeometryLayer:** add jsdoc to documentation config ([e77f102](https://github.com/iTowns/itowns/commit/e77f102))
* **README:** update deprecated link ([b483e0d](https://github.com/iTowns/itowns/commit/b483e0d))
* **README:** update integration badge to github action ([4c77adf](https://github.com/iTowns/itowns/commit/4c77adf))
* **Style:** add precision on doc ([bcee39f](https://github.com/iTowns/itowns/commit/bcee39f))
* **tutorials:** add support to sort tutorials in sections ([e9c8510](https://github.com/iTowns/itowns/commit/e9c8510))


### Others

* **Fundamentals:** add links to documentation ([cf30e37](https://github.com/iTowns/itowns/commit/cf30e37))
* **Fundamentals:** change section titles ([296206f](https://github.com/iTowns/itowns/commit/296206f))
* **Fundamentals:** change tutorial links appearance ([ac167ec](https://github.com/iTowns/itowns/commit/ac167ec))
* add tutorials on how to use iTowns ([5916ac9](https://github.com/iTowns/itowns/commit/5916ac9))
* resize tutorial images ([bbb91e7](https://github.com/iTowns/itowns/commit/bbb91e7))
* update html titles in some examples ([7ea6538](https://github.com/iTowns/itowns/commit/7ea6538))



<a name="2.33.0"></a>
# [2.33.0](https://github.com/iTowns/itowns/compare/v2.32.0...v2.33.0) (2021-05-28)


### Features

* **ColorLayer:** add custom shader to ColorLayer. ([2d32888](https://github.com/iTowns/itowns/commit/2d32888))
* **ColorLayer:** add option to filtering textures Layer. ([da245f9](https://github.com/iTowns/itowns/commit/da245f9))
* **Coordinates:** add applyMatrix4 method. ([061eda0](https://github.com/iTowns/itowns/commit/061eda0))


### Bug Fixes

* **CameraUtils:** count heading in clockwise direction ([880c67d](https://github.com/iTowns/itowns/commit/880c67d))
* **CameraUtils:** fix rotation animation when start heading is 0 ([1ca0c17](https://github.com/iTowns/itowns/commit/1ca0c17))
* **CameraUtils:** the camera rotation animation take the shortest angle ([ae194d3](https://github.com/iTowns/itowns/commit/ae194d3))
* **Controls:** replace deprecated THREE.Quaternion.slerp. ([2e27408](https://github.com/iTowns/itowns/commit/2e27408))
* **debug:** update coordinates event on mouse move ([9b62770](https://github.com/iTowns/itowns/commit/9b62770))
* **Feature:** wrong condition to choose extent crs projection. ([73198c7](https://github.com/iTowns/itowns/commit/73198c7))
* **FeatureToolTip:** avoid undefined layer on move. ([6ae7305](https://github.com/iTowns/itowns/commit/6ae7305))
* **FileSource:** transform extent source if is needed. ([0177503](https://github.com/iTowns/itowns/commit/0177503))
* **GeojsonParser:** store geojson properties within a separate property ([121b796](https://github.com/iTowns/itowns/commit/121b796))
* **LabelLayer:** init LabelLayer visibility with attached ColorLayer. ([67f25a1](https://github.com/iTowns/itowns/commit/67f25a1))
* **LayeredMaterialNodeProcessing:** prevent errors in layer update when removing layer ([d9fda75](https://github.com/iTowns/itowns/commit/d9fda75))
* **PlanarControls:** prevent freezing zoom when clicking while zooming with an orthographic camera ([b0f0a2d](https://github.com/iTowns/itowns/commit/b0f0a2d))
* **test:** use Extent.applyMatrix4 and Coordinates.applyMatrix4. ([bdf50ab](https://github.com/iTowns/itowns/commit/bdf50ab))


### Examples

* add custom shader effect example. ([15163d9](https://github.com/iTowns/itowns/commit/15163d9))
* change buildings id for coloring ([3f7ccd0](https://github.com/iTowns/itowns/commit/3f7ccd0))


### Code Refactoring

* **ColorLayer:** add effect type ColorLayer parameter. ([19d58c6](https://github.com/iTowns/itowns/commit/19d58c6))
* **ColorLayer:** remove useless features in ColorLayer command. ([66ee340](https://github.com/iTowns/itowns/commit/66ee340))
* **example:** remove unuseless variable. ([041b62a](https://github.com/iTowns/itowns/commit/041b62a))
* **Feature:** compute and apply local transform matrix in Feature. ([e244f55](https://github.com/iTowns/itowns/commit/e244f55))
* **Feature:** declare constant in file begining. ([f44c29e](https://github.com/iTowns/itowns/commit/f44c29e))
* **Feature:** FeatureCollection extends by Object3D and use local transform matrix. ([8d20315](https://github.com/iTowns/itowns/commit/8d20315))
* **Feature:** normalize crs projection. ([f9df7ff](https://github.com/iTowns/itowns/commit/f9df7ff))
* **Feature:** remove optionsFeature from FeatureCollection. ([b15c642](https://github.com/iTowns/itowns/commit/b15c642))
* **Feature:** replace parsing option withNormal and withAltitude by structure. ([420ba1a](https://github.com/iTowns/itowns/commit/420ba1a))
* **Feature:** simplify build extent check. ([0091a5a](https://github.com/iTowns/itowns/commit/0091a5a))
* **Layer:** deprecate labelEnable option Layer and replace by addLabelLayer. ([082d22c](https://github.com/iTowns/itowns/commit/082d22c))
* **ShaderChunk:** introduce shader chunk manager class to instance ShaderChunk. ([e93ed76](https://github.com/iTowns/itowns/commit/e93ed76))
* **Source:** avoid to cache raster data in Source. ([521ca74](https://github.com/iTowns/itowns/commit/521ca74))
* **Style/Convert:** move options from Converter to Style. ([23de259](https://github.com/iTowns/itowns/commit/23de259))
* **VectorTileParser:** remove unnecessary parameters. ([860d748](https://github.com/iTowns/itowns/commit/860d748))


### Workflow and chores

* release v2.33.0 ([b1cb970](https://github.com/iTowns/itowns/commit/b1cb970))
* **chart.js:** update chart.js to 3.0. ([6953e01](https://github.com/iTowns/itowns/commit/6953e01))
* update packages. ([0f54e2e](https://github.com/iTowns/itowns/commit/0f54e2e))


### Documentation

* **FeatureCollection:** clarify FeatureCollection.extent projection. ([f612eb3](https://github.com/iTowns/itowns/commit/f612eb3))
* **View:** add diffuse parameter documentation. ([fcc16da](https://github.com/iTowns/itowns/commit/fcc16da))


### Tests

* **unit:** update unit tests with feature refactoring. ([cbe3e68](https://github.com/iTowns/itowns/commit/cbe3e68))


### BREAKING CHANGES

* **Style/Convert:** * `GeometryLayer.convert` options are moved in Style properties. Use
  * `Style.xxx.color`
  * `Style.xxx.base_altitude`
  * `Style.fill.extrusion_height`
  * `Style.stroke.width`
  * `Style.point.radius`
* `overrideAltitudeInToZero` layer options is removed use `Style.xxx.base_altitude` instead.
* **CameraUtils:** The headings used in CameraUtils are now counted clockwise (they were
previously counted counter-clockwise).
* **Feature:** FeatureCollection and Feature signature constructor are changed.



<a name="2.32.0"></a>
# [2.32.0](https://github.com/iTowns/itowns/compare/v2.31.0...v2.32.0) (2021-04-09)


### Features

* **PlanarControls:** add max and min resolution parameters to limit zoom ([ad17590](https://github.com/iTowns/itowns/commit/ad17590))
* **PlanarControls:** Add property 'Cursor' and method 'setCursor' for cursor modification ([0870ede](https://github.com/iTowns/itowns/commit/0870ede))
* **Style:** support mapbox expression. ([0581d3d](https://github.com/iTowns/itowns/commit/0581d3d))


### Bug Fixes

* **Atmosphere:** avoid several realistic atmosphere initializations. ([b949f75](https://github.com/iTowns/itowns/commit/b949f75))
* **Camera:** resize preserves the scale ([e44de7f](https://github.com/iTowns/itowns/commit/e44de7f))
* **extent:** forget copy zoom in Extent#transformedCopy. ([1a607ea](https://github.com/iTowns/itowns/commit/1a607ea))
* **Extent:** forgetting zoom property copy, in Extent.as(). ([3efea0e](https://github.com/iTowns/itowns/commit/3efea0e))
* **Label:** wrong div translate. ([5ef7197](https://github.com/iTowns/itowns/commit/5ef7197))
* **PlanarControls:** fix drag when moving out of view domElement ([a4f0a3f](https://github.com/iTowns/itowns/commit/a4f0a3f))
* **PlanarControls:** prevent triggering new movement when already moving ([66256bb](https://github.com/iTowns/itowns/commit/66256bb))
* **test:** apply async icon label loading. ([76d732a](https://github.com/iTowns/itowns/commit/76d732a))
* **test:** update label test with default icon size. ([72a98d4](https://github.com/iTowns/itowns/commit/72a98d4))
* **test:** update vector tile style test with context expression. ([c9fc662](https://github.com/iTowns/itowns/commit/c9fc662))
* **VectorTileSource:** failing to open mapbox url format. ([b6dd383](https://github.com/iTowns/itowns/commit/b6dd383))


### Examples

* **Orthographic:** add resolution limit parameters in orthographic examples ([aafd37b](https://github.com/iTowns/itowns/commit/aafd37b))
* add atmosphere mars example. ([27e28ad](https://github.com/iTowns/itowns/commit/27e28ad))
* update irrelevant titles in some examples ([2914286](https://github.com/iTowns/itowns/commit/2914286))


### Code Refactoring

* **Atmosphere:** move realistic atmosphere options to Atmosphere constructor. ([234a8ee](https://github.com/iTowns/itowns/commit/234a8ee))
* **Source:** remove extentsInsideLimit. ([035701b](https://github.com/iTowns/itowns/commit/035701b))
* **VectorTilesSource:** remove useless styles by zoom. ([baabbae](https://github.com/iTowns/itowns/commit/baabbae))


### Workflow and chores

* release v2.32.0 ([95c6f37](https://github.com/iTowns/itowns/commit/95c6f37))
* update packages. ([e9ae835](https://github.com/iTowns/itowns/commit/e9ae835))


### Documentation

* **GeometryLayer:** fix example and typo regarding Object3D ([d77c8d6](https://github.com/iTowns/itowns/commit/d77c8d6))
* **TMSSource:** add example in doc ([dce0032](https://github.com/iTowns/itowns/commit/dce0032))



<a name="2.31.0"></a>
# [2.31.0](https://github.com/iTowns/itowns/compare/v2.30.0...v2.31.0) (2021-03-02)


### Bug Fixes

* **GlobeLayer:** doesn't subdivise the pole tile mesh. ([53a9f6f](https://github.com/iTowns/itowns/commit/53a9f6f))
* **PlanarControls:** fix pan movement ([5be30b7](https://github.com/iTowns/itowns/commit/5be30b7))
* **PlanarControls:** standardize zoom factors for perspective and orthographic camera ([c65bbab](https://github.com/iTowns/itowns/commit/c65bbab))
* **Points:** remove THREE.Geometry. ([6ff3b3d](https://github.com/iTowns/itowns/commit/6ff3b3d))
* **RasterColorTile:** wrong getter name. ([1f7eb05](https://github.com/iTowns/itowns/commit/1f7eb05))


### Examples

* correct zoom factor parameter in examples ([a86e3f8](https://github.com/iTowns/itowns/commit/a86e3f8))


### Code Refactoring

* **Debug:** simplified point debug code. ([c99fb09](https://github.com/iTowns/itowns/commit/c99fb09))
* **GlobeControls:** refactor zoom speed management ([57f6666](https://github.com/iTowns/itowns/commit/57f6666))
* **Immersive:** replace Matrix4.makeBasisFromMatrix by Matrix4.setFromMatrix3. ([d442602](https://github.com/iTowns/itowns/commit/d442602))
* **MaterialLayer:** MaterialLayer to RasterNode. ([46b19f1](https://github.com/iTowns/itowns/commit/46b19f1))
* **PlanarControls:** refactor zoom speed management ([ca47389](https://github.com/iTowns/itowns/commit/ca47389))
* **points:** avoid clone point material. ([174a60f](https://github.com/iTowns/itowns/commit/174a60f))
* **RasterTile:** rename file. ([c73fc38](https://github.com/iTowns/itowns/commit/c73fc38))
* **View:** remove useless getParentLayer method ([6f0b545](https://github.com/iTowns/itowns/commit/6f0b545))
* **View:** simplify getLayerById method. ([58874ec](https://github.com/iTowns/itowns/commit/58874ec))


### Workflow and chores

* release v2.31.0 ([c3f5e47](https://github.com/iTowns/itowns/commit/c3f5e47))
* update package-lock.json. ([b3e81fc](https://github.com/iTowns/itowns/commit/b3e81fc))
* **deps-dev:** bump marked from 1.2.9 to 2.0.0 ([46bc3f9](https://github.com/iTowns/itowns/commit/46bc3f9))
* update packages. ([09f12c9](https://github.com/iTowns/itowns/commit/09f12c9))


### Tests

* **MaterialLayer:** update tests with the MaterialLayer refactoring. ([0fa3c06](https://github.com/iTowns/itowns/commit/0fa3c06))



<a name="2.30.0"></a>
# [2.30.0](https://github.com/iTowns/itowns/compare/v2.29.2...v2.30.0) (2021-02-05)


### Features

* **CameraUtils:** add possibility to set camera placement from an extent ([d6b2ab4](https://github.com/iTowns/itowns/commit/d6b2ab4))
* **VectorTilesSource:** store parsed vector tile style as class property ([bb581fb](https://github.com/iTowns/itowns/commit/bb581fb))


### Bug Fixes

* **Camera:** rename intersectSphere to intersectsSphere ([f5e1004](https://github.com/iTowns/itowns/commit/f5e1004))
* **examples:** rename smartZoom param in vector_tile_raster_2d ([ca7aaeb](https://github.com/iTowns/itowns/commit/ca7aaeb))
* **examples:** update three version in view_mutli_25d ([7778a4d](https://github.com/iTowns/itowns/commit/7778a4d))
* **Terrain:** use exact method to compute min and max elevation node; ([6297c09](https://github.com/iTowns/itowns/commit/6297c09))


### Examples

* **OrthographicCamera:** set camera initial position from an extent ([6c10ba2](https://github.com/iTowns/itowns/commit/6c10ba2))


### Code Refactoring

* **Camera:** refactor Camera as an ES6 class ([596cee6](https://github.com/iTowns/itowns/commit/596cee6))
* **Camera:** remove matrixProjectionNeedsUpdate. ([a501c92](https://github.com/iTowns/itowns/commit/a501c92))
* **debug:** remove three r124 warning. ([9c2406f](https://github.com/iTowns/itowns/commit/9c2406f))
* **layer:** introduce RasterLayer. ([e7b2653](https://github.com/iTowns/itowns/commit/e7b2653))
* **Layer:** Layer constructor parameter needs Source. ([11b8645](https://github.com/iTowns/itowns/commit/11b8645))


### Workflow and chores

* release v2.30.0 ([e69e170](https://github.com/iTowns/itowns/commit/e69e170))
* update packages. ([a5d2cad](https://github.com/iTowns/itowns/commit/a5d2cad))



<a name="2.29.2"></a>
## [2.29.2](https://github.com/iTowns/itowns/compare/v2.29.1...v2.29.2) (2021-01-26)


### Bug Fixes

* **3dTile:** don't overload the b3dm material. ([d7f14b6](https://github.com/iTowns/itowns/commit/d7f14b6))
* **PlanarControls:** fix zoom movement with an orthographic camera ([999851a](https://github.com/iTowns/itowns/commit/999851a))


### Code Refactoring

* **view:** add vector target viewToNormalizedCoords. ([b83a9c8](https://github.com/iTowns/itowns/commit/b83a9c8))


### Workflow and chores

* release v2.29.2 ([62365ea](https://github.com/iTowns/itowns/commit/62365ea))



<a name="2.29.1"></a>
## [2.29.1](https://github.com/iTowns/itowns/compare/v2.29.0...v2.29.1) (2021-01-22)


### Bug Fixes

* **PlanarControls:** fix issues related to cameraOrtho feature ([475c788](https://github.com/iTowns/itowns/commit/475c788))


### Workflow and chores

* release v2.29.1 ([3c71abc](https://github.com/iTowns/itowns/commit/3c71abc))


### Documentation

* update some deprecated doc ([d16c796](https://github.com/iTowns/itowns/commit/d16c796))
* **Camera:** modify camera.adjustAltitudeToAvoidCollisionWithLayer doc ([aabe814](https://github.com/iTowns/itowns/commit/aabe814))
* **GlobeControl:** update class constructor doc ([6fb3d28](https://github.com/iTowns/itowns/commit/6fb3d28))
* **GlobeControls:** minor correction ([7230b53](https://github.com/iTowns/itowns/commit/7230b53))
* **View:** update doc of View.getMeterToPixel method ([cc2385c](https://github.com/iTowns/itowns/commit/cc2385c))



<a name="2.29.0"></a>
# [2.29.0](https://github.com/iTowns/itowns/compare/v2.28.1...v2.29.0) (2021-01-21)


### Features

* **controls:** add damping factor property. ([22d962d](https://github.com/iTowns/itowns/commit/22d962d))
* **controls:** add option enable smart travel in planarControls ([a31873d](https://github.com/iTowns/itowns/commit/a31873d))
* **orthographic camera:** add support for an orthographic camera ([de0dba6](https://github.com/iTowns/itowns/commit/de0dba6))
* **points:** apply opacity classification on others MODE. ([e411425](https://github.com/iTowns/itowns/commit/e411425))
* **webgl:** support pick position from depth buffer with ortho ([05fb79f](https://github.com/iTowns/itowns/commit/05fb79f))


### Bug Fixes

* **ColorLayer:** wrong white to opacity effect. ([9666822](https://github.com/iTowns/itowns/commit/9666822))
* **controls:** moving camera after disabling collision. ([2dd8e06](https://github.com/iTowns/itowns/commit/2dd8e06))
* **controls:** remove prevent default in mouseDown. ([c866807](https://github.com/iTowns/itowns/commit/c866807))
* **examples:** fix key events in examples ([c187616](https://github.com/iTowns/itowns/commit/c187616))
* **PlanarControls:** remove previously instantiated controls associated ([2726101](https://github.com/iTowns/itowns/commit/2726101))
* **PlanarControls:** reset focus policy default parameters ([b56aaaf](https://github.com/iTowns/itowns/commit/b56aaaf))
* **test:** update a deprecated method call ([497d55e](https://github.com/iTowns/itowns/commit/497d55e))
* **workflow:** wrong path to build docs link. ([066f54a](https://github.com/iTowns/itowns/commit/066f54a))


### Examples

* **orthographic camera:** add examples of PlanarView with an orthographic camera ([d58c1b6](https://github.com/iTowns/itowns/commit/d58c1b6))


### Code Refactoring

* **Three:** remove deprecated matrix method. ([fffef40](https://github.com/iTowns/itowns/commit/fffef40))
* **Three:** remove deprecated quaternion method. ([f435fef](https://github.com/iTowns/itowns/commit/f435fef))


### Workflow and chores

* release v2.29.0 ([8c69ef6](https://github.com/iTowns/itowns/commit/8c69ef6))
* add action github to release and npm publish. ([eef3d53](https://github.com/iTowns/itowns/commit/eef3d53))
* add bump script. ([9e0f7b6](https://github.com/iTowns/itowns/commit/9e0f7b6))
* add changelog script. ([f7f6c40](https://github.com/iTowns/itowns/commit/f7f6c40))
* add github action to continuous integration ([e8e4f01](https://github.com/iTowns/itowns/commit/e8e4f01))
* add script to unit tests coverage. ([7c128ab](https://github.com/iTowns/itowns/commit/7c128ab))
* prepare migrating to webpack 5. ([9a549d4](https://github.com/iTowns/itowns/commit/9a549d4))
* refactoring debug npm script. ([b56f8b0](https://github.com/iTowns/itowns/commit/b56f8b0))
* **example:** rename start zoom to smart travel in key bindings description ([24c7c2b](https://github.com/iTowns/itowns/commit/24c7c2b))
* remove deprecated babel-polyfill ([2e3de03](https://github.com/iTowns/itowns/commit/2e3de03))
* remove useless integration files. ([349e1b4](https://github.com/iTowns/itowns/commit/349e1b4))
* update actions/setup-node to v2. ([e3e31c0](https://github.com/iTowns/itowns/commit/e3e31c0))
* upgrade and update lock file version to 2.0. ([537345b](https://github.com/iTowns/itowns/commit/537345b))
* **deps:** bump ini from 1.3.5 to 1.3.7 ([fd46fd1](https://github.com/iTowns/itowns/commit/fd46fd1))
* update packages. ([34ee221](https://github.com/iTowns/itowns/commit/34ee221))


### Documentation

* **workflow:** bump and changelog scripts. ([01bf159](https://github.com/iTowns/itowns/commit/01bf159))


### Others

* Update LICENSE.md ([28be05c](https://github.com/iTowns/itowns/commit/28be05c))
* Change comment on workflow remove old artifact ([7fcbb3a](https://github.com/iTowns/itowns/commit/7fcbb3a))
* Update actions checkout to v2 ([9094edc](https://github.com/iTowns/itowns/commit/9094edc))
* Update remove-old-artifacts.yml ([0a9911f](https://github.com/iTowns/itowns/commit/0a9911f))
* Create remove-old-artifacts.yml ([617326c](https://github.com/iTowns/itowns/commit/617326c))
