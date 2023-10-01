import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/981efac51ec797c6bdd3efba51c9a398~c5_100x100.jpeg?x-expires=1696237200&x-signature=DdXTY6Z5NYOKy5AZx2ZFvir%2F0gU%3D"
                alt=""
            ></img>
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
