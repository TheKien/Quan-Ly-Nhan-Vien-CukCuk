$(document).ready(function () {
    $("#dialogPopup").hide();
    // show pop up
    $("#btnShowPopup").click(function () {
        $("#dialogPopup").show();
    });
    $(".m-btn-close").click(function () {
        $("#dialogPopup").hide();
    });
    // show toast
    $("#showToast").click(function () {
        $(".m-toast-status").show();
    });
    $("#hideToast").click(function () {
        $(".m-toast-status").hide();
    });

    $(".m-modal-medium").hide();
    // Show Modal
    $("#btnShowModalInfo").click(function () {
        $(".m-modal-medium").show();
    });
    $(".m-close-modal").click(function () {
        $(".m-modal-medium").hide();
    });
});