import React from 'react';

const Downlode = () => {
  const handleDownload1 = () => {
    const resumePath = 'Prasanth_Resume.pdf';
    
    const link = document.createElement('a');
    link.href = resumePath;
    link.download = 'Prasanth_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (                

    <button onClick={handleDownload1} className='downlodebutton' classname='hover'  >
       <span className='arrow'>DOWNLOAD</span>
    </button>
   
    
  );
};

export default Downlode;