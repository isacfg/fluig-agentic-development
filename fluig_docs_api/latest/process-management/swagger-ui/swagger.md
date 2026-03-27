# swagger.json

> **Fonte:** [https://api.fluig.com/latest/process-management/swagger-ui/swagger.json](https://api.fluig.com/latest/process-management/swagger-ui/swagger.json)

---

```
{
  "swagger" : "2.0",
  "info" : {
    "description" : "You have information on processes, activities and requests with the Processes API",
    "version" : "v2",
    "title" : "Process Management"
  },
  "host" : "",
  "basePath" : "/process-management/api",
  "tags" : [ {
    "name" : "Exportador de Workflow",
    "description" : "API para exportação completa de workflows"
  }, {
    "name" : "Activities",
    "description" : "Features for activities"
  }, {
    "name" : "Date calculation",
    "description" : "Calculate with dates"
  }, {
    "name" : "Processes",
    "description" : "Features for processes"
  }, {
    "name" : "Requests",
    "description" : "Features for requests"
  }, {
    "name" : "Tasks",
    "description" : "Features for tasks"
  }, {
    "name" : "User substitution",
    "description" : "User substitution feature"
  } ],
  "paths" : {
    "/v2/activities" : {
      "get" : {
        "tags" : [ "Activities" ],
        "summary" : "Searches activities",
        "description" : "",
        "operationId" : "findActivities",
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "processInstanceId",
          "in" : "query",
          "description" : "Request identifier",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "integer",
            "format" : "int32"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "movementSequence",
          "in" : "query",
          "description" : "Identifier of the move associated to the task",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "active",
          "in" : "query",
          "description" : "Active activities",
          "required" : false,
          "type" : "string",
          "enum" : [ "true", "false" ]
        }, {
          "name" : "slaStatus",
          "in" : "query",
          "description" : "Deadline status",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string",
            "enum" : [ "ON_TIME", "WARNING", "EXPIRED" ]
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "processId",
          "in" : "query",
          "description" : "Process identifier",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "requester",
          "in" : "query",
          "description" : "Requisitioner’s registration",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "requesterName",
          "in" : "query",
          "description" : "Requisitioner’s name",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "manager",
          "in" : "query",
          "description" : "Process manager’s registration",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "initialDeadlineDate",
          "in" : "query",
          "description" : "Deadline from",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "finalDeadlineDate",
          "in" : "query",
          "description" : "Deadline until",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "initialStartDate",
          "in" : "query",
          "description" : "Start from",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "finalStartDate",
          "in" : "query",
          "description" : "Start until",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "initialWarningDate",
          "in" : "query",
          "description" : "Expiration notification from",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "finalWarningDate",
          "in" : "query",
          "description" : "Expiration notification until",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "initialEndDate",
          "in" : "query",
          "description" : "Conclusion from",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "finalEndDate",
          "in" : "query",
          "description" : "Conclusion until",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "processVersion",
          "in" : "query",
          "description" : "Process version",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "integer",
            "format" : "int32"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "stateSequence",
          "in" : "query",
          "description" : "String identifier of the process status",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "formFields",
          "in" : "query",
          "description" : "Form fields for search, following the pattern Field:Value",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "requesterLocal",
          "in" : "query",
          "description" : "Requisitioner’s location identifier",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "integer",
            "format" : "int64"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "assigneeLocal",
          "in" : "query",
          "description" : "Person in charge’s location identifier",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "integer",
            "format" : "int64"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "replacedUserCode",
          "in" : "query",
          "description" : "Use user replaced as logged in",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "fields",
          "in" : "query",
          "description" : "Fields returned in JSON, to filter the response message",
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
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "order",
          "in" : "query",
          "description" : "Ordered fields",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string",
            "enum" : [ "processInstanceId", "-processInstanceId", "movementSequence", "-movementSequence", "requester", "-requester", "requester.code", "-requester.code", "Requisitioner’s name", "-requester.name", "requester.mail", "-requester.mail", "active", "-active", "processId", "-processId", "deadline", "-deadline", "startDate", "-startDate", "warningDate", "-warningDate", "endDate", "-endDate", "processVersion", "-processVersion", "state", "-state" ]
          },
          "collectionFormat" : "multi"
        } ],
        "responses" : {
          "200" : {
            "description" : "Ok",
            "schema" : {
              "$ref" : "#/definitions/ProcessActivityList"
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
    "/v2/activities/resume" : {
      "get" : {
        "tags" : [ "Activities" ],
        "summary" : "Shows the query result of activities grouped by status",
        "description" : "",
        "operationId" : "resumeActivities",
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "processInstanceId",
          "in" : "query",
          "description" : "Request identifier",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "integer",
            "format" : "int32"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "movementSequence",
          "in" : "query",
          "description" : "Identifier of the move associated to the task",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "active",
          "in" : "query",
          "description" : "Active activities",
          "required" : false,
          "type" : "string",
          "enum" : [ "true", "false" ]
        }, {
          "name" : "slaStatus",
          "in" : "query",
          "description" : "Deadline status",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string",
            "enum" : [ "ON_TIME", "WARNING", "EXPIRED" ]
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "processId",
          "in" : "query",
          "description" : "Process identifier",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "requester",
          "in" : "query",
          "description" : "Requisitioner’s registration",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "requesterName",
          "in" : "query",
          "description" : "Requisitioner’s name",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "manager",
          "in" : "query",
          "description" : "Process manager’s registration",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "initialDeadlineDate",
          "in" : "query",
          "description" : "Deadline from",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "finalDeadlineDate",
          "in" : "query",
          "description" : "Deadline until",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "initialStartDate",
          "in" : "query",
          "description" : "Start from",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "finalStartDate",
          "in" : "query",
          "description" : "Start until",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "initialWarningDate",
          "in" : "query",
          "description" : "Expiration notification from",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "finalWarningDate",
          "in" : "query",
          "description" : "Expiration notification until",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "initialEndDate",
          "in" : "query",
          "description" : "Conclusion from",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "finalEndDate",
          "in" : "query",
          "description" : "Conclusion until",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "processVersion",
          "in" : "query",
          "description" : "Process version",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "integer",
            "format" : "int32"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "stateSequence",
          "in" : "query",
          "description" : "String identifier of the process status",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "formFields",
          "in" : "query",
          "description" : "Form fields for search, following the pattern Field:Value",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "requesterLocal",
          "in" : "query",
          "description" : "Requisitioner’s location identifier",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "integer",
            "format" : "int64"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "assigneeLocal",
          "in" : "query",
          "description" : "Person in charge’s location identifier",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "integer",
            "format" : "int64"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "replacedUserCode",
          "in" : "query",
          "description" : "Use user replaced as logged in",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "fields",
          "in" : "query",
          "description" : "Fields returned in JSON, to filter the response message",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        } ],
        "responses" : {
          "200" : {
            "description" : "Ok",
            "schema" : {
              "$ref" : "#/definitions/ResumeProcessActivity"
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
    "/v2/date-calculator/duration" : {
      "get" : {
        "tags" : [ "Date calculation" ],
        "summary" : "Duration between two dates",
        "description" : "",
        "operationId" : "duration",
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "startDate",
          "in" : "query",
          "description" : "Start from",
          "required" : true,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "endDate",
          "in" : "query",
          "description" : "End date",
          "required" : true,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "localId",
          "in" : "query",
          "description" : "Location identifier",
          "required" : false,
          "type" : "integer",
          "format" : "int64"
        }, {
          "name" : "periodId",
          "in" : "query",
          "description" : "Identifier of the period used to calculate deadlines",
          "required" : false,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "Ok",
            "schema" : {
              "$ref" : "#/definitions/DateDuration"
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
    "/v2/date-calculator/end-date" : {
      "get" : {
        "tags" : [ "Date calculation" ],
        "summary" : "Calculate end date",
        "description" : "",
        "operationId" : "endDate",
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "startDate",
          "in" : "query",
          "description" : "Start from",
          "required" : true,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "seconds",
          "in" : "query",
          "description" : "Number of seconds to calculate deadline.",
          "required" : true,
          "type" : "integer",
          "format" : "int64"
        }, {
          "name" : "localId",
          "in" : "query",
          "description" : "Location identifier",
          "required" : false,
          "type" : "integer",
          "format" : "int64"
        }, {
          "name" : "periodId",
          "in" : "query",
          "description" : "Identifier of the period used to calculate deadlines",
          "required" : false,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "Ok",
            "schema" : {
              "type" : "string",
              "format" : "date-time"
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
    "/v2/date-calculator/start-date" : {
      "get" : {
        "tags" : [ "Date calculation" ],
        "summary" : "Calculate start date",
        "description" : "",
        "operationId" : "startDate",
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "endDate",
          "in" : "query",
          "description" : "End date",
          "required" : true,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "seconds",
          "in" : "query",
          "description" : "Number of seconds to calculate deadline.",
          "required" : true,
          "type" : "integer",
          "format" : "int64"
        }, {
          "name" : "localId",
          "in" : "query",
          "description" : "Location identifier",
          "required" : false,
          "type" : "integer",
          "format" : "int64"
        }, {
          "name" : "periodId",
          "in" : "query",
          "description" : "Identifier of the period used to calculate deadlines",
          "required" : false,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "Ok",
            "schema" : {
              "type" : "string",
              "format" : "date-time"
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
            "description" : "respofindWorkflowTasksOnDemand_v2nse.status.server.error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        }
      }
    },
    "/v2/processes" : {
      "get" : {
        "tags" : [ "Processes" ],
        "summary" : "Searches processes",
        "description" : "",
        "operationId" : "findProcesses",
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "order",
          "in" : "query",
          "description" : "Ordered fields",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string",
            "enum" : [ "processId", "-processId", "processDescription", "-processDescription", "categoryId", "-categoryId", "volumeId", "-volumeId", "periodId", "-periodId", "deadlineTime", "-deadlineTime", "warningTime", "-warningTime" ]
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
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "processId",
          "in" : "query",
          "description" : "Process Id",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "active",
          "in" : "query",
          "description" : "Search for active processes",
          "required" : false,
          "type" : "string",
          "enum" : [ "true", "false" ]
        }, {
          "name" : "public",
          "in" : "query",
          "description" : "Search for public processes",
          "required" : false,
          "type" : "string",
          "enum" : [ "true", "false" ]
        }, {
          "name" : "categoryId",
          "in" : "query",
          "description" : "Search based on literal category id",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "likeCategories",
          "in" : "query",
          "description" : "Turns category search to a like search, allowing sub category queries",
          "required" : false,
          "type" : "string",
          "enum" : [ "true", "false" ]
        }, {
          "name" : "uniqueFormRecord",
          "in" : "query",
          "description" : "Search for processes that don't keep version track of their form records",
          "required" : false,
          "type" : "string",
          "enum" : [ "true", "false" ]
        }, {
          "name" : "released",
          "in" : "query",
          "description" : "Search for processes that have at least one active and published version",
          "required" : false,
          "type" : "string",
          "enum" : [ "true", "false" ]
        }, {
          "name" : "deadlinePresent",
          "in" : "query",
          "description" : "If the search is for processes with deadline",
          "required" : false,
          "type" : "string",
          "enum" : [ "true", "false" ]
        }, {
          "name" : "warningPresent",
          "in" : "query",
          "description" : "If the search is for processes with warning timeout",
          "required" : false,
          "type" : "string",
          "enum" : [ "true", "false" ]
        }, {
          "name" : "processDescription",
          "in" : "query",
          "description" : "Search for processes based on description (like search)",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "volumeId",
          "in" : "query",
          "description" : "Search for processes within certain volume",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "periodId",
          "in" : "query",
          "description" : "Search for processes with certain period",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "fields",
          "in" : "query",
          "description" : "Fields returned in JSON, to filter the response message",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        } ],
        "responses" : {
          "200" : {
            "description" : "Ok",
            "schema" : {
              "$ref" : "#/definitions/ProcessList"
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
      },
      "post" : {
        "tags" : [ "Processes" ],
        "summary" : "Create simple process with few parameters",
        "description" : "",
        "operationId" : "createSimpleProcess",
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "in" : "body",
          "name" : "processSimpleCreate",
          "description" : "Simple process creation template",
          "required" : false,
          "schema" : {
            "$ref" : "#/definitions/ProcessSimpleCreate"
          }
        }, {
          "name" : "expand",
          "in" : "query",
          "description" : "Expandable fields",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "fields",
          "in" : "query",
          "description" : "Fields returned in JSON, to filter the response message",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        } ],
        "responses" : {
          "201" : {
            "description" : "Created",
            "schema" : {
              "$ref" : "#/definitions/Process"
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
    "/v2/processes/import/xml" : {
      "post" : {
        "tags" : [ "Processes" ],
        "summary" : "Import process XML",
        "description" : "",
        "operationId" : "importNewProcess",
        "consumes" : [ "application/xml" ],
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "in" : "body",
          "name" : "body",
          "required" : false,
          "schema" : {
            "type" : "string"
          }
        }, {
          "name" : "processId",
          "in" : "query",
          "description" : "Process identifier",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "formId",
          "in" : "query",
          "description" : "Form identifier",
          "required" : false,
          "type" : "integer",
          "format" : "int32"
        }, {
          "name" : "release",
          "in" : "query",
          "description" : "Release",
          "required" : false,
          "type" : "boolean"
        }, {
          "name" : "expand",
          "in" : "query",
          "description" : "Expandable fields",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "fields",
          "in" : "query",
          "description" : "Fields returned in JSON, to filter the response message",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        } ],
        "responses" : {
          "200" : {
            "description" : "Created",
            "schema" : {
              "$ref" : "#/definitions/Process"
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
    "/v2/processes/{processId}" : {
      "get" : {
        "tags" : [ "Processes" ],
        "summary" : "Searches processes",
        "description" : "",
        "operationId" : "findProcess",
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "processId",
          "in" : "path",
          "description" : "Process identifier",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "expand",
          "in" : "query",
          "description" : "Expandable fields",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "fields",
          "in" : "query",
          "description" : "Fields returned in JSON, to filter the response message",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        } ],
        "responses" : {
          "200" : {
            "description" : "Ok",
            "schema" : {
              "$ref" : "#/definitions/Process"
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
      "delete" : {
        "tags" : [ "Processes" ],
        "summary" : "Remove a process",
        "description" : "",
        "operationId" : "removeProcess",
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "processId",
          "in" : "path",
          "description" : "Process identifier",
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
    "/v2/processes/{processId}/activities" : {
      "get" : {
        "tags" : [ "Processes" ],
        "summary" : "Searches activities",
        "description" : "",
        "operationId" : "findActivitiesByProcess",
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "processInstanceId",
          "in" : "query",
          "description" : "Request identifier",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "integer",
            "format" : "int32"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "movementSequence",
          "in" : "query",
          "description" : "Identifier of the move associated to the task",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "active",
          "in" : "query",
          "description" : "Active activities",
          "required" : false,
          "type" : "string",
          "enum" : [ "true", "false" ]
        }, {
          "name" : "slaStatus",
          "in" : "query",
          "description" : "Deadline status",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string",
            "enum" : [ "ON_TIME", "WARNING", "EXPIRED" ]
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "processId",
          "in" : "path",
          "description" : "Process identifier",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "requester",
          "in" : "query",
          "description" : "Requisitioner’s registration",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "requesterName",
          "in" : "query",
          "description" : "Requisitioner’s name",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "manager",
          "in" : "query",
          "description" : "Process manager’s registration",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "initialDeadlineDate",
          "in" : "query",
          "description" : "Deadline from",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "finalDeadlineDate",
          "in" : "query",
          "description" : "Deadline until",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "initialStartDate",
          "in" : "query",
          "description" : "Start from",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "finalStartDate",
          "in" : "query",
          "description" : "Start until",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "initialWarningDate",
          "in" : "query",
          "description" : "Expiration notification from",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "finalWarningDate",
          "in" : "query",
          "description" : "Expiration notification until",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "initialEndDate",
          "in" : "query",
          "description" : "Conclusion from",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "finalEndDate",
          "in" : "query",
          "description" : "Conclusion until",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "processVersion",
          "in" : "query",
          "description" : "Process version",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "integer",
            "format" : "int32"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "stateSequence",
          "in" : "query",
          "description" : "String identifier of the process status",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "formFields",
          "in" : "query",
          "description" : "Form fields for search, following the pattern Field:Value",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "requesterLocal",
          "in" : "query",
          "description" : "Requisitioner’s location identifier",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "integer",
            "format" : "int64"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "assigneeLocal",
          "in" : "query",
          "description" : "Person in charge’s location identifier",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "integer",
            "format" : "int64"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "replacedUserCode",
          "in" : "query",
          "description" : "Use user replaced as logged in",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "fields",
          "in" : "query",
          "description" : "Fields returned in JSON, to filter the response message",
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
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "order",
          "in" : "query",
          "description" : "Ordered fields",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string",
            "enum" : [ "processInstanceId", "-processInstanceId", "movementSequence", "-movementSequence", "requester", "-requester", "requester.code", "-requester.code", "Requisitioner’s name", "-requester.name", "requester.mail", "-requester.mail", "active", "-active", "processId", "-processId", "deadline", "-deadline", "startDate", "-startDate", "warningDate", "-warningDate", "endDate", "-endDate", "processVersion", "-processVersion", "state", "-state" ]
          },
          "collectionFormat" : "multi"
        } ],
        "responses" : {
          "200" : {
            "description" : "Ok",
            "schema" : {
              "$ref" : "#/definitions/ProcessActivityList"
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
    "/v2/processes/{processId}/activities/resume" : {
      "get" : {
        "tags" : [ "Processes" ],
        "summary" : "Shows the query result of activities grouped by status",
        "description" : "",
        "operationId" : "resumeActivitiesByProcess",
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "processInstanceId",
          "in" : "query",
          "description" : "Request identifier",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "integer",
            "format" : "int32"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "movementSequence",
          "in" : "query",
          "description" : "Identifier of the move associated to the task",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "active",
          "in" : "query",
          "description" : "Active activities",
          "required" : false,
          "type" : "string",
          "enum" : [ "true", "false" ]
        }, {
          "name" : "slaStatus",
          "in" : "query",
          "description" : "Deadline status",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string",
            "enum" : [ "ON_TIME", "WARNING", "EXPIRED" ]
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "processId",
          "in" : "path",
          "description" : "Process identifier",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "requester",
          "in" : "query",
          "description" : "Requisitioner’s registration",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "requesterName",
          "in" : "query",
          "description" : "Requisitioner’s name",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "manager",
          "in" : "query",
          "description" : "Process manager’s registration",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "initialDeadlineDate",
          "in" : "query",
          "description" : "Deadline from",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "finalDeadlineDate",
          "in" : "query",
          "description" : "Deadline until",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "initialStartDate",
          "in" : "query",
          "description" : "Start from",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "finalStartDate",
          "in" : "query",
          "description" : "Start until",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "initialWarningDate",
          "in" : "query",
          "description" : "Expiration notification from",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "finalWarningDate",
          "in" : "query",
          "description" : "Expiration notification until",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "initialEndDate",
          "in" : "query",
          "description" : "Conclusion from",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "finalEndDate",
          "in" : "query",
          "description" : "Conclusion until",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "processVersion",
          "in" : "query",
          "description" : "Process version",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "integer",
            "format" : "int32"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "stateSequence",
          "in" : "query",
          "description" : "String identifier of the process status",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "formFields",
          "in" : "query",
          "description" : "Form fields for search, following the pattern Field:Value",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "requesterLocal",
          "in" : "query",
          "description" : "Requisitioner’s location identifier",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "integer",
            "format" : "int64"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "assigneeLocal",
          "in" : "query",
          "description" : "Person in charge’s location identifier",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "integer",
            "format" : "int64"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "replacedUserCode",
          "in" : "query",
          "description" : "Use user replaced as logged in",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "fields",
          "in" : "query",
          "description" : "Fields returned in JSON, to filter the response message",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        } ],
        "responses" : {
          "200" : {
            "description" : "Ok",
            "schema" : {
              "$ref" : "#/definitions/ResumeProcessActivity"
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
    "/v2/processes/{processId}/export/xml" : {
      "get" : {
        "tags" : [ "Processes" ],
        "summary" : "Export configuration xml from the latest version of the process",
        "description" : "",
        "operationId" : "exportProcess",
        "produces" : [ "application/xml", "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "processId",
          "in" : "path",
          "description" : "Process identifier",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "Created",
            "schema" : {
              "$ref" : "#/definitions/Process"
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
    "/v2/processes/{processId}/import/xml" : {
      "post" : {
        "tags" : [ "Processes" ],
        "summary" : "Import process XML",
        "description" : "",
        "operationId" : "importProcess",
        "consumes" : [ "application/xml" ],
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "in" : "body",
          "name" : "body",
          "required" : false,
          "schema" : {
            "type" : "string"
          }
        }, {
          "name" : "processId",
          "in" : "path",
          "description" : "Process identifier",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "formId",
          "in" : "query",
          "description" : "Form identifier",
          "required" : false,
          "type" : "integer",
          "format" : "int32"
        }, {
          "name" : "release",
          "in" : "query",
          "description" : "Release",
          "required" : false,
          "type" : "boolean"
        }, {
          "name" : "expand",
          "in" : "query",
          "description" : "Expandable fields",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "fields",
          "in" : "query",
          "description" : "Fields returned in JSON, to filter the response message",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        } ],
        "responses" : {
          "200" : {
            "description" : "Created",
            "schema" : {
              "$ref" : "#/definitions/Process"
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
    "/v2/processes/{processId}/process-versions" : {
      "get" : {
        "tags" : [ "Processes" ],
        "summary" : "Searches process versions",
        "description" : "",
        "operationId" : "findProcessVersions",
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "processId",
          "in" : "path",
          "description" : "Process identifier",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "order",
          "in" : "query",
          "description" : "Ordered fields",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string",
            "enum" : [ "processId", "-processId", "version", "-version", "formId", "-formId", "bpmnVersion", "-bpmnVersion" ]
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
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "version",
          "in" : "query",
          "description" : "Version number",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "integer",
            "format" : "int32"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "formId",
          "in" : "query",
          "description" : "Form Id",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "formExistent",
          "in" : "query",
          "description" : "If there is a form attached to the version",
          "required" : false,
          "type" : "string",
          "enum" : [ "true", "false" ]
        }, {
          "name" : "editing",
          "in" : "query",
          "description" : "Search for versions in editing mode",
          "required" : false,
          "type" : "string",
          "enum" : [ "true", "false" ]
        }, {
          "name" : "active",
          "in" : "query",
          "description" : "Search for active versions",
          "required" : false,
          "type" : "string",
          "enum" : [ "true", "false" ]
        }, {
          "name" : "blocked",
          "in" : "query",
          "description" : "Search for blocked versions",
          "required" : false,
          "type" : "string",
          "enum" : [ "true", "false" ]
        }, {
          "name" : "requiresPassword",
          "in" : "query",
          "description" : "Search for versions that requires password for moving",
          "required" : false,
          "type" : "string",
          "enum" : [ "true", "false" ]
        }, {
          "name" : "bpmnVersion",
          "in" : "query",
          "description" : "Search for versions by bpmn version number",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "inheritFormSecurity",
          "in" : "query",
          "description" : "Search for versions in which forms inherit security from documents",
          "required" : false,
          "type" : "string",
          "enum" : [ "true", "false" ]
        }, {
          "name" : "mobileReady",
          "in" : "query",
          "description" : "Search for versions that are able to be handled in mobile",
          "required" : false,
          "type" : "string",
          "enum" : [ "true", "false" ]
        }, {
          "name" : "fields",
          "in" : "query",
          "description" : "Fields returned in JSON, to filter the response message",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        } ],
        "responses" : {
          "200" : {
            "description" : "Ok",
            "schema" : {
              "$ref" : "#/definitions/ProcessVersionList"
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
    "/v2/processes/{processId}/process-versions/latest" : {
      "delete" : {
        "tags" : [ "Processes" ],
        "summary" : "Remove the latest version of the process",
        "description" : "",
        "operationId" : "removeLatestVersion",
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "processId",
          "in" : "path",
          "description" : "Process identifier",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "204" : {
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
    "/v2/processes/{processId}/process-versions/latest/release" : {
      "post" : {
        "tags" : [ "Processes" ],
        "summary" : "Release the latest version of the process for use",
        "description" : "",
        "operationId" : "releaseLatestVersion",
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "processId",
          "in" : "path",
          "description" : "Process identifier",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "204" : {
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
    "/v2/processes/{processId}/process-versions/latest/withdraw" : {
      "post" : {
        "tags" : [ "Processes" ],
        "summary" : "Remove release of the latest version of the process",
        "description" : "",
        "operationId" : "withdrawLatestVersion",
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "processId",
          "in" : "path",
          "description" : "Process identifier",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "204" : {
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
    "/v2/processes/{processId}/process-versions/{processVersion}" : {
      "get" : {
        "tags" : [ "Processes" ],
        "summary" : "Searches processes",
        "description" : "",
        "operationId" : "findProcessVersion",
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "processId",
          "in" : "path",
          "description" : "Process identifier",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "processVersion",
          "in" : "path",
          "description" : "Process version",
          "required" : true,
          "type" : "integer",
          "format" : "int32"
        }, {
          "name" : "expand",
          "in" : "query",
          "description" : "Expandable fields",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "fields",
          "in" : "query",
          "description" : "Fields returned in JSON, to filter the response message",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        } ],
        "responses" : {
          "200" : {
            "description" : "Ok",
            "schema" : {
              "$ref" : "#/definitions/ProcessVersion"
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
      "delete" : {
        "tags" : [ "Processes" ],
        "summary" : "Remove a version of the process",
        "description" : "",
        "operationId" : "removeVersion",
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "processId",
          "in" : "path",
          "description" : "Process identifier",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "processVersion",
          "in" : "path",
          "description" : "Process version",
          "required" : true,
          "type" : "integer",
          "format" : "int32"
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
    "/v2/processes/{processId}/process-versions/{processVersion}/activities" : {
      "get" : {
        "tags" : [ "Processes" ],
        "summary" : "Searches activities",
        "description" : "",
        "operationId" : "findActivitiesByProcessIdAndVersion",
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "processInstanceId",
          "in" : "query",
          "description" : "Request identifier",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "integer",
            "format" : "int32"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "movementSequence",
          "in" : "query",
          "description" : "Identifier of the move associated to the task",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "active",
          "in" : "query",
          "description" : "Active activities",
          "required" : false,
          "type" : "string",
          "enum" : [ "true", "false" ]
        }, {
          "name" : "slaStatus",
          "in" : "query",
          "description" : "Deadline status",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string",
            "enum" : [ "ON_TIME", "WARNING", "EXPIRED" ]
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "processId",
          "in" : "path",
          "description" : "Process identifier",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "requester",
          "in" : "query",
          "description" : "Requisitioner’s registration",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "requesterName",
          "in" : "query",
          "description" : "Requisitioner’s name",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "manager",
          "in" : "query",
          "description" : "Process manager’s registration",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "initialDeadlineDate",
          "in" : "query",
          "description" : "Deadline from",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "finalDeadlineDate",
          "in" : "query",
          "description" : "Deadline until",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "initialStartDate",
          "in" : "query",
          "description" : "Start from",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "finalStartDate",
          "in" : "query",
          "description" : "Start until",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "initialWarningDate",
          "in" : "query",
          "description" : "Expiration notification from",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "finalWarningDate",
          "in" : "query",
          "description" : "Expiration notification until",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "initialEndDate",
          "in" : "query",
          "description" : "Conclusion from",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "finalEndDate",
          "in" : "query",
          "description" : "Conclusion until",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "processVersion",
          "in" : "path",
          "description" : "Process version",
          "required" : true,
          "type" : "integer",
          "format" : "int32"
        }, {
          "name" : "stateSequence",
          "in" : "query",
          "description" : "String identifier of the process status",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "formFields",
          "in" : "query",
          "description" : "Form fields for search, following the pattern Field:Value",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "requesterLocal",
          "in" : "query",
          "description" : "Requisitioner’s location identifier",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "integer",
            "format" : "int64"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "assigneeLocal",
          "in" : "query",
          "description" : "Person in charge’s location identifier",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "integer",
            "format" : "int64"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "replacedUserCode",
          "in" : "query",
          "description" : "Use user replaced as logged in",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "fields",
          "in" : "query",
          "description" : "Fields returned in JSON, to filter the response message",
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
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "order",
          "in" : "query",
          "description" : "Ordered fields",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string",
            "enum" : [ "processInstanceId", "-processInstanceId", "movementSequence", "-movementSequence", "requester", "-requester", "requester.code", "-requester.code", "Requisitioner’s name", "-requester.name", "requester.mail", "-requester.mail", "active", "-active", "processId", "-processId", "deadline", "-deadline", "startDate", "-startDate", "warningDate", "-warningDate", "endDate", "-endDate", "processVersion", "-processVersion", "state", "-state" ]
          },
          "collectionFormat" : "multi"
        } ],
        "responses" : {
          "200" : {
            "description" : "Ok",
            "schema" : {
              "$ref" : "#/definitions/ProcessActivityList"
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
    "/v2/processes/{processId}/process-versions/{processVersion}/activities/resume" : {
      "get" : {
        "tags" : [ "Processes" ],
        "summary" : "Shows the query result of activities grouped by status",
        "description" : "",
        "operationId" : "resumeActivitiesByProcessIdAndVersion",
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "processInstanceId",
          "in" : "query",
          "description" : "Request identifier",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "integer",
            "format" : "int32"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "movementSequence",
          "in" : "query",
          "description" : "Identifier of the move associated to the task",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "active",
          "in" : "query",
          "description" : "Active activities",
          "required" : false,
          "type" : "string",
          "enum" : [ "true", "false" ]
        }, {
          "name" : "slaStatus",
          "in" : "query",
          "description" : "Deadline status",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string",
            "enum" : [ "ON_TIME", "WARNING", "EXPIRED" ]
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "processId",
          "in" : "path",
          "description" : "Process identifier",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "requester",
          "in" : "query",
          "description" : "Requisitioner’s registration",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "requesterName",
          "in" : "query",
          "description" : "Requisitioner’s name",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "manager",
          "in" : "query",
          "description" : "Process manager’s registration",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "initialDeadlineDate",
          "in" : "query",
          "description" : "Deadline from",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "finalDeadlineDate",
          "in" : "query",
          "description" : "Deadline until",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "initialStartDate",
          "in" : "query",
          "description" : "Start from",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "finalStartDate",
          "in" : "query",
          "description" : "Start until",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "initialWarningDate",
          "in" : "query",
          "description" : "Expiration notification from",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "finalWarningDate",
          "in" : "query",
          "description" : "Expiration notification until",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "initialEndDate",
          "in" : "query",
          "description" : "Conclusion from",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "finalEndDate",
          "in" : "query",
          "description" : "Conclusion until",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "processVersion",
          "in" : "path",
          "description" : "Process version",
          "required" : true,
          "type" : "integer",
          "format" : "int32"
        }, {
          "name" : "stateSequence",
          "in" : "query",
          "description" : "String identifier of the process status",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "formFields",
          "in" : "query",
          "description" : "Form fields for search, following the pattern Field:Value",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "requesterLocal",
          "in" : "query",
          "description" : "Requisitioner’s location identifier",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "integer",
            "format" : "int64"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "assigneeLocal",
          "in" : "query",
          "description" : "Person in charge’s location identifier",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "integer",
            "format" : "int64"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "replacedUserCode",
          "in" : "query",
          "description" : "Use user replaced as logged in",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "fields",
          "in" : "query",
          "description" : "Fields returned in JSON, to filter the response message",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        } ],
        "responses" : {
          "200" : {
            "description" : "Ok",
            "schema" : {
              "$ref" : "#/definitions/ResumeProcessActivity"
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
    "/v2/processes/{processId}/process-versions/{processVersion}/diagram" : {
      "get" : {
        "tags" : [ "Processes" ],
        "summary" : "Retrieve process diagram in SVG",
        "description" : "",
        "operationId" : "findProcessVersionSVG",
        "produces" : [ "application/svg+xml", "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "processId",
          "in" : "path",
          "description" : "Process identifier",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "processVersion",
          "in" : "path",
          "description" : "Process version",
          "required" : true,
          "type" : "integer",
          "format" : "int32"
        } ],
        "responses" : {
          "200" : {
            "description" : "Ok",
            "schema" : {
              "type" : "string"
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
      "put" : {
        "tags" : [ "Processes" ],
        "summary" : "Retrieve process diagram in SVG",
        "description" : "",
        "operationId" : "updateProcessVersionSVG",
        "consumes" : [ "application/svg+xml" ],
        "produces" : [ "application/svg+xml", "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "in" : "body",
          "name" : "body",
          "required" : false,
          "schema" : {
            "type" : "string"
          }
        }, {
          "name" : "processId",
          "in" : "path",
          "description" : "Process identifier",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "processVersion",
          "in" : "path",
          "description" : "Process version",
          "required" : true,
          "type" : "integer",
          "format" : "int32"
        }, {
          "name" : "expand",
          "in" : "query",
          "description" : "Expandable fields",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "fields",
          "in" : "query",
          "description" : "Fields returned in JSON, to filter the response message",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        } ],
        "responses" : {
          "200" : {
            "description" : "Ok",
            "schema" : {
              "$ref" : "#/definitions/ProcessVersion"
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
    "/v2/processes/{processId}/process-versions/{processVersion}/export/xml" : {
      "get" : {
        "tags" : [ "Processes" ],
        "summary" : "Export configuration xml from a version of the process",
        "description" : "",
        "operationId" : "exportProcessVersion",
        "produces" : [ "application/xml", "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "processId",
          "in" : "path",
          "description" : "Process identifier",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "processVersion",
          "in" : "path",
          "description" : "Process version",
          "required" : true,
          "type" : "integer",
          "format" : "int32"
        } ],
        "responses" : {
          "200" : {
            "description" : "Ok",
            "schema" : {
              "type" : "string"
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
    "/v2/processes/{processId}/process-versions/{processVersion}/release" : {
      "post" : {
        "tags" : [ "Processes" ],
        "summary" : "Release a version of the process for use",
        "description" : "",
        "operationId" : "releaseVersion",
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "processId",
          "in" : "path",
          "description" : "Process identifier",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "processVersion",
          "in" : "path",
          "description" : "Process version",
          "required" : true,
          "type" : "integer",
          "format" : "int32"
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
    "/v2/processes/{processId}/process-versions/{processVersion}/requests" : {
      "get" : {
        "tags" : [ "Processes" ],
        "summary" : "Searches requests",
        "description" : "",
        "operationId" : "findRequestsByProcessVersion",
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "processInstanceId",
          "in" : "query",
          "description" : "Request identifier",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "integer",
            "format" : "int32"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "initialProcessInstanceId",
          "in" : "query",
          "description" : "Range initial of request id",
          "required" : false,
          "type" : "integer",
          "format" : "int32"
        }, {
          "name" : "finalProcessInstanceId",
          "in" : "query",
          "description" : "Range final of request id",
          "required" : false,
          "type" : "integer",
          "format" : "int32"
        }, {
          "name" : "participants",
          "in" : "query",
          "description" : "Task participants",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "completeColleagueIds",
          "in" : "query",
          "description" : "Completed task with manager or substitute",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "assignee",
          "in" : "query",
          "description" : "Person in charge’s registration",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "status",
          "in" : "query",
          "description" : "Request status",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string",
            "enum" : [ "OPEN", "CANCELED", "FINALIZED" ]
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "slaStatus",
          "in" : "query",
          "description" : "Deadline status",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string",
            "enum" : [ "ON_TIME", "WARNING", "EXPIRED" ]
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "processId",
          "in" : "path",
          "description" : "Process identifier",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "requester",
          "in" : "query",
          "description" : "Requester",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "assigneeName",
          "in" : "query",
          "description" : "Person In charge’s name",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "requesterName",
          "in" : "query",
          "description" : "Requisitioner’s name",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "manager",
          "in" : "query",
          "description" : "Process manager’s registration",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "initialDeadlineDate",
          "in" : "query",
          "description" : "Deadline from",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "finalDeadlineDate",
          "in" : "query",
          "description" : "Deadline until",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "initialStartDate",
          "in" : "query",
          "description" : "Start from",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "finalStartDate",
          "in" : "query",
          "description" : "Start until",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "initialWarningDate",
          "in" : "query",
          "description" : "Expiration notification from",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "finalWarningDate",
          "in" : "query",
          "description" : "Expiration notification until",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "initialEndDate",
          "in" : "query",
          "description" : "Conclusion from",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "finalEndDate",
          "in" : "query",
          "description" : "Conclusion until",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "processVersion",
          "in" : "path",
          "description" : "Process version",
          "required" : true,
          "type" : "integer",
          "format" : "int32"
        }, {
          "name" : "stateSequence",
          "in" : "query",
          "description" : "String identifier of the process status",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "formFields",
          "in" : "query",
          "description" : "Form fields for search, following the pattern Field:Value",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "requesterLocal",
          "in" : "query",
          "description" : "Requisitioner’s location identifier",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "integer",
            "format" : "int64"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "assigneeLocal",
          "in" : "query",
          "description" : "Person in charge’s location identifier",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "integer",
            "format" : "int64"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "replacedUserCode",
          "in" : "query",
          "description" : "Use user replaced as logged in",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "fields",
          "in" : "query",
          "description" : "Fields returned in JSON, to filter the response message",
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
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "order",
          "in" : "query",
          "description" : "Ordered fields",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string",
            "enum" : [ "processInstanceId", "-processInstanceId", "requester", "-requester", "requester.code", "-requester.code", "Requisitioner’s name", "-requester.name", "requester.mail", "-requester.mail", "status", "-status", "processId", "-processId", "deadlineDate", "-deadlineDate", "startDate", "-startDate", "warningDate", "-warningDate", "endDate", "-endDate", "processVersion", "-processVersion" ]
          },
          "collectionFormat" : "multi"
        } ],
        "responses" : {
          "200" : {
            "description" : "Ok",
            "schema" : {
              "$ref" : "#/definitions/RequestList"
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
    "/v2/processes/{processId}/process-versions/{processVersion}/requests/tasks" : {
      "get" : {
        "tags" : [ "Processes" ],
        "summary" : "Searches tasks",
        "description" : "",
        "operationId" : "findTasksByProcessIdAndProcessVersion",
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "processInstanceId",
          "in" : "query",
          "description" : "Request identifier",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "integer",
            "format" : "int32"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "movementSequence",
          "in" : "query",
          "description" : "Identifier of the move associated to the task",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "transferSequence",
          "in" : "query",
          "description" : "Transfer sequence in the task itself",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "assignee",
          "in" : "query",
          "description" : "Person in charge’s registration",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "status",
          "in" : "query",
          "description" : "Task status",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string",
            "enum" : [ "NOT_COMPLETED", "PENDING_CONSENSUS", "COMPLETED", "TRANSFERRED", "CANCELED" ]
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "slaStatus",
          "in" : "query",
          "description" : "Deadline status",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string",
            "enum" : [ "ON_TIME", "WARNING", "EXPIRED" ]
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "processId",
          "in" : "path",
          "description" : "Process identifier",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "requester",
          "in" : "query",
          "description" : "Requisitioner’s registration",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "assigneeName",
          "in" : "query",
          "description" : "Person In charge’s name",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "requesterName",
          "in" : "query",
          "description" : "Requisitioner’s name",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "manager",
          "in" : "query",
          "description" : "Process manager’s registration",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "initialDeadlineDate",
          "in" : "query",
          "description" : "Deadline from",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "finalDeadlineDate",
          "in" : "query",
          "description" : "Deadline until",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "initialStartDate",
          "in" : "query",
          "description" : "Start from",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "finalStartDate",
          "in" : "query",
          "description" : "Start until",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "initialAssignStartDate",
          "in" : "query",
          "description" : "Assigned from",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "finalAssignStartDate",
          "in" : "query",
          "description" : "Assigned to",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "initialAssignEndDate",
          "in" : "query",
          "description" : "Assignment end from",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "finalAssignEndDate",
          "in" : "query",
          "description" : "Assignment end until",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "initialWarningDate",
          "in" : "query",
          "description" : "Expiration notification from",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "finalWarningDate",
          "in" : "query",
          "description" : "Expiration notification until",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "initialEndDate",
          "in" : "query",
          "description" : "Conclusion from",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "finalEndDate",
          "in" : "query",
          "description" : "Conclusion until",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "processVersion",
          "in" : "path",
          "description" : "Process version",
          "required" : true,
          "type" : "integer",
          "format" : "int32"
        }, {
          "name" : "stateSequence",
          "in" : "query",
          "description" : "String identifier of the process status",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "appDecisionSearch",
          "in" : "query",
          "description" : "Searches by title, description and highlight, only if the 'appDecisionInfo' attribute is expanded",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "formFields",
          "in" : "query",
          "description" : "Form fields for search, following the pattern Field:Value",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "requesterLocal",
          "in" : "query",
          "description" : "Requisitioner’s location identifier",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "integer",
            "format" : "int64"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "assigneeLocal",
          "in" : "query",
          "description" : "Person in charge’s location identifier",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "integer",
            "format" : "int64"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "fields",
          "in" : "query",
          "description" : "Fields returned in JSON, to filter the response message",
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
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "replacedUserCode",
          "in" : "query",
          "description" : "Use user replaced as logged in",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "order",
          "in" : "query",
          "description" : "Ordered fields",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string",
            "enum" : [ "processInstanceId", "-processInstanceId", "movementSequence", "-movementSequence", "transferSequence", "-transferSequence", "assignee", "-assignee", "assignee.code", "-assignee.code", "Person In charge’s name", "-assignee.name", "assignee.mail", "-assignee.mail", "requester", "-requester", "requester.code", "-requester.code", "Requisitioner’s name", "-requester.name", "requester.mail", "-requester.mail", "status", "-status", "processId", "-processId", "deadline", "-deadline", "startDate", "-startDate", "assignStartDate", "-assignStartDate", "assignEndDate", "-assignEndDate", "warningDate", "-warningDate", "endDate", "-endDate", "processVersion", "-processVersion", "approvalTitle", "-approvalTitle", "approvalDescription", "-approvalDescription", "approvalHighlight", "-approvalHighlight" ]
          },
          "collectionFormat" : "multi"
        } ],
        "responses" : {
          "200" : {
            "description" : "Ok",
            "schema" : {
              "$ref" : "#/definitions/ProcessTaskList"
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
    "/v2/processes/{processId}/process-versions/{processVersion}/requests/tasks/resume" : {
      "get" : {
        "tags" : [ "Processes" ],
        "summary" : "Shows the query result of tasks grouped by status",
        "description" : "",
        "operationId" : "resumeTasksByProcessAndVersion",
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "processInstanceId",
          "in" : "query",
          "description" : "Request identifier",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "integer",
            "format" : "int32"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "movementSequence",
          "in" : "query",
          "description" : "Identifier of the move associated to the task",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "transferSequence",
          "in" : "query",
          "description" : "Transfer sequence in the task itself",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "assignee",
          "in" : "query",
          "description" : "Person in charge’s registration",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "status",
          "in" : "query",
          "description" : "Task status",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string",
            "enum" : [ "NOT_COMPLETED", "PENDING_CONSENSUS", "COMPLETED", "TRANSFERRED", "CANCELED" ]
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "slaStatus",
          "in" : "query",
          "description" : "Deadline status",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string",
            "enum" : [ "ON_TIME", "WARNING", "EXPIRED" ]
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "processId",
          "in" : "path",
          "description" : "Process identifier",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "requester",
          "in" : "query",
          "description" : "Requisitioner’s registration",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "assigneeName",
          "in" : "query",
          "description" : "Person In charge’s name",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "requesterName",
          "in" : "query",
          "description" : "Requisitioner’s name",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "manager",
          "in" : "query",
          "description" : "Process manager’s registration",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "initialDeadlineDate",
          "in" : "query",
          "description" : "Deadline from",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "finalDeadlineDate",
          "in" : "query",
          "description" : "Deadline until",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "initialStartDate",
          "in" : "query",
          "description" : "Start from",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "finalStartDate",
          "in" : "query",
          "description" : "Start until",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "initialAssignStartDate",
          "in" : "query",
          "description" : "Assigned from",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "finalAssignStartDate",
          "in" : "query",
          "description" : "Assigned to",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "initialAssignEndDate",
          "in" : "query",
          "description" : "Assignment end from",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "finalAssignEndDate",
          "in" : "query",
          "description" : "Assignment end until",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "initialWarningDate",
          "in" : "query",
          "description" : "Expiration notification from",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "finalWarningDate",
          "in" : "query",
          "description" : "Expiration notification until",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "initialEndDate",
          "in" : "query",
          "description" : "Conclusion from",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "finalEndDate",
          "in" : "query",
          "description" : "Conclusion until",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "processVersion",
          "in" : "path",
          "description" : "Process version",
          "required" : true,
          "type" : "integer",
          "format" : "int32"
        }, {
          "name" : "stateSequence",
          "in" : "query",
          "description" : "String identifier of the process status",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "formFields",
          "in" : "query",
          "description" : "Form fields for search, following the pattern Field:Value",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "requesterLocal",
          "in" : "query",
          "description" : "Requisitioner’s location identifier",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "integer",
            "format" : "int64"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "assigneeLocal",
          "in" : "query",
          "description" : "Person in charge’s location identifier",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "integer",
            "format" : "int64"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "fields",
          "in" : "query",
          "description" : "Fields returned in JSON, to filter the response message",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        } ],
        "responses" : {
          "200" : {
            "description" : "Ok",
            "schema" : {
              "$ref" : "#/definitions/ResumeProcessTask"
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
    "/v2/processes/{processId}/process-versions/{processVersion}/states" : {
      "get" : {
        "tags" : [ "Processes" ],
        "summary" : "Searches by process status",
        "description" : "",
        "operationId" : "findProcessStates",
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "processId",
          "in" : "path",
          "description" : "Process identifier",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "stateSequence",
          "in" : "query",
          "description" : "String identifier of the process status",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "processVersion",
          "in" : "path",
          "description" : "Process version",
          "required" : true,
          "type" : "integer",
          "format" : "int32"
        }, {
          "name" : "order",
          "in" : "query",
          "description" : "Ordered fields",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string",
            "enum" : [ "sequence", "-sequence", "stateName", "-stateName", "stateDescription", "-stateDescription", "stateType", "-stateType", "bpmnType", "-bpmnType" ]
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
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "stateType",
          "in" : "query",
          "description" : "State Type",
          "required" : false,
          "type" : "string",
          "enum" : [ "SIMPLE", "AUTOMATIC", "SUBPROCESS", "FORK", "JOIN" ]
        }, {
          "name" : "bpmnType",
          "in" : "query",
          "description" : "Bpmn Type (bpmnType is used only in processes created by Fluig Studio)",
          "required" : false,
          "type" : "string",
          "enum" : [ "START_EVENT_NORMAL", "START_EVENT_MESSAGE", "START_EVENT_TIMER", "START_EVENT_CONDITIONAL", "START_EVENT_SIGNAL", "START_EVENT_PARALLEL_MULTIPLE", "START_EVENT_MULTIPLE", "INTERMEDIATE_EVENT_NORMAL", "INTERMEDIATE_EVENT_MESSAGE", "INTERMEDIATE_EVENT_TIMER", "INTERMEDIATE_EVENT_ESCALATION", "INTERMEDIATE_EVENT_COMPENSATE", "INTERMEDIATE_EVENT_CONDITIONAL", "INTERMEDIATE_EVENT_LINK", "INTERMEDIATE_EVENT_SIGNAL", "INTERMEDIATE_EVENT_PARALLEL_MULTIPLE", "INTERMEDIATE_EVENT_MULTIPLE", "INTERMEDIATE_EVENT_MESSAGE_RECEIVE", "INTERMEDIATE_EVENT_SIGNAL_RECEIVE", "INTERMEDIATE_EVENT_LINK_RECEIVE", "INTERMEDIATE_EVENT_ERROR", "END_EVENT_NORMAL", "END_EVENT_MESSAGE", "END_EVENT_ESCALATION", "END_EVENT_ERROR", "END_EVENT_SIGNAL", "END_EVENT_CANCEL", "END_EVENT_MULTIPLE", "END_EVENT_COMPENSATE", "END_EVENT_TERMINATE", "TASK_NORMAL", "TASK_USER", "TASK_SERVICE", "TASK_RECEIVE", "TASK_MAIL", "TASK_MANUAL", "TASK_BUSINESS_RULE", "TASK_SCRIPT", "SUBPROCESS_NORMAL", "SUBPROCESS_ADHOC", "GATEWAY_EXCLUSIVE", "GATEWAY_INCLUSIVE", "GATEWAY_EVENT", "GATEWAY_EXCLUSIVE_EVENT", "GATEWAY_PARALLEL_EVENT", "GATEWAY_COMPLEX", "GATEWAY_PARALLEL", "GATEWAY_JOIN", "LOOP_NONE", "LOOP_DEFAULT", "LOOP_MULTI_THREAD" ]
        }, {
          "name" : "stateName",
          "in" : "query",
          "description" : "State Name",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "stateDescription",
          "in" : "query",
          "description" : "State Description",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "interactives",
          "in" : "query",
          "description" : "Returns only iteractive states, those who requires user iteraction, it's the equivalent to search for bpmn types START_EVENT_NORMAL, TASK_NORMAL and TASK_USER",
          "required" : false,
          "type" : "string",
          "enum" : [ "true", "false" ]
        }, {
          "name" : "fields",
          "in" : "query",
          "description" : "Fields returned in JSON, to filter the response message",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        } ],
        "responses" : {
          "200" : {
            "description" : "Ok",
            "schema" : {
              "$ref" : "#/definitions/ProcessStateList"
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
    "/v2/processes/{processId}/process-versions/{processVersion}/states/activities/resume" : {
      "get" : {
        "tags" : [ "Processes" ],
        "summary" : "Shows the query result of activities grouped by status",
        "description" : "",
        "operationId" : "resumeActivitiesByStates",
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "processInstanceId",
          "in" : "query",
          "description" : "Request identifier",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "integer",
            "format" : "int32"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "movementSequence",
          "in" : "query",
          "description" : "Identifier of the move associated to the task",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "active",
          "in" : "query",
          "description" : "Active activities",
          "required" : false,
          "type" : "string",
          "enum" : [ "true", "false" ]
        }, {
          "name" : "slaStatus",
          "in" : "query",
          "description" : "Deadline status",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string",
            "enum" : [ "ON_TIME", "WARNING", "EXPIRED" ]
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "processId",
          "in" : "path",
          "description" : "Process identifier",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "requester",
          "in" : "query",
          "description" : "Requisitioner’s registration",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "requesterName",
          "in" : "query",
          "description" : "Requisitioner’s name",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "manager",
          "in" : "query",
          "description" : "Process manager’s registration",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "initialDeadlineDate",
          "in" : "query",
          "description" : "Deadline from",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "finalDeadlineDate",
          "in" : "query",
          "description" : "Deadline until",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "initialStartDate",
          "in" : "query",
          "description" : "Start from",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "finalStartDate",
          "in" : "query",
          "description" : "Start until",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "initialWarningDate",
          "in" : "query",
          "description" : "Expiration notification from",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "finalWarningDate",
          "in" : "query",
          "description" : "Expiration notification until",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "initialEndDate",
          "in" : "query",
          "description" : "Conclusion from",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "finalEndDate",
          "in" : "query",
          "description" : "Conclusion until",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "processVersion",
          "in" : "path",
          "description" : "Process version",
          "required" : true,
          "type" : "integer",
          "format" : "int32"
        }, {
          "name" : "interactives",
          "in" : "query",
          "description" : "Returns only interactive states, those who requires user interaction, it's the equivalent to search for bpmn types START_EVENT_NORMAL, TASK_NORMAL and TASK_USER",
          "required" : false,
          "type" : "string",
          "enum" : [ "true", "false" ]
        }, {
          "name" : "formFields",
          "in" : "query",
          "description" : "Form fields for search, following the pattern Field:Value",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "requesterLocal",
          "in" : "query",
          "description" : "Requisitioner’s location identifier",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "integer",
            "format" : "int64"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "assigneeLocal",
          "in" : "query",
          "description" : "Person in charge’s location identifier",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "integer",
            "format" : "int64"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "replacedUserCode",
          "in" : "query",
          "description" : "Use user replaced as logged in",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "fields",
          "in" : "query",
          "description" : "Fields returned in JSON, to filter the response message",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "expand",
          "in" : "query",
          "description" : "Expandable fields",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        } ],
        "responses" : {
          "200" : {
            "description" : "Ok",
            "schema" : {
              "$ref" : "#/definitions/ResumeProcessActivityByStateList"
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
    "/v2/processes/{processId}/process-versions/{processVersion}/states/{stateSequence}" : {
      "get" : {
        "tags" : [ "Processes" ],
        "summary" : "Searches by process status",
        "description" : "",
        "operationId" : "findProcessState",
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "processId",
          "in" : "path",
          "description" : "Process identifier",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "stateSequence",
          "in" : "path",
          "description" : "String identifier of the process status",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "processVersion",
          "in" : "path",
          "description" : "Process version",
          "required" : true,
          "type" : "integer",
          "format" : "int32"
        }, {
          "name" : "fields",
          "in" : "query",
          "description" : "Fields returned in JSON, to filter the response message",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        } ],
        "responses" : {
          "200" : {
            "description" : "Ok",
            "schema" : {
              "$ref" : "#/definitions/ProcessState"
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
    "/v2/processes/{processId}/process-versions/{processVersion}/states/{stateSequence}/activities/resume" : {
      "get" : {
        "tags" : [ "Processes" ],
        "summary" : "Shows the query result of activities grouped by status",
        "description" : "",
        "operationId" : "resumeActivitiesByState",
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "processInstanceId",
          "in" : "query",
          "description" : "Request identifier",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "integer",
            "format" : "int32"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "movementSequence",
          "in" : "query",
          "description" : "Identifier of the move associated to the task",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "active",
          "in" : "query",
          "description" : "Active activities",
          "required" : false,
          "type" : "string",
          "enum" : [ "true", "false" ]
        }, {
          "name" : "slaStatus",
          "in" : "query",
          "description" : "Deadline status",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string",
            "enum" : [ "ON_TIME", "WARNING", "EXPIRED" ]
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "processId",
          "in" : "path",
          "description" : "Process identifier",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "requester",
          "in" : "query",
          "description" : "Requisitioner’s registration",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "requesterName",
          "in" : "query",
          "description" : "Requisitioner’s name",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "manager",
          "in" : "query",
          "description" : "Process manager’s registration",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "initialDeadlineDate",
          "in" : "query",
          "description" : "Deadline from",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "finalDeadlineDate",
          "in" : "query",
          "description" : "Deadline until",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "initialStartDate",
          "in" : "query",
          "description" : "Start from",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "finalStartDate",
          "in" : "query",
          "description" : "Start until",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "initialWarningDate",
          "in" : "query",
          "description" : "Expiration notification from",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "finalWarningDate",
          "in" : "query",
          "description" : "Expiration notification until",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "initialEndDate",
          "in" : "query",
          "description" : "Conclusion from",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "finalEndDate",
          "in" : "query",
          "description" : "Conclusion until",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "stateSequence",
          "in" : "path",
          "description" : "String identifier of the process status",
          "required" : true,
          "type" : "integer",
          "format" : "int32"
        }, {
          "name" : "processVersion",
          "in" : "path",
          "description" : "Process version",
          "required" : true,
          "type" : "integer",
          "format" : "int32"
        }, {
          "name" : "formFields",
          "in" : "query",
          "description" : "Form fields for search, following the pattern Field:Value",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "requesterLocal",
          "in" : "query",
          "description" : "Requisitioner’s location identifier",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "integer",
            "format" : "int64"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "assigneeLocal",
          "in" : "query",
          "description" : "Person in charge’s location identifier",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "integer",
            "format" : "int64"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "replacedUserCode",
          "in" : "query",
          "description" : "Use user replaced as logged in",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "fields",
          "in" : "query",
          "description" : "Fields returned in JSON, to filter the response message",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        } ],
        "responses" : {
          "200" : {
            "description" : "Ok",
            "schema" : {
              "$ref" : "#/definitions/ResumeProcessActivity"
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
    "/v2/processes/{processId}/process-versions/{processVersion}/withdraw" : {
      "post" : {
        "tags" : [ "Processes" ],
        "summary" : "Remove release of a version of the process",
        "description" : "",
        "operationId" : "withdrawVersion",
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "processId",
          "in" : "path",
          "description" : "Process identifier",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "processVersion",
          "in" : "path",
          "description" : "Process version",
          "required" : true,
          "type" : "integer",
          "format" : "int32"
        } ],
        "responses" : {
          "200" : {
            "description" : "Ok",
            "schema" : {
              "$ref" : "#/definitions/ProcessVersion"
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
    "/v2/processes/{processId}/requests" : {
      "get" : {
        "tags" : [ "Processes" ],
        "summary" : "Searches requests",
        "description" : "",
        "operationId" : "findRequestsByProcess",
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "processInstanceId",
          "in" : "query",
          "description" : "Request identifier",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "integer",
            "format" : "int32"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "initialProcessInstanceId",
          "in" : "query",
          "description" : "Range initial of request id",
          "required" : false,
          "type" : "integer",
          "format" : "int32"
        }, {
          "name" : "finalProcessInstanceId",
          "in" : "query",
          "description" : "Range final of request id",
          "required" : false,
          "type" : "integer",
          "format" : "int32"
        }, {
          "name" : "participants",
          "in" : "query",
          "description" : "Task participants",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "completeColleagueIds",
          "in" : "query",
          "description" : "Completed task with manager or substitute",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "assignee",
          "in" : "query",
          "description" : "Person in charge’s registration",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "status",
          "in" : "query",
          "description" : "Request status",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string",
            "enum" : [ "OPEN", "CANCELED", "FINALIZED" ]
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "slaStatus",
          "in" : "query",
          "description" : "Deadline status",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string",
            "enum" : [ "ON_TIME", "WARNING", "EXPIRED" ]
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "processId",
          "in" : "path",
          "description" : "Process identifier",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "requester",
          "in" : "query",
          "description" : "Requester",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "assigneeName",
          "in" : "query",
          "description" : "Person In charge’s name",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "requesterName",
          "in" : "query",
          "description" : "Requisitioner’s name",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "manager",
          "in" : "query",
          "description" : "Process manager’s registration",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "initialDeadlineDate",
          "in" : "query",
          "description" : "Deadline from",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "finalDeadlineDate",
          "in" : "query",
          "description" : "Deadline until",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "initialStartDate",
          "in" : "query",
          "description" : "Start from",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "finalStartDate",
          "in" : "query",
          "description" : "Start until",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "initialWarningDate",
          "in" : "query",
          "description" : "Expiration notification from",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "finalWarningDate",
          "in" : "query",
          "description" : "Expiration notification until",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "initialEndDate",
          "in" : "query",
          "description" : "Conclusion from",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "finalEndDate",
          "in" : "query",
          "description" : "Conclusion until",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "processVersion",
          "in" : "query",
          "description" : "Process version",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "integer",
            "format" : "int32"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "stateSequence",
          "in" : "query",
          "description" : "String identifier of the process status",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "formFields",
          "in" : "query",
          "description" : "Form fields for search, following the pattern Field:Value",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "requesterLocal",
          "in" : "query",
          "description" : "Requisitioner’s location identifier",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "integer",
            "format" : "int64"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "assigneeLocal",
          "in" : "query",
          "description" : "Person in charge’s location identifier",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "integer",
            "format" : "int64"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "replacedUserCode",
          "in" : "query",
          "description" : "Use user replaced as logged in",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "fields",
          "in" : "query",
          "description" : "Fields returned in JSON, to filter the response message",
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
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "order",
          "in" : "query",
          "description" : "Ordered fields",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string",
            "enum" : [ "processInstanceId", "-processInstanceId", "requester", "-requester", "requester.code", "-requester.code", "Requisitioner’s name", "-requester.name", "requester.mail", "-requester.mail", "status", "-status", "processId", "-processId", "deadlineDate", "-deadlineDate", "startDate", "-startDate", "warningDate", "-warningDate", "endDate", "-endDate", "processVersion", "-processVersion" ]
          },
          "collectionFormat" : "multi"
        } ],
        "responses" : {
          "200" : {
            "description" : "Ok",
            "schema" : {
              "$ref" : "#/definitions/RequestList"
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
    "/v2/processes/{processId}/requests/tasks" : {
      "get" : {
        "tags" : [ "Processes" ],
        "summary" : "Searches tasks by request",
        "description" : "",
        "operationId" : "findTasksByProcessIdAndProcessInstanceId",
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "processInstanceId",
          "in" : "query",
          "description" : "Request identifier",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "integer",
            "format" : "int32"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "movementSequence",
          "in" : "query",
          "description" : "Identifier of the move associated to the task",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "transferSequence",
          "in" : "query",
          "description" : "Transfer sequence in the task itself",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "assignee",
          "in" : "query",
          "description" : "Person in charge’s registration",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "status",
          "in" : "query",
          "description" : "Task status",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string",
            "enum" : [ "NOT_COMPLETED", "PENDING_CONSENSUS", "COMPLETED", "TRANSFERRED", "CANCELED" ]
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "slaStatus",
          "in" : "query",
          "description" : "Deadline status",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string",
            "enum" : [ "ON_TIME", "WARNING", "EXPIRED" ]
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "processId",
          "in" : "path",
          "description" : "Process identifier",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "requester",
          "in" : "query",
          "description" : "Requisitioner’s registration",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "assigneeName",
          "in" : "query",
          "description" : "Person In charge’s name",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "requesterName",
          "in" : "query",
          "description" : "Requisitioner’s name",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "manager",
          "in" : "query",
          "description" : "Process manager’s registration",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "initialDeadlineDate",
          "in" : "query",
          "description" : "Deadline from",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "finalDeadlineDate",
          "in" : "query",
          "description" : "Deadline until",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "initialStartDate",
          "in" : "query",
          "description" : "Start from",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "finalStartDate",
          "in" : "query",
          "description" : "Start until",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "initialAssignStartDate",
          "in" : "query",
          "description" : "Assigned from",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "finalAssignStartDate",
          "in" : "query",
          "description" : "Assigned to",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "initialAssignEndDate",
          "in" : "query",
          "description" : "Assignment end from",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "finalAssignEndDate",
          "in" : "query",
          "description" : "Assignment end until",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "initialWarningDate",
          "in" : "query",
          "description" : "Expiration notification from",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "finalWarningDate",
          "in" : "query",
          "description" : "Expiration notification until",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "initialEndDate",
          "in" : "query",
          "description" : "Conclusion from",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "finalEndDate",
          "in" : "query",
          "description" : "Conclusion until",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "processVersion",
          "in" : "query",
          "description" : "Process version",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "integer",
            "format" : "int32"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "stateSequence",
          "in" : "query",
          "description" : "String identifier of the process status",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "appDecisionSearch",
          "in" : "query",
          "description" : "Searches by title, description and highlight, only if the 'appDecisionInfo' attribute is expanded",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "formFields",
          "in" : "query",
          "description" : "Form fields for search, following the pattern Field:Value",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "requesterLocal",
          "in" : "query",
          "description" : "Requisitioner’s location identifier",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "integer",
            "format" : "int64"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "assigneeLocal",
          "in" : "query",
          "description" : "Person in charge’s location identifier",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "integer",
            "format" : "int64"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "replacedUserCode",
          "in" : "query",
          "description" : "Use user replaced as logged in",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "fields",
          "in" : "query",
          "description" : "Fields returned in JSON, to filter the response message",
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
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "order",
          "in" : "query",
          "description" : "Ordered fields",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string",
            "enum" : [ "processInstanceId", "-processInstanceId", "movementSequence", "-movementSequence", "transferSequence", "-transferSequence", "assignee", "-assignee", "assignee.code", "-assignee.code", "Person In charge’s name", "-assignee.name", "assignee.mail", "-assignee.mail", "requester", "-requester", "requester.code", "-requester.code", "Requisitioner’s name", "-requester.name", "requester.mail", "-requester.mail", "status", "-status", "processId", "-processId", "deadline", "-deadline", "startDate", "-startDate", "assignStartDate", "-assignStartDate", "assignEndDate", "-assignEndDate", "warningDate", "-warningDate", "endDate", "-endDate", "processVersion", "-processVersion", "approvalTitle", "-approvalTitle", "approvalDescription", "-approvalDescription", "approvalHighlight", "-approvalHighlight" ]
          },
          "collectionFormat" : "multi"
        } ],
        "responses" : {
          "200" : {
            "description" : "Ok",
            "schema" : {
              "$ref" : "#/definitions/ProcessTaskList"
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
    "/v2/processes/{processId}/requests/tasks/resume" : {
      "get" : {
        "tags" : [ "Processes" ],
        "summary" : "Shows the query result of tasks grouped by status",
        "description" : "",
        "operationId" : "resumeSlaTasksByProcess",
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "processInstanceId",
          "in" : "query",
          "description" : "Request identifier",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "integer",
            "format" : "int32"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "movementSequence",
          "in" : "query",
          "description" : "Identifier of the move associated to the task",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "transferSequence",
          "in" : "query",
          "description" : "Transfer sequence in the task itself",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "assignee",
          "in" : "query",
          "description" : "Person in charge’s registration",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "status",
          "in" : "query",
          "description" : "Task status",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string",
            "enum" : [ "NOT_COMPLETED", "PENDING_CONSENSUS", "COMPLETED", "TRANSFERRED", "CANCELED" ]
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "slaStatus",
          "in" : "query",
          "description" : "Deadline status",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string",
            "enum" : [ "ON_TIME", "WARNING", "EXPIRED" ]
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "processId",
          "in" : "path",
          "description" : "Process identifier",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "requester",
          "in" : "query",
          "description" : "Requisitioner’s registration",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "assigneeName",
          "in" : "query",
          "description" : "Person In charge’s name",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "requesterName",
          "in" : "query",
          "description" : "Requisitioner’s name",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "manager",
          "in" : "query",
          "description" : "Process manager’s registration",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "initialDeadlineDate",
          "in" : "query",
          "description" : "Deadline from",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "finalDeadlineDate",
          "in" : "query",
          "description" : "Deadline until",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "initialStartDate",
          "in" : "query",
          "description" : "Start from",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "finalStartDate",
          "in" : "query",
          "description" : "Start until",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "initialAssignStartDate",
          "in" : "query",
          "description" : "Assigned from",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "finalAssignStartDate",
          "in" : "query",
          "description" : "Assigned to",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "initialAssignEndDate",
          "in" : "query",
          "description" : "Assignment end from",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "finalAssignEndDate",
          "in" : "query",
          "description" : "Assignment end until",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "initialWarningDate",
          "in" : "query",
          "description" : "Expiration notification from",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "finalWarningDate",
          "in" : "query",
          "description" : "Expiration notification until",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "initialEndDate",
          "in" : "query",
          "description" : "Conclusion from",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "finalEndDate",
          "in" : "query",
          "description" : "Conclusion until",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "processVersion",
          "in" : "query",
          "description" : "Process version",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "integer",
            "format" : "int32"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "stateSequence",
          "in" : "query",
          "description" : "String identifier of the process status",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "formFields",
          "in" : "query",
          "description" : "Form fields for search, following the pattern Field:Value",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "requesterLocal",
          "in" : "query",
          "description" : "Requisitioner’s location identifier",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "integer",
            "format" : "int64"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "assigneeLocal",
          "in" : "query",
          "description" : "Person in charge’s location identifier",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "integer",
            "format" : "int64"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "fields",
          "in" : "query",
          "description" : "Fields returned in JSON, to filter the response message",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        } ],
        "responses" : {
          "200" : {
            "description" : "Ok",
            "schema" : {
              "$ref" : "#/definitions/ResumeProcessTask"
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
    "/v2/processes/{processId}/start" : {
      "post" : {
        "tags" : [ "Processes" ],
        "summary" : "Start request",
        "description" : "",
        "operationId" : "start",
        "consumes" : [ "application/json; charset=UTF-8" ],
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "processId",
          "in" : "path",
          "description" : "Process identifier",
          "required" : true,
          "type" : "string"
        }, {
          "in" : "body",
          "name" : "startRequest",
          "description" : "Request start information",
          "required" : false,
          "schema" : {
            "$ref" : "#/definitions/StartRequest"
          }
        }, {
          "name" : "device",
          "in" : "header",
          "description" : "Device used if mobile",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "fields",
          "in" : "query",
          "description" : "Fields returned in JSON, to filter the response message",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "expand",
          "in" : "query",
          "description" : "Expandable fields",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        } ],
        "responses" : {
          "200" : {
            "description" : "Ok",
            "schema" : {
              "$ref" : "#/definitions/MoveResponse"
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
          "412" : {
            "description" : "Failed to move due to the need of an assignee to be appointed for the next task",
            "schema" : {
              "$ref" : "#/definitions/MoveResponse"
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
    "/v2/requests" : {
      "get" : {
        "tags" : [ "Requests" ],
        "summary" : "Searches requests",
        "description" : "",
        "operationId" : "findRequests",
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "processInstanceId",
          "in" : "query",
          "description" : "Request identifier",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "integer",
            "format" : "int32"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "initialProcessInstanceId",
          "in" : "query",
          "description" : "Range initial of request id",
          "required" : false,
          "type" : "integer",
          "format" : "int32"
        }, {
          "name" : "finalProcessInstanceId",
          "in" : "query",
          "description" : "Range final of request id",
          "required" : false,
          "type" : "integer",
          "format" : "int32"
        }, {
          "name" : "participants",
          "in" : "query",
          "description" : "Task participants",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "completeColleagueIds",
          "in" : "query",
          "description" : "Completed task with manager or substitute",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "assignee",
          "in" : "query",
          "description" : "Person in charge’s registration",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "status",
          "in" : "query",
          "description" : "Request status",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string",
            "enum" : [ "OPEN", "CANCELED", "FINALIZED" ]
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "slaStatus",
          "in" : "query",
          "description" : "Deadline status",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string",
            "enum" : [ "ON_TIME", "WARNING", "EXPIRED" ]
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "processId",
          "in" : "query",
          "description" : "Process identifier",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "requester",
          "in" : "query",
          "description" : "Requester",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "assigneeName",
          "in" : "query",
          "description" : "Person In charge’s name",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "requesterName",
          "in" : "query",
          "description" : "Requisitioner’s name",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "manager",
          "in" : "query",
          "description" : "Process manager’s registration",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "initialDeadlineDate",
          "in" : "query",
          "description" : "Deadline from",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "finalDeadlineDate",
          "in" : "query",
          "description" : "Deadline until",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "initialStartDate",
          "in" : "query",
          "description" : "Start from",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "finalStartDate",
          "in" : "query",
          "description" : "Start until",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "initialWarningDate",
          "in" : "query",
          "description" : "Expiration notification from",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "finalWarningDate",
          "in" : "query",
          "description" : "Expiration notification until",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "initialEndDate",
          "in" : "query",
          "description" : "Conclusion from",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "finalEndDate",
          "in" : "query",
          "description" : "Conclusion until",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "processVersion",
          "in" : "query",
          "description" : "Process version",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "integer",
            "format" : "int32"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "stateSequence",
          "in" : "query",
          "description" : "String identifier of the process status",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "formFields",
          "in" : "query",
          "description" : "Form fields for search, following the pattern Field:Value",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "requesterLocal",
          "in" : "query",
          "description" : "Requisitioner’s location identifier",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "integer",
            "format" : "int64"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "assigneeLocal",
          "in" : "query",
          "description" : "Person in charge’s location identifier",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "integer",
            "format" : "int64"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "replacedUserCode",
          "in" : "query",
          "description" : "Use user replaced as logged in",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "fields",
          "in" : "query",
          "description" : "Fields returned in JSON, to filter the response message",
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
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "order",
          "in" : "query",
          "description" : "Ordered fields",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string",
            "enum" : [ "processInstanceId", "-processInstanceId", "requester", "-requester", "requester.code", "-requester.code", "Requisitioner’s name", "-requester.name", "requester.mail", "-requester.mail", "status", "-status", "processId", "-processId", "deadlineDate", "-deadlineDate", "startDate", "-startDate", "warningDate", "-warningDate", "endDate", "-endDate", "processVersion", "-processVersion" ]
          },
          "collectionFormat" : "multi"
        } ],
        "responses" : {
          "200" : {
            "description" : "Ok",
            "schema" : {
              "$ref" : "#/definitions/RequestList"
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
    "/v2/requests/{processInstanceId}" : {
      "get" : {
        "tags" : [ "Requests" ],
        "summary" : "Searches requests",
        "description" : "",
        "operationId" : "findRequest",
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "processInstanceId",
          "in" : "path",
          "description" : "Request identifier",
          "required" : true,
          "type" : "integer",
          "format" : "int32"
        }, {
          "name" : "fields",
          "in" : "query",
          "description" : "Fields returned in JSON, to filter the response message",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "expand",
          "in" : "query",
          "description" : "Expandable fields",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        } ],
        "responses" : {
          "200" : {
            "description" : "Ok",
            "schema" : {
              "$ref" : "#/definitions/Request"
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
    "/v2/requests/{processInstanceId}/activities" : {
      "get" : {
        "tags" : [ "Requests" ],
        "summary" : "Searches activities",
        "description" : "",
        "operationId" : "findActivitiesByRequest",
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "processInstanceId",
          "in" : "path",
          "description" : "Request identifier",
          "required" : true,
          "type" : "integer",
          "format" : "int32"
        }, {
          "name" : "movementSequence",
          "in" : "query",
          "description" : "Identifier of the move associated to the task",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "active",
          "in" : "query",
          "description" : "Active activities",
          "required" : false,
          "type" : "string",
          "enum" : [ "true", "false" ]
        }, {
          "name" : "slaStatus",
          "in" : "query",
          "description" : "Deadline status",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string",
            "enum" : [ "ON_TIME", "WARNING", "EXPIRED" ]
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "requester",
          "in" : "query",
          "description" : "Requisitioner’s registration",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "requesterName",
          "in" : "query",
          "description" : "Requisitioner’s name",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "manager",
          "in" : "query",
          "description" : "Process manager’s registration",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "initialDeadlineDate",
          "in" : "query",
          "description" : "Deadline from",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "finalDeadlineDate",
          "in" : "query",
          "description" : "Deadline until",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "initialStartDate",
          "in" : "query",
          "description" : "Start from",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "finalStartDate",
          "in" : "query",
          "description" : "Start until",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "initialWarningDate",
          "in" : "query",
          "description" : "Expiration notification from",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "finalWarningDate",
          "in" : "query",
          "description" : "Expiration notification until",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "initialEndDate",
          "in" : "query",
          "description" : "Conclusion from",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "finalEndDate",
          "in" : "query",
          "description" : "Conclusion until",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "stateSequence",
          "in" : "query",
          "description" : "String identifier of the process status",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "formFields",
          "in" : "query",
          "description" : "Form fields for search, following the pattern Field:Value",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "requesterLocal",
          "in" : "query",
          "description" : "Requisitioner’s location identifier",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "integer",
            "format" : "int64"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "assigneeLocal",
          "in" : "query",
          "description" : "Person in charge’s location identifier",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "integer",
            "format" : "int64"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "replacedUserCode",
          "in" : "query",
          "description" : "Use user replaced as logged in",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "fields",
          "in" : "query",
          "description" : "Fields returned in JSON, to filter the response message",
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
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "order",
          "in" : "query",
          "description" : "Ordered fields",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string",
            "enum" : [ "processInstanceId", "-processInstanceId", "movementSequence", "-movementSequence", "requester", "-requester", "requester.code", "-requester.code", "Requisitioner’s name", "-requester.name", "requester.mail", "-requester.mail", "active", "-active", "processId", "-processId", "deadline", "-deadline", "startDate", "-startDate", "warningDate", "-warningDate", "endDate", "-endDate", "processVersion", "-processVersion", "state", "-state" ]
          },
          "collectionFormat" : "multi"
        } ],
        "responses" : {
          "200" : {
            "description" : "Ok",
            "schema" : {
              "$ref" : "#/definitions/ProcessActivityList"
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
    "/v2/requests/{processInstanceId}/activities/resume" : {
      "get" : {
        "tags" : [ "Requests" ],
        "summary" : "Shows the query result of activities grouped by status",
        "description" : "",
        "operationId" : "resumeActivitiesByRequest",
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "processInstanceId",
          "in" : "path",
          "description" : "Request identifier",
          "required" : true,
          "type" : "integer",
          "format" : "int32"
        }, {
          "name" : "movementSequence",
          "in" : "query",
          "description" : "Identifier of the move associated to the task",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "active",
          "in" : "query",
          "description" : "Active activities",
          "required" : false,
          "type" : "string",
          "enum" : [ "true", "false" ]
        }, {
          "name" : "slaStatus",
          "in" : "query",
          "description" : "Deadline status",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string",
            "enum" : [ "ON_TIME", "WARNING", "EXPIRED" ]
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "requester",
          "in" : "query",
          "description" : "Requisitioner’s registration",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "requesterName",
          "in" : "query",
          "description" : "Requisitioner’s name",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "manager",
          "in" : "query",
          "description" : "Process manager’s registration",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "initialDeadlineDate",
          "in" : "query",
          "description" : "Deadline from",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "finalDeadlineDate",
          "in" : "query",
          "description" : "Deadline until",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "initialStartDate",
          "in" : "query",
          "description" : "Start from",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "finalStartDate",
          "in" : "query",
          "description" : "Start until",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "initialWarningDate",
          "in" : "query",
          "description" : "Expiration notification from",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "finalWarningDate",
          "in" : "query",
          "description" : "Expiration notification until",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "initialEndDate",
          "in" : "query",
          "description" : "Conclusion from",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "finalEndDate",
          "in" : "query",
          "description" : "Conclusion until",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "stateSequence",
          "in" : "query",
          "description" : "String identifier of the process status",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "formFields",
          "in" : "query",
          "description" : "Form fields for search, following the pattern Field:Value",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "requesterLocal",
          "in" : "query",
          "description" : "Requisitioner’s location identifier",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "integer",
            "format" : "int64"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "assigneeLocal",
          "in" : "query",
          "description" : "Person in charge’s location identifier",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "integer",
            "format" : "int64"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "replacedUserCode",
          "in" : "query",
          "description" : "Use user replaced as logged in",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "fields",
          "in" : "query",
          "description" : "Fields returned in JSON, to filter the response message",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        } ],
        "responses" : {
          "200" : {
            "description" : "Ok",
            "schema" : {
              "$ref" : "#/definitions/ResumeProcessActivity"
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
    "/v2/requests/{processInstanceId}/attachments" : {
      "get" : {
        "tags" : [ "Requests" ],
        "summary" : "Searches request attachments",
        "description" : "",
        "operationId" : "findAttachments",
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "processInstanceId",
          "in" : "path",
          "description" : "Request identifier",
          "required" : true,
          "type" : "integer",
          "format" : "int32"
        }, {
          "name" : "user",
          "in" : "query",
          "description" : "Registration of the user who did the attachment",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "userName",
          "in" : "query",
          "description" : "Name of the user who did the attachment",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "published",
          "in" : "query",
          "description" : "If the attachment was posted",
          "required" : false,
          "type" : "string",
          "enum" : [ "true", "false" ]
        }, {
          "name" : "mainForm",
          "in" : "query",
          "description" : "If the attachment is the main form for the request",
          "required" : false,
          "type" : "string",
          "enum" : [ "true", "false" ]
        }, {
          "name" : "documentId",
          "in" : "query",
          "description" : "Document identifier",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "documentName",
          "in" : "query",
          "description" : "Name of the main physical document, if any",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "documentDescription",
          "in" : "query",
          "description" : "Main document description",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "documentVersion",
          "in" : "query",
          "description" : "Document version",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "movementSequence",
          "in" : "query",
          "description" : "Identifier of the move associated to the task",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "attachmentSequence",
          "in" : "query",
          "description" : "String identifier of the attachment in the request",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "initialAttachmentDate",
          "in" : "query",
          "description" : "Attached from",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "finalAttachmentDate",
          "in" : "query",
          "description" : "Attached to",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "latestVersionsOnly",
          "in" : "query",
          "description" : "Filters only by the latest attachment version",
          "required" : false,
          "type" : "string",
          "enum" : [ "true", "false" ]
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
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "order",
          "in" : "query",
          "description" : "Ordered fields",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string",
            "enum" : [ "processInstanceId", "-processInstanceId", "documentId", "-documentId", "attachmentSequence", "-attachmentSequence", "documentVersion", "-documentVersion", "movementSequence", "-movementSequence", "user.code", "-user.code", "user.name", "-user.name", "user.mail", "-user.mail", "documentName", "-documentName", "documentDescription", "-documentDescription", "date", "-date" ]
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "fields",
          "in" : "query",
          "description" : "Fields returned in JSON, to filter the response message",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        } ],
        "responses" : {
          "200" : {
            "description" : "Ok",
            "schema" : {
              "$ref" : "#/definitions/ProcessAttachmentList"
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
    "/v2/requests/{processInstanceId}/attachments/download" : {
      "get" : {
        "tags" : [ "Requests" ],
        "summary" : "Download filtered attachments",
        "description" : "",
        "operationId" : "downloadAttachments",
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "processInstanceId",
          "in" : "path",
          "description" : "Request identifier",
          "required" : true,
          "type" : "integer",
          "format" : "int32"
        }, {
          "name" : "user",
          "in" : "query",
          "description" : "Registration of the user who did the attachment",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "replacedUser",
          "in" : "query",
          "description" : "Registration of the substituted user for permission use",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "published",
          "in" : "query",
          "description" : "If the attachment was posted",
          "required" : false,
          "type" : "string",
          "enum" : [ "true", "false" ]
        }, {
          "name" : "documentId",
          "in" : "query",
          "description" : "Document identifier",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "documentName",
          "in" : "query",
          "description" : "Name of the main physical document, if any",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "documentDescription",
          "in" : "query",
          "description" : "Main document description",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "movementSequence",
          "in" : "query",
          "description" : "Identifier of the move associated to the task",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "attachmentSequence",
          "in" : "query",
          "description" : "String identifier of the attachment in the request",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "initialAttachmentDate",
          "in" : "query",
          "description" : "Attached from",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "finalAttachmentDate",
          "in" : "query",
          "description" : "Attached to",
          "required" : false,
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
    "/v2/requests/{processInstanceId}/attachments/{attachmentSequence}/download" : {
      "get" : {
        "tags" : [ "Requests" ],
        "summary" : "Download filtered attachments",
        "description" : "",
        "operationId" : "downloadAttachment",
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "processInstanceId",
          "in" : "path",
          "description" : "Request identifier",
          "required" : true,
          "type" : "integer",
          "format" : "int32"
        }, {
          "name" : "replacedUser",
          "in" : "query",
          "description" : "Registration of the substituted user for permission use",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "attachmentSequence",
          "in" : "path",
          "description" : "String identifier of the attachment in the request",
          "required" : true,
          "type" : "integer",
          "format" : "int32"
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
    "/v2/requests/{processInstanceId}/histories" : {
      "get" : {
        "tags" : [ "Requests" ],
        "summary" : "Fetch history from requests, DO NOT USE THIS, it is on beta test and will change completely",
        "description" : "",
        "operationId" : "findHistoriesByProcessInstanceId",
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "processInstanceId",
          "in" : "path",
          "description" : "Request Id",
          "required" : true,
          "type" : "integer",
          "format" : "int32"
        }, {
          "name" : "movementSequence",
          "in" : "query",
          "description" : "Movement id where those tasks are identified",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "types",
          "in" : "query",
          "description" : "Movement id where those tasks are identified",
          "required" : false,
          "type" : "string",
          "enum" : [ "attachment", "observation", "movement" ]
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
          "name" : "order",
          "in" : "query",
          "description" : "Ordered fields",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "fields",
          "in" : "query",
          "description" : "Fields that will be returned with the response JSON, if not sent, the whole resource will be returned",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        } ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "$ref" : "#/definitions/ProcessHistoryList"
            }
          },
          "400" : {
            "description" : "Failed to proceed the operation due to a business problem, see response for more details",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          },
          "401" : {
            "description" : "Access denied",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          },
          "404" : {
            "description" : "Failed to find a resource needed for operation, see response for more details",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          },
          "500" : {
            "description" : "Internal error, see response for more details",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        }
      }
    },
    "/v2/requests/{processInstanceId}/move" : {
      "post" : {
        "tags" : [ "Requests" ],
        "summary" : "Moves a request",
        "description" : "",
        "operationId" : "move",
        "consumes" : [ "application/json; charset=UTF-8" ],
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "processInstanceId",
          "in" : "path",
          "description" : "Request identifier",
          "required" : true,
          "type" : "integer",
          "format" : "int32"
        }, {
          "in" : "body",
          "name" : "moveRequest",
          "description" : "Information to move the request",
          "required" : false,
          "schema" : {
            "$ref" : "#/definitions/MoveRequest"
          }
        }, {
          "name" : "device",
          "in" : "header",
          "description" : "Device used if mobile",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "fields",
          "in" : "query",
          "description" : "Fields returned in JSON, to filter the response message",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "expand",
          "in" : "query",
          "description" : "Expandable fields",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        } ],
        "responses" : {
          "200" : {
            "description" : "Ok",
            "schema" : {
              "$ref" : "#/definitions/MoveResponse"
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
          "412" : {
            "description" : "Failed to move due to the need of an assignee to be appointed for the next task",
            "schema" : {
              "$ref" : "#/definitions/MoveResponse"
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
    "/v2/requests/{processInstanceId}/possible-assignees" : {
      "get" : {
        "tags" : [ "Requests" ],
        "summary" : "Find possible assignees for the next activity, the results may change by events between the activities.",
        "description" : "",
        "operationId" : "findPossibleAssignees",
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "processInstanceId",
          "in" : "path",
          "description" : "Request Id",
          "required" : true,
          "type" : "integer",
          "format" : "int32"
        }, {
          "name" : "movementSequence",
          "in" : "query",
          "description" : "Movement Sequence",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "assignee",
          "in" : "query",
          "description" : "Actual assignee",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "targetState",
          "in" : "query",
          "description" : "Target state",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "subProcessTargetState",
          "in" : "query",
          "description" : "Sub process target state",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "pattern",
          "in" : "query",
          "description" : "User pattern used to search, filters by code and name",
          "required" : false,
          "type" : "string"
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
          "name" : "order",
          "in" : "query",
          "description" : "Ordered fields",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string",
            "enum" : [ "mail", "-mail", "code", "-code", "name", "-name" ]
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "expand",
          "in" : "query",
          "description" : "Expandable fields",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "fields",
          "in" : "query",
          "description" : "Fields that will be returned with the response JSON, if not sent, the whole resource will be returned",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        } ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "$ref" : "#/definitions/BPMUserList"
            }
          },
          "400" : {
            "description" : "Failed to proceed the operation due to a business problem, see response for more details",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          },
          "401" : {
            "description" : "Access denied",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          },
          "403" : {
            "description" : "User without permission to proceed the operation",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          },
          "404" : {
            "description" : "Failed to find a resource needed for operation, see response for more details",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          },
          "500" : {
            "description" : "Internal error, see response for more details",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        }
      }
    },
    "/v2/requests/{processInstanceId}/tasks" : {
      "get" : {
        "tags" : [ "Requests" ],
        "summary" : "Searches tasks",
        "description" : "",
        "operationId" : "findTasksByProcessInstanceId",
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "processInstanceId",
          "in" : "path",
          "description" : "Request identifier",
          "required" : true,
          "type" : "integer",
          "format" : "int32"
        }, {
          "name" : "movementSequence",
          "in" : "query",
          "description" : "Identifier of the move associated to the task",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "transferSequence",
          "in" : "query",
          "description" : "Transfer sequence in the task itself",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "assignee",
          "in" : "query",
          "description" : "Person in charge’s registration",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "status",
          "in" : "query",
          "description" : "Task status",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string",
            "enum" : [ "NOT_COMPLETED", "PENDING_CONSENSUS", "COMPLETED", "TRANSFERRED", "CANCELED" ]
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "slaStatus",
          "in" : "query",
          "description" : "Deadline status",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string",
            "enum" : [ "ON_TIME", "WARNING", "EXPIRED" ]
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "requester",
          "in" : "query",
          "description" : "Requisitioner’s registration",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "assigneeName",
          "in" : "query",
          "description" : "Person In charge’s name",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "requesterName",
          "in" : "query",
          "description" : "Requisitioner’s name",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "manager",
          "in" : "query",
          "description" : "Process manager’s registration",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "initialDeadlineDate",
          "in" : "query",
          "description" : "Deadline from",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "finalDeadlineDate",
          "in" : "query",
          "description" : "Deadline until",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "initialStartDate",
          "in" : "query",
          "description" : "Start from",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "finalStartDate",
          "in" : "query",
          "description" : "Start until",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "initialAssignStartDate",
          "in" : "query",
          "description" : "Assigned from",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "finalAssignStartDate",
          "in" : "query",
          "description" : "Assigned to",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "initialAssignEndDate",
          "in" : "query",
          "description" : "Assignment end from",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "finalAssignEndDate",
          "in" : "query",
          "description" : "Assignment end until",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "initialWarningDate",
          "in" : "query",
          "description" : "Expiration notification from",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "finalWarningDate",
          "in" : "query",
          "description" : "Expiration notification until",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "initialEndDate",
          "in" : "query",
          "description" : "Conclusion from",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "finalEndDate",
          "in" : "query",
          "description" : "Conclusion until",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "stateSequence",
          "in" : "query",
          "description" : "String identifier of the process status",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "appDecisionSearch",
          "in" : "query",
          "description" : "Searches by title, description and highlight, only if the 'appDecisionInfo' attribute is expanded",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "formFields",
          "in" : "query",
          "description" : "Form fields for search, following the pattern Field:Value",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "requesterLocal",
          "in" : "query",
          "description" : "Requisitioner’s location identifier",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "integer",
            "format" : "int64"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "assigneeLocal",
          "in" : "query",
          "description" : "Person in charge’s location identifier",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "integer",
            "format" : "int64"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "fields",
          "in" : "query",
          "description" : "Fields returned in JSON, to filter the response message",
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
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "replacedUserCode",
          "in" : "query",
          "description" : "Use user replaced as logged in",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "order",
          "in" : "query",
          "description" : "Ordered fields",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string",
            "enum" : [ "processInstanceId", "-processInstanceId", "movementSequence", "-movementSequence", "transferSequence", "-transferSequence", "assignee", "-assignee", "assignee.code", "-assignee.code", "Person In charge’s name", "-assignee.name", "assignee.mail", "-assignee.mail", "requester", "-requester", "requester.code", "-requester.code", "Requisitioner’s name", "-requester.name", "requester.mail", "-requester.mail", "status", "-status", "processId", "-processId", "deadline", "-deadline", "startDate", "-startDate", "assignStartDate", "-assignStartDate", "assignEndDate", "-assignEndDate", "warningDate", "-warningDate", "endDate", "-endDate", "processVersion", "-processVersion", "approvalTitle", "-approvalTitle", "approvalDescription", "-approvalDescription", "approvalHighlight", "-approvalHighlight" ]
          },
          "collectionFormat" : "multi"
        } ],
        "responses" : {
          "200" : {
            "description" : "Ok",
            "schema" : {
              "$ref" : "#/definitions/ProcessTaskList"
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
    "/v2/requests/{processInstanceId}/tasks/resume" : {
      "get" : {
        "tags" : [ "Requests" ],
        "summary" : "Shows the query result of tasks grouped by status",
        "description" : "",
        "operationId" : "resumeSlaTasksByRequest",
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "processInstanceId",
          "in" : "path",
          "description" : "Request identifier",
          "required" : true,
          "type" : "integer",
          "format" : "int32"
        }, {
          "name" : "movementSequence",
          "in" : "query",
          "description" : "Identifier of the move associated to the task",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "transferSequence",
          "in" : "query",
          "description" : "Transfer sequence in the task itself",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "assignee",
          "in" : "query",
          "description" : "Person in charge’s registration",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "status",
          "in" : "query",
          "description" : "Task status",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string",
            "enum" : [ "NOT_COMPLETED", "PENDING_CONSENSUS", "COMPLETED", "TRANSFERRED", "CANCELED" ]
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "slaStatus",
          "in" : "query",
          "description" : "Deadline status",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string",
            "enum" : [ "ON_TIME", "WARNING", "EXPIRED" ]
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "requester",
          "in" : "query",
          "description" : "Requisitioner’s registration",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "assigneeName",
          "in" : "query",
          "description" : "Person In charge’s name",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "requesterName",
          "in" : "query",
          "description" : "Requisitioner’s name",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "manager",
          "in" : "query",
          "description" : "Process manager’s registration",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "initialDeadlineDate",
          "in" : "query",
          "description" : "Deadline from",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "finalDeadlineDate",
          "in" : "query",
          "description" : "Deadline until",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "initialStartDate",
          "in" : "query",
          "description" : "Start from",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "finalStartDate",
          "in" : "query",
          "description" : "Start until",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "initialAssignStartDate",
          "in" : "query",
          "description" : "Assigned from",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "finalAssignStartDate",
          "in" : "query",
          "description" : "Assigned to",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "initialAssignEndDate",
          "in" : "query",
          "description" : "Assignment end from",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "finalAssignEndDate",
          "in" : "query",
          "description" : "Assignment end until",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "initialWarningDate",
          "in" : "query",
          "description" : "Expiration notification from",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "finalWarningDate",
          "in" : "query",
          "description" : "Expiration notification until",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "initialEndDate",
          "in" : "query",
          "description" : "Conclusion from",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "finalEndDate",
          "in" : "query",
          "description" : "Conclusion until",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "stateSequence",
          "in" : "query",
          "description" : "String identifier of the process status",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "formFields",
          "in" : "query",
          "description" : "Form fields for search, following the pattern Field:Value",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "requesterLocal",
          "in" : "query",
          "description" : "Requisitioner’s location identifier",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "integer",
            "format" : "int64"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "assigneeLocal",
          "in" : "query",
          "description" : "Person in charge’s location identifier",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "integer",
            "format" : "int64"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "fields",
          "in" : "query",
          "description" : "Fields returned in JSON, to filter the response message",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        } ],
        "responses" : {
          "200" : {
            "description" : "Ok",
            "schema" : {
              "$ref" : "#/definitions/ResumeProcessTask"
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
    "/v2/tasks" : {
      "get" : {
        "tags" : [ "Tasks" ],
        "summary" : "Searches tasks",
        "description" : "",
        "operationId" : "findTasks",
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "processInstanceId",
          "in" : "query",
          "description" : "Request identifier",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "integer",
            "format" : "int32"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "movementSequence",
          "in" : "query",
          "description" : "Identifier of the move associated to the task",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "transferSequence",
          "in" : "query",
          "description" : "Transfer sequence in the task itself",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "assignee",
          "in" : "query",
          "description" : "Person in charge’s registration",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "status",
          "in" : "query",
          "description" : "Task status",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string",
            "enum" : [ "NOT_COMPLETED", "PENDING_CONSENSUS", "COMPLETED", "TRANSFERRED", "CANCELED" ]
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "processId",
          "in" : "query",
          "description" : "Process identifier",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "requester",
          "in" : "query",
          "description" : "Requisitioner’s registration",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "assigneeName",
          "in" : "query",
          "description" : "Person In charge’s name",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "requesterName",
          "in" : "query",
          "description" : "Requisitioner’s name",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "manager",
          "in" : "query",
          "description" : "Process manager’s registration",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "initialDeadlineDate",
          "in" : "query",
          "description" : "Deadline from",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "finalDeadlineDate",
          "in" : "query",
          "description" : "Deadline until",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "initialStartDate",
          "in" : "query",
          "description" : "Start from",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "finalStartDate",
          "in" : "query",
          "description" : "Start until",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "initialAssignStartDate",
          "in" : "query",
          "description" : "Assigned from",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "finalAssignStartDate",
          "in" : "query",
          "description" : "Assigned to",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "initialAssignEndDate",
          "in" : "query",
          "description" : "Assignment end from",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "finalAssignEndDate",
          "in" : "query",
          "description" : "Assignment end until",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "initialWarningDate",
          "in" : "query",
          "description" : "Expiration notification from",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "finalWarningDate",
          "in" : "query",
          "description" : "Expiration notification until",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "initialEndDate",
          "in" : "query",
          "description" : "Conclusion from",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "finalEndDate",
          "in" : "query",
          "description" : "Conclusion until",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "processVersion",
          "in" : "query",
          "description" : "Process version",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "integer",
            "format" : "int32"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "stateSequence",
          "in" : "query",
          "description" : "String identifier of the process status",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "requesterLocal",
          "in" : "query",
          "description" : "Requisitioner’s location identifier",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "integer",
            "format" : "int64"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "assigneeLocal",
          "in" : "query",
          "description" : "Person in charge’s location identifier",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "integer",
            "format" : "int64"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "formFields",
          "in" : "query",
          "description" : "Form fields for search, following the pattern Field:Value",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "slaStatus",
          "in" : "query",
          "description" : "Deadline status",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string",
            "enum" : [ "ON_TIME", "WARNING", "EXPIRED" ]
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "appDecisionSearch",
          "in" : "query",
          "description" : "Searches by title, description and highlight, only if the 'appDecisionInfo' attribute is expanded",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "fields",
          "in" : "query",
          "description" : "Fields returned in JSON, to filter the response message",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "viewJustProcessWithApproval",
          "in" : "query",
          "description" : "Only view processes with approval",
          "required" : false,
          "type" : "boolean"
        }, {
          "name" : "viewJustApproachingExpiration",
          "in" : "query",
          "description" : "View only activities close to expiration",
          "required" : false,
          "type" : "boolean"
        }, {
          "name" : "replacedUserCode",
          "in" : "query",
          "description" : "Use user replaced as logged in",
          "required" : false,
          "type" : "string"
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
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "order",
          "in" : "query",
          "description" : "Ordered fields",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string",
            "enum" : [ "processInstanceId", "-processInstanceId", "movementSequence", "-movementSequence", "transferSequence", "-transferSequence", "assignee", "-assignee", "assignee.code", "-assignee.code", "Person In charge’s name", "-assignee.name", "assignee.mail", "-assignee.mail", "requester", "-requester", "requester.code", "-requester.code", "Requisitioner’s name", "-requester.name", "requester.mail", "-requester.mail", "status", "-status", "processId", "-processId", "deadline", "-deadline", "startDate", "-startDate", "assignStartDate", "-assignStartDate", "assignEndDate", "-assignEndDate", "warningDate", "-warningDate", "endDate", "-endDate", "processVersion", "-processVersion", "approvalTitle", "-approvalTitle", "approvalDescription", "-approvalDescription", "approvalHighlight", "-approvalHighlight" ]
          },
          "collectionFormat" : "multi"
        } ],
        "responses" : {
          "200" : {
            "description" : "Ok",
            "schema" : {
              "$ref" : "#/definitions/ProcessTaskList"
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
    "/v2/tasks/count" : {
      "get" : {
        "tags" : [ "Tasks" ],
        "summary" : "Total activity counter by expiration date",
        "description" : "",
        "operationId" : "countTasks",
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "processInstanceId",
          "in" : "query",
          "description" : "Request identifier",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "integer",
            "format" : "int32"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "movementSequence",
          "in" : "query",
          "description" : "Identifier of the move associated to the task",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "transferSequence",
          "in" : "query",
          "description" : "Transfer sequence in the task itself",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "assignee",
          "in" : "query",
          "description" : "Person in charge’s registration",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "status",
          "in" : "query",
          "description" : "Task status",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string",
            "enum" : [ "NOT_COMPLETED", "PENDING_CONSENSUS", "COMPLETED", "TRANSFERRED", "CANCELED" ]
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "processId",
          "in" : "query",
          "description" : "Process identifier",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "requester",
          "in" : "query",
          "description" : "Requisitioner’s registration",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "assigneeName",
          "in" : "query",
          "description" : "Person In charge’s name",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "requesterName",
          "in" : "query",
          "description" : "Requisitioner’s name",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "manager",
          "in" : "query",
          "description" : "Process manager’s registration",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "initialDeadlineDate",
          "in" : "query",
          "description" : "Deadline from",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "finalDeadlineDate",
          "in" : "query",
          "description" : "Deadline until",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "initialStartDate",
          "in" : "query",
          "description" : "Start from",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "finalStartDate",
          "in" : "query",
          "description" : "Start until",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "initialAssignStartDate",
          "in" : "query",
          "description" : "Assigned from",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "finalAssignStartDate",
          "in" : "query",
          "description" : "Assigned to",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "initialAssignEndDate",
          "in" : "query",
          "description" : "Assignment end from",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "finalAssignEndDate",
          "in" : "query",
          "description" : "Assignment end until",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "initialWarningDate",
          "in" : "query",
          "description" : "Expiration notification from",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "finalWarningDate",
          "in" : "query",
          "description" : "Expiration notification until",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "initialEndDate",
          "in" : "query",
          "description" : "Conclusion from",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "finalEndDate",
          "in" : "query",
          "description" : "Conclusion until",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "processVersion",
          "in" : "query",
          "description" : "Process version",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "integer",
            "format" : "int32"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "stateSequence",
          "in" : "query",
          "description" : "String identifier of the process status",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "requesterLocal",
          "in" : "query",
          "description" : "Requisitioner’s location identifier",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "integer",
            "format" : "int64"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "assigneeLocal",
          "in" : "query",
          "description" : "Person in charge’s location identifier",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "integer",
            "format" : "int64"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "formFields",
          "in" : "query",
          "description" : "Form fields for search, following the pattern Field:Value",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        } ],
        "responses" : {
          "200" : {
            "description" : "Ok",
            "schema" : {
              "$ref" : "#/definitions/CountProcessTaskExpirationDate"
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
    "/v2/tasks/count/pool" : {
      "get" : {
        "tags" : [ "Tasks" ],
        "summary" : "Total activity counter in a user's pool by expiration date",
        "description" : "",
        "operationId" : "countTasksByUserPool",
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "assigneeUserCode",
          "in" : "query",
          "description" : "Person in charge’s registration",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "poolType",
          "in" : "query",
          "description" : "Pool activity type",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string",
            "enum" : [ "ROLE", "GROUP" ]
          },
          "collectionFormat" : "multi"
        } ],
        "responses" : {
          "200" : {
            "description" : "Ok",
            "schema" : {
              "$ref" : "#/definitions/CountProcessTaskExpirationDate"
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
    "/v2/tasks/count/pool/resume" : {
      "get" : {
        "tags" : [ "Tasks" ],
        "summary" : "Total activity counter in a user's pool for each group/role",
        "description" : "",
        "operationId" : "countTasksByUserPoolResume",
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "assigneeUserCode",
          "in" : "query",
          "description" : "Person in charge’s registration",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "poolType",
          "in" : "query",
          "description" : "Pool activity type",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string",
            "enum" : [ "ROLE", "GROUP" ]
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "pattern",
          "in" : "query",
          "description" : "Group/role code",
          "required" : false,
          "type" : "string"
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
        } ],
        "responses" : {
          "200" : {
            "description" : "Ok",
            "schema" : {
              "$ref" : "#/definitions/CountProcessTaskExpirationDate"
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
    "/v2/tasks/resume" : {
      "get" : {
        "tags" : [ "Tasks" ],
        "summary" : "Shows the query result of tasks grouped by status",
        "description" : "",
        "operationId" : "resumeSlaTasks",
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "processInstanceId",
          "in" : "query",
          "description" : "Request identifier",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "integer",
            "format" : "int32"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "movementSequence",
          "in" : "query",
          "description" : "Identifier of the move associated to the task",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "transferSequence",
          "in" : "query",
          "description" : "Transfer sequence in the task itself",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "assignee",
          "in" : "query",
          "description" : "Person in charge’s registration",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "status",
          "in" : "query",
          "description" : "Task status",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string",
            "enum" : [ "NOT_COMPLETED", "PENDING_CONSENSUS", "COMPLETED", "TRANSFERRED", "CANCELED" ]
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "processId",
          "in" : "query",
          "description" : "Process identifier",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "requester",
          "in" : "query",
          "description" : "Requisitioner’s registration",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "assigneeName",
          "in" : "query",
          "description" : "Person In charge’s name",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "requesterName",
          "in" : "query",
          "description" : "Requisitioner’s name",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "manager",
          "in" : "query",
          "description" : "Process manager’s registration",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "initialDeadlineDate",
          "in" : "query",
          "description" : "Deadline from",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "finalDeadlineDate",
          "in" : "query",
          "description" : "Deadline until",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "initialStartDate",
          "in" : "query",
          "description" : "Start from",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "finalStartDate",
          "in" : "query",
          "description" : "Start until",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "initialAssignStartDate",
          "in" : "query",
          "description" : "Assigned from",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "finalAssignStartDate",
          "in" : "query",
          "description" : "Assigned to",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "initialAssignEndDate",
          "in" : "query",
          "description" : "Assignment end from",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "finalAssignEndDate",
          "in" : "query",
          "description" : "Assignment end until",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "initialWarningDate",
          "in" : "query",
          "description" : "Expiration notification from",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "finalWarningDate",
          "in" : "query",
          "description" : "Expiration notification until",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "initialEndDate",
          "in" : "query",
          "description" : "Conclusion from",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "finalEndDate",
          "in" : "query",
          "description" : "Conclusion until",
          "required" : false,
          "type" : "string",
          "format" : "date-time",
          "x-example" : "yyyy-MM-ddTHH:mm:ssZ"
        }, {
          "name" : "processVersion",
          "in" : "query",
          "description" : "Process version",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "integer",
            "format" : "int32"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "stateSequence",
          "in" : "query",
          "description" : "String identifier of the process status",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "requesterLocal",
          "in" : "query",
          "description" : "Requisitioner’s location identifier",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "integer",
            "format" : "int64"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "assigneeLocal",
          "in" : "query",
          "description" : "Person in charge’s location identifier",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "integer",
            "format" : "int64"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "formFields",
          "in" : "query",
          "description" : "Form fields for search, following the pattern Field:Value",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "slaStatus",
          "in" : "query",
          "description" : "Deadline status",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string",
            "enum" : [ "ON_TIME", "WARNING", "EXPIRED" ]
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "fields",
          "in" : "query",
          "description" : "Fields returned in JSON, to filter the response message",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        } ],
        "responses" : {
          "200" : {
            "description" : "Ok",
            "schema" : {
              "$ref" : "#/definitions/ResumeProcessTask"
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
    "/v2/user-replacements" : {
      "get" : {
        "tags" : [ "User substitution" ],
        "summary" : "User substitution search",
        "description" : "",
        "operationId" : "findUserReplacements",
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "startAt",
          "in" : "query",
          "description" : "Start of substitution",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "endAt",
          "in" : "query",
          "description" : "End of substitution",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "processIdList",
          "in" : "query",
          "description" : "List of process identifiers",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "userCode",
          "in" : "query",
          "description" : "User registration",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "userName",
          "in" : "query",
          "description" : "Display user name",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "userMail",
          "in" : "query",
          "description" : "User’s e-mail address",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "userLogin",
          "in" : "query",
          "description" : "User login",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "replacedByUserCode",
          "in" : "query",
          "description" : "Substitute user registration",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "replacedByUserName",
          "in" : "query",
          "description" : "Display user name",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "replacedByUserMail",
          "in" : "query",
          "description" : "User’s e-mail address",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "replacedByUserLogin",
          "in" : "query",
          "description" : "User login",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "expand",
          "in" : "query",
          "description" : "Expandable fields",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "fields",
          "in" : "query",
          "description" : "Fields returned in JSON, to filter the response message",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "order",
          "in" : "query",
          "description" : "Sorted fields",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string",
            "enum" : [ "user.code", "-user.code", "replacedByUser.code", "-replacedByUser.code", "user.name", "-user.name", "replacedByUser.name", "-replacedByUser.name", "user.mail", "-user.mail", "replacedByUser.mail", "-replacedByUser.mail", "user.login", "-user.login", "replacedByUser.login", "-replacedByUser.login" ]
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
        } ],
        "responses" : {
          "200" : {
            "description" : "Ok",
            "schema" : {
              "$ref" : "#/definitions/UserReplacementList"
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
    "/v2/workflow-exporter/{processInstanceId}" : {
      "get" : {
        "tags" : [ "Exportador de Workflow" ],
        "summary" : "Searches process versions",
        "description" : "",
        "operationId" : "export",
        "produces" : [ "text/plain" ],
        "parameters" : [ {
          "name" : "processInstanceId",
          "in" : "path",
          "description" : "Request identifier",
          "required" : true,
          "type" : "integer",
          "format" : "int32"
        }, {
          "name" : "anonymizeForms",
          "in" : "query",
          "description" : "request.anonymizeforms",
          "required" : false,
          "type" : "boolean",
          "default" : true
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
    "/v2/workflow-exporter/{processInstanceId}/download" : {
      "get" : {
        "tags" : [ "Exportador de Workflow" ],
        "summary" : "process.version.download",
        "description" : "",
        "operationId" : "exportZipFile",
        "produces" : [ "application/zip" ],
        "parameters" : [ {
          "name" : "processInstanceId",
          "in" : "path",
          "description" : "Request identifier",
          "required" : true,
          "type" : "integer",
          "format" : "int32"
        }, {
          "name" : "requestOriginalFiles",
          "in" : "query",
          "description" : "request.original",
          "required" : false,
          "type" : "boolean",
          "default" : false
        }, {
          "name" : "anonymizeForms",
          "in" : "query",
          "description" : "request.anonymizeforms",
          "required" : false,
          "type" : "boolean",
          "default" : true
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
    }
  },
  "definitions" : {
    "AppDecisionTaskInfo" : {
      "type" : "object",
      "properties" : {
        "approvalTitle" : {
          "type" : "string",
          "description" : "Title configured for the task; only returns if the app_key in the search is 'approval'"
        },
        "approvalDescription" : {
          "type" : "string",
          "description" : "Description configured for the task, only returns if the app_key in the search is 'approval'"
        },
        "approvalHighlight" : {
          "type" : "string",
          "description" : "Highlight configured for the task, only returns if the app_key in the search is 'approval'"
        },
        "approvalState" : {
          "description" : "Destination status after an approval command",
          "$ref" : "#/definitions/ProcessState"
        },
        "reprovalState" : {
          "description" : "Destination status after a rejection command",
          "$ref" : "#/definitions/ProcessState"
        },
        "additionalStates" : {
          "type" : "array",
          "description" : "Other optional destination statuses",
          "items" : {
            "$ref" : "#/definitions/ProcessState"
          }
        }
      },
      "description" : "Information about tasks to be used in the decisions application"
    },
    "Assignment" : {
      "type" : "object",
      "properties" : {
        "id" : {
          "type" : "string",
          "description" : "Identifier of the person in charge control"
        },
        "description" : {
          "type" : "string",
          "description" : "Description of the person in charge control"
        },
        "name" : {
          "type" : "string",
          "description" : "Name of the Person in charge control"
        }
      },
      "description" : "Person in charge control"
    },
    "AssignmentConfiguration" : {
      "type" : "object",
      "properties" : {
        "assignment" : {
          "description" : "Type of directing responsibility used for this configuration",
          "$ref" : "#/definitions/Assignment"
        },
        "configuration" : {
          "type" : "string",
          "description" : "Person in charge settings in use"
        }
      },
      "description" : "Settings for directing person in charge"
    },
    "BPMLocal" : {
      "type" : "object",
      "properties" : {
        "id" : {
          "type" : "integer",
          "format" : "int64",
          "description" : "Location identifier"
        },
        "name" : {
          "type" : "string",
          "description" : "Location name"
        },
        "timezone" : {
          "type" : "string",
          "description" : "Location time code"
        },
        "latitude" : {
          "type" : "number",
          "format" : "double",
          "description" : "Latitude"
        },
        "longitude" : {
          "type" : "number",
          "format" : "double",
          "description" : "Longitude"
        },
        "radius" : {
          "type" : "number",
          "format" : "double",
          "description" : "Area"
        },
        "default" : {
          "type" : "boolean",
          "description" : "Company’s default location"
        }
      },
      "description" : "User location"
    },
    "BPMUser" : {
      "type" : "object",
      "properties" : {
        "code" : {
          "type" : "string",
          "description" : "User registration"
        },
        "name" : {
          "type" : "string",
          "description" : "Display user name"
        },
        "mail" : {
          "type" : "string",
          "description" : "User’s e-mail address"
        },
        "login" : {
          "type" : "string",
          "description" : "User login"
        },
        "local" : {
          "description" : "User location",
          "$ref" : "#/definitions/BPMLocal"
        }
      },
      "description" : "User"
    },
    "BPMUserList" : {
      "type" : "object",
      "properties" : {
        "items" : {
          "type" : "array",
          "items" : {
            "$ref" : "#/definitions/BPMUser"
          }
        },
        "hasNext" : {
          "type" : "boolean",
          "readOnly" : true
        },
        "toShowPossibleAssignees" : {
          "type" : "boolean"
        },
        "jointActivity" : {
          "type" : "boolean"
        }
      }
    },
    "ComplementConfiguration" : {
      "type" : "object",
      "properties" : {
        "level" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Add-on access level"
        },
        "notifyRequester" : {
          "type" : "boolean",
          "description" : "If the requisitioner is notified of request add-ons"
        },
        "notifyManager" : {
          "type" : "boolean",
          "description" : "If the manager is notified of request add-ons"
        },
        "notifyAssignee" : {
          "type" : "boolean",
          "description" : "If the person in charge is notified of request add-ons"
        }
      },
      "description" : "Settings for process add-ons"
    },
    "CountProcessTaskExpirationDate" : {
      "type" : "object",
      "properties" : {
        "onTime" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Not complete"
        },
        "approachingExpiration" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Being notified"
        },
        "expired" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Expired"
        }
      },
      "description" : "Task counter by expiration date"
    },
    "DateDuration" : {
      "type" : "object",
      "properties" : {
        "totalInSeconds" : {
          "type" : "integer",
          "format" : "int64",
          "description" : "date.duration.total.in.seconds"
        },
        "totalInMinutes" : {
          "type" : "integer",
          "format" : "int64",
          "description" : "date.duration.total.in.minutes"
        },
        "totalInHours" : {
          "type" : "integer",
          "format" : "int64",
          "description" : "date.duration.total.in.hours"
        },
        "totalInDays" : {
          "type" : "integer",
          "format" : "int64",
          "description" : "date.duration.total.in.days"
        },
        "countdownSeconds" : {
          "type" : "integer",
          "format" : "int64",
          "description" : "date.duration.countdown.seconds"
        },
        "countdownMinutes" : {
          "type" : "integer",
          "format" : "int64",
          "description" : "date.duration.countdown.minutes"
        },
        "countdownHours" : {
          "type" : "integer",
          "format" : "int64",
          "description" : "date.duration.countdown.hours"
        },
        "countdownDays" : {
          "type" : "integer",
          "format" : "int64",
          "description" : "date.duration.countdown.days"
        }
      },
      "description" : "date.duration"
    },
    "DeadlineSpecification" : {
      "type" : "object",
      "properties" : {
        "remainingTime" : {
          "type" : "integer",
          "format" : "int64",
          "description" : "Remaining time until the deadline expires taking into consideration the period configured in seconds"
        },
        "spentTime" : {
          "type" : "integer",
          "format" : "int64",
          "description" : "Time spent on a task or request in seconds"
        },
        "deadlineTime" : {
          "type" : "integer",
          "format" : "int64",
          "description" : "Time counted from the start of the task or request until its deadline in seconds"
        }
      },
      "description" : "Time attribute specifications for task and request deadlines"
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
    },
    "FormField" : {
      "type" : "object",
      "properties" : {
        "field" : {
          "type" : "string",
          "description" : "Form field name"
        },
        "value" : {
          "type" : "string",
          "description" : "Form field value"
        }
      },
      "description" : "Form field"
    },
    "FormRecord" : {
      "type" : "object",
      "properties" : {
        "id" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Form record identifier"
        },
        "version" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Form record version"
        },
        "description" : {
          "type" : "string",
          "description" : "Form record description"
        }
      },
      "description" : "Form record information"
    },
    "MoveRequest" : {
      "type" : "object",
      "properties" : {
        "movementSequence" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Identifier of the move associated to the task, optional if the request has only one task"
        },
        "assignee" : {
          "type" : "string",
          "description" : "Current person in charge of the task, optional if the request has only one task"
        },
        "targetState" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Destination status after the move, optional if there is only one status available as destination and it is not a return flow"
        },
        "targetAssignee" : {
          "type" : "string",
          "description" : "Destination of the person in charge after the move; optional if there is only one potential person in charge after the move"
        },
        "subProcessTargetState" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Destination status after the move if the request is being moved to a subprocess with a move property that is beyond the initially selected one"
        },
        "comment" : {
          "type" : "string",
          "description" : "Move add-on"
        },
        "asManager" : {
          "type" : "boolean",
          "description" : "Force the move as process manager"
        },
        "formFields" : {
          "type" : "object",
          "description" : "Map containing form fields to be updated when moving",
          "additionalProperties" : {
            "type" : "string"
          }
        }
      },
      "description" : "Information sent in the request to move it"
    },
    "MoveResponse" : {
      "type" : "object",
      "properties" : {
        "possibleAssignees" : {
          "type" : "array",
          "description" : "List of potential people in charge of the target task when the move fails because there are no selected items",
          "items" : {
            "$ref" : "#/definitions/BPMUser"
          }
        },
        "toShowPossibleAssignees" : {
          "type" : "boolean",
          "description" : "If it is necessary to display the potential people in charge for selection before the move if it fails because there are no selected items"
        },
        "jointActivity" : {
          "type" : "boolean",
          "description" : "If the destination status creates a joint activity"
        },
        "reachedPercentageForJointActivity" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Percentage achieved by the joint activity after the last move"
        },
        "highestTaskForJointActivity" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Status with the highest approval percentage for the current joint activity after suggesting the move"
        },
        "highestAssigneeForJointActivity" : {
          "description" : "Person in charge with the highest approval percentage for the destination of the current joint activity after suggesting the move",
          "$ref" : "#/definitions/BPMUser"
        },
        "nextState" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Destination status code after the move"
        },
        "nextGateway" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Next decision status, used to automatically move requests internally"
        },
        "nextStateName" : {
          "type" : "string",
          "description" : "Name of the destination status after the move"
        },
        "gatewayComment" : {
          "type" : "string",
          "description" : "Comment comes from a failed move in a decision status"
        },
        "gatewayCondition" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Conditional reached after a failed move in a decision status"
        },
        "useManagerAssignees" : {
          "type" : "boolean",
          "description" : "If the move is using managers as people in charge"
        },
        "conversionLog" : {
          "type" : "string",
          "description" : "Conversion log if the move is from a conversion request"
        },
        "conversionSequence" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Conversion sequence if the move is from a conversion request"
        },
        "cardId" : {
          "type" : "integer",
          "format" : "int64",
          "description" : "Request form record identifier"
        },
        "cardVersion" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Request form record version"
        },
        "subProcessRequests" : {
          "type" : "array",
          "description" : "Information related to the opening of subprocess requests from the current move",
          "items" : {
            "$ref" : "#/definitions/SubProcessRequest"
          }
        },
        "processId" : {
          "type" : "string",
          "description" : "Process identifier"
        },
        "processVersion" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Process version"
        },
        "processInstanceId" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Request identifier"
        }
      },
      "description" : "Information about the request move recently done"
    },
    "Process" : {
      "type" : "object",
      "properties" : {
        "processId" : {
          "type" : "string",
          "description" : "Process identifier"
        },
        "processDescription" : {
          "type" : "string",
          "description" : "Process description"
        },
        "active" : {
          "type" : "boolean",
          "description" : "If the process is active"
        },
        "instructions" : {
          "type" : "string",
          "description" : "Instructions on how to perform the requests of said process"
        },
        "versions" : {
          "type" : "array",
          "description" : "Process versions",
          "items" : {
            "$ref" : "#/definitions/ProcessVersion"
          }
        },
        "volumeId" : {
          "type" : "string",
          "description" : "Company’s volume identifier associated to the process"
        },
        "managerAssignmentConfiguration" : {
          "description" : "Settings for assigning the process manager",
          "$ref" : "#/definitions/AssignmentConfiguration"
        },
        "periodId" : {
          "type" : "string",
          "description" : "Identifier of the work period for executors of the process request activities"
        },
        "categoryId" : {
          "type" : "string",
          "description" : "Identifier of the process container to which this belongs"
        },
        "keywords" : {
          "type" : "array",
          "description" : "List of keywords for process indexation",
          "items" : {
            "type" : "string"
          }
        },
        "uniqueFormRecord" : {
          "type" : "boolean",
          "description" : "If moving the requests keeps the same version of their aforementioned form records"
        },
        "complementConfiguration" : {
          "description" : "Settings for process add-ons",
          "$ref" : "#/definitions/ComplementConfiguration"
        },
        "deadlineTime" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Time (in seconds) for the process request deadline"
        },
        "warningTime" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Time (in seconds) for the expiration notification of a process request"
        },
        "public" : {
          "type" : "boolean",
          "description" : "If the process is public"
        }
      },
      "description" : "Process information"
    },
    "ProcessActivity" : {
      "type" : "object",
      "properties" : {
        "processInstanceId" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Request identifier"
        },
        "movementSequence" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Identifier of the move associated to the task"
        },
        "active" : {
          "type" : "boolean",
          "description" : "Active activity"
        },
        "slaStatus" : {
          "type" : "string",
          "description" : "Status concerning task deadlines"
        },
        "startDate" : {
          "type" : "string",
          "format" : "date-time",
          "description" : "Activity start date"
        },
        "endDate" : {
          "type" : "string",
          "format" : "date-time",
          "description" : "Activity end date"
        },
        "deadlineDate" : {
          "type" : "string",
          "format" : "date-time",
          "description" : "Activity deadline"
        },
        "processId" : {
          "type" : "string",
          "description" : "Process identifier"
        },
        "requester" : {
          "description" : "Requester",
          "$ref" : "#/definitions/BPMUser"
        },
        "processVersion" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Process version"
        },
        "processDescription" : {
          "type" : "string",
          "description" : "Process description"
        },
        "state" : {
          "description" : "Current status",
          "$ref" : "#/definitions/ProcessState"
        },
        "tasks" : {
          "type" : "array",
          "description" : "Tasks",
          "items" : {
            "$ref" : "#/definitions/ProcessTask"
          }
        },
        "threadSequence" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Flow sequence, enhanced when passing through fork activities"
        },
        "formFields" : {
          "type" : "array",
          "description" : "Form fields from the request form record",
          "items" : {
            "$ref" : "#/definitions/FormField"
          }
        },
        "deadlineSpecification" : {
          "description" : "Time attribute specifications for task and request deadlines; in this case the deadline is not returned since it is a specific attribute by task",
          "$ref" : "#/definitions/DeadlineSpecification"
        }
      },
      "description" : "Activity information"
    },
    "ProcessActivityList" : {
      "type" : "object",
      "properties" : {
        "items" : {
          "type" : "array",
          "items" : {
            "$ref" : "#/definitions/ProcessActivity"
          }
        },
        "hasNext" : {
          "type" : "boolean",
          "readOnly" : true
        }
      }
    },
    "ProcessAttachment" : {
      "type" : "object",
      "properties" : {
        "processInstanceId" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Request identifier"
        },
        "documentId" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Document identifier"
        },
        "attachmentSequence" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "String identifier of the attachment in the request"
        },
        "documentVersion" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Document version"
        },
        "movementSequence" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Identifier of the move associated to the task"
        },
        "user" : {
          "description" : "User who did the attachment",
          "$ref" : "#/definitions/BPMUser"
        },
        "documentName" : {
          "type" : "string",
          "description" : "Document name"
        },
        "documentDescription" : {
          "type" : "string",
          "description" : "Main document description"
        },
        "published" : {
          "type" : "boolean",
          "description" : "If the attachment was posted"
        },
        "date" : {
          "type" : "string",
          "format" : "date-time",
          "description" : "Attachment date"
        },
        "mainForm" : {
          "type" : "boolean",
          "description" : "If the attachment is the main form for the request"
        },
        "threadSequence" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Flow sequence, enhanced when passing through fork activities"
        }
      },
      "description" : "Attachment information"
    },
    "ProcessAttachmentList" : {
      "type" : "object",
      "properties" : {
        "items" : {
          "type" : "array",
          "items" : {
            "$ref" : "#/definitions/ProcessAttachment"
          }
        },
        "hasNext" : {
          "type" : "boolean",
          "readOnly" : true
        }
      }
    },
    "ProcessAttachmentSecurity" : {
      "type" : "object",
      "properties" : {
        "updateVersions" : {
          "type" : "boolean",
          "description" : "If it is possible to update attachment versions"
        },
        "controlsSecurity" : {
          "type" : "boolean",
          "description" : "If attachment security is active"
        },
        "attachmentSecurityConfigurations" : {
          "type" : "array",
          "description" : "Security level settings by person in charge",
          "items" : {
            "$ref" : "#/definitions/ProcessAttachmentSecurityConfiguration"
          }
        }
      },
      "description" : "Information about attachment security"
    },
    "ProcessAttachmentSecurityConfiguration" : {
      "type" : "object",
      "properties" : {
        "assignmentConfiguration" : {
          "description" : "Information about the person in charge’s settings applied to attachment security",
          "$ref" : "#/definitions/AssignmentConfiguration"
        },
        "accessLevel" : {
          "type" : "string",
          "description" : "Attachment security access level"
        }
      },
      "description" : "Configuration information for attachment security"
    },
    "ProcessForm" : {
      "type" : "object",
      "properties" : {
        "documentId" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Document identifier"
        },
        "documentVersion" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Document version"
        },
        "documentDescription" : {
          "type" : "string",
          "description" : "Main document description"
        },
        "date" : {
          "type" : "string",
          "format" : "date-time",
          "description" : "Attachment date"
        }
      },
      "description" : "Form request information"
    },
    "ProcessHistory" : {
      "type" : "object",
      "properties" : {
        "type" : {
          "type" : "string"
        },
        "processId" : {
          "type" : "string"
        },
        "processInstanceId" : {
          "type" : "integer",
          "format" : "int32"
        },
        "processDescription" : {
          "type" : "string"
        },
        "processVersion" : {
          "type" : "integer",
          "format" : "int32"
        },
        "movementSequence" : {
          "type" : "integer",
          "format" : "int32"
        },
        "transferredSequence" : {
          "type" : "integer",
          "format" : "int32"
        },
        "taskSigned" : {
          "type" : "boolean"
        },
        "isDefaultLink" : {
          "type" : "boolean"
        },
        "isConversion" : {
          "type" : "boolean"
        },
        "state" : {
          "$ref" : "#/definitions/ProcessState"
        },
        "targetState" : {
          "$ref" : "#/definitions/ProcessState"
        },
        "subProcessId" : {
          "type" : "string"
        },
        "subProcessInstanceId" : {
          "type" : "integer",
          "format" : "int32"
        },
        "subProcessDescription" : {
          "type" : "string"
        },
        "subProcessVersion" : {
          "type" : "integer",
          "format" : "int32"
        },
        "parentProcessId" : {
          "type" : "string"
        },
        "parentProcessInstanceId" : {
          "type" : "integer",
          "format" : "int32"
        },
        "parentProcessDescription" : {
          "type" : "string"
        },
        "parentProcessVersion" : {
          "type" : "integer",
          "format" : "int32"
        },
        "attachmentId" : {
          "type" : "integer",
          "format" : "int32"
        },
        "attachmentVersion" : {
          "type" : "integer",
          "format" : "int32"
        },
        "attachmentDescription" : {
          "type" : "string"
        },
        "observationId" : {
          "type" : "integer",
          "format" : "int32"
        },
        "observationDescription" : {
          "type" : "string"
        },
        "user" : {
          "$ref" : "#/definitions/BPMUser"
        },
        "chosenAssignees" : {
          "type" : "array",
          "items" : {
            "$ref" : "#/definitions/BPMUser"
          }
        },
        "date" : {
          "type" : "string",
          "format" : "date-time"
        },
        "byManager" : {
          "type" : "boolean"
        }
      },
      "description" : "Response history from request"
    },
    "ProcessHistoryList" : {
      "type" : "object",
      "properties" : {
        "items" : {
          "type" : "array",
          "items" : {
            "$ref" : "#/definitions/ProcessHistory"
          }
        },
        "hasNext" : {
          "type" : "boolean",
          "readOnly" : true
        }
      }
    },
    "ProcessList" : {
      "type" : "object",
      "properties" : {
        "items" : {
          "type" : "array",
          "items" : {
            "$ref" : "#/definitions/Process"
          }
        },
        "hasNext" : {
          "type" : "boolean",
          "readOnly" : true
        }
      }
    },
    "ProcessSimpleCreate" : {
      "type" : "object",
      "properties" : {
        "processId" : {
          "type" : "string",
          "description" : "Process identifier"
        },
        "processDescription" : {
          "type" : "string",
          "description" : "Process description"
        },
        "categoryId" : {
          "type" : "string",
          "description" : "Identifier of the process container to which this belongs"
        },
        "formId" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Form identifier"
        }
      },
      "description" : "Simple process creation template"
    },
    "ProcessState" : {
      "type" : "object",
      "properties" : {
        "processId" : {
          "type" : "string",
          "description" : "Process identifier"
        },
        "processVersion" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Process version"
        },
        "sequence" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "String identifier of the process status"
        },
        "stateName" : {
          "type" : "string",
          "description" : "Status name"
        },
        "stateDescription" : {
          "type" : "string",
          "description" : "Status description"
        },
        "stateType" : {
          "type" : "string",
          "description" : "Generic status type"
        },
        "bpmnType" : {
          "type" : "string",
          "description" : "Status type as per BPMN 2.0"
        },
        "configuration" : {
          "description" : "Status settings",
          "$ref" : "#/definitions/ProcessStateConfiguration"
        },
        "instructions" : {
          "type" : "string",
          "description" : "Instructions on how to perform the activities created by this status"
        }
      },
      "description" : "Status information"
    },
    "ProcessStateCondition" : {
      "type" : "object",
      "properties" : {
        "expressionOrder" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Identifier of the condition execution order"
        },
        "assignmentConfiguration" : {
          "description" : "Person in charge settings via condition, if applicable",
          "$ref" : "#/definitions/AssignmentConfiguration"
        },
        "targetState" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Destination status if the condition is satisfied"
        }
      },
      "description" : "Condition settings for decision status"
    },
    "ProcessStateConfiguration" : {
      "type" : "object",
      "properties" : {
        "jointState" : {
          "type" : "boolean",
          "description" : "If the status creates joint activities"
        },
        "jointConfiguration" : {
          "description" : "Status settings for creating joint activities",
          "$ref" : "#/definitions/ProcessStateJointConfiguration"
        },
        "disableTaskTransference" : {
          "type" : "boolean",
          "description" : "If the status creates activities whose transfer of responsibility is disabled"
        },
        "requiresPassword" : {
          "type" : "boolean",
          "description" : "If the status creates activities that require a password to do the move"
        },
        "requiresDigitalSignature" : {
          "type" : "boolean",
          "description" : "If the status creates activities that require a digital signature to do the move"
        },
        "signalId" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Identifier of the signal used for sending or receiving, used only for signal event statuses"
        },
        "parentSequence" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Status sequence to which this status is attached"
        },
        "deadline" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Deadline, in seconds, for the activities created from this status"
        },
        "deadlineFieldName" : {
          "type" : "string",
          "description" : "Form field for defining the deadline for the activities created from this status"
        },
        "subProcess" : {
          "type" : "boolean",
          "description" : "If the status indicates a subprocess"
        },
        "subProcessConfiguration" : {
          "description" : "Settings regarding the subprocess indicated by this status",
          "$ref" : "#/definitions/ProcessStateSubProcessConfiguration"
        },
        "serviceConfiguration" : {
          "description" : "Settings regarding service execution if the status indicates the creation of service activities",
          "$ref" : "#/definitions/ProcessStateServiceConfiguration"
        },
        "notificationConfiguration" : {
          "description" : "Settings regarding user notifications of activities created from this status",
          "$ref" : "#/definitions/ProcessStateNotificationConfiguration"
        },
        "conditions" : {
          "type" : "array",
          "description" : "Condition settings if it is a decision status",
          "items" : {
            "$ref" : "#/definitions/ProcessStateCondition"
          }
        },
        "assignmentConfiguration" : {
          "description" : "Person in charge settings, if applicable",
          "$ref" : "#/definitions/AssignmentConfiguration"
        }
      },
      "description" : "Status settings"
    },
    "ProcessStateJointConfiguration" : {
      "type" : "object",
      "properties" : {
        "agreement" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Consensus percentage required for the request to be moved"
        },
        "selectUsers" : {
          "type" : "boolean",
          "description" : "If it is necessary to select people in charge of moving for activities created by this status"
        }
      },
      "description" : "Configuration information for joint activities"
    },
    "ProcessStateList" : {
      "type" : "object",
      "properties" : {
        "items" : {
          "type" : "array",
          "items" : {
            "$ref" : "#/definitions/ProcessState"
          }
        },
        "hasNext" : {
          "type" : "boolean",
          "readOnly" : true
        }
      }
    },
    "ProcessStateNotificationConfiguration" : {
      "type" : "object",
      "properties" : {
        "movementNotifyAssignee" : {
          "type" : "boolean",
          "description" : "If moving the activity will trigger a notification to the person in charge"
        },
        "movementNotifyRequester" : {
          "type" : "boolean",
          "description" : "If moving the activity will trigger a notification to the requisitioner"
        },
        "movementNotifyManager" : {
          "type" : "boolean",
          "description" : "If moving the activity will trigger a notification to the manager"
        },
        "deadlineNotifyAssignee" : {
          "type" : "boolean",
          "description" : "If the activity expiration will trigger a notification to the person in charge"
        },
        "deadlineNotifyRequester" : {
          "type" : "boolean",
          "description" : "If the activity expiration will trigger a notification to the requisitioner"
        },
        "deadlineNotifyManager" : {
          "type" : "boolean",
          "description" : "If the activity expiration will trigger a notification to the manager"
        },
        "delayTimeForFirstDeadlineAssigneeNotification" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Grace period before triggering the expiration notification to the person in charge"
        },
        "delayTimeForFirstDeadlineRequesterNotification" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Grace period before triggering the expiration notification to the requisitioner"
        },
        "delayTimeForFirstDeadlineManagerNotification" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Grace period before triggering the expiration notification to the manager"
        },
        "frequenceForDeadlineAssigneeNotification" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Interim period between notification triggering events to the person in charge due to expiration"
        },
        "frequenceForDeadlineRequesterNotification" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Interim period between notification triggering events to the requisitioner due to expiration"
        },
        "frequenceForDeadlineManagerNotification" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Interim period between notification triggering events to the manager due to expiration"
        },
        "warningTimeForDeadlineAssigneeNotification" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Time prior to expiration to trigger expiration notifications to the person in charge"
        },
        "warningTimeForDeadlineRequesterNotification" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Time prior to expiration to trigger expiration notifications to the requisitioner"
        },
        "warningTimeForDeadlineManagerNotification" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Time prior to expiration to trigger expiration notifications to the manager"
        }
      },
      "description" : "Information about notification settings for activities created from a status"
    },
    "ProcessStateServiceConfiguration" : {
      "type" : "object",
      "properties" : {
        "attempts" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Maximum number of attempts to run the service activity script"
        },
        "successMessage" : {
          "type" : "string",
          "description" : "Comment message when the service activity is successfully moved"
        },
        "frequency" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Interim period between attempts"
        },
        "frequencyType" : {
          "type" : "string",
          "description" : "Type of deadline between attempts, whether in minutes, hours or days"
        }
      },
      "description" : "Service status configuration information"
    },
    "ProcessStateSubProcessConfiguration" : {
      "type" : "object",
      "properties" : {
        "subProcessId" : {
          "type" : "string",
          "description" : "Subprocess identifier"
        },
        "requiresMovement" : {
          "type" : "boolean",
          "description" : "If the subprocess moves the request to the next activity beyond the initial one"
        },
        "transferAttachments" : {
          "type" : "boolean",
          "description" : "If the parent request attachments will be transferred to the subprocess request"
        },
        "cancelable" : {
          "type" : "boolean",
          "description" : "If the status allows cancellation of the subprocess"
        }
      },
      "description" : "Subprocess configuration information"
    },
    "ProcessTask" : {
      "type" : "object",
      "properties" : {
        "processInstanceId" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Request identifier"
        },
        "movementSequence" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Identifier of the move associated to the task"
        },
        "transferSequence" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Transfer sequence in the task itself"
        },
        "assignee" : {
          "description" : "Person Responsible",
          "$ref" : "#/definitions/BPMUser"
        },
        "deadlineDate" : {
          "type" : "string",
          "format" : "date-time",
          "description" : "Deadline"
        },
        "status" : {
          "type" : "string",
          "description" : "Task status"
        },
        "slaStatus" : {
          "type" : "string",
          "description" : "Status concerning task deadlines"
        },
        "startDate" : {
          "type" : "string",
          "format" : "date-time",
          "description" : "Task start date"
        },
        "endDate" : {
          "type" : "string",
          "format" : "date-time",
          "description" : "Task completion date"
        },
        "assignStartDate" : {
          "type" : "string",
          "format" : "date-time",
          "description" : "Task assignment date"
        },
        "assignEndDate" : {
          "type" : "string",
          "format" : "date-time",
          "description" : "Task assignment end date"
        },
        "warningDate" : {
          "type" : "string",
          "format" : "date-time",
          "description" : "Deadline/expiration notification date"
        },
        "chosenAssignees" : {
          "type" : "array",
          "description" : "Users selected as people in charge for the next activity",
          "items" : {
            "$ref" : "#/definitions/BPMUser"
          }
        },
        "processId" : {
          "type" : "string",
          "description" : "Process identifier"
        },
        "requester" : {
          "description" : "Requester",
          "$ref" : "#/definitions/BPMUser"
        },
        "processVersion" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Process version"
        },
        "processDescription" : {
          "type" : "string",
          "description" : "Process description"
        },
        "state" : {
          "description" : "Current status",
          "$ref" : "#/definitions/ProcessState"
        },
        "threadSequence" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Flow sequence, enhanced when passing through fork activities"
        },
        "appDecisionInfo" : {
          "description" : "Information about tasks to be used in the decisions application",
          "$ref" : "#/definitions/AppDecisionTaskInfo"
        },
        "formFields" : {
          "type" : "array",
          "description" : "Form fields from the request form record",
          "items" : {
            "$ref" : "#/definitions/FormField"
          }
        },
        "deadlineSpecification" : {
          "description" : "Time attribute specifications for task and request deadlines",
          "$ref" : "#/definitions/DeadlineSpecification"
        },
        "form" : {
          "description" : "Request form",
          "$ref" : "#/definitions/ProcessForm"
        },
        "processDiagram" : {
          "type" : "string",
          "description" : "SVG Diagram of the process version"
        },
        "approachingExpiration" : {
          "type" : "boolean",
          "description" : "Near expiration"
        }
      },
      "description" : "Task information"
    },
    "ProcessTaskList" : {
      "type" : "object",
      "properties" : {
        "items" : {
          "type" : "array",
          "items" : {
            "$ref" : "#/definitions/ProcessTask"
          }
        },
        "hasNext" : {
          "type" : "boolean",
          "readOnly" : true
        }
      }
    },
    "ProcessVersion" : {
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
        "formId" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Form identifier"
        },
        "editing" : {
          "type" : "boolean",
          "description" : "If the process version is under editing"
        },
        "attachmentSecurity" : {
          "description" : "Configuration information for attachment security",
          "$ref" : "#/definitions/ProcessAttachmentSecurity"
        },
        "active" : {
          "type" : "boolean",
          "description" : "If the process version is active"
        },
        "blocked" : {
          "type" : "boolean",
          "description" : "If the process version is locked"
        },
        "requiresPassword" : {
          "type" : "boolean",
          "description" : "If the process version requires a password for starting and moving requests"
        },
        "diagram" : {
          "type" : "string",
          "description" : "SVG Diagram of the process version"
        },
        "bpmnVersion" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "BPM notation version of the process version"
        },
        "inheritFormSecurity" : {
          "type" : "boolean",
          "description" : "If the form records of the requests generated by this version inherit their security from their document structure"
        },
        "mobileReady" : {
          "type" : "boolean",
          "description" : "If the process is adjusted to run on mobile applications"
        }
      },
      "description" : "Process version"
    },
    "ProcessVersionList" : {
      "type" : "object",
      "properties" : {
        "items" : {
          "type" : "array",
          "items" : {
            "$ref" : "#/definitions/ProcessVersion"
          }
        },
        "hasNext" : {
          "type" : "boolean",
          "readOnly" : true
        }
      }
    },
    "Request" : {
      "type" : "object",
      "properties" : {
        "processInstanceId" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Request identifier"
        },
        "processId" : {
          "type" : "string",
          "description" : "Process identifier"
        },
        "processVersion" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Process version"
        },
        "active" : {
          "type" : "boolean",
          "description" : "If the request is active"
        },
        "requester" : {
          "description" : "Requester",
          "$ref" : "#/definitions/BPMUser"
        },
        "formRecordId" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Request form record identifier"
        },
        "formId" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Form identifier"
        },
        "parentRequestId" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Identifier of the parent request if this request is a subprocess"
        },
        "startDate" : {
          "type" : "string",
          "format" : "date-time",
          "description" : "Request start date"
        },
        "endDate" : {
          "type" : "string",
          "format" : "date-time",
          "description" : "Request completion date"
        },
        "warningDate" : {
          "type" : "string",
          "format" : "date-time",
          "description" : "Request deadline/expiration notification date"
        },
        "deadlineDate" : {
          "type" : "string",
          "format" : "date-time",
          "description" : "Request deadline"
        },
        "periodId" : {
          "type" : "string",
          "description" : "Identifier of the period used by the request to calculate deadlines"
        },
        "activities" : {
          "type" : "array",
          "description" : "Information about request activities",
          "items" : {
            "$ref" : "#/definitions/ProcessActivity"
          }
        },
        "currentMovements" : {
          "type" : "array",
          "description" : "Process current movements",
          "items" : {
            "$ref" : "#/definitions/ProcessActivity"
          }
        },
        "formRecord" : {
          "description" : "Information about the request form record",
          "$ref" : "#/definitions/FormRecord"
        },
        "formFields" : {
          "type" : "array",
          "description" : "Form fields from the request form record",
          "items" : {
            "$ref" : "#/definitions/FormField"
          }
        },
        "slaStatus" : {
          "type" : "string",
          "description" : "Status concerning task deadlines"
        },
        "status" : {
          "type" : "string",
          "description" : "Request status"
        },
        "processDescription" : {
          "type" : "string",
          "description" : "Process description"
        },
        "deadlineSpecification" : {
          "description" : "Time attribute specifications for task and request deadlines",
          "$ref" : "#/definitions/DeadlineSpecification"
        }
      },
      "description" : "Request information"
    },
    "RequestList" : {
      "type" : "object",
      "properties" : {
        "items" : {
          "type" : "array",
          "items" : {
            "$ref" : "#/definitions/Request"
          }
        },
        "hasNext" : {
          "type" : "boolean",
          "readOnly" : true
        }
      }
    },
    "ResumeProcessActivity" : {
      "type" : "object",
      "properties" : {
        "onTime" : {
          "type" : "integer",
          "format" : "int64",
          "description" : "Activities within the deadline"
        },
        "warning" : {
          "type" : "integer",
          "format" : "int64",
          "description" : "Notified activities"
        },
        "expired" : {
          "type" : "integer",
          "format" : "int64",
          "description" : "Expired activities"
        },
        "active" : {
          "type" : "integer",
          "format" : "int64",
          "description" : "Active activities"
        },
        "completed" : {
          "type" : "integer",
          "format" : "int64",
          "description" : "Completed activities"
        },
        "total" : {
          "type" : "integer",
          "format" : "int64",
          "description" : "Total"
        }
      },
      "description" : "Summary of activities by status"
    },
    "ResumeProcessActivityByState" : {
      "type" : "object",
      "properties" : {
        "processId" : {
          "type" : "string",
          "description" : "Process identifier"
        },
        "processVersion" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Process version"
        },
        "processDescription" : {
          "type" : "string",
          "description" : "Process description"
        },
        "state" : {
          "description" : "Status information",
          "$ref" : "#/definitions/ProcessState"
        },
        "resumeProcessActivity" : {
          "description" : "Summary",
          "$ref" : "#/definitions/ResumeProcessActivity"
        }
      },
      "description" : "Summary of activities grouped by status"
    },
    "ResumeProcessActivityByStateList" : {
      "type" : "object",
      "properties" : {
        "items" : {
          "type" : "array",
          "description" : "Summary of activities grouped by status",
          "items" : {
            "$ref" : "#/definitions/ResumeProcessActivityByState"
          }
        }
      }
    },
    "ResumeProcessTask" : {
      "type" : "object",
      "properties" : {
        "resumeProcessTaskStatusSLAVO" : {
          "description" : "Summary of tasks by SLA status",
          "$ref" : "#/definitions/ResumeProcessTaskStatusSLA"
        },
        "resumeProcessTaskStatusVO" : {
          "description" : "Summary of tasks by completion status",
          "$ref" : "#/definitions/ResumeProcessTaskStatus"
        },
        "total" : {
          "type" : "integer",
          "format" : "int64",
          "description" : "Total"
        },
        "replacement" : {
          "type" : "boolean",
          "description" : "Substitute user"
        }
      },
      "description" : "Summary of tasks"
    },
    "ResumeProcessTaskStatus" : {
      "type" : "object",
      "properties" : {
        "notCompleted" : {
          "type" : "integer",
          "format" : "int64",
          "description" : "Not complete"
        },
        "pendingConsensus" : {
          "type" : "integer",
          "format" : "int64",
          "description" : "Pending consensus"
        },
        "completed" : {
          "type" : "integer",
          "format" : "int64",
          "description" : "Complete"
        },
        "transferred" : {
          "type" : "integer",
          "format" : "int64",
          "description" : "Transferred"
        },
        "canceled" : {
          "type" : "integer",
          "format" : "int64",
          "description" : "Canceled"
        }
      },
      "description" : "Summary of tasks by completion status"
    },
    "ResumeProcessTaskStatusSLA" : {
      "type" : "object",
      "properties" : {
        "onTime" : {
          "type" : "integer",
          "format" : "int64",
          "description" : "Not complete"
        },
        "warning" : {
          "type" : "integer",
          "format" : "int64",
          "description" : "Being notified"
        },
        "expired" : {
          "type" : "integer",
          "format" : "int64",
          "description" : "Expired"
        }
      },
      "description" : "Summary of tasks by SLA status"
    },
    "StartRequest" : {
      "type" : "object",
      "properties" : {
        "targetState" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Destination status after the move, optional if there is only one status available as destination and it is not a return flow"
        },
        "targetAssignee" : {
          "type" : "string",
          "description" : "Destination of the person in charge after the move; optional if there is only one potential person in charge after the move"
        },
        "subProcessTargetState" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Destination status after the move if the request is being moved to a subprocess with a move property that is beyond the initially selected one"
        },
        "comment" : {
          "type" : "string",
          "description" : "Move add-on"
        },
        "formFields" : {
          "type" : "object",
          "description" : "Map containing form fields to be updated when moving",
          "additionalProperties" : {
            "type" : "string"
          }
        }
      },
      "description" : "Information to open a request"
    },
    "SubProcessRequest" : {
      "type" : "object",
      "properties" : {
        "processId" : {
          "type" : "string",
          "description" : "Process identifier"
        },
        "processInstanceId" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Request identifier"
        },
        "parentProcessId" : {
          "type" : "string",
          "description" : "Identifier of the parent process if this request is a subprocess"
        },
        "parentProcessInstanceId" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Identifier of the parent request if this request is a subprocess"
        }
      },
      "description" : "Information about a subprocess request"
    },
    "UserReplacement" : {
      "type" : "object",
      "properties" : {
        "startAt" : {
          "type" : "string",
          "format" : "date-time",
          "description" : "Start of substitution"
        },
        "endAt" : {
          "type" : "string",
          "format" : "date-time",
          "description" : "End of substitution"
        },
        "replacementJustify" : {
          "type" : "string",
          "description" : "replacementJustify"
        },
        "processIdList" : {
          "type" : "array",
          "description" : "replacement.replacedByUser.processIdList=",
          "items" : {
            "type" : "string"
          }
        },
        "user" : {
          "description" : "Substitute user details",
          "$ref" : "#/definitions/BPMUser"
        },
        "replacedByUser" : {
          "description" : "Substituted user details",
          "$ref" : "#/definitions/BPMUser"
        }
      },
      "description" : "User substitution"
    },
    "UserReplacementList" : {
      "type" : "object",
      "properties" : {
        "items" : {
          "type" : "array",
          "items" : {
            "$ref" : "#/definitions/UserReplacement"
          }
        },
        "hasNext" : {
          "type" : "boolean",
          "readOnly" : true
        }
      }
    }
  }
}
```
