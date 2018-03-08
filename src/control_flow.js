rig.statements["f"] = new Expression(
    "f",
    [Expression.ANY, Expression.OPTIONAL, Expression.OPTIONAL],
    new StringFormatter(function(rig, children) {
        var a = children[0];
        var b = children[1];
        var c = children[2];
        var code = "";
        var loop_regs = ["IX", "JX", "KX"];
        var reg = loop_regs[rig.indents.filter(x => x == "f").length];
        
        if (b == null) {
            code = "for (m" + reg + " = " + a + "," + reg  + " = 0; " + reg + " < m" + reg + "; " + reg + "++) {";
        }
        else if (c == null) {
            code = "for (m" + reg + " = " + b + "," + reg  + " = " + a + "; " + reg + " < m" + reg + "; " + reg + "++) {";
        }
        else {
            code = "for (s" + reg + " = " + c + ", m" + reg + " = " + b + "," + reg  + " = " + a + "; " + reg + " < m" + reg + "; " + reg + "+= s" + reg + ") {";
        }

        rig.indents.push("f");
        return code;
    })
);

rig.statements["}"] = new Expression(
    "}",
    [],
    new StringFormatter(function(rig, children) {
        rig.indents.pop();
        return "}";
    })
);