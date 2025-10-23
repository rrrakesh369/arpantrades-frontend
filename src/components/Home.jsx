import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { fetchDashboard } from '../utils/dashbordSlice'
import Dashboard from './Dashbord'

const Home = () => {
  const dispatch = useDispatch();

  const dashboard = useSelector((state) => state.dashboard);
  
  const { title, imageUrl, loading, error } = dashboard;

  useEffect(() => {
    dispatch(fetchDashboard());
  }, [dispatch]);

  if (loading) return <p className="p-4">Loading...</p>;
  if (error) return <p className="p-4 text-red-500">Error: {error}</p>;

  return (
    <div>
      <Dashboard dashboardData={dashboard} />
    </div>
  );
};

export default Home;

