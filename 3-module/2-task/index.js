/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
'use strict';
function getMinMax(str) {
	let mass = '';
	for(let sym of str){
		mass = mass + sym.replace(',',' ');
		}
	let myArray = mass.split(' ');
	let newArray = myArray.filter(Boolean).map(item=>+item);
	newArray = newArray.filter(Number);
	let minS = Math.min.apply(null, newArray);
	let maxS = Math.max.apply(null, newArray);
	let resultMinMax={
				min:minS,
				max:maxS,
			};
				
	return resultMinMax;
}
