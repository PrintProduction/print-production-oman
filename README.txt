PRINT PRODUCTION — GITHUB PAGES WEBSITE
=====================================

CONTENTS
index.html      Website layout and SEO metadata
style.css       Colors, spacing, image viewer and responsive layout
script.js       Products, filters, WhatsApp number, referral and interactions
images/         All 15 separate portfolio photographs PLUS existing sample SVGs
robots.txt      SEO crawler hints
sitemap.xml     Search engine sitemap
.nojekyll       Plain static GitHub Pages publishing
REFERRAL-ADMIN-GUIDE.txt   Discount proof and redemption procedure

INSTALL (EXISTING GITHUB REPOSITORY)
1. First back up your existing repository: GitHub > Code > Download ZIP.
2. Extract this ZIP on your computer.
3. Open https://github.com/PrintProduction/print-production-
4. Use Add file > Upload files and drag the CONTENTS of this extracted folder
   (index.html, script.js, style.css, images/, and the other files).
   Do NOT upload the ZIP itself, and do NOT nest the site inside another folder.
5. Click Commit changes. To prevent duplicate nested files, the repo root should
   have index.html, style.css, script.js, and an images/ folder.
6. Settings > Pages: Deploy from a branch, main, /(root).
7. Visit https://printproduction.github.io/print-production-oman/ and refresh Ctrl+F5.
8. Test the first product image, its small green WhatsApp icon, and the referral popup.

BUSINESS CONTACT SETTINGS
Near the top of script.js:
  whatsapp: "96876372936"
  instagram: "https://www.instagram.com/creative_oman786/"
The WhatsApp number is the previously used number from your uploaded advertising
images and prior website version; VERIFY it is your active business WhatsApp.
Its official international URL is https://wa.me/96876372936 (no plus sign).
The link opens WhatsApp/WhatsApp Web according to the visitor's device and setup.

GALLERY & PRODUCT EDITS
- Change product names, categories and image paths in the PRODUCTS list of script.js.
- Portfolio grid data is in PROJECTS.
- The image file names in images/ must match the image paths in script.js exactly.
- All fifteen portfolio-*.webp photographs are included and are 1000x800.
- Clicking a photo opens a full-screen viewer. Only the green WhatsApp icon
  starts an order inquiry. Arrow keys/Next/Previous switch images.
- The collection has exactly three filters: All designs / Acrylic / Illuminated.

REFERRAL OFFER — IMPORTANT
- Customers share their unique link with FIVE different WhatsApp contacts.
- Customers prepare FIVE screenshots, each showing one recipient and the link sent.
- The in-site 0/5 counter is ONLY a personal, self-reported checklist; it DOES
  NOT verify actual shares, delivery, unique contacts or approval.
- Once 5/5 screenshots are marked ready, 'Send Proof & Request My 20% Discount'
  opens a prefilled WhatsApp message to the business. Customers MUST then
  attach the screenshots themselves and press Send.
- You manually verify the five screenshots and approve the referral. Only YOU
  issue a unique single-use code through WhatsApp, and keep a private record
  of whether it is redeemed. See REFERRAL-ADMIN-GUIDE.txt.
- Pricing is not supplied for the products: the OMR discount field is a 20%
  preview of a QUOTED eligible price, not a checkout or guarantee.

PRIVACY
Do not commit customer phone numbers or referral screenshots to public GitHub.
Ask customers to hide unrelated private messages before sharing evidence.

No backend, payment system, paid API or installation is required.
