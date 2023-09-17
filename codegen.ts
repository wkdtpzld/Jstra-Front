
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:4000/graphql",
  documents: "src/documents/**/*.ts",
  ignoreNoDocuments: true,
  generates: {
    "src/__generated__/": {
      preset: "client",
      plugins: ["typescript-operations", "typescript-react-apollo"]
    },
    "./graphql.schema.json": {
      plugins: ["introspection"]
    }
  }
};

export default config;
