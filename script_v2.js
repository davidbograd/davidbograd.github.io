// import Unsplash from 'unsplash-js';
//
// const unsplash = new Unsplash({
//     applicationId: "02634dab65c4bc70f1b56facf645922dd01b35ba6228d97e40b239c22e05643c",
//     secret: "3def6136899df914333d8fc5f1c985836315fff7eebda49d688f546f1af07b95",
//     callbackUrl: "urn:ietf:wg:oauth:2.0:oob"
// });


$(function() {

    // JS for NATURE pictures
    $(".js-getnature").click(function() {
        var postURL = "https://api.unsplash.com/collections/158642/photos/?per_page=30&client_id=02634dab65c4bc70f1b56facf645922dd01b35ba6228d97e40b239c22e05643c";
        var count = 0;
        var data;


        $.get(postURL, function(responsedata) {
            data = responsedata;

            var photoCredit = data[count].user.name;
            var likes = data[count].user.total_likes;
            var photo = data[count].urls.regular;

            $(".credit").html(photoCredit);
            $(".likes").html(likes);
            $(".photo-bg").css("background-image", "url(" + data[count].urls.regular) + ")";
            //$(".photo").html(photo).attr("src", photo);
            console.log(data);

        });
        $(document).keydown(function(e) {
            if (e.which == 32) {
                count = (count + 1) % data.length;
                console.log(data[count].user.name);
                console.log(count);

                $(".credit").html(data[count].user.name);
                $(".likes").html(data[count].user.total_likes);
                //$(".photo").html(data[count].urls.regular).attr("src", data[count].urls.regular);
                $(".photo-bg").css("background-image", "url(" + data[count].urls.regular) + ")";
                console.log(data[count].urls.regular);
            }
        });
    });


    // JS for PEOPLE pictures
    $(".js-getpeople").click(function() {
        var postURL = "https://api.unsplash.com/collections/140368/photos/?per_page=30&client_id=02634dab65c4bc70f1b56facf645922dd01b35ba6228d97e40b239c22e05643c";
        var count = 0;
        var data;

        $.get(postURL, function(responsedata) {
            data = responsedata;

            var photoCredit = data[count].user.name;
            var likes = data[count].user.total_likes;
            var photo = data[count].urls.regular;

            $(".credit").html(photoCredit);
            $(".likes").html(likes);
            $(".photo-bg").css("background-image", "url(" + data[count].urls.regular) + ")";
            //$(".photo").html(photo).attr("src", photo);


        });
        $(document).keydown(function(e) {
            if (e.which == 32) {
                count = (count + 1) % data.length;
                console.log(data[count].user.name);
                console.log(count);

                $(".credit").html(data[count].user.name);
                $(".likes").html(data[count].user.total_likes);
                //$(".photo").html(data[count].urls.regular).attr("src", data[count].urls.regular);
                $(".photo-bg").css("background-image", "url(" + data[count].urls.regular) + ")";
                console.log(data[count].urls.regular);
            }
        });
    });

    // JS for CITY pictures
    $(".js-getcity").click(function() {
        var postURL = "https://api.unsplash.com/collections/158643/photos/?per_page=30&client_id=02634dab65c4bc70f1b56facf645922dd01b35ba6228d97e40b239c22e05643c";
        var count = 0;
        var data;

        $.get(postURL, function(responsedata) {
            data = responsedata;

            var photoCredit = data[count].user.name;
            var likes = data[count].user.total_likes;
            var photo = data[count].urls.regular;

            $(".credit").html(photoCredit);
            $(".likes").html(likes);
            $(".photo-bg").css("background-image", "url(" + data[count].urls.regular) + ")";
            //$(".photo").html(photo).attr("src", photo);


        });
        $(document).keydown(function(e) {
            if (e.which == 32) {
                count = (count + 1) % data.length;
                console.log(data[count].user.name);
                console.log(count);

                $(".credit").html(data[count].user.name);
                $(".likes").html(data[count].user.total_likes);
                //$(".photo").html(data[count].urls.regular).attr("src", data[count].urls.regular);
                $(".photo-bg").css("background-image", "url(" + data[count].urls.regular) + ")";
                console.log(data[count].urls.regular);
            }
        });
    });

});
