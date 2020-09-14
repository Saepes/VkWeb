import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import {Header } from '@vkontakte/vkui/';
const styles = {
	
	group: {
		minHeight:'80vh',
		height: '100%',
		display:"flex",
		justifyContent:"center",
		alignItems:"center"
	},
	p: {
		color:"#818C99",
		maxWidth:"60%",
		textAlign:"center",
		fontSize:"16px"

	},
	div: {
		display:"flex",
		justifyContent:"center",
		alignItems:"center",
		flexFlow:"column"
	},
	

}
const Home = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		
		<PanelHeader>Пожертвования</PanelHeader>
		
		
		<Group style={styles.group}>
		<Div style ={styles.div}>
		
			<p style ={styles.p}>У Вас пока нет сборов. Начните доброе дело.</p>
			

		<Button onClick={go} data-to="choice">Создать сбор</Button>
		
		</Div>
		</Group>
		
	</Panel>
);

Home.propTypes = {
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

export default Home;
