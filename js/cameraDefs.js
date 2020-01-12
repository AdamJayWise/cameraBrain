// Definition for different cameras and models
// It seemed reasonable to break out each one by sensor and interface as needed
// I think I will break out the wavelengths into peak QE @ different wavelength zones
// e.g., UV (200-400), vis (400-700), NIR (700-1000)

/*
already added:

Zyla 5.5 10 tap
Zyla 4.2 10 tap
Balor 17F-12
Sona 4.2 coaxpress
Sona 4.2 USB
Idus 420 BEX2-DD
iXon Ultra 888 BV
Newton 971 BV
iKon-M 934 BEX2-DD
iKon-XL 231 BV

to add:
*/



var cameraDefs = {
    'zyla5510tap' : {
        shortName : 'zyla5510tap',
        xPixels : 2560,
        yPixels : 2160,
        xPixelSize : 6.5,
        yPixelSize : 6.5,
        readNoise : 1.6,
        readNoiseFast : 1.6,
        readNoiseSlow : 1.2,
        QE : 0.6,
        CIC : 0,
        frameRateHz : 75,
        frameRateHzFast : 75,
        frameRateHzSlow: 0.03,
        darkCurrent : 0.019,
        containerDivID : 'subContainer',
        displayName: 'Zyla 5.5 10-Tap',
        productLink : 'https://andor.oxinst.com/products/scmos-camera-series/zyla-5-5-scmos'
    },

    'zyla4210tap' : {
        shortName : 'Zyla4210tap',
        hasRealImage : true,
        xPixels : 2048,
        yPixels : 2048,
        readNoise : 1.3,
        readNoiseFast : 1.3,
        readNoiseSlow : 1.1 ,
        xPixelSize : 6.5,
        yPixelSize : 6.5,
        QE : 0.83,
        CIC : 0,
        frameRateHz : 101,
        frameRateHzFast : 101,
        frameRateHzSlow: 0.03,
        darkCurrent : 0.019,
        containerDivID : 'subContainer',
        displayName: 'Zyla 4.2+ 10-Tap',
        productLink : 'https://andor.oxinst.com/products/scmos-camera-series/zyla-4-2-scmos'
    },

    'neo' : {
        shortName : 'neo',
        hasRealImage : true,
        xPixels : 2560,
        yPixels : 2160,
        readNoise : 1,
        readNoiseFast : 1,
        readNoiseSlow : 1 ,
        xPixelSize : 6.5,
        yPixelSize : 6.5,
        QE : 0.6,
        CIC : 0,
        frameRateHz : 100,
        frameRateHzFast : 100,
        frameRateHzSlow: 0.03,
        darkCurrent : 0.007,
        containerDivID : 'subContainer',
        displayName: 'Neo 5.5',
        productLink : 'https://andor.oxinst.com/products/scmos-camera-series/neo-5-5-scmos'
    },


        'balor' : {
            shortName : 'balor',
            hasRealImage : true,
            xPixels : 4128,
            yPixels : 4104,
            readNoise : 2.9,
            readNoiseFast : 2.9,
            readNoiseSlow : 2.9 ,
            xPixelSize : 12,
            yPixelSize : 12,
            QE : 0.61,
            CIC : 0,
            frameRateHz : 54,
            frameRateHzFast : 54,
            frameRateHzSlow: 0.03,
            darkCurrent : 0.03,
            containerDivID : 'subContainer',
            displayName: 'Balor 17F-12',
            productLink : 'https://andor.oxinst.com/products/scmos-camera-series/balor-scmos',
        },

    
        'sona42b6coax' : {
        shortName : 'Sona42b6coax',
        xPixels : 2048,
        yPixels : 2048,
        xPixelSize : 6.5,
        yPixelSize : 6.5,
        readNoise : 1.2,
        readNoiseFast : 1.2,
        readNoiseSlow : 1.6,
        QE : 0.95,
        CIC : 0,
        frameRateHz : 74,
        frameRateHzFast : 74,
        frameRateHzSlow: 43,
        darkCurrent : 0.1,
        containerDivID : 'subContainer',
        displayName: 'Sona 4.2B-6 (CoaXPress)',
        productLink : 'https://andor.oxinst.com/products/scmos-camera-series/sona-scmos',
    },

    'sona42b6usb' : {
        shortName : 'Sona42b6usb',
        xPixels : 2048,
        yPixels : 2048,
        xPixelSize : 6.5,
        yPixelSize : 6.5,
        readNoise : 1.2,
        readNoiseFast : 1.2,
        readNoiseSlow : 1.6,
        QE : 0.95,
        CIC : 0,
        frameRateHz : 43,
        frameRateHzFast : 40,
        frameRateHzSlow: 43,
        darkCurrent : 0.1,
        containerDivID : 'subContainer',
        displayName: 'Sona 4.2B-6 (USB3)',
        productLink : 'https://andor.oxinst.com/products/scmos-camera-series/sona-scmos',
    },

    'idus420' : {
        shortName : 'idus420',
        xPixels : 1024,
        yPixels : 255,
        xPixelSize : 26,
        yPixelSize : 26,
        readNoise : 10,
        readNoiseFast: 10,
        readNoiseSlow: 4,
        QE : 0.95,
        frameRateHz : 0.34,
        frameRateHzFast: 0.34,
        frameRateHzSlow: 0.03,    
        darkCurrent : 0.008,    
        containerDivID : 'subContainer',
        displayName : 'Idus 420 BEX2-DD',
        productLink : 'https://andor.oxinst.com/products/idus-spectroscopy-cameras/idus-420',
    },

    'iXon888bv' : {
        shortName : 'iXonUltra888',
        xPixels : 1024,
        yPixels : 1024,
        xPixelSize : 13,
        yPixelSize : 13,    
        readNoise : 0.13,
        readNoiseFast: 0.13,
        readNoiseSlow: 0.012,
        QE : 0.95,
        CIC : 0.005,
        darkCurrent : 0.00011,
        frameRateHz : 26,
        frameRateHzFast: 26,
        frameRateHzSlow: 0.03,
        emGain : 1,
        containerDivID : 'subContainer',
        displayName: 'iXon Ultra 888 BV',
        productLink : 'https://andor.oxinst.com/products/ixon-emccd-camera-series/ixon-ultra-888',
    },

    'iXonUltra897bv' : {
        shortName : 'iXonUltra897bv',
        xPixels : 512,
        yPixels : 512,
        xPixelSize : 16,
        yPixelSize : 16,    
        readNoise : 0.13,
        readNoiseFast: 0.13,
        readNoiseSlow: 0.012,
        QE : 0.95,
        CIC : 0.005,
        darkCurrent : 0.00011,
        frameRateHz : 56,
        frameRateHzFast: 56,
        frameRateHzSlow: 0.12,
        emGain : 1,
        containerDivID : 'subContainer',
        displayName: 'iXon Ultra 897 BV',
        productLink : 'https://andor.oxinst.com/products/ixon-emccd-camera-series/ixon-ultra-897',
    },

    'newton971bv' : {
        shortName : 'Newton971bv',
        xPixels : 1600,
        yPixels : 400,
        xPixelSize : 16,
        yPixelSize : 16,
        readNoise : 0.04,
        readNoiseFast : 0.04,
        readNoiseSlow : 0.0028,
        QE : 0.95,
        frameRateHz : 10,
        frameRateHzFast : 10,
        frameRateHzSlow: 0.03,
        darkCurrent : 0.00020,
        containerDivID : 'subContainer',
        emGain : 1, 
        displayName: 'Newton 971 BV',
        productLink : 'https://andor.oxinst.com/products/newton-ccd-and-emccd-cameras/newton-971',
    },

    'newton970bv' : {
        shortName : 'Newton970bv',
        xPixels : 1600,
        yPixels : 200,
        xPixelSize : 16,
        yPixelSize : 16,
        readNoise : 0.04,
        readNoiseFast : 0.04,
        readNoiseSlow : 0.0028,
        QE : 0.95,
        frameRateHz : 20,
        frameRateHzFast : 20,
        frameRateHzSlow: 0.06,
        darkCurrent : 0.00020,
        containerDivID : 'subContainer',
        emGain : 1, 
        displayName: 'Newton 970 BV',
        productLink : 'https://andor.oxinst.com/products/newton-ccd-and-emccd-cameras/newton-970',
    },

        'iKonM934-BEX2-DD' : {
            shortName : 'iKonM934',
            xPixels : 1024,
            yPixels : 1024,
            xPixelSize : 13.3,
            yPixelSize : 13.3,
            readNoise : 11.6,
            readNoiseFast : 11.6,
            readNoiseSlow : 2.9,
            darkCurrent : 0.00012,
            QE : 0.95,
            CIC : 0,
            frameRateHz : 2.6,
            frameRateHzFast : 2.6,
            frameRateHzSlow: 0.03 ,
           containerDivID : 'subContainer',
           displayName: 'iKon-M 934 BEX2-DD',
            productLink : 'https://andor.oxinst.com/products/ikon-xl-and-ikon-large-ccd-series/ikon-m-934',
        },

        'iKonL936-BV' : {
            shortName : 'iKonL936-BV',
            xPixels : 2048,
            yPixels : 2048,
            xPixelSize : 13.5,
            yPixelSize : 13.5,
            readNoise : 2.9,
            readNoiseFast : 2.9,
            readNoiseSlow : 2.9,
            darkCurrent : 0.000059,
            QE : 0.95,
            CIC : 0,
            frameRateHz : 1,
            frameRateHzFast : 1,
            frameRateHzSlow: 0.011 ,
           containerDivID : 'subContainer',
           displayName: 'iKon-L 936 BV',
            productLink : 'https://andor.oxinst.com/products/ikon-xl-and-ikon-large-ccd-series/ikon-l-936',
        },

        'iKonXL231-BV' : {
            shortName : 'iKonXL231-BV',
            xPixels : 4096,
            yPixels : 4108,
            xPixelSize : 15,
            yPixelSize : 15,
            readNoise : 2.1,
            readNoiseFast : 9.8,
            readNoiseSlow : 2.1,
            darkCurrent : 0.00013,
            QE : 0.95,
            CIC : 0,
            frameRateHz : 0.5,
            frameRateHzFast : 0.5,
            frameRateHzSlow: 0.022 ,
           containerDivID : 'subContainer',
           displayName: 'iKon-XL 231 BV',
            productLink : 'https://andor.oxinst.com/products/ikon-xl-and-ikon-large-ccd-series/ikon-xl-231',
        }


}

