import React from "react";
import Navbar from "../components/partial/Navbar";
import Footer from "../components/partial/Footer";
import { PUBLIC_PATH } from "../constant/matcher.js";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Homepage() {
  const showTime = () => {
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";

    if (h == 0) {
      h = 12;
    }

    if (h > 12) {
      h = h - 12;
      session = "PM";
    }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    var time = h + ":" + m + ":" + s + " " + session;
    // console.log(time);
    let clock_cont = document.getElementById("MyClockDisplay");
    if(clock_cont) {
      document.getElementById("MyClockDisplay").innerText = time;
      document.getElementById("MyClockDisplay").textContent = time;
    }

    setTimeout(showTime, 1000);
  };

  var mL = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const date = new Date();
  let currentDay = String(date.getDate()).padStart(2, "0");
  let currentMonth = String(date.getMonth() + 1).padStart(2, "0");
  let currentYear = date.getFullYear();
  let currentDate = `${
    mL[Number(currentMonth) - 1]
  } ${currentDay}, ${currentYear}`;

  useEffect(() => {
    showTime();
  }, []);
  return (
    <>
      <Navbar />

      <section>
        <div className="container-fluid result_sec text-center">
          <div className="row yellow_bg web_tag">
            <h2>SATTA</h2>
          </div>
          <div className="row result_update black_bg">
            <div id="MyClock" className="clockbox_style clock">
              <span id="clock_month">{currentDate}</span>{" "}
              <span id="MyClockDisplay" onLoad={showTime}></span>
            </div>
            <div className="lott_res">
              <h6 className="hintext">
                हा भाई यही आती हे सबसे पहले खबर रूको और देखो
              </h6>
              <p className="sattaname">DISAWAR</p>
              <h4
                className="sattaresult"
                style={{ margin: "0px", padding: "0px" }}
              >
                <span style={{ letterSpacing: "4px" }}>39</span>
              </h4>
            </div>
          </div>
          <div className="row lot_time_loca yellow_bg">
            <h3>DISAWAR</h3>
            <h5>5:15 AM</h5>
            <h4>
              33{" "}
              <img
                src={PUBLIC_PATH + "assets/image/arrow.gif"}
                alt="arrow"
                width="30"
              />{" "}
              39
            </h4>
          </div>
        </div>
        <div className="container-fluid text-center khaiwal_section">
          <div className="row">
            <div
              className="card-body mt-2 yellow_bg red_dot_border"
              style={{
                flex: "1 1 auto",
                minHeight: "1px",
                padding: "1.25rem",
                fontWeight: "bold",
                textAlign: "center",
                textTransform: "uppercase",
              }}
            >
              <h2>
                satta ( satta king ) updates all satta games on real time.
              </h2>
            </div>
          </div>
          <div className="row">
            <div
              className="card-body mt-2 yellow_bg red_dot_border"
              style={{
                flex: "1 1 auto",
                minHeight: "1px",
                padding: "1.25rem",
                fontWeight: "bold",
                textAlign: "center",
                textTransform: "uppercase",
              }}
            >
              <p>
                <strong>Delhi bazar satta king</strong> instant chart ke liye
                yaha <Link to="#">CLICK</Link> kare
              </p>
            </div>
          </div>
          <div className="row">
            <div
              className="card-body"
              style={{
                boxSizing: "border-box",
                flex: "1 1 auto",
                minHeight: "1px",
                padding: "1rem 0.5rem",
                border: "dashed red",
                background:
                  "linear-gradient(rgb(255, 216, 0), rgb(255, 255, 255))",
                borderRadius: "20px",
                fontWeight: "bold",
                margin: "12px 0",
              }}
            >
              <p>
                <strong>--सीधे सट्टा कंपनी का No 1 खाईवाल--</strong>
              </p>
              <p>
                <strong>♕♕&nbsp;SAHIL&nbsp;BHAI&nbsp;KHAIWAL ♕♕</strong>
              </p>
              <p>
                <strong>⏰ सदर बाजार ------------ 1:10 pm</strong>
              </p>
              <p>
                <strong>⏰ ग्वालियर --------------- 2:15 pm</strong>
              </p>
              <p>
                <strong>⏰ दिल्ली बाजार ----------- 2:55 Pm</strong>
              </p>
              <p>
                <strong>⏰ श्री गणेश --------------- 4:20Pm</strong>
              </p>
              <p>
                <strong>⏰ आगरा ----------------- 5:15 pm</strong>
              </p>
              <p>
                <strong>⏰ फरीदाबाद -------------- 5:50 pm</strong>
              </p>
              <p>
                <strong>⏰ अलवर ----------------- 7:15 pm</strong>
              </p>
              <p>
                <strong>⏰ गाज़ियाबाद ------------- 8:40 pm</strong>
              </p>
              <p>
                <strong>⏰ द्वारका ----------------- 9:50 pm</strong>
              </p>
              <p>
                <strong>⏰ गली ------------------ 11:20 pm</strong>
              </p>
              <p>
                <strong>⏰ दिसावर --------------- 1:30 Am</strong>
              </p>
              <p style={{ overflow: "hidden" }}>
                <strong>💸 Payment Option 💸</strong>
                <br />
                PAYTM//BANK TRANSFER//PHONEPAY//GOOGLE PAY =&gt;
                <strong>⏺️7777777777⏺️</strong>
                <br />
                =====================================
                <br />
                =====================================
              </p>
              <p>
                <strong>🤑 Rate list 💸</strong>
                <br />
                <strong>जोड़ी रेट 10-------960</strong>
                <br />
                <strong>हरूफ रेट 100-----960</strong>
              </p>
              <p>
                ♕♕ &nbsp;<strong>BHAI KHAIWAL &nbsp;</strong>♕♕
              </p>
              <p>
                <Link to="#">
                  <strong>Game play करने के लिये नीचे लिंक पर क्लिक करे</strong>
                </Link>
              </p>
              <p>
                <Link to="https://wa.me/+917777777777">
                  <img
                    loading="lazy"
                    src={PUBLIC_PATH + "assets/image/whatsapp_logo.png"}
                    width="200px"
                    height="69px"
                    alt="Whatsapp"
                  />
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Table Section */}
      <section>
        <div className="container-fluid">
            <div className="row">
                <article className="p-0">
                    <div className="col-md-12 nopadding" style={{ marginBottom: "20px" }}>
                        <div className="table-responsive satta_table">
                            <table className="table table-bordered">
                                <thead className="forblack">
                                    <tr>
                                        <th className="col-md-4 text-center" style={{width: '37%'}}>सट्टा का नाम</th>
                                        <th className="col-md-4 text-center">कल आया था</th>
                                        <th className="col-md-4 text-center">आज का रिज़ल्ट</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="foryellow">
                                          <Link className="gamenameeach"
                                            to="#/super-fast-sattaking-yearly-chart/sadar-bazar">sadar bazar
                                          </Link>
                                          <br />1:30 PM<br />
                                        </td>
                                        <td className="yesterday-number">
                                            <div className="special-bold">92</div>
                                        </td>
                                        <td className="today-number">
                                            <div className="special-bold">
                                                <span className="today_update">
                                                    <img src={PUBLIC_PATH+"assets/image/wait.gif"} alt='wait' />
                                                </span>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr>
                                        <td className="foryellow">
                                          <Link className="gamenameeach"
                                            to="#/super-fast-sattaking-yearly-chart/gwalior">gwalior</Link>
                                            <br /> 2:30 PM<br />
                                          </td>
                                        <td className="yesterday-number">
                                            <div className="special-bold">34</div>
                                        </td>
                                        <td className="today-number">
                                            <div className="special-bold">
                                                <span className="today_update">
                                                  <img src={PUBLIC_PATH+"assets/image/wait.gif"} alt='wait' />
                                                </span>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                                <tbody>
                                  <tr>
                                      <td className="foryellow">
                                        <Link className="gamenameeach"
                                          to="#/super-fast-sattaking-yearly-chart/delhi-bazar">delhi bazar
                                        </Link>
                                          <br />3:15 PM<br />
                                      </td>
                                      <td className="yesterday-number">
                                          <div className="special-bold">56</div>
                                      </td>
                                      <td className="today-number">
                                          <div className="special-bold">
                                              <span className="today_update">
                                                <img src={PUBLIC_PATH+"assets/image/wait.gif"} alt='wait' />
                                              </span>
                                          </div>
                                      </td>
                                  </tr>
                                </tbody>
                                <tbody>
                                    <tr>
                                        <td className="foryellow">
                                          <Link className="gamenameeach"
                                            to="#/super-fast-sattaking-yearly-chart/shri-ganesh">shri ganesh
                                          </Link>
                                          <br />4:40 PM<br />
                                        </td>
                                        <td className="yesterday-number">
                                            <div className="special-bold">63</div>
                                        </td>
                                        <td className="today-number">
                                            <div className="special-bold">
                                                <span className="today_update">
                                                  <img src={PUBLIC_PATH+"assets/image/wait.gif"} alt='wait' />
                                                </span>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr>
                                        <td className="foryellow">
                                          <Link className="gamenameeach"
                                            to="#/super-fast-sattaking-yearly-chart/shri-ganesh">shri ganesh
                                          </Link>
                                          <br />4:40 PM<br />
                                        </td>
                                        <td className="yesterday-number">
                                            <div className="special-bold">63</div>
                                        </td>
                                        <td className="today-number">
                                            <div className="special-bold">
                                                <span className="today_update">
                                                    <img src={PUBLIC_PATH+"assets/image/wait.gif"} alt='wait' />
                                                </span>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr>
                                        <td className="foryellow">
                                          <Link className="gamenameeach"
                                            to="#/super-fast-sattaking-yearly-chart/shri-ganesh">shri ganesh
                                          </Link>
                                          <br />4:40 PM<br />
                                        </td>
                                        <td className="yesterday-number">
                                            <div className="special-bold">63</div>
                                        </td>
                                        <td className="today-number">
                                            <div className="special-bold">
                                                <span className="today_update">
                                                    <img src={PUBLIC_PATH+"assets/image/wait.gif"} alt='wait' />
                                                </span>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr>
                                        <td className="foryellow">
                                          <Link className="gamenameeach"
                                            to="#/super-fast-sattaking-yearly-chart/shri-ganesh">shri ganesh
                                          </Link>
                                          <br />4:40 PM<br />
                                        </td>
                                        <td className="yesterday-number">
                                            <div className="special-bold">63</div>
                                        </td>
                                        <td className="today-number">
                                            <div className="special-bold">
                                                <span className="today_update">
                                                    <img src={PUBLIC_PATH+"assets/image/wait.gif"} alt='wait' />
                                                </span>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr>
                                        <td className="foryellow">
                                          <Link className="gamenameeach"
                                            to="#/super-fast-sattaking-yearly-chart/shri-ganesh">shri ganesh
                                          </Link>
                                          <br />4:40 PM<br />
                                        </td>
                                        <td className="yesterday-number">
                                            <div className="special-bold">63</div>
                                        </td>
                                        <td className="today-number">
                                            <div className="special-bold">
                                                <span className="today_update">
                                                    <img src={PUBLIC_PATH+"assets/image/wait.gif"} alt='wait' />
                                                </span>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr>
                                        <td className="foryellow">
                                          <Link className="gamenameeach"
                                            to="#/super-fast-sattaking-yearly-chart/shri-ganesh">shri ganesh
                                          </Link>
                                          <br />4:40 PM<br />
                                        </td>
                                        <td className="yesterday-number">
                                            <div className="special-bold">63</div>
                                        </td>
                                        <td className="today-number">
                                            <div className="special-bold">
                                                <span className="today_update">
                                                    <img src={PUBLIC_PATH+"assets/image/wait.gif"} alt='wait' />
                                                </span>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr>
                                        <td className="foryellow">
                                          <Link className="gamenameeach"
                                            to="#/super-fast-sattaking-yearly-chart/shri-ganesh">shri ganesh
                                          </Link>
                                          <br />4:40 PM<br />
                                        </td>
                                        <td className="yesterday-number">
                                            <div className="special-bold">63</div>
                                        </td>
                                        <td className="today-number">
                                            <div className="special-bold">
                                                <span className="today_update">
                                                    <img src={PUBLIC_PATH+"assets/image/wait.gif"} alt='wait' />
                                                </span>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </article>
            </div>
        </div>
      </section>
    

      {/* <!-- ======== ADVERTISE --> */}
      <section className="ads-container text-center mt-2 mb-2">
          <div className="column-ad">
              <div className="card-body card_body_ad">
                  <p><strong>🙏🏿नमस्कार साथियो 🙏🏿</strong></p>
                  <p><strong>अपनी गेम का रिजल्ट हमारी web साइट पर लगवाने के लिए संपर्क करें।&nbsp; &nbsp;</strong></p>
                  <p><strong>----BHAI ----</strong></p>
                  <p>
                    <Link to="https://wa.me/777777777">
                      <strong>
                        <img loading="lazy" src={PUBLIC_PATH+"assets/image/whatsapp_logo.png"} width="200px" height="69px" alt="Whatsapp" />
                      </strong>
                    </Link>
                  </p>
                  <p>NOTE: &nbsp; इस नंबर पर लीक गेम नही मिलता गेम लेने वाले भाई कॉल या मैसेज न करें।</p>
              </div>
          </div>
      </section>

      {/* <!-- -==YEAR wise filtered chart==- --> */}
      <section className="monthlyresultchart yearly_filtered_chart mb-2">
          <div className="container">
              <div className="row">
                  <div className="col-md-12 text-center">
                      <h5>SATTA KING RESULT CHART 2022</h5>
                  </div>
              </div>
          </div>
      </section>

      {/* <!-- FILTERED CHART --> */}
      <div className="Select_selectMainDiv__QD2cf">
          <select aria-label="satta game name" className="Select_selectTag__IzyVd">
              <option value="disawer">disawer</option>
              <option value="sadar-bazar">sadar bazar</option>
              <option value="gwalior">gwalior</option>
              <option value="delhi-bazar">delhi bazar</option>
              <option value="shri-ganesh">shri ganesh</option>
              <option value="agra">agra</option>
              <option value="faridabad">faridabad</option>
              <option value="alwar">alwar</option>
              <option value="gaziabad">gaziabad</option>
              <option value="dwarka">dwarka</option>
              <option value="gali">gali</option>
              <option value="moon-day">moon day</option>
              <option value="bhiwani-city">bhiwani city</option>
              <option value="jai-durga">jai durga</option>
              <option value="jd-super">jd super</option>
              <option value="super-delhi">super delhi</option>
              <option value="noida-night">noida night</option>
              <option value="haryana">haryana</option>
              <option value="uttar-kashi">uttar kashi</option>
              <option value="raj-shree">raj shree</option>
              <option value="nukkad">nukkad</option>
              <option value="india-market">india market</option>
              <option value="noida-bazar">noida bazar</option>
              <option value="gangotri">gangotri</option>
              <option value="karol-bagh">karol bagh</option>
              <option value="rani-bazar">rani bazar</option>
              <option value="nainital">nainital</option>
              <option value="tirupati">tirupati</option>
              <option value="daman">daman</option>
              <option value="rishikesh">rishikesh</option>
              <option value="disawer-king">disawer king</option>
              <option value="gb-night">gb night</option>
              <option value="mj-king">mj king</option>
              <option value="haryana-bazar">haryana bazar</option>
              <option value="punjab-king">punjab king</option>
              <option value="bangal">bangal</option>
              <option value="muradabad-city">muradabad city</option>
              <option value="firozabad">firozabad</option>
              <option value="patna-night">patna night</option>
              <option value="mumbai-club">mumbai club</option>
              <option value="rajasthan">rajasthan</option>
              <option value="diamond-satta">diamond satta</option>
              <option value="delhi-city">delhi city</option>
              <option value="mp-night">mp night</option>
              <option value="sikar">sikar</option>
              <option value="ajmer">ajmer</option>
              <option value="gurugram">gurugram</option>
              <option value="jaipur">jaipur</option>
              <option value="palwal">palwal</option>
              <option value="japan">japan</option>
              <option value="disawer-night">disawer night</option>
              <option value="firozshah">firozshah</option>
              <option value="super-gold">super gold</option>
              <option value="mumbai-exp">mumbai exp</option>
              <option value="up-satta">up satta</option>
              <option value="gujarat-city">gujarat city</option>
              <option value="up-bazar">up bazar</option>
          </select>
          <select aria-label="year" className="Select_selectTag__IzyVd Select_secondTag__Q9uV_">
              <option>2022</option>;
          </select>
          <button type="submit" className="Select_button__PIOQS">Check</button>
      </div>

      {/* <!-- MOnthly heading --> */}
      <section className="monthlyresultchart">
          <div className="container">
              <div className="row">
                  <div className="col-md-12 text-center">
                      <h1>JANUARY 2024 RESULT CHART</h1>
                  </div>
              </div>
          </div>
      </section>

      {/* <!-- new table chart --> */}
      <section className="newtable">
          <div className="container-fluid">
              <div className="row">
                  <div className="col-md-12 nopadding p-0">
                      <div style={{ overflowX:'auto' }} className="table-responsive marginBottom">
                          <table className="table table-bordered table-extra w-100">
                              <thead>
                                  <tr>
                                      <th className="table_chart_section_01 text-uppercase forfirtcolor date col-md-2 text-center"><strong
                                              className="fon">Date</strong></th>
                                      <th className="table_chart_section text-uppercase forfirtcolor text-center">faridabad</th>
                                      <th className="table_chart_section text-uppercase forfirtcolor text-center">gaziabad</th>
                                      <th className="table_chart_section text-uppercase forfirtcolor text-center">gali</th>
                                      <th className="table_chart_section text-uppercase forfirtcolor text-center">disawer</th>
                                  </tr>
                              </thead>
                              <tbody>
                                  <tr>
                                      <td className="forfirtcolor text-center"><span className="fon">01-01</span></td>
                                      <td><span className="table_chart_section_02">57</span></td>
                                      <td><span className="table_chart_section_02">68</span></td>
                                      <td><span className="table_chart_section_02">27</span></td>
                                      <td><span className="table_chart_section_02">-</span></td>
                                  </tr>
                                  <tr>
                                      <td className="forfirtcolor text-center"><span className="fon">02-01</span></td>
                                      <td><span className="table_chart_section_02">40</span></td>
                                      <td><span className="table_chart_section_02">10</span></td>
                                      <td><span className="table_chart_section_02">10</span></td>
                                      <td><span className="table_chart_section_02">62</span></td>
                                  </tr>
                                  <tr>
                                      <td className="forfirtcolor text-center"><span className="fon">03-01</span></td>
                                      <td><span className="table_chart_section_02">70</span></td>
                                      <td><span className="table_chart_section_02">06</span></td>
                                      <td><span className="table_chart_section_02">10</span></td>
                                      <td><span className="table_chart_section_02">32</span></td>
                                  </tr>
                                  <tr>
                                      <td className="forfirtcolor text-center"><span className="fon">04-01</span></td>
                                      <td><span className="table_chart_section_02">18</span></td>
                                      <td><span className="table_chart_section_02">62</span></td>
                                      <td><span className="table_chart_section_02">03</span></td>
                                      <td><span className="table_chart_section_02">03</span></td>
                                  </tr>
                                  <tr>
                                      <td className="forfirtcolor text-center"><span className="fon">05-01</span></td>
                                      <td><span className="table_chart_section_02">41</span></td>
                                      <td><span className="table_chart_section_02">15</span></td>
                                      <td><span className="table_chart_section_02">36</span></td>
                                      <td><span className="table_chart_section_02">29</span></td>
                                  </tr>
                                  <tr>
                                      <td className="forfirtcolor text-center"><span className="fon">06-01</span></td>
                                      <td><span className="table_chart_section_02">90</span></td>
                                      <td><span className="table_chart_section_02">94</span></td>
                                      <td><span className="table_chart_section_02">78</span></td>
                                      <td><span className="table_chart_section_02">53</span></td>
                                  </tr>
                                  <tr>
                                      <td className="forfirtcolor text-center"><span className="fon">07-01</span></td>
                                      <td><span className="table_chart_section_02">20</span></td>
                                      <td><span className="table_chart_section_02">02</span></td>
                                      <td><span className="table_chart_section_02">80</span></td>
                                      <td><span className="table_chart_section_02">29</span></td>
                                  </tr>
                                  <tr>
                                      <td className="forfirtcolor text-center"><span className="fon">08-01</span></td>
                                      <td><span className="table_chart_section_02">39</span></td>
                                      <td><span className="table_chart_section_02">84</span></td>
                                      <td><span className="table_chart_section_02">06</span></td>
                                      <td><span className="table_chart_section_02">73</span></td>
                                  </tr>
                                  <tr>
                                      <td className="forfirtcolor text-center"><span className="fon">09-01</span></td>
                                      <td><span className="table_chart_section_02">51</span></td>
                                      <td><span className="table_chart_section_02">65</span></td>
                                      <td><span className="table_chart_section_02">81</span></td>
                                      <td><span className="table_chart_section_02">70</span></td>
                                  </tr>
                                  <tr>
                                      <td className="forfirtcolor text-center"><span className="fon">10-01</span></td>
                                      <td><span className="table_chart_section_02">22</span></td>
                                      <td><span className="table_chart_section_02">90</span></td>
                                      <td><span className="table_chart_section_02">65</span></td>
                                      <td><span className="table_chart_section_02">53</span></td>
                                  </tr>
                                  <tr>
                                      <td className="forfirtcolor text-center"><span className="fon">11-01</span></td>
                                      <td><span className="table_chart_section_02">99</span></td>
                                      <td><span className="table_chart_section_02">34</span></td>
                                      <td><span className="table_chart_section_02">14</span></td>
                                      <td><span className="table_chart_section_02">15</span></td>
                                  </tr>
                                  <tr>
                                      <td className="forfirtcolor text-center"><span className="fon">12-01</span></td>
                                      <td><span className="table_chart_section_02">33</span></td>
                                      <td><span className="table_chart_section_02">16</span></td>
                                      <td><span className="table_chart_section_02">36</span></td>
                                      <td><span className="table_chart_section_02">16</span></td>
                                  </tr>
                                  <tr>
                                      <td className="forfirtcolor text-center"><span className="fon">13-01</span></td>
                                      <td><span className="table_chart_section_02">32</span></td>
                                      <td><span className="table_chart_section_02">43</span></td>
                                      <td><span className="table_chart_section_02">37</span></td>
                                      <td><span className="table_chart_section_02">45</span></td>
                                  </tr>
                                  <tr>
                                      <td className="forfirtcolor text-center"><span className="fon">14-01</span></td>
                                      <td><span className="table_chart_section_02">95</span></td>
                                      <td><span className="table_chart_section_02">98</span></td>
                                      <td><span className="table_chart_section_02">56</span></td>
                                      <td><span className="table_chart_section_02">10</span></td>
                                  </tr>
                                  <tr>
                                      <td className="forfirtcolor text-center"><span className="fon">15-01</span></td>
                                      <td><span className="table_chart_section_02">95</span></td>
                                      <td><span className="table_chart_section_02">37</span></td>
                                      <td><span className="table_chart_section_02">94</span></td>
                                      <td><span className="table_chart_section_02">27</span></td>
                                  </tr>
                                  <tr>
                                      <td className="forfirtcolor text-center"><span className="fon">16-01</span></td>
                                      <td><span className="table_chart_section_02">79</span></td>
                                      <td><span className="table_chart_section_02">60</span></td>
                                      <td><span className="table_chart_section_02">51</span></td>
                                      <td><span className="table_chart_section_02">90</span></td>
                                  </tr>
                                  <tr>
                                      <td className="forfirtcolor text-center"><span className="fon">17-01</span></td>
                                      <td><span className="table_chart_section_02">01</span></td>
                                      <td><span className="table_chart_section_02">87</span></td>
                                      <td><span className="table_chart_section_02">68</span></td>
                                      <td><span className="table_chart_section_02">84</span></td>
                                  </tr>
                                  <tr>
                                      <td className="forfirtcolor text-center"><span className="fon">18-01</span></td>
                                      <td><span className="table_chart_section_02">57</span></td>
                                      <td><span className="table_chart_section_02">19</span></td>
                                      <td><span className="table_chart_section_02">64</span></td>
                                      <td><span className="table_chart_section_02">33</span></td>
                                  </tr>
                                  <tr>
                                      <td className="forfirtcolor text-center"><span className="fon">19-01</span></td>
                                      <td><span className="table_chart_section_02">-</span></td>
                                      <td><span className="table_chart_section_02">-</span></td>
                                      <td><span className="table_chart_section_02">-</span></td>
                                      <td><span className="table_chart_section_02">39</span></td>
                                  </tr>
                              </tbody>
                          </table>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* <!-- == ABOUT== --> */}
    <section className="about">
        <div className="monthlyresultchart">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h5>What is Satta ?</h5>
                    </div>
                </div>
            </div>
        </div>
        <h6 className="forChart">Satta.game is a web platform which provides real time results for different kind of satta
            king games results . Previously satta king results were broadcasted by people to people. Now in social media
            era
            , Satta.game is a place where thousands of satta king players visits Satta web portal everyday which made
            it popular platform among satta players.</h6>

        <div className="monthlyresultchart">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h5>What games results are shown on SATTA web portal ?</h5>
                    </div>
                </div>
            </div>
        </div>
        <h6 className="forChart">Satta.game is an active web portal which shows almost every satta king games , Also
            portal updates these games results as soon as they published. Satta have games which are popular i.e
            disawer satta , delhi bazar satta , sadar bazar satta , gali satta , gwalior satta , shree ganesh satta.
            These are the famous games among satta players. apart from these games SATTA have regional games which
            results are also published on Satta web portal. One thing to keep in mind that Satta.game does not
            encourage or involve in any kind of satta king activites. It is a informational web portal for those who
            looking for reliable and updated satta king games results</h6>
    </section>

    {/* <!-- ===FAQs=== --> */}
    <section id="faqs_sec">
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 p-0">
                    <h2 className="faq">Frequently Asked Questions</h2>
                </div>
            </div>
            <div className="row justify-content-center mt-2">
                <div className="col-md-6 p-0">
                    <div className="accordion accordion-flush" id="accordionFlushExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingOne">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseOne" aria-expanded="false"
                                    aria-controls="flush-collapseOne">
                                    <span className="d-block">sadar bazar timing kya hai ?</span>
                                    <i className="fas d-block fa-chevron-right"></i>
                                </button>
                            </h2>
                            <div id="flush-collapseOne" className="accordion-collapse collapse"
                                aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">sadar bazar satta king ki timing 1:30 PM ki hai .</div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseTwo" aria-expanded="false"
                                    aria-controls="flush-collapseTwo">
                                    Which website shows sadar bazar satta king result on real time ?
                                    <i className="fas d-block fa-chevron-right"></i>
                                </button>
                            </h2>
                            <div id="flush-collapseTwo" className="accordion-collapse collapse"
                                aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">Satta publishes sadar bazar satta king on real time without
                                    fail for satta players from long time.</div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseThree" aria-expanded="false"
                                    aria-controls="flush-collapseThree">
                                    How to find dl satta 2023 chart up to date ?
                                    <i className="fas d-block fa-chevron-right"></i>
                                </button>
                            </h2>
                            <div id="flush-collapseThree" className="accordion-collapse collapse"
                                aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">updated dl satta 2023 chart till today is available on Satta
                                    website's chart section.</div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-heading4">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapse4" aria-expanded="false"
                                    aria-controls="flush-collapse4">
                                    <span className="d-block">sadar bazar timing kya hai ?</span>
                                    <i className="fas d-block fa-chevron-right"></i>
                                </button>
                            </h2>
                            <div id="flush-collapse4" className="accordion-collapse collapse"
                                aria-labelledby="flush-heading4" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">sadar bazar satta king ki timing 1:30 PM ki hai .</div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-heading5">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapse5" aria-expanded="false"
                                    aria-controls="flush-collapse5">
                                    Which website shows sadar bazar satta king result on real time ?
                                    <i className="fas d-block fa-chevron-right"></i>
                                </button>
                            </h2>
                            <div id="flush-collapse5" className="accordion-collapse collapse"
                                aria-labelledby="flush-heading5" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">Satta publishes sadar bazar satta king on real time without
                                    fail for satta players from long time.</div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-heading6">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapse6" aria-expanded="false"
                                    aria-controls="flush-collapse6">
                                    How to find dl satta 2023 chart up to date ?
                                    <i className="fas d-block fa-chevron-right"></i>
                                </button>
                            </h2>
                            <div id="flush-collapse6" className="accordion-collapse collapse"
                                aria-labelledby="flush-heading6" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">updated dl satta 2023 chart till today is available on Satta
                                    website's chart section.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* <!-- news sectin --> */}
    <section id="news_section">
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 p-0">
                    <h2 className="yellow-one">Fastest Satta King News</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-12 p-0">
                    <section className="Thumbnail_section__p9qmo">
                        <div className="Thumbnail_container__E62Ic">
                            <div className="Thumbnail_grid__RQb0r">
                                <Link className="Thumbnail_link__kF8ly"
                                  to="#/king-satta-latest-news/exploring-delhi-bazar-satta-king-a-risky-game-or-quick-fortune">
                                    <div>
                                        <img className="w-100" alt="" aria-hidden="true" src={PUBLIC_PATH+"assets/image/newsImg.jpg"} />
                                    </div>
                                    <div className="Thumbnail_mainDiv__FPM0n">
                                        <h2 className="Thumbnail_heading__mwZx2">Exploring Delhi Bazar Satta King: A Risky
                                            Game or Quick Fortune?</h2><span className="Thumbnail_date__cEluq">Posted on
                                            Nov 30</span>
                                        <div className="Thumbnail_tagsDiv__UEOii mt-1">
                                            <div className="Thumbnail_tags__NDR7P">#delhibazarsattaking</div>
                                            <div className="Thumbnail_tags__NDR7P">#delhibazarkaresult</div>
                                            <div className="Thumbnail_tags__NDR7P">#a7satta</div>
                                            <div className="Thumbnail_tags__NDR7P">#sattaking786</div>
                                        </div>
                                    </div>
                                </Link>
                                <Link className="Thumbnail_link__kF8ly"
                                    to="#/king-satta-latest-news/exploring-delhi-bazar-satta-king-a-risky-game-or-quick-fortune">
                                    <div>
                                        <img className="w-100" alt="" aria-hidden="true" src={PUBLIC_PATH+"assets/image/newsImg.jpg"} />
                                    </div>
                                    <div className="Thumbnail_mainDiv__FPM0n">
                                        <h2 className="Thumbnail_heading__mwZx2">Exploring Delhi Bazar Satta King: A Risky
                                            Game or Quick Fortune?</h2><span className="Thumbnail_date__cEluq">Posted on
                                            Nov 30</span>
                                        <div className="Thumbnail_tagsDiv__UEOii mt-1">
                                            <div className="Thumbnail_tags__NDR7P">#delhibazarsattaking</div>
                                            <div className="Thumbnail_tags__NDR7P">#delhibazarkaresult</div>
                                            <div className="Thumbnail_tags__NDR7P">#a7satta</div>
                                            <div className="Thumbnail_tags__NDR7P">#sattaking786</div>
                                        </div>
                                    </div>
                                </Link>
                                <Link className="Thumbnail_link__kF8ly"
                                    to="#/king-satta-latest-news/exploring-delhi-bazar-satta-king-a-risky-game-or-quick-fortune">
                                    <div>
                                        <img className="w-100" alt="" aria-hidden="true" src={PUBLIC_PATH+"assets/image/newsImg.jpg"} />
                                    </div>
                                    <div className="Thumbnail_mainDiv__FPM0n">
                                        <h2 className="Thumbnail_heading__mwZx2">Exploring Delhi Bazar Satta King: A Risky
                                            Game or Quick Fortune?</h2><span className="Thumbnail_date__cEluq">Posted on
                                            Nov 30</span>
                                        <div className="Thumbnail_tagsDiv__UEOii mt-1">
                                            <div className="Thumbnail_tags__NDR7P">#delhibazarsattaking</div>
                                            <div className="Thumbnail_tags__NDR7P">#delhibazarkaresult</div>
                                            <div className="Thumbnail_tags__NDR7P">#a7satta</div>
                                            <div className="Thumbnail_tags__NDR7P">#sattaking786</div>
                                        </div>
                                    </div>
                                </Link>
                                <Link className="Thumbnail_link__kF8ly"
                                    to="#/king-satta-latest-news/exploring-delhi-bazar-satta-king-a-risky-game-or-quick-fortune">
                                    <div>
                                        <img className="w-100" alt="" aria-hidden="true" src={PUBLIC_PATH+"assets/image/newsImg.jpg"} />
                                    </div>
                                    <div className="Thumbnail_mainDiv__FPM0n">
                                        <h2 className="Thumbnail_heading__mwZx2">Exploring Delhi Bazar Satta King: A Risky
                                            Game or Quick Fortune?</h2><span className="Thumbnail_date__cEluq">Posted on
                                            Nov 30</span>
                                        <div className="Thumbnail_tagsDiv__UEOii mt-1">
                                            <div className="Thumbnail_tags__NDR7P">#delhibazarsattaking</div>
                                            <div className="Thumbnail_tags__NDR7P">#delhibazarkaresult</div>
                                            <div className="Thumbnail_tags__NDR7P">#a7satta</div>
                                            <div className="Thumbnail_tags__NDR7P">#sattaking786</div>
                                        </div>
                                    </div>
                                </Link>
                                <Link className="Thumbnail_link__kF8ly"
                                    to="#/king-satta-latest-news/exploring-delhi-bazar-satta-king-a-risky-game-or-quick-fortune">
                                    <div>
                                        <img className="w-100" alt="" aria-hidden="true" src={PUBLIC_PATH+"assets/image/newsImg.jpg"} />
                                    </div>
                                    <div className="Thumbnail_mainDiv__FPM0n">
                                        <h2 className="Thumbnail_heading__mwZx2">Exploring Delhi Bazar Satta King: A Risky
                                            Game or Quick Fortune?</h2><span className="Thumbnail_date__cEluq">Posted on
                                            Nov 30</span>
                                        <div className="Thumbnail_tagsDiv__UEOii mt-1">
                                            <div className="Thumbnail_tags__NDR7P">#delhibazarsattaking</div>
                                            <div className="Thumbnail_tags__NDR7P">#delhibazarkaresult</div>
                                            <div className="Thumbnail_tags__NDR7P">#a7satta</div>
                                            <div className="Thumbnail_tags__NDR7P">#sattaking786</div>
                                        </div>
                                    </div>
                                </Link>
                                <Link className="Thumbnail_link__kF8ly"
                                    to="#/king-satta-latest-news/exploring-delhi-bazar-satta-king-a-risky-game-or-quick-fortune">
                                    <div>
                                        <img className="w-100" alt="" aria-hidden="true" src={PUBLIC_PATH+"assets/image/newsImg.jpg"} />
                                    </div>
                                    <div className="Thumbnail_mainDiv__FPM0n">
                                        <h2 className="Thumbnail_heading__mwZx2">Exploring Delhi Bazar Satta King: A Risky
                                            Game or Quick Fortune?</h2><span className="Thumbnail_date__cEluq">Posted on
                                            Nov 30</span>
                                        <div className="Thumbnail_tagsDiv__UEOii mt-1">
                                            <div className="Thumbnail_tags__NDR7P">#delhibazarsattaking</div>
                                            <div className="Thumbnail_tags__NDR7P">#delhibazarkaresult</div>
                                            <div className="Thumbnail_tags__NDR7P">#a7satta</div>
                                            <div className="Thumbnail_tags__NDR7P">#sattaking786</div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </section>


      <Footer />
    </>
  );
}

export default Homepage;
