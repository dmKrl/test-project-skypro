import { Link } from 'react-router-dom';
import NotFoundContainer from './NotFoundPage.style';

function NotFoundPage() {
    return (
        <NotFoundContainer>
            <div>
                Ошибка 404, страница не найдена.
                <br /> Попробуйте перезапустить страницу. <br />
                Или вернуться на главную
            </div>
            <Link to="/">Вернуться на главную</Link>
        </NotFoundContainer>
    );
}

export default NotFoundPage;
