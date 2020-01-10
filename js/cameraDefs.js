var cameraDefs = {
    'zyla55' : {
        shortName : 'Zyla55',
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
        displayName: 'Zyla 5.5 10-Tap'},

    'zyla42' : {
        shortName : 'Zyla42',
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
        displayName: 'Zyla 4.2+ 10-Tap'},

        'balor' : {
            shortName : 'Balor',
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
            displayName: 'Balor'},

    
        'sona42' : {
        shortName : 'Sona42',
        xPixels : 2048,
        yPixels : 2048,
        xPixelSize : 11,
        yPixelSize : 11,
        readNoise : 1.6,
        readNoiseFast : 1.6,
        readNoiseSlow : 1.6,
        QE : 0.95,
        CIC : 0,
        frameRateHz : 24,
        frameRateHzFast : 24,
        frameRateHzSlow: 0.03,
        darkCurrent : 0.2,
        containerDivID : 'subContainer',
        displayName: 'Sona 4.2'},

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
        displayName : 'Idus 420 BEX2-DD'},

    'iXon888' : {
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
        displayName: 'iXon Ultra 888 BV'},

    'newton971' : {
        shortName : 'Newton971',
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
        displayName: 'Newton 971 BV'},

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
           displayName: 'iKon-M 934 BEX2-DD'}
}

var cameraKeys = Object.keys(cameraDefs);

cameraKeys.forEach(function(key){
    cameraDefs[key]['speed'] = cameraDefs[key]['frameRateHzFast']/100;
    cameraDefs[key]['spatialRes'] = 1/cameraDefs[key]['xPixelSize'];
    cameraDefs[key]['peakQE'] = cameraDefs[key]['QE'];
    cameraDefs[key]['lowDarkNoise'] = 0.00011 / cameraDefs[key]['darkCurrent'];
    cameraDefs[key]['lowReadNoise'] = 1 / cameraDefs[key]['readNoiseFast'];

    // automatically create an aspect ratio
    var x1 = cameraDefs[key]['yPixels'];
    var x2 = cameraDefs[key]['xPixels'];
    cameraDefs[key]['squareness'] =  Math.min(x1, x2) / Math.max(x1, x2);
})