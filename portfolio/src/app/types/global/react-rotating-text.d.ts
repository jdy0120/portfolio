declare module "react-rotating-text" {
  interface ReactRotatingTextProps {
    items: string[];
    [key: string]: any;
  }

  const ReactRotatingText: React.FC<ReactRotatingTextProps>;
  export default ReactRotatingText;
}
