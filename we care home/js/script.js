$(function(){
    let windowHeight = $(window).height();
    navHeight = $('.navbar').innerHeight();

    $('.heroSection').height(windowHeight-(navHeight));


    
});

$(window).scroll(function(){
	$('.navbar').toggleClass('scrolled', $(this).scrollTop() > 50);
});

// end of design related script

//start of handsfree related script

// Create a new instance. Use one instance for each camera
// Create a new instance. Use one instance for each camera
const handsfree = new Handsfree({})

// Create a simple plugin that displays pointer values on every frame
Handsfree.use('consoleLogger', ({ head }) => {
//   console.log('Morphs: ', head.morphs)
//   console.log('Rotation: ', head.rotation)
//   console.log('Translation: ', head.translation)
})

// Start tracking
handsfree.start()
