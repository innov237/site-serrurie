import React, { useState } from 'react';
import './hero.css';

export default function Hero(_props: any) {

   

    return (
     <>
        <div className="headerimg">
        <div className="bgp"></div>
        <div className="headerTitle">
          <h1>
            <span className="customeTitle">{_props.subTitle}</span> {_props.title}
          </h1>
        </div>
      </div>
     </>

    );

};

