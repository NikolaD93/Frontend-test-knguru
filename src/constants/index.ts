import {
  BubbleChart,
  Chart,
  Chat,
  Dashboard,
  Group,
  Landscape,
  Library,
  NoteStack,
  NoteStackWhite,
  RssFeed,
  Settings,
  Stacks,
  Task,
  Tune,
  Widgets,
} from '@/assets';
import { type miniSidebarImagesType, type sidebarTypes } from '@/types';

export const miniSidebarImages: miniSidebarImagesType[] = [
  {
    src: Stacks,
    alt: 'stacks icon',
  },
  {
    src: Widgets,
    alt: 'widgets icon',
  },
  {
    src: NoteStack,
    alt: 'notestack icon',
  },
  {
    src: Tune,
    alt: 'tune icon',
  },
  {
    src: Chart,
    alt: 'bar chart icon',
  },
  {
    src: Landscape,
    alt: 'landscape icon',
  },
  {
    src: BubbleChart,
    alt: 'bubble chart icon',
  },
  {
    src: Dashboard,
    alt: 'dashboard icon',
  },
];

export const sidebarApplications: sidebarTypes[] = [
  {
    icon: Chat,
    appName: 'Chat',
  },
  {
    icon: NoteStackWhite,
    appName: 'Products',
  },
  {
    icon: Group,
    appName: 'Users',
  },
  {
    icon: Settings,
    appName: 'Settings',
  },
];

export const sidebarPages: sidebarTypes[] = [
  {
    icon: Library,
    appName: 'Resolution hub',
  },
  {
    icon: Task,
    appName: 'Businesses',
  },
  {
    icon: RssFeed,
    appName: 'Aborted Project',
  },
];
