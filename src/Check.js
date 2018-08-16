import React, { Component } from 'react';
import logo from './logo.svg';
import {
    Button,
    Layout,
    Menu,
    Select,
    Upload,
    Icon,
    message,
    Table,
    Divider
} from 'antd';
import './check.less';
const { Header, Content } = Layout;
const Option = Select.Option;
const Dragger = Upload.Dragger;
const props = {
    name: 'file',
    multiple: true,
    action: '//jsonplaceholder.typicode.com/posts/',
    onChange(info) {
        const status = info.file.status;
        if (status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    }
};

class Check extends Component {
    constructor(props) {
        super(props);
        this.state = {
            excelFilter: [{ text: 's', value: 'John Brown' }],
            data: [
                {
                    key: '1',
                    excel: 'John Brown',
                    rowNum: 31,
                    error: 'New York No. 1 Lake Park'
                },
                {
                    key: '2',
                    excel: 'Jim Green',
                    rowNum: 32,
                    error: 'London No. 1 Lake Park'
                },
                {
                    key: '3',
                    excel: 'Joe Black',
                    rowNum: 33,
                    error: 'Sidney No. 1 Lake Park'
                }
            ]
        };
    }
    render() {
        const columns = [
            {
                title: '用例表',
                dataIndex: 'excel',
                key: 'excel',
                defaultSortOrder: 'descend',
                filters: this.state.excelFilter,
                onFilter: (value, record) => {
                    return String(record.excel) === String(value);
                },
                sorter: (a, b) => a.excel > b.excel
                // sortOrder: 'ascend'
            },
            {
                title: '行数',
                dataIndex: 'rowNum',
                key: 'rowNum',
                sorter: (a, b) => a.rowNum - b.rowNum
            },
            {
                title: '错误说明',
                dataIndex: 'error',
                key: 'error'
            }
        ];

        return (
            <div>
                <Layout>
                    <Header className="header" theme="light">
                        <Menu
                            theme="light"
                            mode="horizontal"
                            defaultSelectedKeys={['1']}
                        >
                            <Menu.Item key="1">资产总表生成</Menu.Item>
                        </Menu>
                    </Header>
                    <Content>
                        <div className="container">
                            <div className="selectContainer">
                                <Dragger {...props}>
                                    <p className="ant-upload-drag-icon">
                                        <Icon type="inbox" />
                                    </p>
                                    <p className="ant-upload-text">
                                        Click or drag file to this area to
                                        upload
                                    </p>
                                    <p className="ant-upload-hint">
                                        Support for a single or bulk upload.
                                        Strictly prohibit from uploading company
                                        data or other band files
                                    </p>
                                </Dragger>
                                <Button>检查</Button>
                            </div>
                            <div className="resContainer">
                                <Table
                                    columns={columns}
                                    dataSource={this.state.data}
                                    pagination={false}
                                />
                            </div>
                        </div>
                    </Content>
                </Layout>
            </div>
        );
    }
}

export default Check;
