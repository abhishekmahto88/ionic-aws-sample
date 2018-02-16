import { Component } from '@angular/core';

import { SettingsPage } from '../settings/settings';
import { TasksPage } from '../tasks/tasks';
import { DashboardPage } from '../dashboard/dashboard';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  // tab1Root = TasksPage;
  // tab2Root = SettingsPage;

  tab1Root: any = DashboardPage;
  tab2Root: any = SettingsPage;
  tab3Root: any = SettingsPage;
  tab4Root: any = SettingsPage;

  tab1Title = "Home";
  tab2Title = "My Payments";
  tab3Title = "Inbox";
  tab4Title = "Help";

  constructor() {

  }
}
