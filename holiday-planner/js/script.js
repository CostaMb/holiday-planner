// mobile menu toggle
const menu = document.getElementById('menuIcon');
const navLinks = document.getElementById('navLinks');
if (menu && navLinks) {
    menu.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        // console.log('menu toggled');
    });
}

// currency convertor - default GBP
function convPrice(eurVal, curr) {
    let rate = 1;
    if (curr === 'GBP') rate = 0.85;
    else if (curr === 'EUR') rate = 1;
    else if (curr === 'USD') rate = 1.10;
    let converted = eurVal * rate;
    let symbol = '';
    if (curr === 'GBP') symbol = '£';
    else if (curr === 'EUR') symbol = '€';
    else if (curr === 'USD') symbol = '$';
    return symbol + converted.toFixed(2);
}

function updPrices(currency) {
    let allPrices = document.querySelectorAll('.price');
    for (let i = 0; i < allPrices.length; i++) {
        let el = allPrices[i];
        let eur = parseFloat(el.getAttribute('data-eur'));
        if (isNaN(eur)) continue;
        el.innerText = convPrice(eur, currency);
    }
}

let currencySelect = document.getElementById('currencySelect');
if (currencySelect) {
    updPrices(currencySelect.value);
    currencySelect.addEventListener('change', function(e) {
        updPrices(e.target.value);
    });
}

// like button for bali page
const likeBtn = document.getElementById('likeButton');
const likeSpan = document.getElementById('likeCounter');
if (likeBtn && likeSpan) {
    let likeCount = localStorage.getItem('baliLikes');
    if (likeCount === null) likeCount = 0;
    else likeCount = parseInt(likeCount);
    likeSpan.innerText = likeCount;

    likeBtn.addEventListener('click', function() {
        likeCount++;
        likeSpan.innerText = likeCount;
        localStorage.setItem('baliLikes', likeCount);
        likeBtn.style.transform = 'scale(1.05)';
        setTimeout(function() { likeBtn.style.transform = 'scale(1)'; }, 150);
    });
}

// book now alert
const bookBtn = document.getElementById('bookNowBtn');
if (bookBtn) {
    bookBtn.addEventListener('click', function() {
        alert('Thank you! A travel agent will contact you soon.');
    });
}

// contact form
const contactForm = document.getElementById('contactForm');
const msgDiv = document.getElementById('formMsg');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        let name = document.getElementById('nameField').value;
        if (msgDiv) {
            msgDiv.innerHTML = '✓ Thank you, ' + name + '! We will get back to you soon.';
            msgDiv.style.color = 'green';
        }
        contactForm.reset();
        setTimeout(function() {
            if (msgDiv) msgDiv.innerHTML = '';
        }, 4000);
    });
}