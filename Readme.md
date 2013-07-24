###Base64 encode / decode Hex strings for URLs (module and binary tool)

####install:
```bash
npm install -g hex64
```
####commandline:
```bash
$ hex64 b64 cccccc
zMzM

$ hex64 hex zMzM
cccccc

$ hex64 cccccc
b64: zMzM

$ hex64 zMzM
hex: cccccc

$ hex64 b64 zzz
[Error: Invalid hex string]
```
####node:
```js
var hex64 = require('hex64');

hex64.encode('cccccc');   // zMzM
hex64.toBase64('cccccc'); // zMzM

hex64.decode('zMzM');     // cccccc
hex64.toHex('zMzM');      // cccccc

// intelligent: if hex -> b64 else b64 -> hex
hex64.transform('cccccc') // zMzM
hex64.transform('zMzM')   // cccccc
```

license:
  MIT
