import logo from './logo.svg';
import './App.css';
import Header, { SearchComponent } from './components/Header';
import { clothes, multiCategory, phoneCategory } from './api/Dashboard';

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
             </>
             })
        }
        </div>
<>
<div className='card margin-top phone-categotry' >
<label title=''>{`${phoneCategory.title}`}</label>
          <div className="card top-deals-view margin-top">
                      <div className='categoryRow' style={{ overflowX: 'scroll', whiteSpace: 'nowrap' }}>
                      {
                        phoneCategory.products.map((item, index)=> {
                          return <>
                              <div className='top-deals-card'>
                              <img className='' style={{backgroundColor:'#ffffff'}} src={`${item.thumbnail}`} alt="" />
                              <label title=''>{`${item.title}`}</label>
                              </div>
                          </>})
                      }
                   </div>
          </div>
        </div>
</>

<>
<div className='card margin-top phone-categotry' >
<label title=''>{`${clothes.title}`}</label>
          <div className="card top-deals-view margin-top">
                      <div className='categoryRow' style={{ overflowX: 'scroll', whiteSpace: 'nowrap' }}>
                      {
                        clothes.product.map((item, index)=> {
                          return <>
                              <div className='top-deals-card'>
                              <img className='' style={{backgroundColor:'#ffffff'}} src={`${item.image}`} alt="" />
                              <label title=''>{`${item.title}`}</label>
                              <label className='from-price'>{`From ${item.price}`}</label>

                              </div>
                          </>})
                      }
                   </div>
          </div>
        </div>
</>
  </div>

      </div>
    
    </>
  );
}

export default App;
