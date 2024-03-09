import { Outlet } from 'react-router-dom';
import GlobalStyle from './GlobalStyle.styles';
import * as s from './App.style';
import AppRoutes from './routes';

function App() {
    return (
        <s.App>
            <AppRoutes />
            <GlobalStyle />
            <Outlet />
        </s.App>
    );
}

export default App;
