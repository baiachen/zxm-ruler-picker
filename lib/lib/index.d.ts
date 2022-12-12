/// <reference types="react" />
import "./index.css";
type IProps = {
    minScale: number;
    maxScale: number;
    initScale: number;
    onChange: any;
};
export default function Index({ minScale, maxScale, initScale, onChange, }: IProps): JSX.Element;
export {};
