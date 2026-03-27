# swagger.json

> **Fonte:** [https://api.fluig.com/latest/admin/swagger-ui/swagger.json](https://api.fluig.com/latest/admin/swagger-ui/swagger.json)

---

```
{
  "swagger" : "2.0",
  "info" : {
    "description" : "Com a API Admin você pode gerir grupos, papéis e usuários.",
    "version" : "v1",
    "title" : "Admin"
  },
  "basePath" : "/admin/api",
  "tags" : [ {
    "name" : "Groups"
  }, {
    "name" : "Roles"
  }, {
    "name" : "Users"
  } ],
  "paths" : {
    "/v1/groups" : {
      "get" : {
        "tags" : [ "Groups" ],
        "summary" : "Returns list of groups",
        "description" : "",
        "operationId" : "findGroups",
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "description",
          "in" : "query",
          "description" : "Group description",
          "required" : false,
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
          "description" : "The number of items to be returned in each page.",
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
          "description" : "Order by field",
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
              "$ref" : "#/definitions/GroupCollectionResponse"
            }
          },
          "400" : {
            "description" : "An error occurred trying to list groups",
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
        "tags" : [ "Groups" ],
        "summary" : "Add new group",
        "description" : "",
        "operationId" : "create",
        "consumes" : [ "application/json; charset=UTF-8" ],
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "in" : "body",
          "name" : "Group data",
          "required" : true,
          "schema" : {
            "$ref" : "#/definitions/GroupCreate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "Ok",
            "schema" : {
              "$ref" : "#/definitions/GroupFind"
            }
          },
          "400" : {
            "description" : "Failed to create group, see response for more details",
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
    "/v1/groups/{code}" : {
      "get" : {
        "tags" : [ "Groups" ],
        "summary" : "Returns list of users associated to the group",
        "description" : "",
        "operationId" : "findGroupByCode",
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "code",
          "in" : "path",
          "description" : "Group code",
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
              "$ref" : "#/definitions/GroupFind"
            }
          },
          "400" : {
            "description" : "An error occurred trying to filter group by code",
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
            "description" : "Company not found",
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
        "tags" : [ "Groups" ],
        "summary" : "Update group information",
        "description" : "",
        "operationId" : "update",
        "consumes" : [ "application/json; charset=UTF-8" ],
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "code",
          "in" : "path",
          "description" : "Group code",
          "required" : true,
          "type" : "string"
        }, {
          "in" : "body",
          "name" : "body",
          "description" : "Group data",
          "required" : true,
          "schema" : {
            "$ref" : "#/definitions/GroupUpdate"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "Ok",
            "schema" : {
              "$ref" : "#/definitions/GroupFind"
            }
          },
          "400" : {
            "description" : "An error occurred trying to update the group",
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
        "tags" : [ "Groups" ],
        "summary" : "Delete group with the entered code",
        "description" : "",
        "operationId" : "delete",
        "parameters" : [ {
          "name" : "code",
          "in" : "path",
          "description" : "Group code",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "204" : {
            "description" : "Ok"
          },
          "400" : {
            "description" : "An error occurred trying to delete the group",
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
            "description" : "Group not found",
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
    "/v1/groups/{code}/groups" : {
      "get" : {
        "tags" : [ "Groups" ],
        "summary" : "Returns list of subgroups",
        "description" : "",
        "operationId" : "findChildGroupsByParentCode",
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "code",
          "in" : "path",
          "description" : "Group code",
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
          "description" : "The number of items to be returned in each page.",
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
          "description" : "Order by field",
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
              "$ref" : "#/definitions/GroupCollectionResponse"
            }
          },
          "400" : {
            "description" : "An error occurred trying to list subgroups",
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
            "description" : "Sub-groups list not found",
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
    "/v1/groups/{code}/roles" : {
      "get" : {
        "tags" : [ "Groups" ],
        "summary" : "Returns list of roles related to the group",
        "description" : "",
        "operationId" : "findRolesOfGroup",
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "code",
          "in" : "path",
          "description" : "Group code",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "description",
          "in" : "query",
          "description" : "Group description",
          "required" : false,
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
          "description" : "The number of items to be returned in each page.",
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
          "description" : "Order by field",
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
              "$ref" : "#/definitions/RoleCollectionResponse"
            }
          },
          "400" : {
            "description" : "An error occurred trying to list roles",
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
            "description" : "Group not found",
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
        "tags" : [ "Groups" ],
        "summary" : "Relate role to group",
        "description" : "",
        "operationId" : "createUserRole",
        "consumes" : [ "application/json; charset=UTF-8" ],
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "code",
          "in" : "path",
          "description" : "Group code",
          "required" : true,
          "type" : "string"
        }, {
          "in" : "body",
          "name" : "body",
          "description" : "Role data",
          "required" : true,
          "schema" : {
            "$ref" : "#/definitions/AddRole"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "Ok",
            "schema" : {
              "$ref" : "#/definitions/UserFind"
            }
          },
          "400" : {
            "description" : "An error occurred trying to relate role to the group",
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
            "description" : "Group not found",
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
    "/v1/groups/{code}/roles/{role}" : {
      "delete" : {
        "tags" : [ "Groups" ],
        "summary" : "Delete role from the group",
        "description" : "",
        "operationId" : "removeRoleFromGroup",
        "parameters" : [ {
          "name" : "code",
          "in" : "path",
          "description" : "Group code",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "role",
          "in" : "path",
          "description" : "Role code",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "204" : {
            "description" : "Ok"
          },
          "400" : {
            "description" : "An error occurred trying to delete role from the group",
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
            "description" : "admin.api.group.notfound ",
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
    "/v1/groups/{code}/users" : {
      "get" : {
        "tags" : [ "Groups" ],
        "summary" : "Returns list of users associated to the group",
        "description" : "",
        "operationId" : "findUsersByGroup",
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "code",
          "in" : "path",
          "description" : "Group code",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "userCode",
          "in" : "query",
          "description" : "User code",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "login",
          "in" : "query",
          "description" : "Login",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "email",
          "in" : "query",
          "description" : "Email",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "firstName",
          "in" : "query",
          "description" : "First name",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "lastName",
          "in" : "query",
          "description" : "Last name",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "fullName",
          "in" : "query",
          "description" : "Full Name",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "showInactive",
          "in" : "query",
          "description" : "Show inactive users",
          "required" : false,
          "type" : "boolean",
          "default" : false
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
          "description" : "The number of items to be returned in each page.",
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
          "description" : "Order by field",
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
              "$ref" : "#/definitions/UserCollectionResponse"
            }
          },
          "400" : {
            "description" : "An error occurred trying to list users associated to the group",
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
            "description" : "List of associated users not found",
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
        "tags" : [ "Groups" ],
        "summary" : "Add user to group",
        "description" : "",
        "operationId" : "addUserToGroup",
        "consumes" : [ "application/json; charset=UTF-8" ],
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "code",
          "in" : "path",
          "description" : "Group code",
          "required" : true,
          "type" : "string"
        }, {
          "in" : "body",
          "name" : "body",
          "description" : "User data",
          "required" : true,
          "schema" : {
            "$ref" : "#/definitions/AddUser"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "Ok",
            "schema" : {
              "$ref" : "#/definitions/UserFind"
            }
          },
          "400" : {
            "description" : "An error occurred trying to add the user to the group",
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
            "description" : "Group not found",
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
    "/v1/groups/{code}/users/{login}" : {
      "delete" : {
        "tags" : [ "Groups" ],
        "summary" : "Remove the user from the group",
        "description" : "",
        "operationId" : "removeUserFromGroup",
        "parameters" : [ {
          "name" : "code",
          "in" : "path",
          "description" : "Group code",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "login",
          "in" : "path",
          "description" : "Login",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "204" : {
            "description" : "Ok"
          },
          "400" : {
            "description" : "An error occurred trying to remove the user from the group",
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
            "description" : "Group not found",
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
    "/v1/roles" : {
      "get" : {
        "tags" : [ "Roles" ],
        "summary" : "List roles",
        "description" : "",
        "operationId" : "findRoles",
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "description",
          "in" : "query",
          "description" : "Role description",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "pattern",
          "in" : "query",
          "description" : "Role description or code",
          "required" : false,
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
          "description" : "The number of items to be returned in each page.",
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
          "description" : "Order by field",
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
              "$ref" : "#/definitions/RoleCollectionResponse"
            }
          },
          "400" : {
            "description" : "admin.api.role.find.failed ",
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
        "tags" : [ "Roles" ],
        "summary" : "Add new role",
        "description" : "",
        "operationId" : "create",
        "consumes" : [ "application/json; charset=UTF-8" ],
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "in" : "body",
          "name" : "body",
          "description" : "Role data",
          "required" : true,
          "schema" : {
            "$ref" : "#/definitions/RoleCreate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "Ok",
            "schema" : {
              "$ref" : "#/definitions/RoleFind"
            }
          },
          "400" : {
            "description" : "An error occurred trying to add a new role",
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
    "/v1/roles/{code}" : {
      "get" : {
        "tags" : [ "Roles" ],
        "summary" : "List roles by code",
        "description" : "",
        "operationId" : "findByRoleCode",
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "code",
          "in" : "path",
          "description" : "Role code",
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
              "$ref" : "#/definitions/RoleFind"
            }
          },
          "400" : {
            "description" : "admin.api.role.find.by.code.failed ",
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
            "description" : "Role not found",
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
        "tags" : [ "Roles" ],
        "summary" : "Update role information",
        "description" : "",
        "operationId" : "update",
        "consumes" : [ "application/json; charset=UTF-8" ],
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "code",
          "in" : "path",
          "description" : "Role code",
          "required" : true,
          "type" : "string"
        }, {
          "in" : "body",
          "name" : "body",
          "description" : "Role data",
          "required" : true,
          "schema" : {
            "$ref" : "#/definitions/RoleUpdate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "Ok",
            "schema" : {
              "$ref" : "#/definitions/RoleFind"
            }
          },
          "400" : {
            "description" : "An error occurred trying to update the role",
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
        "tags" : [ "Roles" ],
        "summary" : "Delete role",
        "description" : "",
        "operationId" : "deleteRole",
        "parameters" : [ {
          "name" : "code",
          "in" : "path",
          "description" : "The role identifier code",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "204" : {
            "description" : "Ok"
          },
          "400" : {
            "description" : "An error occurred trying to delete the role",
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
            "description" : "Role not found",
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
    "/v1/roles/{code}/users" : {
      "get" : {
        "tags" : [ "Roles" ],
        "summary" : "Returns list of users related to the role",
        "description" : "",
        "operationId" : "findUsersByRole",
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "code",
          "in" : "path",
          "description" : "Role code",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "userCode",
          "in" : "query",
          "description" : "User code",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "login",
          "in" : "query",
          "description" : "Login",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "email",
          "in" : "query",
          "description" : "Email",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "firstName",
          "in" : "query",
          "description" : "First name",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "lastName",
          "in" : "query",
          "description" : "Last name",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "fullName",
          "in" : "query",
          "description" : "Full Name",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "showInactive",
          "in" : "query",
          "description" : "Show inactive users",
          "required" : false,
          "type" : "boolean",
          "default" : false
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
          "description" : "The number of items to be returned in each page.",
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
          "description" : "Order by field",
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
              "$ref" : "#/definitions/UserCollectionResponse"
            }
          },
          "400" : {
            "description" : "An error occurred listing users related to the role",
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
            "description" : "Role not found",
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
        "tags" : [ "Roles" ],
        "summary" : "Relate user to role",
        "description" : "",
        "operationId" : "addUserToRole",
        "consumes" : [ "application/json; charset=UTF-8" ],
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "code",
          "in" : "path",
          "description" : "Role code",
          "required" : true,
          "type" : "string"
        }, {
          "in" : "body",
          "name" : "body",
          "description" : "User data",
          "required" : true,
          "schema" : {
            "$ref" : "#/definitions/AddUser"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "Ok",
            "schema" : {
              "$ref" : "#/definitions/UserFind"
            }
          },
          "400" : {
            "description" : "An error occurred trying to add a user to the role",
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
            "description" : "Role not found",
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
    "/v1/roles/{code}/users/{login}" : {
      "delete" : {
        "tags" : [ "Roles" ],
        "summary" : "Remove the user from the rule",
        "description" : "",
        "operationId" : "removeUserFromRole",
        "parameters" : [ {
          "name" : "code",
          "in" : "path",
          "description" : "Role code",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "login",
          "in" : "path",
          "description" : "Login",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "204" : {
            "description" : "Ok"
          },
          "400" : {
            "description" : "An error occurred trying to remove the user from the role",
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
            "description" : "Role not found",
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
    "/v1/users" : {
      "get" : {
        "tags" : [ "Users" ],
        "summary" : "Returns list of users",
        "description" : "",
        "operationId" : "findUsers",
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "code",
          "in" : "query",
          "description" : "User code",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "email",
          "in" : "query",
          "description" : "Email",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "firstName",
          "in" : "query",
          "description" : "First name",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "lastName",
          "in" : "query",
          "description" : "Last name",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "fullName",
          "in" : "query",
          "description" : "Full Name",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "pattern",
          "in" : "query",
          "description" : "User name or code",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "role",
          "in" : "query",
          "description" : "Role code",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "genericId",
          "in" : "query",
          "description" : "Generic Identifier",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "showInactive",
          "in" : "query",
          "description" : "Show inactive users",
          "required" : false,
          "type" : "boolean",
          "default" : false
        }, {
          "name" : "currentUser",
          "in" : "query",
          "description" : "Use current user data?",
          "required" : false,
          "type" : "boolean",
          "default" : false
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
          "description" : "The number of items to be returned in each page.",
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
          "description" : "Order by field",
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
              "$ref" : "#/definitions/UserCollectionResponse"
            }
          },
          "400" : {
            "description" : "An error occurred trying to list users",
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
        "tags" : [ "Users" ],
        "summary" : "Add new user",
        "description" : "",
        "operationId" : "createUser",
        "consumes" : [ "application/json; charset=UTF-8" ],
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "in" : "body",
          "name" : "User data",
          "required" : true,
          "schema" : {
            "$ref" : "#/definitions/UserCreate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "Ok",
            "schema" : {
              "$ref" : "#/definitions/UserFind"
            }
          },
          "400" : {
            "description" : "An error occurred trying to add a new user",
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
    "/v1/users/updateUserData" : {
      "post" : {
        "tags" : [ "Users" ],
        "summary" : "Update user data properties",
        "description" : "",
        "operationId" : "updateUserData",
        "consumes" : [ "application/json; charset=UTF-8" ],
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "in" : "body",
          "name" : "User data",
          "required" : true,
          "schema" : {
            "$ref" : "#/definitions/UserDataUpdate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "Ok",
            "schema" : {
              "$ref" : "#/definitions/UserDataUpdate"
            }
          },
          "401" : {
            "description" : "User is not authenticated",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          },
          "403" : {
            "description" : "The user is authenticated but is not authorized to perform the operation",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          },
          "404" : {
            "description" : "User not found!",
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
    "/v1/users/{login}" : {
      "get" : {
        "tags" : [ "Users" ],
        "summary" : "Filter users by login",
        "description" : "",
        "operationId" : "findUserByLogin",
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "login",
          "in" : "path",
          "description" : "Login",
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
              "$ref" : "#/definitions/UserFind"
            }
          },
          "400" : {
            "description" : "An error occurred trying to filter users by login",
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
            "description" : "User not found!",
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
        "tags" : [ "Users" ],
        "summary" : "Edit user",
        "description" : "",
        "operationId" : "updateUser",
        "consumes" : [ "application/json; charset=UTF-8" ],
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "login",
          "in" : "path",
          "description" : "Login",
          "required" : true,
          "type" : "string"
        }, {
          "in" : "body",
          "name" : "User data",
          "required" : true,
          "schema" : {
            "$ref" : "#/definitions/UserUpdate"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "Ok",
            "schema" : {
              "$ref" : "#/definitions/UserFind"
            }
          },
          "400" : {
            "description" : "An error occurred trying to edit user",
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
      "patch" : {
        "tags" : [ "Users" ],
        "summary" : "Update a user property",
        "description" : "",
        "operationId" : "patchUser",
        "consumes" : [ "application/json; charset=UTF-8" ],
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "login",
          "in" : "path",
          "description" : "The user identifier login",
          "required" : true,
          "type" : "string"
        }, {
          "in" : "body",
          "name" : "The user to be updated",
          "required" : true,
          "schema" : {
            "type" : "array",
            "items" : {
              "$ref" : "#/definitions/UserUpdateDTOPatch"
            }
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "$ref" : "#/definitions/UserFind"
            }
          },
          "400" : {
            "description" : "Failed to edit user, see response for more details",
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
            "description" : "The user is authenticated but is not authorized to perform the operation",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          },
          "404" : {
            "description" : "Users not found",
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
    "/v1/users/{login}/activate" : {
      "post" : {
        "tags" : [ "Users" ],
        "summary" : "Enable user",
        "description" : "",
        "operationId" : "activateUser",
        "consumes" : [ "application/json; charset=UTF-8" ],
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "login",
          "in" : "path",
          "description" : "Login",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "Ok"
          },
          "401" : {
            "description" : "User is not authenticated",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          },
          "404" : {
            "description" : "User not found!",
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
    "/v1/users/{login}/deactivate" : {
      "post" : {
        "tags" : [ "Users" ],
        "summary" : "Deactivate user",
        "description" : "",
        "operationId" : "deactivateUser",
        "consumes" : [ "application/json; charset=UTF-8" ],
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "login",
          "in" : "path",
          "description" : "Login",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "Ok"
          },
          "401" : {
            "description" : "User is not authenticated",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          },
          "404" : {
            "description" : "User not found!",
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
    "/v1/users/{login}/groups" : {
      "get" : {
        "tags" : [ "Users" ],
        "summary" : "Returns list of user groups",
        "description" : "",
        "operationId" : "findGroupsOfUser",
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "login",
          "in" : "path",
          "description" : "Login",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "returnAll",
          "in" : "query",
          "description" : "Returns all groups, discarding paging",
          "required" : false,
          "type" : "boolean",
          "default" : false
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
          "description" : "The number of items to be returned in each page.",
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
          "description" : "Order by field",
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
              "$ref" : "#/definitions/GroupCollectionResponse"
            }
          },
          "400" : {
            "description" : "An error occurred trying to list user groups",
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
            "description" : "User not found!",
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
        "tags" : [ "Users" ],
        "summary" : "Add user to a group",
        "description" : "",
        "operationId" : "createUserGroup",
        "consumes" : [ "application/json; charset=UTF-8" ],
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "login",
          "in" : "path",
          "description" : "Login",
          "required" : true,
          "type" : "string"
        }, {
          "in" : "body",
          "name" : "body",
          "description" : "Group data",
          "required" : true,
          "schema" : {
            "$ref" : "#/definitions/AddToUser"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "Ok",
            "schema" : {
              "$ref" : "#/definitions/UserFind"
            }
          },
          "400" : {
            "description" : "An error occurred trying to add user to a group",
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
            "description" : "User not found!",
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
    "/v1/users/{login}/groups/{code}" : {
      "delete" : {
        "tags" : [ "Users" ],
        "summary" : "Remove the user from the group",
        "description" : "",
        "operationId" : "removeUserFromGroup",
        "parameters" : [ {
          "name" : "login",
          "in" : "path",
          "description" : "Login",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "code",
          "in" : "path",
          "description" : "Group code",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "204" : {
            "description" : "Ok"
          },
          "400" : {
            "description" : "An error occurred trying to remove the user from the entered group",
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
            "description" : "User not found!",
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
    "/v1/users/{login}/picture" : {
      "get" : {
        "tags" : [ "Users" ],
        "summary" : "Returns user image by login",
        "description" : "",
        "operationId" : "getPictureUser",
        "produces" : [ "image/png", "image/jpg", "image/jpeg" ],
        "parameters" : [ {
          "name" : "login",
          "in" : "path",
          "description" : "Login",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "width",
          "in" : "query",
          "description" : "Image width",
          "required" : false,
          "type" : "integer",
          "format" : "int32",
          "enum" : [ 34, 60, 100, 140 ]
        } ],
        "responses" : {
          "200" : {
            "description" : "Ok"
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
    "/v1/users/{login}/roles" : {
      "get" : {
        "tags" : [ "Users" ],
        "summary" : "Returns list of roles related to the user",
        "description" : "",
        "operationId" : "findRolesOfUser",
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "login",
          "in" : "path",
          "description" : "Login",
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
          "description" : "The number of items to be returned in each page.",
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
          "description" : "Order by field",
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
              "$ref" : "#/definitions/RoleCollectionResponse"
            }
          },
          "400" : {
            "description" : "An error occurred trying to list user roles",
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
            "description" : "User not found!",
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
        "tags" : [ "Users" ],
        "summary" : "Add role to user",
        "description" : "",
        "operationId" : "createUserRole",
        "consumes" : [ "application/json; charset=UTF-8" ],
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "login",
          "in" : "path",
          "description" : "Login",
          "required" : true,
          "type" : "string"
        }, {
          "in" : "body",
          "name" : "body",
          "description" : "Role data",
          "required" : true,
          "schema" : {
            "$ref" : "#/definitions/AddToUser"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "Ok",
            "schema" : {
              "$ref" : "#/definitions/UserFind"
            }
          },
          "400" : {
            "description" : "An error occurred trying to add a new role to the user",
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
            "description" : "User not found!",
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
    "/v1/users/{login}/roles/{code}" : {
      "delete" : {
        "tags" : [ "Users" ],
        "summary" : "Remove the user from the rule",
        "description" : "",
        "operationId" : "removeUserFromRole",
        "parameters" : [ {
          "name" : "login",
          "in" : "path",
          "description" : "Login",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "code",
          "in" : "path",
          "description" : "Role code",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "204" : {
            "description" : "Ok"
          },
          "400" : {
            "description" : "An error occurred trying to remove the user from the entered role",
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
            "description" : "User not found!",
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
    "AddRole" : {
      "type" : "object",
      "required" : [ "code" ],
      "properties" : {
        "code" : {
          "type" : "string",
          "description" : "admin.api.add.role.code"
        }
      }
    },
    "AddToUser" : {
      "type" : "object",
      "required" : [ "code" ],
      "properties" : {
        "code" : {
          "type" : "string",
          "description" : "User code"
        }
      }
    },
    "AddUser" : {
      "type" : "object",
      "required" : [ "login" ],
      "properties" : {
        "login" : {
          "type" : "string",
          "description" : "Login"
        }
      }
    },
    "AdditionalData" : {
      "type" : "object",
      "required" : [ "key", "value" ],
      "properties" : {
        "key" : {
          "type" : "string",
          "description" : "Key"
        },
        "value" : {
          "type" : "string",
          "description" : "Value"
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
    "GroupCollectionResponse" : {
      "type" : "object",
      "properties" : {
        "items" : {
          "type" : "array",
          "items" : {
            "$ref" : "#/definitions/GroupFind"
          }
        },
        "hasNext" : {
          "type" : "boolean",
          "readOnly" : true
        }
      }
    },
    "GroupCreate" : {
      "type" : "object",
      "properties" : {
        "code" : {
          "type" : "string",
          "description" : "Group code"
        },
        "description" : {
          "type" : "string",
          "description" : "Group description"
        }
      }
    },
    "GroupFind" : {
      "type" : "object",
      "properties" : {
        "id" : {
          "type" : "integer",
          "format" : "int64",
          "description" : "Group single identifier"
        },
        "tenantId" : {
          "type" : "integer",
          "format" : "int64",
          "description" : "Company single identifier"
        },
        "code" : {
          "type" : "string",
          "description" : "Group code"
        },
        "description" : {
          "type" : "string",
          "description" : "Group description"
        },
        "type" : {
          "type" : "string",
          "description" : "Group type"
        },
        "data" : {
          "type" : "array",
          "items" : {
            "$ref" : "#/definitions/AdditionalData"
          }
        }
      }
    },
    "GroupUpdate" : {
      "type" : "object",
      "required" : [ "description" ],
      "properties" : {
        "description" : {
          "type" : "string",
          "description" : "Group description"
        }
      }
    },
    "RoleCollectionResponse" : {
      "type" : "object",
      "properties" : {
        "items" : {
          "type" : "array",
          "items" : {
            "$ref" : "#/definitions/RoleFind"
          }
        },
        "hasNext" : {
          "type" : "boolean",
          "readOnly" : true
        }
      }
    },
    "RoleCreate" : {
      "type" : "object",
      "required" : [ "code", "description" ],
      "properties" : {
        "code" : {
          "type" : "string",
          "description" : "Role code"
        },
        "description" : {
          "type" : "string",
          "description" : "Role description"
        },
        "data" : {
          "type" : "array",
          "description" : "Additional role information.",
          "items" : {
            "$ref" : "#/definitions/AdditionalData"
          }
        }
      }
    },
    "RoleFind" : {
      "type" : "object",
      "required" : [ "code", "description", "id", "tenantId" ],
      "properties" : {
        "id" : {
          "type" : "integer",
          "format" : "int64",
          "description" : "Role single identifier"
        },
        "tenantId" : {
          "type" : "integer",
          "format" : "int64",
          "description" : "Company single identifier"
        },
        "code" : {
          "type" : "string",
          "description" : "Role code"
        },
        "description" : {
          "type" : "string",
          "description" : "Role description"
        },
        "data" : {
          "type" : "array",
          "items" : {
            "$ref" : "#/definitions/AdditionalData"
          }
        }
      }
    },
    "RoleUpdate" : {
      "type" : "object",
      "required" : [ "description" ],
      "properties" : {
        "description" : {
          "type" : "string",
          "description" : "Role description"
        },
        "data" : {
          "type" : "array",
          "description" : "Additional role information. When informed, replaces all additional information previously registered.",
          "items" : {
            "$ref" : "#/definitions/AdditionalData"
          }
        }
      }
    },
    "ServerInfo" : {
      "type" : "object",
      "properties" : {
        "serverURL" : {
          "type" : "string",
          "description" : "Server URL"
        }
      }
    },
    "TenantInfo" : {
      "type" : "object",
      "properties" : {
        "tenantId" : {
          "type" : "integer",
          "format" : "int64",
          "description" : "Company single identifier"
        },
        "tenantDescription" : {
          "type" : "string",
          "description" : "Company Description"
        },
        "tenantCode" : {
          "type" : "string",
          "description" : "Company Code"
        },
        "tenantUUID" : {
          "type" : "string",
          "description" : "Tenant UUID"
        }
      }
    },
    "UserCollectionResponse" : {
      "type" : "object",
      "properties" : {
        "items" : {
          "type" : "array",
          "items" : {
            "$ref" : "#/definitions/UserFind"
          }
        },
        "hasNext" : {
          "type" : "boolean",
          "readOnly" : true
        }
      }
    },
    "UserCreate" : {
      "type" : "object",
      "required" : [ "code", "email", "firstName", "lastName", "login", "password" ],
      "properties" : {
        "login" : {
          "type" : "string",
          "description" : "Login"
        },
        "code" : {
          "type" : "string",
          "description" : "User code"
        },
        "email" : {
          "type" : "string",
          "description" : "Email"
        },
        "firstName" : {
          "type" : "string",
          "description" : "First name"
        },
        "lastName" : {
          "type" : "string",
          "description" : "Last name"
        },
        "fullName" : {
          "type" : "string",
          "description" : "Full Name"
        },
        "birthDate" : {
          "type" : "string",
          "format" : "date-time",
          "description" : "Date of Birth"
        },
        "password" : {
          "type" : "string",
          "description" : "Password"
        },
        "locationId" : {
          "type" : "integer",
          "format" : "int64",
          "description" : "Location single identifier"
        },
        "data" : {
          "type" : "array",
          "description" : "User additional information",
          "items" : {
            "$ref" : "#/definitions/AdditionalData"
          }
        },
        "idpId" : {
          "type" : "string",
          "description" : "Provisioning single identifier"
        }
      }
    },
    "UserDataUpdate" : {
      "type" : "object",
      "required" : [ "data", "login" ],
      "properties" : {
        "login" : {
          "type" : "string",
          "description" : "Login"
        },
        "data" : {
          "type" : "array",
          "description" : "User additional information",
          "items" : {
            "$ref" : "#/definitions/AdditionalData"
          }
        }
      }
    },
    "UserFind" : {
      "type" : "object",
      "properties" : {
        "id" : {
          "type" : "integer",
          "format" : "int64",
          "description" : "User single identifier"
        },
        "login" : {
          "type" : "string",
          "description" : "Login"
        },
        "code" : {
          "type" : "string",
          "description" : "User code"
        },
        "email" : {
          "type" : "string",
          "description" : "Email"
        },
        "firstName" : {
          "type" : "string",
          "description" : "First name"
        },
        "lastName" : {
          "type" : "string",
          "description" : "Last name"
        },
        "fullName" : {
          "type" : "string",
          "description" : "Full Name"
        },
        "birthDate" : {
          "type" : "string",
          "format" : "date-time",
          "description" : "Date of Birth"
        },
        "idpId" : {
          "type" : "string",
          "description" : "Provisioning single identifier"
        },
        "state" : {
          "type" : "string",
          "description" : "Active"
        },
        "alias" : {
          "type" : "string",
          "description" : "Alias"
        },
        "lastUpdateDate" : {
          "type" : "string",
          "format" : "date-time",
          "description" : "Last update"
        },
        "userUUID" : {
          "type" : "string",
          "description" : "User UUID"
        },
        "tenantInfoDTO" : {
          "$ref" : "#/definitions/TenantInfo"
        },
        "serverInfoDTO" : {
          "$ref" : "#/definitions/ServerInfo"
        },
        "data" : {
          "type" : "array",
          "items" : {
            "$ref" : "#/definitions/AdditionalData"
          }
        },
        "roles" : {
          "type" : "array",
          "items" : {
            "type" : "string"
          }
        },
        "groups" : {
          "type" : "array",
          "items" : {
            "type" : "string"
          }
        }
      }
    },
    "UserUpdate" : {
      "type" : "object",
      "properties" : {
        "email" : {
          "type" : "string",
          "description" : "User e-mail"
        },
        "firstName" : {
          "type" : "string",
          "description" : "User first name"
        },
        "lastName" : {
          "type" : "string",
          "description" : "User last name"
        },
        "fullName" : {
          "type" : "string",
          "description" : "User full name"
        },
        "birthDate" : {
          "type" : "string",
          "format" : "date-time",
          "description" : "User birth date"
        },
        "locationId" : {
          "type" : "integer",
          "format" : "int64",
          "description" : "User location ID"
        },
        "password" : {
          "type" : "string",
          "description" : "User password"
        }
      }
    },
    "UserUpdateDTOPatch" : {
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
        "path" : "/firstName",
        "value" : "test"
      }, {
        "op" : "replace",
        "path" : "/lastName",
        "value" : "test"
      }, {
        "op" : "replace",
        "path" : "/password",
        "value" : "test"
      }, {
        "op" : "replace",
        "path" : "/locationId",
        "value" : "test"
      }, {
        "op" : "replace",
        "path" : "/fullName",
        "value" : "test"
      }, {
        "op" : "replace",
        "path" : "/birthDate",
        "value" : "test"
      }, {
        "op" : "replace",
        "path" : "/email",
        "value" : "test"
      } ]
    }
  }
}
```
