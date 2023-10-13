import styled from '@emotion/styled';

export const ContactContainer = styled.div`
  aside {
    width: 150px;

    ul,
    li {
      margin: 0;
      padding: 0;
    }

    ul {
      background: gray;
      list-style: none;
      width: 100%;
    }

    /* li {
      float: left;
      position: relative;
      width: auto;
    } */

    a {
      background: #30a6e6;
      color: #ffffff;
      display: block;
      font: bold 12px/20px sans-serif;
      padding: 10px 25px;
      /* text-align: center; */
      text-decoration: none;
      /* -webkit-transition: all 0.25s ease;
      -moz-transition: all 0.25s ease;
      -ms-transition: all 0.25s ease;
      -o-transition: all 0.25s ease;
      transition: all 0.25s ease; */
    }

    li:hover a {
      background: #000000;
    }

    > button {
      line-height: 20px;
      font-weight: 500;
      text-align: center;
      cursor: pointer;
      border-radius: 4px;
      background-color: #2e6baa;
      color: #fff;
      border: #2e6baa;
    }
  }
`;
