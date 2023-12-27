import fs from "fs";
import Ajv from "ajv";
import { promisify } from "util";
import { LinkerAuthorization } from "@dcl/schemas";

const readFile = promisify(fs.readFile);
const ajv = new Ajv({ $data: true });
const validator = ajv.addSchema(
  LinkerAuthorization.schema,
  "LinkerAuthorization"
);

export async function check() {
  const authorizationFile = await readFile("./authorizations.json", "utf8");
  console.log("Reading authorizations.json");
  const authorizations: LinkerAuthorization[] = JSON.parse(authorizationFile);
  console.log("Validating authorizations");
  for (let i = 0; i < authorizations.length; i++) {
    const authorization = authorizations[i];
    if (!validator.validate("LinkerAuthorization", authorization)) {
      throw Error(
        `Invalid authorization "${
          authorization.name
        }" in position "${i}" \n ${JSON.stringify(validator.errors)}`
      );
    }
  }
  console.log("authorizations.json is valid");

  console.log("Reading db.json");
  const dbFile = await readFile("./db.json", "utf8");
  JSON.parse(dbFile);
  console.log("db.json is valid");
}

check().catch((error) => {
  console.error("Validation failed", error);
  process.exit(1);
});
