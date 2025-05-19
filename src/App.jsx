import { BrowserRouter, Routes, Route} from 'react-router-dom';
//layout
import DefaultLayout from './layouts/DefaultLayout.jsx';
import './App.css';
// pagine
import Homepage from './pages/Homepage.jsx';
import Personaggi from './pages/Personaggi.jsx';
import Contacts from './pages/Contacts.jsx';
import SinglePers from './pages/SinglePers.jsx';
import PostPage from './pages/PostPage.jsx';
import { CountProvider } from './context/CountContext.jsx';


function App() {


  return (
    <>
      <CountProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route index element={<Homepage />} />  
              <Route path="/personaggi">
                <Route index element={<Personaggi />} />
                <Route path=":id" element={<SinglePers />} />
              </Route>
              <Route path="/post" element={<PostPage />} />
              <Route path="/contacts" element={<Contacts />} />
            </Route>
          </Routes>
        </BrowserRouter>  
      </CountProvider>
    </>
  )
}

export default App
