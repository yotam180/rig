CI = window.CI;

CI.UnitTest("ShouldPass", function() {
	return true;
});

CI.UnitTest("ShouldFailSilently", function() {
	return false;
});

CI.UnitTest("ShouldFailWithMsg", function() {
	return "This function is not working!";
});

CI.UnitTest("ShouldThrowException", function() {
	return (null).toString();
});