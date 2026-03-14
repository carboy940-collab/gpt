export interface Avatar {
  userId: string;
  skinTone: 'light' | 'medium' | 'deep';
  hairStyle: 'short' | 'curly' | 'braids';
  outfit: 'hoodie' | 'blazer' | 'street';
  accessory: 'none' | 'glasses' | 'headphones';
}
