<html>
    <head>
        <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
        <c:set value="${pageContext.request.contextPath}/js" var="js" />
        <c:set value="${pageContext.request.contextPath}/resource" var="resource" />
        <c:set value="${pageContext.request.contextPath}/app" var="app" />
    </head>
    <body>
        <script>
            var require = {
                baseUrl: '${js}',
                config: {
                    'util/resource': {
                        baseUrl: '${resource}'
                    },
                    'router': {
                        baseUrl: '${app}'
                    }
                }
            };
            <%@ include file="../../js/modules.js"%>
        </script>
        <script data-main="main" src="${js}/lib/require/require-2.1.2-min.js"></script>
    </body>
</html>
