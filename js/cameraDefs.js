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

var cameraDefs = {"DH340T-18U-E3": {"shortName": "DH340T-18U-E3", "displayName": "iStar CCD DH340T-18U-E3", "CIC": 0.0, "QE": 0.22, "QE300": 0.22, "QE550": 0.08, "QE800": 0.02, "QE1000": 0.0, "darkCurrent": 0.04, "frameRateHz": 2.5, "frameRateHzFast": 2.5, "frameRateHzSlow": 2.5, "imgFile": "istarCCD.png", "intensified": true, "intensifierAperture": 18.0, "intensifierRes": 25.0, "maxRelGain": 300.0, "minGateWidth": 2.0, "productLink": "https://andor.oxinst.com/products/istar-intensified-cameras?gclid=Cj0KCQjwo6D4BRDgARIsAA6uN1-NEMjrGPn0GpQCaltsyUKm7kXuiZc355dmsOhqAoghzX0aDAaMgTEaAgZ-EALw_wcB", "readNoise": 1.6, "readNoiseFast": 6.0, "readNoiseSlow": 6.0, "spectralRateCrop": 1825.0, "spectralRateFVB": 135.0, "spectralRateKinetic26um": 30030.0, "xPixels": 2048.0, "xPixelSize": 13.5, "yPixels": 512.0, "yPixelSize": 13.5}, "DH340T-25F-03": {"shortName": "DH340T-25F-03", "displayName": "iStar CCD DH340T-25F-03", "CIC": 0.0, "QE": 0.17, "QE300": 0.13, "QE550": 0.1, "QE800": 0.02, "QE1000": 0.0, "darkCurrent": 0.04, "frameRateHz": 2.5, "frameRateHzFast": 2.5, "frameRateHzSlow": 2.5, "imgFile": "istarCCD.png", "intensified": true, "intensifierAperture": 25.0, "intensifierRes": 25.0, "maxRelGain": 1000.0, "minGateWidth": 7.0, "productLink": "https://andor.oxinst.com/products/istar-intensified-cameras?gclid=Cj0KCQjwo6D4BRDgARIsAA6uN1-NEMjrGPn0GpQCaltsyUKm7kXuiZc355dmsOhqAoghzX0aDAaMgTEaAgZ-EALw_wcB", "readNoise": 1.6, "readNoiseFast": 6.0, "readNoiseSlow": 6.0, "spectralRateCrop": 1825.0, "spectralRateFVB": 135.0, "spectralRateKinetic26um": 30030.0, "xPixels": 2048.0, "xPixelSize": 13.5, "yPixels": 512.0, "yPixelSize": 13.5}, "DO920P-BEN": {"shortName": "DO920P-BEN", "displayName": "Newton SO DO920P-BEN", "CIC": 0.0, "QE": 0.95, "QE300": 0.18, "QE550": 0.63, "QE800": 0.41, "QE1000": 0.35, "darkCurrent": 0.0003, "frameRateHz": 2.5, "frameRateHzFast": 2.5, "frameRateHzSlow": 2.5, "imgFile": "newtonSO.png", "productLink": "https://andor.oxinst.com/assets/uploads/products/andor/documents/andor-newton-so-specifications.pdf", "readNoise": 4.0, "readNoiseFast": 20.0, "readNoiseSlow": 4.0, "xPixels": 1024.0, "xPixelSize": 26.0, "yPixels": 255.0, "yPixelSize": 26.0, "hed": true, "QE10eV": 0.27, "QE100eV": 0.93, "QE1000eV": 0.97, "QE4000eV": 0.8, "QE10000eV": 0.1}, "DO920P-BN": {"shortName": "DO920P-BN", "displayName": "Newton SO DO920P-BN", "CIC": 0.0, "QE": 0.95, "QE300": 0.16, "QE550": 0.0, "QE800": 0.0, "QE1000": 0.0, "darkCurrent": 0.0003, "frameRateHz": 2.5, "frameRateHzFast": 2.5, "frameRateHzSlow": 2.5, "imgFile": "newtonSO.png", "productLink": "https://andor.oxinst.com/assets/uploads/products/andor/documents/andor-newton-so-specifications.pdf", "readNoise": 4.0, "readNoiseFast": 20.0, "readNoiseSlow": 4.0, "xPixels": 1024.0, "xPixelSize": 26.0, "yPixels": 255.0, "yPixelSize": 26.0, "hed": true, "QE10eV": 0.17, "QE100eV": 0.84, "QE1000eV": 0.97, "QE4000eV": 0.0, "QE10000eV": 0.0}, "DO920P-FI": {"shortName": "DO920P-FI", "displayName": "Newton SO DO920P-FI", "CIC": 0.0, "QE": 0.7, "QE300": 0.0, "QE550": 0.0, "QE800": 0.0, "QE1000": 0.0, "darkCurrent": 0.0001, "frameRateHz": 2.5, "frameRateHzFast": 2.5, "frameRateHzSlow": 2.5, "imgFile": "newtonSO.png", "productLink": "https://andor.oxinst.com/assets/uploads/products/andor/documents/andor-newton-so-specifications.pdf", "readNoise": 4.0, "readNoiseFast": 20.0, "readNoiseSlow": 4.0, "xPixels": 1024.0, "xPixelSize": 26.0, "yPixels": 255.0, "yPixelSize": 26.0, "hed": true, "QE10eV": 0.0, "QE100eV": 0.0, "QE1000eV": 0.3, "QE4000eV": 0.7, "QE10000eV": 0.1}, "DO920P-BR-DD": {"shortName": "DO920P-BR-DD", "displayName": "Newton SO DO920P-BR-DD", "CIC": 0.0, "QE": 0.7, "QE300": 0.0, "QE550": 0.0, "QE800": 0.0, "QE1000": 0.0, "darkCurrent": 0.003, "frameRateHz": 2.5, "frameRateHzFast": 2.5, "frameRateHzSlow": 2.5, "imgFile": "newtonSO.png", "productLink": "https://andor.oxinst.com/assets/uploads/products/andor/documents/andor-newton-so-specifications.pdf", "readNoise": 4.0, "readNoiseFast": 20.0, "readNoiseSlow": 4.0, "xPixels": 1024.0, "xPixelSize": 26.0, "yPixels": 255.0, "yPixelSize": 26.0, "hed": true, "QE10eV": 0.0, "QE100eV": 0.03, "QE1000eV": 0.67, "QE4000eV": 0.9, "QE10000eV": 0.28}, "DO940P-BEN          ": {"shortName": "DO940P-BEN", "displayName": "Newton SO DO940P-BEN", "CIC": 0.0, "QE": 0.95, "QE300": 0.18, "QE550": 0.63, "QE800": 0.41, "QE1000": 0.35, "darkCurrent": 0.0002, "frameRateHz": 2.5, "frameRateHzFast": 2.5, "frameRateHzSlow": 2.5, "imgFile": "newtonSO.png", "productLink": "https://andor.oxinst.com/assets/uploads/products/andor/documents/andor-newton-so-specifications.pdf", "readNoise": 2.5, "readNoiseFast": 2.5, "readNoiseSlow": 2.5, "xPixels": 2048.0, "xPixelSize": 13.5, "yPixels": 512.0, "yPixelSize": 13.5, "hed": true, "QE10eV": 0.27, "QE100eV": 0.93, "QE1000eV": 0.97, "QE4000eV": 0.8, "QE10000eV": 0.1}, "balor": {"shortName": "balor", "displayName": "Balor 17F-12", "CIC": 0.0, "QE": 0.61, "QE300": 0.05, "QE550": 0.62, "QE800": 0.42, "QE1000": 0.06, "darkCurrent": 0.03, "frameRateHz": 54.0, "frameRateHzFast": 54.0, "frameRateHzSlow": 0.03, "imgFile": "balor.png", "productLink": "https://andor.oxinst.com/products/scmos-camera-series/balor-scmos", "readNoise": 2.9, "readNoiseFast": 2.9, "readNoiseSlow": 2.9, "wellDepth": 80000.0, "xPixels": 4128.0, "xPixelSize": 12.0, "yPixels": 4104.0, "yPixelSize": 12.0}, "iKonL936-BV": {"shortName": "iKonL936-BV", "displayName": "iKon-L 936 BV", "CIC": 0.0, "QE": 0.95, "QE300": 0.12, "QE550": 0.95, "QE800": 0.7, "QE1000": 0.1, "darkCurrent": 5.9e-05, "frameRateHz": 1.0, "frameRateHzFast": 1.0, "frameRateHzSlow": 0.011, "imgFile": "ikonl.png", "productLink": "https://andor.oxinst.com/products/ikon-xl-and-ikon-large-ccd-series/ikon-l-936", "readNoise": 2.9, "readNoiseFast": 2.9, "readNoiseSlow": 2.9, "xPixels": 2048.0, "xPixelSize": 13.5, "yPixels": 2048.0, "yPixelSize": 13.5}, "iKonM934-BEX2-DD": {"shortName": "iKonM934", "displayName": "iKon-M 934 BEX2-DD", "CIC": 0.0, "QE": 0.93, "QE300": 0.2, "QE550": 0.9, "QE800": 0.95, "QE1000": 0.33, "darkCurrent": 0.00012, "frameRateHz": 2.6, "frameRateHzFast": 2.6, "frameRateHzSlow": 0.03, "imgFile": "ikonm.png", "productLink": "https://andor.oxinst.com/products/ikon-xl-and-ikon-large-ccd-series/ikon-m-934", "readNoise": 11.6, "readNoiseFast": 11.6, "readNoiseSlow": 2.9, "xPixels": 1024.0, "xPixelSize": 13.3, "yPixels": 1024.0, "yPixelSize": 13.3}, "iKonXL231-BV": {"shortName": "iKonXL231-BV", "displayName": "iKon-XL 231 BV", "CIC": 0.0, "QE": 0.95, "QE300": 0.12, "QE550": 0.95, "QE800": 0.7, "QE1000": 0.1, "darkCurrent": 0.00013, "frameRateHz": 0.5, "frameRateHzFast": 0.5, "frameRateHzSlow": 0.022, "imgFile": "ikonxl.png", "productLink": "https://andor.oxinst.com/products/ikon-xl-and-ikon-large-ccd-series/ikon-xl-231", "readNoise": 2.1, "readNoiseFast": 9.8, "readNoiseSlow": 2.1, "xPixels": 4096.0, "xPixelSize": 15.0, "yPixels": 4108.0, "yPixelSize": 15.0}, "iXonUltra888bv": {"shortName": "iXonUltra888", "displayName": "iXon Ultra 888 BV", "CIC": 0.005, "QE": 0.95, "QE300": 0.12, "QE550": 0.95, "QE800": 0.7, "QE1000": 0.1, "darkCurrent": 0.00011, "emGain": 1.0, "frameRateHz": 26.0, "frameRateHzFast": 26.0, "frameRateHzSlow": 0.03, "imgFile": "ixonultra.png", "productLink": "https://andor.oxinst.com/products/ixon-emccd-camera-series/ixon-ultra-888", "readNoise": 0.13, "readNoiseFast": 0.13, "readNoiseSlow": 0.012, "xPixels": 1024.0, "xPixelSize": 13.0, "yPixels": 1024.0, "yPixelSize": 13.0}, "iXonUltra897bv": {"shortName": "iXonUltra897bv", "displayName": "iXon Ultra 897 BV", "CIC": 0.005, "QE": 0.95, "QE300": 0.12, "QE550": 0.95, "QE800": 0.7, "QE1000": 0.1, "darkCurrent": 0.00011, "emGain": 1.0, "frameRateHz": 56.0, "frameRateHzFast": 56.0, "frameRateHzSlow": 0.12, "imgFile": "ixonultra.png", "productLink": "https://andor.oxinst.com/products/ixon-emccd-camera-series/ixon-ultra-897", "readNoise": 0.13, "readNoiseFast": 0.13, "readNoiseSlow": 0.012, "xPixels": 512.0, "xPixelSize": 16.0, "yPixels": 512.0, "yPixelSize": 16.0}, "idus420BEX2DD": {"shortName": "idus420", "displayName": "iDus DU420 BEX2-DD", "QE": 0.95, "QE300": 0.2, "QE550": 0.9, "QE800": 0.95, "QE1000": 0.33, "darkCurrent": 0.008, "frameRateHz": 0.34, "frameRateHzFast": 0.34, "frameRateHzSlow": 0.03, "imgFile": "idus420.png", "productLink": "https://andor.oxinst.com/products/idus-spectroscopy-cameras/idus-420", "readNoise": 4.0, "readNoiseFast": 4.0, "readNoiseSlow": 4.0, "xPixels": 1024.0, "xPixelSize": 26.0, "yPixels": 255.0, "yPixelSize": 26.0}, "idus420BRDD": {"shortName": "idus420BRDD", "displayName": "iDus DU420 BR-DD", "QE": 0.95, "QE300": 0.25, "QE550": 0.7, "QE800": 0.95, "QE1000": 0.33, "darkCurrent": 0.008, "frameRateHz": 0.34, "imgFile": "idus420.png", "productLink": "https://andor.oxinst.com/products/idus-spectroscopy-cameras/idus-420", "readNoise": 4.0, "xPixels": 1024.0, "xPixelSize": 26.0, "yPixels": 255.0, "yPixelSize": 26.0}, "idus420BU": {"shortName": "idus420BU", "displayName": "iDus DU420 BU", "QE": 0.94, "QE300": 0.5, "QE550": 0.85, "QE800": 0.6, "QE1000": 0.1, "darkCurrent": 0.002, "frameRateHz": 0.34, "frameRateHzFast": 0.34, "frameRateHzSlow": 0.03, "imgFile": "idus420.png", "productLink": "https://andor.oxinst.com/products/idus-spectroscopy-cameras/idus-420", "readNoise": 6.0, "xPixels": 1024.0, "xPixelSize": 26.0, "yPixels": 255.0, "yPixelSize": 26.0}, "idus420BU2": {"shortName": "idus420bu2", "displayName": "iDus DU420 BU2", "QE": 0.68, "QE300": 0.6, "QE550": 0.64, "QE800": 0.54, "QE1000": 0.1, "darkCurrent": 0.002, "frameRateHz": 0.34, "frameRateHzFast": 0.34, "frameRateHzSlow": 0.03, "imgFile": "idus420.png", "productLink": "https://andor.oxinst.com/products/idus-spectroscopy-cameras/idus-420", "readNoise": 4.0, "readNoiseFast": 4.0, "readNoiseSlow": 4.0, "xPixels": 1024.0, "xPixelSize": 26.0, "yPixels": 255.0, "yPixelSize": 26.0}, "idus420BVF": {"shortName": "idus420BVF", "displayName": "iDus DU420 BVF", "QE": 0.97, "QE300": 0.1, "QE550": 0.95, "QE800": 0.8, "QE1000": 0.1, "darkCurrent": 0.002, "frameRateHz": 0.34, "frameRateHzFast": 0.34, "frameRateHzSlow": 0.03, "imgFile": "idus420.png", "productLink": "https://andor.oxinst.com/products/idus-spectroscopy-cameras/idus-420", "readNoise": 6.0, "xPixels": 1024.0, "xPixelSize": 26.0, "yPixels": 255.0, "yPixelSize": 26.0}, "idus420OE": {"shortName": "idus420oe", "displayName": "iDus DU420 OE", "QE": 0.58, "QE300": 0.3, "QE550": 0.43, "QE800": 0.57, "QE1000": 0.1, "darkCurrent": 0.0004, "frameRateHz": 0.34, "imgFile": "idus420.png", "productLink": "https://andor.oxinst.com/products/idus-spectroscopy-cameras/idus-420", "readNoise": 4.0, "xPixels": 1024.0, "xPixelSize": 26.0, "yPixels": 255.0, "yPixelSize": 26.0}, "marana4211b-bv": {"shortName": "marana4211b-bv", "displayName": "Marana 4.2B-11 BV", "CIC": 0.0, "QE": 0.95, "QE300": 0.33, "QE550": 0.95, "QE800": 0.6, "QE1000": 0.15, "darkCurrent": 0.2, "frameRateHz": 48.0, "frameRateHzFast": 48.0, "frameRateHzSlow": 24.0, "imgFile": "marana.png", "productLink": "https://andor.oxinst.com/products/scmos-camera-series/marana-scmos", "readNoise": 1.6, "readNoiseFast": 1.6, "readNoiseSlow": 1.6, "xPixels": 2048.0, "xPixelSize": 11.0, "yPixels": 2048.0, "yPixelSize": 11.0}, "neo": {"shortName": "neo", "displayName": "Neo 5.5", "CIC": 0.0, "QE": 0.6, "QE300": 0.05, "QE550": 0.6, "QE800": 0.3, "QE1000": 0.05, "darkCurrent": 0.007, "frameRateHz": 100.0, "frameRateHzFast": 100.0, "frameRateHzSlow": 0.03, "imgFile": "neo.png", "productLink": "https://andor.oxinst.com/products/scmos-camera-series/neo-5-5-scmos", "readNoise": 1.0, "readNoiseFast": 1.0, "readNoiseSlow": 1.0, "xPixels": 2560.0, "xPixelSize": 6.5, "yPixels": 2160.0, "yPixelSize": 6.5}, "newton970bv": {"shortName": "Newton970bv", "displayName": "Newton 970 BV", "QE": 0.95, "QE300": 0.12, "QE550": 0.95, "QE800": 0.7, "QE1000": 0.1, "darkCurrent": 0.0002, "emGain": 1.0, "frameRateHz": 20.0, "frameRateHzFast": 20.0, "frameRateHzSlow": 0.06, "imgFile": "newton971.png", "productLink": "https://andor.oxinst.com/products/newton-ccd-and-emccd-cameras/newton-970", "readNoise": 0.04, "readNoiseFast": 0.04, "readNoiseSlow": 0.0028, "xPixels": 1600.0, "xPixelSize": 16.0, "yPixels": 200.0, "yPixelSize": 16.0}, "newton971bv": {"shortName": "Newton971bv", "displayName": "Newton 971 BV", "QE": 0.95, "QE300": 0.12, "QE550": 0.95, "QE800": 0.7, "QE1000": 0.1, "darkCurrent": 0.0002, "emGain": 1.0, "frameRateHz": 10.0, "frameRateHzFast": 10.0, "frameRateHzSlow": 0.03, "imgFile": "newton971.png", "productLink": "https://andor.oxinst.com/products/newton-ccd-and-emccd-cameras/newton-971", "readNoise": 0.04, "readNoiseFast": 0.04, "readNoiseSlow": 0.0028, "xPixels": 1600.0, "xPixelSize": 16.0, "yPixels": 400.0, "yPixelSize": 16.0}, "sona20b11usb": {"shortName": "Sona20b11usb", "displayName": "Sona 2.0B-11 (USB3)", "CIC": 0.0, "QE": 0.95, "QE300": 0.33, "QE550": 0.95, "QE800": 0.6, "QE1000": 0.18, "darkCurrent": 0.3, "frameRateHz": 48.0, "frameRateHzFast": 48.0, "frameRateHzSlow": 24.0, "imgFile": "sona.png", "productLink": "https://andor.oxinst.com/products/scmos-camera-series/sona-scmos", "readNoise": 1.6, "readNoiseFast": 1.6, "readNoiseSlow": 1.6, "xPixels": 1400.0, "xPixelSize": 11.0, "yPixels": 1400.0, "yPixelSize": 11.0}, "sona42b11usb": {"shortName": "Sona42b11usb", "displayName": "Sona 4.2B-11 (USB3)", "CIC": 0.0, "QE": 0.95, "QE300": 0.33, "QE550": 0.95, "QE800": 0.6, "QE1000": 0.18, "darkCurrent": 0.3, "frameRateHz": 48.0, "frameRateHzFast": 48.0, "frameRateHzSlow": 24.0, "imgFile": "sona.png", "productLink": "https://andor.oxinst.com/products/scmos-camera-series/sona-scmos", "readNoise": 1.6, "readNoiseFast": 1.6, "readNoiseSlow": 1.6, "xPixels": 2048.0, "xPixelSize": 11.0, "yPixels": 2048.0, "yPixelSize": 11.0}, "sona42b6coax": {"shortName": "Sona42b6coax", "displayName": "Sona 4.2B-6 (CoaXPress)", "CIC": 0.0, "QE": 0.95, "QE300": 0.33, "QE550": 0.95, "QE800": 0.6, "QE1000": 0.18, "darkCurrent": 0.1, "frameRateHz": 74.0, "frameRateHzFast": 74.0, "frameRateHzSlow": 43.0, "imgFile": "sona.png", "productLink": "https://andor.oxinst.com/products/scmos-camera-series/sona-scmos", "readNoise": 1.2, "readNoiseFast": 1.2, "readNoiseSlow": 1.6, "xPixels": 2048.0, "xPixelSize": 6.5, "yPixels": 2048.0, "yPixelSize": 6.5}, "sona42b6usb": {"shortName": "Sona42b6usb", "displayName": "Sona 4.2B-6 (USB3)", "CIC": 0.0, "QE": 0.95, "QE300": 0.33, "QE550": 0.95, "QE800": 0.6, "QE1000": 0.18, "darkCurrent": 0.1, "frameRateHz": 43.0, "frameRateHzFast": 43.0, "frameRateHzSlow": 40.0, "imgFile": "sona.png", "productLink": "https://andor.oxinst.com/products/scmos-camera-series/sona-scmos", "readNoise": 1.2, "readNoiseFast": 1.2, "readNoiseSlow": 1.2, "xPixels": 2048.0, "xPixelSize": 6.5, "yPixels": 2048.0, "yPixelSize": 6.5}, "zyla4210tap": {"shortName": "Zyla4210tap", "displayName": "Zyla 4.2+ (10-Tap)", "CIC": 0.0, "QE": 0.83, "QE300": 0.07, "QE550": 0.83, "QE800": 0.48, "QE1000": 0.06, "darkCurrent": 0.019, "frameRateHz": 101.0, "frameRateHzFast": 101.0, "frameRateHzSlow": 0.03, "imgFile": "zyla.png", "productLink": "https://andor.oxinst.com/products/scmos-camera-series/zyla-4-2-scmos", "readNoise": 0.9, "readNoiseFast": 1.3, "readNoiseSlow": 1.1, "xPixels": 2048.0, "xPixelSize": 6.5, "yPixels": 2048.0, "yPixelSize": 6.5}, "zyla42usb": {"shortName": "zyla42usb", "displayName": "Zyla 4.2+ (USB 3.0)", "CIC": 0.0, "QE": 0.83, "QE300": 0.07, "QE550": 0.83, "QE800": 0.48, "QE1000": 0.06, "darkCurrent": 0.019, "frameRateHz": 53.0, "imgFile": "zyla.png", "productLink": "https://andor.oxinst.com/products/scmos-camera-series/zyla-4-2-scmos", "readNoise": 0.9, "readNoiseFast": 1.3, "readNoiseSlow": 1.1, "xPixels": 2048.0, "xPixelSize": 6.5, "yPixels": 2048.0, "yPixelSize": 6.5}, "zyla5510tap": {"shortName": "zyla5510tap", "displayName": "Zyla 5.5 (10-Tap)", "CIC": 0.0, "QE": 0.6, "QE300": 0.05, "QE550": 0.6, "QE800": 0.3, "QE1000": 0.05, "darkCurrent": 0.019, "frameRateHz": 100.0, "frameRateHzFast": 100.0, "frameRateHzSlow": 0.03, "imgFile": "zyla.png", "productLink": "https://andor.oxinst.com/products/scmos-camera-series/zyla-5-5-scmos", "readNoise": 0.9, "readNoiseFast": 1.6, "readNoiseSlow": 1.2, "xPixels": 2560.0, "xPixelSize": 6.5, "yPixels": 2160.0, "yPixelSize": 6.5}, "zyla55usb": {"shortName": "zyla55usb", "displayName": "Zyla 5.5 (USB 3.0)", "CIC": 0.0, "QE": 0.6, "QE300": 0.05, "QE550": 0.6, "QE800": 0.3, "QE1000": 0.05, "darkCurrent": 0.019, "frameRateHz": 40.0, "frameRateHzFast": 40.0, "imgFile": "zyla.png", "productLink": "https://andor.oxinst.com/products/scmos-camera-series/zyla-5-5-scmos", "readNoise": 0.9, "readNoiseFast": 1.6, "readNoiseSlow": 1.2, "xPixels": 2560.0, "xPixelSize": 6.5, "yPixels": 2160.0, "yPixelSize": 6.5}}

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
})

var haveThese = '';
Object.keys(cameraDefs).sort().forEach(function(e){haveThese = haveThese + (cameraDefs[e]['displayName'] + '\n')});
console.log(haveThese)

