let path = require('path');
let XLSX = require('node-xlsx');
let fs = require('fs');
let sheets = XLSX.parse(fs.readFileSync(path.join(__dirname, 'a.xlsx')));
console.log(sheets);

sheets.forEach(function (sheet) {
  let obj = [];
  let keys = [];
  // 遍历xlsx每行内容
  for (let rowId in sheet['data']) {
    let row = sheet['data'][rowId];
    keys.push([]);
    if (rowId == 0) {
      continue;
    }
    if (rowId == 0) {
      keys = row;
    } else {
      for (let i = 0; i < row.length; i++) {
        obj[keys[i]] = row[i];
        keys[rowId].push(row[i]);
        // console.log(row[i]);
      }
    }
    // console.log('-----', keys);
  }
  //   obj = Array(keys.length).fill({
  //     title: '',
  //     content: [],
  //     right: -1,
  //   });
  keys.forEach((item, index) => {
    if (index == 0) return;
    obj.push({
      title: item[0],
      content: [
        {
          label: 1,
          value: item[1],
        },
        {
          label: 2,
          value: item[2],
        },
      ],
      right: item[3] - 1,
    });
  });
  fs.writeFile(`${sheet.name}.json`, JSON.stringify(obj), res => {
    console.log('write success');
  });
});
var map = {
  0: 'name',
  1: 'content',
  2: 'content',
  3: 'right',
};
