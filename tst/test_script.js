(function() {

    var failed = {};
    var nf = 0;
    var passed = [];
    var np = 0;

    for (var n in CI.UnitTests) if (CI.UnitTests.hasOwnProperty(n)) {
        try
        {
            var result = CI.UnitTests[n]();

            console.log(result);

            if (result == true) {
                console.log(n + " succeeded");
                passed.push(n);
                np++;
            }
            else {
                console.log(n + " failed by returning false");
                failed[n] = "" + result;
                nf++;
            }
        }
        catch (e) {
            console.log(n + " failed with an error", e);
            failed[n] = "Error " + e.constructor.name + ": " + e;
            nf++;
        }
    }

    if (nf == 0) {
        signal("success", "All checks have passed");
    }
    else {
        var desc = JSON.stringify({failed: failed, passed: passed});
        signal("failure", np + "/" + (np + nf) + " checks have passed", "", desc);
    }
})();