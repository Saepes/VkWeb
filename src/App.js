import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import View from '@vkontakte/vkui/dist/components/View/View';

import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import Choice from './panels/Choice'
import Sbor1 from './panels/Sbor1'
import Sbor2 from './panels/Sbor2'
import Dop from './panels/Dop'
import Preview from './panels/Preview'
const App = () => {
	const [activePanel, setActivePanel] = useState('home');
	const [fetchedUser, setUser] = useState(null);
	

	

	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};
	
	
	return (
		<View activePanel={activePanel} >
			<Home id='home'  go={go} />
			<Choice id='choice' go={go} />
			<Sbor1 id='sbor1' go={go} />
			<Sbor2 id='sbor2' go={go} />
			<Dop id='dop' go={go} />
			<Preview id='preview' go={go} />
		</View>
	);
}

export default App;

