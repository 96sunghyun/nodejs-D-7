const crypto = require("crypto");

// 단어를 해싱화하는 과정
const base64Hash = crypto
  .createHash("sha256")
  .update("password")
  .digest("base64");

const hexHash = crypto.createHash("sha256").update("password").digest("hex");

console.log(base64Hash);
console.log(hexHash);

// salt값을 생성하는 과정
// 1. promise 활용
const createSalt = () => {
  return new Promise((resolve, reject) => {
    crypto.randomBytes(64, (err, buf) => {
      if (err) reject(err);
      resolve(buf.toString("base64"));
    });
  });
};

createSalt().then(console.log);

// 2. sync함수 활용
const random = crypto.randomBytes(64).toString("base64");
console.log(random);

// salt함수를 이용하여 비밀번호를 암호화하는 과정
const createCryptoPassword = async (plainPassword) => {
  // salt값 생성
  const salt = await createSalt();

  return new Promise((resolve, reject) => {
    // pbkdf2 함수 사용
    crypto.pbkdf2(plainPassword, salt, 100000, 64, "sha512", (err, key) => {
      if (err) reject(err);
      resolve({ password: key.toString("base64"), salt });
    });
  });
};
// salt값을 더하여 해시화된 암호값 출력
createCryptoPassword("password").then(console.log);

// salt함수를 이용해 암호화된 비밀번호를 해석하는 방법

const getCtyptoPassword = (plainPassword, salt) => {
  return new Promise((resolve, reject) => {
    crypto.pbkdf2(plainPassword, salt, 99999, 64, "sha512", (err, key) => {
      if (err) reject(err);
      resolve({ password: key.toString("base64"), salt });
    });
  });
};
