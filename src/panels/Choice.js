import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import {Header, PanelHeaderBack, List, Card, CardGrid } from '@vkontakte/vkui/';

import Icon28TargetOutline from '@vkontakte/icons/dist/28/target_outline';
import Icon28CalendarOutline from '@vkontakte/icons/dist/28/calendar_outline';
import './Choice.css';

const styles = {
	
	group: {
		minHeight:'80vh',
		height: '100%',
		display:"flex",
		justifyContent:"center",
		alignItems:"center",
		width: "100%"

	},
	div: {
		display:"flex",
		justifyContent:"center",
		alignItems:"center",
	},
	cell:{
		backgroundColor:"#F5F5F5",
		marginTop:"12px",
	},
	cardGrid:{
	}

}
const Choice = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		
		<PanelHeader left={<PanelHeaderBack onClick={go} data-to="home"/>}>Тип сбора</PanelHeader>
		
		<Group style={styles.group}>
		<Div>
			<Card style={styles.card}>
			<Cell style={styles.cell} expandable onClick ={go} data-to="sbor1" before={<Icon28TargetOutline/>} description="Когда есть определенная цель"><strong>Целевой сбор</strong></Cell>
			</Card>
			<Card style={styles.card}>
			<Cell style={styles.cell}  expandable onClick ={go} data-to="sbor2" before={<Icon28CalendarOutline/>} description="Если помощь нужна ежемесячно"><strong>Регулярный сбор</strong></Cell>
			</Card>
		</Div>
		</Group>
	</Panel>
);

Choice.propTypes = {
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

export default Choice;