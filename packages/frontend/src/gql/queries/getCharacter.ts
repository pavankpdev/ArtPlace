import { gql } from '@apollo/client';

const GET_CHARACTERS = gql`
  query GetCharacters {
    characters {
      results {
        id
        name
        status
      }
    }
  }
`;

export default GET_CHARACTERS