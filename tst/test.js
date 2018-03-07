const signal = function(status, url, description) {
    alert("Signal");
    $.ajax({
        url: "result.php",
        type: "POST",
        data: {
            state: status,
            target_url: url,
            description: description,
            context: "CodeHoundBot/CodeHound-CI"
        },
        success: function(e) {
            location.reload();
        }
    });
};

signal("success", "http://sample-url.com/helloworld", "All checks have passed");