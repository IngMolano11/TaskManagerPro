import { Routes } from '@angular/router';
import { Dashboard } from './components/dashboard/dashboard';
import { Tasks } from './components/tasks/tasks';
import { Calendar } from './components/calendar/calendar';
import { Finances } from './components/finances/finances';
import { Notes } from './components/notes/notes';
import { Profile } from './components/profile/profile';
import { Reminders } from './components/reminders/reminders';
import { Settings } from './components/settings/settings';
import { Statistics } from './components/statistics/statistics';

export const routes: Routes = [
  { path: '', redirectTo: 'tasks', pathMatch: 'full'},
  { path: 'dashboard', component: Dashboard},
  { path: 'tasks', component: Tasks},
  { path: 'calendar', component: Calendar},
  { path: 'finances', component: Finances},
  { path: 'notes', component: Notes},
  { path: 'profile', component: Profile},
  { path: 'reminders', component: Reminders},
  { path: 'settings', component: Settings},
  { path: 'statistics', component: Statistics},
];
