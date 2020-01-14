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
Neo sCMOS
Marana 4.2B-11 BV

to add:
Zyla 4.2 USB
zyla 5.5 USB
Marana (variants?)
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
        QE300 : 0.05,
        QE550 : 0.6,
        QE800 : 0.3,  
        QE1000: 0.05,
        CIC : 0,
        frameRateHz : 75,
        frameRateHzFast : 75,
        frameRateHzSlow: 0.03,
        darkCurrent : 0.019,
        displayName: 'Zyla 5.5 10-Tap',
        productLink : 'https://andor.oxinst.com/products/scmos-camera-series/zyla-5-5-scmos',
        imgFile : 'zyla.png',
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
        QE300 : 0.07,
        QE550 : 0.83,
        QE800 : 0.48,  
        QE1000: 0.06,
        CIC : 0,
        frameRateHz : 101,
        frameRateHzFast : 101,
        frameRateHzSlow: 0.03,
        darkCurrent : 0.019,
        containerDivID : 'subContainer',
        displayName: 'Zyla 4.2+ 10-Tap',
        productLink : 'https://andor.oxinst.com/products/scmos-camera-series/zyla-4-2-scmos',
        imgFile : 'zyla.png',
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
        QE300 : 0.05,
        QE550 : 0.6,
        QE800 : 0.3,  
        QE1000: 0.05,
        CIC : 0,
        frameRateHz : 100,
        frameRateHzFast : 100,
        frameRateHzSlow: 0.03,
        darkCurrent : 0.007,
        containerDivID : 'subContainer',
        displayName: 'Neo 5.5',
        productLink : 'https://andor.oxinst.com/products/scmos-camera-series/neo-5-5-scmos',
        imgFile : 'neo.png',
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
            QE300 : 0.05,
            QE550 : 0.62,
            QE800 : 0.42,  
            QE1000: 0.06,
            wellDepth : 80000,
            CIC : 0,
            frameRateHz : 54,
            frameRateHzFast : 54,
            frameRateHzSlow: 0.03,
            darkCurrent : 0.03,
            containerDivID : 'subContainer',
            displayName: 'Balor 17F-12',
            productLink : 'https://andor.oxinst.com/products/scmos-camera-series/balor-scmos',
            imgFile : 'balor.png',
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
        QE300 : 0.33,
        QE550 : 0.95,
        QE800 : 0.60,  
        QE1000: 0.18,
        CIC : 0,
        frameRateHz : 74,
        frameRateHzFast : 74,
        frameRateHzSlow: 43,
        darkCurrent : 0.1,
        containerDivID : 'subContainer',
        displayName: 'Sona 4.2B-6 (CoaXPress)',
        productLink : 'https://andor.oxinst.com/products/scmos-camera-series/sona-scmos',
        imgFile : 'sona.png'
    },

    'sona42b6usb' : {
        shortName : 'Sona42b6usb',
        xPixels : 2048,
        yPixels : 2048,
        xPixelSize : 6.5,
        yPixelSize : 6.5,
        readNoise : 1.2,
        readNoiseFast : 1.2,
        readNoiseSlow : 1.2,
        QE : 0.95,
        QE300 : 0.33,
        QE550 : 0.95,
        QE800 : 0.60,  
        QE1000: 0.18,
        CIC : 0,
        frameRateHz : 43,
        frameRateHzFast : 43,
        frameRateHzSlow: 40,
        darkCurrent : 0.1,
        containerDivID : 'subContainer',
        displayName: 'Sona 4.2B-6 (USB3)',
        productLink : 'https://andor.oxinst.com/products/scmos-camera-series/sona-scmos',
        imgFile : 'sona.png'
    },

    'sona42b11usb' : {
        shortName : 'Sona42b11usb',
        xPixels : 2048,
        yPixels : 2048,
        xPixelSize : 11,
        yPixelSize : 11,
        readNoise : 1.6,
        readNoiseFast : 1.6,
        readNoiseSlow : 1.6,
        QE : 0.95,
        QE300 : 0.33,
        QE550 : 0.95,
        QE800 : 0.60,  
        QE1000: 0.18,
        CIC : 0,
        frameRateHz : 48,
        frameRateHzFast : 48,
        frameRateHzSlow: 24,
        darkCurrent : 0.3,
        dynamicRange : 53000,
        containerDivID : 'subContainer',
        displayName: 'Sona 4.2B-11 (USB3)',
        productLink : 'https://andor.oxinst.com/products/scmos-camera-series/sona-scmos',
        imgFile : 'sona.png',
    },

    'sona20b11usb' : {
        shortName : 'Sona20b11usb',
        xPixels : 1400,
        yPixels : 1400,
        xPixelSize : 11,
        yPixelSize : 11,
        readNoise : 1.6,
        readNoiseFast : 1.6,
        readNoiseSlow : 1.6,
        QE : 0.95,
        QE300 : 0.33,
        QE550 : 0.95,
        QE800 : 0.60,  
        QE1000: 0.18,
        CIC : 0,
        frameRateHz : 48,
        frameRateHzFast : 48,
        frameRateHzSlow: 24,
        darkCurrent : 0.3,
        dynamicRange : 53000,
        containerDivID : 'subContainer',
        displayName: 'Sona 2.0B-11 (USB3)',
        productLink : 'https://andor.oxinst.com/products/scmos-camera-series/sona-scmos',
        imgFile : 'sona.png',
    },

    'idus420BEX2DD' : {
        shortName : 'idus420',
        xPixels : 1024,
        yPixels : 255,
        xPixelSize : 26,
        yPixelSize : 26,
        readNoise : 4,
        readNoiseFast: 4,
        readNoiseSlow: 4,
        QE : 0.95,
        QE300 : 0.20,
        QE550 : 0.90,
        QE800 : 0.95,  
        QE1000: 0.33,
        frameRateHz : 0.34,
        frameRateHzFast: 0.34,
        frameRateHzSlow: 0.03,    
        darkCurrent : 0.008,    
        containerDivID : 'subContainer',
        displayName : 'Idus 420 BEX2-DD',
        productLink : 'https://andor.oxinst.com/products/idus-spectroscopy-cameras/idus-420',
        imgFile : 'idus420.png'
    },

    'idus420BBU2' : {
        shortName : 'idus420bu2',
        xPixels : 1024,
        yPixels : 255,
        xPixelSize : 26,
        yPixelSize : 26,
        readNoise : 4,
        readNoiseFast: 4,
        readNoiseSlow: 4,
        QE : 0.95,
        QE300 : 0.60,
        QE550 : 0.64,
        QE800 : 0.54,  
        QE1000: 0.10,
        frameRateHz : 0.34,
        frameRateHzFast: 0.34,
        frameRateHzSlow: 0.03,    
        darkCurrent : 0.002,    

        displayName : 'Idus 420 BU2',
        productLink : 'https://andor.oxinst.com/products/idus-spectroscopy-cameras/idus-420',
        imgFile : 'idus420.png'
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
        QE300 : 0.12,
        QE550 : 0.95,
        QE800 : 0.70,  
        QE1000: 0.10,
        CIC : 0.005,
        darkCurrent : 0.00011,
        frameRateHz : 26,
        frameRateHzFast: 26,
        frameRateHzSlow: 0.03,
        emGain : 1,
        containerDivID : 'subContainer',
        displayName: 'iXon Ultra 888 BV',
        productLink : 'https://andor.oxinst.com/products/ixon-emccd-camera-series/ixon-ultra-888',
        imgFile : 'ixonultra.png'
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
        QE300 : 0.12,
        QE550 : 0.95,
        QE800 : 0.70,  
        QE1000: 0.10,
        CIC : 0.005,
        darkCurrent : 0.00011,
        frameRateHz : 56,
        frameRateHzFast: 56,
        frameRateHzSlow: 0.12,
        emGain : 1,
        containerDivID : 'subContainer',
        displayName: 'iXon Ultra 897 BV',
        productLink : 'https://andor.oxinst.com/products/ixon-emccd-camera-series/ixon-ultra-897',
        imgFile : 'ixonultra.png'
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
        QE300 : 0.12,
        QE550 : 0.95,
        QE800 : 0.70,  
        QE1000: 0.10,
        frameRateHz : 10,
        frameRateHzFast : 10,
        frameRateHzSlow: 0.03,
        darkCurrent : 0.00020,
        containerDivID : 'subContainer',
        emGain : 1, 
        displayName: 'Newton 971 BV',
        productLink : 'https://andor.oxinst.com/products/newton-ccd-and-emccd-cameras/newton-971',
        imgFile : 'newton971.png'
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
        QE300 : 0.12,
        QE550 : 0.95,
        QE800 : 0.70,  
        QE1000: 0.10,
        frameRateHz : 20,
        frameRateHzFast : 20,
        frameRateHzSlow: 0.06,
        darkCurrent : 0.00020,
        containerDivID : 'subContainer',
        emGain : 1, 
        displayName: 'Newton 970 BV',
        productLink : 'https://andor.oxinst.com/products/newton-ccd-and-emccd-cameras/newton-970',
        imgFile : 'newton971.png'
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
            QE : 0.93,
            QE300 : 0.20,
            QE550 : 0.90,
            QE800 : 0.95,  
            QE1000: 0.33,
            CIC : 0,
            frameRateHz : 2.6,
            frameRateHzFast : 2.6,
            frameRateHzSlow: 0.03 ,
           containerDivID : 'subContainer',
           displayName: 'iKon-M 934 BEX2-DD',
            productLink : 'https://andor.oxinst.com/products/ikon-xl-and-ikon-large-ccd-series/ikon-m-934',
            imgFile : 'ikonm.png'
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
            QE300 : 0.12,
            QE550 : 0.95,
            QE800 : 0.70,  
            QE1000: 0.10,
            CIC : 0,
            frameRateHz : 1,
            frameRateHzFast : 1,
            frameRateHzSlow: 0.011 ,
           containerDivID : 'subContainer',
           displayName: 'iKon-L 936 BV',
            productLink : 'https://andor.oxinst.com/products/ikon-xl-and-ikon-large-ccd-series/ikon-l-936',
            imgFile : 'ikonl.png',
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
            QE300 : 0.12,
            QE550 : 0.95,
            QE800 : 0.70,  
            QE1000: 0.10,
            CIC : 0,
            frameRateHz : 0.5,
            frameRateHzFast : 0.5,
            frameRateHzSlow: 0.022 ,
           containerDivID : 'subContainer',
           displayName: 'iKon-XL 231 BV',
            productLink : 'https://andor.oxinst.com/products/ikon-xl-and-ikon-large-ccd-series/ikon-xl-231',
            imgFile : 'ikonxl.png',

        },

        'marana4211b-bv' : {
            shortName : 'marana4211b-bv',
            xPixels : 2048,
            yPixels : 2048,
            xPixelSize : 11,
            yPixelSize : 11,
            readNoise : 1.6,
            readNoiseFast : 1.6,
            readNoiseSlow : 1.6,
            darkCurrent : 0.2,
            QE : 0.95,
            QE300 : 0.33,
            QE550 : 0.95,
            QE800 : 0.60,  
            QE1000: 0.15,
            CIC : 0,
            frameRateHz : 48,
            frameRateHzFast : 48,
            frameRateHzSlow: 24 ,
           displayName: 'Marana 4.2B-11 BV',
            productLink : 'https://andor.oxinst.com/products/scmos-camera-series/marana-scmos',
            imgFile : 'marana.png',

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
    cameraDefs[key]['lowDarkNoise'] = 0.00011 / cameraDefs[key]['darkCurrent'] / 1.8;

    // read noise score, should revise this somehow
    cameraDefs[key]['lowReadNoise'] = (1 / cameraDefs[key]['readNoiseFast']) / 25;

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
})