$(document).ready(function () {
    // selector is each of our column boxes, on hover you ...
    $("#b1").hover(function () {
        // this is what happens on hover
        $("#showonhover").fadeIn("slow");
        $("#show").animate({ top: "10%" });
    },
        function () {
            $("#showonhover").fadeOut("slow");
            $("#show").animate({ top: "40%" });
        }
    );

    $("#b2").hover(function () {
        // this is what happens on hover
        $("#showonhover2").fadeIn("slow");
        $("#show2").animate({ top: "10%" });
    },
        function () {
            $("#showonhover2").fadeOut("slow");
            $("#show2").animate({ top: "40%" });
        }
    );

    $("#b3").hover(function () {
        // this is what happens on hover
        $("#showonhover3").fadeIn("slow");
        $("#show3").animate({ top: "10%" });
    },
        function () {
            $("#showonhover3").fadeOut("slow");
            $("#show3").animate({ top: "40%" });
        }
    );

    $("#b5").hover(function () {
        // this is what happens on hover
        $("#showonhover5").fadeIn("slow");
        $("#show5").animate({ top: "10%" });
    },
        function () {
            $("#showonhover5").fadeOut("slow");
            $("#show5").animate({ top: "40%" });
        }
);

    $("#b6").hover(function () {
        // this is what happens on hover
        $("#showonhover6").fadeIn("slow");
        $("#show6").animate({ top: "10%" });
    },
        function () {
            $("#showonhover6").fadeOut("slow");
            $("#show6").animate({ top: "40%" });
        }
    );

    $("#b4").hover(function () {
        // this is what happens on hover
        $("#showonhover4").fadeIn("slow");
        $("#show4").animate({ top: "10%" });
    },
        function () {
            $("#showonhover4").fadeOut("slow");
            $("#show4").animate({ top: "40%" });
        }
    );

    $("#b11").hover(function () {
        $("#b11").animate({ opacity: '1'}, 500);
       // $("#p1").toggle();
        $("#b22,#b33").animate({ opacity: '0.5'}, 500);
        // $("#p3, #p2").hide();
    });

    $("#b22").hover(function () {
        $("#b22").animate({ opacity: '1' }, 500);
        // $("#p2").toggle();
        $("#b11,#b33").animate({ opacity: '0.5' }, 500);
      //  $("#p3, #p1").hide();

    });
    $("#b33").hover(function () {
        $("#b33").animate({ opacity: '1' }, 500);
       // $("#p3").toggle();
        $("#b11,#b22").animate({ opacity: '0.5' }, 500);
       // $("#p2, #p1").hide();
    });
});

