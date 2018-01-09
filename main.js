//(function() {


	var createTask = get("#createTask"),
		deleteTasks = get("#deleteTasks"),
		list = get("#tasks");

	createTask.addEventListener("click", function() {
		var newLabelText = prompt("Назовите задачу");

		if (newLabelText!=null && newLabelText!="") {
			var newLi = document.createElement("li"),
			newInput = document.createElement("input"),
			newLabel = document.createElement("label"),
			arrItems = document.querySelectorAll("#tasks li"); //i create it for count items

			newLabel.innerHTML = newLabelText;
			newInput.setAttribute("type", "checkbox");
			newInput.setAttribute("id", "item" + arrItems.length);
			newLabel.setAttribute("for", "item" + arrItems.length);

			newLi.appendChild(newInput);
			newLi.appendChild(newLabel);
			
			list.appendChild(newLi);
		}

	},false);


	function get(el) {
		return document.querySelector(el);
	}


//})();

