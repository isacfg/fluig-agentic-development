# swagger.json

> **Fonte:** [https://api.fluig.com/latest/form-management/swagger-ui/swagger.json](https://api.fluig.com/latest/form-management/swagger-ui/swagger.json)

---

```
{
  "swagger" : "2.0",
  "info" : {
    "description" : "This API manages the forms of the new form editor and their records.",
    "version" : "v2",
    "title" : "Form Management"
  },
  "host" : "",
  "basePath" : "/form-management/api",
  "tags" : [ {
    "name" : "Forms",
    "description" : "Manage the forms of the new form editor and their records."
  } ],
  "paths" : {
    "/v2/forms" : {
      "get" : {
        "tags" : [ "Forms" ],
        "summary" : "List all forms",
        "description" : "",
        "operationId" : "getForms",
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "formCategory",
          "in" : "query",
          "description" : "Form Category",
          "required" : false,
          "type" : "string",
          "enum" : [ "CRUD", "PROCESS", "SOCIABLE" ]
        }, {
          "name" : "versionStatus",
          "in" : "query",
          "description" : "Form Version Status",
          "required" : false,
          "type" : "string",
          "enum" : [ "DRAFT", "PUBLISHED" ]
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
        } ],
        "responses" : {
          "200" : {
            "description" : "Ok",
            "schema" : {
              "$ref" : "#/definitions/FormCollection"
            }
          },
          "400" : {
            "description" : "Incorrect Request",
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
            "description" : "User does not have permission to perform the operation ",
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
      },
      "post" : {
        "tags" : [ "Forms" ],
        "summary" : "Create a new form in a draft version",
        "description" : "",
        "operationId" : "createFormInDraftWithInitialVersion",
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "in" : "body",
          "name" : "body",
          "description" : "Object to create a new form in a draft version",
          "required" : true,
          "schema" : {
            "$ref" : "#/definitions/FormCreate"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "Ok",
            "schema" : {
              "$ref" : "#/definitions/FormResponse"
            }
          },
          "400" : {
            "description" : "Incorrect Request",
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
            "description" : "User does not have permission to perform the operation ",
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
    "/v2/forms/image/{filename}" : {
      "get" : {
        "tags" : [ "Forms" ],
        "summary" : "Search the image by file name",
        "description" : "",
        "operationId" : "getImage",
        "consumes" : [ "multipart/form-data" ],
        "parameters" : [ {
          "name" : "filename",
          "in" : "path",
          "description" : "Image",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "Ok"
          },
          "400" : {
            "description" : "Incorrect Request",
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
            "description" : "User does not have permission to perform the operation ",
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
    "/v2/forms/upload/image" : {
      "post" : {
        "tags" : [ "Forms" ],
        "summary" : "Uploads the image to be used by the Image field",
        "description" : "",
        "operationId" : "uploadImage",
        "consumes" : [ "multipart/form-data" ],
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "file",
          "in" : "formData",
          "description" : "Image",
          "required" : true,
          "type" : "file"
        } ],
        "responses" : {
          "200" : {
            "description" : "Ok",
            "schema" : {
              "$ref" : "#/definitions/FormImageResponse"
            }
          },
          "400" : {
            "description" : "Incorrect Request",
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
            "description" : "User does not have permission to perform the operation ",
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
    "/v2/forms/{code}" : {
      "get" : {
        "tags" : [ "Forms" ],
        "summary" : "Search the latest version of the form",
        "description" : "",
        "operationId" : "getFormByCode",
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "code",
          "in" : "path",
          "description" : "Form code",
          "required" : true,
          "type" : "integer",
          "format" : "int32"
        }, {
          "name" : "activityId",
          "in" : "query",
          "description" : "Code of a process activity linked to the form",
          "required" : false,
          "type" : "string"
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
              "$ref" : "#/definitions/FormResponse"
            }
          },
          "401" : {
            "description" : "User is not authenticated",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          },
          "403" : {
            "description" : "User does not have permission to perform the operation ",
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
      },
      "put" : {
        "tags" : [ "Forms" ],
        "summary" : "Save the draft version of the form",
        "description" : "",
        "operationId" : "saveDraftVersion",
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "code",
          "in" : "path",
          "description" : "Form code",
          "required" : true,
          "type" : "integer",
          "format" : "int32"
        }, {
          "in" : "body",
          "name" : "body",
          "description" : "Object to update the draft version of the form",
          "required" : true,
          "schema" : {
            "$ref" : "#/definitions/FormDraft"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "Ok",
            "schema" : {
              "$ref" : "#/definitions/FormResponse"
            }
          },
          "400" : {
            "description" : "Incorrect Request",
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
            "description" : "User does not have permission to perform the operation ",
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
    "/v2/forms/{code}/activity/{activityId}" : {
      "get" : {
        "tags" : [ "Forms" ],
        "summary" : "Search the published form by code and process activity code",
        "description" : "",
        "operationId" : "getFormByCodeAndActivity",
        "consumes" : [ "application/json" ],
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "code",
          "in" : "path",
          "description" : "Form code",
          "required" : true,
          "type" : "integer",
          "format" : "int32"
        }, {
          "name" : "activityId",
          "in" : "path",
          "description" : "Code of a process activity linked to the form",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "Ok",
            "schema" : {
              "$ref" : "#/definitions/FormResponse"
            }
          },
          "400" : {
            "description" : "Incorrect Request",
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
            "description" : "User does not have permission to perform the operation ",
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
    "/v2/forms/{code}/activity/{activityId}/process-instance/{processInstanceId}" : {
      "get" : {
        "tags" : [ "Forms" ],
        "summary" : "Search the published form by code, process activity code, and request number",
        "description" : "",
        "operationId" : "getFormByActivityAndProcessInstance",
        "consumes" : [ "application/json" ],
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "code",
          "in" : "path",
          "description" : "Form code",
          "required" : true,
          "type" : "integer",
          "format" : "int32"
        }, {
          "name" : "activityId",
          "in" : "path",
          "description" : "Code of a process activity linked to the form",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "processInstanceId",
          "in" : "path",
          "description" : "Number of a request from the process linked to the form",
          "required" : true,
          "type" : "integer",
          "format" : "int32"
        } ],
        "responses" : {
          "200" : {
            "description" : "Ok",
            "schema" : {
              "$ref" : "#/definitions/FormResponse"
            }
          },
          "400" : {
            "description" : "Incorrect Request",
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
            "description" : "User does not have permission to perform the operation ",
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
    "/v2/forms/{code}/components" : {
      "get" : {
        "tags" : [ "Forms" ],
        "summary" : "Search all form fields",
        "description" : "",
        "operationId" : "getFormFields",
        "consumes" : [ "application/json" ],
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "code",
          "in" : "path",
          "description" : "Form code",
          "required" : true,
          "type" : "integer",
          "format" : "int32"
        } ],
        "responses" : {
          "200" : {
            "description" : "Ok",
            "schema" : {
              "$ref" : "#/definitions/FormFieldCollection"
            }
          },
          "400" : {
            "description" : "Incorrect Request",
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
            "description" : "User does not have permission to perform the operation ",
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
    "/v2/forms/{code}/publish" : {
      "post" : {
        "tags" : [ "Forms" ],
        "summary" : "Publish the draft version of the form",
        "description" : "",
        "operationId" : "publish",
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "code",
          "in" : "path",
          "description" : "Form code",
          "required" : true,
          "type" : "integer",
          "format" : "int32"
        } ],
        "responses" : {
          "200" : {
            "description" : "Ok",
            "schema" : {
              "$ref" : "#/definitions/FormResponse"
            }
          },
          "400" : {
            "description" : "Incorrect Request",
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
            "description" : "User does not have permission to perform the operation ",
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
    "/v2/forms/{code}/versions" : {
      "get" : {
        "tags" : [ "Forms" ],
        "summary" : "Search all versions of the form",
        "description" : "",
        "operationId" : "getFormVersions",
        "consumes" : [ "application/json" ],
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "code",
          "in" : "path",
          "description" : "Form code",
          "required" : true,
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
        } ],
        "responses" : {
          "200" : {
            "description" : "Ok",
            "schema" : {
              "$ref" : "#/definitions/FormFieldCollection"
            }
          },
          "400" : {
            "description" : "Incorrect Request",
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
            "description" : "User does not have permission to perform the operation ",
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
    "/v2/forms/{code}/{version}" : {
      "get" : {
        "tags" : [ "Forms" ],
        "summary" : "Search the form version",
        "description" : "",
        "operationId" : "getFormByCodeAndVersion",
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "code",
          "in" : "path",
          "description" : "Form code",
          "required" : true,
          "type" : "integer",
          "pattern" : "\\d+",
          "format" : "int32"
        }, {
          "name" : "version",
          "in" : "path",
          "description" : "Form Version",
          "required" : true,
          "type" : "integer",
          "pattern" : "\\d+",
          "format" : "int32"
        }, {
          "name" : "activityId",
          "in" : "query",
          "description" : "Code of a process activity linked to the form",
          "required" : false,
          "type" : "string"
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
              "$ref" : "#/definitions/FormResponse"
            }
          },
          "401" : {
            "description" : "User is not authenticated",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          },
          "403" : {
            "description" : "User does not have permission to perform the operation ",
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
    "FormCollection" : {
      "type" : "object",
      "properties" : {
        "items" : {
          "type" : "array",
          "items" : {
            "$ref" : "#/definitions/FormInfo"
          }
        },
        "hasNext" : {
          "type" : "boolean",
          "readOnly" : true
        }
      }
    },
    "FormCreate" : {
      "type" : "object",
      "required" : [ "category", "content", "name" ],
      "properties" : {
        "name" : {
          "type" : "string",
          "description" : "Name"
        },
        "content" : {
          "type" : "string",
          "description" : "Content"
        },
        "category" : {
          "type" : "string",
          "description" : "Category",
          "enum" : [ "CRUD", "PROCESS", "SOCIABLE" ]
        },
        "processId" : {
          "type" : "string",
          "description" : "Process identifier"
        }
      }
    },
    "FormDraft" : {
      "type" : "object",
      "required" : [ "content" ],
      "properties" : {
        "content" : {
          "type" : "string",
          "description" : "Content"
        }
      }
    },
    "FormFieldCollection" : {
      "type" : "object",
      "properties" : {
        "fields" : {
          "type" : "object",
          "description" : "List of Form Fields",
          "additionalProperties" : {
            "type" : "string"
          }
        }
      }
    },
    "FormImageResponse" : {
      "type" : "object",
      "properties" : {
        "url" : {
          "type" : "string",
          "description" : "Image URL"
        }
      }
    },
    "FormInfo" : {
      "type" : "object",
      "properties" : {
        "code" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Code"
        },
        "version" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Version"
        },
        "title" : {
          "type" : "string",
          "description" : "Title"
        },
        "category" : {
          "type" : "string",
          "description" : "Category",
          "enum" : [ "CRUD", "PROCESS", "SOCIABLE" ]
        },
        "versionStatus" : {
          "type" : "string",
          "description" : "Status, published or in draft",
          "enum" : [ "DRAFT", "PUBLISHED" ]
        }
      }
    },
    "FormResponse" : {
      "type" : "object",
      "properties" : {
        "id" : {
          "type" : "integer",
          "format" : "int64",
          "description" : "Identifier"
        },
        "code" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Code"
        },
        "version" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Version"
        },
        "name" : {
          "type" : "string",
          "description" : "Name"
        },
        "content" : {
          "type" : "string",
          "description" : "Content"
        },
        "versionStatus" : {
          "type" : "string",
          "description" : "Status, published or in draft",
          "enum" : [ "DRAFT", "PUBLISHED" ]
        },
        "category" : {
          "type" : "string",
          "description" : "Category",
          "enum" : [ "CRUD", "PROCESS", "SOCIABLE" ]
        },
        "publisherCode" : {
          "type" : "string",
          "description" : "Publisher"
        },
        "createdAt" : {
          "type" : "string",
          "description" : "Created on"
        },
        "updatedAt" : {
          "type" : "string",
          "description" : "Updated on"
        },
        "processId" : {
          "type" : "string",
          "description" : "Process identifier"
        },
        "datasetName" : {
          "type" : "string",
          "description" : "Dataset name"
        },
        "processVersion" : {
          "description" : "Return object of a process",
          "$ref" : "#/definitions/ProcessVersionResponse"
        }
      }
    },
    "ProcessVersionResponse" : {
      "type" : "object",
      "properties" : {
        "processId" : {
          "type" : "string",
          "description" : "Process identifier"
        },
        "version" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Process version"
        },
        "active" : {
          "type" : "boolean",
          "description" : "v2.api.process.dto.model.property.active"
        },
        "blockedVersion" : {
          "type" : "boolean",
          "description" : "Locked process version"
        },
        "editionMode" : {
          "type" : "boolean",
          "description" : "Process editing"
        }
      }
    }
  }
}
```
