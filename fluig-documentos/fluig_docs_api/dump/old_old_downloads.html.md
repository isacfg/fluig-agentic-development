# TOTVS Fluig Developer

> **Fonte:** [https://api.fluig.com/old/downloads.html](https://api.fluig.com/old/downloads.html)

---

-   [Java JSON Client Library](https://api.fluig.com/old/downloads.html "Java JSON Client Library")
-   [Java XML Client Library](https://api.fluig.com/old/downloads.html "Java XML Client Library")
-   [ns0.xsd](https://api.fluig.com/old/downloads.html "ns0.xsd")

# Files and Libraries

### Java JSON Client Library

Created March 4, 2026

The Java client-side library is used to provide the set of Java objects that can be serialized to/from JSON using [Jackson](http://jackson.codehaus.org/). This is useful for accessing the JSON REST endpoints that are published by this application.

Resources Example (Raw JAXB)

```
java.net.URL url = new java.net.URL(baseURL + "/bpm/adhoc/create");
ObjectMapper mapper = new ObjectMapper();
java.net.URLConnection connection = url.openConnection();
connection.setDoOutput(true);
connection.connect();

mapper.writeValue(connection.getOutputStream(), adHocProcessVO);
Object result = (Object) mapper.readValue( connection.getInputStream(), Object.class );
//handle the result as needed...
```

Resources Example (Jersey client)

```
javax.ws.rs.client.Client client = javax.ws.rs.client.ClientBuilder.newClient();

Object result = client.target(baseUrl + "/bpm/adhoc/create")
  .post(javax.ws.rs.client.Entity.entity(adHocProcessVO, "application/json"), Object.class);

//handle the result as needed...
```

<table class="table table-hover"><caption>Files</caption><thead><tr><th>name</th><th>size</th><th>description</th></tr></thead><tbody data-link="row" class="rowlink"><tr class="clickable-row" data-href="api-public-json-client-json-sources.jar"><td>api-public-json-client-json-sources.jar</td><td>625.62K</td><td>The sources for the Java JSON client library.</td></tr></tbody></table>

### Java XML Client Library

Created March 4, 2026

The Java client-side library is used to access the Web service API for this application using Java.

The Java client-side library is used to provide the set of Java objects that can be serialized to/from XML using [JAXB](https://jaxb.dev.java.net/). This is useful for accessing the resources that are published by this application.

Resources Example (Raw JAXB)

```
java.net.URL url = new java.net.URL(baseURL + "/2.0/permission/grantdefault/widget/{widgetCode}");
JAXBContext context = JAXBContext.newInstance( byte[].class );
java.net.URLConnection connection = url.openConnection();
connection.connect();

Unmarshaller unmarshaller = context.createUnmarshaller();
Object result = (Object) unmarshaller.unmarshal( connection.getInputStream() );
//handle the result as needed...
```

Resources Example (Jersey client)

```
javax.ws.rs.client.Client client = javax.ws.rs.client.ClientBuilder.newClient();

Object result = client.target(baseUrl + "/2.0/permission/grantdefault/widget/{widgetCode}")
  .post(Object.class);

//handle the result as needed...
```

<table class="table table-hover"><caption>Files</caption><thead><tr><th>name</th><th>size</th><th>description</th></tr></thead><tbody data-link="row" class="rowlink"><tr class="clickable-row" data-href="api-public-xml-client.jar"><td>api-public-xml-client.jar</td><td>18.04K</td><td>The binaries for the Java XML client library.</td></tr><tr class="clickable-row" data-href="api-public-xml-client-xml-sources.jar"><td>api-public-xml-client-xml-sources.jar</td><td>14.68K</td><td>The sources for the Java XML client library.</td></tr></tbody></table>

### ns0.xsd

Created March 4, 2026

<table class="table table-hover"><caption>Files</caption><thead><tr><th>name</th><th>size</th><th>description</th></tr></thead><tbody data-link="row" class="rowlink"><tr class="clickable-row" data-href="ns0.xsd"><td>ns0.xsd</td><td>29.91K</td><td>&nbsp;</td></tr></tbody></table>
