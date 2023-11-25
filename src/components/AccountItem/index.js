import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from '../Image';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <Image
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/915439d04dfd7b7a9dd518cc10eb4366.jpeg?x-expires=1700978400&x-signature=q32R5nUc8mn8jdZAzCzEW2vgE94%3D"
                alt=""
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyễn Hoàng Ngân</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>nguyenhoangngan</span>
            </div>
        </div>
    );
}

export default AccountItem;
