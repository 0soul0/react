import {createGlobalStyle } from 'styled-components';

// createGlobalStyle 全域變數
//下面代碼是reset css 為了通一各瀏覽器標籤預設值
export const IconFont = createGlobalStyle`
@font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1616569109246'); /* IE9 */
  src: url('./iconfont.eot?t=1616569109246#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAARsAAsAAAAACKAAAAQfAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDKgqESIQHATYCJAMUCwwABCAFhG0HRRuIB8gOJZHAwABgAGVgBNVa9ix8AEARKHRcPipCAaooQ0pE2CgTCSR87vj3rEnBNbI+LszgoOKldfbS9Eh8ASxO/rJ84t5pa1Bg8wHlNOawPfhjQF0cUGBjLG5roAWCmeQAdrfs/QQ6zeoBO65uJECm0IcF4s6gU4EsYVcqeKHd1CqYWyAeQaw9TRdcBfDgfT/+ID1kIKkZ9INOLqq0UPoZ/HqhcNz/cfrlSTBuOC/YRWSsAYW4KfSfEQbJNUKdcr7ILtBueBNDpbNfL/z/n6IsUG5F306lKFL3Hy9aoOu7Qd9PFT6DLXlkyIZVgmEBrDIMC6G8Dn115nSiAy8A/kE3znn6OPBz04pMFqj090zyHOm+T7meEo575OLgkqVLglwu2u02X+MknQ6CWrIogFi0WEkvXRpE3fFWUB6EwqTs3WdJlGJVSC/VEeVMgM5QnFTMuI6Np+nx5HsVkoe2wbjtyplnMIwlF4/bNiOIcjynXA9o9wvSeW/QTLd7vMulcDgIp3PkJkfmooCQRUHdlgRcdPRwOEKWBQbSS2duHxdABC5O2uqeRW3c+CX8jCXjg3V5pMV/Rbsob92n7HXDuy1rWFWZMYie37a4Kn+6trxiR6w0pl9R6/kgc4h51Xyrr8Xr5IDsQVmqAGc1WVWVPkEU9kBIiO5HlnaJKy/rBieZmltdKm8hr//qCpexuIUUlKsNxW7R72Ibfy43BROXJbNdKYNnf2VDaf7LATR/JTTw92TCx/ko+HL+y5ejsdNir7hnTjfWBg8dM3iitG7Y6NHD6qQTB48ZGlx76Gb/1b36rz9sSvEWc8XHTgjnCuccOwlpzzu4ZuWbVokpoSO9Q+VDZhxKq0nR9ybe7bx48W3i1cTHFy+QD/3OcD1qs5ury1/Vy3fGFUiXe1XqBk90hmEAzb98W9jCHPY/nxRC86eZnr8LJwGQNwQ7f4fj7L6HOQd6F35tV4oA3saLAiFrzi0gf6cKWfHytWWwBoqi0h21SEqL1fxRdEmpNo0wKqFTJxqEBz0eJjgCIm9o5xRA0mYGWbs5cqGvoeqyiZZ2e+i0qmZxlyEcoShyYMVkAqHfXiS9XpH1u0Yu9EeoRr1FS38I0ek0/NfsshAGRQWHVDzS4urhuEHDWhnTxSv8ynaks5tVXFzl8SnE2QwRPC05NZ2pQVbEDTHBNkSXzvMMznCsBa8mDkNmM4t3cqwRafhkPc935qekMEVXStawFlA4wkFUeIgWTm04nIEGy4pxmvMUmc+3Q3TszFS4CkJZkoJwbAzt49IkS21ArtFbGxEupbPNEDrpeDyGGsTgsCxw1fAiZiPJwnUW9zJCNHjJ9B3infKlkPWYpvrk6Y2We9wCnfSL1BBgQkyEiTEJ1HtkQ7ygTCWxsfZhdqt4uN2iYgEAAA==') format('woff2'),
  url('./iconfont.woff?t=1616569109246') format('woff'),
  url('./iconfont.ttf?t=1616569109246') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./iconfont.svg?t=1616569109246#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`

