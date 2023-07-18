import React, { useEffect, useState } from 'react'

import logo from './logo.svg';
import './App.css';
import { Switch,Route } from 'react-router-dom';
import Mosque_request_management from './components/Mosque_request_management';
import Email from './components/Email';
import Email_detail from './components/Email_detail';
import Compose_email from './components/Compose_email';
import Blood_request_management from './components/Blood_request_management';
import Index from './components/Index';
import Footer from './components/Footer';
import Header from './components/Header';
import Mosque from './components/Mosque';
import Needy_people from './components/Needy_people';
import Login from './components/Login';
import Register from './components/Register';
import Forgot_password from './components/Forgot_password';
import Error from './components/Error';
import Fund_donation_needy from './userComponents/Fund_donation_needy';
import Fund_donation_mosque from './userComponents/Fund_donation_mosque';
import User_blood_request from './userComponents/User_blood_request';
import Mosque_request from './userComponents/Mosque_request';
import UserLogin from './userComponents/UserLogin';
import User_email from './userComponents/User_email';
import User_email_detail from './userComponents/User_email_detail';
import User_compose_email from './userComponents/User_compose_email';
import UserRegister from './userComponents/UserRegister';
import User_header from './userComponents/User_header';
import Userindex from './userComponents/Userindex';
import Quranepak from './userComponents/Quranepak';
import Memberindex from './Membercomponent/Memberindex';
import Member_donation_needy from './Membercomponent/Member_donation_needy';
import Member_donation_mosque from './Membercomponent/Member_donation_mosque';
import Mosque_maintinance_request from './Membercomponent/Mosque_maintinance_request';
import Member_email from './Membercomponent/Member_email';
import Member_email_detail from './Membercomponent/Member_email_detail';
import Member_compose_email from './Membercomponent/Member_compose_email';
import Hijricalender from './userComponents/Hijricalender';
import Location from './userComponents/Location';
import Front from './userComponents/Front';
import Adminmessage from './components/Adminmessage';
import LoginPage from './userComponents/LoginPage';
import Chatt from './components/Chatt';
import Message from './userComponents/Message';
import Requesthistory from './userComponents/Requesthistory';
import Donateblood from './userComponents/Donateblood';
import Donationhistory from './userComponents/Donationhistory';
import Bloodrequests from './components/Bloodrequests';
import Blooddonations from './components/Blooddonations';
import Memberblooddonation from './Membercomponent/Memberblooddonation';
import Memberbloodrequest from './Membercomponent/Memberbloodrequest';
import Memberrequesthistory from './Membercomponent/Memberrequesthistory';
import Memberdonatehistory from './Membercomponent/Memberdonatehistory';
import Mosquerequesthistory from './userComponents/Mosquerequesthistory';
import Membermosquerequest from './Membercomponent/Membermosquerequest';
import Membermosquehistory from './Membercomponent/Membermosquehistory';
import Maintinancehistory from './Membercomponent/Maintinancehistory';
import Mosquemaintinancemanagement from './components/Mosquemaintinancemanagement';
import About from './userComponents/About';
import Prayer from './userComponents/Prayer';
import QiblaDirection from './userComponents/QiblaDirection';
import QuranReader from './userComponents/QuranReader';
import Map from './Membercomponent/Map';
import Chatuser from './components/Chatuser';
import Chat from './components/Chat/Chat';
import Join from './components/Join/Join';
import MemberLogin from './Membercomponent/MemberLogin';
import MemberRegister from './Membercomponent/MemberRegister';
import ApprovalButton from './components/ApprovalButton';
import Fbrmosque from './FBRcomponent/Fbrmosque';
import Fbrneedy from './FBRcomponent/Fbrneedy';
import Needyhistory from './userComponents/Needyhistory';
import Fundmosquehistory from './userComponents/Fundmosquehistory';
import Memberneedyhistory from './Membercomponent/Memberneedyhistory';
import Membermosquefundhistory from './Membercomponent/Membermosquefundhistory';
import Myrequesthistory from './Membercomponent/Myrequesthistory';
import Mydonatehistory from './Membercomponent/Mydonatehistory';
import Mybloodrequest from './userComponents/Mybloodrequest';
import Myblooddonate from './userComponents/Myblooddonate';
import Usermaintinancerequest from './userComponents/Usermaintinancerequest';
import Usermaintinancehistory from './userComponents/Usermaintinancehistory';
import Membermosquefund from './components/Membermosquefund';
import Memberneedyfund from './components/Memberneedyfund';
import Memberblooddonations from './components/Memberblooddonations';
import Memberbloodrequests from './components/Memberbloodrequests';
import Membermosquerequests from './components/Membermosquerequests';
import Membermaintinancerequests from './components/Membermaintinancerequests';
import Fbrlogin from './FBRcomponent/Fbrlogin';
import Addmosque from './components/Addmosque';
import Fbrmembermosquefund from './FBRcomponent/Fbrmembermosquefund';
import Fbrmemberneedyfund from './FBRcomponent/Fbrmemberneedyfund';
// import usermessage from './userComponents/Usermessage';
// import Usermessage from './userComponents/Usermessage';
// import Message from './userComponents/Message';
// import Front from './userComponents/Front';

