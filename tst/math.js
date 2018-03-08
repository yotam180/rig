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

CI.UnitTest("IsPrime_Topwise", function() {
    var r = eval(rig.compile("tP", [1, 2, 5]));
    if (JSON.stringify(r) != JSON.stringify([1, 2, true]))
        return "Test case 1 failed";

    var r = eval(rig.compile("tP", [1, 2, 18]));
        if (JSON.stringify(r) != JSON.stringify([1, 2, false]))
            return "Test case 1 failed";

    return true;
});

CI.UnitTest("IsPrime_Topsafe", function() {
    var r = eval(rig.compile("TP", [1, 2, 5]));
    if (JSON.stringify(r) != JSON.stringify([1, 2, 5, true]))
        return "Test case 1 failed";

    var r = eval(rig.compile("TP", [1, 2, 18]));
        if (JSON.stringify(r) != JSON.stringify([1, 2, 18, false]))
            return "Test case 1 failed";

    return true;
});

CI.UnitTest("Square_Statement", function() {
    var r = eval(rig.compile("²", [1, 2, 5]));
    if (JSON.stringify(r) != JSON.stringify([1, 4, 25]))
        return "Test case 1 failed";

    return true;
});

CI.UnitTest("Square_Topwise", function() {
    var r = eval(rig.compile("t²", [1, 2, 5]));
    if (JSON.stringify(r) != JSON.stringify([1, 2, 25]))
        return "Test case 1 failed";

    return true;
});

CI.UnitTest("Square_Topsafe", function() {
    var r = eval(rig.compile("T²", [1, 2, 5]));
    if (JSON.stringify(r) != JSON.stringify([1, 2, 5, 25]))
        return "Test case 1 failed";

    return true;
});