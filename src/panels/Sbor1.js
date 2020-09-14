import React, {useState, forceUpdate} from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import {File, Select, Header, Input,FormLayout, FormLayoutGroup, PanelHeaderBack, List, Card, CardGrid } from '@vkontakte/vkui/';

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


const Sbor1 = ({ id, go, fetchedUser }) => {
	
	
	
	const [showElement, setShowElement] = useState(true)
	
function testFunc() {

	let name = document.getElementById('namesb')
	let sum = document.getElementById('sumsb')
	let purpose = document.getElementById('purposesb')
	let about = document.getElementById('aboutsb')
	if(name.value && sum.value && purpose.value && about.value) {
		console.log('go')
	localStorage.setItem('name',name.value)
	localStorage.setItem('sum',sum.value)
	localStorage.setItem('purpose',purpose.value)
	localStorage.setItem('about',about.value)
	document.getElementById('but').removeAttribute('disabled')

} else {
	document.getElementById('but').setAttribute('disabled','true')
}
}

function saveImg() {
	
	console.log(document.getElementById("file1").files[0])
	let img = document.getElementById('image1')
	if(img){
	img.style.display = "block"
	img.style.maxHeight = "30vh"
	img.style.margin = "0 auto"
	img.src= URL.createObjectURL(document.getElementById("file1").files[0])
	localStorage.setItem('img', img.src)
	setShowElement(false)
	
}
	
}
 
	
 return (

	<Panel id={id}>
		<PanelHeader left={<PanelHeaderBack onClick={go} data-to="choice"/>}>Целевой сбор</PanelHeader>
		<Div>
		<img id="image1" alt="yourimage" style={{display:"none"}}/>
		{ showElement && <File id = "file1" onChange={saveImg} align="center"style={styles.file}mode ="overlay_primary" controlSize="l" before={<Icon28PictureOutline/>}>Загрузить</File> }
		</Div>
		<FormLayout>
			<Input onChange={testFunc} id= "namesb" type="text" top = "Название сбора" placeholder="Название сбора"/>
			<Input onChange={testFunc} id = "sumsb"top ="Сумма, ₽" type="number" placeholder="Сколько нужно собрать?"/>
			<Input onChange={testFunc} id = "purposesb"top ="Цель" type="text" placeholder="Например, лечение человека"/>
			<Input onChange={testFunc} id = "aboutsb"top ="Описание" type="text" placeholder="На что пойдут деньги и как они кому-то помогут?"/>
		</FormLayout>
<FormLayout>
		<Select top="Куда получать деньги">
			<option value ="m">Счёт VK Pay &#183; 1234</option>
		</Select>
</FormLayout>
	<Div>
		<Button  id = "but" size="xl" style={styles.button} onClick={go} data-to="dop">Далее</Button>
	</Div> 
	</Panel>

);

}

Sbor1.propTypes = {
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

export default Sbor1;