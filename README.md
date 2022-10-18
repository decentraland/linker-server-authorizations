# Linker Authorizations

To allow an address to deploy over Roads or Plazas, please send a pull request updating `db.json`.


Format:
```json
{
  "0xEthereumAddress": [
    "0,0",
    "0,1"
  ],
  "0xSecondAddress": [
    "0,1",
    "0,2"
  ]
}
```

Notes:

* Make sure the Ethereum Address is all lower case
* Make sure the json is valid syntax
* Make sure the coordinate is format is ##,##
