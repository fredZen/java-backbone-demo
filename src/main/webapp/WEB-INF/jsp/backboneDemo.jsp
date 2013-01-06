<html>
    <head>
        <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
        <c:set value="${pageContext.request.contextPath}/js" var="js" />
    </head>
    <body>
        <script>
            var require = {
                baseUrl: '${js}'
            };
        </script>
        <script data-main="main" src="${js}/lib/require/require-2.1.2-min.js"></script>
    </body>
</html>
