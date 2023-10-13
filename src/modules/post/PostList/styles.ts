import styled from '@emotion/styled';

export const PostListContainer = styled.div`
  input[type='text'],
  textarea {
    width: 400px;
    border: 2px solid #aaa;
    border-radius: 4px;
    margin: 4px 0;
    outline: none;
    padding: 8px;
    box-sizing: border-box;
    transition: 0.3s;
    display: inline-block;
  }

  input[type='text']:focus {
    border-color: dodgerBlue;
    box-shadow: 0 0 8px 0 dodgerBlue;
  }

  textarea:focus {
    border-color: dodgerBlue;
    box-shadow: 0 0 8px 0 dodgerBlue;
  }
`;
