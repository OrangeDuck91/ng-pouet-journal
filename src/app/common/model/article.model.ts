/**
 * Class representing an article
 */
export class Article {
  /** Article ID */
  public id: number;
  /** Article title */
  public title: string;
  /** Introduction */
  public intro: string;
  /** Article main text */
  public text: string;
  /** Article picture */
  public picture: string;
  /** Article Picture description */
  public pictureDescription: string;
  /** Tags for the article */
  public tags: string[];
}
