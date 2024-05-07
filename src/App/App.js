import logo from './logo.svg';
import './App.css';
import Header, { SearchComponent } from './components/Header';
import { multiCategory } from './api/Dashboard';

function App() {
  return (
  <>
    <div className="App">
      <Header/>

      <div className='app-search'>
      <SearchComponent />
      </div>

      <div className='container'>
      <div className="card muti-category-view ">
        {
          multiCategory.map((item, index)=> {
             return <>
                <div className='multi-card'>
                <img className='' style={{backgroundColor:'#ffffff'}} src={`${item.url}`} alt="" />
                <label title=''>{`${item.title} ${index}`}</label>
                </div>
             </>})
        }
        </div>
<>
<div className='card margin-top' >
<label title=''>{`Top Deals`}</label>
          <div className="card top-deals-view margin-top">
            {
              multiCategory.map((item, index)=> {
                return <>

                    <div className='top-deals-card'>
                    <img className='' style={{backgroundColor:'#ffffff'}} src={`${item.url}`} alt="" />
                    <label title=''>{`${item.title} ${index}`}</label>
                    </div>
                </>})
            }
            </div>
        </div>
</>
  </div>

      </div>
    
    </>
  );
}

export default App;
