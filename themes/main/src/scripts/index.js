import '../../../../node_modules/bulma/bulma.sass';
import '../../../../node_modules/jquery.mmenu/dist/jquery.mmenu.all.css';

import '../styles/index.scss';

import $ from '../../../../node_modules/jquery/dist/jquery';
import '../../../../node_modules/jquery.mmenu/dist/jquery.mmenu.all';
import '../../../../node_modules/jquery-modal/jquery.modal';

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

    var unlock = function () {
        $('.offer-panel').show();
        $('.unlock').hide();

        let items = window.Config.offer_ids;

        let offer = items[Math.floor(Math.random() * items.length)];

        $('#offer').attr('src', `https://govice.online/click?offer_id=${offer[0]}&affiliate_id=512&sub_id1=&link_id=${offer[1]}`);

        var counter = 0;
        var c = 0;
        var i = setInterval(function() {
            $(".loading-page .counter h1").html(c);
            $(".loading-page").css("width", c + "%");

            counter++;
            c++;
            if (counter === 101) {
                clearInterval(i);
            }
        }, 50);
    };

    $('#verify-modal').on($.modal.OPEN, function () {
        unlock();
    });

});
