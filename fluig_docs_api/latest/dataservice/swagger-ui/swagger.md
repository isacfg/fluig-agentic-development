# swagger.json

> **Fonte:** [https://api.fluig.com/latest/dataservice/swagger-ui/swagger.json](https://api.fluig.com/latest/dataservice/swagger-ui/swagger.json)

---

```
{
  "swagger" : "2.0",
  "info" : {
    "description" : "Manage integration operations",
    "version" : "v2",
    "title" : "Integration"
  },
  "host" : "",
  "basePath" : "/dataservice/api",
  "tags" : [ {
    "name" : "Operations",
    "description" : "Operations management"
  } ],
  "paths" : {
    "/v2/operations" : {
      "get" : {
        "tags" : [ "Operations" ],
        "summary" : "Returns the list of available operations",
        "description" : "",
        "operationId" : "findOperations",
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "page",
          "in" : "query",
          "description" : "Page Number",
          "required" : false,
          "type" : "integer",
          "default" : 1,
          "minimum" : 1,
          "format" : "int32"
        }, {
          "name" : "pageSize",
          "in" : "query",
          "description" : "Number of records per page.",
          "required" : false,
          "type" : "integer",
          "default" : 1000,
          "maximum" : 1000,
          "format" : "int32"
        }, {
          "name" : "expand",
          "in" : "query",
          "description" : "Expandable fields",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "object"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "order",
          "in" : "query",
          "description" : "Sorting by field(s)",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string",
            "enum" : [ "id", "name", "description" ]
          },
          "collectionFormat" : "multi"
        } ],
        "responses" : {
          "200" : {
            "description" : "Ok",
            "schema" : {
              "$ref" : "#/definitions/OperationCollectionResponse"
            }
          },
          "400" : {
            "description" : "Bad request",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          },
          "401" : {
            "description" : "User is not authenticated",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          },
          "500" : {
            "description" : "Internal server error, see reply for more details",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        }
      }
    },
    "/v2/operations/{operationId}" : {
      "get" : {
        "tags" : [ "Operations" ],
        "summary" : "Returns an operation",
        "description" : "",
        "operationId" : "findByOperationCode",
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "operationId",
          "in" : "path",
          "description" : "Operation Id",
          "required" : true,
          "type" : "integer",
          "format" : "int64"
        }, {
          "name" : "expand",
          "in" : "query",
          "description" : "Expandable fields",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "object"
          },
          "collectionFormat" : "multi"
        } ],
        "responses" : {
          "200" : {
            "description" : "Ok",
            "schema" : {
              "$ref" : "#/definitions/Operation"
            }
          },
          "400" : {
            "description" : "Bad request",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          },
          "401" : {
            "description" : "User is not authenticated",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          },
          "404" : {
            "description" : "Operation not found.",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          },
          "500" : {
            "description" : "Internal server error, see reply for more details",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        }
      }
    },
    "/v2/operations/{operationId}/execute" : {
      "post" : {
        "tags" : [ "Operations" ],
        "summary" : "Perform an operation.",
        "description" : "",
        "operationId" : "executeOperation",
        "consumes" : [ "application/json; charset=UTF-8" ],
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "operationId",
          "in" : "path",
          "description" : "Operation Id",
          "required" : true,
          "type" : "integer",
          "format" : "int64"
        }, {
          "in" : "body",
          "name" : "params",
          "description" : "Parameters to perform the operation",
          "required" : false,
          "schema" : {
            "$ref" : "#/definitions/Operation Execution Input Params"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "Ok",
            "schema" : {
              "$ref" : "#/definitions/Operation Execution Result"
            }
          },
          "400" : {
            "description" : "Bad request",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          },
          "401" : {
            "description" : "User is not authenticated",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          },
          "404" : {
            "description" : "Operation not found.",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          },
          "500" : {
            "description" : "Internal server error, see reply for more details",
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
    "Operation" : {
      "type" : "object",
      "properties" : {
        "id" : {
          "type" : "integer",
          "format" : "int64",
          "description" : "Operation Id"
        },
        "name" : {
          "type" : "string",
          "description" : "Operation name"
        },
        "description" : {
          "type" : "string",
          "description" : "Description of operation."
        },
        "input" : {
          "type" : "array",
          "description" : "Operation parameters",
          "items" : {
            "$ref" : "#/definitions/OperationParam"
          }
        },
        "output" : {
          "description" : "Return of operation",
          "$ref" : "#/definitions/OperationParam"
        }
      }
    },
    "Operation Execution Input Params" : {
      "type" : "object",
      "properties" : {
        "params" : {
          "type" : "object",
          "description" : "Parameters to perform the operation",
          "additionalProperties" : {
            "type" : "object"
          }
        }
      }
    },
    "Operation Execution Result" : {
      "type" : "object",
      "properties" : {
        "result" : {
          "type" : "object",
          "description" : "Result of the operation",
          "additionalProperties" : {
            "type" : "object"
          }
        }
      }
    },
    "OperationCollectionResponse" : {
      "type" : "object",
      "properties" : {
        "items" : {
          "type" : "array",
          "items" : {
            "$ref" : "#/definitions/Operation"
          }
        },
        "hasNext" : {
          "type" : "boolean",
          "readOnly" : true
        }
      }
    },
    "OperationParam" : {
      "type" : "object",
      "properties" : {
        "name" : {
          "type" : "string",
          "description" : "Parameter name"
        },
        "label" : {
          "type" : "string",
          "description" : "Parameter label"
        },
        "type" : {
          "type" : "string",
          "description" : "Parameter type"
        },
        "fields" : {
          "type" : "array",
          "description" : "Parameter fields.",
          "items" : {
            "$ref" : "#/definitions/OperationParam"
          }
        }
      }
    }
  }
}
```
