const http = require("http");
const axios = require("axios");

//https://www.foodsafetykorea.go.kr/apiMain.do

http
  .createServer((req, res) => {
    const keyId = "여기에 사용자 키 값 입력";
    const serviceId = "I2640"; // <- 미리보기 주소에 있는 serviceID
    const dataType = "json"; // xml or json
    const startIdx = "1"; // 데이터 시작 (필수)
    const endIdx = "2"; // 데이터 끝 (필수)

    const targetURL = `http://openapi.foodsafetykorea.go.kr/api/${keyId}/${serviceId}/${dataType}/${startIdx}/${endIdx}`;

    axios
      .get(targetURL)
      .then((response) => {
        console.log(response.data.I2640.row);
        res.end(JSON.stringify(response.data));
      })
      .catch((response) => {
        res.end(JSON.stringify(response));
      });
  })
  .listen(8080);
