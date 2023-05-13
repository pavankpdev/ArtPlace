import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: 'https://rickandmortyapi.com/graphql', // Replace it with your GraphQL server endpoint
  generates: {
    'src/gql/__generated__/character.ts': {
      plugins: ['typescript'],
    }
  }
}
 
export default config