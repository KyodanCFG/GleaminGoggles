exports.mod = (mod_info) => {
    logger.logInfo(`   [MOD] Loading: ${mod_info.name} (${mod_info.version}) by ${mod_info.author}`);
    let itemsCache = fileIO.readParsed(global.db.user.cache.items);						        // read from server cache (items)
    let settingsFile = require("../settings.json");							        // read from settings.json file
    let gameplaySettings = settingsFile.gameplay;                                           // for tidying up code/abstraction	

    if (gameplaySettings.gleaminGoggles == true) {                                          // if 'gleaminGoggles' var in settings.json is set to true, execute script
        for (let item in itemsCache.data) {
            let cacheData = itemsCache.data[item];									    // for tidying up code/abstraction	

            if (cacheData._id === "5c0558060db834001b735271") {                     // GPNVG-18 Night Vision Goggles
                cacheData._props.Intensity = 2.0;                                   // default 2.27
                //cacheData._props.Mask = "Anvis";
                cacheData._props.MaskSize = 1.35;                                   // default 0.99
                cacheData._props.NoiseIntensity = 0.0;                              // default 0.02
                cacheData._props.NoiseScale = 10.0;                                 // default 5.0
                cacheData._props.Color = {                                          // default r 83, g 255, b 69, a 254
                    "r": 25,
                    "g": 150,
                    "b": 50,
                    "a": 254
                };
                cacheData._props.DiffuseIntensity = 0.025;                          // default 0.023
            }
            
            if (cacheData._id === "5c066e3a0db834001b7353f0") {                     // N-15 Night Vision Goggles
                cacheData._props.Intensity = 2.0;                                   // default 1.8
                //cacheData._props.Mask = "Binocular";
                cacheData._props.MaskSize = 1.35;                                   // default 0.95
                cacheData._props.NoiseIntensity = 0.02;                             // default 0.04
                cacheData._props.NoiseScale = 10.0;                                 // default 2.0
                cacheData._props.Color = {                                          // default r 0, g 255, b 243, a 254
                    "r": 100,
                    "g": 100,
                    "b": 200,
                    "a": 254
                };
                cacheData._props.DiffuseIntensity = 0.04;                           // default 0.021
            }
            
            if (cacheData._id === "5c0696830db834001d23f5da") {                     // PNV-10T Night Vision Goggles
                cacheData._props.Intensity = 2.0;                                   // default 2.0
                //cacheData._props.Mask = "Binocular";
                cacheData._props.MaskSize = 1.25;                                   // default 0.97
                cacheData._props.NoiseIntensity = 0.01;                             // default 0.05
                cacheData._props.NoiseScale = 10.0;                                 // default 1.0
                cacheData._props.Color = {                                          // default r 0, g 255, b 32, a 254
                    "r": 50,
                    "g": 150,
                    "b": 100,
                    "a": 254
                };
                cacheData._props.DiffuseIntensity = 0.05;                           // default 0.02
            }
            
            if (cacheData._id === "5c110624d174af029e69734c") {                     // T-7 Thermal Goggles
                cacheData._props.HeatMin = 0.001;                                   // default 0.55
                cacheData._props.IsNoisy = false;                                   // default true
                cacheData._props.NoiseIntensity = 0.01;                             // default 0.07
                cacheData._props.IsMotionBlurred = false;                           // default true
                //cacheData._props.Mask = "Thermal";
                cacheData._props.MaskSize = 1.50;                                   // default 1.2
            }

            if (cacheData._id === "57235b6f24597759bf5a30f1") {                     // PVS-14 Night Vision Monocular
                cacheData._props.Intensity = 2.0;                                   // default 2.27
                //cacheData._props.Mask = "OldMonocular";
                cacheData._props.MaskSize = 1.5;                                    // default 1.2
                cacheData._props.NoiseIntensity = 0.03;                             // default 0.02
                cacheData._props.NoiseScale = 10.0;                                 // default 5.0
                cacheData._props.Color = {                                          // default r 183, g 255, b 86, a 254
                    "r": 25,
                    "g": 125,
                    "b": 25,
                    "a": 254
                };
                cacheData._props.DiffuseIntensity = 0.03;                           // default 0.022
            }
        }

        fileIO.write(global.db.user.cache.items, itemsCache);								// write all changes to cache (items.json specifically)
        logger.logSuccess(`[MOD] -- ${mod_info.name}: ON`);
    } else {                                                                    // if 'gleaminGoggles' var in settings.json is set to false, skip entire script
        logger.logSuccess(`[MOD] -- ${mod_info.name}: OFF`); 
    }
}