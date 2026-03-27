# swagger.json

> **Fonte:** [https://api.fluig.com/latest/dataset/swagger-ui/swagger.json](https://api.fluig.com/latest/dataset/swagger-ui/swagger.json)

---

```
{
  "swagger" : "2.0",
  "info" : {
    "description" : "The Dataset API allows the management of platform datasets.",
    "version" : "v2",
    "title" : "Dataset"
  },
  "host" : "",
  "basePath" : "/dataset/api",
  "tags" : [ {
    "name" : "Datasets",
    "description" : "Allows management of datasets"
  }, {
    "name" : "Dataset handle",
    "description" : "Allows to handle dataset content"
  }, {
    "name" : "Dataset history",
    "description" : "Allows management of dataset history"
  } ],
  "paths" : {
    "/v2/dataset-handle/search" : {
      "get" : {
        "tags" : [ "Dataset handle" ],
        "summary" : "Search for dataset values",
        "description" : "",
        "operationId" : "searchDatasetValues",
        "consumes" : [ "application/json; charset=UTF-8" ],
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "datasetId",
          "in" : "query",
          "description" : "Dataset code to be used as a filter",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "field",
          "in" : "query",
          "description" : "Dataset fields that will be returned, if no values are given all fields will be returned",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "offset",
          "in" : "query",
          "description" : "How many records are skipped before returning the values. This field is used together with the <b>limit</b> to perform pagination",
          "required" : false,
          "type" : "integer",
          "format" : "int64"
        }, {
          "name" : "limit",
          "in" : "query",
          "description" : "Maximum number of records to be returned in the search. If no value is filled in, the default is 300 records. If you enter the value 0, it fetches all records. <b>You must set the limit to avoid a search with many records, which may lead to a slow response</b>",
          "required" : false,
          "type" : "integer",
          "format" : "int64"
        }, {
          "name" : "orderby",
          "in" : "query",
          "description" : "Name of the field where the sorting will be done, you can add <b>_ASC</b> or <b>_DESC</b> to search in ascending and descending order respectively.",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "constraintsField",
          "in" : "query",
          "description" : "Name of field for entering the search value. You can enter multiple fields, but you need to provide a value for each one.",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "constraintsInitialValue",
          "in" : "query",
          "description" : "Value to be used for filtering in accordance with the field provided in the <b>constraintsField</b> parameter. If more than one search field was provided, you will need to provide the values in the same order to create the filter correctly.",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "constraintsFinalValue",
          "in" : "query",
          "description" : "If the desired filter is a range of values, the parameter <b>constraintsInitialValue</b> will be the initial value and <b>constraintsFinalValue</b> will be the final value. If you passed more than one field for research, you will need to pass the values in the same order to create the filter correctly. If you pass the same value as the parameter <b>constraintsInitialValue</b>, only this value is searched, ignoring the range of values.",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "constraintsType",
          "in" : "query",
          "description" : "Constraint type - Allowable Values: MUST, MUST_NOT or SHOULD",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "constraintsLikeSearch",
          "in" : "query",
          "description" : "Boolean value that determines whether the values in the fields <b>constraintsInitialValue</b> and <b>constraintsFinalValue</b> can be only part of the total value if the boolean is true or whether the values need to be exact if the boolean is false. When the value is true, you can use the % symbol to determine that any value from that point will be accepted",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "boolean",
            "default" : false
          },
          "collectionFormat" : "multi"
        } ],
        "responses" : {
          "200" : {
            "description" : "Ok",
            "schema" : {
              "$ref" : "#/definitions/DatasetValue"
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
    "/v2/dataset-history" : {
      "get" : {
        "tags" : [ "Dataset history" ],
        "summary" : "Return dataset history",
        "description" : "",
        "operationId" : "findDatasetHistory",
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "id",
          "in" : "query",
          "description" : "Dataset history id",
          "required" : false,
          "type" : "integer",
          "format" : "int64"
        }, {
          "name" : "userId",
          "in" : "query",
          "description" : "User Id to be used as filter",
          "required" : false,
          "type" : "integer",
          "format" : "int64"
        }, {
          "name" : "datasetId",
          "in" : "query",
          "description" : "Dataset code to be used as a filter",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "datasetDescription",
          "in" : "query",
          "description" : "Dataset description to be used as filter",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "status",
          "in" : "query",
          "description" : "api.dataset.param.status",
          "required" : false,
          "type" : "string",
          "enum" : [ "DRAFT", "PUBLISHED", "REMOVED" ]
        }, {
          "name" : "version",
          "in" : "query",
          "description" : "api.dataset.param.version",
          "required" : false,
          "type" : "integer",
          "format" : "int64"
        }, {
          "name" : "fields",
          "in" : "query",
          "description" : "Dynamic fields",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "object"
          },
          "collectionFormat" : "multi"
        }, {
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
          "description" : "Sorting field",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string",
            "enum" : [ "id", "tenantId", "datasetId", "version", "-id", "-tenantId", "-datasetId", "-version" ]
          },
          "collectionFormat" : "multi"
        } ],
        "responses" : {
          "201" : {
            "description" : "Ok",
            "schema" : {
              "$ref" : "#/definitions/DatasetHistoryCollectionResponse"
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
    "/v2/dataset-history/drafts" : {
      "post" : {
        "tags" : [ "Dataset history" ],
        "summary" : "Create the draft dataset",
        "description" : "",
        "operationId" : "createDatasetDraft",
        "consumes" : [ "application/json; charset=UTF-8" ],
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "in" : "body",
          "name" : "DatasetDraft",
          "description" : "Dataset to create a draft",
          "required" : true,
          "schema" : {
            "$ref" : "#/definitions/DatasetDraft"
          }
        }, {
          "name" : "ignoreConflicts",
          "in" : "query",
          "description" : "Whether or not to ignore conflicts",
          "required" : false,
          "type" : "boolean",
          "default" : false
        } ],
        "responses" : {
          "202" : {
            "description" : "Ok",
            "schema" : {
              "$ref" : "#/definitions/DatasetHistory"
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
      },
      "delete" : {
        "tags" : [ "Dataset history" ],
        "summary" : "Delete a dataset draft",
        "description" : "",
        "operationId" : "deleteDatasetDraft",
        "parameters" : [ {
          "name" : "datasetId",
          "in" : "query",
          "description" : "Dataset code to be used as a filter",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "204" : {
            "description" : "Ok"
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
    "/v2/dataset-history/restore" : {
      "post" : {
        "tags" : [ "Dataset history" ],
        "summary" : "Restore dataset by version",
        "description" : "",
        "operationId" : "restoreDataset",
        "consumes" : [ "application/json; charset=UTF-8" ],
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "datasetId",
          "in" : "query",
          "description" : "Dataset code to be used as a filter",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "version",
          "in" : "query",
          "description" : "Restore dataset by version",
          "required" : false,
          "type" : "integer",
          "format" : "int64"
        } ],
        "responses" : {
          "202" : {
            "description" : "Ok",
            "schema" : {
              "$ref" : "#/definitions/DatasetHistory"
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
    "/v2/dataset-history/restore/validation" : {
      "get" : {
        "tags" : [ "Dataset history" ],
        "summary" : "Check if the dataset is a draft before restore",
        "description" : "",
        "operationId" : "validateRestore",
        "consumes" : [ "application/json; charset=UTF-8" ],
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "datasetId",
          "in" : "query",
          "description" : "Dataset code to be used as a filter",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "202" : {
            "description" : "Ok",
            "schema" : {
              "$ref" : "#/definitions/DatasetHistory"
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
    "/v2/datasets" : {
      "get" : {
        "tags" : [ "Datasets" ],
        "summary" : "Search by datasets",
        "description" : "",
        "operationId" : "findDatasets",
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "datasetId",
          "in" : "query",
          "description" : "Dataset code to be used as a filter",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "search",
          "in" : "query",
          "description" : "Text to search in code and description of datasets",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "active",
          "in" : "query",
          "description" : "Filter active or inactive datasets",
          "required" : false,
          "type" : "boolean"
        }, {
          "name" : "draft",
          "in" : "query",
          "description" : "Filter datasets with or without draft",
          "required" : false,
          "type" : "boolean"
        }, {
          "name" : "type",
          "in" : "query",
          "description" : "Dataset type to be used as a filter",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string",
            "enum" : [ "BUILTIN", "GENERATED", "CUSTOM" ]
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "fields",
          "in" : "query",
          "description" : "Dynamic fields",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "object"
          },
          "collectionFormat" : "multi"
        }, {
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
          "description" : "Sorting field",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string",
            "enum" : [ "datasetId", "datasetDescription", "active", "-datasetId", "-datasetDescription", "-active" ]
          },
          "collectionFormat" : "multi"
        } ],
        "responses" : {
          "200" : {
            "description" : "Ok",
            "schema" : {
              "$ref" : "#/definitions/DatasetCollectionResponse"
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
      },
      "post" : {
        "tags" : [ "Datasets" ],
        "summary" : "Register a new dataset",
        "description" : "",
        "operationId" : "createOrUpdate",
        "consumes" : [ "application/json; charset=UTF-8" ],
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "in" : "body",
          "name" : "Dataset",
          "description" : "api.dataset.param",
          "required" : true,
          "schema" : {
            "$ref" : "#/definitions/Dataset"
          }
        }, {
          "name" : "ignoreConflicts",
          "in" : "query",
          "description" : "Whether or not to ignore conflicts",
          "required" : false,
          "type" : "boolean",
          "default" : false
        } ],
        "responses" : {
          "201" : {
            "description" : "Ok",
            "schema" : {
              "$ref" : "#/definitions/DatasetRegister"
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
    "/v2/datasets/convert/{id}" : {
      "post" : {
        "tags" : [ "Datasets" ],
        "summary" : "Change dataset type, from generated to customized",
        "description" : "",
        "operationId" : "convert",
        "consumes" : [ "application/json; charset=UTF-8" ],
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "id",
          "in" : "path",
          "description" : "Dataset code to be used as a filter",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "Ok",
            "schema" : {
              "$ref" : "#/definitions/ConvertDataset"
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
            "description" : "Resource not found",
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
    "/v2/datasets/disable/{id}" : {
      "post" : {
        "tags" : [ "Datasets" ],
        "summary" : "Mark dataset as inactive",
        "description" : "",
        "operationId" : "disableDataset",
        "consumes" : [ "application/json; charset=UTF-8" ],
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "id",
          "in" : "path",
          "description" : "Dataset code to be used as a filter",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "Ok"
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
          "403" : {
            "description" : "Permission denied. Only system administrators can access this feature",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          },
          "404" : {
            "description" : "Resource not found",
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
    "/v2/datasets/enable/{id}" : {
      "post" : {
        "tags" : [ "Datasets" ],
        "summary" : "Activate dataset",
        "description" : "",
        "operationId" : "activateDataset",
        "consumes" : [ "application/json; charset=UTF-8" ],
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "id",
          "in" : "path",
          "description" : "Dataset code to be used as a filter",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "Ok"
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
          "403" : {
            "description" : "Permission denied. Only system administrators can access this feature",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          },
          "404" : {
            "description" : "Resource not found",
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
    "/v2/datasets/export" : {
      "post" : {
        "tags" : [ "Datasets" ],
        "summary" : "Export a list of datasets to another fluig server",
        "description" : "",
        "operationId" : "exportToRemoteServer",
        "consumes" : [ "application/json; charset=UTF-8" ],
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "in" : "body",
          "name" : "DatasetImportExport",
          "description" : "The target server and the datasets to be exported",
          "required" : false,
          "schema" : {
            "$ref" : "#/definitions/DatasetImportExport"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "Datasets successfully exported",
            "schema" : {
              "$ref" : "#/definitions/DatasetImportExport"
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
    "/v2/datasets/import" : {
      "post" : {
        "tags" : [ "Datasets" ],
        "summary" : "Importing a list of datasets to local fluig server",
        "description" : "",
        "operationId" : "importToLocalServer",
        "consumes" : [ "application/json; charset=UTF-8" ],
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "in" : "body",
          "name" : "DatasetImportExport",
          "description" : "The target server and the datasets to be imported",
          "required" : false,
          "schema" : {
            "$ref" : "#/definitions/DatasetImportExport"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "Datasets successfully imported",
            "schema" : {
              "$ref" : "#/definitions/DatasetImportExport"
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
    "/v2/datasets/servers/{serverId}" : {
      "get" : {
        "tags" : [ "Datasets" ],
        "summary" : "Return dataset object",
        "description" : "",
        "operationId" : "findDatasetsByServerId",
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "serverId",
          "in" : "path",
          "description" : "Server id",
          "required" : true,
          "type" : "integer",
          "format" : "int64"
        } ],
        "responses" : {
          "201" : {
            "description" : "Ok",
            "schema" : {
              "$ref" : "#/definitions/DatasetRegister"
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
            "description" : "Resource not found",
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
    "/v2/datasets/synchronize/{id}" : {
      "patch" : {
        "tags" : [ "Datasets" ],
        "summary" : "Enable/Disable syncing with the Server",
        "description" : "",
        "operationId" : "synchronizeDataset",
        "consumes" : [ "application/json; charset=UTF-8" ],
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "id",
          "in" : "path",
          "description" : "Dataset code to be used as a filter",
          "required" : true,
          "type" : "string"
        }, {
          "in" : "body",
          "name" : "body",
          "required" : false,
          "schema" : {
            "$ref" : "#/definitions/DatasetSynchronize"
          }
        } ],
        "responses" : {
          "204" : {
            "description" : "Ok"
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
          "403" : {
            "description" : "Permission denied. Only system administrators can access this feature",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          },
          "404" : {
            "description" : "Resource not found",
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
    "ConvertDataset" : {
      "type" : "object",
      "properties" : {
        "datasetId" : {
          "type" : "string",
          "description" : "Dataset Id"
        },
        "type" : {
          "type" : "string",
          "description" : "Dataset type, if customized or generated"
        }
      }
    },
    "Dataset" : {
      "type" : "object",
      "properties" : {
        "datasets" : {
          "type" : "array",
          "items" : {
            "$ref" : "#/definitions/DatasetRegister"
          }
        }
      }
    },
    "DatasetCollectionResponse" : {
      "type" : "object",
      "properties" : {
        "items" : {
          "type" : "array",
          "items" : {
            "$ref" : "#/definitions/DatasetInfo"
          }
        },
        "hasNext" : {
          "type" : "boolean",
          "readOnly" : true
        }
      }
    },
    "DatasetDraft" : {
      "type" : "object",
      "properties" : {
        "datasetId" : {
          "type" : "string",
          "description" : "Dataset Id"
        },
        "datasetDescription" : {
          "type" : "string",
          "description" : "Dataset description"
        },
        "datasetImpl" : {
          "type" : "string",
          "description" : "Dataset implementation"
        },
        "version" : {
          "type" : "integer",
          "format" : "int64",
          "description" : "Dataset version"
        },
        "updateTime" : {
          "type" : "string",
          "format" : "date-time",
          "description" : "Dataset update time"
        }
      }
    },
    "DatasetHistory" : {
      "type" : "object",
      "properties" : {
        "id" : {
          "type" : "integer",
          "format" : "int64",
          "description" : "Dataset history id"
        },
        "tenantId" : {
          "type" : "integer",
          "format" : "int64",
          "description" : "Tenant id"
        },
        "userTenantId" : {
          "type" : "integer",
          "format" : "int64",
          "description" : "User id"
        },
        "userName" : {
          "type" : "string",
          "description" : "User name"
        },
        "datasetId" : {
          "type" : "string",
          "description" : "Dataset Id"
        },
        "datasetDescription" : {
          "type" : "string",
          "description" : "Dataset description"
        },
        "datasetImpl" : {
          "type" : "string",
          "description" : "Dataset implementation"
        },
        "version" : {
          "type" : "integer",
          "format" : "int64",
          "description" : "Dataset version"
        },
        "status" : {
          "type" : "string",
          "description" : "Dataset status"
        },
        "updateTime" : {
          "type" : "string",
          "format" : "date-time",
          "description" : "Dataset update time"
        }
      }
    },
    "DatasetHistoryCollectionResponse" : {
      "type" : "object",
      "properties" : {
        "items" : {
          "type" : "array",
          "items" : {
            "$ref" : "#/definitions/DatasetHistory"
          }
        },
        "hasNext" : {
          "type" : "boolean",
          "readOnly" : true
        }
      }
    },
    "DatasetImportExport" : {
      "type" : "object",
      "properties" : {
        "message" : {
          "type" : "string",
          "description" : "Dataset message"
        },
        "datasets" : {
          "type" : "array",
          "description" : "Datasets IDs",
          "items" : {
            "type" : "string"
          }
        },
        "serverId" : {
          "type" : "integer",
          "format" : "int64",
          "description" : "Server id"
        }
      }
    },
    "DatasetInfo" : {
      "type" : "object",
      "properties" : {
        "datasetId" : {
          "type" : "string",
          "description" : "Dataset Id"
        },
        "datasetDescription" : {
          "type" : "string",
          "description" : "Dataset description"
        },
        "datasetImpl" : {
          "type" : "string",
          "description" : "Dataset implementation"
        },
        "datasetBuilder" : {
          "type" : "string",
          "description" : "Dataset Builder"
        },
        "active" : {
          "type" : "boolean",
          "description" : "Is dataset active"
        },
        "draft" : {
          "type" : "boolean",
          "description" : "Is draft"
        },
        "serverOffline" : {
          "type" : "boolean",
          "description" : "Is an offline server"
        },
        "mobileCache" : {
          "type" : "boolean",
          "description" : "Mobile cache"
        },
        "internal" : {
          "type" : "boolean",
          "description" : "Internal dataset"
        },
        "custom" : {
          "type" : "boolean",
          "description" : "Custom dataset"
        },
        "generated" : {
          "type" : "boolean",
          "description" : "Dataset generated"
        },
        "offlineMobileCache" : {
          "type" : "boolean",
          "description" : "Dataset offline mobile cache"
        },
        "mobileOfflineSummary" : {
          "type" : "string",
          "description" : "Dataset mobile offline summary"
        },
        "updateInterval" : {
          "type" : "integer",
          "format" : "int64",
          "description" : "Dataset update interval"
        },
        "lastReset" : {
          "type" : "integer",
          "format" : "int64",
          "description" : "Last reset"
        },
        "lastRemoteSync" : {
          "type" : "integer",
          "format" : "int64",
          "description" : "Last remote synchronization"
        },
        "jobLastExecution" : {
          "type" : "string",
          "description" : "Last job execution"
        },
        "jobNextExecution" : {
          "type" : "string",
          "description" : "Next job execution"
        },
        "type" : {
          "type" : "string",
          "description" : "Dataset type, if customized or generated"
        },
        "journalingAdherenceFull" : {
          "type" : "boolean",
          "description" : "Dataset journaling adherence full"
        },
        "journalingAdherenceHalf" : {
          "type" : "boolean",
          "description" : "Dataset journaling adherence half"
        },
        "journalingAdherenceNone" : {
          "type" : "boolean",
          "description" : "Dataset journaling adherence none"
        },
        "syncStatusSuccess" : {
          "type" : "boolean",
          "description" : "Dataset synchronization success"
        },
        "syncStatusWarning" : {
          "type" : "boolean",
          "description" : "Dataset synchronization warning"
        },
        "syncStatusError" : {
          "type" : "boolean",
          "description" : "Dataset synchronization error"
        },
        "syncDetails" : {
          "type" : "string",
          "description" : "Dataset synchronization details"
        },
        "dependency" : {
          "type" : "string",
          "description" : "Dataset dependent on a component"
        },
        "updated" : {
          "type" : "boolean"
        }
      }
    },
    "DatasetRegister" : {
      "type" : "object",
      "properties" : {
        "code" : {
          "type" : "string",
          "description" : "Dataset Code"
        },
        "description" : {
          "type" : "string",
          "description" : "Dataset description"
        },
        "impl" : {
          "type" : "string",
          "description" : "Dataset implementation"
        },
        "type" : {
          "type" : "string",
          "description" : "Dataset type, if customized or generated"
        },
        "updateTime" : {
          "type" : "string",
          "format" : "date-time",
          "description" : "Dataset update time"
        },
        "version" : {
          "type" : "integer",
          "format" : "int64",
          "description" : "Dataset version"
        }
      }
    },
    "DatasetSynchronize" : {
      "type" : "object",
      "required" : [ "serverOffline" ],
      "properties" : {
        "serverOffline" : {
          "type" : "boolean",
          "description" : "Is an offline server"
        }
      }
    },
    "DatasetValue" : {
      "type" : "object",
      "properties" : {
        "columns" : {
          "type" : "array",
          "description" : "Columns",
          "items" : {
            "type" : "string"
          }
        },
        "values" : {
          "type" : "array",
          "description" : "Values",
          "items" : {
            "type" : "object",
            "additionalProperties" : {
              "type" : "object"
            }
          }
        }
      }
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
