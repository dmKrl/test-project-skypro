import { Route, Routes } from 'react-router-dom';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import MainPage from './pages/MainPage/MainPage';
import MainLayouts from './components/MainLayouts/MainLayouts';

function AppRoutes() {
    return (
        <Routes>
            <Route element={<MainPage />} path="/">
                <Route element={<MainLayouts />} path="/" />
                <Route element={<NotFoundPage />} path="*" />
            </Route>
        </Routes>
    );
}

export default AppRoutes;
