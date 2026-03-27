# swagger.json

> **Fonte:** [https://api.fluig.com/latest/ecm-forms/swagger-ui/swagger.json](https://api.fluig.com/latest/ecm-forms/swagger-ui/swagger.json)

---

```
{
  "swagger" : "2.0",
  "info" : {
    "description" : "Create/update forms via html with the Forms API",
    "version" : "v2",
    "title" : "ECM Form Management"
  },
  "host" : "",
  "basePath" : "/ecm-forms/api",
  "tags" : [ {
    "name" : "Form records",
    "description" : "Form record management features"
  }, {
    "name" : "Forms",
    "description" : "Form creation features"
  } ],
  "paths" : {
    "/v2/cardindex" : {
      "get" : {
        "tags" : [ "Forms" ],
        "summary" : "Searches company forms",
        "description" : "",
        "operationId" : "findCardIndex",
        "consumes" : [ "application/json" ],
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "id",
          "in" : "query",
          "description" : "Document number",
          "required" : false,
          "type" : "integer",
          "format" : "int32"
        }, {
          "name" : "version",
          "in" : "query",
          "description" : "Document version",
          "required" : false,
          "type" : "integer",
          "format" : "int32"
        }, {
          "name" : "page",
          "in" : "query",
          "description" : "Page Number",
          "required" : false,
          "type" : "integer",
          "default" : 1,
          "format" : "int32",
          "x-example" : 1
        }, {
          "name" : "pageSize",
          "in" : "query",
          "description" : "Number of records per page",
          "required" : false,
          "type" : "integer",
          "default" : 100,
          "format" : "int32",
          "x-example" : 100
        }, {
          "name" : "order",
          "in" : "query",
          "description" : "Ordered fields",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "object"
          },
          "collectionFormat" : "multi"
        } ],
        "responses" : {
          "200" : {
            "description" : "Successful request with body content",
            "schema" : {
              "$ref" : "#/definitions/CardIndexFind"
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
          "500" : {
            "description" : "Something went wrong on the server. An accompanying error message will explain further",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        }
      },
      "post" : {
        "tags" : [ "Forms" ],
        "summary" : "Creates forms based on html or compressed (ZIP) files. Images, css and javascript elements used in the form can be sent in ZIP files. Form events stored in a folder named “events” can also be sent in ZIP files. ",
        "description" : "",
        "operationId" : "createCardIndex",
        "consumes" : [ "multipart/form-data" ],
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "name" : "mainFile",
          "in" : "formData",
          "description" : "Name of the main file (in case of compressed files with multiple html files)",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "formName",
          "in" : "formData",
          "description" : "Document description",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "descriptorField",
          "in" : "formData",
          "description" : "Card description",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "datasetName",
          "in" : "formData",
          "description" : "Dataset name",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "persistenceType",
          "in" : "formData",
          "description" : "Form record storage type (1 = multiple tables, 0 = single table)",
          "required" : false,
          "type" : "int"
        }, {
          "name" : "onlyActiveRows",
          "in" : "formData",
          "description" : "List only active form records",
          "required" : false,
          "type" : "boolean"
        }, {
          "name" : "parentId",
          "in" : "formData",
          "description" : "Parent document number",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "file",
          "in" : "formData",
          "description" : "Form content download",
          "required" : true,
          "type" : "file"
        } ],
        "responses" : {
          "200" : {
            "description" : "Successful request with body content",
            "schema" : {
              "$ref" : "#/definitions/CardIndexCreate"
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
          "403" : {
            "description" : "The request is understood, but it has been refused or access is not allowed",
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
          "409" : {
            "description" : "Conflict between resources. An accompanying error message will explain further",
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
      },
      "put" : {
        "tags" : [ "Forms" ],
        "summary" : "Updates the form based on an html or compressed (ZIP) file. Images, css and javascript elements used in the form can be sent in ZIP files. Form events stored in a folder named “events” can also be sent in ZIP files.",
        "description" : "",
        "operationId" : "updateCardIndexUsingPUT",
        "consumes" : [ "multipart/form-data" ],
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "name" : "documentId",
          "in" : "formData",
          "description" : "Document ID",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "updateMode",
          "in" : "formData",
          "description" : "Update type 0 = Keep current version and 2 = New version",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "mainFile",
          "in" : "formData",
          "description" : "Name of the main file (in case of compressed files with multiple html files)",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "formName",
          "in" : "formData",
          "description" : "Document description",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "descriptorField",
          "in" : "formData",
          "description" : "Card description",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "datasetName",
          "in" : "formData",
          "description" : "Dataset name",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "onlyActiveRows",
          "in" : "formData",
          "description" : "List only active form records",
          "required" : false,
          "type" : "boolean"
        }, {
          "name" : "file",
          "in" : "formData",
          "description" : "Form content download",
          "required" : true,
          "type" : "file"
        } ],
        "responses" : {
          "201" : {
            "description" : "Successful request with body content",
            "schema" : {
              "$ref" : "#/definitions/CardIndexCreate"
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
          "403" : {
            "description" : "The request is understood, but it has been refused or access is not allowed",
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
      },
      "patch" : {
        "tags" : [ "Forms" ],
        "summary" : "Updates the form based on an html or compressed (ZIP) file. Images, css and javascript elements used in the form can be sent in ZIP files. Form events stored in a folder named “events” can also be sent in ZIP files.",
        "description" : "",
        "operationId" : "updateCardIndexUsingPATCH",
        "consumes" : [ "multipart/form-data" ],
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "name" : "documentId",
          "in" : "formData",
          "description" : "Document ID",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "updateMode",
          "in" : "formData",
          "description" : "Update type 0 = Keep current version and 2 = New version",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "mainFile",
          "in" : "formData",
          "description" : "Name of the main file (in case of compressed files with multiple html files)",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "formName",
          "in" : "formData",
          "description" : "Document description",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "descriptorField",
          "in" : "formData",
          "description" : "Card description",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "datasetName",
          "in" : "formData",
          "description" : "Dataset name",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "onlyActiveRows",
          "in" : "formData",
          "description" : "List only active form records",
          "required" : false,
          "type" : "boolean"
        }, {
          "name" : "file",
          "in" : "formData",
          "description" : "Form content download",
          "required" : false,
          "type" : "file"
        } ],
        "responses" : {
          "201" : {
            "description" : "Successful request with body content",
            "schema" : {
              "$ref" : "#/definitions/CardIndexCreate"
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
          "403" : {
            "description" : "The request is understood, but it has been refused or access is not allowed",
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
    "/v2/cardindex/html" : {
      "get" : {
        "tags" : [ "Form records" ],
        "summary" : "Returns the form stream URL based either on the associated request identifier or the document version code",
        "description" : "",
        "operationId" : "getHtml",
        "produces" : [ "text/plain" ],
        "parameters" : [ {
          "name" : "processId",
          "in" : "query",
          "description" : "Process name",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "processInstanceId",
          "in" : "query",
          "description" : "Process number",
          "required" : false,
          "type" : "integer",
          "format" : "int32"
        }, {
          "name" : "documentId",
          "in" : "query",
          "description" : "Document identifier",
          "required" : false,
          "type" : "integer",
          "format" : "int32"
        }, {
          "name" : "documentVersionId",
          "in" : "query",
          "description" : "Document version identifier",
          "required" : false,
          "type" : "integer",
          "format" : "int32"
        }, {
          "name" : "currentMovto",
          "in" : "query",
          "description" : "Current movement",
          "required" : false,
          "type" : "integer",
          "format" : "int32"
        }, {
          "name" : "editable",
          "in" : "query",
          "description" : "Editing mode",
          "required" : false,
          "type" : "boolean"
        }, {
          "name" : "taskUserId",
          "in" : "query",
          "description" : "User registration in the task",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "managerMode",
          "in" : "query",
          "description" : "Process manager",
          "required" : false,
          "type" : "boolean",
          "default" : false
        }, {
          "name" : "mobile",
          "in" : "query",
          "description" : "mobile form",
          "required" : false,
          "type" : "boolean",
          "default" : false
        } ],
        "responses" : {
          "200" : {
            "description" : "Successful request with body content",
            "schema" : {
              "type" : "string"
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
    "/v2/cardindex/{documentId}" : {
      "delete" : {
        "tags" : [ "Forms" ],
        "summary" : "Deletes form (Bin)",
        "description" : "",
        "operationId" : "removeCardIndex",
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "documentId",
          "in" : "path",
          "description" : "Document number",
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
          "403" : {
            "description" : "The request is understood, but it has been refused or access is not allowed",
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
    "/v2/cardindex/{documentId}/cards" : {
      "get" : {
        "tags" : [ "Form records" ],
        "summary" : "Search form records",
        "description" : "",
        "operationId" : "findRecordCardIndex",
        "consumes" : [ "application/json" ],
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "documentId",
          "in" : "path",
          "description" : "Document number",
          "required" : true,
          "type" : "integer",
          "format" : "int32"
        }, {
          "name" : "$filter",
          "in" : "query",
          "description" : "Filters by ODATA, implemented queries eq ne and or, use [] to identify optionFields, examples: \nFor field equals to value: field eq 'value'\nFor field not equals to value: field ne 'value'\nFor two filters: field1 eq 'value1' and field2 eq 'value2'\nFor or operator: field1 eq 'value1' or field1 eq 'value2'\nFor between operator: field1 ge 'value1' and field1 le 'value2'\nFor option fields: field[optionField] eq 'value'\nFor like search: field eq '%value%'\n\nRules for this beta version: \nYou cannot use double quotes, only use single quotes: 'value' \nYou cannot search with ONLY ge or le operator, it MUST be used on between\nYou cannot search using ne operator on or operations\nYou cannot use not operation, only ne operator referencing the field\n",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "listInactive",
          "in" : "query",
          "required" : false,
          "type" : "boolean"
        }, {
          "name" : "fields",
          "in" : "query",
          "description" : "Dynamic fields",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "page",
          "in" : "query",
          "description" : "Page Number",
          "required" : false,
          "type" : "integer",
          "default" : 1,
          "format" : "int32",
          "x-example" : 1
        }, {
          "name" : "pageSize",
          "in" : "query",
          "description" : "Number of records per page",
          "required" : false,
          "type" : "integer",
          "default" : 100,
          "format" : "int32",
          "x-example" : 100
        }, {
          "name" : "order",
          "in" : "query",
          "description" : "Ordered fields",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "object"
          },
          "collectionFormat" : "multi"
        } ],
        "responses" : {
          "200" : {
            "description" : "Successful request with body content",
            "schema" : {
              "$ref" : "#/definitions/CardFindCollection"
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
      },
      "post" : {
        "tags" : [ "Form records" ],
        "summary" : "Creates a form record",
        "description" : "",
        "operationId" : "create",
        "consumes" : [ "application/json" ],
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "documentId",
          "in" : "path",
          "description" : "Document number",
          "required" : true,
          "type" : "integer",
          "format" : "int32"
        }, {
          "in" : "body",
          "name" : "cardCreateDTO",
          "description" : "cardindex.cardCreateDTO",
          "required" : false,
          "schema" : {
            "$ref" : "#/definitions/CardCreate"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "Successful request with body content",
            "schema" : {
              "$ref" : "#/definitions/CardFind"
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
    "/v2/cardindex/{documentId}/cards/{cardId}" : {
      "get" : {
        "tags" : [ "Form records" ],
        "summary" : "Searches form records by Id",
        "description" : "",
        "operationId" : "findCardIndexById",
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "documentId",
          "in" : "path",
          "description" : "Document number",
          "required" : true,
          "type" : "integer",
          "format" : "int32"
        }, {
          "name" : "cardId",
          "in" : "path",
          "description" : "Record number",
          "required" : true,
          "type" : "integer",
          "format" : "int32"
        }, {
          "name" : "fields",
          "in" : "query",
          "description" : "Dynamic fields",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "expand",
          "in" : "query",
          "description" : "expandable.fields",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string",
            "enum" : [ "children" ]
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "page",
          "in" : "query",
          "description" : "Page Number",
          "required" : false,
          "type" : "integer",
          "default" : 1,
          "format" : "int32",
          "x-example" : 1
        }, {
          "name" : "pageSize",
          "in" : "query",
          "description" : "Number of records per page",
          "required" : false,
          "type" : "integer",
          "default" : 100,
          "format" : "int32",
          "x-example" : 100
        }, {
          "name" : "order",
          "in" : "query",
          "description" : "Ordered fields",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "object"
          },
          "collectionFormat" : "multi"
        } ],
        "responses" : {
          "200" : {
            "description" : "Successful request with body content",
            "schema" : {
              "$ref" : "#/definitions/CardFind"
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
      },
      "put" : {
        "tags" : [ "Form records" ],
        "summary" : "Updates a form record",
        "description" : "",
        "operationId" : "update",
        "consumes" : [ "application/json" ],
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "documentId",
          "in" : "path",
          "description" : "Document number",
          "required" : true,
          "type" : "integer",
          "format" : "int32"
        }, {
          "name" : "cardId",
          "in" : "path",
          "description" : "Record number",
          "required" : true,
          "type" : "integer",
          "format" : "int32"
        }, {
          "in" : "body",
          "name" : "cardCreateDTO",
          "description" : "cardindex.cardCreateDTO",
          "required" : false,
          "schema" : {
            "$ref" : "#/definitions/CardCreate"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "Successful request with body content",
            "schema" : {
              "$ref" : "#/definitions/CardFind"
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
      },
      "delete" : {
        "tags" : [ "Form records" ],
        "summary" : "Deletes a form record",
        "description" : "",
        "operationId" : "delete",
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "documentId",
          "in" : "path",
          "description" : "Document number",
          "required" : true,
          "type" : "integer",
          "format" : "int32"
        }, {
          "name" : "cardId",
          "in" : "path",
          "description" : "Record number",
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
    "/v2/cardindex/{documentId}/cards/{cardId}/children" : {
      "post" : {
        "tags" : [ "Form records" ],
        "summary" : "Creates child record",
        "description" : "",
        "operationId" : "createChild",
        "consumes" : [ "application/json" ],
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "documentId",
          "in" : "path",
          "description" : "Document number",
          "required" : true,
          "type" : "integer",
          "format" : "int32"
        }, {
          "name" : "cardId",
          "in" : "path",
          "description" : "Record number",
          "required" : true,
          "type" : "integer",
          "format" : "int32"
        }, {
          "in" : "body",
          "name" : "cardChildrenDTO",
          "description" : "card.cardChildrenDTO",
          "required" : false,
          "schema" : {
            "$ref" : "#/definitions/CardChildren"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "Successful request with body content",
            "schema" : {
              "$ref" : "#/definitions/CardChildren"
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
    "/v2/cardindex/{documentId}/cards/{cardId}/children/{row}" : {
      "get" : {
        "tags" : [ "Form records" ],
        "summary" : "Searches child records by line",
        "description" : "",
        "operationId" : "findCardChildByRow",
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "documentId",
          "in" : "path",
          "description" : "Document number",
          "required" : true,
          "type" : "integer",
          "format" : "int32"
        }, {
          "name" : "cardId",
          "in" : "path",
          "description" : "Record number",
          "required" : true,
          "type" : "integer",
          "format" : "int32"
        }, {
          "name" : "row",
          "in" : "path",
          "description" : "Child record line",
          "required" : true,
          "type" : "integer",
          "format" : "int32"
        }, {
          "name" : "fields",
          "in" : "query",
          "description" : "Dynamic fields",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "page",
          "in" : "query",
          "description" : "Page Number",
          "required" : false,
          "type" : "integer",
          "default" : 1,
          "format" : "int32",
          "x-example" : 1
        }, {
          "name" : "pageSize",
          "in" : "query",
          "description" : "Number of records per page",
          "required" : false,
          "type" : "integer",
          "default" : 100,
          "format" : "int32",
          "x-example" : 100
        }, {
          "name" : "order",
          "in" : "query",
          "description" : "Ordered fields",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "object"
          },
          "collectionFormat" : "multi"
        } ],
        "responses" : {
          "200" : {
            "description" : "Successful request with body content",
            "schema" : {
              "$ref" : "#/definitions/CardChildren"
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
      },
      "put" : {
        "tags" : [ "Form records" ],
        "summary" : "Updates child record",
        "description" : "",
        "operationId" : "updateChild",
        "consumes" : [ "application/json" ],
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "documentId",
          "in" : "path",
          "description" : "Document number",
          "required" : true,
          "type" : "integer",
          "format" : "int32"
        }, {
          "name" : "cardId",
          "in" : "path",
          "description" : "Record number",
          "required" : true,
          "type" : "integer",
          "format" : "int32"
        }, {
          "name" : "row",
          "in" : "path",
          "description" : "Child record line",
          "required" : true,
          "type" : "integer",
          "format" : "int32"
        }, {
          "in" : "body",
          "name" : "cardChildrenDTO",
          "description" : "card.cardChildrenDTO",
          "required" : false,
          "schema" : {
            "$ref" : "#/definitions/CardChildren"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "Successful request with body content",
            "schema" : {
              "$ref" : "#/definitions/CardChildren"
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
      },
      "delete" : {
        "tags" : [ "Form records" ],
        "summary" : "Deletes a child record",
        "description" : "",
        "operationId" : "deleteChild",
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "documentId",
          "in" : "path",
          "description" : "Document number",
          "required" : true,
          "type" : "integer",
          "format" : "int32"
        }, {
          "name" : "cardId",
          "in" : "path",
          "description" : "Record number",
          "required" : true,
          "type" : "integer",
          "format" : "int32"
        }, {
          "name" : "row",
          "in" : "path",
          "description" : "Child record line",
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
    },
    "/v2/cardindex/{documentId}/cards/{cardId}/childrens" : {
      "get" : {
        "tags" : [ "Form records" ],
        "summary" : "Searches child records of a form record",
        "description" : "",
        "operationId" : "findCardChildren",
        "consumes" : [ "application/json" ],
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "documentId",
          "in" : "path",
          "description" : "Document number",
          "required" : true,
          "type" : "integer",
          "format" : "int32"
        }, {
          "name" : "cardId",
          "in" : "path",
          "description" : "Record number",
          "required" : true,
          "type" : "integer",
          "format" : "int32"
        }, {
          "name" : "fields",
          "in" : "query",
          "description" : "Dynamic fields",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "page",
          "in" : "query",
          "description" : "Page Number",
          "required" : false,
          "type" : "integer",
          "default" : 1,
          "format" : "int32",
          "x-example" : 1
        }, {
          "name" : "pageSize",
          "in" : "query",
          "description" : "Number of records per page",
          "required" : false,
          "type" : "integer",
          "default" : 100,
          "format" : "int32",
          "x-example" : 100
        }, {
          "name" : "order",
          "in" : "query",
          "description" : "Ordered fields",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "object"
          },
          "collectionFormat" : "multi"
        } ],
        "responses" : {
          "200" : {
            "description" : "Successful request with body content",
            "schema" : {
              "$ref" : "#/definitions/CardChildrenCollection"
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
    }
  },
  "definitions" : {
    "CardChildren" : {
      "type" : "object",
      "properties" : {
        "values" : {
          "type" : "array",
          "description" : "Values",
          "items" : {
            "$ref" : "#/definitions/CardField"
          }
        }
      },
      "description" : "Form child record"
    },
    "CardChildrenCollection" : {
      "type" : "object",
      "properties" : {
        "items" : {
          "type" : "array",
          "items" : {
            "$ref" : "#/definitions/CardChildren"
          }
        },
        "hasNext" : {
          "type" : "boolean",
          "readOnly" : true
        }
      }
    },
    "CardCreate" : {
      "type" : "object",
      "properties" : {
        "values" : {
          "type" : "array",
          "description" : "Values",
          "items" : {
            "$ref" : "#/definitions/CardField"
          }
        }
      },
      "description" : "Form record"
    },
    "CardField" : {
      "type" : "object",
      "properties" : {
        "fieldId" : {
          "type" : "string",
          "description" : "Field name"
        },
        "value" : {
          "type" : "string",
          "description" : "Field value"
        }
      },
      "description" : "Form field"
    },
    "CardFind" : {
      "type" : "object",
      "properties" : {
        "cardId" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Record number"
        },
        "version" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Record version"
        },
        "companyId" : {
          "type" : "integer",
          "format" : "int64",
          "description" : "Company"
        },
        "parentDocumentId" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Parent document number"
        },
        "activeVersion" : {
          "type" : "boolean",
          "description" : "card.find.activeVersion"
        },
        "values" : {
          "type" : "array",
          "description" : "Values",
          "items" : {
            "$ref" : "#/definitions/CardField"
          }
        },
        "children" : {
          "type" : "array",
          "description" : "card.find.children",
          "items" : {
            "$ref" : "#/definitions/CardChildren"
          }
        }
      },
      "description" : "Form record"
    },
    "CardFindCollection" : {
      "type" : "object",
      "properties" : {
        "items" : {
          "type" : "array",
          "items" : {
            "$ref" : "#/definitions/CardFind"
          }
        },
        "hasNext" : {
          "type" : "boolean",
          "readOnly" : true
        }
      }
    },
    "CardIndexAttachment" : {
      "type" : "object",
      "properties" : {
        "fileName" : {
          "type" : "string",
          "description" : "Name of attachment file to be created"
        },
        "principal" : {
          "type" : "boolean",
          "description" : "Controls whether the attachment of the card index to be created is the main"
        },
        "attach" : {
          "type" : "boolean",
          "description" : "Controls whether the file to create the card index is an attachment"
        },
        "fullPatch" : {
          "type" : "string",
          "description" : "File relative path"
        },
        "pathName" : {
          "type" : "string",
          "description" : "File Path"
        }
      },
      "description" : "Attachment information"
    },
    "CardIndexCreate" : {
      "type" : "object",
      "properties" : {
        "tenantId" : {
          "type" : "integer",
          "format" : "int64"
        },
        "parentDocumentId" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Parent document Id"
        },
        "publisherId" : {
          "type" : "string",
          "description" : "Publisher Id"
        },
        "documentDescription" : {
          "type" : "string",
          "description" : "Document description"
        },
        "cardDescription" : {
          "type" : "string",
          "description" : "Card description"
        },
        "datasetName" : {
          "type" : "string",
          "description" : "Dataset name"
        },
        "persistenceType" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Type of persistentence 0 = Form and 1 = Metalist",
          "enum" : [ 0, 1 ]
        },
        "principal" : {
          "type" : "string",
          "description" : "Controls whether the attachment of the card index to be created is the main"
        },
        "events" : {
          "type" : "array",
          "description" : "List of events",
          "items" : {
            "$ref" : "#/definitions/CardIndexEvent"
          }
        }
      },
      "description" : "Form information"
    },
    "CardIndexEvent" : {
      "type" : "object",
      "properties" : {
        "eventId" : {
          "type" : "string",
          "description" : "Event code",
          "enum" : [ "afterSaveNew", "displayFields", "enableFields", "inputFields", "setEnable", "validateForm", "afterProcessing", "beforeProcessing" ]
        },
        "eventDescription" : {
          "type" : "string",
          "description" : "File containing the event"
        },
        "eventVersAnt" : {
          "type" : "boolean",
          "description" : "Updates previous versions"
        }
      },
      "description" : "Form events"
    },
    "CardIndexFind" : {
      "type" : "object",
      "properties" : {
        "documentId" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Document number"
        },
        "version" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Document version"
        },
        "companyId" : {
          "type" : "integer",
          "format" : "int64",
          "description" : "Company"
        },
        "colleagueId" : {
          "type" : "string",
          "description" : "User registration"
        },
        "documentDescription" : {
          "type" : "string",
          "description" : "Description"
        },
        "additionalComments" : {
          "type" : "string",
          "description" : "Additional comments"
        },
        "phisicalFile" : {
          "type" : "string",
          "description" : "Name of Physical file"
        },
        "createDate" : {
          "type" : "string",
          "format" : "date-time",
          "description" : "Creation date"
        },
        "createDateInMilliseconds" : {
          "type" : "integer",
          "format" : "int64",
          "description" : "Date of creation in milliseconds"
        },
        "lastModifiedDate" : {
          "type" : "string",
          "format" : "date-time",
          "description" : "Date of last modification"
        },
        "publisherId" : {
          "type" : "string",
          "description" : "Publisher code"
        },
        "publisherName" : {
          "type" : "string",
          "description" : "Publisher name"
        },
        "cardDescription" : {
          "type" : "string",
          "description" : "Form description"
        },
        "documentPropertyNumber" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "cardindex.find.documentPropertyNumber"
        },
        "documentPropertyVersion" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "cardindex.find.documentPropertyVersion"
        },
        "datasetName" : {
          "type" : "string",
          "description" : "Dataset name"
        },
        "phisicalFileSize" : {
          "type" : "number",
          "format" : "float",
          "description" : "cardindex.find.phisicalFileSize"
        },
        "parentDocumentId" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Parent document number"
        },
        "attachmentVOs" : {
          "type" : "array",
          "description" : "Attachments",
          "items" : {
            "$ref" : "#/definitions/CardIndexAttachment"
          }
        }
      },
      "description" : "Form information"
    },
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
    }
  }
}
```
