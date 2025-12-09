export interface TourStep {
  id: string;
  title: string;
  description: string;
  target_selector: string;
  placement: 'top' | 'bottom' | 'left' | 'right';
}

export interface TourConfig {
  id: string;
  steps: TourStep[];
  showBackdrop?: boolean;
  backdropDismiss?: boolean;
  onComplete?: () => void;
  onSkip?: () => void;
}

export interface TourComponentProps {
  steps: TourStep[];
  globalTourId: string;
  showBackdrop?: boolean;
  backdropDismiss?: boolean;
  onComplete?: () => void;
  onSkip?: () => void;
}

export type PlacementType = 'top' | 'bottom' | 'left' | 'right';
