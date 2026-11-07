# Print Production Oman — GitHub Pages website

This package contains the complete single-page website and all 19 supplied images. CSS, JavaScript, SVG icons and page structure are embedded in index.html. No installation, build step or external font service is needed.

## Files and folders

| Location | Purpose |
| --- | --- |
| index.html | Complete website with embedded styles and gallery code |
| images/ | All 19 product images, already renamed and linked |
| README.md | These setup and editing instructions |
| .nojekyll | Tells GitHub Pages to serve the static files directly |

Keep index.html and images/ beside each other. The ZIP contains these at its top level. Your extraction program may create an outer folder. Upload the contents of that folder to the repository root.

## Preview on your computer

1. Download the ZIP and choose Extract All in Windows.
2. Open the extracted folder containing index.html.
3. Double-click index.html to open it in Chrome or Edge.
4. Click any product image to open the full-screen viewer. The WhatsApp button is at the bottom. Use the arrows to browse, and the close button or Escape to return.
5. Internet access is needed when opening WhatsApp or Instagram.

## Publish with GitHub Pages

1. Sign in to GitHub. Create a public repository, for example print-production-oman, or open your existing public repository.
2. In the repository, choose Add file > Upload files. In a new empty repository, use the uploading an existing file link.
3. From Windows File Explorer, drag index.html, the entire images folder, README.md and .nojekyll onto GitHub's upload area. Drag the images folder itself so GitHub preserves its name and contents. If hidden files are not shown, .nojekyll is optional for this plain HTML site.
4. Wait until every file finishes uploading, then choose Commit changes on the main branch. The repository should show index.html and an images folder directly on its main Code screen. Uploading the ZIP itself will not unpack the website.
5. Open Settings > Pages. Under Build and deployment, select Deploy from a branch. Select main and /(root), then Save.
6. Wait for the Pages deployment to finish. Look in the Actions tab for deployment progress. Return to Settings > Pages and use Visit site to get the exact live address.
7. A project site normally uses https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/. For the PrintProduction account and print-production-oman repository, the expected address is https://printproduction.github.io/print-production-oman/. Deployment must succeed before it becomes available.
8. Test the live page on your phone and computer. Open a gallery image, browse images, close the viewer, then use a WhatsApp icon and the Instagram link.

GitHub's publishing instructions were checked on 8 November 2026.
https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Updating an existing repository

Download a backup before replacing files. Upload the new index.html and images folder to the same repository root and commit the changes. The site uses only the image filenames included here, so unrelated old files are not loaded. Keep your existing Pages publishing branch and root setting if already configured correctly. After the deployment completes, refresh with Ctrl+F5 if an old page remains cached.

## Images and category choices

The supplied compositions include any text and advertising already printed in the image. Images were resized to a maximum of 1600 pixels on the longest edge and compressed to WebP quality 85 for smaller downloads. Category assignment is based on the references and can be changed in index.html. Gold finish and metal nameplates are grouped under Metal and Acrylic. The mixed collection reference is under Acrylic. Illuminated designs are grouped under Illuminated even when their housings include metal.

Some supplied images are visual mockups. The page describes the gallery as design references and visual mockups. Review material descriptions before publishing if your production specification differs.

## Replace an existing image

1. Find its filename in the images folder or the table below.
2. Replace that file with your new image using exactly the same filename and extension. Names are case-sensitive on GitHub.
3. Upload the replacement to the same images folder and commit it.
4. For a new filename, update both the image src and its surrounding image-open link href in index.html. The hero also uses villa-3617.webp.

For smaller future downloads, export photos as high-quality JPEG or WebP at a suitable web resolution before replacing them. Current images use compressed WebP and are loaded lazily below the hero. Keep replacement images in WebP format when reusing the existing filenames.

## Add a new product

1. Put its image in images/ with a simple lowercase filename such as new-house-sign.jpg.
2. Open index.html in a text editor. Find the section with id metal-acrylic, acrylic or illuminated.
3. Copy one complete article with class product into that section's product-grid.
4. Give the article a unique id and use that same value in its image-open link's data-code.
5. Update the image src, link href, data-name, alt text, heading and description.
6. Update that product's WhatsApp link message and accessible label. Keep phone=96876372936 and URL-encode the message. The full-screen viewer automatically discovers the added card and builds its message from data-name and data-code.

## Contacts and viewer behavior

All WhatsApp links use https://api.whatsapp.com/send?phone=96876372936&text= followed by an encoded message. The number is international and has no plus sign or spaces in the URL. Each product button includes its name and reference. The full-screen viewer adds the live page reference link when opened over HTTP or HTTPS.

The website opens WhatsApp's chat flow. Actual app handoff depends on the visitor's device, WhatsApp installation/login and network access. Regional handoff in Oman and Pakistan needs checking on real devices after deployment.

Instagram is https://www.instagram.com/creative_oman786/.

The viewer fills the browser viewport and fits the complete image inside it. It supports keyboard focus, Escape, arrow keys and visible previous/next buttons. On phones, the layout uses responsive grids and touch-sized buttons.

To change the contact number, replace every instance of 96876372936 in index.html and update the visible formatted number. To change Instagram, replace its full URL and displayed handle.

## Image index

| File | Category | Design |
| --- | --- | --- |
| images/acrylic-collection.webp | See page section | acrylic-collection |
| images/adel-2838.webp | See page section | adel-2838 |
| images/arabic-wall-decor.webp | See page section | arabic-wall-decor |
| images/circles-6402.webp | See page section | circles-6402 |
| images/dots-9134.webp | See page section | dots-9134 |
| images/floral-5728.webp | See page section | floral-5728 |
| images/flowers-9134.webp | See page section | flowers-9134 |
| images/gate-1839.webp | See page section | gate-1839 |
| images/gold-1307.webp | See page section | gold-1307 |
| images/heritage-2685.webp | See page section | heritage-2685 |
| images/kulkarni-1204.webp | See page section | kulkarni-1204 |
| images/lightbox-1984.webp | See page section | lightbox-1984 |
| images/mohammed-2041.webp | See page section | mohammed-2041 |
| images/palm-1307.webp | See page section | palm-1307 |
| images/pillar-7452.webp | See page section | pillar-7452 |
| images/script-1307.webp | See page section | script-1307 |
| images/serif-1307.webp | See page section | serif-1307 |
| images/tree-1307.webp | See page section | tree-1307 |
| images/villa-3617.webp | See page section | villa-3617 |


## 20% sharing offer

The prominent gold button has a slow flashing glow and opens the offer section. Customers share the live website with 5 people, attach screenshots in WhatsApp, and receive 20% off after you verify the proof. The share button opens WhatsApp's recipient selection. Customers can also copy the link and send it individually. Sending proof opens your business chat at +968 7637 2936; customers attach screenshots themselves.

You verify screenshots and apply the discount manually. Clicking Share or Send screenshots does not verify recipients or automatically approve a claim. The static website does not collect screenshots or track who receives a message.

The shared link is the customer-facing GitHub Pages website. Local previews default to https://printproduction.github.io/print-production-oman/. Change publishedWebsite in index.html if your intended public address differs. On a live HTTP/HTTPS site the actual page address is used, with query parameters and fragments removed.

To remove the offer later, remove the share-offer section and offer-float anchor, plus the referral CSS and JavaScript. The product gallery remains independent.
