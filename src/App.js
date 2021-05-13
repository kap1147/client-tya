import './App.css';

function App() {

  const _handleSignInClick = () => {
    // Authenticate using via passport api in the backend
    // Open Twitter login page
    window.open("https://theyardapp.com/api/auth/google", "_self");
  };

  return (
    <div className="app">
		<button onClick={_handleSignInClick}>Login</button>
    </div>
  );
}

export default App;
