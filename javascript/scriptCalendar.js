var currentDate = new Date();
		var currentMonth = currentDate.getMonth();
		var currentYear = currentDate.getFullYear();
		var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

		function generateCalendar(month, year) {
			var calendarBody = document.getElementById("calendar-body");
			calendarBody.innerHTML = "";

			var daysInMonth = new Date(year, month + 1, 0).getDate();
			var firstDayOfMonth = new Date(year, month, 1).getDay();
			var lastDayOfMonth = new Date(year, month, daysInMonth).getDay();

			var rows = Math.ceil((daysInMonth + firstDayOfMonth) / 7);
			var date = 1;

			for (var i = 0; i < rows; i++) {
				var row = document.createElement("tr");

				for (var j = 0; j < 7; j++) {
					var cell = document.createElement("td");

					if (i == 0 && j < firstDayOfMonth) {
                        
					} else if (date > daysInMonth) {
                        
					} else {
						cell.innerHTML = date;

						if (date == currentDate.getDate() && year == currentDate.getFullYear() && month == currentDate.getMonth()) {
							cell.classList.add("today");
						}

						date++;
					}

					row.appendChild(cell);
				}

				calendarBody.appendChild(row);
			}

			var calendarMonth = document.getElementById("calendar-month");
			calendarMonth.innerHTML = months[month] + " " + year;
		}

		generateCalendar(currentMonth, currentYear);

		document.getElementById("prev-month").addEventListener("click", function() {
			currentMonth--;

			if (currentMonth < 0) {
				currentMonth = 11;
				currentYear--;
			}

			generateCalendar(currentMonth, currentYear);
		});

		document.getElementById("next-month").addEventListener("click", function() {
			currentMonth++;

			if (currentMonth > 11) {
				currentMonth = 0;
				currentYear++;
			}

			generateCalendar(currentMonth, currentYear);
		});