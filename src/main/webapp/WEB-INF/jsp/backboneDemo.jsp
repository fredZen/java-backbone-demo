<!DOCTYPE html>
<html lang="fr">
    <head>
        <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

        <!-- Using a JSP to factor the context root and servlet name.
             We could probably use maven filtering to have a fully static html container. -->
        <c:set value="${pageContext.request.contextPath}/js" var="js" />
        <c:set value="${pageContext.request.contextPath}/resource" var="resource" />
        <c:set value="${pageContext.request.contextPath}/app" var="app" />
        <c:set value="${pageContext.request.contextPath}/css" var="css" />

        <meta charset="utf-8">
        <title>Backbone demo</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="">
        <meta name="author" content="Frederic Merizen">

        <link type="text/css" href="${css}/backboneDemo.css" rel="stylesheet">
        <link type="text/css" href="${css}/bootstrap.min.css" rel="stylesheet">
        <link type="text/css" href="${css}/bootstrap-responsive.min.css" rel="stylesheet">

        <!--[if !IE 7]>
        <style type="text/css">
            #wrap {display:table;height:100%}
        </style>
        <![endif]-->

        <!-- HTML5 shim, for IE6-8 support of HTML5 elements -->
        <!--[if lt IE 9]>
        <script src="${js}/lib/html5shiv/html5shiv.js"></script>
        <![endif]-->
    </head>
    <body>
        <!-- Menu bar will go here -->
        <div id="mainMenu">
        </div>

        <!-- Main application view -->
        <div class="container" id="main">
        </div>

        <!-- Use require.js to configure the application -->
        <script>
            var require = {
                baseUrl: '${js}',
                deps: ['bootstrap'],
                config: {
                    'util/resource': {
                        baseUrl: '${resource}'
                    },
                    'router/router': {
                        baseUrl: '${app}'
                    }
                }
            };
            <%@ include file="../../js/modules.js"%>
        </script>
        <!-- Start the application with require.js -->
        <script data-main="main" src="${js}/lib/require/require-2.1.2-min.js"></script>
    </body>
</html>
