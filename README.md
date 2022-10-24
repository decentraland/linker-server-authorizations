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

* WORKAROUND Make sure the Ethereum Address is all lower case and entered mixed case.  The tool needs to be fixed to be case insenstive.
* Make sure the json is valid syntax
* Make sure the coordinate is format is ##,##
