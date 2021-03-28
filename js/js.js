let memory = 0, 
operation = [],
resulte = 0,
action = 0, //Для чего нужна эта переменная?
indexNumber = 0; 
function qS (selector){
	/*возвращает элемент по указанному селектору*/
	return document.querySelector (selector)
}
function qSA (selector){
	/*возвращает массив всех селекторов на странице*/
	return document.querySelectorAll (selector)
}
function memoryClear (){
	/*очищение ячейки памяти*/
	memory = 0;
}
function selectButton (orderButton){
	/*возвращает кнопку по ее порядковому номеру*/
	return qSA ("button")[orderButton]
}
selectButton (0).setAttribute ("onclick", "memoryClear ()")
function memorySave (){
	/*записывание в ячейку текущее значение с поля*/
	memory = Number (qS (".input-field").value)
}
selectButton (2).setAttribute ("onclick", "memorySave ()")
function memoryRead (){
	/*считывает ячейку и записывает в текстовое поле*/
	qS (".input-field").value = memory
}
selectButton (1).setAttribute ("onclick", "memoryRead ()")
function memoryPlus (){
	/*прибавляет значение из текстового поля*/
	memory += Number (qS (".input-field").value)
}
selectButton (3).setAttribute ("onclick", "memoryPlus ()")
function memoryMinus (){
	/*вычитает значение из текстового поля*/
	memory -= Number (qS (".input-field").value)
}
selectButton (4).setAttribute ("onclick", "memoryMinus ()")
function backSpace (){
	/*удаление одного символа справа*/
	let data=qS (".input-field").value
	qS (".input-field").value = data.length == 1 ? 0 : data.slice(0,-1)
}
selectButton (5).setAttribute ("onclick", "backSpace ()")
function cleanEntry (){
	/*удаление всего содержимого из текстового поля*/
	qS (".input-field").value = 0
}
selectButton (6).setAttribute ("onclick", "cleanEntry ()")
function clean (){
	/*очищает все операции*/
	operation = [];
	resulte = 0;
	memory = 0;
	cleanEntry ()
}
selectButton (7).setAttribute ("onclick", "clean ()")
function reverseSign (){
	/*заменяет знак в текстовом поле и число*/
	let number = Number(qS (".input-field").value)
	qS (".input-field").value = number*-1;
}
selectButton (8).setAttribute ("onclick", "reverseSign ()")
function squareRoot (){
	/*делает корень квадратный числа*/
	qS (".input-field").value = Math.sqrt(Number(qS (".input-field").value))
}
selectButton (9).setAttribute ("onclick", "squareRoot ()")
function putNamber (number){
	/*вставляет цифру с нажатой кнопки*/
	inputClear ()
	qS (".input-field").value += number
}
let numberButtons = [25, 20, 21, 22, 15, 16, 17, 10, 11, 12]
window.onload = function (){
	numberButtons.forEach ((value, index) => selectButton (value).setAttribute ("onclick", "putNamber ("+index+")")) 
}
function inputClear (){
	/*очищает поле, если там введен 0*/
	if (qS (".input-field").value == "0") {
		qS (".input-field").value = ""
	}
	else{
		qS (".input-field").value= action > 0 ? "" : qS (".input-field").value
	} 
}
function procent (){
	qS (".input-field").value=(resulte*(Number(qS (".input-field").value)/100))
}
selectButton (14).setAttribute ("onclick", "procent ()")

function condition (sign){
	/*определяет какое необходимо совершить арифметическое действие*/
	let data=Number(qS (".input-field").value)
	if (operation.length==0){
		resulte=data
		operati on.push(sign)
	}else{
		let lastElement=operation.slice(-1)[0]
			switch(lastElement){
				case "+":
					resulte += data
					break
				case "-":
					resulte -= data
					break
				case "*":
					resulte *= data
					break
				case "/":
					resulte /= data
					break
		}
		if (sign!= "=") {
			operation.push(sign)
		}
	}
	qS (".input-field").value = resulte
	indexNumber = 1
	action = 1 
}
selectButton (13).setAttribute ("onclick", "condition ('/')")
selectButton (18).setAttribute ("onclick", "condition ('*')")
selectButton (23).setAttribute ("onclick", "condition ('-')")
selectButton (24).setAttribute ("onclick", "condition ('=')")
selectButton (27).setAttribute ("onclick", "condition ('+')")
function divideByTen(){
	/*делит на 10*/
	qS (".input-field").value=1/Number(qS (".input-field").value)
}
selectButton (19).setAttribute ("onclick", "divideByTen ()")
function dot(){
	/*ставит точку после нуля*/
	if (qS (".input-field").value != "" && qS (".input-field").value.indexOf(".") == -1) {
		qS (".input-field").value += "."
	}
}
selectButton (26).setAttribute ("onclick", "dot ()")
