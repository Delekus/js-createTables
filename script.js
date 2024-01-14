// Получаем кнопки и таблицу из HTML
let createButton = document.querySelector("#create-button");
let hideButton = document.querySelector("#hide-button");
let showButton = document.querySelector("#show-button");
let table = document.querySelector("#table");
//Активность кнопок по умолчанию
createButton.disabled = false;
hideButton.disabled = true;
showButton.disabled = true;
table.style.display = "none";

// Функция для создания таблицы
function createTable() {
	// Запрашиваем количество ячеек от пользователя
	let cells = prompt("Введите количество ячеек будущей таблицы");
	// Проверяем введенное значение
	cells = checkInput(cells, "number");
	// Повторяем запрос, пока не получим корректное значение
	while (cells === false) {
		alert("Пожалуйста, введите только положительное число");
		cells = prompt("Введите количество ячеек будущей таблицы");
		cells = checkInput(cells, "number");
	}
	// Отмена - прекращание выполнения функции
	if (cells === null) {
		alert("Вы отменили ввод");
		return;
	}
	// Если введенное число больше 10, просим ввести меньше
	if (cells > 10) {
		alert("Пожалуйста, введите число меньше или равно 10");
		return;
	}

	// Создаем таблицу с заданным количеством ячеек
	for (let i = 0; i < cells; i++) {
		// Создаем строку таблицы
		let row = document.createElement("tr");
		// Добавляем строку в таблицу
		table.append(row);
		for (let j = 0; j < cells; j++) {
			// Создаем ячейку таблицы
			let cell = document.createElement("td");
			// Добавляем ячейку в строку
			row.append(cell);
			// Заполняем ячейку текстом с номером строки и столбца
			cell.innerHTML = ((i+1) +":"+(j+1));
			// Если ячейка находится на диагонали, красим ее в красный цвет
			if (i === j) {
				cell.classList.toggle("red-cell");
			}
		}
	}
	//Делаем таблицу видимой
	table.style.display = "table";
	// Делаем кнопку "Создать таблицу" неактивной
	createButton.disabled = true;
	// Делаем кнопку "Скрыть таблицу" активной
	hideButton.disabled = false;
	// Делаем кнопку "Показать таблицу" неактивной
	showButton.disabled = true;
}

// Функция для кнопки скрытия таблицы
function hideTable() {
	// Скрываем таблицу, используя свойство display
	table.style.display = "none";
	// Делаем кнопку "Скрыть таблицу" неактивной
	hideButton.disabled = true;
	// Делаем кнопку "Показать таблицу" активной
	showButton.disabled = false;
}

// Функция для кнопки показа таблицы
function showTable() {
	// Показываем таблицу, используя свойство display
	table.style.display = "table";
	// Делаем кнопку "Скрыть таблицу" активной
	hideButton.disabled = false;
	// Делаем кнопку "Показать таблицу" неактивной
	showButton.disabled = true;
}

// Функция для проверки введенного значения
function checkInput(value, type) {
	// Если значение пустое или null, возвращаем null
	if (value === "" || value === null) {
		return null;
	}
	// Если тип "text", проверяем, не является ли значение числом
	if (type === "text") {
		if (isNaN(value)) {
			// Если значение не является числом, возвращаем его
			return value;
		} else {
			// Если значение является числом, возвращаем false
			return false;
		}
	}
	// Если тип "number", проверяем, является ли значение числом
	if (type === "number") {
		if (!isNaN(value) && value > 0) {
			// Если значение является числом, возвращаем его
			return value;
		} else {
			// Если значение не является числом, возвращаем false
			return false;
		}
	}
}

// Добавляем обработчики событий на кнопки
createButton.addEventListener("click", createTable);
hideButton.addEventListener("click", hideTable);
showButton.addEventListener("click", showTable);