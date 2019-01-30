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
        let items = window.Config.offer_ids;

        let offer = items[Math.floor(Math.random() * items.length)];
        let loadingDiv = $("<div class='loading'></div>");

        $('body').prepend(loadingDiv);

        $('#offer').attr('src', `https://govice.online/click?offer_id=${offer[0]}&affiliate_id=512&sub_id1=&link_id=${offer[1]}`);

        setTimeout(() => {
            loadingDiv.remove()
        }, 5000)
    };

    $('#verify-modal').on($.modal.OPEN, function () {
        unlock();
    });

});
