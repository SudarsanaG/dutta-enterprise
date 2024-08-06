import { useState } from 'react';

interface AccordionItemProps {
  title: string;
  content: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`accordionItem ${isOpen ? 'active' : ''}`} onClick={toggleAccordion}>
      <div>{title}</div>
      <div className={`accordionContent ${isOpen ? 'show' : ''}`}>{content}</div>
    </div>
  );
};

export default AccordionItem;
