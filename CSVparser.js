function getuserProfile() {
	var url =
	  "https://gist.githubusercontent.com/guest271314/c4eebf14b4a3cfd36f58/raw/37b82a07ec91e9f35396a23ee7aac26b8dd52c23/file.csv";

	var request = new XMLHttpRequest();
	request.open("GET", url, false);
	request.send(null);

	var lines = request.responseText.split(/\r?\n|\r/);
	var result = {};
	var headers = lines[0].split(",");
	var first_tree = [];

	for (var i = 1; i < lines.length; i++) {
	  var second_tree = {};
	  var third_tree = {};
	  var currentline = lines[i].split(",");

	  second_tree["identity"] = currentline[0];
	  second_tree["type"] = "profile";

	  for (var j = 0; j < headers.length; j++) {
		third_tree[headers[j]] = currentline[j];
	  }

	  second_tree["profileData"] = third_tree;
	  first_tree.push(second_tree);
	}

	result["d"] = first_tree;
	
	return JSON.stringify(result);
}