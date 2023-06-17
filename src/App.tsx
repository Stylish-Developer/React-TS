import { FC } from 'react';
// -- STYLESHEETS
import './App.css';
import Person from './components/Person';
import ClassComponent from './components/Clscomponent';
import Product from './components/Product';

// -- ROOT COMPONENT OF THIS APPLICATION
const App: FC = () => {
  return (
    <>
      <div className='container'>
        <h1 className='title'>React-TypeScript-Level2</h1>
        <Person name="Gautham" age={25} email='gowthamsgobi@gmail.com' designation='software engineer' />
        <ClassComponent job="Software Engineer" />
        <Product />
      </div>
    </>
  )
}

export default App;