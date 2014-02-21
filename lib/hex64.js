module.exports = {
  decode  : decode,
  encode  : encode,
  isHex   : isHex,
  toHex   : decode,
  toBase64: encode,
  transform: transform
};

var plus       = /\+/g;
var slash      = /\//g;
var minus      = /-/g;
var underscore = /_/g;
var hex        = /^[0-9a-fA-F]{1,}$/;

function isHex (str) {
  return str.match(hex);
}

function encode (str) {
  var out;
  if (!isHex(str)) {
    return new Error('Invalid hex string');
  }
  try {
    if (str.length % 2 === 1) {
      str = str + '0'; // buffer expects hex to have an even number of digits
    }
    return (new Buffer(str.toString(), 'hex')).toString('base64').replace(plus, '-').replace(slash, '_');
  }
  catch (err) {
    return err;
  }
}

function decode (str) {
  var out;
  try {
    return (new Buffer(str.toString().replace(minus, '+').replace(underscore, '/'), 'base64')).toString('hex');
  }
  catch (err) {
    return err;
  }
}

function transform (str) {
  if (isHex(str)) {
    return encode(str);
  }
  else {
    return decode(str);
  }
}