import React, { ReactNode } from "react";
interface ContentCardProps {
  className?: string;
  children: ReactNode;
}

const ContentCard = ({ className, children }: ContentCardProps) => {
  return (
    <div
      className={`overflow-hidden relative flex  flex-col h-[400px] ${className} mx-auto  w-full lg:max-w-[950px] xl:max-w-[1140px] 2xl:max-w-[1280px] rounded-[20px] lg:p-[60px] 2xl:p-[80px]`}
    >
      {children}
    </div>
  );
};
export default ContentCard;
