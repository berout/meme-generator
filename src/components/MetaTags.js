import React, { useEffect } from 'react';

const MetaTags = () => {
  useEffect(() => {
    document.title = 'Meme generator';

    const descriptionMeta = document.createElement('meta');
    descriptionMeta.name = 'description';
    descriptionMeta.content = 'Your brand new meme generator';
    document.head.appendChild(descriptionMeta);

    const keywordsMeta = document.createElement('meta');
    keywordsMeta.name = 'keywords';
    keywordsMeta.content = 'react, meme, generator, fun, smile, funny';
    document.head.appendChild(keywordsMeta);

    const viewportMeta = document.createElement('meta');
    viewportMeta.name = 'viewport';
    viewportMeta.content = 'width=device-width, initial-scale=0.7, shrink-to-fit=yes';
    document.head.appendChild(viewportMeta);

    return () => {
      document.head.removeChild(descriptionMeta);
      document.head.removeChild(keywordsMeta);
      document.head.removeChild(viewportMeta);
    };
  }, []);

  return (
    <div>
      
    </div>
  );
};

export default MetaTags;