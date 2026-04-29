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
