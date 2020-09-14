import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import {Radio, File, Select, Header, Input,FormLayout, FormLayoutGroup, PanelHeaderBack, List, Card, CardGrid } from '@vkontakte/vkui/';

import Icon28TargetOutline from '@vkontakte/icons/dist/28/target_outline';
import Icon28CalendarOutline from '@vkontakte/icons/dist/28/calendar_outline';
import Icon28PictureOutline from '@vkontakte/icons/dist/28/picture_outline';
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
		border: "1px dashed #3F8AE0",
		width:"100%",
		padding:"10vh 0",
		color:"#3F8AE0",

	}
	
}
function dataCheck() {
	localStorage.setItem('data', document.getElementById('dataChoice').value)
	if(document.getElementById("dataChoice").value !=="") {
		document.getElementById("createButton").removeAttribute('disabled')
	} else {
		document.getElementById("createButton").setAttribute('disabled','true')
	}
}
function setAuthor() {
	
	localStorage.setItem('author', document.getElementById('author').value)
}
const Dop = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader left={<PanelHeaderBack onClick={go} data-to="sbor1"/>}>Дополнительно</PanelHeader>
        <FormLayout>
            <Select id ="author" top="Автор" onChange={setAuthor}>
                <option value ="m">Матвей Провосудов</option>
                <option value ="a">Анонимно</option>
            </Select>
        </FormLayout>
		<FormLayout >
            <Radio top="Сбор заверишится" name="radio"  defaultChecked>Когда соберем сумму</Radio>
            <Radio name="radio" >В определенную дату</Radio>
		</FormLayout>
        <FormLayout>
            <Select onChange={dataCheck} id="dataChoice" top="Дата окончания" placeholder ="Выберите дату">
                <option value ="19" type="date">19 сентября</option>
                <option value ="20" type="date">20 сентября</option>
                <option value ="21" type="date">21 сентября</option>
                <option value ="22" type="date">22 сентября</option>
            </Select>
        </FormLayout>
	<Div>
		<Button id="createButton"size="xl" onClick={go} data-to="preview"style={styles.button}>Создать сбор</Button>
	</Div>
	</Panel>
);

Dop.propTypes = {
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

export default Dop;