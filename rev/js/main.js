var $slider = $("#antenna-slider");
var $fill = $(".bar .fill");
$( document ).ready(
    function () {
       $.post('check.php').done(function (data) {
        if (data.indexOf('true')>-1 ){
            $("#pincode li svg").removeClass('fill-red');
            $("#pincode li svg").addClass('fill-green');
            $('a.chekOn').removeAttr('onclick');
        }else{

            $('a.chekOn').attr('onclick',"return false;");
        }
       })
    }
)

function setBar() {
    var w = ($slider.val() - 5) * 4;
    $fill.css("width", w + "%");
    $("#dbm").html($slider.val());
}

$slider.on("input", setBar);
setBar();

let modalSetups = document.querySelectorAll(".open-modal");
//let title = document.querySelectorAll(".modT");

// modal BG//
var labelName = $(".top-area p").text();
for (let modalSetup of modalSetups) {
    $(modalSetup).on("click", function () {
        $(".modal").show("slide", 100);
    });
    $('#keyboard').jkeyboard({
        layout: "numbers_only",
        input: $("#keyboard-input")
    });
//change title//
    $(".open-modal").on("click", function () {
        $(".top-area p").text($(this).attr("data-title-text"));
    });
// dynamic modal window
    $("#openautostart").on("click", function () {
        $("#1").show();
    });
    $("#openstoptag").on("click", function () {
        $("#2").show();
    });
    $("#openrfidset").on("click", function () {
        $("#3").show();
    });
    $("#pincode").on("click", function () {
        $("#pincode_input").show();
    });

    $("#input-time").unbind().click(function () {
        $("#off-startup").prop("checked", false);
        $("#on-startup").prop("checked", false);
       $("#at-specified-time").prop("checked", true);
    });

    $("#on-startup").unbind().click(function () {
        $(this).prop("checked", true);
        $("#input-time").val(0);
    });
    $("#off-startup").unbind().click(function () {
        $(this).prop("checked", true);
        $("#input-time").val(0);
    });

    // checkbox on element
    $("body #tag-detection-method input[type=checkbox]").on("click", function () {
        if (!$(this).is(":not(:checked)")) {
            $("body #tag-detection-method input[type=checkbox]").prop('checked', false);
            $(this).prop("checked", true);
        }
    });
    $("body #tag-detection input[type=checkbox]").on("click", function () {
        if (!$(this).is(":not(:checked)")) {
            $("body #tag-detection input[type=checkbox]").prop('checked', false);
            $(this).prop("checked", true);
        }
    });
    $("body #1 input[type=checkbox]").on("click", function () {
        if (!$(this).is(":not(:checked)")) {
            $("body #1 input[type=checkbox]").prop('checked', false);
            $(this).prop("checked", true);
        }
    });
    $("body #3 input[type=checkbox]").on("click", function () {
        if (!$(this).is(":not(:checked)")) {
            $("body #3 input[type=checkbox]").prop('checked', false);
            $(this).prop("checked", true);
        }
    });

    $("#multipleCheck").on("click", function () {
        if (!$(this).is(":not(:checked)")) {
            $("#datetimepicker4").show();
        }
        else {
            $("#datetimepicker4").hide();
        }
    });
    $("#detectCheck").on("click", function () {
        if (!$(this).is(":not(:checked)")) {
            $("#datetimepicker4").hide();
        }
    });
    // $(function () {
    //     $('#datetimepicker5').datetimepicker(
    //         {locale: 'ru'}
    //     );
    // });


    $(".button").unbind().click(function () {
        if ($(".modal").attr("style")) {
            $("#1").hide();
            $("#2").hide();
            $("#3").hide();
            $(".modal").removeAttr("style");
            $(".top-area p").text(labelName);
            if (this.className == "button button-ok") {
                $("#stop-tag-detection").submit();
            }
        } else {
            window.location.href = "index.html";
        }
    });
}
$(".pin").keypress(function(event){
    event = event || window.event;
    if (event.charCode && event.charCode!=0 && event.charCode!=46 && (event.charCode < 48 || event.charCode > 57) )
        return false;
});
$('li.return').on("click",function () {
    var pincode = $('.pin').val();
    $.post('authorization.php',{pincode:pincode}).done(function (data) {
        $('.modal').hide();

        if (data.indexOf('true')>-1 ){
            $('#pincode li svg').removeClass('fill-red');
            $('#pincode li svg').addClass('fill-green');
            $('a.chekOn').removeAttr('onclick');

        }else{
            $('a.chekOn').attr('onclick','return false;');
        }
    })
})