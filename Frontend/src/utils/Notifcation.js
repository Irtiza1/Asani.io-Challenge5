import { createContext, useContext, useState } from 'react';
import { set } from 'date-fns';
import { faker } from '@faker-js/faker';

// Create the context
const NotificationContext = createContext();

// Context provider component
export function NotificationProvider({ children }) {
  const [notification, setNotification] = useState([]);
  const updateNotification = (title, description, type) => {
    setNotification((prevNotifications) => {
      const lastNotification = prevNotifications[prevNotifications.length - 1];
      const newId = lastNotification ? parseInt(lastNotification.id, 10) + 1 : 1;

      let avatar;
      switch (type) {
        case 'paani':
          avatar = 'ion:water-outline';
          break;
        case 'bijli':
          avatar = 'ant-design:thunderbolt-outlined';
          break;
        case 'gas':
          avatar = 'mdi:gas';
          break;
        case 'solar':
          avatar = 'mdi:solar-power';
          break;
        default:
          avatar = 'mdi:alert-circle-outline';
      }

      const newNotification = {
        id: String(newId),
        title,
        description,
        avatar,
        type,
        createdAt: new Date(),
        isUnRead: true,
      };

      return [...prevNotifications, newNotification];
    });
  };

  return (
    <NotificationContext.Provider value={{ notification, setNotification, updateNotification }}>
      {children}
    </NotificationContext.Provider>
  );
}

// Custom hook to use the context
export function useNotification() {
  return useContext(NotificationContext);
}
