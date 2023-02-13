export class Food {
  // The ! signifies this field is required.
  id!: string;
  name!: string;
  desc!: string;
  price!: number;
  // The ? signifies this field is optional.
  tags?: string[];
  imageUrl!: string;
}
