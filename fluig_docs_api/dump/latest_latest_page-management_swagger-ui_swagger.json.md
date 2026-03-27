# swagger.json

> **Fonte:** [https://api.fluig.com/latest/page-management/swagger-ui/swagger.json](https://api.fluig.com/latest/page-management/swagger-ui/swagger.json)

---

```
{
  "swagger" : "2.0",
  "info" : {
    "description" : "Manage platform’s themes, pages and layouts",
    "version" : "v2",
    "title" : "Page Management"
  },
  "host" : "",
  "basePath" : "/page-management/api",
  "tags" : [ {
    "name" : "Widgets",
    "description" : "Functionalities related to operations with the platform's native or customized Widgets"
  }, {
    "name" : "Layouts",
    "description" : "Operations with page layouts"
  }, {
    "name" : "Pages",
    "description" : "Operations with system pages"
  }, {
    "name" : "Themes",
    "description" : "Operations with page themes"
  } ],
  "paths" : {
    "/v2/applications" : {
      "get" : {
        "tags" : [ "Widgets" ],
        "summary" : "Returns all available widgets",
        "description" : "",
        "operationId" : "findAll",
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "search",
          "in" : "query",
          "description" : "Search term in the title, description, and code fields",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "category",
          "in" : "query",
          "description" : "Category of widget to be searched",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "internal",
          "in" : "query",
          "description" : "Internal (native to the platform) or external (customized) widgets",
          "required" : false,
          "type" : "boolean",
          "default" : true
        }, {
          "name" : "order",
          "in" : "query",
          "description" : "Sorting by field(s)",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string",
            "enum" : [ "title", "description", "code", "-title", "-description", "-code" ]
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "expand",
          "in" : "query",
          "description" : "Expandable fields",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string",
            "enum" : [ "categories", "locales", "services", "resources" ]
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
          "name" : "fields",
          "in" : "query",
          "description" : "Dynamic fields",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        } ],
        "responses" : {
          "200" : {
            "description" : "Successful request with body content",
            "schema" : {
              "$ref" : "#/definitions/ApplicationCollection"
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
      }
    },
    "/v2/applications/categories/count" : {
      "get" : {
        "tags" : [ "Widgets" ],
        "summary" : "Returns all grouped widget categories",
        "description" : "",
        "operationId" : "findGroupedByCategories",
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "category",
          "in" : "query",
          "description" : "Category of widget to be searched",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "internal",
          "in" : "query",
          "description" : "Internal (native to the platform) or external (customized) widgets",
          "required" : false,
          "type" : "boolean",
          "default" : true
        }, {
          "name" : "order",
          "in" : "query",
          "description" : "Sorting by field(s)",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string",
            "enum" : [ "category", "total", "-category", "-total" ]
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
          "name" : "fields",
          "in" : "query",
          "description" : "Dynamic fields",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "collectionFormat" : "multi"
        } ],
        "responses" : {
          "200" : {
            "description" : "Successful request with body content",
            "schema" : {
              "$ref" : "#/definitions/CategoryCollection"
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
      }
    },
    "/v2/applications/{code}" : {
      "get" : {
        "tags" : [ "Widgets" ],
        "summary" : "Search a widget by the code",
        "description" : "",
        "operationId" : "findByCode",
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "code",
          "in" : "path",
          "description" : "Widget code",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "expand",
          "in" : "query",
          "description" : "Expandable fields",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string",
            "enum" : [ "categories", "locales", "services", "resources" ]
          },
          "collectionFormat" : "multi"
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
        } ],
        "responses" : {
          "200" : {
            "description" : "Successful request with body content",
            "schema" : {
              "$ref" : "#/definitions/Application"
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
    "/v2/layouts" : {
      "get" : {
        "tags" : [ "Layouts" ],
        "summary" : "Return all available layouts",
        "description" : "",
        "operationId" : "getAllLayouts",
        "consumes" : [ "application/json; charset=UTF-8" ],
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
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
          "name" : "order",
          "in" : "query",
          "description" : "Sorting by field(s)",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string",
            "enum" : [ "id", "code", "title", "description" ]
          },
          "collectionFormat" : "multi"
        } ],
        "responses" : {
          "200" : {
            "description" : "Ok",
            "schema" : {
              "$ref" : "#/definitions/LayoutCollectionResponse"
            }
          },
          "400" : {
            "description" : "Failed to return layout; see the response for more details",
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
    "/v2/layouts/{code}" : {
      "get" : {
        "tags" : [ "Layouts" ],
        "summary" : "Return the layout as per its code",
        "description" : "",
        "operationId" : "getLayout",
        "consumes" : [ "application/json; charset=UTF-8" ],
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
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
          "name" : "code",
          "in" : "path",
          "description" : "Layout code",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "Ok",
            "schema" : {
              "$ref" : "#/definitions/Layout"
            }
          },
          "400" : {
            "description" : "Failed to return layout; see the response for more details",
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
            "description" : "Layout not found",
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
    "/v2/layouts/{code}/pages" : {
      "get" : {
        "tags" : [ "Layouts" ],
        "summary" : "Return all pages posted on a particular layout",
        "description" : "",
        "operationId" : "getPagesByLayout",
        "consumes" : [ "application/json; charset=UTF-8" ],
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "code",
          "in" : "path",
          "description" : "Layout code",
          "required" : true,
          "type" : "string"
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
          "description" : "Sorting by field(s)",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string",
            "enum" : [ "code", "description", "displayOrder", "id", "menuGroup", "title" ]
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "internal",
          "in" : "query",
          "description" : "Return internal pages only",
          "required" : false,
          "type" : "boolean"
        } ],
        "responses" : {
          "200" : {
            "description" : "Ok",
            "schema" : {
              "$ref" : "#/definitions/PageCollectionResponse"
            }
          },
          "400" : {
            "description" : "Failed to return pages; see the response for more details",
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
            "description" : "Layout not found",
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
    "/v2/pages" : {
      "get" : {
        "tags" : [ "Pages" ],
        "summary" : "Return all pages",
        "description" : "",
        "operationId" : "getPages",
        "consumes" : [ "application/json; charset=UTF-8" ],
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
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
          "description" : "Sorting by field(s)",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string",
            "enum" : [ "code", "description", "displayOrder", "id", "menuGroup", "title" ]
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "internal",
          "in" : "query",
          "description" : "Return internal pages only",
          "required" : false,
          "type" : "boolean"
        }, {
          "name" : "url",
          "in" : "query",
          "description" : "Returns only pages that can be accessed by the URL",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "mobile",
          "in" : "query",
          "description" : "Return only pages with access enabled on the mobile",
          "required" : false,
          "type" : "boolean"
        } ],
        "responses" : {
          "200" : {
            "description" : "Ok",
            "schema" : {
              "$ref" : "#/definitions/PageCollectionResponse"
            }
          },
          "400" : {
            "description" : "Failed to return pages; see the response for more details",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          },
          "401" : {
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
    "/v2/pages/create" : {
      "post" : {
        "tags" : [ "Pages" ],
        "summary" : "Page creation",
        "description" : "",
        "operationId" : "create",
        "consumes" : [ "application/json; charset=UTF-8" ],
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "in" : "body",
          "name" : "body",
          "required" : false,
          "schema" : {
            "$ref" : "#/definitions/PageCreate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "Successful request with body content",
            "schema" : {
              "$ref" : "#/definitions/PageCreate"
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
    "/v2/pages/editable/find" : {
      "get" : {
        "tags" : [ "Pages" ],
        "summary" : "Return editable pages.",
        "description" : "",
        "operationId" : "findEditable",
        "consumes" : [ "application/json; charset=UTF-8" ],
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
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
          "name" : "search",
          "in" : "query",
          "description" : "Search filter",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "status",
          "in" : "query",
          "description" : "Page Status",
          "required" : false,
          "type" : "string",
          "enum" : [ "ARCHIVED", "DRAFT", "PUBLISHED" ]
        }, {
          "name" : "enabledChildren",
          "in" : "query",
          "description" : "Filter for pages that allow children",
          "required" : false,
          "type" : "boolean"
        } ],
        "responses" : {
          "200" : {
            "description" : "Ok",
            "schema" : {
              "$ref" : "#/definitions/PageCollectionResponse"
            }
          },
          "400" : {
            "description" : "Failed to return pages; see the response for more details",
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
    "/v2/pages/parent/find" : {
      "get" : {
        "tags" : [ "Pages" ],
        "summary" : "Return parent pages.",
        "description" : "",
        "operationId" : "findParent",
        "consumes" : [ "application/json; charset=UTF-8" ],
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
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
          "name" : "search",
          "in" : "query",
          "description" : "Search filter",
          "required" : false,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "Ok",
            "schema" : {
              "$ref" : "#/definitions/PageCollectionResponse"
            }
          },
          "400" : {
            "description" : "Failed to return pages; see the response for more details",
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
    "/v2/pages/{code}" : {
      "get" : {
        "tags" : [ "Pages" ],
        "summary" : "Return a page as per its code",
        "description" : "",
        "operationId" : "pageByCode",
        "consumes" : [ "application/json; charset=UTF-8" ],
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "code",
          "in" : "path",
          "description" : "Page code",
          "required" : true,
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
              "$ref" : "#/definitions/Page"
            }
          },
          "400" : {
            "description" : "Failed to return page; see the response for more details",
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
            "description" : "Page not found",
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
        "tags" : [ "Pages" ],
        "summary" : "Updates information on a page",
        "description" : "",
        "operationId" : "updatePage",
        "consumes" : [ "application/json; charset=UTF-8" ],
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "code",
          "in" : "path",
          "description" : "Page code",
          "required" : true,
          "type" : "string"
        }, {
          "in" : "body",
          "name" : "body",
          "description" : "Page to be updated",
          "required" : true,
          "schema" : {
            "$ref" : "#/definitions/UpdatePage"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "Ok",
            "schema" : {
              "$ref" : "#/definitions/Page"
            }
          },
          "400" : {
            "description" : "Failed to return page; see the response for more details",
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
            "description" : "Page not found",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          },
          "404" : {
            "description" : "Page not found",
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
        "tags" : [ "Pages" ],
        "summary" : "Delete page",
        "description" : "",
        "operationId" : "delete",
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "code",
          "in" : "path",
          "description" : "Page code",
          "required" : true,
          "type" : "string"
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
      },
      "patch" : {
        "tags" : [ "Pages" ],
        "summary" : "Modify page",
        "description" : "",
        "operationId" : "patchByCode",
        "consumes" : [ "application/json; charset=UTF-8" ],
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "code",
          "in" : "path",
          "description" : "Page code",
          "required" : true,
          "type" : "string"
        }, {
          "in" : "body",
          "name" : "Page to be modified",
          "required" : true,
          "schema" : {
            "type" : "array",
            "items" : {
              "$ref" : "#/definitions/PageDTOPatch"
            }
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "Ok",
            "schema" : {
              "$ref" : "#/definitions/Page"
            }
          },
          "400" : {
            "description" : "Failed to modify page; see the response for more details",
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
            "description" : "Page not found",
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
    "/v2/pages/{code}/application" : {
      "get" : {
        "tags" : [ "Pages" ],
        "summary" : "Searches widgets on the page",
        "description" : "",
        "operationId" : "getWidgets",
        "consumes" : [ "application/json; charset=UTF-8" ],
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "code",
          "in" : "path",
          "description" : "Page code",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "widgetCode",
          "in" : "query",
          "description" : "Filter by a widget code",
          "required" : false,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "Ok",
            "schema" : {
              "$ref" : "#/definitions/PageMobile"
            }
          },
          "400" : {
            "description" : "Failed to restore theme, see the response for more details",
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
            "description" : "Theme not found",
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
        "tags" : [ "Pages" ],
        "summary" : "Adds a Widget within the page.",
        "description" : "",
        "operationId" : "addWidget",
        "consumes" : [ "application/json; charset=UTF-8" ],
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "code",
          "in" : "path",
          "description" : "Page code",
          "required" : true,
          "type" : "string"
        }, {
          "in" : "body",
          "name" : "body",
          "required" : false,
          "schema" : {
            "$ref" : "#/definitions/PageWidgetCreate"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "Successful request with body content",
            "schema" : {
              "$ref" : "#/definitions/PageWidget"
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
      "put" : {
        "tags" : [ "Pages" ],
        "summary" : "Moves a Widget within the page.",
        "description" : "",
        "operationId" : "moveWidget",
        "consumes" : [ "application/json; charset=UTF-8" ],
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "code",
          "in" : "path",
          "description" : "Page code",
          "required" : true,
          "type" : "string"
        }, {
          "in" : "body",
          "name" : "body",
          "required" : false,
          "schema" : {
            "$ref" : "#/definitions/MoveWidget"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "Successful request with body content",
            "schema" : {
              "$ref" : "#/definitions/MoveWidget"
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
    "/v2/pages/{code}/application/{instanceId}" : {
      "delete" : {
        "tags" : [ "Pages" ],
        "summary" : "Remove widget from the page",
        "description" : "",
        "operationId" : "removeWidget",
        "consumes" : [ "application/json; charset=UTF-8" ],
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "code",
          "in" : "path",
          "description" : "Page code",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "instanceId",
          "in" : "path",
          "description" : "InstanceId of the widget to be deleted.",
          "required" : true,
          "type" : "integer",
          "format" : "int64"
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
    "/v2/pages/{code}/archive" : {
      "delete" : {
        "tags" : [ "Pages" ],
        "summary" : "Archive pages",
        "description" : "",
        "operationId" : "archived",
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "code",
          "in" : "path",
          "description" : "Page code",
          "required" : true,
          "type" : "string"
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
    "/v2/pages/{code}/breadcrumb" : {
      "get" : {
        "tags" : [ "Pages" ],
        "summary" : "Search breadcrumb of a page",
        "description" : "",
        "operationId" : "getBreadcrumbPage",
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "code",
          "in" : "path",
          "description" : "Page code",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "Successful request with body content",
            "schema" : {
              "$ref" : "#/definitions/PageBreadcrumbCollectionResponse"
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
    "/v2/pages/{code}/change-edit-user" : {
      "put" : {
        "tags" : [ "Pages" ],
        "summary" : "Changes draft user page",
        "description" : "",
        "operationId" : "changeEditUser",
        "consumes" : [ "application/json; charset=UTF-8" ],
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "code",
          "in" : "path",
          "description" : "Page code",
          "required" : true,
          "type" : "string"
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
    "/v2/pages/{code}/draft" : {
      "post" : {
        "tags" : [ "Pages" ],
        "summary" : "Create a page draft",
        "description" : "",
        "operationId" : "createDraft",
        "consumes" : [ "application/json; charset=UTF-8" ],
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "code",
          "in" : "path",
          "description" : "Page code",
          "required" : true,
          "type" : "string"
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
      },
      "delete" : {
        "tags" : [ "Pages" ],
        "summary" : "Discard draft of one page",
        "description" : "",
        "operationId" : "deleteDraft",
        "consumes" : [ "application/json; charset=UTF-8" ],
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "code",
          "in" : "path",
          "description" : "Page code",
          "required" : true,
          "type" : "string"
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
    "/v2/pages/{code}/duplicate" : {
      "post" : {
        "tags" : [ "Pages" ],
        "summary" : "Duplicates a page",
        "description" : "",
        "operationId" : "duplicate",
        "consumes" : [ "application/json; charset=UTF-8" ],
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "code",
          "in" : "path",
          "description" : "Page code",
          "required" : true,
          "type" : "string"
        }, {
          "in" : "body",
          "name" : "body",
          "required" : false,
          "schema" : {
            "$ref" : "#/definitions/PageDuplicate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "Successful request with body content",
            "schema" : {
              "$ref" : "#/definitions/Page"
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
    "/v2/pages/{code}/friendlyUrl" : {
      "put" : {
        "tags" : [ "Pages" ],
        "summary" : "Update friendly url",
        "description" : "",
        "operationId" : "changeFriendlyUrl",
        "consumes" : [ "application/json; charset=UTF-8" ],
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "code",
          "in" : "path",
          "description" : "Page code",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "value",
          "in" : "query",
          "description" : "Friendly URL",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "Successful request with body content",
            "schema" : {
              "$ref" : "#/definitions/UpdatePage"
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
    "/v2/pages/{code}/last-edit-user" : {
      "get" : {
        "tags" : [ "Pages" ],
        "summary" : "Returns if the logged-in user is the last editor of the page",
        "description" : "",
        "operationId" : "isLastEditUser",
        "consumes" : [ "application/json; charset=UTF-8" ],
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "code",
          "in" : "path",
          "description" : "Page code",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "Successful request with body content",
            "schema" : {
              "$ref" : "#/definitions/PageLastEditUserResponse"
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
    "/v2/pages/{code}/layouts/{layoutCode}" : {
      "put" : {
        "tags" : [ "Pages" ],
        "summary" : "Changes the page layout.",
        "description" : "",
        "operationId" : "changePageLayout",
        "consumes" : [ "application/json; charset=UTF-8" ],
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "code",
          "in" : "path",
          "description" : "Page code",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "layoutCode",
          "in" : "path",
          "description" : "Layout code",
          "required" : true,
          "type" : "string"
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
    "/v2/pages/{code}/menu" : {
      "get" : {
        "tags" : [ "Pages" ],
        "summary" : "Search pages of the logged in user’s menu",
        "description" : "",
        "operationId" : "getMenu",
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "code",
          "in" : "path",
          "description" : "Page code",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "isParent",
          "in" : "query",
          "description" : "Return the child pages of the page code entered",
          "required" : true,
          "type" : "boolean",
          "default" : false
        }, {
          "name" : "isMobile",
          "in" : "query",
          "description" : "Mobile menu",
          "required" : true,
          "type" : "boolean",
          "default" : false
        } ],
        "responses" : {
          "200" : {
            "description" : "Successful request with body content",
            "schema" : {
              "$ref" : "#/definitions/Menu"
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
    "/v2/pages/{code}/permission" : {
      "get" : {
        "tags" : [ "Pages" ],
        "summary" : "Return page permissions or default permissions.",
        "description" : "",
        "operationId" : "findPermissionByPageCode",
        "consumes" : [ "application/json; charset=UTF-8" ],
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "code",
          "in" : "path",
          "description" : "Page code",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "Ok",
            "schema" : {
              "$ref" : "#/definitions/PermissionCollectionResponse"
            }
          },
          "400" : {
            "description" : "Failed to return page permissions, see the response for more details",
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
            "description" : "Page not found",
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
    "/v2/pages/{code}/publish" : {
      "post" : {
        "tags" : [ "Pages" ],
        "summary" : "Publishes page in draft",
        "description" : "",
        "operationId" : "publish",
        "consumes" : [ "application/json; charset=UTF-8" ],
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "code",
          "in" : "path",
          "description" : "Page code",
          "required" : true,
          "type" : "string"
        }, {
          "in" : "body",
          "name" : "body",
          "required" : false,
          "schema" : {
            "$ref" : "#/definitions/PagePublish"
          }
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
    "/v2/pages/{code}/reset" : {
      "post" : {
        "tags" : [ "Pages" ],
        "summary" : "Reset internal page to the initial state",
        "description" : "",
        "operationId" : "reset",
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "code",
          "in" : "path",
          "description" : "Page code",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "202" : {
            "description" : "Page will be reset"
          },
          "400" : {
            "description" : "Failed to reset internal page to its initial state",
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
            "description" : "Page not found",
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
        },
        "deprecated" : true
      }
    },
    "/v2/pages/{code}/unarchive" : {
      "put" : {
        "tags" : [ "Pages" ],
        "summary" : "Unarchiving pages",
        "description" : "",
        "operationId" : "unarchived",
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "code",
          "in" : "path",
          "description" : "Page code",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "unlinkParent",
          "in" : "query",
          "description" : "Unlink from root page",
          "required" : true,
          "type" : "boolean",
          "default" : false
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
    "/v2/pages/{code}/versions" : {
      "get" : {
        "tags" : [ "Pages" ],
        "summary" : "Return page versions",
        "description" : "",
        "operationId" : "getPageVersions",
        "consumes" : [ "application/json; charset=UTF-8" ],
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "code",
          "in" : "path",
          "description" : "Page code",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "search",
          "in" : "query",
          "description" : "Filter by description",
          "required" : false,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "Successful request with body content",
            "schema" : {
              "$ref" : "#/definitions/PageVersionCollectionResponse"
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
    "/v2/pages/{code}/versions/restore" : {
      "put" : {
        "tags" : [ "Pages" ],
        "summary" : "Restores the page to a version",
        "description" : "",
        "operationId" : "restorePageVersion",
        "consumes" : [ "application/json; charset=UTF-8" ],
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "code",
          "in" : "path",
          "description" : "Page code",
          "required" : true,
          "type" : "string"
        }, {
          "in" : "body",
          "name" : "body",
          "required" : false,
          "schema" : {
            "$ref" : "#/definitions/PageVersionRestore"
          }
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
    "/v2/themes" : {
      "get" : {
        "tags" : [ "Themes" ],
        "summary" : "Return all themes",
        "description" : "",
        "operationId" : "findThemes",
        "consumes" : [ "application/json; charset=UTF-8" ],
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
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
          "name" : "status",
          "in" : "query",
          "description" : "Status",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string",
            "enum" : [ "current", "old", "default" ]
          },
          "collectionFormat" : "multi"
        } ],
        "responses" : {
          "200" : {
            "description" : "Ok",
            "schema" : {
              "$ref" : "#/definitions/ThemeCollectionResponse"
            }
          },
          "400" : {
            "description" : "Failed to restore themes, see the response for more details",
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
    "/v2/themes/responsive-theme/enabled" : {
      "get" : {
        "tags" : [ "Themes" ],
        "summary" : "Returns if only Responsive Theme is enabled",
        "description" : "",
        "operationId" : "responsiveThemeEnable",
        "produces" : [ "application/json; charset=UTF-8" ],
        "responses" : {
          "200" : {
            "description" : "Ok",
            "schema" : {
              "$ref" : "#/definitions/ResponsiveThemeStatus"
            }
          },
          "400" : {
            "description" : "Failed to restore theme, see the response for more details",
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
            "description" : "Theme not found",
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
    "/v2/themes/theme-change/blocked" : {
      "get" : {
        "tags" : [ "Themes" ],
        "summary" : "Returns if the theme change is blocked",
        "description" : "",
        "operationId" : "isBlockThemeChange",
        "produces" : [ "application/json; charset=UTF-8" ],
        "responses" : {
          "200" : {
            "description" : "Ok",
            "schema" : {
              "$ref" : "#/definitions/ResponsiveThemeStatus"
            }
          },
          "400" : {
            "description" : "Failed to restore theme, see the response for more details",
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
            "description" : "Theme not found",
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
    "/v2/themes/{code}" : {
      "get" : {
        "tags" : [ "Themes" ],
        "summary" : "Return the theme as per the entered code",
        "description" : "",
        "operationId" : "getTheme",
        "consumes" : [ "application/json; charset=UTF-8" ],
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "code",
          "in" : "path",
          "description" : "Theme code",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "Ok",
            "schema" : {
              "$ref" : "#/definitions/Theme"
            }
          },
          "400" : {
            "description" : "Failed to restore theme, see the response for more details",
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
            "description" : "Theme not found",
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
    "/v2/themes/{code}/preferences" : {
      "get" : {
        "tags" : [ "Themes" ],
        "summary" : "Returns all preferences for the entered theme ",
        "description" : "",
        "operationId" : "getPreferences",
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "code",
          "in" : "path",
          "description" : "Theme code",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "Ok",
            "schema" : {
              "$ref" : "#/definitions/ThemePreferences"
            }
          },
          "400" : {
            "description" : "Failed to restore theme, see the response for more details",
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
            "description" : "Theme not found",
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
        "tags" : [ "Themes" ],
        "summary" : "Saves all preferences for the entered theme",
        "description" : "",
        "operationId" : "savePreferences",
        "consumes" : [ "application/json; charset=UTF-8" ],
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "code",
          "in" : "path",
          "description" : "Theme code",
          "required" : true,
          "type" : "string"
        }, {
          "in" : "body",
          "name" : "body",
          "description" : "Object with the preferences of a theme",
          "required" : true,
          "schema" : {
            "$ref" : "#/definitions/ThemePreferences"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "Ok",
            "schema" : {
              "$ref" : "#/definitions/ThemePreferences"
            }
          },
          "400" : {
            "description" : "Failed to restore theme, see the response for more details",
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
            "description" : "Theme not found",
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
    "/v2/themes/{code}/restore" : {
      "post" : {
        "tags" : [ "Themes" ],
        "summary" : "Restore the preferences for the entered theme",
        "description" : "",
        "operationId" : "restore",
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "code",
          "in" : "path",
          "description" : "Theme code",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "Ok"
          },
          "204" : {
            "description" : "Successful request without body content"
          },
          "400" : {
            "description" : "Failed to restore theme, see the response for more details",
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
            "description" : "Theme not found",
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
    "/v2/themes/{tenantCode}/dark-logo" : {
      "get" : {
        "tags" : [ "Themes" ],
        "summary" : "api.themes.get.image.dark.logo",
        "description" : "",
        "operationId" : "getImageDarkLogo",
        "consumes" : [ "images/png" ],
        "produces" : [ "images/png" ],
        "parameters" : [ {
          "name" : "tenantCode",
          "in" : "path",
          "description" : "Company code",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "Ok"
          },
          "400" : {
            "description" : "Failed to restore theme, see the response for more details",
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
            "description" : "Theme not found",
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
    "/v2/themes/{tenantCode}/logo" : {
      "get" : {
        "tags" : [ "Themes" ],
        "summary" : "Search for the company logo",
        "description" : "",
        "operationId" : "getImageLogo",
        "consumes" : [ "images/png" ],
        "produces" : [ "images/png" ],
        "parameters" : [ {
          "name" : "tenantCode",
          "in" : "path",
          "description" : "Company code",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "Ok"
          },
          "400" : {
            "description" : "Failed to restore theme, see the response for more details",
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
            "description" : "Theme not found",
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
    "Application" : {
      "type" : "object",
      "properties" : {
        "id" : {
          "type" : "integer",
          "format" : "int64",
          "description" : "Widget ID"
        },
        "code" : {
          "type" : "string",
          "description" : "Widget code"
        },
        "title" : {
          "type" : "string",
          "description" : "Widget title"
        },
        "internal" : {
          "type" : "boolean",
          "description" : "Internal or custom widget"
        },
        "localeFileBaseName" : {
          "type" : "string",
          "description" : "Base file location"
        },
        "description" : {
          "type" : "string",
          "description" : "Widget description"
        },
        "renderer" : {
          "type" : "string",
          "description" : "Render type"
        },
        "developerCode" : {
          "type" : "string",
          "description" : "Developer code"
        },
        "developerName" : {
          "type" : "string",
          "description" : "Developer name"
        },
        "developerUrl" : {
          "type" : "string",
          "description" : "Developer URL"
        },
        "icon" : {
          "type" : "string",
          "description" : "Icon"
        },
        "version" : {
          "type" : "string",
          "description" : "Version"
        },
        "applicationContext" : {
          "type" : "string",
          "description" : "Widget Context"
        },
        "uiWidget" : {
          "type" : "boolean",
          "description" : "Tells you whether the widget can be added to a page"
        },
        "mobileAppWidget" : {
          "type" : "boolean",
          "description" : "Tells you whether the widget can be viewed on the app"
        },
        "applicationMoreInfo" : {
          "type" : "string",
          "description" : "More widget information"
        },
        "applicationNoCodeCategory" : {
          "type" : "string",
          "description" : "Category of widget in NoCode"
        },
        "type" : {
          "type" : "string",
          "description" : "widget"
        },
        "categories" : {
          "type" : "array",
          "description" : "Widget categories",
          "items" : {
            "type" : "string"
          }
        },
        "locales" : {
          "type" : "array",
          "description" : "Widget language",
          "items" : {
            "type" : "string"
          }
        },
        "resources" : {
          "type" : "object",
          "description" : "Resources used by the widget",
          "additionalProperties" : {
            "type" : "string"
          }
        },
        "services" : {
          "type" : "object",
          "description" : "Services used by the widget",
          "additionalProperties" : {
            "type" : "string"
          }
        }
      }
    },
    "ApplicationCollection" : {
      "type" : "object",
      "properties" : {
        "items" : {
          "type" : "array",
          "items" : {
            "$ref" : "#/definitions/Application"
          }
        },
        "hasNext" : {
          "type" : "boolean",
          "readOnly" : true
        }
      }
    },
    "Category" : {
      "type" : "object",
      "properties" : {
        "id" : {
          "type" : "integer",
          "format" : "int64",
          "description" : "Category ID"
        },
        "category" : {
          "type" : "string",
          "description" : "Category name"
        },
        "total" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Category total"
        },
        "internal" : {
          "type" : "boolean",
          "description" : "Internal or Customized"
        }
      }
    },
    "CategoryCollection" : {
      "type" : "object",
      "properties" : {
        "items" : {
          "type" : "array",
          "items" : {
            "$ref" : "#/definitions/Category"
          }
        },
        "hasNext" : {
          "type" : "boolean",
          "readOnly" : true
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
    },
    "Layout" : {
      "type" : "object",
      "properties" : {
        "id" : {
          "type" : "integer",
          "format" : "int64",
          "description" : "ID"
        },
        "code" : {
          "type" : "string",
          "description" : "Layout code"
        },
        "title" : {
          "type" : "string",
          "description" : "Title"
        },
        "description" : {
          "type" : "string",
          "description" : "Description"
        },
        "icon" : {
          "type" : "string",
          "description" : "Icon"
        },
        "responsiveLayout" : {
          "type" : "boolean",
          "description" : "Responsive layout"
        },
        "internal" : {
          "type" : "boolean",
          "description" : "Internal layout"
        }
      }
    },
    "LayoutCollectionResponse" : {
      "type" : "object",
      "properties" : {
        "items" : {
          "type" : "array",
          "items" : {
            "$ref" : "#/definitions/Layout"
          }
        },
        "hasNext" : {
          "type" : "boolean",
          "readOnly" : true
        }
      }
    },
    "Menu" : {
      "type" : "object",
      "properties" : {
        "code" : {
          "type" : "string",
          "description" : "Code"
        },
        "title" : {
          "type" : "string",
          "description" : "Title"
        },
        "iconImage" : {
          "type" : "string",
          "description" : "Icon image path"
        },
        "iconFont" : {
          "type" : "string",
          "description" : "Icon font"
        },
        "uri" : {
          "type" : "string",
          "description" : "Unique URI"
        },
        "parent" : {
          "type" : "string",
          "description" : "Parent menu code"
        },
        "hasChildren" : {
          "type" : "boolean",
          "description" : "Has children?"
        },
        "childrenAmount" : {
          "type" : "integer",
          "format" : "int64",
          "description" : "How many children?"
        },
        "menuGroup" : {
          "type" : "boolean",
          "description" : "Is menu grouped?"
        }
      }
    },
    "MoveWidget" : {
      "type" : "object",
      "required" : [ "instanceId", "order", "slot" ],
      "properties" : {
        "slot" : {
          "type" : "string",
          "description" : "move.Widget.dto.slot"
        },
        "instanceId" : {
          "type" : "integer",
          "format" : "int64",
          "description" : "move.Widget.dto.slot"
        },
        "order" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "move.Widget.dto.slot"
        }
      }
    },
    "Page" : {
      "type" : "object",
      "properties" : {
        "id" : {
          "type" : "integer",
          "format" : "int64",
          "description" : "ID"
        },
        "code" : {
          "type" : "string",
          "description" : "Code"
        },
        "title" : {
          "type" : "string",
          "description" : "Title"
        },
        "description" : {
          "type" : "string",
          "description" : "Description"
        },
        "icon" : {
          "type" : "string",
          "description" : "Icon"
        },
        "iconFont" : {
          "type" : "string",
          "description" : "Icon font"
        },
        "parent" : {
          "type" : "integer",
          "format" : "int64",
          "description" : "Parent page ID"
        },
        "parentCode" : {
          "type" : "string",
          "description" : "Parent page code"
        },
        "displayOrder" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Viewing order"
        },
        "layout" : {
          "description" : "Layout",
          "$ref" : "#/definitions/Layout"
        },
        "theme" : {
          "description" : "Theme",
          "$ref" : "#/definitions/Theme"
        },
        "children" : {
          "type" : "array",
          "description" : "Secondary pages",
          "items" : {
            "$ref" : "#/definitions/Page"
          }
        },
        "menuGroup" : {
          "type" : "boolean",
          "description" : "Grouping page"
        },
        "internal" : {
          "type" : "boolean",
          "description" : "Internal pages"
        },
        "updateDate" : {
          "type" : "string",
          "format" : "date-time",
          "description" : "Last update date."
        },
        "user" : {
          "description" : "Last user who edited the page",
          "$ref" : "#/definitions/PageUser"
        },
        "version" : {
          "type" : "integer",
          "format" : "int64",
          "description" : "Version"
        },
        "authorization" : {
          "type" : "string",
          "description" : "Authorization",
          "enum" : [ "PUBLIC", "AUTHENTICATED" ]
        },
        "status" : {
          "type" : "string",
          "description" : "Status",
          "enum" : [ "ARCHIVED", "DRAFT", "PUBLISHED" ]
        },
        "friendlyUrl" : {
          "type" : "string",
          "description" : "Custom URL"
        },
        "enabledPathParam" : {
          "type" : "boolean",
          "description" : "Enable pathparam"
        },
        "enabledChildren" : {
          "type" : "boolean",
          "description" : "Enable sub-pages"
        },
        "disableChildLevel" : {
          "type" : "boolean",
          "description" : "Hide sub-pages in sub-menu"
        }
      }
    },
    "PageBreadcrumb" : {
      "type" : "object",
      "properties" : {
        "pageCode" : {
          "type" : "string",
          "description" : "Code"
        },
        "pageTitle" : {
          "type" : "string",
          "description" : "Title"
        },
        "pageURI" : {
          "type" : "string",
          "description" : "api.pages.dto.uri"
        },
        "parentPageCode" : {
          "type" : "string",
          "description" : "Parent page code"
        }
      }
    },
    "PageBreadcrumbCollectionResponse" : {
      "type" : "object",
      "properties" : {
        "items" : {
          "type" : "array",
          "items" : {
            "$ref" : "#/definitions/PageBreadcrumb"
          }
        },
        "hasNext" : {
          "type" : "boolean",
          "readOnly" : true
        }
      }
    },
    "PageCollectionResponse" : {
      "type" : "object",
      "properties" : {
        "items" : {
          "type" : "array",
          "items" : {
            "$ref" : "#/definitions/Page"
          }
        },
        "hasNext" : {
          "type" : "boolean",
          "readOnly" : true
        }
      }
    },
    "PageCreate" : {
      "type" : "object",
      "required" : [ "code", "description", "tenantId", "title" ],
      "properties" : {
        "tenantId" : {
          "type" : "integer",
          "format" : "int64",
          "description" : "company tenant"
        },
        "code" : {
          "type" : "string",
          "description" : "page code"
        },
        "title" : {
          "type" : "string",
          "description" : "page title"
        },
        "description" : {
          "type" : "string",
          "description" : "page description"
        },
        "hidden" : {
          "type" : "boolean",
          "description" : "hidden page"
        },
        "editable" : {
          "type" : "boolean",
          "description" : "editable page"
        },
        "auth" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "page authentication",
          "enum" : [ 0, 1 ]
        },
        "layoutId" : {
          "type" : "integer",
          "format" : "int64",
          "description" : "page layout"
        },
        "parentPage" : {
          "type" : "integer",
          "format" : "int64",
          "description" : "parent page"
        },
        "permissions" : {
          "type" : "array",
          "description" : "page permissions",
          "items" : {
            "$ref" : "#/definitions/Permission"
          }
        },
        "iconFont" : {
          "type" : "string",
          "description" : "icon font"
        },
        "pageIcon" : {
          "type" : "string",
          "description" : "page icon"
        },
        "enabledChildren" : {
          "type" : "boolean",
          "description" : "Enable sub-pages"
        },
        "enablePathParam" : {
          "type" : "boolean",
          "description" : "Enable pathparam"
        },
        "enableMobileApp" : {
          "type" : "boolean",
          "description" : "Enable mobile app"
        },
        "displayOrder" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Viewing order"
        },
        "internalPage" : {
          "type" : "boolean",
          "description" : "Internal page"
        },
        "disableChildLevel" : {
          "type" : "boolean",
          "description" : "Hide sub-pages in sub-menu"
        },
        "menuGroup" : {
          "type" : "boolean",
          "description" : "Group menu"
        },
        "enable" : {
          "type" : "boolean",
          "description" : "Enabled"
        },
        "friendlyURL" : {
          "type" : "string",
          "description" : "Friendly URL"
        }
      }
    },
    "PageDTOPatch" : {
      "properties" : {
        "op" : {
          "type" : "string",
          "enum" : [ "ADD", "REMOVE", "REPLACE", "MOVE", "COPY", "TEST" ]
        },
        "from" : {
          "type" : "string"
        },
        "path" : {
          "type" : "string"
        },
        "value" : {
          "type" : "string"
        }
      },
      "example" : [ {
        "op" : "replace",
        "path" : "/layout",
        "value" : "test"
      }, {
        "op" : "replace",
        "path" : "/theme",
        "value" : "test"
      }, {
        "op" : "replace",
        "path" : "/title",
        "value" : "test"
      } ]
    },
    "PageDuplicate" : {
      "type" : "object",
      "required" : [ "applyConfiguration", "code", "title" ],
      "properties" : {
        "title" : {
          "type" : "string",
          "description" : "New page title"
        },
        "code" : {
          "type" : "string",
          "description" : "New page code"
        },
        "applyConfiguration" : {
          "type" : "boolean",
          "description" : "Apply the same settings of the original page"
        }
      }
    },
    "PageLastEditUserResponse" : {
      "type" : "object",
      "properties" : {
        "lastEditUser" : {
          "type" : "boolean"
        }
      }
    },
    "PageMobile" : {
      "type" : "object",
      "properties" : {
        "code" : {
          "type" : "string"
        },
        "title" : {
          "type" : "string"
        },
        "mobileEnabled" : {
          "type" : "boolean"
        },
        "widgets" : {
          "type" : "array",
          "items" : {
            "$ref" : "#/definitions/PageWidgetMobile"
          }
        }
      }
    },
    "PagePublish" : {
      "type" : "object",
      "required" : [ "description" ],
      "properties" : {
        "description" : {
          "type" : "string",
          "description" : "Description of the published version"
        }
      }
    },
    "PageUser" : {
      "type" : "object",
      "properties" : {
        "id" : {
          "type" : "integer",
          "format" : "int64",
          "description" : "User ID"
        },
        "fullName" : {
          "type" : "string",
          "description" : "User name"
        },
        "login" : {
          "type" : "string",
          "description" : "Login"
        }
      }
    },
    "PageVersion" : {
      "type" : "object",
      "properties" : {
        "version" : {
          "type" : "integer",
          "format" : "int64",
          "description" : "Page version"
        },
        "modifiedDate" : {
          "type" : "string",
          "format" : "date-time",
          "description" : "Change date"
        },
        "versionDescription" : {
          "type" : "string",
          "description" : "Description of the change"
        },
        "userName" : {
          "type" : "string",
          "description" : "Name of user who published version"
        },
        "layoutTitle" : {
          "type" : "string",
          "description" : "Layout title"
        }
      }
    },
    "PageVersionCollectionResponse" : {
      "type" : "object",
      "properties" : {
        "items" : {
          "type" : "array",
          "items" : {
            "$ref" : "#/definitions/PageVersion"
          }
        },
        "hasNext" : {
          "type" : "boolean",
          "readOnly" : true
        }
      }
    },
    "PageVersionRestore" : {
      "type" : "object",
      "required" : [ "version" ],
      "properties" : {
        "version" : {
          "type" : "integer",
          "format" : "int64",
          "description" : "Page version"
        }
      }
    },
    "PageWidget" : {
      "type" : "object",
      "properties" : {
        "id" : {
          "type" : "integer",
          "format" : "int64",
          "description" : "Id"
        },
        "slot" : {
          "type" : "string",
          "description" : "Slot"
        },
        "code" : {
          "type" : "string",
          "description" : "Widget Code"
        },
        "order" : {
          "type" : "integer",
          "format" : "int64",
          "description" : "Order"
        },
        "showTitle" : {
          "type" : "boolean",
          "description" : "Show title"
        },
        "systemWidget" : {
          "type" : "boolean",
          "description" : "System widget"
        },
        "enabledMobileApp" : {
          "type" : "boolean",
          "description" : "Enable for Mobile"
        }
      }
    },
    "PageWidgetCreate" : {
      "type" : "object",
      "required" : [ "slot", "widgetCode" ],
      "properties" : {
        "slot" : {
          "type" : "string",
          "description" : "Slot"
        },
        "widgetCode" : {
          "type" : "string",
          "description" : "Widget Code"
        }
      }
    },
    "PageWidgetMobile" : {
      "type" : "object",
      "properties" : {
        "id" : {
          "type" : "integer",
          "format" : "int64"
        },
        "slot" : {
          "type" : "string"
        },
        "order" : {
          "type" : "integer",
          "format" : "int64"
        },
        "code" : {
          "type" : "string"
        },
        "mobileEnabled" : {
          "type" : "boolean"
        }
      }
    },
    "Permission" : {
      "type" : "object",
      "properties" : {
        "permission" : {
          "type" : "string",
          "description" : "Permission"
        },
        "description" : {
          "type" : "string",
          "description" : "Description"
        },
        "resource" : {
          "type" : "string",
          "description" : "Resource"
        },
        "role" : {
          "type" : "string",
          "description" : "Role Code"
        },
        "user" : {
          "type" : "string",
          "description" : "User Login"
        },
        "group" : {
          "type" : "string",
          "description" : "Group Code"
        }
      }
    },
    "PermissionCollectionResponse" : {
      "type" : "object",
      "properties" : {
        "items" : {
          "type" : "array",
          "items" : {
            "$ref" : "#/definitions/Permission"
          }
        },
        "hasNext" : {
          "type" : "boolean",
          "readOnly" : true
        }
      }
    },
    "ResponsiveThemeStatus" : {
      "type" : "object",
      "properties" : {
        "enabled" : {
          "type" : "boolean",
          "description" : "Enabled"
        }
      }
    },
    "Theme" : {
      "type" : "object",
      "properties" : {
        "id" : {
          "type" : "integer",
          "format" : "int64",
          "description" : "ID"
        },
        "code" : {
          "type" : "string",
          "description" : "Code"
        },
        "title" : {
          "type" : "string",
          "description" : "Title"
        },
        "description" : {
          "type" : "string",
          "description" : "Description"
        }
      }
    },
    "ThemeCollectionResponse" : {
      "type" : "object",
      "properties" : {
        "items" : {
          "type" : "array",
          "items" : {
            "$ref" : "#/definitions/Theme"
          }
        },
        "hasNext" : {
          "type" : "boolean",
          "readOnly" : true
        }
      }
    },
    "ThemePreferences" : {
      "type" : "object",
      "properties" : {
        "brandColor" : {
          "type" : "string",
          "description" : "Brand color"
        },
        "logoImageURL" : {
          "type" : "string",
          "description" : "Company logo"
        },
        "logoDarkImageURL" : {
          "type" : "string",
          "description" : "api.themes.preferences.dto.logoDarkImageURL"
        },
        "faviconURL" : {
          "type" : "string",
          "description" : "Company favicon"
        },
        "bgImageURL" : {
          "type" : "string",
          "description" : "Company background image"
        },
        "headerBgImageURL" : {
          "type" : "string",
          "description" : "Company header background image"
        },
        "base64LogoImage" : {
          "type" : "string",
          "description" : "Company logo in Base64"
        },
        "base64LogoDarkImage" : {
          "type" : "string",
          "description" : "api.themes.preferences.dto.logoDarkImage.b64"
        },
        "base64Favicon" : {
          "type" : "string",
          "description" : "Company favicon in Base64"
        },
        "base64BgImage" : {
          "type" : "string",
          "description" : "Background image in Base64"
        },
        "base64HeaderBgImage" : {
          "type" : "string",
          "description" : "Header background image in Base64"
        },
        "deleteImage" : {
          "type" : "boolean",
          "description" : "Whether or not to delete the company logo"
        },
        "deleteDarkImage" : {
          "type" : "boolean",
          "description" : "api.themes.preferences.dto.delete.dark.image"
        },
        "deleteFavicon" : {
          "type" : "boolean",
          "description" : "Whether or not to delete the company favicon"
        },
        "deleteBgImage" : {
          "type" : "boolean",
          "description" : "Whether or not to delete the company background image"
        },
        "deleteHeaderBgImage" : {
          "type" : "boolean",
          "description" : "Whether or not to delete the company header background image"
        },
        "responsiveBgColor" : {
          "type" : "string",
          "description" : "Background Color - Responsive Theme"
        },
        "responsiveBgContrastColor" : {
          "type" : "string",
          "description" : "Background contrast color - Responsive Theme"
        },
        "responsiveMenuBgColor" : {
          "type" : "string",
          "description" : "Menu background color - Responsive Theme"
        },
        "responsiveMenuBgHoverColor" : {
          "type" : "string",
          "description" : "Menu hover background color - Responsive Theme"
        },
        "responsiveMenuActiveColor" : {
          "type" : "string",
          "description" : "Active menu color - Responsive Theme"
        },
        "responsiveMenuActionColor" : {
          "type" : "string",
          "description" : "Menu action color - Responsive Theme"
        },
        "responsiveMenuIconColor" : {
          "type" : "string",
          "description" : "Menu icon color - Responsive Theme"
        },
        "responsiveHeaderBgColor" : {
          "type" : "string",
          "description" : "Header background color - Responsive Theme"
        },
        "responsiveHeaderActionColor" : {
          "type" : "string",
          "description" : "Header action color - Responsive Theme"
        },
        "responsiveBrandColor" : {
          "type" : "string",
          "description" : "Brand Color – Responsive Theme"
        },
        "responsiveBrandLightestColor" : {
          "type" : "string",
          "description" : "api.themes.preferences.dto.resp.brand.color.lightest"
        },
        "responsiveBrandLighterColor" : {
          "type" : "string",
          "description" : "api.themes.preferences.dto.resp.brand.color.lighter"
        },
        "responsiveBrandLightColor" : {
          "type" : "string",
          "description" : "api.themes.preferences.dto.resp.brand.color.light"
        },
        "responsiveBrandBaseColor" : {
          "type" : "string",
          "description" : "api.themes.preferences.dto.resp.brand.color.base"
        },
        "responsiveBrandDarkColor" : {
          "type" : "string",
          "description" : "api.themes.preferences.dto.resp.brand.color.dark"
        },
        "responsiveBrandDarkerColor" : {
          "type" : "string",
          "description" : "api.themes.preferences.dto.resp.brand.color.darker"
        },
        "responsiveBrandDarkestColor" : {
          "type" : "string",
          "description" : "api.themes.preferences.dto.resp.brand.color.darkest"
        },
        "responsiveBgImage" : {
          "type" : "string",
          "description" : "Background image - Responsive Theme"
        },
        "responsiveBgImageRepeat" : {
          "type" : "string",
          "description" : "Repeat background image - Responsive Theme"
        },
        "responsiveBgImageCover" : {
          "type" : "string",
          "description" : "Background image covering the entire area - Responsive Theme"
        },
        "responsiveHeaderBgImage" : {
          "type" : "string",
          "description" : "Header background image - Responsive Theme"
        },
        "responsiveHeaderBgImageRepeat" : {
          "type" : "string",
          "description" : "Repeat header background image - Responsive Theme"
        },
        "responsiveHeaderBgImageCover" : {
          "type" : "string",
          "description" : "Background image covering the entire area - Responsive Theme"
        }
      }
    },
    "UpdatePage" : {
      "type" : "object",
      "required" : [ "title" ],
      "properties" : {
        "title" : {
          "type" : "string",
          "description" : "Title"
        },
        "description" : {
          "type" : "string",
          "description" : "Description"
        },
        "pageIcon" : {
          "type" : "string",
          "description" : "Icon"
        },
        "pageIconBase64" : {
          "type" : "string",
          "description" : "Icon in base 64"
        },
        "iconFont" : {
          "type" : "string",
          "description" : "api.update.page.dto.icon.font"
        },
        "pageKey" : {
          "description" : "Page keys",
          "$ref" : "#/definitions/WCMPageKey"
        },
        "parent" : {
          "type" : "integer",
          "format" : "int64",
          "description" : "Parent page Id"
        },
        "authorization" : {
          "type" : "string",
          "description" : "Authorization",
          "enum" : [ "PUBLIC", "AUTHENTICATED" ]
        },
        "permissions" : {
          "type" : "array",
          "description" : "Permissions",
          "items" : {
            "$ref" : "#/definitions/Permission"
          }
        },
        "displayOrder" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Display order"
        },
        "enabledChildren" : {
          "type" : "boolean",
          "description" : "Enable children"
        },
        "enabledPathParam" : {
          "type" : "boolean",
          "description" : "Path param"
        },
        "enabledMobileApp" : {
          "type" : "boolean",
          "description" : "Enable on mobile application"
        },
        "editable" : {
          "type" : "boolean",
          "description" : "editable"
        },
        "disableChildLevel" : {
          "type" : "boolean",
          "description" : "Hide sub-pages in sub-menu"
        },
        "menuGroup" : {
          "type" : "boolean",
          "description" : "group menu"
        },
        "iconUploaded" : {
          "type" : "boolean",
          "description" : "Icon upload"
        },
        "hidden" : {
          "type" : "boolean",
          "description" : "Hides"
        },
        "friendlyURL" : {
          "type" : "string",
          "description" : "Custom URL"
        },
        "internalFriendlyURL" : {
          "type" : "boolean"
        }
      }
    },
    "WCMPageKey" : {
      "type" : "object",
      "properties" : {
        "id" : {
          "type" : "integer",
          "format" : "int64",
          "description" : "Page Id"
        },
        "code" : {
          "type" : "string",
          "description" : "Page code"
        }
      }
    }
  }
}
```
