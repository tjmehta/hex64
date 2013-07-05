Base64 encode and decode Hex strings for URLs (module and binary tool)

install:

  npm install -g hex64

commandline:

  $ hex64 b64 cccccc'
  zMzM'

  $ hex64 hex zMzM'
  cccccc'

  $ hex64 cccccc'
  b64: zMzM'

  $ hex64 zMzM'
  hex: cccccc'

  $ hex64 b64 zzz
  [Error: Invalid hex string]

node:

	var hex64 = require('hex64');

	hex64.encode('cccccc');   // zMzM
  hex64.toBase64('cccccc'); // zMzM

	hex64.decode('zMzM');     // cccccc
  hex64.toHex('zMzM');      // cccccc


license:
  MIT