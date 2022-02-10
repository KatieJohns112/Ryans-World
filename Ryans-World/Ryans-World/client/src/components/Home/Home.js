import React from "react";
import "./Home.css"
import logo from "./Images/logo.jpg"
import logo2 from "./Images/logo2.jpeg"
import logo3 from "./Images/logo3.jpeg"
import logo4 from "./Images/logo4.jpeg"
import logo5 from "./Images/logo5.jpeg"
import logo6 from "./Images/logo6.jpeg"
import logo7 from "./Images/logo7.jpeg"

export const Home = () => (
    <><div class="HomeAside">
        <aside>
            <p className="HomeHeader">Check out these Cool Books !!</p>
            <ul className="BookToSee">
                <li><img className="logo-logo" src={logo} alt="logo"></img> ☼ <a className="coloring_sheet" href="https://www.amazon.com/Llama-Red-Pajama-Anna-Dewdney/dp/0451474570/ref=sr_1_1?keywords=llama+llama+red+pajama&qid=1644503251&sr=8-1"> Llama Llama Red Pajama</a></li>
                <li><img className="logo-logo" src={logo2} alt="logo"></img> ☼ <a className="coloring_sheet" href="https://www.amazon.com/Hair-Love-Matthew-Cherry/dp/0525553363/ref=sr_1_1?crid=2KUE0JY6FO6S8&keywords=hair+love&qid=1644503365&sprefix=hair+love%2Caps%2C83&sr=8-1"> Hair Love</a></li>
                <li><img className="logo-logo" src={logo3} alt="logo"></img> ☼ <a className="coloring_sheet" href="https://www.amazon.com/Dragons-Love-Tacos-Adam-Rubin/dp/0803736800/ref=sr_1_1?crid=1GI36MR5913W8&keywords=dragons+love+tacos&qid=1644503465&sprefix=dragons+love+tacos%2Caps%2C83&sr=8-1"> Dragons Love Tacos</a></li>
                <li><img className="logo-logo" src={logo4} alt="logo"></img> ☼ <a className="coloring_sheet" href="https://www.amazon.com/Head-Toe-Board-Book/dp/0694013013/ref=sr_1_30?crid=LDFH12TD4109&keywords=eric+carle&qid=1644503538&sprefix=eric+carle%2Caps%2C88&sr=8-30"> From Head to Toe</a></li>
                <li><img className="logo-logo" src={logo6} alt="logo"></img> ☼ <a className="coloring_sheet" href="https://www.amazon.com/Angry-Dragon-Childrens-Preschool-Kindergarten/dp/1724136208/ref=sr_1_1_sspa?crid=1ZIAZK9EO45TZ&keywords=the+angry+dragon&qid=1644503594&sprefix=the+angry+dragon%2Caps%2C78&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVy
                PUFNRkU0SVk0UDVVRjkmZW5jcnlwdGVkSWQ9QTA5NDI1NzcyQkVVOTRLUFBNRVZMJmVuY3J5cHRlZEFkSWQ9QTA2Nzc0OTgxTU9QUzhRNVkyTEdSJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ=="> The Angry Dragon</a></li>
                <li><img className="logo-logo" src={logo5} alt="logo"></img> ☼ <a className="coloring_sheet" href="https://www.amazon.com/Corduroy-Don-Freeman/dp/0451470796/ref=sr_1_3?crid=3LC1FE9Q1WDPN&keywords=corduroy&qid=1644503644&sprefix=corduroy%2Caps%2C87&sr=8-3"> Corduroy</a></li>
                <li><img className="logo-logo" src={logo7} alt="logo"></img> ☼ <a className="coloring_sheet" href="https://www.amazon.com/Love-You-Like-No-Otter/dp/1728213746/ref=sr_1_1?crid=5ALMDZFLI3CC&keywords=i+love+you+like+no+otter&qid=1644503710&sprefix=i+love+you+like+n%2Caps%2C86&sr=8-1"> I Love You Like no Otter</a></li>
            </ul>
        </aside>
    </div>
        <div class="HomeAside2">
            <aside>
                <p className="HomeHeader">Check out these Cool Links !!</p>
                <p className="Coloring">Video Links :</p>
                <div className="MainColoring">
                    <ul className="PagesToSee">
                        <div className="extras">
                            <li> ⚡ <a className="coloring_sheet" href="https://www.youtube.com/watch?v=2sw6OhFkfXo"> Blippi meets Dinosaurs </a></li>
                            <li> ⚡ <a className="coloring_sheet" href="https://www.youtube.com/watch?v=8GbR9cXLrUM"> Elmo Read Aloud </a></li>
                            <li> ⚡ <a className="coloring_sheet" href="https://www.youtube.com/watch?v=hJwBSiLtxK8"> Full Clifford Episodes</a></li>
                            <li> ⚡ <a className="coloring_sheet" href="https://www.youtube.com/watch?v=kAo4-2UzgPo"> Be Kind Audio book</a></li>
                        </div>
                    </ul>
                </div>
                <p className="Coloring">Coloring Pages :</p>
                <div className="MainColoring">
                    <ul className="PagesToSee">
                        <div className="extras">
                            <li> 🦖 <a className="coloring_sheet" href="http://www.supercoloring.com/coloring-pages/dinosaurs"> Dinosaurs </a></li>
                            <li> 🐻<a className="coloring_sheet" href="https://www.crayola.com/featured/free-coloring-pages/"> Crayola Mystery Pages </a></li>
                            <li> 🐵 <a className="coloring_sheet" href="https://www.bestcoloringpagesforkids.com/elmo-coloring-pages.html"> Elmo </a></li>
                            <li> 🐶 <a className="coloring_sheet" href="http://www.supercoloring.com/coloring-pages/cartoons/clifford"> Clifford</a></li>
                            <li> 🐻 <a className="coloring_sheet" href="http://www.supercoloring.com/coloring-pages/cartoons/winnie-the-pooh"> Winnie the Pooh</a></li>
                        </div>
                    </ul>
                </div>
                <p className="Coloring">Toys :</p>
                <div className="MainToys">
                    <ul className="PagesToSee">
                        <div className="extras">
                            <li> ☼ <a className="coloring_sheet" href="https://www.amazon.com/Sesame-Street-Playskool-Singing-ABCs/dp/B07FKPHMPB/ref=sr_1_4?crid=RH3TO3MM8QOS&keywords=elmo+toy&qid=1644443192&sprefix=elmo+toy%2Caps%2C100&sr=8-4"> Elmo Plush </a></li>
                            <li> ☼ <a className="coloring_sheet" href="https://www.amazon.com/WISH-TREE-Dinosaur-Blanket-Birthday/dp/B099RQ3XLC/ref=sr_1_3_sspa?crid=HZ73DJDT2S1B&keywords=dinosaur%2Bblanket&qid=1644443236&sprefix=dinosaur%2Bblanket%2Caps%2C86&sr=8-3-spons&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFFN0I0OUkxMkIzV0gmZW5jcnlwdGVkSWQ9QTAwNTk4MzFSMDRUTjI2UEY5VDgmZW5jcnlwdGVkQWRJZD1BMDc4NzA3MTFCWk1UMkpYNTNOMDUmd2lkZ2V0TmFtZT1zcF9hdGYmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl&th=1"> Dinosaur Blanket </a></li>
                            <li> ☼ <a className="coloring_sheet" href="https://www.amazon.com/KITTRICH-EZ02-ADT100-12-Activity-Writing-Accessories/dp/B01KLLQKLU/ref=sr_1_11?crid=15CQPZIW8AIVJ&keywords=children+book+accessories&qid=1644443289&sprefix=children+book+acsessroies%2Caps%2C80&sr=8-11"> Interactive Book Carrier</a></li>
                            <li> ☼ <a className="coloring_sheet" href="https://www.amazon.com/Posh-Beanbags-Bean-Chair-Animal/dp/B084KNXNTV/ref=sxin_14_pa_sp_search_thematic_sspa?crid=2BIZDEDC91OFQ&cv_ct_cx=childrens%2Breading%2Bchair&keywords=childrens%2Breading%2Bchair&pd_rd_i=B084KNXNTV&pd_rd_r=03b9e00f-95f0-4a27-b5e1-dc5b890f38ea&pd_rd_w=DI9Fj&pd_rd_wg=En3EO&pf_rd_p=54809c33-80a2-46df-9591-6ca7acea08f1&pf_rd_r=B106F7JAFQGTETV87ZWM&qid=1644443466&sprefix=childrens%2Breading%2Bchair%2Caps%2C80&sr=1-1-a73d1c8c-2fd2-4f19-aa41-2df022bcb241-spons&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExNFdaS09KT0k1UE9CJmVuY3J5cHRlZElkPUEwNDM2NTA1M05EVkU3WkpRM1FYMSZlbmNyeXB0ZWRBZElkPUEwMzM0ODExMzhSMEQwN05XOUZaJndpZGdldE5hbWU9c3Bfc2VhcmNoX3RoZW1hdGljJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ&th=1"> Childrens Beanbag Chair</a></li>
                        </div>
                    </ul>
                </div>
            </aside>
        </div></>
)