$(window).on("load" , function () {
    $('.first').addClass('first_active')
    $('.second-button').on('click', () => {
        $('.menu').addClass('menu_active')
    })
    $(document).mouseup(function (e){
        let popup = $('.menu')

        if (  !popup.is(e.target) && popup.has(e.target).length === 0){
            $('.menu').removeClass('menu_active')
        }
    })

})



