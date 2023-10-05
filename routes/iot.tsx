import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { route } from 'preact-router';
import { Link } from 'preact-router/match';
import 'tailwindcss/tailwind.css';

const IoT = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://www.fathym.com/iot')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
      <div className="flex-shrink-0">
        <img className="h-12 w-12" src={data.logo} alt="Fathym Logo" />
      </div>
      <div>
        <div className="text-xl font-medium text-black">{data.title}</div>
        <p className="text-gray-500">{data.description}</p>
      </div>
    </div>
  );
};

export default IoT;