import React, {useState, forceUpdate} from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import {InfoRow,Progress,File, Select, Header, Input,FormLayout, FormLayoutGroup, PanelHeaderBack, List, Card, CardGrid } from '@vkontakte/vkui/';

import Icon28TargetOutline from '@vkontakte/icons/dist/28/target_outline';
import Icon28CalendarOutline from '@vkontakte/icons/dist/28/calendar_outline';
import Icon28PictureOutline from '@vkontakte/icons/dist/28/picture_outline';
import './Preview.css'
const styles = {
	
	group: {
		minHeight:'80vh',
		height: '100%',
	},
	div: {
		display:"flex",
		justifyContent:"center",
		alignItems:"center",
		flexFlow:"column"
	},
	cell:{
		backgroundColor:"#F5F5F5",
		marginTop:"12px",
	},

	button:{
		width:"100%",
	},
	file:{
		display: "block",
	maxHeight : "30vh",
		margin: "0 auto"

	},
	p:{
		fontSize: "13px",
		color: "#818C99",
		marginTop:"0"
	},
	h1:{
		marginBottom:"0",
		fontSize: "15px"
	},
	p2: {
		marginBottom:'10px',
		fontSize:'13px'
	},
	div2: {
		display:"flex",
		justifyContent:"center",
		alignItems:"center",
		
	},
	prog: {
		


	},
	but: {
		float:"right",
		maxWidth:"30%",
		marginTop:"-5vh"
	}
	
	
	
}

// <PanelHeader left={<PanelHeaderBack onClick={go} data-to="dop"/>}>{localStorage.getItem('author') == 'm' ? 'Матвей Правосудов' : 'Анонимно'}</PanelHeader>

const Preview = ({ id, go, fetchedUser }) => {
	
	
 
 	let currentDay = new Date()
 	currentDay = currentDay.getDate()
 	
 	let dataLast = localStorage.getItem('data') - currentDay
	
 return (

	<Panel id={id}>
		 <PanelHeader
            left={<PanelHeaderBack />}
            right={<PanelHeaderButton><Icon28AddOutline /></PanelHeaderButton>}
          >
            <PanelHeaderContent
              aside={<Icon16Dropdown style={{ transform: `rotate(${this.state.contextOpened ? '180deg' : '0'})` }} />}
              onClick={this.toggleContext}
            >
              Communities
            </PanelHeaderContent>
          </PanelHeader>
          <PanelHeaderContext opened={this.state.contextOpened} onClose={this.toggleContext}>
            <List>
              <Cell
                before={<Icon28UsersOutline />}
                asideContent={this.state.mode === 'all' ? <Icon24Done fill="var(--accent)" /> : null}
                onClick={this.select}
                data-mode="all"
              >
                Communities
              </Cell>
              <Cell
                before={<Icon28SettingsOutline />}
                asideContent={this.state.mode === 'managed' ? <Icon24Done fill="var(--accent)" /> : null}
                onClick={this.select}
                data-mode="managed"
              >
                Managed Communities
              </Cell>
            </List>
          </PanelHeaderContext>
		<Div>
		<img id="image1" src={localStorage.getItem('img')} style={styles.file} alt="yourimage"/>
		<h1 style = {styles.h1}>{localStorage.getItem('name')}</h1>
		<p style = {styles.p}>{localStorage.getItem('author') == 'm' ? 'Матвей Правосудов' : 'Анонимно'} &#183; Закончится через { dataLast} дней</p>
		<p style = {styles.p2}>Помогите первым</p>
		<InfoRow >
		<Progress value ={0} style = {styles.prog} />
		<Button size="l"mode="outline" style={styles.but}>Помочь</Button>
		</InfoRow>
		</Div>
		
<FormLayout>
		<Select top="Куда получать деньги">
			<option value ="m">Счёт VK Pay &#183; 1234</option>
		</Select>
</FormLayout>
	
	
	</Panel>

);

}

Preview.propTypes = {
	id: PropTypes.string.isRequired,

	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Preview;