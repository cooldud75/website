const fs = require('fs');
const { parse } = require('csv-parse/sync');

module.exports = function() {
  // Read the newly renamed CSV file
  const filePath = './src/_data/bitcoin.csv';
  const fileContent = fs.readFileSync(filePath, 'utf8');
  
  // Parse it into an array of objects
  return parse(fileContent, {
    columns: true,
    skip_empty_lines: true,
    relax_column_count: true,
    trim: true
  });
};