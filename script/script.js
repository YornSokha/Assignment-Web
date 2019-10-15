$(document).ready(function () {
    var imgNum = 1;
    $('#dog').fadeIn(2000);
    $('#dog').on('click', (e) => {
        $current = $('#dog'); 
        $current.animate({ opacity: 0.0 }, 1000, function () {
            let imgSrc = "img/dog/dog" + imgNum + ".jpg";
            $('#dog').attr("src", imgSrc);
            $current.animate({ opacity: 1.0 }, 1000);
        })
        imgNum = (imgNum === 4 ? 1 : ++imgNum);
    });
});