let thePopup = document.querySelector('#thePopup');
let goNext = document.querySelector('#gonext');
let stepnoted = 1

let guide1 = document.querySelector('.popup-guide-1');
let guide2 = document.querySelector('.popup-guide-2');
let guide3 = document.querySelector('.popup-guide-3');
let guideBottom = document.querySelector('.popup-bottom-line');
let popupbottom = document.querySelector('.popupbottom');
let popuptop = document.querySelector('.popuptop');
let popupafter = document.querySelector('.popupafter');
let popupcount = document.querySelector('.popupcount');
let capturedBg = document.querySelector('#capturedbg');

goNext.addEventListener('click', (e) => {

    if (stepnoted == 1) {
        guide1.classList.remove('isActive');
        guide2.classList.add('isActive');
    }
    if (stepnoted == 2) {
        guide2.classList.remove('isActive');
        guide3.classList.add('isActive');
        goNext.innerText = "Got it";
    }
    if (stepnoted == 3) {
        guide3.classList.remove('isActive');
        guideBottom.classList.add('isActive');
        goNext.innerText = "Take a photo";
    }
    if (stepnoted == 4) {
        guideBottom.innerHTML = "<p>🤳 Hold the pose!</p>";

        popupbottom.classList.add('removedOk');
        popupcount.classList.add('gotActive');

        setTimeout(() => {
            capturedBg.classList.add('gotActive');
            setTimeout(() => {
                capturedBg.classList.remove('gotActive');
                popupcount.classList.remove('gotActive');
                popupcount.classList.remove('gotActive');
                popuptop.classList.add('removedOk');
                popupafter.classList.remove('removedOk');

            }, 150);
        }, 3200);
    }

    stepnoted++;
})

let closeit = document.querySelector('#closeit');
let loadit = document.querySelector('#loadit');
let stepskip = document.querySelector('#stepskip');

closeit.addEventListener('click', () => {

    closeit.classList.add('isRemoved');
    loadit.classList.remove('isRemoved');

    setTimeout(() => {

        // Successful save
        thePopup.style.display = 'none';
        document.body.appendChild(thePopup);
        document.querySelector('.jquery-modal').remove();
        stepnoted = 4;
        popuptop.classList.remove('removedOk');
        popupafter.classList.add('removedOk');
        guideBottom.innerHTML = " <p>And that's it 🤳 You're officially camera-ready!</p>";
        popupbottom.classList.remove('removedOk');
        closeit.classList.remove('isRemoved');
        loadit.classList.add('isRemoved');

    }, 1000);

})


stepskip.addEventListener('click', () => {

    // Back to capture
    stepnoted = 4;
    popuptop.classList.remove('removedOk');
    popupafter.classList.add('removedOk');
    guideBottom.innerHTML = " <p>And that's it 🤳 You're officially camera-ready!</p>";
    popupbottom.classList.remove('removedOk');
    closeit.classList.remove('isRemoved');
    loadit.classList.add('isRemoved');

})