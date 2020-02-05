/**
 * @param   {{ name: string, age: number }[]} users
 * @returns {string[]}  объект
 */
'use strict';
function namify(users) {
	let names = users.map(user=>user.name);
	return names;
}