function App() {

  
 

  

  
  return (
    <div className="App">
      <Switch>
        {/* Admin Routes */}
       
        <Route exact path='/admin' component={Index} />
        <Route exact path='/admin/mosque-request' component={Mosque_request_management} />
        <Route exact path='/admin/mosque-maintinance' component={Mosquemaintinancemanagement} />
        <Route exact path='/admin/mosque' component={Mosque} />
        <Route exact path='/admin/needypeople' component={Needy_people} />
        <Route exact path='/admin/email' component={Email} />
        <Route exact path='/admin/email-detail' component={Email_detail} />
        <Route exact path='/admin/compose-email' component={Compose_email} />
        <Route exact path='/admin/login' component={Login} />
        <Route exact path='/admin/register' component={Register} />
        <Route exact path='/admin/forgot-password' component={Forgot_password} />
        {/* <Route exact path='/admin/chatadmin' component={Adminmessage} /> */}
        {/* <Route path="/admin/chatuser" exact component={Join} />
        <Route path="/admin/chat" component={Chat} /> */}
        {/* <Route exact path='/admin/chatuser' component={Chatuser} /> */}
        <Route exact path='/admin/blood-request' component={Bloodrequests} />
        <Route exact path='/admin/blood-donate'  component={Blooddonations} />
        <Route exact path='/admin/member/mosque'  component={Membermosquefund} />
        <Route exact path='/admin/member/needypeople'  component={Memberneedyfund} />
        <Route exact path='/admin/member/blood-donate'  component={Memberblooddonations} />
        <Route exact path='/admin/member/blood-request'  component={Memberbloodrequests} />
        <Route exact path='/admin/member/mosque-request' component={Membermosquerequests} />
        <Route exact path='/admin/member/mosque-maintinance' component={Membermaintinancerequests} />
        <Route exact path='/admin/addmosque' component={Addmosque} />
        <Route exact path='/admin/chat' component={<Chatt/>} />

        
       
        
        {/* User Routes */}
        <Route exact path='/user' component={Userindex} />
        <Route exact path='/user/login' component={UserLogin} />
        <Route exact path='/user/needypeople' component={Fund_donation_needy} />
        <Route exact path='/user/mosque' component={Fund_donation_mosque} />
        <Route exact path='/user/blood-request' component={User_blood_request} />
        <Route exact path='/user/mosque-request' component={Mosque_request} />
        <Route exact path='/user/email' component={User_email} />
        <Route exact path='/user/email-detail' component={User_email_detail} />
        <Route exact path='/user/compose-email' component={User_compose_email} />
        <Route exact path='/user/register' component={UserRegister} />
        {/* <Route exact path='/user/quranepak' component={Quranepak} /> */}
        {/* <Route exact path='/user/hijricalender' component={Hijricalender} /> */}
        <Route exact path='/user/location' component={Location} />
        <Route exact path='/user/loginpage' component={LoginPage} />
        <Route exact path='/user/chat' component={Message} />
        <Route exact path='/user/blood-request-history' component={Requesthistory} />
        <Route exact path='/user/blood-donate' component={Donateblood} />
        <Route exact path='/user/blood-donate-history' component={Donationhistory} />
        <Route exact path='/user/mosque-request-history' component={Mosquerequesthistory} />
        <Route exact path='/user/needy-history' component={Needyhistory} />
        <Route exact path='/user/mosque-history' component={Fundmosquehistory} />
        <Route exact path='/user/mybloodrequest' component={Mybloodrequest} />
        <Route exact path='/user/myblooddonate' component={Myblooddonate} />
        <Route exact path='/user/mosque-maintinance' component={Usermaintinancerequest} />
        <Route exact path='/user/maintinance-history' component={Usermaintinancehistory} />



        {/* <Route exact path='/user/chatuser' component={Message} /> */}
        {/* <Route exact path='/' component={Front} />
        <Route exact path='/user/about' component={About} />
        <Route exact path='/user/prayer' component={Prayer} />
        <Route exact path='/user/qibla' component={QiblaDirection} />
        <Route exact path='/user/quran' component={QuranReader} /> */}


        {/* Member routes */}


        <Route exact path='/member' component={Memberindex} />
        <Route exact path='/member/map' component={Map} />
        <Route exact path='/member/login' component={MemberLogin} />
        <Route exact path='/member/needypeople' component={Member_donation_needy} />
        <Route exact path='/member/mosque' component={Member_donation_mosque} />
        {/* <Route exact path='/user/blood-request' component={User_blood_request} /> */}
        <Route exact path='/member/mosque-maintinance' component={Mosque_maintinance_request} />
        <Route exact path='/member/maintinance-history' component={Maintinancehistory} />
        <Route exact path='/member/email' component={Member_email} />
        <Route exact path='/member/email-detail' component={Member_email_detail} />
        <Route exact path='/member/compose-email' component={Member_compose_email} />
        <Route exact path='/member/register' component={MemberRegister} />
        <Route exact path='/member/blood-donate' component={Memberblooddonation} />
        <Route exact path='/member/blood-request' component={Memberbloodrequest} />
        <Route exact path='/member/blood-request-history' component={Memberrequesthistory} />
        <Route exact path='/member/blood-donate-history' component={Memberdonatehistory} />
        <Route exact path='/member/newmosque-request' component={Membermosquerequest} />
        <Route exact path='/member/newmosque-history' component={Membermosquehistory} />
        <Route exact path='/admin/btn' component={ApprovalButton} />
        <Route exact path='/member/needyhistory' component={Memberneedyhistory} />
        <Route exact path='/member/mosquehistory' component={Membermosquefundhistory} />
        <Route exact path='/member/mybloodrequest' component={Myrequesthistory} />
        <Route exact path='/member/myblooddonate' component={Mydonatehistory} />


        {/* FBR */}

        <Route exact path='/fbr/mosque' component={Fbrmosque} />
        <Route exact path='/fbr/needypeople' component={Fbrneedy} />
        <Route exact path='/fbr/login' component={Fbrlogin} />
        <Route exact path='/fbr/member/mosque' component={Fbrmembermosquefund} />
        <Route exact path='/fbr/member/needypeople' component={Fbrmemberneedyfund} />

        {/* Error Pages */}
        <Route component={Error} />
      </Switch>
      
    </div>
  );
}

export default App;
