import '../../../../node_modules/jquery.mmenu/dist/jquery.mmenu.all.css';
// import '../../../../node_modules/jquery-modal/jquery.modal.css';

import '../styles/index.scss';

import $ from '../../../../node_modules/jquery/dist/jquery';
import '../../../../node_modules/jquery.mmenu/dist/jquery.mmenu.all';
// import '../../../../node_modules/jquery-modal/jquery.modal';
import '../../../../node_modules/sticky-sidebar/src/sticky-sidebar';

import run from './dynamic-ads'

window.jQuery = $;

$(function () {
    $('#slide-mega-menu').mmenu({
        navbar: {
            title: 'Sections'
        },
        hooks: {
            "open:start": function () {
                $('#panel').removeClass('hidden');
            }
        }
    }, {
        offCanvas: {
            pageSelector: "#panel"
        }
    });

    run();

    // var unlock = function () {
    //     let items = window.Config.offer_ids;
    //
    //     let offer = items[Math.floor(Math.random() * items.length)];
    //     let loadingDiv = $("<div class='loading'></div>");
    //
    //     $('body').prepend(loadingDiv);
    //
    //     $('#offer').attr('src', `https://govice.online/click?offer_id=${offer[0]}&affiliate_id=512&sub_id1=&link_id=${offer[1]}`);
    //
    //     setTimeout(() => {
    //         loadingDiv.remove()
    //     }, 5000)
    // };
    //
    // $('#verify-modal').on($.modal.OPEN, function () {
    //     unlock();
    // });

    if ($('.sidebar').length) {
        new StickySidebar('.sidebar', {
            topSpacing: 20,
            bottomSpacing: 200,
            containerSelector: '.main-content',
            innerWrapperSelector: '.sidebar__inner'
        });
    }

    $('.search-icon').click(function () {
        $('#search-box-modal').toggleClass('is-active');
    });

    $('#search-box-close').click(function () {
        $('#search-box-modal').toggleClass('is-active');
    });

});
