import { Outlet } from 'react-router-dom';
import Container from './MainPage.style';

function MainPage() {
    return (
        <Container>
            <Outlet />
        </Container>
    );
}

export default MainPage;
