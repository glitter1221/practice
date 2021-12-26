// npx eslint

module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended",
    //prettier와 eslint를 같이 사용하기
  ],
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  rules: {
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
  },
};
