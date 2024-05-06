import { RouteComponentProps } from 'react-router';
import React, { useRef, useState } from 'react';
import { IonListHeader, IonList, IonItem, IonLabel, IonButton, IonModal, IonHeader, IonToolbar, IonTitle, IonButtons, IonContent } from '@ionic/react'
import { Link } from 'react-router-dom';
import './ionmodal.css';
import './profile.css';
const ProfileLinks: React.FC = () => {
    const [message, setMessage] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [title, setTitle] = useState("");
    const logout = () => {
        console.log("logout");
    }

    const generatTerms = () => {
        return (
            <>
                <p>Please read this agreement carefully and make sure that you have understood it
                before using our website or mobile application namely ganpatiwala.com as the case
                may be.</p> 
                
                <p>The website or mobile application is for the purpose of connecting you with
                the seller. The said domain name Ganpatiwala.com, hereinafter termed as “platform”
                for online connecting you with the seller is in toto owned and operated by M/s.
                Innovation Ideators World (IIW), a proprietary firm with its registered office at
                243A, Ward no 14, Opp Tahsil office , Khalapur . At post Taluka: Khalapur , District :
                Raigad , Pin : 410202 , email – info@ganpatiwalla.com , customer care no. -
                8793307054
                </p>

                <p>
                Your acceptance of these terms and conditions, being an agreement, shall create a
                legal obligation on you and shall be construed as You have given your free consent
                to entered into a legal agreement with the IIW to use the said platform. By implicitly
                or expressly accepting the terms and conditions, you accepted and agreed to be
                bound by all of IIW’s policies applicable to you as amended, from time to time.
                Accessing on this platform in any manner whatsoever shall be deemed to be
                construed as acceptance of all the terms and conditions of this platform by You
                </p>

                <p>
                Offering the access on the said platform constitutes our “offer/proposal”, which shall
                be subjected to following terms and conditions, for the use of said platform by you
                </p>

                <ol>
                <li>1. ELIGIBILITY TO ENTER INTO CONTRACT -
                a) Persons who are &quot;incompetent to contract&quot; within the meaning of the Indian
                Contract Act, 1872 including un-discharged insolvents etc. are not eligible to
                enter into contract. Minor can’t enter into a contract. If you register as a
                business entity then you affirm that you have been duly authorised by the
                business entity on their behalf to accept the Terms and conditions of this
                platform and thereby you have bound the business entity to terms and
                conditions of our said platform.
                </li>
                <li>
                2. DEFINITION -
                a) “Platform’ means online interface i.e. the ganpatiwala.com in the form of any
                software including a website or part thereof and application including mobile
                application as the case may be on which goods for sale have been listed.
                b) “Intermediary” means M/s. Innovation Ideators World (IIW), which expression
                unless it be repugnant to the context or meaning thereof shall be deemed to
                mean and includes their legal representatives, successors and permitted
                assigns), who provides information technology platform to facilitate the
                transaction between User and Seller.–
                c) “Seller ” means person, firm, body corporate , who has listed the goods and
                offers the goods or services for sale on said platform
                d) “User’ means the person, firm, body corporate (which expression unless it be
                repugnant to the context or meaning thereof shall be deemed to mean and
                includes their legal representatives, successors and permitted assigns), who
                either accessed the said platform and don’t send enquiry or access the said
                platform and send the enquiry on seller in respect of the goods listed by the
                seller. .
                e) “goods” means the articles listed, promoted by the sellers for the sell on the
                said platform.
                f) “Business Day” means a day other than a Sunday or a public holiday. Public
                holiday as per policy of government of state, central.
                g) “Enquiry” means enquiry send by the User to the seller, who has listed the
                goods for sale on the said platform.
                h) “Invoice” means 1) invoice raised by the Seller on User r on whom user sent
                the enquiry and thereafter enquiry convert into order.
                i) “Intellectual property” means and refers to creation of mind, such as invention,
                literary and artistic works. Designed and symbols, names and images used in
                commerce. Trademark, patent, copyright, industrial designs, Geographical
                indication etc are the categories of Intellectual property.
                j) The term M/s. Innovation Ideators World (IIW) and User if used individually
                shall be termed as “Party”
                k) “Parties” means IIW and User shall be collectively termed as parties.
                
                l) The term “You” has been used to indicate the User and the same shall be
                interpreted as per context mentioned.
                
                This agreement is between M/s. Innovation Ideators World being
                intermediary is party of One Part and User is party of the Other part.
                </li>
                <li>
                3. The images of the goods as listed on the said platform are accurate and
                corresponds directly with the appearance. You have agreed that the actual
                visual image of the goods as listed on the said platform are only for the
                purpose of information and to get acquaint with goods, which has been listed
                for sale on the said platform.
                </li>
                <li>
                4. REGISTRATION – Upon acceptance of and agreeing to these terms and
                conditions, You being user, shall have to register yourself with the said
                platform so as to create your login id. While registering yourself, You shall
                have to provide the requisite data, information, document as sought in the
                registration form/section. You agreed to furnish accurate, genuine, current and
                complete details as may be sought for your registration as User. This
                registration is mandate for the User who wish to send the enquiry.
                
                It is your mandatory responsibility to provide your genuine, correct, current
                existing information while placing any enquiry on the Seller. It is your
                responsibility to keep your account information (data) up to date. Seller shall
                have right to authenticate your credentials and can take the decision
                accordingly.
                
                Service towards the said platform will be given to you subject to this
                agreement. We (IIW) being intermediary will use our reasonable efforts to
                make the platform’s service available 24 hours a day and 7 days except for the
                reason of maintenance with the prior notice on the said platform or the
                occurrence of Force Majeur event.
                </li>
                <li>
                5. CONSIDERATION – In order to avail the use of the said platform, you being
                the User have not to pay any quantum of money as a consideration. There are
                no charges/fees for the use of said platform at present. But IIW being
                intermediary may charge a nominal fee in Indian Rupees for browsing and
                buying on the Platform. IIW reserves the right to make or change its Fee Policy
                from time to time. In particular, IIW may at its sole discretion introduce new
                services/fees and modify some or all of the existing services/fees offered on
                the Platform. Changes to the Fee Policy shall be posted on the Platform and
                such changes shall automatically become effective immediately after they are
                posted on the Platform.
                </li>
                <li>
                6. USE OF PLATFORM
                A. Accessing, browsing or otherwise using the said platform indicates your
                acceptance to all the terms and conditions under these terms. By impliedly or
                expressly accepting these terms, you also accept and agree to be bound by
                IIW’s, being intermediary, policies ((including but not limited to privacy policy
                available at privacy policy) as amended from time to time.
                B. The said Platform is only a platform that can be utilised by you to reach a
                larger base of Sellers to send your enquiry for the goods as listed by them.
                IIW, being intermediary, only provides a platform to you for connecting with
                the Seller/s.
                C. IIW, being intermediary, shall not have any liability / accountability towards
                User.
                D. By registering yourself as a User you have given your free consent to use your
                personal information/credentials as provided by you on the said platform for
                the purpose of subject matter of said platform that your explicit free consent
                to the IIW to send your given information/data to the sender w.r.t. to your
                enquiry. At the same time, IIW, being intermediary, may use your personal
                information for themselves and/or for their subsidiaries, affiliated entities only
                for the purpose of marketing, promotion, sell, market research of any of their
                goods or services. Similarly, Seller, on whom enquiry has been sent by you,
                may also use your personal information for purpose of promotion, sell,
                
                marketing, market research of their other goods or services either carry out by
                them or their affiliated, subsidiaries, sister concern entity provided Sellers
                have obtained your free consent for the same in writing
                E. You shall use the said platform or content/data/information either as available
                on this platform or sourced through this platform only for the purpose of
                surfing, sending enquiry and not for otherwise.
                F. You will take care that your usage of said platform shall not cause any
                prejudice in any manner whatsoever or incur any claim, damages of any
                nature to the IIW, being Intermediary as well as and/or its affiliates,
                subsidiaries, agents, employees as well as to the Seller on whom you sent the
                enquiry user.
                G. We, IIW, being intermediary, in toto reserve the right to supervise, monitor
                your use of said platform so as to ensure your compliance with these terms
                and conditions and applicable laws. At the same time, We, IIW, reserve the
                right to carry out investigation for the same and to take appropriate steps,
                actions.
                H. You agreed that your will communicate with us, IIW (intermediary) through
                electronic records and you consent to receive the communication via
                electronic record. We, IIW, may communicate with You by email or any other
                mode of communication electronic or otherwise.
                I. User sending the enquiry for purchasing the goods from this platform, must
                purchase only for the end consumption and not to use the purchased goods
                for any commercial, promotional, resale or further distribution purposes.
                J. If IIW finds that user, indulging, engaging in wrongful activity causing
                prejudice, harm, damage, damages to the said platform, IIW and its affiliates,
                subsidiaries, agents, employees etc., vendor including but not limited to
                public at large, IIW reserve the right ether to suspend, terminate or close your
                account and may initiate legal action against You.
                K. You being user , shall not create any liability, claim in any manner whatsoever
                on IIW, Seller the case may be.
                L. You shall not do anything to access, acquire, copy or monitor any portion of
                the said Platform or any Content, or in any way reproduce or circumvent the
                
                navigational structure or presentation of the Platform or any Content, to
                obtain or attempt to obtain any materials, documents or information through
                any means not purposely made available through the Platform. We, IIW
                (intermediary) reserve Our right to bar any such activity.
                M. You shall not attempt to gain unauthorized access to any portion or feature of
                the said Platform, or any other systems or networks connected to the Platform
                or to any server, computer, network, or to any of the services offered on or
                through the Platform, by hacking, password &quot;mining&quot; or any other illegitimate
                means.
                N. You agree not to use any device, software or routine to interfere or attempt to
                interfere with the proper working of the said Platform or any transaction
                being conducted on the Platform, or with any other person&#39;s use of the
                Platform.
                O. You shall comply with all the terms and conditions of this platform.
                P. The said platform disclaims any responsibility for conducting any Seller’s KYC
                to whom user have sent the enquiry.
                </li>
                <li>
                7. ENQUIRY–
                A. By sending the Enquiry, you become the User, who wish to purchase the
                goods as listed by the seller.
                B. By sending the enquiry, you have given your explicit by default free consent to
                IIW to send/provide your given data/information to the Seller on whom you
                send the enquiry. At the same time, you have given your free explicit consent
                to the Seller to view your information as provided by you on the said platform.
                Seller can contact you for the enquiry placed by you. Seller shall have absolute
                authority to check your credentials so as to confirm your identity as a part of
                KYC. At the same time, you can also check the credentials of Seller.
                C. Before buying any product from seller, User should conduct their own due
                diligence of the Seller to whom they have sent an enquiry. Inclusion on
                website Ganaptiwalla.com is not an endorsement or approval from IIW for
                these sellers and their products. Information provided by vendor such as
                office location, contact number, email address, and any other related
                
                information should be confirmed directly with the respective seller.
                D. In case you find any incorrect detail about vendors/sellers, kindly inform IIW
                with documentary proof to info@ganaptiwalla.com email address for taking
                necessary action
                E. After sending the enquiry on the Seller, it shall be discretion of You and Seller
                whether to conclude the enquiry into order and thereby establish the relation
                of buyer and seller among you and Seller and to complete the transaction.
                F. For any activity right from the stage of sending of enquiry by you on seller
                and thereafter for all the discussion, negotiations, transactions as may /will
                take place between You and Seller pursuant to it, IIW (intermediary) does
                not/shall not own, owe, hold any sort of liability, claim of any nature
                whatsoever towards You and Seller. Further, if any dispute arises in respect of
                said placed enquiry, for all those disputes IIW (intermediary) shall not owe,
                hold any liability in any manner whatsoever. Disputes shall be addressed to
                and shall be by and between You and Seller.
                </li>
                <li>
                8. GRIEVANCE/DISPUTE – You have agreed that -
                A. The grievances/disputes, post to putting the enquiry with the Seller shall be
                referred by the User to the Seller only and not to the IIW
                B. Any grievance related to the functioning of this platform, shall be referred to
                the IIW (intermediary).
                Grievance officer email id: info@ganpatiwalla.com .
                Pls mention Grievance in email subject.
                Grievance officer phone number: 8793307054
                Any communication other than above mentioned methods
                (example: Whatsapp, SMS and more) will not be considered as information to
                IIW.
                </li>
                <li>
                9. OBLIGATION OF PLATFORM –
                A. IIW will endeavour to use reasonable security measures to protect against
                unauthorised access to the platform and to your data. This includes
                maintaining proper firewalls and protection systems.
                
                B. Said platform will provide reasonable technical support as it relates to using
                the said platform for the sale of goods and/or services.
                C. Platform will make reasonable efforts to limit the downtime and ensure that
                platform is available for use by you
                </li>
                <li>
                10. REVIEWS –
                A. You have acknowledged that user, may be asked to leave review and ratings
                regarding their experience on the said platform. These reviews and ratings
                may be made publicly available on the said platform and can be viewed by all
                user of the said platform.
                </li>
                <li>
                11. ASSUMPTION OF RISK –
                A. You acknowledge that the use of the said platform carries inherent risks and
                uncertainties including –
                I. Technical risk like interruption, delays or unavailability of requisite
                command due to hardware, software or network
                II. Compatibility risk like incompatibility between IIW’s/said platforms and
                Your hardware, software or network
                III. Security risk such as unauthorised access, data breaches or loss of data
                
                B. By using the said platform, you have voluntarily accepted and assumes all the
                risks associated with its use. You acknowledge that the IIW/said platform shall
                not be held liable for any damages, losses, harm arising from or related to the
                inherent risk of its use.
                
                C. You have agreed that usage of said platform by you is at your own risk. The
                IIW does not assumes responsibility or liability for any advice or other
                information given on the said platform.
                D. It is possible that other users (including unauthorized users or &quot;hackers&quot;) may
                post or transmit offensive or obscene materials on the Platform and that You
                may be involuntarily exposed to such offensive and obscene materials. It also
                is possible for others to obtain personal information about You due to your
                
                use of the Platform, and that the recipient may use such information to harass
                or injure You. We do not approve of such unauthorized uses, but by using the
                Platform You acknowledge and agree that We are not responsible for the use
                of any personal information that You publicly disclose or share with others on
                the Platform. Please carefully select the type of information that You publicly
                disclose or share with others on the Platform.
                
                E. IIW (intermediary) shall have all the rights to take necessary action and claim
                damages that may occur due to your involvement/participation in any way on
                your own or through group/s of people, intentionally or unintentionally in
                DoS/DDoS (Distributed Denial of Services).
                </li>
                <li>
                12. INTELLECTUAL PROPERTY –
                A. All the intellectual property such as trademark, copyright, designs in respect
                of the said platform i.e. ganpatiwala.com, which is either in website or mobile
                application exclusively belongs to the IIW (intermediary). IIW does not own,
                claim any right over the matter of third party, goods as listed, described by the
                Sellers,
                </li>
                <li>
                13. LIMITATION OF LIABILITY –
                In no event shall IIW (intermediary) be liable for the use of said platform by
                user for any special, direct, incidental, indirect or consequential damages of
                any kind in connection with these terms and conditions, even if IIW
                (intermediary) has been informed in advance of the possibility of such
                damages.
                </li>
                <li>
                14. INDEMNITY –
                You shall indemnify and hold harmless and keep indemnified Seller, IIW and
                its owner, licensee, affiliates, subsidiaries, group companies (as applicable) and
                their respective officers, directors, agents, and employees from any claim,
                demand, damages or actions including reasonable attorneys&#39; fees made by
                any third party or penalty imposed due to or arising out of your usage of the
                said platform, your negligence, not exercising skill, breach of these terms and
                
                conditions of said platform including privacy policy and other policies or your
                violation of any law, rules, regulations..
                
                Further, You release and indemnify IIW and/or any of its officers and
                representatives from any cost, damage, liability or other consequence of any
                of the actions of the Users, buyers of the said Platform and specifically waive
                any claims that you may have in this behalf under any applicable law.
                Notwithstanding its reasonable efforts in that behalf, IIW (intermediary)
                cannot take responsibility or control the information provided by other Users
                which is made available on the Platform. You may find other User&#39;s
                information to be offensive, harmful, inconsistent, inaccurate, or deceptive.
                Please use caution and practice safe trading when using the Platform.
                
                This clause of indemnity survives the expiry or termination of these terms and
                conditions of the said platform
                </li>
                <li>
                15. BREACH – Failure to observe the terms and conditions of this agreement, shall
                be termed as breach of this agreement and aggrieved party shall have right to
                adopt legal recourse provided party failed to resolve/rectify the breach within
                a period of 15 working days when it was first referred to them by the
                aggrieved party.
                
                Working Days: Monday to Friday. IIW will not be working in public holidays as
                declared by Centre, State, Holidays declared by local authority such as District
                collector, Commissioner or any other Government officer.
                </li>
                <li>
                16. ENTIRE AGREEMENT -
                A. This agreement embodies the entire existing/present understanding and
                agreement between the parties as to the subject matter of this agreement.
                
                B. If any provision of this agreement (whether in whole or in part) is held by a
                court, government agency or other legal authority of competent jurisdiction
                
                to be invalid, illegal or unenforceable then that provision (or part of that
                provision) shall to the extent required be deemed deleted and such invalidity,
                illegality or unenforceability shall not invalidate, void or render unenforceable
                any other portion/provision, terms and conditions of this agreement and
                rights &amp; obligations of the parties shall be construed and enforced
                accordingly.
                </li>
                <li>
                17. WAIVER -
                a) A waiver of any right under this agreement is only effective, if it is in writing,
                signed by the authorised representative of the IIW (intermediary)
                
                b) No failure or delay by a party in exercising any right or remedy under this
                agreement or by law shall constitute a waiver of that or any other right or
                remedy, nor preclude or restrict its further exercise.
                c) No waiver granted shall release You from subsequent strict compliance
                herewith
                </li>
                <li>
                18. AMENDMENT: -
                IIW at its sole discretion possess the full right to amend/update the terms
                and conditions of this agreement without prior intimation. It is your duty to
                keep update/acquainted yourself with the terms and conditions of the said
                platform from time to time.
                </li>
                <li>
                19. NO THIRD-PARTY BENEFIT –
                The provisions set forth in these terms and conditions of sale are for the sole
                benefit of the parties hereto and confer no rights, benefits or claims upon any
                person or entity not a party hereto.
                </li>
                <li>
                20. ASSIGNMENT – IIW may assign or transfer this agreement, in whole or in
                part, to any affiliated entity or in connection with the merger acquisition or
                sale of assets. You shall not assign, transfer or delegate any rights or
                obligations as under taken by you under this agreement without prior written
                
                consent of IIW
                </li>
                <li>
                21. Nothing in this agreement shall be construed as creating an agency,
                partnership, joint venture or any other form of legal association between You
                and IIW (intermediary) . This agreement does not authorised either party to
                act as an agent or representative of other party.
                </li>
                <li>
                22. FORCE MAJEURE –
                A. Neither party i.e. M/s. Innovation Idealtors world as being Intermediary nor
                You (user). shall be liable to each other in any manner or shall not be deemed
                to be in breach of these Conditions because of any delay in performing or any
                failure to perform any of each other’s obligations under this contract if the
                delay or failure is due to any cause beyond eachothers control which shall
                include, but not be limited to following –
                I. riot, war, invasion, act of foreign enemies, hostilities (whether war be declared
                or not) acts of terrorism, civil war, rebellion, revolution, insurrection of military
                or usurped power, requisition or compulsory acquisition by any governmental
                or competent authority;
                II. Acts of God (including earthquakes, flood, storm, hurricane or other physical
                natural disaster), fire, pandemic, etc.
                III. strikes or Industrial disputes at place of business, district, state or national
                level or strike or industrial disputes by labour, workman, employee either
                employed or not by the affected party, its subcontractors or its suppliers and
                which affect portion of the work.
                IV. Change in Govt. policy, Govt. circulars, orders etc. affecting the execution of
                work.
                V. Interruption or failure of electricity or telephone services, technical problem in
                said platform.
                VI. Anything which is beyond the control of parties hereto i.e. IIW (intermediary)
                and You.
                
                B. The clause of Force Majeure is also applicable in respect of transaction taken
                
                place between You and Seller on whom enquiry is sent by you..
                C. Upon completion of event of force majeure, the party who has affected by it
                shall immediately resume their obligation as agreed under this agreement.
                </li>
                <li>
                23. The subject matter for which no provision has been made herein, if occurs
                while using the said platform and acting on these terms and conditions, same
                shall be decided mutually between the parties hereto i.e. You and IIW and
                acted upon amicably.
                </li>
                <li>
                24. DISPUTE -
                a) All disputes or differences (the nature of which has been described above)
                arising between You and IIW (as Intermediary) , under this agreement shall be
                first endeavoured to settle amicably , mutually within a period of 30 days
                when it will be first referred. Failing of which such dispute or differences shall
                be referred and resolved through Arbitration in accordance with the
                provisions of Indian Arbitration &amp; Conciliation Act 1996/rules thereof as
                amended and in force during the material time. There shall be single
                arbitrator and shall be appointed by IIW. .
                b) The proceeding of the said arbitration shall be in English. The venue of
                arbitration shall be Khalapur, Pin code: 410202. The award that shall be passed
                by the arbitrator shall be final and binding on both the parties.
                c) The cost of the said arbitration shall be shared equally by both the parties to
                the arbitration.
                d) During the pendency of arbitration proceedings, the parties may continue to
                full-fill the part of their obligation and settle their dispute.
                </li>
                <li>
                25. TERM –
                A. The term of this agreement shall commence when You access or register with
                the said platform as a User as the case may be. This agreement shall remain in
                effect as long as you access the said platform OR you are registered as User
                and your registration have not been terminated/cancelled either by you (suo
                mottu) or by IIW (intermediary)
                
                B. In case of user, who have not register - for them this agreement shall deemed
                to be commenced the date when they first access the said platform.
                
                Termination of this agreement shall not mean that you being User have been
                exonerated from the wrongful act, if any, done by you.
                </li>
                <li>
                26. GOVERNING LAW &amp; JURISDICTION –
                This agreement / contracts shall be governed by &amp; construed in all respects in
                accordance with Laws of India and subject to Khalapur , Pin code : 410202
                Jurisdiction to the exclusion of others.
                This document is within the Information Technology Act, 2000 and the
                applicable rules thereunder as well as within the other applicable laws, rules,
                regulation. This document does not require any physical signature. By clicking
                the tick on the checkbox, you have deemed to be entered into this agreement
                and abide by the terms and condition as agreed under this agreement.
                </li>
                </ol>
                <p>User have completely understood the terms and conditions of the said
                platform and shall record my free consent by clicking on the consent checkbox.
                </p>
                </>
        )
    }
    const changeContent = (e) => {
        console.log(e);
        const mms = generatTerms();
        if(e == "terms")
            {
                
                setMessage(mms);
                setTitle("Terms & conditions")
            }
        else if(e == "privacy")
            {
                setMessage(mms);
                setTitle("Privacy Policy")
            }
            setIsOpen(true);
    }
    const modal = useRef<HTMLIonModalElement>(null);
    
    return (
        <>
        
            <IonList>
                <IonListHeader>
                    <IonLabel>Policies</IonLabel>
                </IonListHeader>
                <IonItem>
                    <IonLabel expand="block" onClick={() => changeContent("privacy")}>Privacy Policy</IonLabel>
                </IonItem>
                <IonItem>
                    <IonLabel expand="block" onClick={() => changeContent("terms")}>Terms & Conditions</IonLabel>
                </IonItem>
            </IonList>
            <IonList>
                <IonListHeader>
                    <IonLabel>Account</IonLabel>
                </IonListHeader>
                <IonItem>
                    <IonLabel>Logout</IonLabel>
                </IonItem>
                <IonItem>
                    <IonLabel>Delete Account</IonLabel>
                </IonItem>
            </IonList>
            <IonList>
                <IonListHeader>
                    Social Media
                </IonListHeader>
                <IonItem>
                    <div className="social-media-icons">
                    <a href="#"><img src="twitter.png" alt="Twitter" /></a>
                    <a href="#"><img src="instagram.jpeg" alt="Instagram" /></a>
                    <a href="#"><img src="facebook.jpeg" alt="Facebook" /></a>
                    <a href="#"><img src="google.png" alt="Google" /></a>
                    </div>
                </IonItem>
            </IonList>

            <IonModal isOpen={isOpen}>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>{title}</IonTitle>
                        <IonButtons slot="end">
                            <IonButton onClick={() => setIsOpen(false)}>Close</IonButton>
                        </IonButtons>
                    </IonToolbar>
                </IonHeader>
                <IonContent className="ion-padding">
                    {message}
                </IonContent>
            </IonModal>

      </>
            
                
                


                

                


            
            
        
    );
};

export default ProfileLinks
