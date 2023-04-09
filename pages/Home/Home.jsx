import React from 'react';
import './Style.scss';
import { NavLink } from 'react-router-dom';
import Slider from './components/Slider/Slider';
import one from '../../img/1.png';
import two from '../../img/3.png';
import three from '../../img/4.png';
import four from '../../img/5.png';
import five from '../../img/6.png';
import iOne from '../../img/iconsFooter/1.png';
import iTwo from '../../img/iconsFooter/2.png';
import iThree from '../../img/iconsFooter/3.png';
import iFour from '../../img/iconsFooter/4.png';
import iFive from '../../img/iconsFooter/5.png';
import iSix from '../../img/iconsFooter/6.png';
import Lists from './components/Lists/Lists';

export default function Home() {
  return (
    <div className='containerHome'>
      <div className='navbar'>
        <p className='textHeader'>
          HelloUI
        </p>
        <div className='navbarLinkItem'>
          <p>
            Docs
          </p>
          <p>
            Tools
          </p>
          <p>
            Freatures
          </p>
          <p>
            Pricing
          </p>
          <p>
            Jobs
          </p>
        </div>
        <div className='btnAndSignItem'>
          <p className='textSignIn'>
            Sign in
          </p>
          <button
            className='btnTryForFree'
          >
            Try for Free
          </button>
        </div>
      </div>
      <div className='item1'>
        <h1 className='textGenHeader'>
          Grow up your sells
          with us.
        </h1>
        <p className='textBuildOne'>
          Build one project that runs natively on all your term now
          users' devices to turn for that you can do.
        </p>
        <div className='linksFreeAndVidio'>
          <NavLink
            className={
              (navData) => navData.isActive ? "activeLinkOne" : "linkFree"
            }
            to={'/'}
          >
            Try for Free
          </NavLink>
          <NavLink
            className={
              (navData) => navData.isActive ? "activeLinkOne" : "linkFree"
            }
            to={'/example'}
          >
            Discover in Video
          </NavLink>
        </div>
        <div>
          <img
            src={one}
            className='imgOne'
          />
        </div>
        <div>
          <p className='textMillion'>
            More than 1.8 million people across 50,000 companies choose Spellon
          </p>
        </div>
        <div className='divSlide'>
          <Slider />
        </div>
        <hr className='lineOne' />
        <p className='textAwardWinning'>
          Award-winning logistics services.Powered by
          technology, delivered by experts..
        </p>
        <p className='textBusinesses'>
          Businesses are leaving money on the
          table every day due to missed supply
          chain opportunities. Zencargo unlocks
          your potential with digital freight forwarding
          that drives cost savings and revenue improvements
          for your business.
        </p>
        <button className='btnSee'>
          <div className='blockBtnSee'>
            <img
              className='imgSee'
              src={two}
            />
            <p className='textSee'>
              See How Spellon Work
            </p>
          </div>
        </button>
      </div>
      <div className='item2'>
        <div className='stringOneItemOne'>
          <p className='headerTextString'>
            Develop
          </p>
          <p className='descriptionTextString'>
            Develop for all your users' devices
            with just one codebase. Add fast refresh,
            true native capabilities, and your
            creativity, and you'll have the app your
            users want in no time.
          </p>
          <NavLink
            className='linkTextString'
            to={'/'}
          >
            Learn more about spellon
          </NavLink>
        </div>
        <div className='stringTwoItemTwo'>
          <img
            src={three}
            className='imgStringItemTwoOne'
          />
        </div>
      </div>
      <div className='item3'>
        <div className='stringOneItemOne'>
          <img
            src={four}
            className='imgStringItemTwoOne'
          />
        </div>
        <div className='stringTwoItemTwo'>
          <p className='headerTextString'>
            Build
          </p>
          <p className='descriptionTextString'>
            Develop for all your users' devices
            with just one codebase. Add fast refresh,
            true native capabilities, and your
            creativity, and you'll have the app your
            users want in no time.
          </p>
          <NavLink
            className='linkTextString'
            to={'/'}
          >
            Learn more about spellon
          </NavLink>
        </div>
      </div>
      <div className='item4'>
        <div className='stringOneItemOne'>
          <p className='headerTextString'>
            Update
          </p>
          <p className='descriptionTextString'>
            Develop for all your users' devices
            with just one codebase. Add fast refresh,
            true native capabilities, and your
            creativity, and you'll have the app your
            users want in no time.
          </p>
          <NavLink
            className='linkTextString'
            to={'/'}
          >
            Learn more about spellon
          </NavLink>
        </div>
        <div className='stringTwoItemTwo'>
          <img
            src={five}
            className='imgStringItemTwoOne'
          />
        </div>
      </div>
      <div className='item5'>
        <p className='textItem5One'>
          Over 2000 businesses, marketers and creatives use Suparise to grow their Instagram.
        </p>
        <p className='textItem5Two'>
          Don’t just take our word for it
        </p>
        <div className='cards'>
          <Lists />
        </div>
      </div>
      <div className='item6'>
        <p className='headerFooter'>
          It’s easy to  get
          started. Start now.
        </p>
        <div className='inputBlock'>
          <input
            className='inpOne'
            placeholder='Enter your email'
          />
          <button
            className='btnInpOne'
          >
            Get Started
          </button>
        </div>
        <img
          className='oneI'
          src={iOne}
        />
        <img
          className='twoI'
          src={iTwo}
        />
        <img
          className='threeI'
          src={iThree}
        />
        <img
          className='fourI'
          src={iFour}
        />
        <img
          className='fiveI'
          src={iFive}
        />
        <div className='itemFooterTexts'>
          <div className='textsOne'>
            <p className='spelonText'>
              Spellon.
            </p>
            <p className='textInt'>
              Nort West, South New Work,United State
            </p>
            <p className='textIntU'>
              +1 246-254-0569
            </p>
            <p className='textIntU'>
              Info@example.com
            </p>
            <img
              className='iSix'
              src={iSix}
            />
          </div>
          <div className='textsTwo'>
            <p className='spelonText'>
              Resources
            </p>
            <p className='textInt'>
              Docs
            </p>
            <p className='textIntU'>
              Forums
            </p>
            <p className='textIntU'>
              Jobs
            </p>
            <p className='textIntU'>
              Join Discord
            </p>
            <p className='textIntU'>
              Consultants
            </p>
          </div>

          <div className='textsThree'>
            <p className='spelonText'>
              Company
            </p>
            <p className='textInt'>
              About Us
            </p>
            <p className='textIntU'>
              Careers
            </p>
            <p className='textIntU'>
              Block Chain
            </p>
            <p className='textIntU'>
              Privacy Policy
            </p>
            <p className='textIntU'>
              Terms & Condition
            </p>
          </div>
          <div className='textsFour'>
            <p className='spelonText'>
              Legal
            </p>
            <p className='textInt'>
              Terms of use
            </p>
            <p className='textIntU'>
              Privacy Policy
            </p>
            <p className='textIntU'>
              GDPR/CCPA explained
            </p>
            <p className='textIntU'>
              Guidlines
            </p>
          </div>
        </div>
        <div className='footerLast'>
          <p className='textFooterLast'>
            2021 Hello All right reserved.
          </p>
        </div>
      </div>
    </div>
  )
}
