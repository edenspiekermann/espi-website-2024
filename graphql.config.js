require('dotenv').config({path: './.env.local'});

module.exports = {
  schema: [
    {
      "https://graphql.datocms.com": {
        headers: {
          Authorization: `Bearer ${process.env.DATO_TOKEN}`,
          "X-Exclude-Invalid": "true"
        }
      }
    }
  ],
  documents: [
    "src/sections/**/*.graphql",
    "src/components/**/*.graphql",
    "./src/graphql/*.graphql",
  ],
  generates: {
    "src/graphql/types/generated.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typed-document-node"
      ],
      config: {
        strictScalars: true,
        scalars: {
          BooleanType: "boolean",
          CustomData: "Record<string, unknown>",
          Date: "string",
          DateTime: "string",
          FloatType: "number",
          IntType: "number",
          ItemId: "string",
          JsonField: "unknown",
          MetaTagAttributes: "Record<string, string>",
          UploadId: "string"
        },
        // Uncomment the following line if you have a custom naming convention config
        // namingConvention: "./pascalCaseWithUnderscores"
      }
    }
  },
  hooks: {
    afterOneFileWrite: ["prettier --write"]
  }
};
