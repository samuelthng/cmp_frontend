import './App.css';
import { Layout } from 'antd';
import Header from './components/Header';
import Router from './components/Router';

function App() {
  return (
		<Layout style={{ height: '100%', overflow: 'auto' }}>
			<Header />
      <Router />
		</Layout>
	);
}

export default App;
