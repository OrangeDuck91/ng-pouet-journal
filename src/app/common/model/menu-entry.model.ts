export class MenuEntry {
  title: string;
  route: string;
  isOpened?: boolean;
  subMenu?: MenuEntry[];
}
