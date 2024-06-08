import React from 'react';
import './Rectangle.css'; // Importing the CSS file
import cheeseburger from './Cheeseburger.png';
import toffee from './Group 30.png';
import star from './Star 2.png';
import arrow from './Group 1.png';
import barrow from './black-arrow.png';
import star4 from './Star 4.png';
import starr from './Starr.png';
import group15 from './Group 15.png';
import group16 from './Group 16.png';
import group18 from './Group 18.png';
import circle from './add-circle.png';

// Define the Rectangle component
const Rectangle = () => {
  return (
    <>
     <div className="rectangle"></div>
     
      <div className="rectangle-2">
        <img src={cheeseburger} alt="cheeseburger" className="cheeseburger"/>
        <img src={star} alt="star" className="star-2"/>
       

       
      </div>
      <div className="content-box">
      <h1>EASY WAY TO BANKING</h1>
      </div>
      <div className="content-box1">
        <p>We give you both the foundation and flexibility to build and grow digital capabilities and deliver customer experiences.</p>
      </div>
      <div className="rectangle-1">
        <h1><b>GET STARTED</b></h1>
        <img src={arrow} alt="arrow" className="arrow"/>
      </div>
         <div className="rectangle-5">
        <img src={toffee} alt="toffee" className="group-30"/>

      </div>
      <div className="rectangle-12">
        <img
          src="https://s3-alpha-sig.figma.com/img/491d/83cb/3358d365fa44b93731739392dd07627f?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hpKwL39UBEqHgrtVuihe0XiLFlenPum3A5wwxg6MKRkt-EVFFLlG8piS93SZmhn2BIKVin8SkxTv3GBFBDATyAhUO6~~kFpKGTsA1tcLW2ryFmykx6wMXDM2JyWk4lfhNayRi04a0fnVceA6wbqfXwycrg-GxAVbMfnodqFWnGPWNhGw~IrOPwO1riZ7Z-D3rChTN5C23XAl-0hT3abYiAPGVgDIp8DxFSh38wsyUrfErpMwZvJZ9yB2YCvWMq~9hxIv~9UKT~IvTAjNhOSzukXtZg02veAekopKflD-AcUQ4eTmheTIPo9OaN3NrYXY35m18KK-ZbSEzUi5Xj6lzg__"
          alt="Small Overlay"
          className="overlay-image"
        />
      </div>
      <div className="hero-section">
      {/* This div holds the hero image and extends to rectangle-12 */}
        <div className="hero-wrapper">
          <img
            src="https://s3-alpha-sig.figma.com/img/da43/d4a1/c95f1b5f66cf2c8ab1bd21e32b0c4778?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bv0cboqnNz73y9SP5Lt4NUjh0Cu~-1YVgcJguEkjT9aRttLpOinnVtRuBQgawUn5Og4Ha7Tfqircv2wWiKTSapMTFSPcmojYr2niLrvzxB~gMGbCinJsHJWtyt14o-K9CWfbpf8dp7fmU2PatzTBGm~0CPamI-9IXAK5AkAk9mUp1Yk08~YNRyC4h95gjYGL44skU2dGS~oEEqT6zjXKKpeJ8sDsLIynMX9Wme0cYpTzb4lR13Cs08eSg4hMHrWkoNc~SyN61wjvb0LkLGm83szHT00fpWVNW2YwcrisxszPjiXfkXp4CxS6q0JDdltZPydSWZpVrZbFE9HIeVtSQg__"
            alt="hero"
            className="hero-image"
          />
        </div>

     </div>
     <div className="rectangle-3">
      <p>ALL FEATURES YOU NEED
      IN ONE PLACE</p>
     </div>
     <div className="rectangle-8">
      <img src="https://s3-alpha-sig.figma.com/img/cd0f/0638/9b4bd932dc401ffb247e14f4b79e47b6?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CRcOBNuz9~K1DkUAekmKwAXiX-trY1s8xtM-D7SavVO1~xnphMWnYsW8NSTlHuSsZwZhi8b6Dm~tbuZqE~04BMSDR~oqCpavbg7e64nWixNyhWwAgu3HURd1WqLM6btu29XYmyaL8QMZGujIoIGlYEjb0qrNcHHKTWR4K3DmMe7Kpf3X2jFGZ29sU-xMDTYk-UMr2jpOsKAilSfHKwOWlvfIJ0ShDVRUyBvMgKBiZ5hy3oxS0A8SPfsZe06PTcEFCx3kzMU9AMD3EnxiXuZ9sNVefFOUMvIhDI9fO1WQO-~MIjDy~PWiprki6KoFrPeJS~X1w9LbQmO9ZFm~fE0P~g__" alt="dollar" className="dollar"/>
     </div>
     <div className="rectangle-8a">
     <p>Secure Online Banking</p>
     </div>
     <div className="rectangle-9">
      <img src="https://s3-alpha-sig.figma.com/img/ae8e/c348/40d37c7a4a2097d8481e58a60e48796b?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QruEKCXGZSABQWHGz6wuQXHf5gUjcxPam28wREfMWi5O~iz2T~0h0MK2Ep~EL3OIQLuQdh-I3RiYQ85hnXpZ9AvAFI1ZT3YDUE4R6gDW~qexOc~U4Gix1T97tuaKB5JXCoZM6BCeoDNFHQWKBILyZRd2XHM1xpY-R363YbJrz0nx6VHwm7O9FwDCeugjCdp6a8kZP6ZKTNg-oY3Sj-euJSR2cwMx6D2wPH2PkiPmwpsvOmQNCq3PSLdJ~AbqsxlZMM2GcqQC5LepeeLLMEnePxI7nx63B3iu9xc2byjc50xJ-RGgjdVze-toT0sTjTqlbrZrQKwDAbJt3T~jBNa39A__" alt="cash" className="cash"/>
     </div>
     <div className="rectangle-9a">
     <p>Automatic Bill 
     Payment</p>
     </div>
     <div className="rectangle-7">
      <img src="https://s3-alpha-sig.figma.com/img/5c79/6877/164d06eb863b9b2e891de817c7dede25?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ha7YvycrSh~~BxoA55qZHFmRNATs97TxcHJ0HP9YLxgxuPxRF3a20g71mHfI8j5QZ8M6sRjUUlLxerPIhPsHP0D3s9zIKgrMy~0c51Q0y0eKGkt0KEyfQjxKDTuxBiHKvP0EsXzRvksobySC37AGwHcsu6MEJDEfNNnG7WcChV92v1m9wd3FoDOW0e4gfONYZh6QyIiVZz~ONQ6olh7yzeky3NPfj9vTEXKNvXZ7P~uHQzAu90QL0VfgNABQa~UTWIKReHI6uVhDiZ7eoWOV3oRPNXkhpPYnMHnPirWpNplPwd6MftbRWoofFRe6BLbrBBPCLTLK2UiFqL5PBXUQ2Q__" alt="board" className="board"/>
     </div>
     <div className="rectangle-7a">
      <p>No Hidden <br />
      Fees</p>
     </div>
     <div className="rectangle-6">
      <img src="https://s3-alpha-sig.figma.com/img/7df3/e37e/e8bb46911a537aba30b78f6b97643ef7?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=j~N2ZHDqoKVNz3zrvifWP~db6u0ULYpjXk2Mp5BPUar-SWVZRdRpj1KaSOOgCQ5KlZwqnDoSNPN6U1Pv6lpkaEu6bwkordfPubKKNc74kIBMUigFG-0VSsRlTyoxY-8OUkoAIH-OBUXkO354WZl3xS1RG1IOO7wcpUTXs4BIbmmvfavHU3EKqERA40Yiua9uxoac~v07FGkhvd~VaiGjFLG6P8fZLVmN2rpESHcXo7x0ii0YHw56~0hrE-EisTSM2VXTqVJsfYcM-FdOkaUf9223~aUz-6w32Ronwfah-4gQGWW0~dVL0ZOe52147aA~ruB~MUIGMt0K5rXTthxP9Q__" alt="card" className="card" />
     </div>
     <div className="rectangle-6a">
      <p>Card Payments Anytime</p>
     </div>
     <div className="rectangle-17">
      <img src="https://s3-alpha-sig.figma.com/img/732d/c623/6d53d7a84049b9dae2f9403006d9c070?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lBAyHeuCV8pCqLs9Rqdy5i2y1skWi8FEnft2Brz9SS-6x7tRRzRUx4Jm43Cs8DnumfSdtp6E9ILdFU2ixLG24kaWqe0GvF4wDKD5fPoUvtyozYguDu0LpXbf25oePE5UBTstSuL6W0h-tWc1HlsMiqpnKjolroNvihzduGQcdgwAAW9wCRDbJE-g-uBXUc06BM-uPziGp-RQ1QEyD1wzyMBZPn8a~FeoT~4P66tF0X0-Wvl6ri0Hlsm5OnX~Cv0tprELpIIYe-IvG08SfM0Tp9konHFH0l4AAemcgh7f9LAxiNgAho9sxH1jkyhfImqyp0F0Nc3ZVblesuBhL7h9ew__" alt="home" className="home" />
     </div>
     <div className="rectangle-17a">
      <p><b>GO DIGITAL NOW!</b></p>
     </div>
     <div className="rectangle-17b">
      <p>Our digital platform allows you to access your money from anywhere, anytime. Which our innovative security features, and first-in-class service, we combine the best of traditional banking with a modern convenience of digital banking today</p>
     </div>
     <div className="rectangle-17c">
     <div className="rectangle-17d">
      <p>GET STARTED</p>
     </div>
     <img src={barrow} alt="arrow" className="black-arrow"/>
     </div>
     <div className="rectangle-16">
      <h1>DESIGNED FOR BUSINESSES <br />OF ALL SIZES</h1>
     </div>
     <div className="rectangle-19">
      <img src={star4} alt="star" className="star-4" />
      <img src="https://s3-alpha-sig.figma.com/img/6e28/2a23/56f29ffeabe6c63f11c50a7aa0cb77ae?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PqmAHD5xoyLuLM8iQFSiO3uXPEsCwZb-yaKRu1k8vd72p1ORPsgY4enz2NKM1k62NOvoIaLxe0X6i3Vreear9fapvGEWMSYxX0PmxbVo3Qv9Nbjs~3eMRKYygBYQp2c4OMKyNPceslUpXY16~v-801fXcViON-maso7-vYoTevvuSTK5kYz~WVP1xehGvU9rGaAMnjx5q9k76RVzv8SbF8ubB3LP5rFExgMO5WMfyyEXoKRsKobgeG4T6ZPmJQo1N5Qyx~RP7wWnzdVlrK0uBRcq7Tj1VInfIHS6SY0Q~EntD5mFlXikYkhJN4dQI90n2k6-7cF4~myAPkOnE0QA2A__" alt="don" className="don" />
     </div>
     <div className="rectangle-19a">
      <p>FOR SMALL BUSINESSES</p>
     </div>
     <div className="rectangle-11">
      <img src="https://s3-alpha-sig.figma.com/img/097d/e7b7/82d848d99afe7c7216c916acd54b2393?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IGp8HBvYtkjpXAwwZYVOhFKjVu0eAm80hVHzrqiPjTtcLOSWFI0sltz--VaLjn1gCMmxkDsa1VoF0FWVuZx6RhFJoe5Oben95fmJ83UO9KyAmDRxeScXwgYU6TQX1KGnK0uq7qxAqUc~8uMVttAxCm~ThaG5ewORsb92ONjHitN6pk2BeCbr4vVllvSGHfbklQ8xZGlqgOdrkPuwncEgp7jFt1lw834SluD8z0qF-W-OM1RXeXcZyrBqVqyLheiWz4bnV9zbjWobl2ZazgNgaYTAKUQxeyZse9mHjhgSNb9e6PibmMkZ6hRfr1g4ittv4czMvBUTAk4cjh4NssdU6w__" alt="robber" className="robber" />
     </div>
     <div className="rectangle-11a">
      <p>FOR STARTUPS</p>
     </div>
     <div className="rectangle-10">
      <img src="https://s3-alpha-sig.figma.com/img/1794/bb08/837df834b53727e5698bb10537501d92?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OCbm7FH17EyHOrRVWh68fNJi-r0G8hQPXlof5lJZsaMzcA2Ry1EG4ZsC138Ix5qsA2FUBhzEvv8UqZpF0O1mM5~De0SkcURv-d~J~ZW8LWFkaH2m8ZOnrK9XOKTG-~n7ZrzHGWTx7Mag1dPJBSYxLiYjSMg46ta1L1lUxd2iTlSjrjjXZ3RZ1U76Ekjv6vvC0qM-svtQxkdD8qdJtT5lT3PcT5t5AsyraMPhZyAVifhtg-Ox3tpy6EBUwZkuKDuKSV3H7qscj7zQ~0KAotpK9Sj1oDZiaHRlwDQgUmr~M8NLXF91blQEPxCYr2~FtMyrWAw9To8-CXVYRngg4DIlKA__" alt="thief" className="thief" />

     </div>
     <div className="rectangle-10a">
      <p>FOR ENTERPRISES</p>
     </div>
     <div className="mini-section">
      <img src="https://s3-alpha-sig.figma.com/img/4768/f1b6/745331956e51d5d488748d08f86821ca?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NEFXaTvx6YseqKd9kvkObL417Q5lhsA6RW730Gi7n1Gm5-5hUirzrftUrdtmJznm8Dpfy9Q~pTLUNL6YhNO8fFfksRcvJMv3qZZ-oHtjgGwcBr5DTdIkt9Yw6vmAM5GzJ4ht1iLZCxrQL14AgFFiQDH4zR6NOCBz0ih6yrnYj6Tucj9l0Xmz~qdXDflLPETW8i4N15fclOOP-mLsk1MaMVSML12cF57ZziPvB2ooLVeU-ZbnshPE-KB4WSRoo6UfF0IoiOfb7RwzO9hOggo12kHvot7a0aUOMumcleriiOgQvdFYl1TyObNuuuZlvCZmgihMgQ-~~wnxeFpXHyV0cw__" alt="phone" className="phone" />
     </div>
     <div className="mini-section1">
      <h2>WE TAKE BANKING PERSONALLY</h2>
     </div>
     <div className="mini-section2"></div>
     <div className="mini-section2a">
      <div className="grp1a">
        <h3>SAVE</h3>
      </div>
      <div className="grp1b">
        <p>We’re using technology to solve that by automating saving. You set an amount to save and we takes care of the rest, prompt interest payout included.</p>
      </div>
     </div>
     <div className="mini-section2b">
      <div className="grp2a">
        <h3>SPEND</h3>
      </div>
      <div className="grp2b">
        <p>We give you more than one way to pay easily, including a widely accepted debit card issued in partnership with Visa, quick web payments direct from your account.</p>
      </div>
     </div>
     <div className="mini-section2c">
      <div className="grp3a">
        <h3>SEND</h3>
      </div>
      <div className="grp3b">
        <p>From international transfers to on-the-spot payments at market stalls, we’ve simplified sending money so you don’t need to think too much about it.</p>
      </div>
     </div>
     <div className="testimonials">
     <div className="testimonials1">
      <h3>TRUSTED BY PEOPLE ALL OVER THE WORLD</h3>
     </div>
     <div className="test-rectangle">
      <img src={starr} alt="starr" className="starr" />
      <img src={group18} alt="group18" className="group-18" />
      <div className="rect-1">
        <div className="rect-1a">
          <h4>SUPER USER-FRIENDLY</h4>
        </div>
        <div className="rect-1b">
          <p>The UI is so intuitive that anyone can use it, without any knowledge on the system & I love the financial reports. The tool automatically organizes all data and gives us clarity on spend.</p>
        </div>
        <img src={group15} alt="group15" className="group-15" />
        <img src="https://s3-alpha-sig.figma.com/img/5744/653c/d5778208133de1d43a97b8beacdaad35?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IET~ixUshUFtn-966ICRn1pPRNOmXbwXlxFWaRu-fw~vlcD8bQFJgIcs-IzAzh6RT~bazA2DXMv-RMRwFWkBcAJ9hscv1GF2mhsfjVVJVXm2~KYtwAZXszBf9MPFyWZ52mk2rN3uUBj4wJAlC7RyXXs~AyDxn0Jfezm1QmjiInE1EN4hezts2Bd233B-oZl5-EBsHgXhir9qS4vbWe-P8tVgCVKAjmgCTxyKtws2f6SzcPqmoo5SUfM5uJx67nbK9U8BF8QqKqoX5QMsZ9mOMsNFn360CEy2S3oXc~Q-v1iZ2zzruy9SPIkXnngnLMUFxjFNgVmU8a1pfzW~dpo3MA__" alt="man" className="man" />
      </div>
      <div className="rect-2">
        <div className="rect-2a">
          <h4>SAVED HOURS EVERY WEEK</h4>
        </div>
        <div className="rect-2b">
          <p>I have been saved so much time on tax calculations. And it gives me reliable projections.I love the financial reports. The tool automatically organizes all data and gives us clarity on spend.</p>
        </div>
        <img src="https://s3-alpha-sig.figma.com/img/a199/2e88/9a5031c397ec01c174d1a2dfe00d87ac?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G0b7S6YS07DJtLuoguUdLtFuzLPQyaM7EvjWOw0aazOs~jvwhhFRCR10PP682v8TiRcOw1SYnfzSPyL9ykXRadBw-GnmTngtYEtcv6LBNa9KIbaAGe~-htHJL2X5fps1iwxHkhkaI31ZoR-zq8Qw0l-JQ6buksR0AJv2D7U3-DLF16Y4s9KqNx5d1MHguWbUsTzBu~Gzi5K~M~NKjkBI2mJy4gyvDKyCgPBA5rVa3YSjkBRTD~Hwql44oWdQK5PMt4wasM5sCirIKiHN6Wgx0f4dvHcOfhcgNroOFC5Kd8sDMHRZjYTDXLyGDzAce~GJHac046MqM6UDJ~XkOiByWQ__" alt="woman" className="woman" />
        <img src={group16} alt="group16" className="group-16" />
      </div>
     </div>
     </div>
     <div className="faq">
      <div className="faq-rect">
        <h2>FREQUENTLY ASKED QUESTION</h2>
      </div>
      <div className="faq-1">
        <img src={circle} alt="circle" className="circle" />
        <div className="faq-1a">
          <p>How much would it require to open an account ?</p>
        </div>
      </div>
      <div className="faq-2">
      <img src={circle} alt="circle" className="circle" />
      <div className="faq-2a">
        <p>Is there a minimum operational cost ?</p>
      </div>
      </div>
      <div className="faq-3">
      <img src={circle} alt="circle" className="circle" />
      <div className="faq-3a">
        <p>where can i use my debit cards ?</p>
      </div>
      </div>
      <div className="faq-4">
      <img src={circle} alt="circle" className="circle" />
      <div className="faq-4a">
        <p>how much do i get as interest on savings ?</p>
      </div>
      </div>
     </div>
     <div className="newsletter">
      <div className="letter1">
        <h1>SUBSCRIBE TO OUR NEWSLETTER FOR A 10% BONUS
        ON TRANSACTIONS</h1>
      </div>
      <div className="letter2">
      <div className="letter3">
      <p>Your email address</p>
      </div>
      <div className="letter4">
        <div className="letter5"> <h5>SUBSCRIBE</h5></div>
      </div>
      </div>
      <img src={star} alt="star" className="moon" />
     
     </div>
     
    
    </>
  
    
  );
};

export default Rectangle;

