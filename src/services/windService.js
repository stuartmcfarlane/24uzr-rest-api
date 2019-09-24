const axios = require('axios');
const grib2json = require('grib2json').default;
const fs = require('fs');
const tmp = require('tmp');
const { promisify } = require('util')

const writeFile = promisify(fs.writeFile)

const GRIBS_SRC = "https://www.euroszeilen.utwente.nl/weer/grib/download/harmonie_zy_ijmg_wind.grb";

exports.getWind = async () => {
    // const tmpFile = tmp.fileSync();
    const tmpFileName = '/tmp/sdm.grb';
    // console.log('git tmp file', tmpFile)
    await getGribs(GRIBS_SRC, tmpFileName);
    console.log('grib json in', tmpFileName)

    grib2json(tmpFileName, {}, (err, gribsJson) => {
        console.log('git json', gribsJson)
        // tmpFile.removeCallback();
        console.log('gribsJson', gribsJson);
    });
    const wind = {};
    return wind;
}

async function getGribs(url, path) {  
  const writer = fs.createWriteStream(path)

  const response = await axios({
    url,
    method: 'GET',
    responseType: 'stream'
  })

  response.data.pipe(writer)

  return new Promise((resolve, reject) => {
    writer.on('finish', resolve)
    writer.on('error', reject)
  })
}
