$(function () {
    $('.column.gallery > img').on('click', (e) => {
        $('#g_img').attr('src', e.currentTarget.src)
    })

    $('#g_img').on('click', (e) => {
        var $md = $('.modal-dialog');
        var $img = $('#g_img')
        if ($md.css('max-width') == "90%") {
            $md.css('max-width', '500px')
            $img.css('cursor', 'zoom-in')
        } else {
            $md.css('max-width', '90%')
            $img.css('cursor', 'zoom-out')
        }
    })
});