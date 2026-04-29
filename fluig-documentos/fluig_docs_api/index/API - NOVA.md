# latest

> **24 páginas**

---

## Sumário

- [TOTVS Fluig API](latest%2Fadmin%2Fswagger-ui%2Findex.md)
- [swagger.json](latest%2Fadmin%2Fswagger-ui%2Fswagger.md)
- [TOTVS Fluig API](latest%2Fcollaboration%2Fswagger-ui%2Findex.md)
- [swagger.json](latest%2Fcollaboration%2Fswagger-ui%2Fswagger.md)
- [TOTVS Fluig API](latest%2Fcontent-management%2Fswagger-ui%2Findex.md)
- [swagger.json](latest%2Fcontent-management%2Fswagger-ui%2Fswagger.md)
- [TOTVS Fluig API](latest%2Fdataservice%2Fswagger-ui%2Findex.md)
- [swagger.json](latest%2Fdataservice%2Fswagger-ui%2Fswagger.md)
- [TOTVS Fluig API](latest%2Fdataset%2Fswagger-ui%2Findex.md)
- [swagger.json](latest%2Fdataset%2Fswagger-ui%2Fswagger.md)
- [TOTVS Fluig API](latest%2Fecm-forms%2Fswagger-ui%2Findex.md)
- [swagger.json](latest%2Fecm-forms%2Fswagger-ui%2Fswagger.md)
- [TOTVS Fluig API](latest%2Fenvironment%2Fswagger-ui%2Findex.md)
- [swagger.json](latest%2Fenvironment%2Fswagger-ui%2Fswagger.md)
- [TOTVS Fluig API](latest%2Fform-management%2Fswagger-ui%2Findex.md)
- [swagger.json](latest%2Fform-management%2Fswagger-ui%2Fswagger.md)
- [TOTVS Fluig API](latest%2Findex.md)
- [TOTVS Fluig API](latest%2Findex.md)
- [TOTVS Fluig API](latest%2Fpage-management%2Fswagger-ui%2Findex.md)
- [swagger.json](latest%2Fpage-management%2Fswagger-ui%2Fswagger.md)
- [TOTVS Fluig API](latest%2Fprocess-management%2Fswagger-ui%2Findex.md)
- [swagger.json](latest%2Fprocess-management%2Fswagger-ui%2Fswagger.md)
- [TOTVS Fluig API](latest%2Fuse-policy%2Fswagger-ui%2Findex.md)
- [swagger.json](latest%2Fuse-policy%2Fswagger-ui%2Fswagger.md)

---

# TOTVS Fluig API

