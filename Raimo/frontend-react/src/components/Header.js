import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';


function Header(){

    const { Header } = Layout;

    return(
        <>
            <Header>
                {/* <div style={{background: '#fff', height: '100%', padding: '20px', backgroundColor: "purple"}}> */}
                    <Menu mode="horizontal" >
                        <Menu.Item>
                            <Link to='/'>avaleht</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to='/posts'>lisamine</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to='/viewposts'>vaatamine</Link>
                        </Menu.Item>
                        <Menu.Item key='register'>
                            <Link to='/register'>registreerimine</Link>
                        </Menu.Item>
                        <Menu.Item key='login'>
                            <Link to='/login'>sisselogimine</Link>
                        </Menu.Item>
                    </Menu>
                {/* </div> */}
            </Header>
        </>
    );
}

export default Header;