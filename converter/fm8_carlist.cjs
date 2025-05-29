const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

// Load the HTML file
const htmlFilePath = path.join(__dirname, './FM8_carList.html');
const htmlContent = fs.readFileSync(htmlFilePath, 'utf8');
// Parse the HTML content
const $ = cheerio.load(htmlContent);
const rows = $('html body');
Log.log(`rows ${rows.length}`);
// Extract the data from the table
const carData = {};
$('tr').each((index, element) => {
  const tds = $(element).find('td');
  if (tds.length === 3) {
    const id = parseInt($(tds[0]).text().trim(), 10);
    const name = $(tds[1]).text().trim();
    const category = $(tds[2]).text().trim();
    console.log(`parsed ${id} ${name} ${category}`);
    carData[id] = { name, category };
  }
});
console.log(`carData ${JSON.stringify(carData)}`)
// Generate the TypeScript file content
const tsFileContent = `
class CarLookup {
  private carData: { [key: number]: { name: string, category: string } } = ${JSON.stringify(carData, null, 2)};

  getCarInfo(id: number): { name: string, category: string } | undefined {
    return this.carData[id];
  }
}

// Example usage:
const carLookup = new CarLookup();
console.log(carLookup.getCarInfo(3360)); // { name: "2020 Automobili Pininfarina Battista", category: "Modern Hypercars" }
`;

// Write the TypeScript file
const tsFilePath = path.join(__dirname, './FM8_carList.ts');
fs.writeFileSync(tsFilePath, tsFileContent.trim());

console.log('TypeScript file generated successfully.');