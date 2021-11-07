import { useEffect, useState } from 'react'
import { Table, Button } from 'antd';
import { Link } from 'react-router-dom';
import {axios} from 'axios';

// var Vue = require('vue');
// Vue.prototype.$http = axios

const ViewPosts = () => {
    const [response, setResponse] = useState();
    useEffect(() => {
        // Axios on vajalik, et ei tekiks "failure to fetch" errorit
    axios.get('http://localhost:8081/api/post')
    // this.$http.get('http://localhost:8081/api/post')
        .then((response) => {
            console.log(JSON.stringify(response.data));
            setResponse(response.data);
        }
        );
        // .catch(function(error) {
        //     console.log(error);
        }, 
        [])

    const columns = [
        {
            title: 'user',
            dataIndex: 'user',
            key: 'user',
        },
        {
            title: 'title',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'description',
            dataIndex: 'desc',
            key: 'desc',
        },
        {
            title: 'date',
            dataIndex: 'createdAt',
            key: 'createdAt',
        },
        {
            title: 'change',
            key: 'action',
            render: () => (
                <div>
                    <Button>
                        Delete
                    </Button>
                    <Link to={`/edit/`}>
                        <Button>
                            Edit
                        </Button>
                    </Link>
                </div>
            ),
        },
    ];

    return (
        <div>
            <Table dataSource={response} columns={columns} />;
        </div>
    )
}

export default ViewPosts;