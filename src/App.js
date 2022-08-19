import {Container,Row,Col} from 'react-bootstrap'
import {Routes,Route} from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import ProtectedRoute from './components/ProtectedRoute';

import {UserAuthContextProvider} from './context/useAuthContext';
import ForgotPassword from './components/ForgotPassword';

function App() {
  return (
    <Container style={{width:"400px"}}>
      <Row>
        <Col>
        <UserAuthContextProvider>
          <Routes>
            <Route exact path='/' element={<ProtectedRoute><Home/></ProtectedRoute>} />
            <Route exact path='/login' element={<Login/>}/>
            <Route exact path='/signup' element={<Signup/>}/>
            <Route exact path='/forgotpassword' element={<ForgotPassword/>}/>
          </Routes>
        </UserAuthContextProvider>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
