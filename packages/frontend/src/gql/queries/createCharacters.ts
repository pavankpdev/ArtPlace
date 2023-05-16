import { gql } from '@apollo/client';

const CREATE_CHARACTER = gql`
  mutation CreateCharacter($input: CharacterInput!) {
    createCharacter(input: $input) {
      id
      name
      status
    }
  }
`;

export default CREATE_CHARACTER