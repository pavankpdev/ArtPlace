import { mergeTypeDefs } from '@graphql-tools/merge';

import {testTypeDefs} from "./Test";

export const typeDefs = mergeTypeDefs([testTypeDefs]);

