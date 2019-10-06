const adSenseAd = (pub_id, slot_id) => {
    const html = `
        <ins class="adsbygoogle"
     style="display:block"
     data-ad-client="${pub_id}"
     data-ad-slot="${slot_id}"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>`;

    return {
        html: html,
        afterInsertFunc: () => {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        }
    }
};

const bannerAd = (bannerSrc, link) => {
    const html = `<div class="banner">
                    <a href="${link}">
                    <img src="${bannerSrc}">
                    </a>
                    </div>
                    `;

    return {
        html: html
    }
};

const sentenceAd = (text, linkText, link) => {

    link = `<a href="${link}">${linkText}</a>`;

    const html = `
<p style="display: inline-block; padding: 1rem; margin: 1rem 0; background-color: #e8e8e8">
${text.replace(linkText, link)}
</p>    
    `;

    return {
        html: html
    }

};

const insertAd = (adConfig, location) => {
    const locationNodes = document.querySelectorAll(`.dynamic-${location}`);

    if (!locationNodes) {
        return;
    }

    locationNodes.forEach((n) => {
        n.innerHTML = adConfig.html;
    });

    if (adConfig.afterInsertFunc) {
        adConfig.afterInsertFunc(locationNodes);
    }
};

const theMonitizerAd = (siteId, formatId) => {
    const id = `${siteId}-${formatId}`;
    const html = `<div style="text-align:center;" id="${id}"></div>`;

    return {
        html: html,
        afterInsertFunc: (nodes) => {
            const scripts = [
                `//ads.themoneytizer.com/s/gen.js?type=${formatId}`,
                `//ads.themoneytizer.com/s/requestform.js?siteId=${siteId}&formatId=${formatId}`
            ];

            nodes.forEach((elem) => {
                scripts.forEach((src) => {
                    var scr = document.createElement('script');
                    scr.src = src;
                    scr.type = 'text/javascript';
                    elem.appendChild(scr);
                })
            });
        }
    }
};

const run = () => {
    insertAd(adSenseAd('ca-pub-3609124934128625', '9809657559'), 'top');
    insertAd(bannerAd('https://eu1-us1.ckcdnassets.com/1298/creatives/6195/Forskolin250_english_300x300.jpg', 'https://mixi.mn/?a=146186&c=6186&p=r&s2=side-banner'), 'side');
    insertAd(sentenceAd('testing here', 'here', 'https://google.com'), 'above_content');
};

export default run;