var cameraKeys = Object.keys(cameraDefs);

cameraKeys.forEach(function(key){

    // generic camera "speed" - just using the fastest framerate / 100
    cameraDefs[key]['speed'] = cameraDefs[key]['frameRateHzFast']/100;

    // Spatial resolution, just using inverse of pixel size.  range is [6/26,1]
    cameraDefs[key]['spatialRes'] = 6.5/cameraDefs[key]['xPixelSize'];

    // Peak QE, just in [0,1]
    cameraDefs[key]['peakQE'] = cameraDefs[key]['QE'];

    // Dark noise score, should revise this somehow
    cameraDefs[key]['lowDarkNoise'] = 0.00011 / cameraDefs[key]['darkCurrent'];

    // read noise score, should revise this somehow
    cameraDefs[key]['lowReadNoise'] = 1 / Math.sqrt(cameraDefs[key]['readNoiseFast']);

    // squareness score, just the aspect ratio
    var x1 = cameraDefs[key]['yPixels'];
    var x2 = cameraDefs[key]['xPixels'];
    cameraDefs[key]['squareness'] =  Math.min(x1, x2) / Math.max(x1, x2);

    // number of pixels score
    cameraDefs[key]['numPixels'] = cameraDefs[key]['xPixels'] * cameraDefs[key]['yPixels'] / 16941312;

    // Sensor diagonal / size score
    var xSize = (cameraDefs[key]['xPixels'] * cameraDefs[key]['xPixelSize']);
    var ySize = (cameraDefs[key]['yPixels'] * cameraDefs[key]['yPixelSize']);
    cameraDefs[key]['sensorArea'] = Math.sqrt( xSize**2 + ySize**2) / 87016.65	;
})