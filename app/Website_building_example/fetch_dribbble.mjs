import puppeteer from 'puppeteer';

const url = process.argv[2] || 'https://dribbble.com/shots/27110254-AI-Smart-Ring-App-UI-widgets';

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1200 });

  await page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');

  try {
    await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
    await new Promise(r => setTimeout(r, 3000));

    // Check for carousel/multiple images
    const carouselInfo = await page.evaluate(() => {
      // Look for carousel dots, arrows, or multiple media elements
      const dots = document.querySelectorAll('.shot-carousel-dot, [class*="carousel"] button, [class*="slider"] button, .shot-nav-dot');
      const arrows = document.querySelectorAll('[class*="carousel"] [class*="arrow"], [class*="next"], [class*="prev"]');
      const mediaItems = document.querySelectorAll('.media-content img, .shot-image img, [class*="shot"] img[src*="userupload"]');
      const navButtons = document.querySelectorAll('button[aria-label*="next"], button[aria-label*="previous"], .shot-navigation');

      // Check for bullet/dot navigation
      const bulletNav = document.querySelector('[class*="bullet"], [class*="indicator"], [class*="pagination"]');

      // Find the small dot near the image (carousel indicator)
      const allButtons = Array.from(document.querySelectorAll('button'));
      const dotButtons = allButtons.filter(b => {
        const style = window.getComputedStyle(b);
        return (parseInt(style.width) < 20 && parseInt(style.height) < 20);
      });

      return {
        dots: dots.length,
        arrows: arrows.length,
        mediaItems: Array.from(mediaItems).map(el => el.src?.substring(0, 100)),
        navButtons: navButtons.length,
        bulletNav: bulletNav?.outerHTML?.substring(0, 200),
        dotButtons: dotButtons.length,
        allButtonCount: allButtons.length,
        allButtonLabels: allButtons.map(b => b.textContent?.trim() || b.getAttribute('aria-label') || '').filter(Boolean)
      };
    });

    console.log('Carousel info:', JSON.stringify(carouselInfo, null, 2));

    // Try clicking the right arrow / next dot to see if there are more images
    const clicked = await page.evaluate(() => {
      // Look for a dot/bullet indicator near the main image
      const dot = document.querySelector('.shot-carousel-dot, [class*="dot"]:not([class*="header"]), circle[fill]');
      if (dot) {
        dot.click();
        return 'clicked dot';
      }

      // Try clicking on the right side of the image area
      const shotArea = document.querySelector('.media-content, .shot-image, [class*="shot-detail"]');
      if (shotArea) {
        const rect = shotArea.getBoundingClientRect();
        // Try clicking a "next" area
        return `shot area found at ${rect.width}x${rect.height}`;
      }

      return 'nothing found';
    });

    console.log('Click attempt:', clicked);

    // Get ALL srcset URLs from the main image to find all images in the set
    const allImageUrls = await page.evaluate(() => {
      const allSrcsets = Array.from(document.querySelectorAll('img[srcset]')).map(img => ({
        srcset: img.srcset,
        src: img.src,
        alt: img.alt
      }));

      // Find any data attributes with image IDs
      const allImgIds = Array.from(document.querySelectorAll('[data-image-id], [data-shot-id]')).map(el => ({
        imageId: el.dataset?.imageId,
        shotId: el.dataset?.shotId
      }));

      return { srcsets: allSrcsets, imageIds: allImgIds };
    });

    console.log('\nAll image srcsets:', JSON.stringify(allImageUrls, null, 2));

  } catch (e) {
    console.error('Error:', e.message);
  }

  await browser.close();
})();
