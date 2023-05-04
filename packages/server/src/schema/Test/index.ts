import { gql } from 'apollo-server-express';

export const testTypeDefs = gql`
    type Query {
        hello: String
    }
`;
