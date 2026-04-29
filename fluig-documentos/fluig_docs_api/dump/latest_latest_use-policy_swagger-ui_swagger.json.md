# swagger.json

> **Fonte:** [https://api.fluig.com/latest/use-policy/swagger-ui/swagger.json](https://api.fluig.com/latest/use-policy/swagger-ui/swagger.json)

---

```
{
  "swagger" : "2.0",
  "info" : {
    "description" : "Public API to check and accept the use policy document.",
    "version" : "v1",
    "title" : "Use policy"
  },
  "host" : "",
  "basePath" : "/use-policy/api",
  "tags" : [ {
    "name" : "Use policies",
    "description" : "Public API to check whether uses accepted the related use policy"
  } ],
  "paths" : {
    "/v1/use-policies" : {
      "get" : {
        "tags" : [ "Use policies" ],
        "summary" : "Checks if the logged user has already accepted the use policy document for the respective company and language.",
        "description" : "",
        "operationId" : "checkAcceptance",
        "produces" : [ "application/json; charset=UTF-8" ],
        "responses" : {
          "200" : {
            "description" : "Successful request with body content",
            "schema" : {
              "$ref" : "#/definitions/UsePolicy"
            }
          },
          "400" : {
            "description" : "The request was invalid or could not be served. An accompanying error message will explain further",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          },
          "401" : {
            "description" : "Authentication credentials were missing or incorrect",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          },
          "404" : {
            "description" : "The requested resource could not be found",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          },
          "500" : {
            "description" : "Something went wrong on the server. An accompanying error message will explain further",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        }
      }
    },
    "/v1/use-policies/accept" : {
      "post" : {
        "tags" : [ "Use policies" ],
        "summary" : "Accepts the use policy document according to the company and language of the logged user.",
        "description" : "",
        "operationId" : "accept",
        "produces" : [ "application/json; charset=UTF-8" ],
        "responses" : {
          "204" : {
            "description" : "Successful request without body content"
          },
          "400" : {
            "description" : "The request was invalid or could not be served. An accompanying error message will explain further",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          },
          "401" : {
            "description" : "Authentication credentials were missing or incorrect",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          },
          "404" : {
            "description" : "The requested resource could not be found",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          },
          "500" : {
            "description" : "Something went wrong on the server. An accompanying error message will explain further",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        }
      }
    },
    "/v1/use-policies/document/{id}/accept" : {
      "post" : {
        "tags" : [ "Use policies" ],
        "summary" : "Accepts the use policy document informed by the logger used.",
        "description" : "",
        "operationId" : "acceptByDocumentId",
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "id",
          "in" : "path",
          "description" : "Use policy document ID informed by logged user.",
          "required" : true,
          "type" : "integer",
          "format" : "int32"
        } ],
        "responses" : {
          "204" : {
            "description" : "Successful request without body content"
          },
          "400" : {
            "description" : "The request was invalid or could not be served. An accompanying error message will explain further",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          },
          "401" : {
            "description" : "Authentication credentials were missing or incorrect",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          },
          "404" : {
            "description" : "The requested resource could not be found",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          },
          "500" : {
            "description" : "Something went wrong on the server. An accompanying error message will explain further",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        }
      }
    }
  },
  "definitions" : {
    "ErrorResponse" : {
      "type" : "object",
      "properties" : {
        "code" : {
          "type" : "string"
        },
        "message" : {
          "type" : "string"
        },
        "detailedMessage" : {
          "type" : "string"
        },
        "helpUrl" : {
          "type" : "string"
        },
        "details" : {
          "type" : "array",
          "items" : {
            "$ref" : "#/definitions/ErrorResponse"
          }
        }
      }
    },
    "UsePolicy" : {
      "type" : "object",
      "properties" : {
        "id" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Use policy ID"
        },
        "tenantId" : {
          "type" : "integer",
          "format" : "int64",
          "description" : "Use policy company code (Tenant)"
        },
        "documents" : {
          "type" : "array",
          "description" : "Use policy documents",
          "uniqueItems" : true,
          "items" : {
            "$ref" : "#/definitions/UsePolicyDocument"
          }
        }
      }
    },
    "UsePolicyDocument" : {
      "type" : "object",
      "properties" : {
        "id" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Use policy document ID."
        },
        "documentId" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "ID of the physical document stored in the ECM."
        },
        "documentVersion" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Version of the physical documents stored in the ECM. "
        },
        "documentDescription" : {
          "type" : "string",
          "description" : "Description of physical document stored in the ECM"
        },
        "language" : {
          "type" : "string",
          "description" : "Language of the logged user."
        },
        "mandatory" : {
          "type" : "boolean",
          "description" : "Indicates requirement regarding acceptance of the use policy document."
        },
        "documentDefault" : {
          "type" : "boolean",
          "description" : "Indicates whether it is the standard use policy document."
        },
        "hasAccepted" : {
          "type" : "boolean",
          "description" : "Indicates whether the logged user has already accepted the current use policy document."
        }
      }
    }
  }
}
```
