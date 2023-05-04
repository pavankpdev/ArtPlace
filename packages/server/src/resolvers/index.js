"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
var merge_1 = require("@graphql-tools/merge");
var Test_1 = require("./Test");
exports.resolvers = (0, merge_1.mergeResolvers)([Test_1.testResolvers]);
