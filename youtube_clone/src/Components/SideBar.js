import React from 'react';
import SideBarRow from './SideBarRow';
import { HomeOutlined,SortDescendingOutlined ,SubnodeOutlined,HistoryOutlined,FieldTimeOutlined,LikeFilled,YoutubeFilled,DownloadOutlined} from '@ant-design/icons';
import '../CSS/SideBar.css';
import { Link } from 'react-router-dom';



const SideBar = () => {
    return (
        <div className='sidebar'>
            <SideBarRow Icon={HomeOutlined} title='Home'/>
            <SideBarRow Icon={SortDescendingOutlined} title='Trending'/>
            <SideBarRow Icon={SubnodeOutlined } title='Subscription'/><hr/>
            <SideBarRow Icon={YoutubeFilled } title='Libraby'/>
            <Link to='/History'><SideBarRow Icon={HistoryOutlined } title='History'/></Link>
            <Link to='/watchlater'> <SideBarRow Icon={FieldTimeOutlined } title='Watch Later'/></Link>
            <Link to='/likes'><SideBarRow Icon={LikeFilled } title='Liked Videos'/></Link>
            <SideBarRow Icon={DownloadOutlined} title='Downloaded'/>
            
         </div>
    )
}

export default SideBar;