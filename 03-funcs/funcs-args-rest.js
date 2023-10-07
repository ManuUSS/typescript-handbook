"use strict";
(() => {
    const fullName = (firstName, ...rest) => {
        return `${firstName} ${rest.join(' ')}`;
    };
    const name = fullName('Manuel', 'Ulate', 'Sancho', 'Siu');
    console.log(name);
})();
//# sourceMappingURL=funcs-args-rest.js.map