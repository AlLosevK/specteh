$(document).ready(function () {
    $('.paginator-item').on('click', function () {
        $('.paginator-item').removeClass('active-page');
        $(this).addClass('active-page');
    })
    $('.filter-item').on('click', function () {
        $('.filter-item').removeClass('active');
        $(this).addClass('active');
    })
})