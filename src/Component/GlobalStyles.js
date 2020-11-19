import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import "react-medium-image-zoom/dist/styles.css";

const globalStyles = createGlobalStyle`
    ${reset};
    a{
        text-decoration:none;
        color:inherit;
    }
    *{
        box-sizing:border-box;
    }
    body{
        font-family: 'Roboto', sans-serif !important;
        background-color:rgba(0, 0, 0, 1.0);
        color:black;
        width: 100%;
        height: 100%;
    }
`;

export default globalStyles;
