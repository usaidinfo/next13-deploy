'use client';

import React, { useState, useEffect } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import AddIcon from '@mui/icons-material/Add';
import HomeIcon from '@mui/icons-material/Home';

const Sidebar = () => {
  const [expandedLocation, setExpandedLocation] = useState<string | null>(null);
  const [activePath, setActivePath] = useState<string>('');

  useEffect(() => {
    setActivePath(window.location.pathname);
    const strain = new URLSearchParams(window.location.search).get('strain');
    if (strain) {
      setActivePath(`${window.location.pathname}?strain=${strain}`);
    }
  }, []);

  const locations = [
    {
      id: 'grow-room-1',
      name: 'Grow Room 1',
      path: '/dashboard/grow-location1',
      children: [],
      hasAddFlower: true
    },
    {
      id: 'grow-room-2',
      name: 'Grow Room 2',
      path: '/dashboard/grow-location2',
      children: [
        { id: 'scorpion', name: 'Scorpion', path: '/dashboard/grow-location2?strain=scorpion' },
        { id: 'gorilla-blue', name: 'Gorilla Blue', path: '/dashboard/grow-location2?strain=gorilla-blue' },
        { id: 'gary-payton', name: 'Gary Payton', path: '/dashboard/grow-location2?strain=gary-payton' }
      ],
      hasAddFlower: true
    },
    {
      id: 'grow-room-3',
      name: 'Grow Room 3',
      path: '/dashboard/grow-location3',
      children: [],
      hasAddFlower: true
    }
  ];

  const toggleLocation = (locationId: string) => {
    setExpandedLocation(expandedLocation === locationId ? null : locationId);
  };

  const handleNavigation = (path: string) => {
    window.location.href = path;
  };

  return (
    <div className="w-auto text-gray-300 h-auto my-8 mr-4 flex">
    <div className="w-6 bg-gradient" />

    <div className="flex-1 p-4 border border-white/10 bg-[rgba(24,24,27,0.5)] rounded-3xl shadow-[0_0_15px_rgba(255,255,255,0.1)]">
      <div className="flex items-center justify-center border-b border-zinc-700/50 gap-2 mb-8">
        <img src="/leafai-logo.png" alt="" className='w-24 h-18'/>
      </div>

      {/* New Grow Location Button */}
      <button className="w-full flex items-center justify-between font-sans font-semibold gap-2 px-4 py-3 mt-4 text-sm rounded-lg hover:bg-zinc-800/50 transition-colors text-slate-500">
        <span>New Grow Location</span>
        <AddIcon className="w-4 h-4" />
      </button>

      {/* Navigation Menu */}
      <nav className="space-y-3 mt-3">
        {locations.map((location) => (
          <div key={location.id} className="space-y-2">
            {/* Location Button */}
            <button
              onClick={() => {
                toggleLocation(location.id);
                if (!location.children.length) {
                  handleNavigation(location.path);
                }
              }}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-200 
                ${activePath === location.path 
                  ? 'bg-white/10 text-white shadow-[0_0_10px_rgba(255,255,255,0.1)]' 
                  : 'hover:bg-zinc-800/50 text-gray-300'}`}
            >
              <div className="flex items-center gap-3">
                <HomeIcon className="w-4 h-4" />
                <span className="text-sm">{location.name}</span>
              </div>
              {expandedLocation === location.id ?
                <ExpandLessIcon className="w-5 h-5" /> :
                <ExpandMoreIcon className="w-5 h-5" />
              }
            </button>

            {/* Nested Items */}
            {expandedLocation === location.id && (
              <div className="ml-6 space-y-2">
                {location.children.map((child) => (
                  <button
                    key={child.id}
                    onClick={() => handleNavigation(child.path)}
                    className={`w-full flex items-center px-4 py-3 rounded-lg transition-all duration-200 text-sm
                      ${activePath === child.path 
                        ? 'bg-white/10 text-white shadow-[0_0_10px_rgba(255,255,255,0.1)]' 
                        : 'hover:bg-zinc-800/50 text-gray-300'}`}
                  >
                    {child.name}
                  </button>
                ))}
                {location.hasAddFlower && (
                  <button className="w-full flex items-center justify-between px-4 py-3 rounded-lg hover:bg-zinc-800/50 transition-colors text-sm font-sans font-semibold  text-slate-500">
                    <span>Add Flower</span>
                    <AddIcon className="w-4 h-4" />
                  </button>
                )}
              </div>
            )}
          </div>
        ))}
      </nav>
    </div>
  </div>
  );
};

export default Sidebar;