import { useState } from 'react';

const LoginSignup = () => {
  const [activeTab, setActiveTab] = useState('login');
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
  const [signupForm, setSignupForm] = useState({ name: '', email: '', password: '' });

  const handleInputChange = (e, formSetter) => {
    const { name, value } = e.target;
    formSetter(prev => ({ ...prev, [name]: value }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Login:', loginForm);
    // Add login logic here
  };

  const handleSignup = (e) => {
    e.preventDefault();
    console.log('Signup:', signupForm);
    // Add signup logic here
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-center mb-6">
          <button
            className={`px-4 py-2 font-medium ${activeTab === 'login' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500'}`}
            onClick={() => setActiveTab('login')}
          >
            Login
          </button>
          <button
            className={`px-4 py-2 font-medium ${activeTab === 'signup' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500'}`}
            onClick={() => setActiveTab('signup')}
          >
            Signup
          </button>
        </div>

        {activeTab === 'login' && (
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={loginForm.email}
                onChange={(e) => handleInputChange(e, setLoginForm)}
                className="w-full p-3 border rounded-lg"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Password</label>
              <input
                type="password"
                name="password"
                value={loginForm.password}
                onChange={(e) => handleInputChange(e, setLoginForm)}
                className="w-full p-3 border rounded-lg"
                required
              />
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors">
              Login
            </button>
          </form>
        )}

        {activeTab === 'signup' && (
          <form onSubmit={handleSignup}>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={signupForm.name}
                onChange={(e) => handleInputChange(e, setSignupForm)}
                className="w-full p-3 border rounded-lg"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={signupForm.email}
                onChange={(e) => handleInputChange(e, setSignupForm)}
                className="w-full p-3 border rounded-lg"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Password</label>
              <input
                type="password"
                name="password"
                value={signupForm.password}
                onChange={(e) => handleInputChange(e, setSignupForm)}
                className="w-full p-3 border rounded-lg"
                required
              />
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors">
              Signup
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default LoginSignup;
