import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: process.env.NEXT_PUBLIC_GRAPHQL_SERVER_ENDPOINT,
  generates: {
    'src/gql/__generated__/character.ts': {
      plugins: ['typescript'],
    }
  }
}
 
export default config