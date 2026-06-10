export interface ProjectBrandConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
}

export interface ProjectNavItem {
  label: string;
  icon: string;
  route: string;
}

export interface ProjectTableConfig {
  defaultPageSize: number;
  pageSizeOptions: number[];
  size: 'small' | 'large';
}

export interface ProjectConfig {
  brand: ProjectBrandConfig;
  workspaceName: string;
  navigation: ProjectNavItem[];
  table: ProjectTableConfig;
}

export const PROJECT_CONFIG: ProjectConfig = {
  brand: {
    name: 'Angular FAST',
    shortName: 'FAST',
    logoText: 'F',
    tagline: 'Feature architecture, SignalStore, and tokenized UI.',
  },
  workspaceName: 'Starter workspace',
  navigation: [
    { label: 'Dashboard', icon: 'pi pi-chart-line', route: '/app/dashboard' },
    { label: 'Customers', icon: 'pi pi-users', route: '/app/customers' },
    { label: 'Shell demos', icon: 'pi pi-window-maximize', route: '/app/shell-demos' },
    { label: 'Settings', icon: 'pi pi-cog', route: '/app/settings' },
    { label: 'Profile', icon: 'pi pi-user', route: '/app/profile' },
  ],
  table: {
    defaultPageSize: 8,
    pageSizeOptions: [5, 8, 12, 20, 50],
    size: 'small',
  },
};
