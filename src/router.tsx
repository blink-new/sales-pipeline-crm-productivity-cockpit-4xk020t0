import React from 'react'
import { createBrowserRouter, Navigate, Outlet } from 'react-router-dom'
import { AppShell } from './components/layout/AppShell'
import { Dashboard } from './pages/Dashboard'
import { Pipeline } from './pages/Pipeline'
import { Leads } from './pages/Leads'
import { LeadDetail } from './pages/LeadDetail'
import { Reports } from './pages/Reports'
import { Profile } from './pages/Profile'
import { Notifications } from './pages/Notifications'
import { Settings } from './pages/Settings'
import { Onboarding } from './pages/Onboarding'

// Layout with AppShell
const AppLayout = () => {
  return (
    <AppShell>
      <Outlet />
    </AppShell>
  )
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/dashboard" replace />,
      },
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
      {
        path: 'pipeline',
        element: <Pipeline />,
      },
      {
        path: 'leads',
        element: <Leads />,
      },
      {
        path: 'leads/:id',
        element: <LeadDetail />,
      },
      {
        path: 'reports',
        element: <Reports />,
      },
      {
        path: 'profile',
        element: <Profile />,
      },
      {
        path: 'notifications',
        element: <Notifications />,
      },
      {
        path: 'settings',
        element: <Settings />,
      },
    ],
  },
  {
    path: '/onboarding',
    element: <Onboarding />,
  },
]);