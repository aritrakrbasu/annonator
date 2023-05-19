import logo from './logo.svg';
import './App.css';
import ConvertApi from 'convertapi-js'
import React ,{ useState } from 'react';
import { ReactSmartScroller } from 'react-smart-scroller'
import { Canvas,Shape } from '@bucky24/react-canvas';
import ReactImageAnnotate from "react-image-annotate";

function App() {
  const [images,setImages] = useState([{"FileName":"Digital Marketing Strategy Notebook by Slidesgo.png","FileExt":"png","FileSize":362161,"FileId":"fy5sebt4bxrr2nwk03xmdqtp835gx39y","Url":"https://v2.convertapi.com/d/fy5sebt4bxrr2nwk03xmdqtp835gx39y/Digital%20Marketing%20Strategy%20Notebook%20by%20Slidesgo.png"},{"FileName":"Digital Marketing Strategy Notebook by Slidesgo-2.png","FileExt":"png","FileSize":306956,"FileId":"rx3jdkz90f2fxz2tbni5xzhxqrmzoc4g","Url":"https://v2.convertapi.com/d/rx3jdkz90f2fxz2tbni5xzhxqrmzoc4g/Digital%20Marketing%20Strategy%20Notebook%20by%20Slidesgo-2.png"},{"FileName":"Digital Marketing Strategy Notebook by Slidesgo-3.png","FileExt":"png","FileSize":217197,"FileId":"lz1zkecmx8vpmd2gsrx8di558fd0djkq","Url":"https://v2.convertapi.com/d/lz1zkecmx8vpmd2gsrx8di558fd0djkq/Digital%20Marketing%20Strategy%20Notebook%20by%20Slidesgo-3.png"},{"FileName":"Digital Marketing Strategy Notebook by Slidesgo.png","FileExt":"png","FileSize":362161,"FileId":"fy5sebt4bxrr2nwk03xmdqtp835gx39y","Url":"https://v2.convertapi.com/d/fy5sebt4bxrr2nwk03xmdqtp835gx39y/Digital%20Marketing%20Strategy%20Notebook%20by%20Slidesgo.png"},{"FileName":"Digital Marketing Strategy Notebook by Slidesgo-2.png","FileExt":"png","FileSize":306956,"FileId":"rx3jdkz90f2fxz2tbni5xzhxqrmzoc4g","Url":"https://v2.convertapi.com/d/rx3jdkz90f2fxz2tbni5xzhxqrmzoc4g/Digital%20Marketing%20Strategy%20Notebook%20by%20Slidesgo-2.png"},{"FileName":"Digital Marketing Strategy Notebook by Slidesgo-3.png","FileExt":"png","FileSize":217197,"FileId":"lz1zkecmx8vpmd2gsrx8di558fd0djkq","Url":"https://v2.convertapi.com/d/lz1zkecmx8vpmd2gsrx8di558fd0djkq/Digital%20Marketing%20Strategy%20Notebook%20by%20Slidesgo-3.png"}])

  let convertApi = ConvertApi.auth('TMFegpP8FOSnhauj')

  async function getFileType(files){
    if(files.length>0)
    {
      for (var i = 0; i < files.length; i++) {
        let params = convertApi.createParams()
        params.add('File', files[i]);
        console.log("called")
         convertApi.convert('ppt', 'png', params).then((data)=>{
            setImages(data.files)
            localStorage.setItem('files',JSON.stringify(data.files))
            
         })
         .catch((error)=>console.log(error))
    }
     
    }
  }

  const onSelect = selectedId => console.log(selectedId);
  const onChange = data => console.log(data);
  return (
    <div className="container">
      
      <div className='sidebar'>

      </div>
      <div className='main'>

        <div className='preview'>
        <input type="file" onChange={e=>getFileType(e.target.files)} />
        <ReactPictureAnnotation
        image="https://source.unsplash.com/random/800x600"
        onSelect={onSelect}
        onChange={onChange}
        width={100}
        height={300}
      />
{/*         
        {images && images.length >0 && images.map(item=><img src={item.Url} width={"100%"} />)} */}
        </div>
        <div className='thumbnail'>
        <ReactSmartScroller >

        {images && images.length >0 && images.map(item=><img src={item.Url} style={{
                width: '100%',
                height: 150,
                objectFit: 'contain'
            }} />)}
        </ReactSmartScroller>
        </div>
      </div>

      
          </div>
  );
}

export default App;
