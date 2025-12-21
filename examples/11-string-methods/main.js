let user = 'WebDesignMaster';

console.log(user.charAt(3));

console.log(user.indexOf('e'));
console.log(user.lastIndexOf('r'));

console.log(user.length);

let userName = ' WebDesign Master '

console.log(userName);
console.log(userName.trim());
console.log(userName.trimStart());
console.log(userName.trimEnd());

console.log(userName.toUpperCase().trim());
console.log(userName.toLowerCase().trim());

let str = 'Вал';
console.log(str.repeat(3));

console.log(str.startsWith('В'));
console.log(str.endsWith('л'));

let nickName = ' mynickname';

if (nickName.startsWith(' ')) {
  console.log('🔴 Никнейм не может начинаться с пробела');
} else {
  console.log('🟢 Никнейм указан верно');
}

nickStatus = nickName.endsWith(' ') ? '🔴 Никнейм не может заканчиваться пробелом' : '🟢 Никнейм указан верно';
console.log(nickStatus);

emptySpacesStatus = nickName.includes(' ') ? '🔴 Никнейм не может содержать пробелы' : '🟢 Никнейм указан верно';
console.log(emptySpacesStatus);

let phone = '8 988 456 78 92';
phone = phone.replaceAll(' ', '');
console.log(phone);

let phoneDashes = '8-988-456-78-92';
phoneDashes = phoneDashes.replaceAll('-', '');
console.log(phoneDashes);
