import {mergeResolvers} from "@graphql-tools/merge";
import {testResolvers} from "./Test";
import { IResolvers } from '@graphql-tools/utils';

export const resolvers: IResolvers = mergeResolvers([testResolvers]);
