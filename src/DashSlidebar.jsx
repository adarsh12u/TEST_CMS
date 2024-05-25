import { Sidebar } from 'flowbite-react';
import {
  HiUser,
  
  HiDocumentText,

  HiChartPie,
} from 'react-icons/hi';
import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const DashSidebar = ()=> {
  const location = useLocation();
  const { user } = useSelector((state) => state.user);
  const [tab, setTab] = useState('');
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get('tab');
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);
  
  return (
    <Sidebar className='w-full md:h-screen md:w-56'>
      <Sidebar.Items>
        <Sidebar.ItemGroup className='flex flex-col gap-1'>
          {(
            <Link to='/cms?tab=blog'>
              <Sidebar.Item
                active={tab === 'dash' || !tab}
                icon={HiChartPie}
                as='div'
              >
                Blogs
              </Sidebar.Item>
            </Link>
          )}
          <Link to='/cms?tab=course'>
            <Sidebar.Item
              active={tab === 'profile'}
              icon={HiUser}
              labelColor='dark'
              as='div'
            >
              Courses
            </Sidebar.Item>
          </Link>
          { (
            <Link to='/cms?tab=seminar'>
              <Sidebar.Item
                active={tab === 'posts'}
                icon={HiDocumentText}
                as='div'
              >
                Seminars
              </Sidebar.Item>
            </Link>
          )}
       

        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}

export default DashSidebar;