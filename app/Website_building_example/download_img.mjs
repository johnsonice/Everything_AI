import https from 'https';
import fs from 'fs';

const urls = [
  { url: 'https://cdn.dribbble.com/userupload/46816311/file/386569ac6fca130abf61751ff05aa4f9.jpg?resize=2400x&vertical=center', path: './brand_assets/dribbble_main_hires.jpg' },
  { url: 'https://cdn.dribbble.com/userupload/46816310/file/adc22077c63959506b5fce92622dfc1b.jpg?resize=2400x1800', path: './brand_assets/dribbble_og_hires.jpg' },
];

for (const {url, path} of urls) {
  console.log(`Downloading: ${url}`);
  await new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        console.log(`Redirect to: ${res.headers.location}`);
        resolve();
        return;
      }
      const file = fs.createWriteStream(path);
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Saved: ${path} (${fs.statSync(path).size} bytes)`);
        resolve();
      });
    }).on('error', (e) => {
      console.error(`Error: ${e.message}`);
      resolve();
    });
  });
}
