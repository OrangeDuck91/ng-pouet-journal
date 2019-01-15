/**
 * Class representing a Menu entry
 */
export class MenuEntry {
  /** Title */
  public title: string;
  /** route to navigate to */
  public route: string;
  /** Flag is opened */
  public isOpened?: boolean;
  /** Sub-meu list */
  public subMenu?: MenuEntry[];
}
