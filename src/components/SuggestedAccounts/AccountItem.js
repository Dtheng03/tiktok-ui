import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from './AccountPreview/AccountPreview';
import styles from './SuggestedAccounts.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    const renderPreview = (props) => {
        return (
            <div className={cx('preview')} tabIndex={'-1'} {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        );
    };

    return (
        <div>
            <Tippy interactive delay={[800, 0]} offset={[-20, 0]} placement="bottom" render={renderPreview}>
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
            </Tippy>
        </div>
    );
}

AccountItem.propTypes = {};

export default AccountItem;
