(function() {

    var failed = {};
    var nf = 0;
    var passed = [];
    var np = 0;

    for (var n in CI.UnitTests) if (CI.UnitTests.hasOwnProperty(n)) {
        try
        {
            var result = CI.UnitTests(n);
            if (result == true) {
                passed.push(n);
                np++;
            }
            else {
                failed[n] = result;
                nf++;
            }
        }
        catch (e) {
            failed[n] = e.toString();
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