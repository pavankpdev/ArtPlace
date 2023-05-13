import { gql } from '@apollo/client';
import { GetCharactersQuery} from '../types/graphql';

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