// Get Image From Section Page :
let Images = document.querySelectorAll('img')

// Get PreviousButton From Control Page :
let PreviousButton = document.querySelector('button:first-child')

// Get NextButton From Control Page :
let NextButton = document.querySelector('button:last-child')

// Get Image From Control Page :
let NumberSpans = document.querySelector('.indexes')

// Generate Spans :
Images.forEach((x, i) => {
    // Create Span Element :
    let span = document.createElement('span')

    // Add TextNode To Span :
    span.textContent = i + 1

    // Add Span To NumberSpans :
    NumberSpans.appendChild(span)
})

// Spans Variable :
let Spans = NumberSpans.querySelectorAll('span')

Spans.forEach((x, i) => {
    // Add Show Class On First Images And Active For First Spans :
    Images[0].classList.add('show')
    Spans[0].classList.add('active')
    PreviousButton.classList.add('disabled')

    x.onclick = function () {
        // Remove Show Class On All Images And Active For All Spans:
        Images.forEach((x) => x.classList.remove('show'))
        Spans.forEach((x) => x.classList.remove('active'))

        // Add Show Class On This Image && Active Class On Span:
        Images[i].classList.add('show')
        x.classList.add('active')

        // Check And Watch Out :
        i === Spans.length - 1 ? NextButton.classList.add('disabled') : NextButton.classList.remove('disabled')
        i === 0 ? PreviousButton.classList.add('disabled') : PreviousButton.classList.remove('disabled')
    }
})

NextButton.onclick = function () {
    // Remove Disabled Class On PreviousButton :
    PreviousButton.classList.remove('disabled')

    // Get The Active Class Index :
    let CurrentImageIndex;
    Spans.forEach((x, i) => x.classList.contains('active') ? CurrentImageIndex = i : '')

    // Remove Show Class On All Images And Active For All Spans:
    Images.forEach((x) => x.classList.remove('show'))
    Spans.forEach((x) => x.classList.remove('active'))

    // Add Show Class On Current Images And Active For Current Spans :
    Spans[CurrentImageIndex + 1] ? Spans[CurrentImageIndex + 1].classList.add('active') : ''
    Images[CurrentImageIndex + 1] ? Images[CurrentImageIndex + 1].classList.add('show') : ''

    // Check If This CurrentImageIndex + 1 Is The Last Index :
    CurrentImageIndex + 1 === Spans.length - 1 ? NextButton.classList.add('disabled') : ''
}
PreviousButton.onclick = function () {
    // Remove Disabled Class On NextButton :
    NextButton.classList.remove('disabled')

    // Get The Active Class Index :
    let CurrentImageIndex;
    Spans.forEach((x, i) => x.classList.contains('active') ? CurrentImageIndex = i : '')

    // Remove Show Class On All Images And Active For All Spans:
    Images.forEach((x) => x.classList.remove('show'))
    Spans.forEach((x) => x.classList.remove('active'))

    // Add Show Class On Current Images And Active For Current Spans :
    Spans[CurrentImageIndex - 1] ? Spans[CurrentImageIndex - 1].classList.add('active') : ''
    Images[CurrentImageIndex - 1] ? Images[CurrentImageIndex - 1].classList.add('show') : ''

    // Check If This CurrentImageIndex + 1 Is The Last Index :
    CurrentImageIndex - 1 ===  0 ? PreviousButton.classList.add('disabled') : ''
}