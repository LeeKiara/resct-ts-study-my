import {
  ButtonProps,
  OutlineButton,
  PrimaryButton,
} from './components/Button/styles';
import { Button } from './components/Button/styles';
// FC: function component
import FCButton from './components/Button';
import { useState } from 'react';

const App = () => {
  // 인터페이스의 필드 형식으 가져오려면
  // 인터페이스["필드명"] -> ex) "md" | "sm" | "lg"
  const [size, setSize] = useState<ButtonProps['size']>('md');

  return (
    <>
      {/* HTMLButtonElement의 기본속성을 모두 사용할 수 있음 */}
      <PrimaryButton
        onClick={() => {
          alert('click');
        }}>
        버튼
      </PrimaryButton>
      {/* Function Component에 선언된 속성만 사용가능(타입스크립트) */}
      <FCButton label="버튼" />
      <Button primary>primary버튼</Button>
      <Button> default</Button>
      {/* -------------------- */}
      {/* <Button size="md"> default - md</Button>
      <Button size="sm"> default - sm</Button>
      <Button size="lg"> default - lg</Button> */}
      <button
        onClick={() => {
          setSize('lg');
        }}>
        스타일 변경 - 라지
      </button>
      <button
        onClick={() => {
          setSize('sm');
        }}>
        스타일 변경 - sm
      </button>
      {/* styled-components의 속성이 바뀌면 클래스가 변경이 된다.
          근데, 없는 클래스면 styled태그와 클래스를 header에 생성 -> 오버헤드 발생, 성능에 문제발생 가능
       */}
      <Button size={size}>default - dynamic</Button>

      {/*  */}
      <OutlineButton>기본</OutlineButton>
      <OutlineButton primary>primary</OutlineButton>
    </>
  );
};

export default App;
