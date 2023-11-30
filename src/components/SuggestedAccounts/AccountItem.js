import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './SuggestedAccounts.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('account-item')}>
            <img
                className={cx('avatar')}
                src="https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/915439d04dfd7b7a9dd518cc10eb4366.jpeg?x-expires=1701496800&x-signature=VbhY4Y3XGFgJcfxqPhWUx6deBFU%3D"
                alt="Nguyễn Hoàng Ngân"
            />
            <div className={cx('item-info')}>
                <p className={cx('nickname')}>
                    <strong>Nguyễn Hoàng Ngân</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Nguyễn Hoàng Ngân</p>
            </div>
        </div>
    );
}

AccountItem.propTypes = {};

export default AccountItem;
