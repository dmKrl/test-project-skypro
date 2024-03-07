import { Outlet } from 'react-router-dom';
import GlobalStyle from './GlobalStyle.styles';
import * as s from './App.style';
import AppRoutes from './routes';

// const accessToken = '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';

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
