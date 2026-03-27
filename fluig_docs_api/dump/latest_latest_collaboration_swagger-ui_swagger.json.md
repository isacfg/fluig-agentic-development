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
