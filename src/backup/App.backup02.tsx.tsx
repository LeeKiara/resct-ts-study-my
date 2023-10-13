import Counter from "./components/Counter";
import Layout from "./components/Layout";
import Parent from "./components/PropsDownEventUp";
import StateEx from "./components/StateEx";
import Todo from "./components/Todo";
import WelcomeMessage from "./components/WelcomeMessage";

const App = () => {
  return (
    <>
      <Counter />
      <hr />
      <Todo />
      <hr />
      <Layout title="Home Page">
        {/* children 속성을 안쪽 태그에 넣을 수 있음 */}
        {/* main tag에 삽입 : <main>{children}</main>*/}
        <WelcomeMessage name="Alice" />
        <p>Welcome to our website!</p>
      </Layout>
      <hr />
      <Parent />
      <hr />
      <StateEx />
    </>
  );
};

export default App;
