## Holiday Planner - Travel Booking Website

## About the project

This is my web development project for the university assignment. I chose the Holidae client brief (I renamed it to Holiday Planner). The client wanted a responsive website for holiday packages. Most people browse on mobile (78%) but book on desktop (52%), so the site must work well on both.

I built a 4-page website:

- Home page – with a hero section, features, a video about Bali, and two special offers (Thailand and Maldives)
- Bali package page – dedicated page for Bali 7 nights, with a video and like button
- All packages page – shows three packages (Maldives, Thailand, Romanian mountains) and a slider
- Contact page – a simple form (it shows a thank you message, no actual email sending)

## Technologies used

- HTML5
- CSS3 (including Flexbox and media queries for responsive design)
- JavaScript (for mobile menu, currency converter, like button, image slider, contact form)

## How to run the project locally

1. Download or clone the repository
2. Make sure the folder structure looks like this:
holiday-planner/
├── index.html
├── bali.html
├── packages.html
├── contact.html
├── css/
│ └── style.css
├── js/
│ └── script.js
├── images/
│ ├── maldives-300.jpg
│ ├── thailand-300.jpg
│ └── romania-mountains-300.jpg
└── videos/
└── bali-clip.mp4

3. Open any .html file in your browser (I recommend using Chrome)
4. To test responsive design, open Chrome DevTools (F12) and click the mobile icon

## Features

- Responsive layout – works on mobile, tablet and desktop
- Currency converter – prices change between GBP (default), EUR and USD
- Like button on Bali page – saves likes in your browser (localStorage)
- Image slider on the packages page – shows three destinations
- Mobile menu (hamburger) – appears on small screens
- Embedded local video about Bali

## What I learned

I learned a lot about media queries and how to make a website work on different screen sizes. I also practiced JavaScript events and how to use localStorage for the like button. The slider took me some time but I found a solution using arrays and event listeners.

## Possible improvements in the future

- Add real email sending for the contact form (using a service like Formspree)
- Optimise images for faster loading
- Add more holiday packages
- Improve accessibility (aria labels, better contrast)

## Credits

I wrote all the code myself. I used placeholder images from picsum.photos and a free video from Pexels. Some ideas for the slider and currency converter came from YouTube tutorials and Stack Overflow.
 holiday-planner
Holiday Planner - a responsive website for booking holidays project for university 2026 WebDev1 assessment 2
