window.CI = {
    UnitTests: {

    },

    UnitTest: function(name, func) {
        CI.UnitTests[name] = func;
    }
};