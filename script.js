// pega o campo do display da calculadora
const display = document.getElementById('display');

//add o valor clicando no botao ao display
function appendValue(value){
	display.value += value;
}

//limpa o display (botao c)
function clearDisplay(){
	display.value = '';
}

//faz o calculo com base na expressao do display
function calculate(){
	try{
		display.value = eval(display.value);
	} catch (error) {
		display.value = 'Erro';
	}
}

