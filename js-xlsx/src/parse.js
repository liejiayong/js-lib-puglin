let path = require('path');
let XLSX = require('node-xlsx');
let fs = require('fs');
let sheets = XLSX.parse(fs.readFileSync(path.join(__dirname, 'a.xlsx')));
// console.log(sheets);

sheets.forEach(function (sheet) {
  let keys = [];
  // 遍历xlsx每行内容
  for (let rowId in sheet['data']) {
    let row = sheet['data'][rowId];

    if (row && row.length) {
      keys.push(row);
    }
  }
  keys = keys.slice(2, 19);

  keys = keys.reduce((accele, cur) => {
    console.log(cur, cur[0]);
    let tit = cur[0],
      title = tit.replace(/\d+、/g, '').replace(/（[单多]选）/g, ''),
      isRequired = cur.length != 1,
      isMuti = tit.includes('多选'),
      content = cur.slice(1);

    accele.push({
      title,
      isRequired,
      isMuti,
      content,
    });
    return accele;
  }, []);
  // console.log('keys', keys);
  fs.writeFile(`${sheet.name}.json`, JSON.stringify(keys), (res) => {
    console.log('write success');
  });
});
