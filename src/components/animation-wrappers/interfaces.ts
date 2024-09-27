export interface AnimationWrapperProps {
  children: React.ReactNode;
  isInView?: boolean;
  delay?: number;
  duration?: number;
  amount?: number;
}

export interface ScrollIntoViewProps extends AnimationWrapperProps {
  scrollAmount?: number;
  className?: string;
  fade?: boolean;
  backgroundColor?: string;
}
