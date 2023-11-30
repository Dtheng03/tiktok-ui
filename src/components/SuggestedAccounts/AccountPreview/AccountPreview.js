import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './AccountPreview.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/915439d04dfd7b7a9dd518cc10eb4366.jpeg?x-expires=1701496800&x-signature=VbhY4Y3XGFgJcfxqPhWUx6deBFU%3D"
                    alt="Nguyễn Hoàng Ngân"
                />
                <Button className={cx('follow-btn')} primary>
                    Follow
                </Button>
            </div>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>Nguyễn Hoàng Ngân</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Nguyễn Hoàng Ngân</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>23M </strong>
                    <span className={cx('label')}>Followers</span>
                    <strong className={cx('value')}>1M </strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
