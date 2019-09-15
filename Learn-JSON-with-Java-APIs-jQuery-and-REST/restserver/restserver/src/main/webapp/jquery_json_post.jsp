<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>jquery json post</title>
<script src="<%=request.getContextPath()%>/js/jquery-2.2.4.min.js" type="text/javascript"></script>
</head>
<body>

<button id="submitButton">json post</button>
<button id="submitButton2">json post udemy student</button>

<pre id="result"></pre>

<script type="text/javascript">
	
	$(document).ready(function() {
		
		$("#submitButton").click(function() {
			
			$.ajax({
				url: "<%=request.getContextPath()%>/rest/jsonPost",
				type: "POST",	
				contentType: "application/json",
				data: JSON.stringify({"name":"json_request", "key":"value", "key2":"value2", "key3":"value3", "key4":"value4"}),
				success: function(data,textStatus,jqXHR){
					console.log(textStatus);
					document.getElementById("result").innerHTML = JSON.stringify(textStatus, null, 2);										
				},
				error: function(jqXHR, textStatus, errorThrown){
					console.error(errorThrown);
					alert("Error: " + errorThrown);
				}
			}
			);
		});
		
		$("#submitButton2").click(function() {
			
			$.ajax({
				url: "<%=request.getContextPath()%>/rest/jsonPostStudent",
				type: "POST",	
				contentType: "application/json",
				data: JSON.stringify({"id":1, "name":"name","lastname":"lastname"}),
				success: function(data,textStatus,jqXHR){
					console.log(textStatus);
					document.getElementById("result").innerHTML = JSON.stringify(textStatus, null, 2);										
				},
				error: function(jqXHR, textStatus, errorThrown){
					console.error(errorThrown);
					alert("Error: " + errorThrown);
				}
			}
			);
		});
		
	});


</script>


</body>
</html>