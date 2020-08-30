// 1)масив
var games = ['football', 'basketball', 'hockey', 'volleyball'];
console.log(games[0]);
console.log(games[1]);
console.log(games[2]);
console.log(games[3]);

// 2) stack
var games = [];
games.push('football');
games.push('basketball');
games.push('hockey');
games.push('volleyball');

console.log(games.pop());
console.log(games.pop());
console.log(games.pop());
console.log(games.pop());
console.log(games.pop());
console.log(games.pop());

// 3)gueue
var games = [];
games.push('football');
games.push('basketball');
games.push('hockey');
games.push('volleyball');

console.log(games.shift());
console.log(games.shift());
console.log(games.shift());
console.log(games.shift());

// MIN and MAX
var num = [1,3,4,2,5,7,6,8,10,9,11,12,14,13,15,16,17,19,18,20];
console.log('min:' + Math.min(...num));
console.log('max:' + Math.max(...num));

// середнє значеня
var num = [1,3,4,2,5,7,6,8,10,9,11,12,14,13,15,16,17,19,18,20];
console.log(num.reduce((a,b)=> (a+b)/ num.length));

// інші методи роботи з масивами:
// #1
var num = [1,3,2,5,4,];
num.sort();
console.log(num.toString());

// #2
var num = [1,3,2,5,4,];
console.log(num);
console.log(num.indexOf(2));

// #3
var games = ['football', 'basketball', 'hockey', 'volleyball'];
console.log(games.toString());
var games2 = games.slice(0,games.length);
console.log(games2.toString());
var games3 = games.concat(games2);
console.log(games3.toString());
