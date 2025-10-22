export enum EditMode {
  Generate = 'GENERATE',
  RemoveBackground = 'REMOVE_BACKGROUND',
  // Enhance = 'ENHANCE', // This is now handled by the QualityEnhancer component
  Replace = 'REPLACE',
}

export enum Page {
  Editor = 'EDITOR',
  About = 'ABOUT',
  Contact = 'CONTACT',
  Privacy = 'PRIVACY',
}

export interface ImageAdjustments {
  brightness: number;
  contrast: number;
  saturation: number;
}

export interface SessionData {
  activeMode: EditMode;
  prompt: string;
  originalImageBase64: string | null;
  originalImageMimeType: string | null;
  editedImageBase64: string | null;
  adjustments: ImageAdjustments;
}