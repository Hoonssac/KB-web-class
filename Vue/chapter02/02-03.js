// 객체는 참조형 변수
const p1 = { name: 'john', age: 20 };
// 참조형 변수의 경우 내부 필드는 변경 가능
p1.age = 22;
console.log(p1);

p1 = { name: 'lee', age: 25 };
