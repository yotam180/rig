CI.UnitTest("IsPrime_Statement", function() {
    var r = eval(rig.compile("P", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]));

    var results = [false, false, true, true, false, true, false, true, false, false, false, true];

    for (var i = 0; i < results.length; i++) {
        if (results[i] != r[i]) {
            return "Result of " + i + "(" + r[i] + ") did not match expected (" + results[i] + ")";
        }
    }

    return true;
});