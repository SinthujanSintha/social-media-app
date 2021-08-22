import { ExpandMoreOutlined } from '@material-ui/icons';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ChatIcon from '@material-ui/icons/Chat';
import React from 'react';
import SidebarRow from './SidebarRow/SidebarRow';
import './Sidebar.css';
import { useStateValue } from '../../context/StateProvider';

const Sidebar = () => {
    const [{ user }] = useStateValue();

    return (
        <div className='sidebar'>
            <SidebarRow src={user.photoURL}
                title={user.displayName} />
            <SidebarRow Icon={LocalHospitalIcon}
                title='Covid-19 Information Center' />
            <SidebarRow Icon={EmojiFlagsIcon} title='Pages' />
            <SidebarRow Icon={PeopleIcon} title='Friends' />
            <SidebarRow Icon={ChatIcon} title='Messenger' />
            <SidebarRow Icon={StorefrontIcon} title='Marketplace' />
            <SidebarRow Icon={VideoLibraryIcon} title='Videos' />
            <SidebarRow Icon={ExpandMoreOutlined} />
        </div>
    )
}

export default Sidebar
