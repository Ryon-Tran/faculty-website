import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export interface MenuItem {
  id: string;
  label: string;
  to?: string;
  children?: MenuItem[];
}

interface SidebarMenuProps {
  items: MenuItem[];
  className?: string;
}

export const SidebarMenu: React.FC<SidebarMenuProps> = ({ items, className = '' }) => {
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});
  const location = useLocation();

  const toggleExpand = (id: string) => {
    setExpandedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const renderItem = (item: MenuItem, level = 0) => {
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedItems[item.id];
    const isActive = location.pathname === item.to;

    return (
      <div key={item.id} className={`w-full ${level === 0 ? 'border-b border-[#14326b] last:border-none' : 'border-b border-[#0f2a5c] last:border-none'}`}>
        <div 
          className={`flex items-center justify-between w-full px-4 py-3 cursor-pointer transition-colors
            ${level === 0 ? 'bg-[#1a428a] hover:bg-[#2250a1] text-white' : 'bg-[#14326b] hover:bg-[#c8102e] text-gray-200'}
            ${isActive ? (level === 0 ? 'bg-[#2250a1] font-bold border-l-4 border-[#c8102e]' : 'bg-[#c8102e] text-white font-bold') : 'font-medium'}
          `}
          style={isActive && level === 0 ? { paddingLeft: '12px' } : {}}
          onClick={() => {
            if (hasChildren) {
              toggleExpand(item.id);
            }
          }}
        >
          {item.to && !hasChildren ? (
            <Link to={item.to} className={`flex-1 text-inherit no-underline block w-full ${level > 0 ? 'pl-2' : ''}`}>
              {level > 0 && <span className="mr-2 text-xs opacity-50">▸</span>}
              {item.label}
            </Link>
          ) : (
            <span className="flex-1 select-none">{item.label}</span>
          )}
          
          {hasChildren && (
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="16" height="16" 
              viewBox="0 0 24 24" fill="none" 
              stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" 
              className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          )}
        </div>
        
        {/* Animated dropdown container */}
        <div 
          className={`overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
        >
          <div className="flex flex-col w-full bg-[#14326b]">
            {item.children?.map(child => renderItem(child, level + 1))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={`flex flex-col w-full font-['Inter'] rounded-xl overflow-hidden shadow-md ${className}`}>
      {items.map(item => renderItem(item, 0))}
    </div>
  );
};
