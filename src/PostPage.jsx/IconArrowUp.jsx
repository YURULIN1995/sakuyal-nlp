/**
 * 向上箭頭圖示元件 (基於 Tabler Icons)
 * @param {object} props - 元件 props
 * @param {string} [props.className] - 自訂 CSS class
 * @param {string} [props.stroke] - SVG 線條顏色，預設為 'currentColor'
 * @param {number} [props.strokeWidth] - SVG 線條寬度，預設為 2
 */
function IconArrowUp({ className = '', stroke = 'currentColor', strokeWidth = 2 }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      strokeWidth={strokeWidth} 
      stroke={stroke} 
      fill="none" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      className={className}
    >
       <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
       <path d="M12 5l0 14"></path>
       <path d="M18 11l-6 -6l-6 6"></path>
    </svg>
  );
}

export default IconArrowUp;
