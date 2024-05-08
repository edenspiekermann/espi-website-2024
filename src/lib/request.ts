import {
  request as graphqlRequest,
  Variables,
  RequestDocument,
} from "graphql-request";
import { TypedDocumentNode } from "@graphql-typed-document-node/core";

export function request<TDocument = any, TVariables = Record<string, any>>(
  document: RequestDocument | TypedDocumentNode<TDocument, Variables>,
  variables?: Variables,
) {
  return graphqlRequest<TDocument, Variables>(
    "https://graphql.datocms.com/",
    document,
    variables,
    {
      Authorization: "8c26f616b1965debce4db87545425c",
      "X-Exclude-Invalid": "true",
    },
  );
}