> **Fonte:** [https://api.fluig.com/latest/admin/swagger-ui/](https://api.fluig.com/latest/admin/swagger-ui/)

---

[

](https://api.fluig.com/latest/ "Página inicial")

![](../../swagger/assets/img/lights-off.png)

[

API antiga

](https://api.fluig.com/old/ "API antiga")

Powered by[

](https://www.fluig.com/ "Site fluig")

©2012-2024. Todos os Direitos Reservados. fluig® é uma marca registrada.

---

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

---

# TOTVS Fluig API

> **Fonte:** [https://api.fluig.com/latest/collaboration/swagger-ui/](https://api.fluig.com/latest/collaboration/swagger-ui/)

---

[

](https://api.fluig.com/latest/ "Página inicial")

![](../../swagger/assets/img/lights-off.png)

[

API antiga

](https://api.fluig.com/old/ "API antiga")

Powered by[

](https://www.fluig.com/ "Site fluig")

©2012-2024. Todos os Direitos Reservados. fluig® é uma marca registrada.

---

# swagger.json

> **Fonte:** [https://api.fluig.com/latest/collaboration/swagger-ui/swagger.json](https://api.fluig.com/latest/collaboration/swagger-ui/swagger.json)

---

```
{
  "swagger" : "2.0",
  "info" : {
    "description" : "Work with communities data",
    "version" : "v3",
    "title" : "Collaboration"
  },
  "host" : "",
  "basePath" : "/collaboration/api",
  "tags" : [ {
    "name" : "Communities",
    "description" : "List of communities"
  }, {
    "name" : "Favorites",
    "description" : "Favorites management"
  }, {
    "name" : "Followers",
    "description" : "Follower management"
  }, {
    "name" : "Media",
    "description" : "Media management in communities"
  }, {
    "name" : "Attendance",
    "description" : "Community participation management"
  }, {
    "name" : "Profile picture",
    "description" : "Profile picture management"
  }, {
    "name" : "Posts",
    "description" : "Management of user posts on the timeline and in communities"
  }, {
    "name" : "Users",
    "description" : "List of users"
  }, {
    "name" : "Socials",
    "description" : "List social data"
  }, {
    "name" : "Timeline",
    "description" : "Timeline of users and communities"
  } ],
  "paths" : {
    "/v3/communities" : {
      "get" : {
        "tags" : [ "Communities" ],
        "summary" : "Lists information from all communities",
        "description" : "",
        "operationId" : "findAllCommunities",
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "name" : "onlyFavorite",
          "in" : "query",
          "description" : "Search for only favorite communities",
          "required" : false,
          "type" : "boolean"
        }, {
          "name" : "onlyHidden",
          "in" : "query",
          "description" : "Search for only hidden communities",
          "required" : false,
          "type" : "boolean"
        }, {
          "name" : "userAlias",
          "in" : "query",
          "description" : "User alias (Search communities in which the user is a participant)",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "communityLikeAlias",
          "in" : "query",
          "description" : "Search community by partial or full alias",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "communityLikeName",
          "in" : "query",
          "description" : "Search community by partial or full name",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "order",
          "in" : "query",
          "description" : "Ordering",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string",
            "enum" : [ "name", "description", "favorite", "state", "-name", "-description", "-favorite", "-state" ]
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
        }, {
          "name" : "expand",
          "in" : "query",
          "description" : "Expandable fields",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string",
            "enum" : [ "admin", "permission" ]
          },
          "collectionFormat" : "multi"
        } ],
        "responses" : {
          "200" : {
            "description" : "Successful request with body content",
            "schema" : {
              "$ref" : "#/definitions/CommunityCollection"
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
    "/v3/communities/{alias}/favorites" : {
      "post" : {
        "tags" : [ "Favorites" ],
        "summary" : "Adds a community to favorites",
        "description" : "",
        "operationId" : "favorite",
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "alias",
          "in" : "path",
          "description" : "Community alias",
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
      "delete" : {
        "tags" : [ "Favorites" ],
        "summary" : "Remove a community from favorites",
        "description" : "",
        "operationId" : "removeFavorite",
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "alias",
          "in" : "path",
          "description" : "Community alias",
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
    "/v3/communities/{alias}/notify" : {
      "post" : {
        "tags" : [ "Communities" ],
        "summary" : "Enables notification for a community",
        "description" : "",
        "operationId" : "notifyOn",
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "name" : "alias",
          "in" : "path",
          "description" : "Community alias",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "Successful request with body content"
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
        "tags" : [ "Communities" ],
        "summary" : "Disables notification for a community",
        "description" : "",
        "operationId" : "notifyOff",
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "name" : "alias",
          "in" : "path",
          "description" : "Community alias",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "Successful request with body content"
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
    "/v3/communities/{communityAlias}" : {
      "get" : {
        "tags" : [ "Communities" ],
        "summary" : "Lists information for a specific community",
        "description" : "",
        "operationId" : "findCommunity",
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "name" : "communityAlias",
          "in" : "path",
          "description" : "Community alias",
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
            "enum" : [ "admin", "permission" ]
          },
          "collectionFormat" : "multi"
        } ],
        "responses" : {
          "200" : {
            "description" : "Successful request with body content",
            "schema" : {
              "$ref" : "#/definitions/CommunityResponseWithExpandable"
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
    "/v3/communities/{communityAlias}/users" : {
      "get" : {
        "tags" : [ "Communities" ],
        "summary" : "Returns the list of users participating in the community",
        "description" : "",
        "operationId" : "listMembers",
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "communityAlias",
          "in" : "path",
          "description" : "Community alias",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "order",
          "in" : "query",
          "description" : "Ordering",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string",
            "enum" : [ "name", "alias", "-name", "-alias" ]
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "userName",
          "in" : "query",
          "description" : "User name to filter in the list",
          "required" : false,
          "type" : "string"
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
            "description" : "Successful request with body content",
            "schema" : {
              "$ref" : "#/definitions/UserCollection"
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
        "tags" : [ "Communities" ],
        "summary" : "Requests permission to join the community",
        "description" : "",
        "operationId" : "requestPermission",
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "communityAlias",
          "in" : "path",
          "description" : "Community alias",
          "required" : true,
          "type" : "string"
        }, {
          "in" : "body",
          "name" : "body",
          "required" : false,
          "schema" : {
            "$ref" : "#/definitions/UserCreate"
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
    "/v3/communities/{communityAlias}/users/{userAlias}" : {
      "delete" : {
        "tags" : [ "Communities" ],
        "summary" : "Delete user from the community",
        "description" : "",
        "operationId" : "deleteMembers",
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "communityAlias",
          "in" : "path",
          "description" : "Community alias",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "userAlias",
          "in" : "path",
          "description" : "User alias",
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
      }
    },
    "/v3/medias/upload/image/{fileName}" : {
      "post" : {
        "tags" : [ "Media" ],
        "summary" : "Image upload",
        "description" : "",
        "operationId" : "uploadMediaImage",
        "consumes" : [ "multipart/form-data" ],
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "name" : "fileName",
          "in" : "path",
          "description" : "File Name",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "file",
          "in" : "formData",
          "description" : "Image",
          "required" : true,
          "type" : "file"
        } ],
        "responses" : {
          "200" : {
            "description" : "Successful request with body content",
            "schema" : {
              "$ref" : "#/definitions/UploadStream"
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
    "/v3/medias/upload/video/{fileName}" : {
      "post" : {
        "tags" : [ "Media" ],
        "summary" : "Video upload",
        "description" : "",
        "operationId" : "uploadMediaVideo",
        "consumes" : [ "multipart/form-data" ],
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "name" : "fileName",
          "in" : "path",
          "description" : "File Name",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "file",
          "in" : "formData",
          "description" : "Video",
          "required" : true,
          "type" : "file"
        } ],
        "responses" : {
          "200" : {
            "description" : "Successful request with body content",
            "schema" : {
              "$ref" : "#/definitions/UploadStream"
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
    "/v3/participation/{alias}/isMember/{userAlias}" : {
      "get" : {
        "tags" : [ "Attendance" ],
        "summary" : "Checks whether a user is a member of a community",
        "description" : "",
        "operationId" : "checkIfUserIsMember",
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "name" : "alias",
          "in" : "path",
          "description" : "Community alias",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "userAlias",
          "in" : "path",
          "description" : "User alias",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "Successful request with body content",
            "schema" : {
              "type" : "boolean"
            }
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
    "/v3/participation/{alias}/moderator/{userAlias}" : {
      "post" : {
        "tags" : [ "Attendance" ],
        "summary" : "Add moderator to community",
        "description" : "",
        "operationId" : "addCommunityModerator",
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "name" : "alias",
          "in" : "path",
          "description" : "Community alias",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "userAlias",
          "in" : "path",
          "description" : "User alias (Search communities in which the user is a participant)",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "Successful request with body content",
            "schema" : {
              "$ref" : "#/definitions/CommunityManagementResponse"
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
      "delete" : {
        "tags" : [ "Attendance" ],
        "summary" : "Remove community moderator",
        "description" : "",
        "operationId" : "removeCommunityModerator",
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "name" : "alias",
          "in" : "path",
          "description" : "Community alias",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "userAlias",
          "in" : "path",
          "description" : "User alias",
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
    "/v3/participation/{alias}/moderators" : {
      "get" : {
        "tags" : [ "Attendance" ],
        "summary" : "List all moderators of a community",
        "description" : "",
        "operationId" : "listAllModerators",
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "name" : "alias",
          "in" : "path",
          "description" : "Community alias",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "order",
          "in" : "query",
          "description" : "Ordering",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string",
            "default" : "default",
            "enum" : [ "name", "favorite", "-name" ]
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "pattern",
          "in" : "query",
          "required" : false,
          "type" : "string"
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
            "description" : "Successful request with body content",
            "schema" : {
              "$ref" : "#/definitions/UserCollection"
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
    "/v3/posts" : {
      "get" : {
        "tags" : [ "Posts" ],
        "summary" : "List all user posts",
        "description" : "",
        "operationId" : "listPosts",
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "name" : "userAlias",
          "in" : "query",
          "description" : "User alias",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "lastPostId",
          "in" : "query",
          "description" : "ID of the last post viewed",
          "required" : false,
          "type" : "integer",
          "format" : "int64"
        }, {
          "name" : "order",
          "in" : "query",
          "description" : "Ordering",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string",
            "default" : "-LAST_COMMENT",
            "enum" : [ "CREATION_DATE", "MORE_LIKE", "LAST_COMMENT", "-CREATION_DATE", "-MORE_LIKE", "-LAST_COMMENT" ]
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "pageSize",
          "in" : "query",
          "description" : "Number of records returned in search",
          "required" : false,
          "type" : "integer",
          "default" : 100,
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
        } ],
        "responses" : {
          "200" : {
            "description" : "Successful request with body content",
            "schema" : {
              "$ref" : "#/definitions/PostCollection"
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
        "tags" : [ "Posts" ],
        "summary" : "Create new post",
        "description" : "",
        "operationId" : "createPost",
        "consumes" : [ "application/json; charset=UTF-8" ],
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "in" : "body",
          "name" : "body",
          "description" : "v3.postsRest.postCreate",
          "required" : true,
          "schema" : {
            "$ref" : "#/definitions/PostCreate"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "Successful request with body content",
            "schema" : {
              "$ref" : "#/definitions/PostResponse"
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
    "/v3/posts/comments/{commentId}/likes" : {
      "get" : {
        "tags" : [ "Posts" ],
        "summary" : "Search list of users who liked a comment",
        "description" : "",
        "operationId" : "commentLikes",
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "name" : "commentId",
          "in" : "path",
          "description" : "Comment ID",
          "required" : true,
          "type" : "integer",
          "format" : "int64"
        }, {
          "name" : "alias",
          "in" : "query",
          "description" : "User alias to filter in the list",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "name",
          "in" : "query",
          "description" : "User name to filter in the list",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "order",
          "in" : "query",
          "description" : "v3.posts.comments.order",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string",
            "enum" : [ "name", "alias", "-name", "-alias" ]
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
        } ],
        "responses" : {
          "200" : {
            "description" : "Successful request with body content",
            "schema" : {
              "$ref" : "#/definitions/UserCollection"
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
        "tags" : [ "Posts" ],
        "summary" : "Support a comment",
        "description" : "",
        "operationId" : "commentLike",
        "consumes" : [ "application/json; charset=UTF-8" ],
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "name" : "commentId",
          "in" : "path",
          "description" : "Comment ID",
          "required" : true,
          "type" : "integer",
          "format" : "int64"
        } ],
        "responses" : {
          "200" : {
            "description" : "Successful request with body content"
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
        "tags" : [ "Posts" ],
        "summary" : "Delete a comment support",
        "description" : "",
        "operationId" : "removeCommentLike",
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "name" : "commentId",
          "in" : "path",
          "description" : "Comment ID",
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
    "/v3/posts/denounce/comments/{commentId}" : {
      "post" : {
        "tags" : [ "Posts" ],
        "summary" : "Report a comment",
        "description" : "",
        "operationId" : "denounceComment",
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "name" : "commentId",
          "in" : "path",
          "description" : "Comment ID",
          "required" : true,
          "type" : "integer",
          "format" : "int64"
        }, {
          "name" : "text",
          "in" : "query",
          "description" : "Report justification",
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
    "/v3/posts/denounce/post/{postId}" : {
      "post" : {
        "tags" : [ "Posts" ],
        "summary" : "Report a Post",
        "description" : "",
        "operationId" : "denouncePost",
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "name" : "postId",
          "in" : "path",
          "description" : "Post ID",
          "required" : true,
          "type" : "integer",
          "format" : "int64"
        }, {
          "name" : "text",
          "in" : "query",
          "description" : "Report justification",
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
    "/v3/posts/multiplesPlaces" : {
      "post" : {
        "tags" : [ "Posts" ],
        "summary" : "Create new post",
        "description" : "",
        "operationId" : "createPostInMultiplesPlaces",
        "consumes" : [ "application/json; charset=UTF-8" ],
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "in" : "body",
          "name" : "body",
          "description" : "v3.postsRest.postCreate",
          "required" : true,
          "schema" : {
            "$ref" : "#/definitions/PostCreateInMultiplesPlaces"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "Successful request with body content",
            "schema" : {
              "$ref" : "#/definitions/PostResponse"
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
    "/v3/posts/shareContent" : {
      "post" : {
        "tags" : [ "Posts" ],
        "summary" : "Share posts",
        "description" : "",
        "operationId" : "shareContent",
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "in" : "body",
          "name" : "body",
          "required" : false,
          "schema" : {
            "$ref" : "#/definitions/Share"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "Successful request with body content",
            "schema" : {
              "$ref" : "#/definitions/Share"
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
    "/v3/posts/{id}/likes" : {
      "get" : {
        "tags" : [ "Posts" ],
        "summary" : "List users who supported a post",
        "description" : "",
        "operationId" : "postLikes",
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "name" : "id",
          "in" : "path",
          "description" : "Post ID to be searched",
          "required" : true,
          "type" : "integer",
          "format" : "int64"
        }, {
          "name" : "alias",
          "in" : "query",
          "description" : "User alias to filter in the list",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "name",
          "in" : "query",
          "description" : "User name to filter in the list",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "order",
          "in" : "query",
          "description" : "Ordering",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string",
            "enum" : [ "name", "alias", "-name", "-alias" ]
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
        } ],
        "responses" : {
          "200" : {
            "description" : "Successful request with body content",
            "schema" : {
              "$ref" : "#/definitions/UserCollection"
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
    "/v3/posts/{id}/shared" : {
      "get" : {
        "tags" : [ "Posts" ],
        "summary" : "Search users who shared the post",
        "description" : "",
        "operationId" : "shared",
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "name" : "id",
          "in" : "path",
          "description" : "Post ID to be searched",
          "required" : true,
          "type" : "integer",
          "format" : "int64"
        }, {
          "name" : "name",
          "in" : "query",
          "description" : "User name to filter in the list",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "order",
          "in" : "query",
          "description" : "Ordering",
          "required" : false,
          "type" : "string",
          "default" : "name",
          "enum" : [ "name", "-name" ]
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
            "description" : "Successful request with body content",
            "schema" : {
              "$ref" : "#/definitions/UserCollection"
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
    "/v3/posts/{id}/watchers" : {
      "get" : {
        "tags" : [ "Posts" ],
        "summary" : "Search users following the post",
        "description" : "",
        "operationId" : "postWatchers",
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "name" : "id",
          "in" : "path",
          "description" : "Post ID to be searched",
          "required" : true,
          "type" : "integer",
          "format" : "int64"
        }, {
          "name" : "name",
          "in" : "query",
          "description" : "User name to filter in the list",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "order",
          "in" : "query",
          "description" : "Ordering",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string",
            "default" : "name",
            "enum" : [ "name", "-name" ]
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
        } ],
        "responses" : {
          "200" : {
            "description" : "Successful request with body content",
            "schema" : {
              "$ref" : "#/definitions/UserCollection"
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
    "/v3/posts/{postId}" : {
      "get" : {
        "tags" : [ "Posts" ],
        "summary" : "Search a post",
        "description" : "",
        "operationId" : "findPost",
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "name" : "postId",
          "in" : "path",
          "description" : "Post ID",
          "required" : true,
          "type" : "integer",
          "format" : "int64"
        } ],
        "responses" : {
          "200" : {
            "description" : "Successful request with body content",
            "schema" : {
              "$ref" : "#/definitions/PostResponse"
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
        "tags" : [ "Posts" ],
        "summary" : "Edit a post",
        "description" : "",
        "operationId" : "editPost",
        "consumes" : [ "application/json; charset=UTF-8" ],
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "name" : "postId",
          "in" : "path",
          "description" : "Post ID",
          "required" : true,
          "type" : "integer",
          "format" : "int64"
        }, {
          "in" : "body",
          "name" : "body",
          "required" : false,
          "schema" : {
            "$ref" : "#/definitions/PostEdit"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "Successful request with body content",
            "schema" : {
              "$ref" : "#/definitions/PostResponse"
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
      "delete" : {
        "tags" : [ "Posts" ],
        "summary" : "Delete a post",
        "description" : "",
        "operationId" : "removePost",
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "name" : "postId",
          "in" : "path",
          "description" : "Post ID",
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
    "/v3/posts/{postId}/comments" : {
      "get" : {
        "tags" : [ "Posts" ],
        "summary" : "Lists comments from a specific post",
        "description" : "",
        "operationId" : "listComments",
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "name" : "postId",
          "in" : "path",
          "description" : "Post ID",
          "required" : true,
          "type" : "integer",
          "format" : "int64"
        }, {
          "name" : "publisherAlias",
          "in" : "query",
          "description" : "Filter by publisher alias",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "hasLikes",
          "in" : "query",
          "description" : "Filter by likes",
          "required" : false,
          "type" : "boolean"
        }, {
          "name" : "hasMentions",
          "in" : "query",
          "description" : "Filter by mentions",
          "required" : false,
          "type" : "boolean"
        }, {
          "name" : "order",
          "in" : "query",
          "description" : "Ordering",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string",
            "enum" : [ "hasMentions", "-hasMentions", "numberLikes", "-numberLikes", "creationDate", "-creationDate", "lastUpdateDate", "-lastUpdateDate" ]
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
        }, {
          "name" : "expand",
          "in" : "query",
          "description" : "Expandable fields",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string",
            "enum" : [ "publisher", "place" ]
          },
          "collectionFormat" : "multi"
        } ],
        "responses" : {
          "200" : {
            "description" : "Successful request with body content",
            "schema" : {
              "$ref" : "#/definitions/CommentCollection"
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
        "tags" : [ "Posts" ],
        "summary" : "Comment on a POST published in the community",
        "description" : "",
        "operationId" : "commentPost",
        "consumes" : [ "application/json; charset=UTF-8" ],
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "name" : "postId",
          "in" : "path",
          "description" : "Post ID",
          "required" : true,
          "type" : "integer",
          "format" : "int64"
        }, {
          "in" : "body",
          "name" : "body",
          "required" : false,
          "schema" : {
            "$ref" : "#/definitions/CommentPost"
          }
        }, {
          "name" : "expand",
          "in" : "query",
          "description" : "Expandable fields",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string",
            "enum" : [ "publisher", "place" ]
          },
          "collectionFormat" : "multi"
        } ],
        "responses" : {
          "200" : {
            "description" : "Successful request with body content",
            "schema" : {
              "$ref" : "#/definitions/CommentResponse"
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
    "/v3/posts/{postId}/comments/{commentId}" : {
      "get" : {
        "tags" : [ "Posts" ],
        "summary" : "Search for a comment from a post",
        "description" : "",
        "operationId" : "findComment",
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "name" : "postId",
          "in" : "path",
          "description" : "Post ID",
          "required" : true,
          "type" : "integer",
          "format" : "int64"
        }, {
          "name" : "commentId",
          "in" : "path",
          "description" : "Comment ID",
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
            "type" : "string",
            "enum" : [ "publisher", "place" ]
          },
          "collectionFormat" : "multi"
        } ],
        "responses" : {
          "200" : {
            "description" : "Successful request with body content",
            "schema" : {
              "$ref" : "#/definitions/CommentResponse"
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
        "tags" : [ "Posts" ],
        "summary" : "Enter a comment",
        "description" : "",
        "operationId" : "editComment",
        "consumes" : [ "application/json; charset=UTF-8" ],
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "name" : "postId",
          "in" : "path",
          "description" : "Post ID",
          "required" : true,
          "type" : "integer",
          "format" : "int64"
        }, {
          "name" : "commentId",
          "in" : "path",
          "description" : "Comment ID",
          "required" : true,
          "type" : "integer",
          "format" : "int64"
        }, {
          "in" : "body",
          "name" : "body",
          "required" : false,
          "schema" : {
            "$ref" : "#/definitions/CommentPost"
          }
        }, {
          "name" : "expand",
          "in" : "query",
          "description" : "Expandable fields",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string",
            "enum" : [ "publisher", "place" ]
          },
          "collectionFormat" : "multi"
        } ],
        "responses" : {
          "200" : {
            "description" : "Successful request with body content",
            "schema" : {
              "$ref" : "#/definitions/CommentResponse"
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
        "tags" : [ "Posts" ],
        "summary" : "Deletes a comment from a post",
        "description" : "",
        "operationId" : "removeComment",
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "name" : "postId",
          "in" : "path",
          "description" : "Post ID",
          "required" : true,
          "type" : "integer",
          "format" : "int64"
        }, {
          "name" : "commentId",
          "in" : "path",
          "description" : "Comment ID",
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
    "/v3/posts/{postId}/likes/{userAlias}" : {
      "get" : {
        "tags" : [ "Posts" ],
        "summary" : "Search for user who supported the POST",
        "description" : "",
        "operationId" : "findUserThatLikedPost",
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "name" : "postId",
          "in" : "path",
          "description" : "Post ID",
          "required" : true,
          "type" : "integer",
          "format" : "int64"
        }, {
          "name" : "userAlias",
          "in" : "path",
          "description" : "User alias",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "Successful request with body content",
            "schema" : {
              "$ref" : "#/definitions/UserResponse"
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
        "tags" : [ "Posts" ],
        "summary" : "Support a post",
        "description" : "",
        "operationId" : "postLike",
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "name" : "postId",
          "in" : "path",
          "description" : "Post ID",
          "required" : true,
          "type" : "integer",
          "format" : "int64"
        }, {
          "name" : "userAlias",
          "in" : "path",
          "description" : "User alias",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "Successful request with body content",
            "schema" : {
              "$ref" : "#/definitions/UserResponse"
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
        "tags" : [ "Posts" ],
        "summary" : "Delete support from a post",
        "description" : "",
        "operationId" : "removePostLikeByAlias",
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "name" : "postId",
          "in" : "path",
          "description" : "Post ID",
          "required" : true,
          "type" : "integer",
          "format" : "int64"
        }, {
          "name" : "userAlias",
          "in" : "path",
          "description" : "User alias",
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
    "/v3/posts/{postId}/notify" : {
      "post" : {
        "tags" : [ "Posts" ],
        "summary" : "Receive post notification",
        "description" : "",
        "operationId" : "notify",
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "name" : "postId",
          "in" : "path",
          "description" : "Post ID",
          "required" : true,
          "type" : "integer",
          "format" : "int64"
        } ],
        "responses" : {
          "200" : {
            "description" : "Successful request with body content"
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
        "tags" : [ "Posts" ],
        "summary" : "Stop receiving post notifications",
        "description" : "",
        "operationId" : "removeNotify",
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "name" : "postId",
          "in" : "path",
          "description" : "Post ID",
          "required" : true,
          "type" : "integer",
          "format" : "int64"
        } ],
        "responses" : {
          "200" : {
            "description" : "Successful request with body content"
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
    "/v3/socials" : {
      "get" : {
        "tags" : [ "Socials" ],
        "summary" : "Users and communities list",
        "description" : "",
        "operationId" : "list",
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "name" : "pattern",
          "in" : "query",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "order",
          "in" : "query",
          "description" : "Ordering",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string",
            "default" : "NAME",
            "enum" : [ "NAME", "ALIAS", "EMAIL", "-NAME", "-ALIAS", "-EMAIL" ]
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
        } ],
        "responses" : {
          "200" : {
            "description" : "Successful request with body content",
            "schema" : {
              "$ref" : "#/definitions/SocialCollection"
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
    "/v3/socials/{alias}" : {
      "get" : {
        "tags" : [ "Socials" ],
        "summary" : "v3.socials.get.apiOperation",
        "description" : "",
        "operationId" : "get",
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "name" : "alias",
          "in" : "path",
          "description" : "v3.socialUser.socialAlias",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "Successful request with body content",
            "schema" : {
              "$ref" : "#/definitions/SocialCollection"
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
    "/v3/timeline/{socialAlias}" : {
      "get" : {
        "tags" : [ "Timeline" ],
        "summary" : "List all timeline posts",
        "description" : "",
        "operationId" : "getTimeline",
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "name" : "socialAlias",
          "in" : "path",
          "description" : "Alias of a logged-in user/community",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "lastPostId",
          "in" : "query",
          "description" : "ID of the last post viewed",
          "required" : false,
          "type" : "integer",
          "format" : "int64"
        }, {
          "name" : "order",
          "in" : "query",
          "description" : "Ordering",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string",
            "enum" : [ "CREATION_DATE", "MORE_LIKE", "LAST_COMMENT", "-CREATION_DATE", "-MORE_LIKE", "-LAST_COMMENT" ]
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "pageSize",
          "in" : "query",
          "description" : "Number of records returned in search",
          "required" : false,
          "type" : "integer",
          "default" : 30,
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
          "name" : "loggedUserPublications",
          "in" : "query",
          "description" : "List only the logged-in user’s posts",
          "required" : false,
          "type" : "boolean",
          "default" : false
        } ],
        "responses" : {
          "200" : {
            "description" : "Successful request with body content",
            "schema" : {
              "$ref" : "#/definitions/PostCollection"
            }
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
      }
    },
    "/v3/users" : {
      "get" : {
        "tags" : [ "Users" ],
        "summary" : "Lists information from all users",
        "description" : "",
        "operationId" : "findAll",
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "name" : "alias",
          "in" : "query",
          "description" : "Search user by partial or full alias",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "isFavorite",
          "in" : "query",
          "description" : "List favorite users relative to the logged-in user",
          "required" : false,
          "type" : "boolean"
        }, {
          "name" : "name",
          "in" : "query",
          "description" : "Search user by partial or full name",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "order",
          "in" : "query",
          "description" : "Ordering",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string",
            "enum" : [ "name", "alias", "favorite", "-name", "-alias", "-favorite" ]
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "relationStatus",
          "in" : "query",
          "description" : "Relationship status",
          "required" : false,
          "type" : "string",
          "enum" : [ "RELATED", "NOT_RELATED", "PENDING" ]
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
              "$ref" : "#/definitions/UserCollection"
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
    "/v3/users/current/favorites" : {
      "get" : {
        "tags" : [ "Favorites" ],
        "summary" : "List favorite users relative to the logged-in user",
        "description" : "",
        "operationId" : "listCurrentFavorites",
        "produces" : [ "application/json" ],
        "parameters" : [ {
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
              "$ref" : "#/definitions/UserFavoriteCollection"
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
    "/v3/users/{alias}" : {
      "get" : {
        "tags" : [ "Users" ],
        "summary" : "Lists information for a user",
        "description" : "",
        "operationId" : "find",
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "name" : "alias",
          "in" : "path",
          "description" : "User alias",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "Successful request with body content",
            "schema" : {
              "$ref" : "#/definitions/UserResponse"
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
    "/v3/users/{alias}/favorites" : {
      "post" : {
        "tags" : [ "Favorites" ],
        "summary" : "Adds a user to favorites",
        "description" : "",
        "operationId" : "favoriteAlias",
        "consumes" : [ "application/json" ],
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "alias",
          "in" : "path",
          "description" : "User alias",
          "required" : true,
          "type" : "string"
        }, {
          "in" : "body",
          "name" : "body",
          "required" : false,
          "schema" : {
            "$ref" : "#/definitions/FavoriteCreate"
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
      }
    },
    "/v3/users/{alias}/favorites/{favoriteAlias}" : {
      "delete" : {
        "tags" : [ "Favorites" ],
        "summary" : "Deletes a user from favorites",
        "description" : "",
        "operationId" : "deleteAlias",
        "consumes" : [ "application/json" ],
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "alias",
          "in" : "path",
          "description" : "User alias",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "favoriteAlias",
          "in" : "path",
          "description" : "User alias",
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
    "/v3/users/{alias}/following" : {
      "get" : {
        "tags" : [ "Users" ],
        "summary" : "List of users who are followed by a specific user",
        "description" : "",
        "operationId" : "listFollowings",
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "name" : "alias",
          "in" : "path",
          "description" : "User alias",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "order",
          "in" : "query",
          "description" : "Ordering",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string",
            "enum" : [ "name", "alias", "-name", "-alias" ]
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "name",
          "in" : "query",
          "description" : "Lists users who are followed by partial or full name ",
          "required" : false,
          "type" : "string"
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
            "description" : "Successful request with body content",
            "schema" : {
              "$ref" : "#/definitions/UserResponse"
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
    "/v3/users/{alias}/picture" : {
      "get" : {
        "tags" : [ "Profile picture" ],
        "summary" : "Returns an image of a specific user",
        "description" : "",
        "operationId" : "getProfilePicture",
        "produces" : [ "image/png" ],
        "parameters" : [ {
          "name" : "alias",
          "in" : "path",
          "description" : "User alias",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "type",
          "in" : "query",
          "description" : "Image type",
          "required" : false,
          "type" : "string",
          "default" : "DEFAULT_PICTURE",
          "enum" : [ "DEFAULT_PICTURE", "X_SMALL_PICTURE", "SMALL_PICTURE", "MEDIUM_PICTURE", "LARGE_PICTURE" ]
        } ],
        "responses" : {
          "200" : {
            "description" : "Successful request with body content"
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
      },
      "post" : {
        "tags" : [ "Profile picture" ],
        "summary" : "Adds or Changes an image for a specific user",
        "description" : "",
        "operationId" : "updateFile",
        "consumes" : [ "multipart/form-data" ],
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "name" : "alias",
          "in" : "path",
          "description" : "User alias",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "file",
          "in" : "formData",
          "description" : "Upload file",
          "required" : true,
          "type" : "file"
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
    "/v3/users/{userAlias}/followers" : {
      "get" : {
        "tags" : [ "Followers" ],
        "summary" : "Search for all followers of a user",
        "description" : "",
        "operationId" : "findAllFollowers",
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "name" : "userAlias",
          "in" : "path",
          "description" : "User alias",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "order",
          "in" : "query",
          "description" : "Ordering",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "string",
            "enum" : [ "name", "alias", "-name", "-alias" ]
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "name",
          "in" : "query",
          "description" : "Search followers by partial or full name",
          "required" : false,
          "type" : "string"
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
              "$ref" : "#/definitions/UserCollection"
            }
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
      },
      "post" : {
        "tags" : [ "Followers" ],
        "summary" : "Requests to follow a specific user",
        "description" : "",
        "operationId" : "followRequest",
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "name" : "userAlias",
          "in" : "path",
          "description" : "User alias",
          "required" : true,
          "type" : "string"
        }, {
          "in" : "body",
          "name" : "body",
          "description" : "Related user alias",
          "required" : true,
          "schema" : {
            "$ref" : "#/definitions/UserCreate"
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
    "/v3/users/{userAlias}/followers/{followerAlias}" : {
      "delete" : {
        "tags" : [ "Followers" ],
        "summary" : "Deletes a user from another user's follower list",
        "description" : "",
        "operationId" : "unfollowByAlias",
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "name" : "userAlias",
          "in" : "path",
          "description" : "User alias",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "followerAlias",
          "in" : "path",
          "description" : "Related user alias",
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
    "/v3/users/{userAlias}/followers/{followerAlias}/cancelRequest" : {
      "delete" : {
        "tags" : [ "Followers" ],
        "summary" : "Remove pending requests  ",
        "description" : "",
        "operationId" : "cancelRequest",
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "name" : "userAlias",
          "in" : "path",
          "description" : "User alias",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "followerAlias",
          "in" : "path",
          "description" : "Related user alias",
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
    "Article" : {
      "type" : "object",
      "properties" : {
        "id" : {
          "type" : "integer",
          "format" : "int64",
          "description" : "Id"
        },
        "documentId" : {
          "type" : "integer",
          "format" : "int64",
          "description" : "Document ID"
        },
        "createdDate" : {
          "type" : "string",
          "format" : "date-time",
          "description" : "Creation date"
        },
        "updateDate" : {
          "type" : "string",
          "format" : "date-time",
          "description" : "Update date"
        },
        "removed" : {
          "type" : "boolean",
          "description" : "If the document has been deleted"
        },
        "title" : {
          "type" : "string",
          "description" : "Article title"
        },
        "text" : {
          "type" : "string",
          "description" : "Article Text"
        },
        "numberOfComments" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Number of comments"
        },
        "numberOfDenounces" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Number of reports"
        },
        "numberOfLikes" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Number of likes"
        },
        "numberOfShares" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Number of shares"
        },
        "numberOfWatchers" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Number of notified users"
        },
        "url" : {
          "type" : "string",
          "description" : "Article URL"
        },
        "fullUrl" : {
          "type" : "string",
          "description" : "Complete clause URL"
        },
        "version" : {
          "type" : "string",
          "description" : "Article version"
        },
        "dimension" : {
          "description" : "Cover dimensions",
          "$ref" : "#/definitions/Dimension"
        },
        "canView" : {
          "type" : "boolean",
          "description" : "Can logged users view the document?"
        }
      }
    },
    "Attachment" : {
      "type" : "object",
      "properties" : {
        "article" : {
          "description" : "If attachment is an article",
          "$ref" : "#/definitions/Article"
        },
        "document" : {
          "description" : "If attachment is a document",
          "$ref" : "#/definitions/Document"
        },
        "medias" : {
          "type" : "array",
          "description" : "If attachment contains media (Images or videos)",
          "items" : {
            "$ref" : "#/definitions/Media"
          }
        }
      }
    },
    "CommentCollection" : {
      "type" : "object",
      "properties" : {
        "items" : {
          "type" : "array",
          "items" : {
            "$ref" : "#/definitions/CommentResponse"
          }
        },
        "hasNext" : {
          "type" : "boolean",
          "readOnly" : true
        }
      }
    },
    "CommentPost" : {
      "type" : "object",
      "required" : [ "comment" ],
      "properties" : {
        "comment" : {
          "type" : "string",
          "description" : "Post comment"
        }
      }
    },
    "CommentResponse" : {
      "type" : "object",
      "properties" : {
        "id" : {
          "type" : "integer",
          "format" : "int64",
          "description" : "Comment ID"
        },
        "text" : {
          "type" : "string",
          "description" : "Comment text"
        },
        "textWithoutMention" : {
          "type" : "string",
          "description" : "Text of the comment with no mention"
        },
        "place" : {
          "description" : "User or Community where the comment was created",
          "$ref" : "#/definitions/SocialResponse"
        },
        "publisher" : {
          "description" : "Data of the user that published the comment",
          "$ref" : "#/definitions/UserResponse"
        },
        "numberOfLikes" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Number of likes"
        },
        "mentions" : {
          "type" : "array",
          "description" : "Users mentioned in the comment",
          "items" : {
            "$ref" : "#/definitions/MentionedUser"
          }
        },
        "updateDate" : {
          "type" : "string",
          "format" : "date-time",
          "description" : "Date the comment was edited"
        },
        "creationDate" : {
          "type" : "string",
          "format" : "date-time",
          "description" : "Date the comment was created"
        },
        "attachedLinks" : {
          "type" : "array",
          "description" : "Links attached in the comment",
          "items" : {
            "type" : "string"
          }
        },
        "liked" : {
          "type" : "boolean"
        }
      }
    },
    "CommunityAdmResponse" : {
      "type" : "object",
      "properties" : {
        "alias" : {
          "type" : "string",
          "description" : "Alias"
        },
        "name" : {
          "type" : "string",
          "description" : "Name"
        }
      }
    },
    "CommunityCollection" : {
      "type" : "object",
      "properties" : {
        "items" : {
          "type" : "array",
          "items" : {
            "$ref" : "#/definitions/CommunityResponse"
          }
        },
        "hasNext" : {
          "type" : "boolean",
          "readOnly" : true
        }
      }
    },
    "CommunityCurrentUserInfo" : {
      "type" : "object",
      "properties" : {
        "relationStatus" : {
          "type" : "string",
          "description" : "Logged-in user status relative to the community",
          "enum" : [ "RELATED", "NOT_RELATED", "PENDING", "ITSELF" ]
        },
        "favorite" : {
          "type" : "boolean",
          "description" : "Did the logged-in user add the community to favorites?"
        },
        "watching" : {
          "type" : "boolean",
          "description" : "Is the logged-in user being notified by the community?"
        },
        "canPublish" : {
          "type" : "boolean",
          "description" : "Can the logged-in user post to the community?"
        },
        "canAccess" : {
          "type" : "boolean",
          "description" : "Can the logged user access the community?"
        }
      }
    },
    "CommunityManagementResponse" : {
      "type" : "object",
      "properties" : {
        "alias" : {
          "type" : "string",
          "description" : "Alias"
        },
        "name" : {
          "type" : "string",
          "description" : "Name"
        },
        "description" : {
          "type" : "string",
          "description" : "Description"
        },
        "hidden" : {
          "type" : "boolean",
          "description" : "Hidden visibility"
        },
        "privateContent" : {
          "type" : "boolean",
          "description" : "Private content"
        },
        "approvalRequired" : {
          "type" : "boolean",
          "description" : "Needs approval"
        },
        "forumId" : {
          "type" : "integer",
          "format" : "int64",
          "description" : "Forum ID"
        },
        "lastUpdate" : {
          "type" : "string",
          "format" : "date-time",
          "description" : "Last update date."
        },
        "createDate" : {
          "type" : "string",
          "format" : "date-time",
          "description" : "Creation date"
        },
        "customPage" : {
          "type" : "boolean",
          "description" : "Has customized page"
        },
        "state" : {
          "type" : "string",
          "description" : "Community status",
          "enum" : [ "ACTIVE", "BLOCKED" ]
        },
        "admin" : {
          "description" : "Administrator",
          "$ref" : "#/definitions/CommunityAdmResponse"
        }
      }
    },
    "CommunityResponse" : {
      "type" : "object",
      "properties" : {
        "id" : {
          "type" : "integer",
          "format" : "int64",
          "description" : "Community Id"
        },
        "name" : {
          "type" : "string",
          "description" : "User or community name"
        },
        "alias" : {
          "type" : "string",
          "description" : "User or community alias"
        },
        "email" : {
          "type" : "string",
          "description" : "User email. When it’s a community, it returns empty"
        },
        "url" : {
          "type" : "string",
          "description" : "User or community profile URL"
        },
        "type" : {
          "type" : "string",
          "description" : "Location type",
          "enum" : [ "COMMUNITY", "USER" ]
        },
        "description" : {
          "type" : "string",
          "description" : "Community description"
        },
        "forumId" : {
          "type" : "integer",
          "format" : "int64",
          "description" : "Forum Id"
        },
        "numberOfMembers" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Number of participants"
        },
        "state" : {
          "type" : "string",
          "description" : "Community status",
          "enum" : [ "UNCONFIRMED", "ACTIVE", "BLOCKED", "REMOVED" ]
        },
        "approvalRequired" : {
          "type" : "boolean",
          "description" : "Is approval needed to participate in the community?"
        },
        "articlesFolderEnabled" : {
          "type" : "boolean",
          "description" : "Are articles enabled in the community?"
        },
        "documentsFolderEnabled" : {
          "type" : "boolean",
          "description" : "Are documents enabled in the community?"
        },
        "formsFolderEnabled" : {
          "type" : "boolean",
          "description" : "Are forms enabled in the community?"
        },
        "imagesFolderEnabled" : {
          "type" : "boolean",
          "description" : "Are images enabled in the community?"
        },
        "videosFolderEnabled" : {
          "type" : "boolean",
          "description" : "Are videos enabled in the community?"
        },
        "privateContent" : {
          "type" : "boolean",
          "description" : "Doe the community have private content?"
        },
        "hidden" : {
          "type" : "boolean",
          "description" : "Is the community private?"
        },
        "customPage" : {
          "type" : "boolean",
          "description" : "Does the community have a custom page?"
        },
        "currentUserInfo" : {
          "description" : "Information on the logged-in user with respect to community",
          "$ref" : "#/definitions/CommunityCurrentUserInfo"
        },
        "createDate" : {
          "type" : "string",
          "format" : "date-time",
          "description" : "Creation date"
        },
        "lastUpdate" : {
          "type" : "string",
          "format" : "date-time",
          "description" : "Last update date."
        },
        "articlesFolderId" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "File folder Id"
        },
        "documentsFolderId" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Document folder Id"
        },
        "formsFolderId" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Form folder Id"
        },
        "imagesFolderId" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Image gallery folder Id"
        },
        "videosFolderId" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Video gallery folder Id"
        }
      }
    },
    "CommunityResponseWithExpandable" : {
      "type" : "object",
      "properties" : {
        "id" : {
          "type" : "integer",
          "format" : "int64",
          "description" : "Community Id"
        },
        "name" : {
          "type" : "string",
          "description" : "User or community name"
        },
        "alias" : {
          "type" : "string",
          "description" : "User or community alias"
        },
        "email" : {
          "type" : "string",
          "description" : "User email. When it’s a community, it returns empty"
        },
        "url" : {
          "type" : "string",
          "description" : "User or community profile URL"
        },
        "type" : {
          "type" : "string",
          "description" : "Location type",
          "enum" : [ "COMMUNITY", "USER" ]
        },
        "description" : {
          "type" : "string",
          "description" : "Community description"
        },
        "forumId" : {
          "type" : "integer",
          "format" : "int64",
          "description" : "Forum Id"
        },
        "numberOfMembers" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Number of participants"
        },
        "state" : {
          "type" : "string",
          "description" : "Community status",
          "enum" : [ "UNCONFIRMED", "ACTIVE", "BLOCKED", "REMOVED" ]
        },
        "approvalRequired" : {
          "type" : "boolean",
          "description" : "Is approval needed to participate in the community?"
        },
        "articlesFolderEnabled" : {
          "type" : "boolean",
          "description" : "Are articles enabled in the community?"
        },
        "documentsFolderEnabled" : {
          "type" : "boolean",
          "description" : "Are documents enabled in the community?"
        },
        "formsFolderEnabled" : {
          "type" : "boolean",
          "description" : "Are forms enabled in the community?"
        },
        "imagesFolderEnabled" : {
          "type" : "boolean",
          "description" : "Are images enabled in the community?"
        },
        "videosFolderEnabled" : {
          "type" : "boolean",
          "description" : "Are videos enabled in the community?"
        },
        "privateContent" : {
          "type" : "boolean",
          "description" : "Doe the community have private content?"
        },
        "hidden" : {
          "type" : "boolean",
          "description" : "Is the community private?"
        },
        "customPage" : {
          "type" : "boolean",
          "description" : "Does the community have a custom page?"
        },
        "currentUserInfo" : {
          "description" : "Information on the logged-in user with respect to community",
          "$ref" : "#/definitions/CommunityCurrentUserInfo"
        },
        "createDate" : {
          "type" : "string",
          "format" : "date-time",
          "description" : "Creation date"
        },
        "lastUpdate" : {
          "type" : "string",
          "format" : "date-time",
          "description" : "Last update date."
        },
        "articlesFolderId" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "File folder Id"
        },
        "documentsFolderId" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Document folder Id"
        },
        "formsFolderId" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Form folder Id"
        },
        "imagesFolderId" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Image gallery folder Id"
        },
        "videosFolderId" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Video gallery folder Id"
        },
        "admin" : {
          "description" : "Community administrator",
          "$ref" : "#/definitions/UserResponse"
        },
        "permissionLevelArticlesFolders" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Article folder permissions"
        },
        "permissionLevelDocumentsFolders" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Document folder permissions"
        },
        "permissionLevelFormsFolders" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Form folder permissions"
        },
        "permissionLevelImagesFolders" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Image folder permissions"
        },
        "permissionLevelVideosFolders" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Article folder permissions videos"
        }
      }
    },
    "Dimension" : {
      "type" : "object",
      "properties" : {
        "width" : {
          "type" : "number",
          "format" : "double"
        },
        "height" : {
          "type" : "number",
          "format" : "double"
        }
      }
    },
    "Document" : {
      "type" : "object",
      "properties" : {
        "id" : {
          "type" : "integer",
          "format" : "int64",
          "description" : "Id"
        },
        "documentId" : {
          "type" : "integer",
          "format" : "int64",
          "description" : "Document ID"
        },
        "createdDate" : {
          "type" : "string",
          "format" : "date-time",
          "description" : "Creation date"
        },
        "updateDate" : {
          "type" : "string",
          "format" : "date-time",
          "description" : "Update date"
        },
        "removed" : {
          "type" : "boolean",
          "description" : "If the document has been deleted"
        },
        "description" : {
          "type" : "string",
          "description" : "Document description"
        },
        "mimeType" : {
          "type" : "string",
          "description" : "Document MimeType"
        },
        "version" : {
          "type" : "string",
          "description" : "Document version"
        },
        "fileSize" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Document size (kbytes)"
        },
        "numberOfComments" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Number of comments"
        },
        "numberOfDenounces" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Number of reports"
        },
        "numberOfLikes" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Number of likes"
        },
        "numberOfShares" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Number of shares"
        },
        "numberOfWatchers" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Number of notified users"
        },
        "url" : {
          "type" : "string",
          "description" : "Document URL"
        },
        "canView" : {
          "type" : "boolean",
          "description" : "Can logged users view the document?"
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
    "FavoriteCreate" : {
      "type" : "object",
      "required" : [ "alias" ],
      "properties" : {
        "alias" : {
          "type" : "string",
          "description" : "User or community alias to be added to favorites",
          "minLength" : 1,
          "maxLength" : 2147483647
        }
      }
    },
    "Folder" : {
      "type" : "object",
      "properties" : {
        "id" : {
          "type" : "integer",
          "format" : "int64",
          "description" : "Id"
        },
        "documentId" : {
          "type" : "integer",
          "format" : "int64",
          "description" : "Document ID"
        },
        "createdDate" : {
          "type" : "string",
          "format" : "date-time",
          "description" : "Creation date"
        },
        "updateDate" : {
          "type" : "string",
          "format" : "date-time",
          "description" : "Update date"
        },
        "removed" : {
          "type" : "boolean",
          "description" : "If the document has been deleted"
        },
        "name" : {
          "type" : "string",
          "description" : "Folder name"
        },
        "numberOfComments" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Number of comments"
        },
        "numberOfDenounces" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Number of reports"
        },
        "numberOfLikes" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Number of likes"
        },
        "numberOfShares" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Number of shares"
        },
        "numberOfWatchers" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Number of notified users"
        },
        "canView" : {
          "type" : "boolean",
          "description" : "Can logged users view the document?"
        }
      }
    },
    "Form" : {
      "type" : "object",
      "properties" : {
        "id" : {
          "type" : "integer",
          "format" : "int64",
          "description" : "Id"
        },
        "documentId" : {
          "type" : "integer",
          "format" : "int64",
          "description" : "Document ID"
        },
        "createdDate" : {
          "type" : "string",
          "format" : "date-time",
          "description" : "Creation date"
        },
        "updateDate" : {
          "type" : "string",
          "format" : "date-time",
          "description" : "Update date"
        },
        "removed" : {
          "type" : "boolean",
          "description" : "If the document has been deleted"
        },
        "description" : {
          "type" : "string",
          "description" : "Form description"
        },
        "text" : {
          "type" : "string",
          "description" : "Form text"
        },
        "url" : {
          "type" : "string",
          "description" : "v3.formDTO.url"
        },
        "version" : {
          "type" : "string",
          "description" : "Form version"
        },
        "answered" : {
          "type" : "boolean",
          "description" : "If the form was answered"
        },
        "answerMultipleTimesAllowed" : {
          "type" : "boolean",
          "description" : "If it is possible to reply to the form more than once"
        },
        "expired" : {
          "type" : "boolean",
          "description" : "Form expired"
        },
        "canView" : {
          "type" : "boolean",
          "description" : "Can logged users view the document?"
        }
      }
    },
    "Media" : {
      "type" : "object",
      "properties" : {
        "id" : {
          "type" : "integer",
          "format" : "int64",
          "description" : "Id"
        },
        "documentId" : {
          "type" : "integer",
          "format" : "int64",
          "description" : "Document ID"
        },
        "createdDate" : {
          "type" : "string",
          "format" : "date-time",
          "description" : "Creation date"
        },
        "updateDate" : {
          "type" : "string",
          "format" : "date-time",
          "description" : "Update date"
        },
        "removed" : {
          "type" : "boolean",
          "description" : "If the document has been deleted"
        },
        "name" : {
          "type" : "string",
          "description" : "Media name"
        },
        "type" : {
          "type" : "string",
          "description" : "Media type (Image or Video)",
          "enum" : [ "IMAGE", "VIDEO" ]
        },
        "dimension" : {
          "description" : "Media dimensions (Height x Width)",
          "$ref" : "#/definitions/Dimension"
        },
        "mimeType" : {
          "type" : "string",
          "description" : "Media MimeType"
        },
        "numberOfComments" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Number of comments"
        },
        "numberOfDenounces" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Number of reports"
        },
        "numberOfLikes" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Number of likes"
        },
        "numberOfShares" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Number of shares"
        },
        "numberOfWatchers" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Number of notified users"
        },
        "canView" : {
          "type" : "boolean",
          "description" : "Can logged users view the document?"
        }
      }
    },
    "MentionedUser" : {
      "type" : "object",
      "properties" : {
        "alias" : {
          "type" : "string",
          "description" : "User alias mentioned"
        },
        "name" : {
          "type" : "string",
          "description" : "User name mentioned"
        },
        "type" : {
          "type" : "string",
          "description" : "Type of user mentioned",
          "enum" : [ "USER", "COMMUNITY", "EVENT", "APPLICATION" ]
        }
      }
    },
    "PostCollection" : {
      "type" : "object",
      "properties" : {
        "items" : {
          "type" : "array",
          "items" : {
            "$ref" : "#/definitions/PostResponse"
          }
        },
        "hasNext" : {
          "type" : "boolean",
          "readOnly" : true
        }
      }
    },
    "PostCreate" : {
      "type" : "object",
      "required" : [ "alias" ],
      "properties" : {
        "alias" : {
          "type" : "string",
          "description" : "Community or user alias where the post will be created"
        },
        "sociableObjectId" : {
          "type" : "integer",
          "format" : "int64",
          "description" : "Code of Post or Article to share"
        },
        "text" : {
          "type" : "string",
          "description" : "Post text"
        },
        "attachments" : {
          "type" : "array",
          "description" : "List of documents in ECM",
          "items" : {
            "type" : "string"
          }
        }
      }
    },
    "PostCreateInMultiplesPlaces" : {
      "type" : "object",
      "required" : [ "visibility" ],
      "properties" : {
        "sociableObjectId" : {
          "type" : "integer",
          "format" : "int64",
          "description" : "Code of Post or Article to share"
        },
        "text" : {
          "type" : "string",
          "description" : "Post text"
        },
        "visibility" : {
          "type" : "string",
          "description" : "v3.postCreateDTO.visibility",
          "enum" : [ "PUBLIC", "PRIVATE", "CUSTOM" ]
        },
        "attachments" : {
          "type" : "array",
          "description" : "List of documents in ECM",
          "items" : {
            "type" : "string"
          }
        },
        "customUsers" : {
          "type" : "array",
          "description" : "v3.postCreateDTO.customUsers",
          "items" : {
            "type" : "integer",
            "format" : "int64"
          }
        },
        "placesToShare" : {
          "type" : "array",
          "description" : "Communities where the post will be shared",
          "items" : {
            "type" : "string"
          }
        }
      }
    },
    "PostCurrentUserInfo" : {
      "type" : "object",
      "properties" : {
        "hasLiked" : {
          "type" : "boolean",
          "description" : "Did logged-in user like the post?"
        },
        "permissions" : {
          "type" : "array",
          "description" : "Logged-in user permission for the post",
          "items" : {
            "type" : "string"
          }
        },
        "watching" : {
          "type" : "boolean"
        }
      }
    },
    "PostEdit" : {
      "type" : "object",
      "required" : [ "text" ],
      "properties" : {
        "text" : {
          "type" : "string",
          "description" : "Post text"
        }
      }
    },
    "PostResponse" : {
      "type" : "object",
      "properties" : {
        "id" : {
          "type" : "integer",
          "format" : "int64",
          "description" : "Post ID"
        },
        "place" : {
          "description" : "User or Community where the post was created",
          "$ref" : "#/definitions/SocialResponse"
        },
        "publisher" : {
          "description" : "User who created the post",
          "$ref" : "#/definitions/UserResponse"
        },
        "text" : {
          "type" : "string",
          "description" : "Text"
        },
        "url" : {
          "type" : "string",
          "description" : "URL"
        },
        "numberOfComments" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Number of comments"
        },
        "numberOfDenouncements" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Number of reports"
        },
        "numberOfLikes" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Number of likes"
        },
        "numberOfShares" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Number of shares"
        },
        "numberOfWatchers" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Number of followers"
        },
        "removed" : {
          "type" : "boolean",
          "description" : "If the post was deleted"
        },
        "attachedLinks" : {
          "type" : "array",
          "description" : "Links attached to the post",
          "items" : {
            "type" : "string"
          }
        },
        "sharedContent" : {
          "description" : "Content shared in the post (Other posts, forms, folders, ECM documents)",
          "$ref" : "#/definitions/SharedContent"
        },
        "attachment" : {
          "description" : "Post attachment",
          "$ref" : "#/definitions/Attachment"
        },
        "mentions" : {
          "type" : "array",
          "description" : "Users mentioned",
          "items" : {
            "$ref" : "#/definitions/MentionedUser"
          }
        },
        "visibilityType" : {
          "type" : "string",
          "description" : "Visibility",
          "enum" : [ "PUBLIC", "PRIVATE", "CUSTOM" ]
        },
        "currentUserInfo" : {
          "description" : "Logged-in user information in the post (permissions/support/follow-up)",
          "$ref" : "#/definitions/PostCurrentUserInfo"
        },
        "hashTags" : {
          "type" : "array",
          "description" : "List of post hashtags",
          "items" : {
            "type" : "string"
          }
        },
        "createdDate" : {
          "type" : "string",
          "format" : "date-time",
          "description" : "Creation date"
        },
        "updateDate" : {
          "type" : "string",
          "format" : "date-time",
          "description" : "Update date"
        },
        "approved" : {
          "type" : "boolean",
          "description" : "Approved"
        },
        "documentType" : {
          "type" : "string",
          "description" : "Document type",
          "enum" : [ "ARTICLE", "DOCUMENT", "IMAGE", "VIDEO", "FORM", "POST", "FOLDER" ]
        },
        "hasDocumentPermission" : {
          "type" : "boolean",
          "description" : "Document has permission"
        }
      }
    },
    "Share" : {
      "type" : "object",
      "properties" : {
        "contentId" : {
          "type" : "integer",
          "format" : "int64",
          "description" : "Content ID"
        },
        "shareType" : {
          "type" : "string",
          "description" : "Sharing type"
        },
        "socialTargets" : {
          "type" : "array",
          "description" : "v3.ShareDTO.socialTargets",
          "items" : {
            "type" : "string"
          }
        },
        "contentType" : {
          "type" : "string",
          "description" : "Content type"
        },
        "originUrl" : {
          "type" : "string",
          "description" : "URL"
        },
        "note" : {
          "type" : "string",
          "description" : "Shared post text"
        },
        "noCodeExternalId" : {
          "type" : "string",
          "description" : "NoCode external object identifier"
        },
        "noCodeAppId" : {
          "type" : "string",
          "description" : "NoCode app identifier"
        },
        "noCodeTypeId" : {
          "type" : "string",
          "description" : "NoCode object type identifier"
        },
        "noCodeTitle" : {
          "type" : "string",
          "description" : "Title of No-Code object at this time"
        }
      }
    },
    "SharedAttachment" : {
      "type" : "object",
      "properties" : {
        "article" : {
          "description" : "If attachment is an article",
          "$ref" : "#/definitions/Article"
        },
        "document" : {
          "description" : "If attachment is a document",
          "$ref" : "#/definitions/Document"
        },
        "medias" : {
          "type" : "array",
          "description" : "If attachment contains media (Images or videos)",
          "items" : {
            "$ref" : "#/definitions/Media"
          }
        },
        "form" : {
          "description" : "If attachment is a form",
          "$ref" : "#/definitions/Form"
        },
        "folder" : {
          "description" : "If attachment is a folder",
          "$ref" : "#/definitions/Folder"
        },
        "canView" : {
          "type" : "boolean",
          "description" : "If the user can view the shared attachment"
        }
      }
    },
    "SharedContent" : {
      "type" : "object",
      "properties" : {
        "attachment" : {
          "description" : "Attachment that was shared",
          "$ref" : "#/definitions/SharedAttachment"
        },
        "post" : {
          "description" : "Post that was shared",
          "$ref" : "#/definitions/SharedPost"
        }
      }
    },
    "SharedPost" : {
      "type" : "object",
      "properties" : {
        "originalAttachment" : {
          "description" : "Attachment that was originally shared",
          "$ref" : "#/definitions/SharedAttachment"
        },
        "latestSharedPost" : {
          "description" : "Post that was shared",
          "$ref" : "#/definitions/PostResponse"
        }
      }
    },
    "SocialCollection" : {
      "type" : "object",
      "properties" : {
        "items" : {
          "type" : "array",
          "items" : {
            "$ref" : "#/definitions/SocialResponse"
          }
        },
        "hasNext" : {
          "type" : "boolean",
          "readOnly" : true
        }
      }
    },
    "SocialResponse" : {
      "type" : "object",
      "properties" : {
        "id" : {
          "type" : "integer",
          "format" : "int64",
          "description" : "User or community ID"
        },
        "name" : {
          "type" : "string",
          "description" : "User or community name"
        },
        "alias" : {
          "type" : "string",
          "description" : "User or community alias"
        },
        "email" : {
          "type" : "string",
          "description" : "User email. When it’s a community, it returns empty"
        },
        "url" : {
          "type" : "string",
          "description" : "User or community profile URL"
        },
        "type" : {
          "type" : "string",
          "description" : "Location type",
          "enum" : [ "COMMUNITY", "USER" ]
        }
      }
    },
    "UploadStream" : {
      "type" : "object",
      "properties" : {
        "filePath" : {
          "type" : "string"
        }
      }
    },
    "UserCollection" : {
      "type" : "object",
      "properties" : {
        "items" : {
          "type" : "array",
          "items" : {
            "$ref" : "#/definitions/UserResponse"
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
      "required" : [ "alias" ],
      "properties" : {
        "alias" : {
          "type" : "string",
          "description" : "User alias",
          "minLength" : 1,
          "maxLength" : 2147483647
        }
      }
    },
    "UserFavoriteCollection" : {
      "type" : "object",
      "properties" : {
        "items" : {
          "type" : "array",
          "items" : {
            "$ref" : "#/definitions/UserFavoriteResponse"
          }
        },
        "hasNext" : {
          "type" : "boolean",
          "readOnly" : true
        }
      }
    },
    "UserFavoriteResponse" : {
      "type" : "object",
      "properties" : {
        "id" : {
          "type" : "integer",
          "format" : "int64",
          "description" : "User or community ID"
        },
        "name" : {
          "type" : "string",
          "description" : "User or community name"
        },
        "alias" : {
          "type" : "string",
          "description" : "User alias"
        },
        "url" : {
          "type" : "string",
          "description" : "User or community profile URL"
        }
      }
    },
    "UserResponse" : {
      "type" : "object",
      "properties" : {
        "id" : {
          "type" : "integer",
          "format" : "int64",
          "description" : "User or community ID"
        },
        "name" : {
          "type" : "string",
          "description" : "User or community name"
        },
        "alias" : {
          "type" : "string",
          "description" : "User or community alias"
        },
        "email" : {
          "type" : "string",
          "description" : "User email. When it’s a community, it returns empty"
        },
        "url" : {
          "type" : "string",
          "description" : "User or community profile URL"
        },
        "type" : {
          "type" : "string",
          "description" : "Location type",
          "enum" : [ "COMMUNITY", "USER" ]
        },
        "companyId" : {
          "type" : "integer",
          "format" : "int64",
          "description" : "Company ID to which the user is associated"
        },
        "favorite" : {
          "type" : "boolean",
          "description" : "User is favorite"
        },
        "numberOfCommunities" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Number of communities in which the user participates"
        },
        "numberOfFollowers" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Number of user followers"
        },
        "numberOfFollowing" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Number of users that the user is following"
        },
        "relationStatus" : {
          "type" : "string",
          "description" : "Relationship status relative to logged-in user",
          "enum" : [ "RELATED", "NOT_RELATED", "PENDING", "ITSELF" ]
        },
        "state" : {
          "type" : "string",
          "description" : "User status",
          "enum" : [ "UNCONFIRMED", "ACTIVE", "BLOCKED", "REMOVED" ]
        },
        "communityAdmin" : {
          "type" : "boolean"
        },
        "tenantAdmin" : {
          "type" : "boolean"
        }
      }
    }
  }
}
```

---

# TOTVS Fluig API

> **Fonte:** [https://api.fluig.com/latest/content-management/swagger-ui/](https://api.fluig.com/latest/content-management/swagger-ui/)

---

[

](https://api.fluig.com/latest/ "Página inicial")

![](../../swagger/assets/img/lights-off.png)

[

API antiga

](https://api.fluig.com/old/ "API antiga")

Powered by[

](https://www.fluig.com/ "Site fluig")

©2012-2024. Todos os Direitos Reservados. fluig® é uma marca registrada.

---

# swagger.json

> **Fonte:** [https://api.fluig.com/latest/content-management/swagger-ui/swagger.json](https://api.fluig.com/latest/content-management/swagger-ui/swagger.json)

---

```
{
  "swagger" : "2.0",
  "info" : {
    "description" : "Localize e obtenha informações sobre conteúdos de documentos e favoritos",
    "version" : "v2",
    "title" : "Content Management"
  },
  "host" : "",
  "basePath" : "/content-management/api",
  "tags" : [ {
    "name" : "Documents",
    "description" : "Allows management of documents"
  }, {
    "name" : "Pastas",
    "description" : "Permite gerenciar pastas"
  }, {
    "name" : "Marca d'água",
    "description" : "Permite gerenciar marcas d'água"
  } ],
  "paths" : {
    "/v2/documents/allDocumentHits/{documentId}" : {
      "get" : {
        "tags" : [ "Documents" ],
        "summary" : "Busca hit dos documentos",
        "description" : "",
        "operationId" : "getAllDocumentHits",
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "name" : "documentId",
          "in" : "path",
          "description" : "Id do documento",
          "required" : true,
          "type" : "integer",
          "format" : "int32"
        } ],
        "responses" : {
          "200" : {
            "description" : "Successful request with body content",
            "schema" : {
              "$ref" : "#/definitions/Hits"
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
    "/v2/documents/comment" : {
      "post" : {
        "tags" : [ "Documents" ],
        "summary" : "Criar comentário de um documento",
        "description" : "",
        "operationId" : "createDocumentComment",
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "in" : "body",
          "name" : "body",
          "description" : "Comentário",
          "required" : true,
          "schema" : {
            "$ref" : "#/definitions/CreateComment"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "Successful request with body content",
            "schema" : {
              "$ref" : "#/definitions/CreateComment"
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
    "/v2/documents/maxUploadSize" : {
      "get" : {
        "tags" : [ "Documents" ],
        "summary" : "Busca tamanho máximo de upload de documentos em Bytes",
        "description" : "",
        "operationId" : "getMaxUploadSize",
        "produces" : [ "application/json" ],
        "responses" : {
          "200" : {
            "description" : "Successful request with body content",
            "schema" : {
              "$ref" : "#/definitions/PrincipalFileDocument"
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
          "500" : {
            "description" : "Something went wrong on the server. An accompanying error message will explain further",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        }
      }
    },
    "/v2/documents/publish" : {
      "post" : {
        "tags" : [ "Documents" ],
        "summary" : "Publicar arquivos que foram feitos upload no ECM",
        "description" : "",
        "operationId" : "publish",
        "consumes" : [ "application/json" ],
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "in" : "body",
          "name" : "body",
          "description" : "Documento a publicar",
          "required" : true,
          "schema" : {
            "$ref" : "#/definitions/CreateDocument"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "Successful request with body content",
            "schema" : {
              "$ref" : "#/definitions/DocumentDto"
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
    "/v2/documents/upload/{fileName}" : {
      "post" : {
        "tags" : [ "Documents" ],
        "summary" : "Realiza o upload de documentos",
        "description" : "",
        "operationId" : "documentUpload",
        "consumes" : [ "multipart/form-data" ],
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "name" : "fileName",
          "in" : "path",
          "description" : "Nome do documento",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "file",
          "in" : "formData",
          "description" : "Arquivo de Upload",
          "required" : true,
          "type" : "file"
        } ],
        "responses" : {
          "200" : {
            "description" : "Successful request with body content",
            "schema" : {
              "$ref" : "#/definitions/DocumentUpload"
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
        "tags" : [ "Documents" ],
        "summary" : "Remover Upload de Arquivos",
        "description" : "",
        "operationId" : "deleteDocumentUpload",
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "name" : "fileName",
          "in" : "path",
          "description" : "Nome do documento",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "Successful request with body content"
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
    "/v2/documents/upload/{fileName}/{parentId}/publish" : {
      "post" : {
        "tags" : [ "Documents" ],
        "summary" : "Realiza upload de documentos e publica com propriedades default",
        "description" : "",
        "operationId" : "documentUploadAndPublish",
        "consumes" : [ "multipart/form-data" ],
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "name" : "parentId",
          "in" : "path",
          "description" : "Diretório de destino",
          "required" : true,
          "type" : "integer",
          "format" : "int32"
        }, {
          "name" : "fileName",
          "in" : "path",
          "description" : "Nome do documento",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "file",
          "in" : "formData",
          "description" : "Arquivo de Upload",
          "required" : true,
          "type" : "file"
        } ],
        "responses" : {
          "200" : {
            "description" : "Successful request with body content",
            "schema" : {
              "$ref" : "#/definitions/DocumentDto"
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
    "/v2/documents/uploads" : {
      "delete" : {
        "tags" : [ "Documents" ],
        "summary" : "Limpa a área de upload de documentos do usuário",
        "description" : "",
        "operationId" : "removeAllFiles",
        "produces" : [ "application/json" ],
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
      }
    },
    "/v2/documents/{documentId}" : {
      "delete" : {
        "tags" : [ "Documents" ],
        "summary" : "Realiza a exclusão de documentos",
        "description" : "",
        "operationId" : "deleteDocument",
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "name" : "documentId",
          "in" : "path",
          "description" : "Id do documento",
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
    "/v2/documents/{documentId}/comments" : {
      "get" : {
        "tags" : [ "Documents" ],
        "summary" : "Lista comentários de um documento",
        "description" : "",
        "operationId" : "listComments",
        "produces" : [ "application/json" ],
        "parameters" : [ {
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
          "name" : "documentId",
          "in" : "path",
          "description" : "Id do documento",
          "required" : true,
          "type" : "integer",
          "format" : "int32"
        }, {
          "name" : "documentVersion",
          "in" : "query",
          "description" : "Versão do documento",
          "required" : false,
          "type" : "integer",
          "format" : "int32"
        } ],
        "responses" : {
          "200" : {
            "description" : "Successful request with body content",
            "schema" : {
              "$ref" : "#/definitions/DocumentCommentCollection"
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
    "/v2/documents/{documentId}/description" : {
      "patch" : {
        "tags" : [ "Documents" ],
        "summary" : "Altera descrição de documento",
        "description" : "",
        "operationId" : "changeDescription",
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "name" : "documentId",
          "in" : "path",
          "description" : "Id do documento",
          "required" : true,
          "type" : "integer",
          "format" : "int32"
        }, {
          "in" : "body",
          "name" : "body",
          "description" : "Nova descrição",
          "required" : true,
          "schema" : {
            "$ref" : "#/definitions/DocumentDescription"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "Successful request with body content",
            "schema" : {
              "$ref" : "#/definitions/Document"
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
    "/v2/documents/{documentId}/favorite" : {
      "post" : {
        "tags" : [ "Documents" ],
        "summary" : "Adiciona um documento aos favoritos",
        "description" : "",
        "operationId" : "favoriteDocument",
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "name" : "documentId",
          "in" : "path",
          "description" : "Id do documento",
          "required" : true,
          "type" : "integer",
          "format" : "int32"
        } ],
        "responses" : {
          "204" : {
            "description" : "Successful request with body content"
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
      "delete" : {
        "tags" : [ "Documents" ],
        "summary" : "Remove um documento dos favoritos",
        "description" : "",
        "operationId" : "deleteFavorite",
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "name" : "documentId",
          "in" : "path",
          "description" : "Id do documento",
          "required" : true,
          "type" : "integer",
          "format" : "int32"
        } ],
        "responses" : {
          "204" : {
            "description" : "Successful request with body content"
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
    "/v2/documents/{documentId}/thumbnail" : {
      "get" : {
        "tags" : [ "Documents" ],
        "summary" : "Busca o thumbnail do documento",
        "description" : "",
        "operationId" : "getThumbnail",
        "produces" : [ "images/png" ],
        "parameters" : [ {
          "name" : "documentId",
          "in" : "path",
          "description" : "Id do documento",
          "required" : true,
          "type" : "integer",
          "format" : "int32"
        }, {
          "name" : "size",
          "in" : "query",
          "description" : "Buscar por tamanho",
          "required" : false,
          "type" : "string",
          "enum" : [ "SIZE_34_AUTO", "SIZE_60_AUTO", "SIZE_80_AUTO", "SIZE_100_AUTO", "SIZE_140_AUTO", "SIZE_160_AUTO", "SIZE_320_AUTO", "SIZE_432_AUTO", "SIZE_640_AUTO", "SIZE_864_AUTO", "SIZE_1060_AUTO" ]
        }, {
          "name" : "scale",
          "in" : "query",
          "description" : "Buscar por escala em porcentagem do tamanho original",
          "required" : false,
          "type" : "integer",
          "format" : "int32",
          "enum" : [ 25, 50, 75 ]
        } ],
        "responses" : {
          "200" : {
            "description" : "Successful request with body content"
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
    "/v2/documents/{documentId}/thumbnail/article" : {
      "get" : {
        "tags" : [ "Documents" ],
        "summary" : "Busca o thumbnail de um artigo cropado",
        "description" : "",
        "operationId" : "getThumbnailArticle",
        "produces" : [ "images/png" ],
        "parameters" : [ {
          "name" : "documentId",
          "in" : "path",
          "description" : "Id do documento",
          "required" : true,
          "type" : "integer",
          "format" : "int32"
        }, {
          "name" : "scale",
          "in" : "query",
          "description" : "Buscar por escala em porcentagem do tamanho original",
          "required" : false,
          "type" : "integer",
          "format" : "int32",
          "enum" : [ 25, 50, 75 ]
        } ],
        "responses" : {
          "200" : {
            "description" : "Successful request with body content"
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
    "/v2/documents/{id}" : {
      "get" : {
        "tags" : [ "Documents" ],
        "summary" : "Retrieve the document",
        "description" : "",
        "operationId" : "retrieve",
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "id",
          "in" : "path",
          "description" : "The document identifier id",
          "required" : true,
          "type" : "integer",
          "format" : "int32"
        }, {
          "name" : "expand",
          "in" : "query",
          "description" : "Campos expansíveis",
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
              "$ref" : "#/definitions/Document"
            }
          },
          "400" : {
            "description" : "The request was invalid or could not be served. An accompanying error",
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
            "description" : "The request is understood, but it has been refused or access is not",
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
            "description" : "Something went wrong on the server. An accompanying error message will",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        }
      },
      "patch" : {
        "tags" : [ "Documents" ],
        "summary" : "Update document properties",
        "description" : "",
        "operationId" : "update",
        "consumes" : [ "application/json; charset=UTF-8" ],
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "id",
          "in" : "path",
          "description" : "The document identifier id",
          "required" : true,
          "type" : "integer",
          "format" : "int32"
        }, {
          "in" : "body",
          "name" : "body",
          "description" : "The properties to be updated",
          "required" : true,
          "schema" : {
            "type" : "array",
            "items" : {
              "$ref" : "#/definitions/DocumentPatchDTOPatch"
            }
          }
        }, {
          "name" : "expand",
          "in" : "query",
          "description" : "Campos expansíveis",
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
              "$ref" : "#/definitions/Document"
            }
          },
          "400" : {
            "description" : "The request was invalid or could not be served. An accompanying error",
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
            "description" : "The request is understood, but it has been refused or access is not",
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
            "description" : "Something went wrong on the server. An accompanying error message will",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        }
      }
    },
    "/v2/documents/{id}/burn" : {
      "post" : {
        "tags" : [ "Documents" ],
        "summary" : "Salvar os complementos gerando um novo documento",
        "description" : "",
        "operationId" : "burnMarkup",
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "id",
          "in" : "path",
          "description" : "The document identifier id",
          "required" : true,
          "type" : "integer",
          "format" : "int32"
        }, {
          "in" : "body",
          "name" : "body",
          "description" : "Arquivo principal",
          "required" : true,
          "schema" : {
            "$ref" : "#/definitions/PrincipalFileDocument"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "Ok",
            "schema" : {
              "$ref" : "#/definitions/MarkupProcess"
            }
          },
          "400" : {
            "description" : "The request was invalid or could not be served. An accompanying error",
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
            "description" : "The request is understood, but it has been refused or access is not",
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
            "description" : "Something went wrong on the server. An accompanying error message will",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        }
      }
    },
    "/v2/documents/{id}/stream" : {
      "get" : {
        "tags" : [ "Documents" ],
        "summary" : "Retorna uma mídia através do identificador do documento",
        "description" : "",
        "operationId" : "media",
        "produces" : [ "application/octet-stream" ],
        "parameters" : [ {
          "name" : "id",
          "in" : "path",
          "description" : "The document identifier id",
          "required" : true,
          "type" : "integer",
          "format" : "int32"
        } ],
        "responses" : {
          "200" : {
            "description" : "Successful request with body content"
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
    "/v2/documents/{id}/users/{userCode}/hits" : {
      "patch" : {
        "tags" : [ "Documents" ],
        "summary" : "Adiciona visualizações na última versão do documento",
        "description" : "",
        "operationId" : "updateHitsActiveVersion",
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "id",
          "in" : "path",
          "description" : "Id do documento",
          "required" : true,
          "type" : "integer",
          "format" : "int32"
        }, {
          "name" : "userCode",
          "in" : "path",
          "description" : "Código do usuário",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "Successful request with body content"
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
    "/v2/documents/{id}/users/{userCode}/version/{version}/hits" : {
      "patch" : {
        "tags" : [ "Documents" ],
        "summary" : "Adiciona visualizações ao documento na versão informada",
        "description" : "",
        "operationId" : "updateHitsWithVersion",
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "id",
          "in" : "path",
          "description" : "Id do documento",
          "required" : true,
          "type" : "integer",
          "format" : "int32"
        }, {
          "name" : "userCode",
          "in" : "path",
          "description" : "Código do usuário",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "version",
          "in" : "path",
          "description" : "Versão do documento",
          "required" : true,
          "type" : "integer",
          "format" : "int32"
        } ],
        "responses" : {
          "200" : {
            "description" : "Successful request with body content"
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
    "/v2/documents/{id}/viewingSession/{viewingSessionId}/markupProcess/{markupProcessId}" : {
      "get" : {
        "tags" : [ "Documents" ],
        "summary" : "Acompanhar progresso do processo de salvar os complementos",
        "description" : "",
        "operationId" : "checkMarkupProcessProgress",
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "id",
          "in" : "path",
          "description" : "The document identifier id",
          "required" : true,
          "type" : "integer",
          "format" : "int32"
        }, {
          "name" : "viewingSessionId",
          "in" : "path",
          "description" : "Id da sessão de visualização",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "markupProcessId",
          "in" : "path",
          "description" : "Id do processo de marcação",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "Ok",
            "schema" : {
              "$ref" : "#/definitions/MarkupProcessProgress"
            }
          },
          "400" : {
            "description" : "The request was invalid or could not be served. An accompanying error",
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
            "description" : "The request is understood, but it has been refused or access is not",
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
            "description" : "Something went wrong on the server. An accompanying error message will",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        }
      }
    },
    "/v2/folders/{documentRootId}/{currentDocumentId}" : {
      "get" : {
        "tags" : [ "Pastas" ],
        "summary" : "Busca o breadcrumb abaixo do documento enviado como raiz",
        "description" : "",
        "operationId" : "getBreadCrumb",
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "name" : "currentDocumentId",
          "in" : "path",
          "description" : "Id da pasta atual",
          "required" : true,
          "type" : "integer",
          "format" : "int32"
        }, {
          "name" : "documentRootId",
          "in" : "path",
          "description" : "Id da pasta raiz",
          "required" : true,
          "type" : "integer",
          "format" : "int32"
        } ],
        "responses" : {
          "200" : {
            "description" : "Successful request with body content",
            "schema" : {
              "$ref" : "#/definitions/FolderPath"
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
    "/v2/folders/{parentId}" : {
      "post" : {
        "tags" : [ "Pastas" ],
        "summary" : "Realiza a criação de pasta",
        "description" : "",
        "operationId" : "createNewFolder",
        "consumes" : [ "application/json" ],
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "name" : "parentId",
          "in" : "path",
          "description" : "Id da pasta",
          "required" : true,
          "type" : "integer",
          "format" : "int32"
        }, {
          "in" : "body",
          "name" : "body",
          "description" : "Descrição da pasta",
          "required" : true,
          "schema" : {
            "$ref" : "#/definitions/DocumentDescription"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "Successful request with body content",
            "schema" : {
              "$ref" : "#/definitions/DocumentDto"
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
    "/v2/folders/{parentId}/documents" : {
      "get" : {
        "tags" : [ "Pastas" ],
        "summary" : "Busca documentos de uma pasta",
        "description" : "",
        "operationId" : "getDocuments",
        "consumes" : [ "application/json" ],
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "name" : "parentId",
          "in" : "path",
          "description" : "Id da pasta",
          "required" : true,
          "type" : "integer",
          "format" : "int32"
        }, {
          "name" : "authorId",
          "in" : "query",
          "description" : "Filtra pelo autor documento",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "documentDescription",
          "in" : "query",
          "description" : "Filtra pela descrição do documento",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "documentTypeId",
          "in" : "query",
          "description" : "Filtra pelo tipo de documento",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "topicId",
          "in" : "query",
          "description" : "Filtra pelo assunto do documento",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "publisherAlias",
          "in" : "query",
          "description" : "Filtra pelo publicador do documento",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "dtstartModify",
          "in" : "query",
          "description" : "Filtra pela data de modificação - Data inicial",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "dtendModify",
          "in" : "query",
          "description" : "Filtra pela data de modificação - Data final",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "idDocumentStart",
          "in" : "query",
          "description" : "Filtra a partir do ID inicial",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "idDocumentEnd",
          "in" : "query",
          "description" : "Filtra até o ID final",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "customFieldId",
          "in" : "query",
          "description" : "Filtra por metadados customizados",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "customDescription",
          "in" : "query",
          "description" : "FIltra por descrição customizada",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "order",
          "in" : "query",
          "description" : "Ordenação",
          "required" : true,
          "type" : "array",
          "items" : {
            "type" : "string",
            "enum" : [ "documentDescription", "lastModifiedDate", "documentId", "priority", "size", "favorite", "-documentDescription", "-lastModifiedDate", "-documentId", "-priority", "-size", "-favorite" ]
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
        } ],
        "responses" : {
          "200" : {
            "description" : "Successful request with body content",
            "schema" : {
              "$ref" : "#/definitions/Datatable"
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
    "/v2/watermarks" : {
      "get" : {
        "tags" : [ "Marca d'água" ],
        "summary" : "Buscar por marcas d'água",
        "description" : "",
        "operationId" : "findWatermarks",
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "order",
          "in" : "query",
          "description" : "Campos Ordenados",
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
          "name" : "id",
          "in" : "query",
          "description" : "Buscar pelo id da marca d'água",
          "required" : false,
          "type" : "array",
          "items" : {
            "type" : "object"
          },
          "collectionFormat" : "multi"
        }, {
          "name" : "name",
          "in" : "query",
          "description" : "Buscar pelo nome da marca d'água",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "value",
          "in" : "query",
          "description" : "Buscar pelo valor da marca d'água",
          "required" : false,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "response.status.ok",
            "schema" : {
              "$ref" : "#/definitions/WatermarkList"
            }
          },
          "400" : {
            "description" : "response.status.bad.request",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          },
          "401" : {
            "description" : "response.status.unauthorized",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          },
          "403" : {
            "description" : "response.status.forbidden",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          },
          "500" : {
            "description" : "response.status.server.error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        }
      },
      "post" : {
        "tags" : [ "Marca d'água" ],
        "summary" : "Adiciona uma marca d'água",
        "description" : "",
        "operationId" : "createWatermark",
        "consumes" : [ "application/json; charset=UTF-8" ],
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "in" : "body",
          "name" : "body",
          "description" : "Marca d'água",
          "required" : true,
          "schema" : {
            "$ref" : "#/definitions/WatermarkUpdate"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "Successful request with body content",
            "schema" : {
              "$ref" : "#/definitions/Watermark"
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
    "/v2/watermarks/{id}" : {
      "get" : {
        "tags" : [ "Marca d'água" ],
        "summary" : "Busca a marca d'água",
        "description" : "",
        "operationId" : "retrieveWatermark",
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "id",
          "in" : "path",
          "description" : "Identificador da marca d'água",
          "required" : true,
          "type" : "integer",
          "format" : "int32"
        } ],
        "responses" : {
          "200" : {
            "description" : "Successful request with body content",
            "schema" : {
              "$ref" : "#/definitions/Watermark"
            }
          },
          "400" : {
            "description" : "The request was invalid or could not be served. An accompanying error",
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
            "description" : "The request is understood, but it has been refused or access is not",
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
            "description" : "Something went wrong on the server. An accompanying error message will",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        }
      },
      "put" : {
        "tags" : [ "Marca d'água" ],
        "summary" : "Edita uma marca d'água",
        "description" : "",
        "operationId" : "editWatermark",
        "consumes" : [ "application/json; charset=UTF-8" ],
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "name" : "id",
          "in" : "path",
          "description" : "Identificador da marca d'água",
          "required" : true,
          "type" : "integer",
          "format" : "int32"
        }, {
          "in" : "body",
          "name" : "body",
          "description" : "Marca d'água",
          "required" : true,
          "schema" : {
            "$ref" : "#/definitions/WatermarkUpdate"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "Successful request with body content",
            "schema" : {
              "$ref" : "#/definitions/Watermark"
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
        "tags" : [ "Marca d'água" ],
        "summary" : "Remove uma marca d'água",
        "description" : "",
        "operationId" : "removeWatermark",
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "id",
          "in" : "path",
          "description" : "Identificador da marca d'água",
          "required" : true,
          "type" : "integer",
          "format" : "int32"
        } ],
        "responses" : {
          "200" : {
            "description" : "Successful request with body content",
            "schema" : {
              "$ref" : "#/definitions/NoContent"
            }
          },
          "400" : {
            "description" : "The request was invalid or could not be served. An accompanying error",
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
            "description" : "The request is understood, but it has been refused or access is not",
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
            "description" : "Something went wrong on the server. An accompanying error message will",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        }
      }
    },
    "/v2/watermarks/{id}/listDocuments" : {
      "get" : {
        "tags" : [ "Marca d'água" ],
        "summary" : "Lista os documentos que utilizam uma marca d'água",
        "description" : "",
        "operationId" : "listDocumentsAssociatedWithWatermark",
        "produces" : [ "application/json; charset=UTF-8" ],
        "parameters" : [ {
          "name" : "id",
          "in" : "path",
          "description" : "Identificador da marca d'água",
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
            "description" : "Successful request with body content",
            "schema" : {
              "$ref" : "#/definitions/Document"
            }
          },
          "400" : {
            "description" : "The request was invalid or could not be served. An accompanying error",
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
            "description" : "The request is understood, but it has been refused or access is not",
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
            "description" : "Something went wrong on the server. An accompanying error message will",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        }
      }
    }
  },
  "definitions" : {
    "Attachment" : {
      "type" : "object",
      "properties" : {
        "fileName" : {
          "type" : "string"
        },
        "pathName" : {
          "type" : "string"
        },
        "fullPatch" : {
          "type" : "string"
        },
        "fileSize" : {
          "type" : "integer",
          "format" : "int64"
        },
        "principal" : {
          "type" : "boolean"
        },
        "attach" : {
          "type" : "boolean"
        },
        "iconPath" : {
          "type" : "string"
        },
        "descriptor" : {
          "type" : "boolean"
        },
        "fileSelected" : {
          "$ref" : "#/definitions/Attachment"
        },
        "editing" : {
          "type" : "boolean"
        },
        "filecontent" : {
          "type" : "array",
          "items" : {
            "type" : "string",
            "format" : "byte"
          }
        },
        "mobile" : {
          "type" : "boolean"
        },
        "supportedNewViewer" : {
          "type" : "boolean"
        },
        "fileModificationDate" : {
          "type" : "string",
          "format" : "date-time"
        }
      }
    },
    "CreateComment" : {
      "type" : "object",
      "required" : [ "documentId", "text", "version" ],
      "properties" : {
        "text" : {
          "type" : "string",
          "description" : "Texto do comentário"
        },
        "version" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Versão do documento"
        },
        "documentId" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Id do documento"
        }
      }
    },
    "CreateDocument" : {
      "type" : "object",
      "required" : [ "parentDocumentId", "phisicalFile" ],
      "properties" : {
        "tenantId" : {
          "type" : "integer",
          "format" : "int64"
        },
        "documentId" : {
          "type" : "integer",
          "format" : "int32"
        },
        "version" : {
          "type" : "integer",
          "format" : "int32"
        },
        "documentTypeId" : {
          "type" : "string"
        },
        "languageId" : {
          "type" : "string"
        },
        "iconId" : {
          "type" : "integer",
          "format" : "int32"
        },
        "topicId" : {
          "type" : "integer",
          "format" : "int32"
        },
        "colleagueId" : {
          "type" : "string"
        },
        "documentDescription" : {
          "type" : "string"
        },
        "phisicalFile" : {
          "type" : "string",
          "description" : "Nome do arquivo que vai ser publicado"
        },
        "keyWord" : {
          "type" : "string"
        },
        "createDate" : {
          "type" : "string",
          "format" : "date-time"
        },
        "approvedDate" : {
          "type" : "string",
          "format" : "date-time"
        },
        "lastModifiedDate" : {
          "type" : "string",
          "format" : "date-time"
        },
        "documentType" : {
          "type" : "string"
        },
        "expirationDate" : {
          "type" : "string",
          "format" : "date-time"
        },
        "accessCount" : {
          "type" : "integer",
          "format" : "int32"
        },
        "atualizationId" : {
          "type" : "integer",
          "format" : "int32"
        },
        "parentDocumentId" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Código da pasta onde o documento vai ser publicado"
        },
        "visualization" : {
          "type" : "string"
        },
        "relatedFiles" : {
          "type" : "string"
        },
        "activeVersion" : {
          "type" : "boolean"
        },
        "versionDescription" : {
          "type" : "string"
        },
        "approvalAndOr" : {
          "type" : "boolean"
        },
        "externalDocumentId" : {
          "type" : "string"
        },
        "downloadEnabled" : {
          "type" : "boolean"
        },
        "approved" : {
          "type" : "boolean"
        },
        "validationStartDate" : {
          "type" : "string",
          "format" : "date-time"
        },
        "publisherId" : {
          "type" : "string"
        },
        "cardDescription" : {
          "type" : "string"
        },
        "allowMuiltiCardsPerUser" : {
          "type" : "boolean"
        },
        "documentPropertyNumber" : {
          "type" : "integer",
          "format" : "int32"
        },
        "documentPropertyVersion" : {
          "type" : "integer",
          "format" : "int32"
        },
        "privateDocument" : {
          "type" : "boolean"
        },
        "privateColleagueId" : {
          "type" : "string"
        },
        "indexed" : {
          "type" : "boolean"
        },
        "priority" : {
          "type" : "integer",
          "format" : "int32"
        },
        "translated" : {
          "type" : "boolean"
        },
        "userNotify" : {
          "type" : "boolean"
        },
        "expires" : {
          "type" : "boolean"
        },
        "volumeId" : {
          "type" : "string"
        },
        "updateIsoProperties" : {
          "type" : "boolean"
        },
        "lastModifiedTime" : {
          "type" : "string"
        },
        "deleted" : {
          "type" : "boolean"
        },
        "imutable" : {
          "type" : "boolean"
        },
        "internalVisualizer" : {
          "type" : "boolean"
        },
        "phisicalFileSize" : {
          "type" : "number",
          "format" : "float"
        },
        "permissionType" : {
          "type" : "integer",
          "format" : "int32"
        },
        "restrictionType" : {
          "type" : "integer",
          "format" : "int32"
        },
        "siteCode" : {
          "type" : "string"
        },
        "draft" : {
          "type" : "boolean"
        },
        "onCheckout" : {
          "type" : "boolean"
        },
        "iconPath" : {
          "type" : "string"
        },
        "versionAction" : {
          "type" : "string"
        },
        "uploadId" : {
          "type" : "string"
        },
        "inheritSecurity" : {
          "type" : "boolean"
        }
      }
    },
    "Datatable" : {
      "type" : "object",
      "properties" : {
        "totalpages" : {
          "type" : "integer",
          "format" : "int32"
        },
        "totalrecords" : {
          "type" : "string"
        },
        "currpage" : {
          "type" : "integer",
          "format" : "int32"
        },
        "securityLevel" : {
          "type" : "integer",
          "format" : "int32"
        },
        "invdata" : {
          "type" : "array",
          "items" : {
            "type" : "object"
          }
        },
        "genericObject" : {
          "type" : "object"
        }
      }
    },
    "Document" : {
      "type" : "object",
      "properties" : {
        "id" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Document id"
        },
        "description" : {
          "type" : "string",
          "description" : "Document description"
        },
        "hasPermission" : {
          "type" : "boolean",
          "description" : "usuário tem permissão de visualizar este documento"
        },
        "path" : {
          "type" : "array",
          "description" : "Caminho do documento",
          "items" : {
            "$ref" : "#/definitions/FolderPath"
          }
        },
        "publisher" : {
          "type" : "string",
          "description" : "Matrícula do publicador"
        },
        "publisherName" : {
          "type" : "string",
          "description" : "Nome do publicador"
        },
        "publishDate" : {
          "type" : "string",
          "format" : "date-time",
          "description" : "document.dto.api.model.property.publishDate"
        },
        "author" : {
          "type" : "string",
          "description" : "Matrícula do autor"
        },
        "authorName" : {
          "type" : "string",
          "description" : "Nome do autor"
        },
        "currentVersion" : {
          "type" : "boolean",
          "description" : "Documento está usando a marca na versão atual"
        },
        "versionsCount" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Quantidade de versões usando essa matrícula"
        }
      }
    },
    "DocumentComment" : {
      "type" : "object",
      "properties" : {
        "id" : {
          "type" : "integer",
          "format" : "int64",
          "description" : "Id do comentário"
        },
        "documentId" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Id do documento"
        },
        "version" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Versão do documento"
        },
        "user" : {
          "type" : "string",
          "description" : "Autor"
        },
        "comment" : {
          "type" : "string",
          "description" : "Comentáriodocument.comments.dto.api.model.property.creationDate=Data de criaçãodocument.comments.dto.api.model.property.hasMentions=Possui mençãodocument.comments.dto.api.model.property.textWithoutMention=Comentário sem mençãodocument.comments.dto.api.model.property.formattedDate=Data formatada"
        },
        "creationDate" : {
          "type" : "string",
          "format" : "date-time",
          "description" : "document.comments.dto.api.model.property.creationDate"
        },
        "hasMentions" : {
          "type" : "boolean",
          "description" : "document.dto.api.model.property.hasMentions"
        },
        "formattedTextWithoutMention" : {
          "type" : "string",
          "description" : "document.comments.dto.api.model.property.textWithoutMention"
        },
        "formattedDate" : {
          "type" : "string",
          "description" : "document.comments.dto.api.model.property.formattedDate"
        }
      }
    },
    "DocumentCommentCollection" : {
      "type" : "object",
      "properties" : {
        "items" : {
          "type" : "array",
          "items" : {
            "$ref" : "#/definitions/DocumentComment"
          }
        },
        "hasNext" : {
          "type" : "boolean",
          "readOnly" : true
        }
      }
    },
    "DocumentDescription" : {
      "type" : "object",
      "required" : [ "alias" ],
      "properties" : {
        "alias" : {
          "type" : "string",
          "description" : "Descrição",
          "minLength" : 1,
          "maxLength" : 2147483647
        }
      }
    },
    "DocumentDto" : {
      "type" : "object",
      "properties" : {
        "documentId" : {
          "type" : "integer",
          "format" : "int32"
        },
        "version" : {
          "type" : "integer",
          "format" : "int32"
        },
        "companyId" : {
          "type" : "integer",
          "format" : "int64"
        },
        "documentTypeId" : {
          "type" : "string"
        },
        "languageId" : {
          "type" : "string"
        },
        "iconId" : {
          "type" : "integer",
          "format" : "int32"
        },
        "iconPath" : {
          "type" : "string"
        },
        "topicId" : {
          "type" : "integer",
          "format" : "int32"
        },
        "colleagueId" : {
          "type" : "string"
        },
        "folderId" : {
          "type" : "integer",
          "format" : "int32"
        },
        "documentDescription" : {
          "type" : "string"
        },
        "additionalComments" : {
          "type" : "string"
        },
        "phisicalFile" : {
          "type" : "string"
        },
        "documentKeyWord" : {
          "type" : "string"
        },
        "createDate" : {
          "type" : "string",
          "format" : "date-time"
        },
        "createDateInMilliseconds" : {
          "type" : "integer",
          "format" : "int64"
        },
        "approvedDate" : {
          "type" : "string",
          "format" : "date-time"
        },
        "lastModifiedDate" : {
          "type" : "string",
          "format" : "date-time"
        },
        "documentType" : {
          "type" : "string"
        },
        "expirationDate" : {
          "type" : "string",
          "format" : "date-time"
        },
        "accessCount" : {
          "type" : "integer",
          "format" : "int32"
        },
        "atualizationId" : {
          "type" : "integer",
          "format" : "int32"
        },
        "parentDocumentId" : {
          "type" : "integer",
          "format" : "int32"
        },
        "visualization" : {
          "type" : "string"
        },
        "relatedFiles" : {
          "type" : "string"
        },
        "activeVersion" : {
          "type" : "boolean"
        },
        "tool" : {
          "type" : "boolean"
        },
        "versionDescription" : {
          "type" : "string"
        },
        "approvalAndOr" : {
          "type" : "boolean"
        },
        "backgroundColor" : {
          "type" : "string"
        },
        "backgroundImage" : {
          "type" : "string"
        },
        "externalDocumentId" : {
          "type" : "string"
        },
        "bannerImage" : {
          "type" : "string"
        },
        "downloadEnabled" : {
          "type" : "boolean"
        },
        "approved" : {
          "type" : "boolean"
        },
        "searchNumber" : {
          "type" : "integer",
          "format" : "int32"
        },
        "newStructure" : {
          "type" : "boolean"
        },
        "validationStartDate" : {
          "type" : "string",
          "format" : "date-time"
        },
        "publisherId" : {
          "type" : "string"
        },
        "publisherName" : {
          "type" : "string"
        },
        "cardDescription" : {
          "type" : "string"
        },
        "documentPropertyNumber" : {
          "type" : "integer",
          "format" : "int32"
        },
        "documentPropertyVersion" : {
          "type" : "integer",
          "format" : "int32"
        },
        "privateDocument" : {
          "type" : "boolean"
        },
        "privateColleagueId" : {
          "type" : "string"
        },
        "languageIndicator" : {
          "type" : "string"
        },
        "indexed" : {
          "type" : "boolean"
        },
        "priority" : {
          "type" : "integer",
          "format" : "int32"
        },
        "translated" : {
          "type" : "boolean"
        },
        "protectedCopy" : {
          "type" : "boolean"
        },
        "userNotify" : {
          "type" : "boolean"
        },
        "expires" : {
          "type" : "boolean"
        },
        "volumeId" : {
          "type" : "string"
        },
        "inheritSecurity" : {
          "type" : "boolean"
        },
        "updateIsoProperties" : {
          "type" : "boolean"
        },
        "lastModifiedTime" : {
          "type" : "string"
        },
        "keyWord" : {
          "type" : "string"
        },
        "deleted" : {
          "type" : "boolean"
        },
        "imutable" : {
          "type" : "boolean"
        },
        "versionOption" : {
          "type" : "string"
        },
        "datasetName" : {
          "type" : "string"
        },
        "colleagueName" : {
          "type" : "string"
        },
        "draft" : {
          "type" : "boolean"
        },
        "crc" : {
          "type" : "integer",
          "format" : "int64"
        },
        "internalVisualizer" : {
          "type" : "boolean"
        },
        "watermarkId" : {
          "type" : "integer",
          "format" : "int32"
        },
        "hashAnnotations" : {
          "type" : "string"
        },
        "phisicalFileSize" : {
          "type" : "number",
          "format" : "float"
        },
        "securityLevel" : {
          "type" : "integer",
          "format" : "int32"
        },
        "rowId" : {
          "type" : "integer",
          "format" : "int32"
        },
        "favorite" : {
          "type" : "boolean"
        },
        "sociableDocumentDto" : {
          "$ref" : "#/definitions/SociableDocumentDto"
        },
        "allowMuiltiCardsPerUser" : {
          "type" : "boolean"
        },
        "userAnswerForm" : {
          "type" : "boolean"
        },
        "expiredForm" : {
          "type" : "boolean"
        },
        "dateFormStarted" : {
          "type" : "boolean"
        },
        "articleContent" : {
          "type" : "string"
        },
        "metaListId" : {
          "type" : "integer",
          "format" : "int32"
        },
        "metaListRecordId" : {
          "type" : "integer",
          "format" : "int32"
        },
        "permissionType" : {
          "type" : "integer",
          "format" : "int32"
        },
        "restrictionType" : {
          "type" : "integer",
          "format" : "int32"
        },
        "isEncrypted" : {
          "type" : "boolean"
        },
        "userPermission" : {
          "type" : "integer",
          "format" : "int32"
        },
        "activeUserApprover" : {
          "type" : "boolean"
        },
        "onCheckout" : {
          "type" : "boolean"
        },
        "forAproval" : {
          "type" : "boolean"
        },
        "siteCode" : {
          "type" : "string"
        },
        "fileURL" : {
          "type" : "string"
        },
        "attachments" : {
          "type" : "array",
          "items" : {
            "$ref" : "#/definitions/Attachment"
          }
        },
        "pdfRenderEngine" : {
          "type" : "string"
        },
        "socialDocument" : {
          "type" : "string"
        },
        "inheritApprovers" : {
          "type" : "boolean"
        },
        "convertDocumentType" : {
          "type" : "integer",
          "format" : "int32"
        },
        "notificationDays" : {
          "type" : "integer",
          "format" : "int32"
        },
        "quota" : {
          "type" : "integer",
          "format" : "int32"
        },
        "publicDocument" : {
          "type" : "boolean"
        },
        "uuid" : {
          "type" : "string"
        }
      }
    },
    "DocumentPatchDTOPatch" : {
      "properties" : {
        "entityDTO" : {
          "type" : "object"
        },
        "op" : {
          "type" : "string",
          "enum" : [ "REMOVE", "REPLACE" ]
        },
        "path" : {
          "type" : "string"
        },
        "value" : {
          "type" : "object"
        }
      },
      "example" : [ {
        "op" : "replace",
        "path" : "/publicDocument",
        "value" : "test"
      }, {
        "op" : "replace",
        "path" : "/downloadEnabled",
        "value" : "test"
      } ]
    },
    "DocumentUpload" : {
      "type" : "object",
      "properties" : {
        "fileName" : {
          "type" : "string"
        },
        "parentId" : {
          "type" : "integer",
          "format" : "int32"
        },
        "documentDescription" : {
          "type" : "string"
        },
        "uploadId" : {
          "type" : "string"
        },
        "social" : {
          "type" : "boolean"
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
    "FolderPath" : {
      "type" : "object",
      "properties" : {
        "description" : {
          "type" : "string",
          "description" : "Descrição da pasta"
        },
        "id" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Id da pasta"
        }
      }
    },
    "HitDto" : {
      "type" : "object",
      "properties" : {
        "nmColaborador" : {
          "type" : "string"
        },
        "nrVersao" : {
          "type" : "integer",
          "format" : "int32"
        },
        "dtConhecimento" : {
          "type" : "string",
          "format" : "date-time"
        },
        "dtUltConsult" : {
          "type" : "string",
          "format" : "date-time"
        },
        "login" : {
          "type" : "string"
        },
        "versionDescription" : {
          "type" : "string"
        }
      }
    },
    "Hits" : {
      "type" : "object",
      "properties" : {
        "hitDtos" : {
          "type" : "array",
          "items" : {
            "$ref" : "#/definitions/HitDto"
          }
        },
        "accessCount" : {
          "type" : "integer",
          "format" : "int64"
        }
      }
    },
    "MarkupProcess" : {
      "type" : "object",
      "properties" : {
        "viewingSessionId" : {
          "type" : "string",
          "description" : "Id da sessão de visualização"
        },
        "processId" : {
          "type" : "string",
          "description" : "Id do processo de marcação"
        }
      }
    },
    "MarkupProcessProgress" : {
      "type" : "object",
      "properties" : {
        "state" : {
          "type" : "string",
          "description" : "Estado do processo de marcação"
        },
        "percentComplete" : {
          "type" : "number",
          "format" : "float",
          "description" : "Progresso do processo de marcação"
        },
        "errorCode" : {
          "type" : "string",
          "description" : "Código de erro do processo de marcação"
        }
      }
    },
    "NoContent" : {
      "type" : "object"
    },
    "PrincipalFileDocument" : {
      "type" : "object",
      "properties" : {
        "maxUploadSize" : {
          "type" : "integer",
          "format" : "int64",
          "description" : "Tamanho máximo de upload"
        }
      }
    },
    "SociableDocumentDto" : {
      "type" : "object",
      "properties" : {
        "documentId" : {
          "type" : "integer",
          "format" : "int32"
        },
        "version" : {
          "type" : "integer",
          "format" : "int32"
        },
        "numberLikes" : {
          "type" : "integer",
          "format" : "int32"
        },
        "numberShares" : {
          "type" : "integer",
          "format" : "int32"
        },
        "numberComments" : {
          "type" : "integer",
          "format" : "int32"
        },
        "numberDenouncements" : {
          "type" : "integer",
          "format" : "int32"
        },
        "numberFollows" : {
          "type" : "integer",
          "format" : "int32"
        },
        "sociableId" : {
          "type" : "integer",
          "format" : "int64"
        },
        "liked" : {
          "type" : "boolean"
        },
        "following" : {
          "type" : "boolean"
        },
        "shared" : {
          "type" : "boolean"
        },
        "commented" : {
          "type" : "boolean"
        },
        "denounced" : {
          "type" : "boolean"
        }
      }
    },
    "Watermark" : {
      "type" : "object",
      "required" : [ "name", "value" ],
      "properties" : {
        "name" : {
          "type" : "string",
          "description" : "Nome da marca d'água"
        },
        "value" : {
          "type" : "string",
          "description" : "Texto da marca d'água"
        },
        "format" : {
          "description" : "Opções de formatação da marca d'água",
          "$ref" : "#/definitions/WatermarkFormat"
        },
        "showOptions" : {
          "description" : "Itens a serem exibidos na marca d'água",
          "$ref" : "#/definitions/WatermarkShowOptions"
        },
        "id" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "Id da marca d'água"
        }
      }
    },
    "WatermarkFormat" : {
      "type" : "object",
      "properties" : {
        "rotation" : {
          "type" : "number",
          "format" : "double",
          "example" : 90.0,
          "description" : "Rotação da marca d'água"
        },
        "color" : {
          "type" : "string",
          "example" : "#FF0000",
          "description" : "Cor da marca d'água"
        },
        "fontFamily" : {
          "type" : "string",
          "example" : "Helvetica",
          "description" : "Nome da fonte da marca d'água "
        },
        "fontSize" : {
          "type" : "integer",
          "format" : "int32",
          "example" : 16,
          "description" : "Tamanho da fonte da marca d'água"
        },
        "horizontalAlign" : {
          "type" : "string",
          "description" : "Alinhamento horizontal da marca d'água",
          "enum" : [ "LEFT", "CENTER", "RIGHT" ]
        },
        "verticalAlign" : {
          "type" : "string",
          "description" : "Alinhamento vertical da marca d'água",
          "enum" : [ "TOP", "MIDDLE", "BOTTOM" ]
        },
        "opacity" : {
          "type" : "integer",
          "format" : "int32",
          "example" : 40,
          "description" : "TranspararÃªncia da marca d'água"
        }
      }
    },
    "WatermarkList" : {
      "type" : "object",
      "properties" : {
        "items" : {
          "type" : "array",
          "items" : {
            "$ref" : "#/definitions/Watermark"
          }
        },
        "hasNext" : {
          "type" : "boolean",
          "readOnly" : true
        }
      }
    },
    "WatermarkShowOptions" : {
      "type" : "object",
      "properties" : {
        "documentVersion" : {
          "type" : "boolean",
          "description" : "Exibir a versÃ£o do documento na marca d'água"
        },
        "creationDate" : {
          "type" : "boolean",
          "description" : "Exibir a data de criação do documento na marca d'água"
        },
        "updateDate" : {
          "type" : "boolean",
          "description" : "Exibir a data de atualização do documento na marca d'água"
        },
        "currentUser" : {
          "type" : "boolean",
          "description" : "Exibir o usuário atual na marca d'água"
        },
        "currentDate" : {
          "type" : "boolean",
          "description" : "Exibir a data atual na marca d'água"
        },
        "currentTime" : {
          "type" : "boolean",
          "description" : "Exibir a hora atual na marca d'água"
        }
      }
    },
    "WatermarkUpdate" : {
      "type" : "object",
      "required" : [ "name", "value" ],
      "properties" : {
        "name" : {
          "type" : "string",
          "description" : "Nome da marca d'água"
        },
        "value" : {
          "type" : "string",
          "description" : "Texto da marca d'água"
        },
        "format" : {
          "description" : "Opções de formatação da marca d'água",
          "$ref" : "#/definitions/WatermarkFormat"
        },
        "showOptions" : {
          "description" : "Itens a serem exibidos na marca d'água",
          "$ref" : "#/definitions/WatermarkShowOptions"
        }
      }
    }
  }
}
```

---

# TOTVS Fluig API

> **Fonte:** [https://api.fluig.com/latest/dataservice/swagger-ui/](https://api.fluig.com/latest/dataservice/swagger-ui/)

---

[

](https://api.fluig.com/latest/ "Página inicial")

![](../../swagger/assets/img/lights-off.png)

[

API antiga

](https://api.fluig.com/old/ "API antiga")

Powered by[

](https://www.fluig.com/ "Site fluig")

©2012-2024. Todos os Direitos Reservados. fluig® é uma marca registrada.

---

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

---

# TOTVS Fluig API

> **Fonte:** [https://api.fluig.com/latest/dataset/swagger-ui/](https://api.fluig.com/latest/dataset/swagger-ui/)

---

[

](https://api.fluig.com/latest/ "Página inicial")

![](../../swagger/assets/img/lights-off.png)

[

API antiga

](https://api.fluig.com/old/ "API antiga")

Powered by[

](https://www.fluig.com/ "Site fluig")

©2012-2024. Todos os Direitos Reservados. fluig® é uma marca registrada.

---

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

---

# TOTVS Fluig API

> **Fonte:** [https://api.fluig.com/latest/ecm-forms/swagger-ui/](https://api.fluig.com/latest/ecm-forms/swagger-ui/)

---

[

](https://api.fluig.com/latest/ "Página inicial")

![](../../swagger/assets/img/lights-off.png)

[

API antiga

](https://api.fluig.com/old/ "API antiga")

Powered by[

](https://www.fluig.com/ "Site fluig")

©2012-2024. Todos os Direitos Reservados. fluig® é uma marca registrada.

---

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

---

# TOTVS Fluig API

> **Fonte:** [https://api.fluig.com/latest/environment/swagger-ui/](https://api.fluig.com/latest/environment/swagger-ui/)

---

[

](https://api.fluig.com/latest/ "Página inicial")

![](../../swagger/assets/img/lights-off.png)

[

API antiga

](https://api.fluig.com/old/ "API antiga")

Powered by[

](https://www.fluig.com/ "Site fluig")

©2012-2024. Todos os Direitos Reservados. fluig® é uma marca registrada.

---

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

---

# TOTVS Fluig API

> **Fonte:** [https://api.fluig.com/latest/form-management/swagger-ui/](https://api.fluig.com/latest/form-management/swagger-ui/)

---

[

](https://api.fluig.com/latest/ "Página inicial")

![](../../swagger/assets/img/lights-off.png)

[

API antiga

](https://api.fluig.com/old/ "API antiga")

Powered by[

](https://www.fluig.com/ "Site fluig")

©2012-2024. Todos os Direitos Reservados. fluig® é uma marca registrada.

---

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

---

# TOTVS Fluig API

> **Fonte:** [https://api.fluig.com/latest/](https://api.fluig.com/latest/)

---

*[Conteúdo vazio]*

---

# TOTVS Fluig API

> **Fonte:** [https://api.fluig.com/latest/](https://api.fluig.com/latest/)

---

*[Conteúdo vazio]*

---

# TOTVS Fluig API

> **Fonte:** [https://api.fluig.com/latest/page-management/swagger-ui/](https://api.fluig.com/latest/page-management/swagger-ui/)

---

[

](https://api.fluig.com/latest/ "Página inicial")

![](../../swagger/assets/img/lights-off.png)

[

API antiga

](https://api.fluig.com/old/ "API antiga")

Powered by[

](https://www.fluig.com/ "Site fluig")

©2012-2024. Todos os Direitos Reservados. fluig® é uma marca registrada.

---

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

---

# TOTVS Fluig API

> **Fonte:** [https://api.fluig.com/latest/process-management/swagger-ui/](https://api.fluig.com/latest/process-management/swagger-ui/)

---

[

](https://api.fluig.com/latest/ "Página inicial")

![](../../swagger/assets/img/lights-off.png)

[

API antiga

](https://api.fluig.com/old/ "API antiga")

Powered by[

](https://www.fluig.com/ "Site fluig")

©2012-2024. Todos os Direitos Reservados. fluig® é uma marca registrada.

---

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

---

# TOTVS Fluig API

> **Fonte:** [https://api.fluig.com/latest/use-policy/swagger-ui/](https://api.fluig.com/latest/use-policy/swagger-ui/)

---

[

](https://api.fluig.com/latest/ "Página inicial")

![](../../swagger/assets/img/lights-off.png)

[

API antiga

](https://api.fluig.com/old/ "API antiga")

Powered by[

](https://www.fluig.com/ "Site fluig")

©2012-2024. Todos os Direitos Reservados. fluig® é uma marca registrada.

---

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

---
