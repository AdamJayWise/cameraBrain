var tooltips = {
    'speed' : "This parameter describes the maximum, full-frame frame rate of the camera.  Reading out only a portion of the sensor - usually referred to as a Region of Interst or ROI - will often be significantly faster",
    'spatialRes' : "The spatial resolution of the sensor in terms of pixel size.  Smaller pixel size, all else being equal, means higher spatial resolution.",
    'peakQE' : "Maximum sensor quantum efficiency, regardless of wavlength.",
    'QE300' : 'Sensor quantum efficiency at 300nm, in terms of photons in vs. electrons out.',
    'QE550' : 'Sensor quantum efficiency at 550nm, in terms of photons in vs. electrons out.',
    'QE800' : 'Sensor quantum efficiency at 800nm, in terms of photons in vs. electrons out.',
    'QE1000' : 'Sensor quantum efficiency at 1000nm, in terms of photons in vs. electrons out.',
    'lowDarkNoise' : 'Rate sensors by low dark noise.  Dark noise refers to thermally generated counts which, if not controlled, can swamp real signals from incoming light.',
    'lowReadNoise' : 'Rate sensors by low read noise.  Read noise refers to noise generated when quantifying the amount of light captured by the sensor, and excessive read noise can swamp attempts to measure weak signals.',
    'squareness' : 'Preference cameras with square sensors.  Square sensors are generally better for imaging applications, while narrow rectangular sensors are preferable for spectroscopy applications.',
    'rectangularness' : 'Preference cameras with narrow rectangular sensors. Square sensors are generally better for imaging applications, while narrow rectangular sensors are preferable for spectroscopy applications.',
    'numPixels' : 'Preference cameras with large numbers of pixels in the active area.  More pixels means, all else being equal, means more data can be captured in a single acquisition.',
    'sensorArea' : 'Preference cameras with physically large sensors.  All else being equal, a larger sensor can capture a wider field of view e.g. in a microscope or telescope.',
    'intensified' : 'Preference cameras with image intensifiers.  Intensifiers allow for high temporal (time) resolution, and provide signifiant gain.',
    'maxGateSpeed' : 'Preference cameras with short intensifier gate widths.  Shorter gate widths allow finer time resolution.',
    'QE10eV' : 'Sensor quantum efficiency at 10 electron Volts, in terms of photons in vs. electrons out.',
    'QE100eV' : 'Sensor quantum efficiency at 100 electron Volts, in terms of photons in vs. electrons out.',
    'QE1000eV' : 'Sensor quantum efficiency at 1,000 electron Volts, in terms of photons in vs. electrons out.',
    'QE4000eV' : 'Sensor quantum efficiency at 4,000 electron Volts, in terms of photons in vs. electrons out.',
    'QE10000eV' : 'Sensor quantum efficiency at 10,000 electron Volts, in terms of photons in vs. electrons out.',

    'vacuumFlange':'Preference cameras mounted on conflat (CF) vacuum flanges with exposed sensors.  These cameras must be mounted facing into a vacuum chamber in order to function.',
    'hed' : 'Preference cameras specifically designed for high energy detection',
    'BeWindow' : 'Preference cameras with a Beryllium vacuum chamber window.  A Beryllium window filters out visible light and soft x-rays, but allows harder (higher energy) x-rays to pass.',



}
