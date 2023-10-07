"use strict";
(() => {
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel["min"] = "Min";
        AudioLevel["medium"] = "Med";
        AudioLevel["max"] = "Max";
    })(AudioLevel || (AudioLevel = {}));
    let currentAudio = AudioLevel.medium;
    console.log({ currentAudio });
})();
//# sourceMappingURL=enums.js.map