import React from 'react';
import { useApp } from '../App';
import { MapPinIcon, VideoIcon, ExternalLinkIcon } from './Icons';

const Lifestyle: React.FC = () => {
  const { t } = useApp();

  const MOMENTS = [
    {
      id: 0,
      title: t('lifestyle.card.nio.title'),
      location: t('lifestyle.card.nio.loc'),
      image: 'https://img.remit.ee/api/file/BQACAgUAAyEGAASHRsPbAAEL0VBpLS7KdbSOhe6mzjJczmtoa8L-0QACqCAAAtXsaVXrJJrFIFUEODYE.jpg', // NIO ET5T
      type: 'photo',
      link: 'https://app.nio.com/skt/public/page/42d9db7b-c8b4-49e7-af91-841fcf777f70/7ad3cc73adc7a8a234b973642c7b7d63?pageSource=https%3A%2F%2Fapp.nio.com%2Fapp%2Fcommunity_content_h5%2Fmodule_10050%2Fshare_comment%3Fid%3D5108117%26type%3Dessay%26is_nav_show%3Dfalse%26wv%3Dlg%26campion_code%3DK7umQmpk%26isHideInnerBtn%3Dtrue%26share_account_id%3D373505001%26refer_page%3D%2525E5%252588%252586%2525E4%2525BA%2525AB%2525E6%2525B5%2525B7%2525E6%25258A%2525A5%26rippleId%3D4dU9BwHex%26share_name_b%3DJUU1JTlEJUE0JUU2JUExJTkx&openUrl=https%3A%2F%2Fapp.nio.com%2Fapp%2Fcommunity_content_h5%2Fmodule_10050%2Fshare_comment%3Fid%3D5108117%26type%3Dessay%26is_nav_show%3Dfalse%26wv%3Dlg%26campion_code%3DK7umQmpk%26isHideInnerBtn%3Dtrue%26share_account_id%3D373505001%26refer_page%3D%2525E5%252588%252586%2525E4%2525BA%2525AB%2525E6%2525B5%2525B7%2525E6%25258A%2525A5%26rippleId%3D4dU9BwHex%26share_name_b%3DJUU1JTlEJUE0JUU2JUExJTkx&resourceType=essay&shareId=301c68dd7842517b6eb9e2bc84526d851764568464878&wv=lg&isHideInnerBtn=true'
    },
    {
      id: 2,
      title: t('lifestyle.card.camping.title'),
      location: t('lifestyle.card.camping.loc'),
      image: 'https://img.remit.ee/api/file/BQACAgUAAyEGAASHRsPbAAEL0U9pLS7KLmrQjPv-bexKWcn0XRKBJwACpyAAAtXsaVUKtEoBN_HuCTYE.jpg', // Camping
      type: 'photo'
    },
    {
      id: 3,
      title: t('lifestyle.card.jp1.title'),
      location: t('lifestyle.card.jp1.loc'),
      image: 'https://img.remit.ee/api/file/BQACAgUAAyEGAASHRsPbAAEL0bJpLTGqiQvaO6XmA9ZGTsjcrYDxAAMOIQAC1expVRJXmARg2hHhNgQ.jpg', // Japan 1 (Tokyo/Kyoto)
      type: 'photo'
    },
    {
      id: 4,
      title: t('lifestyle.card.jp2.title'),
      location: t('lifestyle.card.jp2.loc'),
      image: 'https://img.remit.ee/api/file/BQACAgUAAyEGAASHRsPbAAEL0bNpLTGqCHpgk6aXcq2tPuD3FKOthAACDyEAAtXsaVVxjPibTpjhUDYE.jpg', // Japan 2 (Fuji/Osaka)
      type: 'photo'
    }
  ];

  return (
    <section id="life" className="py-24 px-6 bg-background relative border-t border-surface/50">
      <div className="max-w-7xl mx-auto mb-12 flex flex-col md:flex-row justify-between items-end">
        <div>
           <h2 className="text-3xl md:text-4xl font-bold text-textMain mb-3">{t('lifestyle.title')}</h2>
           <p className="text-textMuted text-lg">{t('lifestyle.subtitle')}</p>
        </div>
      </div>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {MOMENTS.map((item) => {
          const Wrapper = item.link ? 'a' : 'div';
          const wrapperProps = item.link ? {
             href: item.link,
             target: "_blank",
             rel: "noopener noreferrer"
          } : {};

          return (
            <Wrapper 
              key={item.id} 
              {...wrapperProps}
              className="group relative h-[400px] w-full rounded-2xl overflow-hidden border border-textMain/5 bg-surface shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
            >
              {/* Image */}
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

              {/* Link Icon Indicator */}
              {item.link && (
                <div className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-md rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <ExternalLinkIcon className="w-4 h-4" />
                </div>
              )}

              {/* Content */}
              <div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                {item.type === 'video' && (
                  <div className="mb-3 inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/30">
                    <VideoIcon className="w-4 h-4" />
                  </div>
                )}
                
                <h3 className="text-xl font-bold text-white mb-1.5">{item.title}</h3>
                
                <div className="flex items-center gap-1.5 text-xs font-medium text-slate-300">
                  <MapPinIcon className="w-3.5 h-3.5 text-primary" />
                  {item.location}
                </div>
              </div>
            </Wrapper>
          );
        })}
      </div>
    </section>
  );
};

export default Lifestyle;