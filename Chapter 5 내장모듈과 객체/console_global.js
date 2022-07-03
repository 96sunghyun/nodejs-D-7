console.log("hello world"); // 일반적인 로그
console.log("hello %s", "world"); // 일반적인 로그, %s를 사용해서 문자열 데이터를 파라미터로 전달

const world = "world";
console.log(`hello ${world}`);

console.error(new Error("에러 메시지 출력"));

const arr = [
  { name: "Jhon Doe", email: "john@mail.com" },
  { name: "Jeremy Go", email: "jeremy@mail.com" },
];
console.table(arr); // 배열을 테이블 형태로 출력

const obj = {
  students: {
    grade1: { class1: {}, class: {} },
    grade2: {
      class1: {},
      class: {
        x: {
          y: {
            z: {
              A: {
                q: {
                  b: 3,
                },
              },
            },
          },
        },
      },
    },
    teachers: ["John Doe", "Jeremy Go"],
  },
};

console.dir(obj, { depth: Infinity, colors: true }); // 오브젝트를 콘솔에 출력할 때 오브젝트의 깊이와 콘솔 메시지 텍스트에 색상을 적용

// console.time 에 파라미터로 전달할 레이블과 뒤에 나오는 console.timeEnd 중 일치하는 레이블을 가지고 있는 console.timeEnd 코드 사이의 실행 시간 측정
console.time("time for for-loop");
for (let i = 0; i < 999999; i++) {}
// 앞에 나온 console.time 중 console.timeEnd와 레이블이 일치하는 코드 사이의 실행 시간 측정
console.timeEnd("time for for-loop");
