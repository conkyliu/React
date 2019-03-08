import React, {Component} from 'react';
import {Row, Col, Menu, Icon, Button, Pagination, Checkbox,DatePicker} from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


class IndexBody extends Component {
    state = {
        current: "mail"
    };
    handleClick = (e) => {
        console.log('click', e);
        this.setState({
            current: e.key
        })
    };

    render() {

        return (
            <div>
                <Row>
                    <Menu onClick={this.handleClick}
                          selectedKeys={[this.state.current]} mode={"horizontal"}>
                        <Menu.Item key={"mail"}><Icon type={"mail"}></Icon>导航1</Menu.Item>
                        <Menu.Item key="app"><Icon type={"appstore"}/>导航2</Menu.Item>
                        <SubMenu title={<span className={'submenu-title-wrapper'}><Icon
                            type={"setting"}/>导航3</span>}>
                            <MenuItemGroup title="Item 1">
                                <Menu.Item key="setting:1">option 1</Menu.Item>
                                <Menu.Item key="setting:2">option 2</Menu.Item>
                            </MenuItemGroup>
                            <MenuItemGroup title="Item 2">
                                <Menu.Item key="setting:3">option 3</Menu.Item>
                                <Menu.Item key="setting:4">option 4</Menu.Item>
                            </MenuItemGroup>
                        </SubMenu>
                        <Menu.Item key={"alipay"}><a href={'https://www.baidu.com'}
                                                     target={"_blank"}>链接导航</a></Menu.Item>
                    </Menu>
                    <Col span={6}>

                        <Sider></Sider>
                        <Sider2></Sider2>
                    </Col>
                    <Col>
                        <CheckboxA />
                        <DatePickerA/>

                    </Col>
                </Row>

                <Pagination defaultCurrent={1} total={500} showSizeChanger showQuickJumper
                            style={{marginBottom: 16}}></Pagination>

            </div>)
    }

}

class Sider extends React.Component {
    handleClick = (e) => {
        console.log('click ', e);
    }

    render() {
        return (
            <Menu
                onClick={this.handleClick}
                style={{width: 256}}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
            >
                <SubMenu key="sub1" title={<span><Icon type="mail"/><span>Navigation One</span></span>}>
                    <MenuItemGroup key="g1" title="Item 1">
                        <Menu.Item key="1">Option 1</Menu.Item>
                        <Menu.Item key="2">Option 2</Menu.Item>
                    </MenuItemGroup>
                    <MenuItemGroup key="g2" title="Item 2">
                        <Menu.Item key="3">Option 3</Menu.Item>
                        <Menu.Item key="4">Option 4</Menu.Item>
                    </MenuItemGroup>
                </SubMenu>
                <SubMenu key="sub2" title={<span><Icon type="appstore"/><span>Navigation Two</span></span>}>
                    <Menu.Item key="5">Option 5</Menu.Item>
                    <Menu.Item key="6">Option 6</Menu.Item>
                    <SubMenu key="sub3" title="Submenu">
                        <Menu.Item key="7">Option 7</Menu.Item>
                        <Menu.Item key="8">Option 8</Menu.Item>
                    </SubMenu>
                </SubMenu>
                <SubMenu key="sub4" title={<span><Icon type="setting"/><span>Navigation Three</span></span>}>
                    <Menu.Item key="9">Option 9</Menu.Item>
                    <Menu.Item key="10">Option 10</Menu.Item>
                    <Menu.Item key="11">Option 11</Menu.Item>
                    <Menu.Item key="12">Option 12</Menu.Item>
                </SubMenu>
            </Menu>
        );
    }
}

class Sider2 extends React.Component {
    state = {
        collapsed: false,
    }

    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    render() {
        return (
            <div style={{width: 256}}>
                <Button type="primary" onClick={this.toggleCollapsed} style={{marginBottom: 16}}>
                    <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}/>
                </Button>
                <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="dark"
                    inlineCollapsed={this.state.collapsed}
                >
                    <Menu.Item key="1">
                        <Icon type="pie-chart"/>
                        <span>Option 1</span>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Icon type="desktop"/>
                        <span>Option 2</span>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Icon type="inbox"/>
                        <span>Option 3</span>
                    </Menu.Item>
                    <SubMenu key="sub1" title={<span><Icon type="mail"/><span>Navigation One</span></span>}>
                        <Menu.Item key="5">Option 5</Menu.Item>
                        <Menu.Item key="6">Option 6</Menu.Item>
                        <Menu.Item key="7">Option 7</Menu.Item>
                        <Menu.Item key="8">Option 8</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" title={<span><Icon type="appstore"/><span>Navigation Two</span></span>}>
                        <Menu.Item key="9">Option 9</Menu.Item>
                        <Menu.Item key="10">Option 10</Menu.Item>
                        <SubMenu key="sub3" title="Submenu">
                            <Menu.Item key="11">Option 11</Menu.Item>
                            <Menu.Item key="12">Option 12</Menu.Item>
                        </SubMenu>
                    </SubMenu>
                </Menu>
            </div>
        );
    }
}

class CheckboxA extends Component {
    render() {
        return (
            <div>
                <Checkbox>多选框</Checkbox>
            </div>
        )

    }
}
const {MonthPicker,RangePicker,WeekPicker}=DatePicker;
class DatePickerA extends  Component{
  render(){
      return(
          <div>
              <DatePicker placeholder={"选择日期"} showTime /><br/>
              <WeekPicker placeholder={"选择星期"}/><br/>
              <MonthPicker/><br/>
              <RangePicker/>
          </div>
      )

  }
}


export default IndexBody;