export interface BoxProps {
  header?: string;
  headerButtons?: React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode;
  onClick?: ()=> void;
}
