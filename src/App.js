import React, { Component } from 'react';
import logo from './logo.svg';
import { Button, Layout, Menu, Select } from 'antd';
import './App.less';
const { Header, Content } = Layout;
const Option = Select.Option;
class App extends Component {
    render() {
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
                            <div className="svnContainer">
                                <div className="svnSelectContainer">
                                    <Select
                                        className="svnSelect"
                                        mode="multiple"
                                        style={{ width: '100%' }}
                                        placeholder="Please select"
                                        defaultValue={['all']}
                                    >
                                        <Option key={1}>xc</Option>
                                    </Select>
                                </div>
                                <div className="svnButContainer">
                                    <Button id="updateBut">更新</Button>
                                    <Button>提交</Button>
                                </div>
                            </div>
                            <div className="excelContainer">
                                <Select
                                    mode="multiple"
                                    style={{ width: '100%' }}
                                    placeholder="Please select"
                                    defaultValue={['all']}
                                >
                                    <Option key={1}>xc</Option>
                                </Select>
                                <Button>生成资产总表</Button>
                            </div>
                        </div>
                    </Content>
                </Layout>
            </div>
        );
    }
}

export default App;
