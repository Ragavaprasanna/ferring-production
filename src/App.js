import './App.css';
import { Routes, Route} from 'react-router-dom'
import Landingpage from './Landing page/Landingpage';
import ExistingUser from './ExistingUser/ExistingUser';
import NewUser from './NewUser/NewUser';
import Concent from './Concent/Concent';
import InsuranceInfo from './InsuranceInfo/InsuranceInfo';
import Tables from './Tables/Table';
import Final from './Final/Final';
import Survey from './Survey/Survey';
import NewLandingpage from './NewLandingPage/NewLandingpage';
import UserTable from './UserTable/UserTable';
import Document from './Document/Document';
import Authform from './Authform/Authform';
import Pverify from './Pverify/Pverify';
import Summary from  './summary/summary'
import Pverifyy from './Pverify/Pverifyy';
import Sidebar from './Pverify/Sidebar';
// import Table from './Pverify/Table';
import MTable from './Pverify/Table';
// import Change from './Pverify/change';
import Header from './Pverify/Header';
// import { Table } from 'antd';

function App() {
  return (  
    <div className="App">
    <Routes>
       {/* <Route exact path="/" element={<Landingpage/>}/> */}
       <Route exact path="/" element={<NewLandingpage/>}/>  
       <Route exact path="ExistingUser" element={<ExistingUser />}></Route>
       <Route exact path="NewUser" element={<NewUser />}></Route>
       <Route exact path="Consent" element={<Concent />}></Route>
       <Route exact path="InsuranceInfo" element={<InsuranceInfo />}></Route>
       <Route exact path="Copay" element={<Tables />}></Route>
       <Route exact path="Final" element={<Final/>}></Route>
       <Route exact path="Survey" element={<Survey/>}></Route>
       <Route exact path="userTable" element={<UserTable/>}></Route>
       <Route exact path="Authform" element={<Authform/>}></Route>
       <Route exact path="Pverify" element={<Pverify/>}></Route>
       <Route exact path="summary" element={<Summary/>}></Route>
       <Route exact path="Pverifyy" element={<Pverifyy/>}></Route>
       <Route exact path="side" element={<Sidebar/>}></Route>
        <Route exact path="table" element={<MTable/>}></Route>
       
        <Route exact path="header" element={<Header/>}></Route>
        
    
       {/* <Route exact path="document" element={<Document/>}></Route> */}

    </Routes>
    </div>
  );
}

export default App;
