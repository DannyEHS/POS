import { ReactNode, useState } from 'react';

interface ToolTipProps {
    text: string;
    children: ReactNode;

}

const Tooltip = ({ text, children } : ToolTipProps) => {
  const [tooltipVisible, setTooltipVisible] = useState(false);

  const handleMouseEnter = () => {
    setTooltipVisible(true);
  };

  const handleMouseLeave = () => {
    setTooltipVisible(false);
  };

  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="cursor-pointer"
      >
        {children}
      </div>
      {tooltipVisible && (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 bg-white border border-gray-300 p-2 rounded shadow-md">
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
