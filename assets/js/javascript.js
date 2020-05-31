$(document).ready(function () {
    function fade() {
        $("#slogan").hide();
        $("#appearing-dest").hide();
        $("#slogan").fadeIn(2500);
        console.log("working");
    }
    fade();
    $("#eulink-dest").hover(function appearingDest() {
        $("#appearing-dest").show();
    });
    $("#appearing-dest").mouseleave(function appearingDest() {
        $("#appearing-dest").hide();
    });
    $("#navigation").mouseleave(function appearingDest() {
        $("#appearing-dest").hide();
    });
    // about europe buttons
    $("#eu-nature").click(function () {
        $("#info-title").text("European Nature");
        $("#info").text(
            "Though 700 million members of our species populate the continent, Europe has vast open spaces, towering heights, and brilliant wide skies that will astound even the most snobbish urbanite. The 18 natural wonders below are among the most spectacular Europe has to offer."
        );
    });

    $("#eu-history").click(function () {
        $("#info-title").text("European History");
        $("#info").text(
            "The history of Europe covers the people inhabiting Europe from prehistory to the present. During the Neolithic era and the time of the Indo-European migrations Europe saw human inflows from east and southeast and subsequent important cultural and material exchange. The period known as classical antiquity began with the emergence of the city-states of ancient Greece. Later, the Roman Empire came to dominate the entire Mediterranean basin. The fall of the Roman Empire in AD 476 traditionally marks the start of the Middle Ages. Beginning in the 14th century a Renaissance of knowledge challenged traditional doctrines in science and theology. Simultaneously, the Protestant Reformation set up Protestant churches primarily in Germany, Scandinavia and England. After 1800, the Industrial Revolution brought prosperity to Britain and Western Europe. The main powers set up colonies in most of the Americas and Africa, and parts of Asia. In the 20th century, World War I and World War II resulted in massive numbers of deaths. The Cold War dominated European geo-politics from 1947 to 1989."
        );
    });

    $("#eu-art").click(function () {
        $("#info-title").text("European Art & Culture");
        $("#info").text(
            "The art of Europe, or Western art, encompasses the history of visual art in Europe. European prehistoric art started as mobile Upper Paleolithic rock and cave painting and petroglyph art and was characteristic of the period between the Paleolithic and the Iron Age. Written histories of European art often begin with the art of the Ancient Middle East and the Ancient Aegean civilizations, dating from the 3rd millennium BC. Parallel with these significant cultures, art of one form or another existed all over Europe, wherever there were people, leaving signs such as carvings, decorated artifacts and huge standing stones. However a consistent pattern of artistic development within Europe becomes clear only with the art of Ancient Greece, adopted and transformed by Rome and carried; with the Roman Empire, across much of Europe, North Africa and the Middle East. The influence of the art of the Classical period waxed and waned throughout the next two thousand years, seeming to slip into a distant memory in parts of the Medieval period, to re-emerge in the Renaissance, suffer a period of what some early art historians viewed as decay during the Baroque period, to reappear in a refined form in Neo-Classicism and to be reborn in Post-Modernism."
        );
    });

    // England page
    function hidden() {
        $(".hotel-am").hide();
        $(".att-info").hide();
        console.log("working 2");
    }
    hidden();

    $(".hot-btn").click(function () {
        $(this).parent().prev().find(".hotel-am").toggle();
        $(this).find(".arrow").toggleClass("fa-chevron-down fa-chevron-up");
        if ($(this).children(".less").text() === "more") {
            $(this).children(".less").text("less");
            console.log($(this).children(".less").text());
        } else {
            $(this).children(".less").text("more");
        }
    });

    // Attractions

    $(".attraction").click(function () {
        $(this).next(".att-info").toggle();
        $(this).find(".arrow").toggleClass("fa-chevron-down fa-chevron-up");
        console.log("working 3");
    });
});
