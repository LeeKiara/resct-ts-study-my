import styled from '@emotion/styled';

export const ContactListContainer = styled.div`
  table {
    border-collapse: collapse;
    width: 550px;
    margin-bottom: 150px;
  }

  thead {
    text-align: center;
    border-top: 1px solid gray;
    border-bottom: 1px solid gray;
    background-color: #ddd;
    height: 30px;
    line-height: 30px;
  }

  td {
    text-align: center;
    border-bottom: 1px solid gray;
    height: 30px;
    line-height: 30px;
  }

  tbody > tr:hover {
    /* background-color: #9fd6f3; */
    font-weight: bold;
    cursor: pointer;
  }
`;
