<html>
<script>
alert("hello world");
var funnyGuy = {};
funnyGuy.firstName = "john";
funnyGuy.lastName = "smith";
funnyGuy.getName = function() {
	return "name is "+this.firstName+" "+this.lastName;
}
alert(funnyGuy.firstName);
alert(funnyGuy.lastName);
alert(funnyGuy.getName());
var person = {
	getName: function() {
		return "name is "+this.firstName+" "+this.lastName;
	}
}
var detective = Object.create(person);
detective.firstName = "sherlock";
detective.lastName = "holmes";
alert(detective.getName());
</script>
</html>
