// Definition for different cameras and models
// It seemed reasonable to break out each one by sensor and interface as needed
// I think I will break out the wavelengths into peak QE @ different wavelength zones
// e.g., UV (200-400), vis (400-700), NIR (700-1000)

/*


already added:

Balor 17F-12
iKon-L 936 BV
iKon-M 934 BEX2-DD
iKon-XL 231 BV
iXon Ultra 888 BV
iXon Ultra 897 BV
iDus DU420 BEX2-DD
iDus DU420 BR-DD
iDus DU420 BU
iDus DU420 BU2
iDus DU420 BVF
iDus DU420 OE
Marana 4.2B-11 BV
Neo 5.5
Newton 970 BV
Newton 971 BV
Sona 2.0B-11 (USB3)
Sona 4.2B-11 (USB3)
Sona 4.2B-6 (CoaXPress)
Sona 4.2B-6 (USB3)
Zyla 4.2+ (10-Tap)
Zyla 4.2+ (USB 3.0)
Zyla 5.5 (10-Tap)
Zyla 5.5 (USB 3.0)


DH340T-18U-E3
DH340T-25F-03


to add:
ixon 888 exf
ixon 897 bv
ixon 897 exf
Marana (variants?)
*/


var cameraKeys = Object.keys(cameraDefs);

cameraKeys.forEach(function(key){
    cameraDefs[key]
})

cameraKeys.forEach(function(key){

    // intensified camera gate width
    cameraDefs[key]['maxGateSpeed'] = 1 / cameraDefs[key]['minGateWidth'] / (1/2);

    // generic camera "speed" - just using the fastest framerate / 100
    cameraDefs[key]['speed'] = cameraDefs[key]['frameRateHz']/100;

    // Spatial resolution, just using inverse of pixel size.  range is [6/26,1]
    cameraDefs[key]['spatialRes'] = 6.5/cameraDefs[key]['xPixelSize'];

    // Peak QE, just in [0,1]
    cameraDefs[key]['peakQE'] = cameraDefs[key]['QE'];

    // Dark noise score, should revise this somehow
    cameraDefs[key]['lowDarkNoise'] = 0.00011 / cameraDefs[key]['darkCurrent'] / 1.8;

    // read noise score, should revise this somehow
    cameraDefs[key]['lowReadNoise'] = (1 / cameraDefs[key]['readNoise']) / 25;

    // squareness score, just the aspect ratio
    var x1 = cameraDefs[key]['yPixels'];
    var x2 = cameraDefs[key]['xPixels'];
    cameraDefs[key]['squareness'] =  Math.min(x1, x2) / Math.max(x1, x2);

    // rectangularness score, just the inverse of aspect ratio
    var x1 = cameraDefs[key]['yPixels'];
    var x2 = cameraDefs[key]['xPixels'];
    cameraDefs[key]['rectangularness'] =  Math.max(x1, x2) / Math.min(x1, x2) / 8;


    // number of pixels score
    cameraDefs[key]['numPixels'] = cameraDefs[key]['xPixels'] * cameraDefs[key]['yPixels'] / 16941312;

    // Sensor diagonal / size score
    var xSize = (cameraDefs[key]['xPixels'] * cameraDefs[key]['xPixelSize']);
    var ySize = (cameraDefs[key]['yPixels'] * cameraDefs[key]['yPixelSize']);
    cameraDefs[key]['sensorDiagMm'] = Math.sqrt( (xSize/1000)**2 + (ySize/1000)**2)
    cameraDefs[key]['sensorArea'] = Math.sqrt( xSize**2 + ySize**2) / 87016.65	;
    cameraDefs[key]['sensorAreamm2'] = xSize * ySize / 55268 ;

})

var haveThese = '';
Object.keys(cameraDefs).sort().forEach(function(e){haveThese = haveThese + (cameraDefs[e]['displayName'] + '\n')});
console.log(haveThese)

