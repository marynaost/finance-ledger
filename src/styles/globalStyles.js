import { createGlobalStyle } from 'styled-components'
import { mainTextColor } from './stylesVars'

export default createGlobalStyle`
body {
  margin: 0;
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.35;
  color: ${mainTextColor};
}


h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin-top: 0;
  margin-bottom: 0;
}

ul,
ol {
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 0;
}

li {
  list-style: none;
}

img {
  display: block;
  width: 100%;
  height: auto;
}

a {
  text-decoration: none;
}

`
