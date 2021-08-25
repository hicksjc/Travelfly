import * as MODEL from '../model/model.js';
// var btnId = this.id;
// var contentID = btnId + "Content";
// var heroId = btnId + "Stuff";
function init() {
    $("nav a").click(function (event) {
        let btnId = this.id;
        let contentID = btnId + "Content";
        let heroId = btnId + "Stuff";
        // $( `#classSwitch`).removeClass(`${btnId}`);
        //switch statement should, when one is clicked it reads, sees the btnId = a specific thing, then should remove the parent div class of 'hero' or whatever the ID is at the time and assign it to that button ID.
        //Switch statement now removes hero but doesn't remove or change content in title.
        //Switch statement is now fixed and does exactly what it's supposed to do.
        switch (btnId) {
            case btnId = 'home':
                removeAllClass();
                $(`#classSwitch`).closest(`div#classSwitch`).addClass(`hero`);
                MODEL.getPageStuff(heroId);
                MODEL.getPageContent(contentID);
                break;
            case btnId = 'about':
                removeAllClass();
                $(`#classSwitch`).closest(`div#classSwitch`).addClass(`about`);
                MODEL.getPageStuff(heroId);
                MODEL.getPageContent(contentID);
                break;
            case btnId = 'tours':
                removeAllClass();
                $(`#classSwitch`).closest(`div#classSwitch`).addClass(`tours`);
                MODEL.getPageStuff(heroId);
                MODEL.getPageContent(contentID);
                break;
            case btnId = 'special':
                removeAllClass();
                $(`#classSwitch`).closest(`div#classSwitch`).addClass(`special`);
                MODEL.getPageContent(contentID);
                MODEL.getPageStuff(heroId);
                break;
            case btnId = `blog`:
                removeAllClass();
                $(`#classSwitch`).closest(`div#classSwitch`).addClass(`blog`);
                MODEL.getPageContent(contentID);
                MODEL.getPageStuff(heroId);
                break;
            case btnId = 'contact':
                removeAllClass();
                $(`#classSwitch`).closest(`div#classSwitch`).addClass(`contact`);
                MODEL.getPageContent(contentID);
                MODEL.getPageStuff(heroId);
                break;
        }
        

    })
}

function addPromoListeners(){
    // let btnId = this.id;
    // let contentID = btnId + "Content";
    // let heroId = btnId + "Stuff";
    $(".promo-tours .promo .Israel #Israel").click(function () {
        alert("Button clicked");
        // switch (btnId) {
        //     case btnId = "Israel":
        //         alert("Button clicked");
        //         break;
        // }
    })
}
function removeAllClass() {
    $(`#classSwitch`).closest(`div#classSwitch`).removeClass(`hero`).removeClass(`tours`).removeClass(`about`).removeClass(`special`).removeClass(`blog`).removeClass(`contact`);
}


$(document).ready(function () {
    init();
    addPromoListeners();
    MODEL.getPageContent("homeContent");
    MODEL.getPageStuff("homeStuff");
})