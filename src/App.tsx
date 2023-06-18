import { FC } from 'react';
// -- STYLESHEETS
import './App.css';
import Person from './components/Person';
import ClassComponent from './components/Clscomponent';
import Product from './components/Product';
import Enumconept from './components/Enumconcept';
import { macProducts } from './components/Enumconcept';
import ContextApiConcept from './components/Contextapiconcept';
import { AppContextProvider, contextInterface } from './components/context';

// -- ROOT COMPONENT OF THIS APPLICATION
const App: FC = () => {

  const AppContextProviderValue: contextInterface = {
    employeeName: 'Gowtham Sampathkumar'
  }

  return (
    <>
      <AppContextProvider value={AppContextProviderValue}>
        <div className='container'>
          <h1 className='title'>React-TypeScript-Level2</h1>
          <Person name="Gautham" age={25} email='gowthamsgobi@gmail.com' designation='software engineer' />
          <ClassComponent job="Software Engineer" />
          <Product />
          <Enumconept model={macProducts.m2pro} />
          <ContextApiConcept />
        </div>
      </AppContextProvider>
    </>
  )
}

export default App;