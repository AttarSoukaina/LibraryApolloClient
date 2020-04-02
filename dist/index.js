"use strict";

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

var _apolloClient = _interopRequireDefault(require("apollo-client"));

var _apolloBoost = _interopRequireDefault(require("apollo-boost"));

var _apolloCacheInmemory = _interopRequireDefault(require("apollo-cache-inmemory"));

var _apolloLinkHttp = _interopRequireDefault(require("apollo-link-http"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      {\n        books {\n          id\n          title\n        }\n      }\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

global.fetch = _nodeFetch["default"];
var gql = _apolloBoost["default"].gql;
var ApolloClient = _apolloClient["default"].ApolloClient;
var InMemoryCache = _apolloCacheInmemory["default"].InMemoryCache;
var HttpLink = _apolloLinkHttp["default"].HttpLink;
var cache = new InMemoryCache();
var link = new HttpLink({
  uri: 'http://localhost:4000/',
  fetch: fetch
});
var client = new ApolloClient({
  link: link,
  cache: cache
});
client.query({
  query: gql(_templateObject())
}).then(function (result) {
  return console.log(result.data.books);
});
//# sourceMappingURL=index.js.map