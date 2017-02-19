require.config({
    paths: {
        jquery: ['https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min', 'libs/jquery/dist/jquery' ], 
        slick:'slick.min',
        domready: 'libs/domready/ready',
        
    }
});

    require(['domready'], function(domReady) {
        domReady(function () {
        require(['jquery', 'slick','myslider', 'video', 'popupform']);
            });
    });