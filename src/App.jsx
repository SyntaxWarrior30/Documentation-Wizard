import DocsGen from './DocsGen';

function App() {

  return (
    <div className='font-mono overflow-y-scroll no-scrollbar flex-col bg-neutral-900 w-screen h-screen py-3'>
      <p className='text-white hover:text-green-600 text-xl font-bold text-center'>
        Documentation Wizard
      </p>
      <p className='text-xs mx-[15vw] hover:text-green-600 text-white text-center py-1'> 
        Note that longer code may take more time to generate documentation, so meaningful variable names are recommended.       
      </p>
      <DocsGen />
      <div className='underline text-xs text-white hover:text-green-600 fixed bottom-2 right-2'>
        <a href="https://github.com/SyntaxWarrior30/Documentation-Generator" target="_blank" rel="noopener noreferrer">Github</a>
      </div>
    </div>
  );
}

export default App
