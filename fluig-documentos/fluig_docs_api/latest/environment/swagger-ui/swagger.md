# swagger.json

> **Fonte:** [https://api.fluig.com/latest/environment/swagger-ui/swagger.json](https://api.fluig.com/latest/environment/swagger-ui/swagger.json)

---

```
{
  "swagger" : "2.0",
  "info" : {
    "description" : "You can track and manage your business with the Environment API",
    "version" : "v2",
    "title" : "Environment"
  },
  "host" : "",
  "basePath" : "/environment/api",
  "tags" : [ {
    "name" : "Monitor status",
    "description" : "Monitor status report"
  }, {
    "name" : "Statistics",
    "description" : "Statistics report collected"
  } ],
  "paths" : {
    "/v2/monitors" : {
      "get" : {
        "tags" : [ "Monitor status" ],
        "summary" : "Returns the status list for all available monitors",
        "description" : "",
        "operationId" : "getAllMonitors",
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
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
          "description" : "Sorting by monitor key",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string",
            "enum" : [ "name", "-name" ]
          },
          "collectionFormat" : "multi"
        } ],
        "responses" : {
          "200" : {
            "description" : "Success!",
            "schema" : {
              "$ref" : "#/definitions/MonitorCollection"
            }
          },
          "400" : {
            "description" : "Failure, see the response for more details",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          },
          "401" : {
            "description" : "Access denied!",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          },
          "403" : {
            "description" : "Forbidden",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          },
          "500" : {
            "description" : "Internal error, see the response for more details",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        }
      }
    },
    "/v2/monitors/{monitorName}" : {
      "get" : {
        "tags" : [ "Monitor status" ],
        "summary" : "Returns the status of the selected monitor",
        "description" : "",
        "operationId" : "getMonitor",
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "monitorName",
          "in" : "path",
          "description" : "Monitoring type",
          "required" : true,
          "type" : "string",
          "enum" : [ "ANALYTICS_AVAIABILITY", "LICENSE_SERVER_AVAILABILITY", "MAIL_SERVER_AVAILABILITY", "SOLR_SERVER_AVAILABILITY", "VIEWER_AVAILABILITY", "OPEN_OFFICE_AVAILABILITY", "REAL_TIME_AVAILABILITY" ]
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
            "description" : "Success!",
            "schema" : {
              "$ref" : "#/definitions/Monitor"
            }
          },
          "400" : {
            "description" : "Failure, see the response for more details",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          },
          "401" : {
            "description" : "Access denied!",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          },
          "403" : {
            "description" : "Forbidden",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          },
          "404" : {
            "description" : "Not found",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          },
          "500" : {
            "description" : "Internal error, see the response for more details",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        }
      }
    },
    "/v2/statistics" : {
      "get" : {
        "tags" : [ "Statistics" ],
        "summary" : "Returns the list of all available statistics and recorded information",
        "description" : "",
        "operationId" : "getAllStatistics",
        "produces" : [ "application/json; charset=UTF-8" ],
        "responses" : {
          "200" : {
            "description" : "Success!",
            "schema" : {
              "type" : "object",
              "additionalProperties" : {
                "type" : "object"
              }
            }
          },
          "400" : {
            "description" : "Failure, see the response for more details",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          },
          "401" : {
            "description" : "Access denied!",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          },
          "403" : {
            "description" : "Forbidden",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          },
          "500" : {
            "description" : "Internal error, see the response for more details",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        }
      }
    },
    "/v2/statistics/{statisticName}" : {
      "get" : {
        "tags" : [ "Statistics" ],
        "summary" : "Returns the status of the selected statistic",
        "description" : "",
        "operationId" : "getStatistics",
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "statisticName",
          "in" : "path",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "Success!",
            "schema" : {
              "type" : "object"
            }
          },
          "400" : {
            "description" : "Failure, see the response for more details",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          },
          "401" : {
            "description" : "Access denied!",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          },
          "403" : {
            "description" : "Forbidden",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          },
          "404" : {
            "description" : "Not found",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          },
          "500" : {
            "description" : "Internal error, see the response for more details",
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
    "Monitor" : {
      "type" : "object",
      "properties" : {
        "name" : {
          "type" : "string",
          "description" : "Monitor key"
        },
        "status" : {
          "type" : "string",
          "description" : "Last monitor status"
        },
        "sucessRate" : {
          "type" : "number",
          "format" : "double",
          "description" : "Monitor success rate"
        },
        "lastException" : {
          "type" : "string",
          "description" : "Last exception released"
        }
      }
    },
    "MonitorCollection" : {
      "type" : "object",
      "properties" : {
        "items" : {
          "type" : "array",
          "items" : {
            "$ref" : "#/definitions/Monitor"
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
