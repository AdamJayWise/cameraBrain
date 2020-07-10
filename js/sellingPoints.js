var sp = {}; // local variable object for selling points related stuff

var sellingPoints = { 
    
    // camera short name 
    'zyla4210tap' : 
    // key selling points and relative importances against key parameters
    { 
        '82% Peak QE' : {'peakQE' : 1},

    },
    
        // camera short name 
        'balor' : 
        // key selling points and relative importances against key parameters
        { 
            'Exceptionally fast 18.5 ms readout' : {'speed' : 1},
            '49.5 x 49.2 mm sensor' : {'sensorArea' : 1},
        },

}

sp['cameraKeys'] = Object.keys(cameraDefs);

//automatically generate some selling points
sp.cameraKeys.forEach(function(key){
    
    if (!sellingPoints[key]){
        sellingPoints[key] = {};
    }
    
    // create a selling point for camera frame rate
    var speedSp = `Up to ${cameraDefs[key]['frameRateHzFast']} frames per second, full frame`;
    sellingPoints[key][speedSp] = {'speed' : 1};

    // create a selling point for camera diagonal size
    var diagSp = `${Math.round( 10 * cameraDefs[key]['sensorDiagMm']) / 10}mm-Diagonal Sensor`;
    sellingPoints[key][diagSp] = {'sensorArea' : 1};

    // create a selling point for minimum dark current
    var sp = `Dark Current as Low as ${cameraDefs[key]['darkCurrent']} electrons/pixel/second`;
    sellingPoints[key][sp] = {'lowDarkNoise' : 1};

    // create a selling point for low dark noise
    // if EM gain, say <1
    if (cameraDefs[key]['emGain']){
        var sp = `<1 electron read noise`;
        sellingPoints[key][sp] = {'lowReadNoise' : 1};
    }
    // else give the read noise
    if (!cameraDefs[key]['emGain']){
        var sp = `Read noise as low as ${cameraDefs[key]['readNoiseSlow']} electrons`;
        sellingPoints[key][sp] = {'lowReadNoise' : 1};
    }

    // create a selling point for n pixels
    var sp = `${Math.round( 10 * cameraDefs[key]['xPixels'] * cameraDefs[key]['yPixels'] / 10**6)/10} megapixel sensor`;
    sellingPoints[key][sp] = {'numPixels' : 1};

    // create a selling point for pixel size
    var sp = `${cameraDefs[key]['xPixelSize']} um pixels`;
    sellingPoints[key][sp] = {'spatialRes' : 1};

    // create a selling point for specific QE at some wavelength
    var qeWavelenths = ['300', '550', '800', '1000']
    qeWavelenths.forEach(function(l){
        var sp = `~${ Math.round(100 * cameraDefs[key]['QE'+l])}% quantum efficiency @ ${l}nm`;
        var QEtag = 'QE'+l
        sellingPoints[key][sp] = {};
        sellingPoints[key][sp]['QE' + l] = 1;
    });

    // create a selling point for peak qe
    var sp = `${cameraDefs[key]['peakQE']*100}% Peak Quantum Efficiency`;
    sellingPoints[key][sp] = {'peakQE' : 1};

    // intensified camera selling points

    // create a selling point for intensifier gate width
    var sp = `${cameraDefs[key]['minGateWidth']} ns Minimum Gate Width`;
    sellingPoints[key][sp] = {'maxGateSpeed' : 1};
    

    
})