'use client'
import React from 'react';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonIcon from '@mui/icons-material/Person';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

// Navbar Component
const Navbar = () => {
  return (
    <div className="h-16 px-6 flex items-center justify-between">
      <div className="flex-1"></div>
      <div className="flex items-center gap-6 text-sm">
        <button className="text-white hover:text-slate-200 flex items-center gap-2">
          <AddCircleOutlineOutlinedIcon className="w-5 h-5" />
          Add Sensor
        </button>
        <button className="text-white hover:text-slate-200 flex items-center gap-2">
          <PersonIcon className="w-5 h-5" />
          Logout
        </button>
        <button className="text-white hover:text-slate-200">
          <SettingsOutlinedIcon className="w-5 h-5" />
        </button>
        <button className="text-white hover:text-slate-200">
          <NotificationsNoneOutlinedIcon className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;