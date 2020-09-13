# SMTP address extract

Extract addresses and aliases from SMTP addresses.

## Instalation

```
npm install smtp-address-extract --save
```

## Usage

```javascript
import { addresses, aliases, parse } from 'smtp-address-extract';

const smtp_string = "Pavel Saman <pavel@saman.cz>; Saman Pavel <samanpavel@gmail.com>";

console.log(addresses(smtp_string));
// [ 'pavel@saman.cz', 'samanpavel@gmail.com' ]

console.log(aliases(smtp_string));
// [ 'Pavel Saman', 'Saman Pavel' ]

console.log(parse(smtp_string));
// [
//  { addr: 'pavel@saman.cz', alias: 'Pavel Saman' },
//  { addr: 'samanpavel@gmail.com', alias: 'Saman Pavel' }
// ]
```

## Licence

MIT
