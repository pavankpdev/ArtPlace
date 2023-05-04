"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
var merge_1 = require("@graphql-tools/merge");
var Test_1 = require("./Test");
exports.typeDefs = (0, merge_1.mergeTypeDefs)([Test_1.testTypeDefs]);
