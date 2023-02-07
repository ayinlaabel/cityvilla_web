import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch } from 'react-redux';
import Jombotron from '../../components/jombotron/Jombotron';
import coverImage from '../../components/images/bg_contact.jpg';
import { active } from '../../redux/navbarSlice';
import './gallery.scss';
import { galleryImage } from '../../data/images';
import { useState } from 'react';
import {
  ClosePreview,
  Container,
  DisplayImageContainer,
  Preview,
  PreviewButtonBack,
  PreviewButtonFront,
} from '../../components/displayImage/display';

function Gallery() {
  const dispatch = useDispatch();
  const [isActive, setIsActive] = useState('');
  const [isDisplay, setIsDisplay] = useState(false);
  const [imgIndex, setImgIndex] = useState();

  const navbar = {
    home: '',
    about: '',
    project: '',
    contact: '',
    gallery: 'active',
    blog: '',
  };

  useEffect(() => {
    dispatch(active(navbar));
  });

  const data = {
    pageTitle: 'Gallery',
    pageSubTitle: '',
    pageImage: coverImage,
  };
  return (
    <>
      <div>
        <Helmet>
          <title>Gallery - City Villa Real Estate</title>
        </Helmet>
        <Jombotron data={data} />
        <div className='tabs-container'>
          <div className='tabs'>
            <div
              className={isActive === '' ? 'tabs-item active' : 'tabs-item'}
              onClick={() => setIsActive('')}
            >
              All
            </div>
            <div
              className={
                isActive === 'ongoing' ? 'tabs-item active' : 'tabs-item'
              }
              onClick={() => setIsActive('ongoing')}
            >
              Ongoing
            </div>
            <div
              className={
                isActive === 'prototype' ? 'tabs-item active' : 'tabs-item'
              }
              onClick={() => setIsActive('prototype')}
            >
              Prototype
            </div>
            <div
              className={
                isActive === 'complete' ? 'tabs-item active' : 'tabs-item'
              }
              onClick={() => setIsActive('complete')}
            >
              Complete
            </div>
          </div>
        </div>
        <div className='gallery'>
          {galleryImage
            .filter((x) => x.tag.toLowerCase().includes(isActive.toLowerCase()))
            .map((image, index) => {
              return (
                <div
                  className='gallery__card'
                  key={image.id}
                  onClick={() => {
                    console.log(index);
                    setIsDisplay(true);
                    setImgIndex(index);
                  }}
                >
                  <img src={process.env.PUBLIC_URL + image.url} alt='' />
                </div>
              );
            })}
        </div>
      </div>
      {isDisplay && (
        <DisplayImageContainer>
          <Container>
            {galleryImage
              .filter((x, index) => index === imgIndex)
              .map((img, i) => {
                return (
                  <Preview>
                    <ClosePreview onClick={() => setIsDisplay(false)}>
                      <p>x</p>
                    </ClosePreview>
                    {imgIndex !== 0 && (
                      <PreviewButtonBack
                        onClick={() => setImgIndex(imgIndex - 1)}
                      >
                        <i class='fas fa-circle-left'></i>
                      </PreviewButtonBack>
                    )}
                    {imgIndex !== galleryImage.length - 1 && (
                      <PreviewButtonFront
                        onClick={() => setImgIndex(imgIndex + 1)}
                      >
                        <i class='fas fa-circle-right'></i>
                      </PreviewButtonFront>
                    )}
                    <img src={process.env.PUBLIC_URL + img.url} alt='' />
                  </Preview>
                );
              })}
          </Container>
        </DisplayImageContainer>
      )}
    </>
  );
}

export default Gallery;
